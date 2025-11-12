import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Rate limiting store (in-memory, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Rate limiting configuration - STRICT: 1 bericht per 5 minuten om spam te voorkomen
const RATE_LIMIT_WINDOW = 5 * 60 * 1000 // 5 minutes
const MAX_REQUESTS = 1 // 1 request per window

// Input validation
function validateInput(data: any) {
  const errors: string[] = []

  if (!data.name || data.name.trim().length < 2 || data.name.length > 100) {
    errors.push('Naam moet tussen 2 en 100 karakters zijn')
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Ongeldig email adres')
  }

  if (!data.subject || data.subject.trim().length < 2 || data.subject.length > 200) {
    errors.push('Onderwerp moet tussen 2 en 200 karakters zijn')
  }

  if (!data.message || data.message.trim().length < 10 || data.message.length > 5000) {
    errors.push('Bericht moet tussen 10 en 5000 karakters zijn')
  }

  return errors
}

// Sanitize input to prevent injection
function sanitizeInput(str: string): string {
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
}

// Check rate limit
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userLimit = rateLimitMap.get(ip)

  if (!userLimit || now > userLimit.resetTime) {
    // New window
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    })
    return true
  }

  if (userLimit.count >= MAX_REQUESTS) {
    return false
  }

  userLimit.count++
  return true
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now > data.resetTime) {
      rateLimitMap.delete(ip)
    }
  }
}, RATE_LIMIT_WINDOW)

// Admin notification email template
function getAdminEmailTemplate(data: { name: string; email: string; subject: string; message: string }): string {
  return `
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nieuw Contactformulier Bericht</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Ubuntu', 'Barlow', Arial, sans-serif; background-color: #f2f2f2;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f2f2f2; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                Nieuw Contact Bericht
              </h1>
              <p style="margin: 10px 0 0 0; color: #facc15; font-size: 16px;">
                U heeft een nieuwe aanvraag ontvangen
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 25px 0; color: #111111; font-size: 16px; line-height: 1.6;">
                Er is een nieuw bericht binnengekomen via het contactformulier op uw website.
              </p>

              <!-- Contact Details Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-left: 4px solid #1e40af; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 20px;">
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #666; font-size: 14px; font-weight: 600; width: 120px;">Naam:</td>
                        <td style="color: #111; font-size: 14px; font-weight: 500;">${data.name}</td>
                      </tr>
                      <tr>
                        <td style="color: #666; font-size: 14px; font-weight: 600;">Email:</td>
                        <td style="color: #111; font-size: 14px; font-weight: 500;">
                          <a href="mailto:${data.email}" style="color: #1e40af; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #666; font-size: 14px; font-weight: 600;">Onderwerp:</td>
                        <td style="color: #111; font-size: 14px; font-weight: 500;">${data.subject}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Box -->
              <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 6px; padding: 20px; margin-bottom: 30px;">
                <p style="margin: 0 0 10px 0; color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                  Bericht:
                </p>
                <p style="margin: 0; color: #111; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
              </div>

              <!-- Action Buttons -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 10px 5px;">
                    <a href="mailto:${data.email}" style="display: inline-block; background-color: #1e40af; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-size: 15px; font-weight: 600; margin: 0 5px;">
                      📧 Direct Beantwoorden
                    </a>
                  </td>
                  <td align="center" style="padding: 10px 5px;">
                    <a href="tel:${data.email}" style="display: inline-block; background-color: #facc15; color: #111111; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-size: 15px; font-weight: 600; margin: 0 5px;">
                      📞 Terugbellen
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px 0; color: #111; font-size: 16px; font-weight: 600;">
                AM Carcleaning Woerden
              </p>
              <p style="margin: 0; color: #666; font-size: 13px; line-height: 1.6;">
                Barwoutswaarder 5, 3449 HE Woerden<br>
                Tel: <a href="tel:+31624680451" style="color: #1e40af; text-decoration: none;">+31 6 246 804 51</a><br>
                Email: <a href="mailto:carcleaning75@gmail.com" style="color: #1e40af; text-decoration: none;">carcleaning75@gmail.com</a>
              </p>
              <p style="margin: 15px 0 0 0; color: #999; font-size: 12px;">
                Dit is een geautomatiseerde notificatie van uw website contactformulier
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

// Customer confirmation email template
function getCustomerEmailTemplate(name: string, logoUrl: string): string {
  return `
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bevestiging van uw bericht</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Ubuntu', 'Barlow', Arial, sans-serif; background-color: #f2f2f2;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f2f2f2; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700;">
                Bedankt voor uw bericht!
              </h1>
              <p style="margin: 15px 0 0 0; color: #facc15; font-size: 18px; font-weight: 500;">
                We nemen zo snel mogelijk contact met u op
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #111111; font-size: 18px; line-height: 1.6;">
                Beste ${name},
              </p>

              <p style="margin: 0 0 20px 0; color: #111111; font-size: 16px; line-height: 1.7;">
                Hartelijk dank voor uw bericht. We hebben uw aanvraag in goede orde ontvangen en zullen zo spoedig mogelijk contact met u opnemen.
              </p>

              <!-- Info Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-left: 4px solid #1e40af; border-radius: 6px; margin: 25px 0;">
                <tr>
                  <td style="padding: 25px;">
                    <p style="margin: 0 0 15px 0; color: #1e40af; font-size: 17px; font-weight: 600;">
                      ⏱️ Wat kunt u verwachten?
                    </p>
                    <ul style="margin: 0; padding: 0 0 0 20px; color: #111; font-size: 15px; line-height: 1.8;">
                      <li style="margin-bottom: 8px;">We reageren meestal binnen <strong>24 uur</strong> op werkdagen</li>
                      <li style="margin-bottom: 8px;">U ontvangt een persoonlijk antwoord op uw vraag</li>
                      <li>Heeft u spoed? Bel ons gerust direct op <strong>+31 6 246 804 51</strong></li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- Contact Info -->
              <div style="background-color: #f8f9fa; border-radius: 6px; padding: 25px; margin: 25px 0;">
                <p style="margin: 0 0 15px 0; color: #111; font-size: 17px; font-weight: 600; text-align: center;">
                  📞 Direct Contact
                </p>
                <table width="100%" cellpadding="8" cellspacing="0">
                  <tr>
                    <td style="color: #666; font-size: 14px; text-align: center;">
                      <strong style="color: #111;">Telefoon:</strong><br>
                      <a href="tel:+31624680451" style="color: #1e40af; text-decoration: none; font-size: 16px; font-weight: 600;">+31 6 246 804 51</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="color: #666; font-size: 14px; text-align: center; padding-top: 5px;">
                      <strong style="color: #111;">Email:</strong><br>
                      <a href="mailto:carcleaning75@gmail.com" style="color: #1e40af; text-decoration: none;">carcleaning75@gmail.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="color: #666; font-size: 14px; text-align: center; padding-top: 5px;">
                      <strong style="color: #111;">Adres:</strong><br>
                      Barwoutswaarder 5, 3449 HE Woerden
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Opening Hours -->
              <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 6px; padding: 20px; margin: 25px 0;">
                <p style="margin: 0 0 12px 0; color: #111; font-size: 16px; font-weight: 600; text-align: center;">
                  🕒 Openingstijden
                </p>
                <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px;">
                  <tr>
                    <td style="color: #666;">Maandag - Vrijdag</td>
                    <td style="color: #111; font-weight: 600; text-align: right;">09:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td style="color: #666;">Zaterdag</td>
                    <td style="color: #111; font-weight: 600; text-align: right;">09:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td style="color: #666;">Zondag</td>
                    <td style="color: #999; font-style: italic; text-align: right;">Gesloten</td>
                  </tr>
                </table>
              </div>

              <p style="margin: 25px 0 0 0; color: #111111; font-size: 16px; line-height: 1.7;">
                Met vriendelijke groet,<br>
                <strong style="color: #1e40af;">Het team van AM Carcleaning</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 15px 0;">
                <img src="${logoUrl}" alt="AM Carcleaning" style="max-width: 150px; height: auto;" />
              </p>
              <p style="margin: 0 0 10px 0; color: #111; font-size: 18px; font-weight: 700;">
                AM Carcleaning Woerden
              </p>
              <p style="margin: 0 0 5px 0; color: #666; font-size: 13px;">
                Specialist in Auto Polijsten & Interieur Reiniging
              </p>
              <p style="margin: 0; color: #666; font-size: 13px; line-height: 1.6;">
                Barwoutswaarder 5, 3449 HE Woerden<br>
                KvK: 65 41 07 69 | BTW: NL34 98 90 675 B01
              </p>
              <div style="margin-top: 20px;">
                <a href="https://amcarcleaning.nl" style="color: #1e40af; text-decoration: none; font-size: 13px; font-weight: 600;">
                  🌐 www.amcarcleaning.nl
                </a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'U heeft recent al een bericht verzonden. U kunt slechts 1 bericht per 5 minuten versturen om spam te voorkomen. Probeer het over enkele minuten opnieuw of bel ons direct op +31 6 246 804 51.' },
        { status: 429 }
      )
    }

    // Parse request body
    const data = await request.json()

    // Validate input
    const errors = validateInput(data)
    if (errors.length > 0) {
      return NextResponse.json(
        { error: errors.join(', ') },
        { status: 400 }
      )
    }

    // Sanitize input
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      subject: sanitizeInput(data.subject),
      message: sanitizeInput(data.message)
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    // Send admin notification
    await transporter.sendMail({
      from: `"AM Carcleaning Contactformulier" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `🔔 Nieuw Contact: ${sanitizedData.subject}`,
      html: getAdminEmailTemplate(sanitizedData),
      replyTo: sanitizedData.email
    })

    // Get logo URL (works on both development and production)
    const protocol = request.headers.get('x-forwarded-proto') || 'https'
    const host = request.headers.get('host') || 'amcarcleaning.nl'
    const logoUrl = `${protocol}://${host}/img/logo.jpg`

    // Send customer confirmation
    await transporter.sendMail({
      from: `"AM Carcleaning" <${process.env.EMAIL_FROM}>`,
      to: sanitizedData.email,
      subject: 'Bevestiging: Uw bericht is ontvangen - AM Carcleaning',
      html: getCustomerEmailTemplate(sanitizedData.name, logoUrl)
    })

    return NextResponse.json(
      { success: true, message: 'Uw bericht is verzonden!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het later opnieuw of bel ons direct.' },
      { status: 500 }
    )
  }
}
