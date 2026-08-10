# TelePrompter.my

Static marketing site for a teleprompter rental business, built with Astro and deployed to cPanel via GitHub Actions.

## Tech Stack

- **Framework:** Astro (static output)
- **Styling:** Global CSS with design tokens (`src/styles/tokens.css`)
- **Backend:** PHP on cPanel (quote form email via PHPMailer + SendGrid SMTP)
- **Deployment:** GitHub Actions → FTP to cPanel
- **Docs:** See [`docs/PRD.md`](docs/PRD.md) for the full reusable blueprint

## Project Structure

```text
/
├── public/
│   ├── assets/              # images
│   ├── quote.php            # email handler (PHPMailer + SendGrid)
│   └── sendgrid_config.example.php   # safe placeholder config
├── src/
│   ├── components/          # Astro components
│   ├── data/                # products.ts, site.ts, features.ts
│   ├── layouts/
│   ├── pages/               # index.astro + product routes
│   └── styles/              # tokens.css
├── docs/PRD.md             # reusable PRD blueprint
└── .github/workflows/deploy.yml
```

## Commands

| Command             | Action                                      |
| :------------------ | :------------------------------------------ |
| `npm install`       | Installs dependencies                       |
| `npm run dev`       | Starts dev server at `localhost:4321`       |
| `npm run build`     | Builds production site to `./dist/`         |
| `npm run preview`   | Previews the build locally                  |

## Deployment

Pushing to `main` triggers a GitHub Action that builds the site and deploys via FTP to cPanel (`teleprompter.my/preview/`).

**Required GitHub secrets:** `CPANEL_FTP_SERVER`, `CPANEL_FTP_USERNAME`, `CPANEL_FTP_PASSWORD`

## Quote Form Email Setup (SendGrid + PHPMailer)

The quote form (`src/components/Contact.astro`) sends requests via `public/quote.php`, which uses **PHPMailer + SendGrid SMTP** to email the admin and a copy to the customer. Two files must be uploaded to the server **manually** — they are NOT in the repo (secrets stay out of git).

### 1. SendGrid dashboard

- Verify your sending domain (`teleprompter.my`) in SendGrid.
- Create an **SMTP API key** (starts with `SG.`) at: Email API → Integration → SMTP.

### 2. Upload `sendgrid_config.php` to the server

Copy `sendgrid_config.example.php` → rename to `sendgrid_config.php`, fill in your real values, and upload it via FTP / cPanel File Manager to the same folder as `quote.php` (typically `teleprompter.my/preview/`):

```php
$SENDGRID_API_KEY = 'SG.your_real_key_here';
$ADMIN_EMAIL  = 'info@teleprompter.my';
$SENDER_EMAIL = 'info@teleprompter.my';
$SENDER_NAME  = 'TelePrompter.my';
$WHATSAPP_NUMBER = '601133078724';
```

> `sendgrid_config.php` is git-ignored and will never be committed. Do NOT put real keys in `sendgrid_config.example.php`.

### 3. Upload PHPMailer source to the server

Download [PHPMailer](https://github.com/PHPMailer/PHPMailer/releases) and upload so the structure is:

```text
preview/
├── quote.php
├── sendgrid_config.php
└── vendor/
    └── phpmailer/
        └── PHPMailer/
            └── src/
                ├── PHPMailer.php
                ├── SMTP.php
                └── Exception.php
```

No Composer needed — just upload those 3 files via FTP.

### 4. Test

1. Fill out the quote form on your live site, choose **Email**, and submit.
2. You should receive:
   - A quote email to `info@teleprompter.my` (admin copy)
   - A confirmation copy to the email address you entered (customer copy)
3. Check the spam/promotions folder the first time and mark "not spam" to train deliverability.

### Troubleshooting

- **PHP version:** cPanel → MultiPHP Manager → ensure PHP 8.0+ (PHPMailer requires it).
- **From address:** must match a verified SendGrid sender/domain, otherwise emails are silently dropped.
- **Port 587 blocked:** if cPanel blocks outbound SMTP on port 587, ask your host to unblock it.
- **Local testing:** use `php -l quote.php` to lint the PHP file. Use a dummy empty `$SENDGRID_API_KEY` in a local `sendgrid_config.php` to test validation/honeypot paths without sending real email.

## WhatsApp Delivery

The quote form also supports a **WhatsApp** option. When selected, it opens a pre-filled `wa.me` chat with the full quote — the customer reviews and taps send. No backend or API needed.

## License

© 2026 TelePrompter.my by Video Production KL Sdn Bhd | All Rights Reserved.
