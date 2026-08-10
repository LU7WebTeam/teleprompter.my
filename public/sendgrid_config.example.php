<?php
/**
 * EXAMPLE SendGrid config — safe to commit.
 *
 * To configure the live quote form:
 *   1. Copy this file to `sendgrid_config.php` (in the SAME directory as quote.php).
 *   2. Paste your real SendGrid SMTP API key and sender details in that copy.
 *   3. Upload `sendgrid_config.php` to the server via FTP / cPanel Web UI.
 *
 * NEVER commit the real `sendgrid_config.php` (it is git-ignored).
 * Keep this example file with placeholders only.
 *
 * PHPMailer is loaded from the path below — upload the PHPMailer `src/` classes
 * to that directory on the server after deploy (no Composer needed).
 */

// SendGrid SMTP API key (starts with "SG."). REQUIRED.
$SENDGRID_API_KEY = 'PASTE_YOUR_SENDGRID_SMTP_API_KEY_HERE';

// Admin address that receives quote requests.
$ADMIN_EMAIL  = 'info@teleprompter.my';

// Verified sender used in the From header. Domain must be verified in SendGrid.
$SENDER_EMAIL = 'info@teleprompter.my';
$SENDER_NAME  = 'TelePrompter.my';

// WhatsApp number used for the pre-filled chat (digits only, int'l format).
$WHATSAPP_NUMBER = '601133078724';

// Path to the uploaded PHPMailer source (relative to this directory).
$PHPMailerAutoload = __DIR__ . '/vendor/phpmailer/PHPMailer/src/PHPMailer.php';
