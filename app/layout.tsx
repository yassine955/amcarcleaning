import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Autopoetsbedrijf AM Carcleaning - Woerden',
  description: 'Professioneel autopoetsbedrijf in Woerden. Specialist in interieur reiniging en exterieur polijsten.',
  icons: {
    icon: '/img/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700&family=Ubuntu:wght@400;500&display=swap" rel="stylesheet" />

        {/* Icon Font Stylesheet */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        {/* Bootstrap and Libraries Styles */}
        <link href="/css/bootstrap.min.css?v=2" rel="stylesheet" />
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

        {/* Custom Styles - Load Last to Override */}
        <link href="/css/style.css?v=3" rel="stylesheet" />
      </head>
      <body>
        {children}

        {/* JavaScript Libraries */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/lib/wow/wow.min.js" strategy="lazyOnload" />
        <Script src="/lib/easing/easing.min.js" strategy="lazyOnload" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="lazyOnload" />
        <Script src="/lib/counterup/counterup.min.js" strategy="lazyOnload" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/lib/tempusdominus/js/moment.min.js" strategy="lazyOnload" />
        <Script src="/lib/tempusdominus/js/moment-timezone.min.js" strategy="lazyOnload" />
        <Script src="/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
