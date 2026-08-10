<?php
/**
 * Quote request handler — TelePrompter.my
 *
 * Flow:
 *   1. Reads the JSON request body from the contact/quote form.
 *   2. Validates required fields + rejects submissions where the honeypot is filled.
 *   3. Sends a quote email to the admin AND a copy to the customer
 *      using PHPMailer + SendGrid SMTP.
 *   4. Returns JSON for inline form feedback (no page reload).
 *
 * SECRETS / MANUAL SETUP (never committed to git):
 *   - Copy `sendgrid_config.example.php` to `sendgrid_config.php` on the server
 *     and paste your SendGrid SMTP API key + sender/admin details.
 *     The example file is safe to commit; the real config must NOT be committed.
 *   - Upload the PHPMailer `src/` classes so that PHPMailer.php is reachable at
 *     the path in $PHPMailerAutoload below (default: ./vendor/phpmailer/PHPMailer/src/PHPMailer.php).
 *     No Composer is required on cPanel.
 */

// ---------------------------------------------------------------------------
// Per-site configuration (admin email + SendGrid). Edit sendgrid_config.php
// on the SERVER only — never commit the real values.
// ---------------------------------------------------------------------------
$configFile = __DIR__ . '/sendgrid_config.php';
if (file_exists($configFile)) {
    require $configFile;
} else {
    $SENDGRID_API_KEY = getenv('SENDGRID_API_KEY') ?: '';
    $ADMIN_EMAIL      = 'info@teleprompter.my';
    $SENDER_EMAIL     = 'info@teleprompter.my';
    $SENDER_NAME      = 'TelePrompter.my';
    $WHATSAPP_NUMBER  = '601133078724';
    $PHPMailerAutoload = __DIR__ . '/vendor/phpmailer/PHPMailer/src/PHPMailer.php';
}

// ---------------------------------------------------------------------------
// PHPMailer (uploaded manually via FTP / Web UI after deploy)
// ---------------------------------------------------------------------------
if (!isset($PHPMailerAutoload)) {
    $PHPMailerAutoload = __DIR__ . '/vendor/phpmailer/PHPMailer/src/PHPMailer.php';
}
if (!file_exists($PHPMailerAutoload)) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Server email component not installed yet.']);
    exit;
}
$phpmailerDir = dirname($PHPMailerAutoload);
require $phpmailerDir . '/Exception.php';
require $phpmailerDir . '/PHPMailer.php';
require $phpmailerDir . '/SMTP.php';

header('Content-Type: application/json');
$raw = file_get_contents('php://input');
$request = json_decode($raw, true);

// Support form-encoded posts as a fallback
if (!is_array($request)) {
    $request = $_POST;
}
if (!is_array($request)) {
    $request = [];
}

// ---------------------------------------------------------------------------
// Honeypot spam trap — a filled value means a bot. Silently pretend success.
// ---------------------------------------------------------------------------
$honeypot = isset($request['website']) ? trim((string) $request['website']) : '';
if ($honeypot !== '') {
    echo json_encode(['success' => true, 'message' => 'Thank you — your request has been received.']);
    exit;
}

// ---------------------------------------------------------------------------
// Clean + validate
// ---------------------------------------------------------------------------
function clean($v) {
    return isset($v) ? trim((string) $v) : '';
}

$name      = clean($request['name'] ?? '');
$email     = clean($request['email'] ?? '');
$dateStart = clean($request['date_start'] ?? '');
$dateEnd   = clean($request['date_end'] ?? '');
$location  = clean($request['location'] ?? '');
$state     = clean($request['state'] ?? '');
$message   = clean($request['message'] ?? '');
$mode      = clean($request['mode'] ?? 'package');
$total     = isset($request['total']) ? (float) $request['total'] : 0;

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please provide a valid name and email.']);
    exit;
}

// Items
$items = isset($request['items']) && is_array($request['items']) ? $request['items'] : [];
$itemLines = [];
$computedTotal = 0;
foreach ($items as $it) {
    $itName  = clean($it['name'] ?? '');
    $itQty   = (int) ($it['qty'] ?? 1);
    $itPrice = (float) ($it['price'] ?? 0);
    if ($itName === '') continue;
    $qty    = max(1, min(5, $itQty));
    $line   = $itPrice * $qty;
    $computedTotal += $line;
    $itemLines[] = sprintf('- %s x %d @ RM %s/day = RM %s',
        $itName,
        $qty,
        number_format($itPrice, 0),
        number_format($line, 0)
    );
}
if (empty($itemLines)) {
    $itemLines[] = '- (none selected)';
}

$dateRange = ($dateStart !== '' && $dateEnd !== '')
    ? $dateStart . ' to ' . $dateEnd
    : 'Not specified';

$totalDisplay = number_format($total > 0 ? $total : $computedTotal, 0);

$body = "QUOTE REQUEST — " . ($SENDER_NAME ?? 'TelePrompter.my') . "\n"
      . "==================================\n"
      . "Name: " . $name . "\n"
      . "Email: " . $email . "\n"
      . "Event dates: " . $dateRange . "\n"
      . "Location: " . $location . ($state !== '' ? ', ' . $state : '') . "\n"
      . "Selection mode: " . $mode . "\n\n"
      . "Selection:\n" . implode("\n", $itemLines) . "\n\n"
      . "Estimated total: RM " . $totalDisplay . "\n\n"
      . ($message !== '' ? "Message:\n" . $message . "\n\n" : "\n")
      . "—\nSent from the TelePrompter.my quote form.";

// ---------------------------------------------------------------------------
// Send via PHPMailer + SendGrid SMTP
// ---------------------------------------------------------------------------
function sendQuote($toEmail, $subject, $bodyText)
{
    global $SENDGRID_API_KEY, $SENDER_EMAIL, $SENDER_NAME;
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.sendgrid.net';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'apikey';
        $mail->Password   = $SENDGRID_API_KEY;
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;
        $mail->CharSet    = 'UTF-8';

        $mail->setFrom($SENDER_EMAIL, $SENDER_NAME ?? '');
        $mail->addAddress($toEmail);
        $mail->Subject = $subject;
        $mail->Body    = $bodyText;
        $mail->WordWrap = 120;

        $mail->send();
        return [true, null];
    } catch (Exception $e) {
        return [false, $e->getMessage()];
    }
}

$adminSubject = "New quote request from {$name}";
$userSubject  = "Your TelePrompter.my quote request";

$okAdmin = true; $adminErr = '';
if (!empty($SENDGRID_API_KEY)) {
    list($okAdmin, $adminErr) = sendQuote($ADMIN_EMAIL, $adminSubject, $body);
} else {
    $okAdmin = false;
    $adminErr = 'Email service not configured (missing API key).';
}

$okUser = true; $userErr = '';
if (!empty($SENDGRID_API_KEY)) {
    $userBody = "Hi {$name},\n\nThanks for your quote request. Here is a copy of what you submitted:\n\n" . $body;
    $userBody .= "\n\nOur team will confirm availability and final pricing shortly.";
    list($okUser, $userErr) = sendQuote($email, $userSubject, $userBody);
} else {
    $okUser = false;
    $userErr = 'Email service not configured (missing API key).';
}

if ($okAdmin && $okUser) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you! Your quote request has been sent — expect a reply within one business day.']);
} elseif ($okAdmin) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you! Your request was received.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Could not send your request. Please try again or contact us directly.', 'debug' => $adminErr]);
}
