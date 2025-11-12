import PageLayout from '@/components/PageLayout'
import PricingSection from '@/components/PricingSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diensten Autopoetsbedrijf Woerden | Auto Polijsten & Interieur Reiniging | AM Carcleaning',
  description: 'Onze professionele autodiensten in Woerden: auto polijsten, lak correctie, interieur reiniging, bekleding reinigen en meer. Bekijk onze diensten en prijzen. Bel +31 6 246 804 51.',
  keywords: 'autodiensten Woerden, auto polijsten, interieur reiniging, lak correctie, carcleaning diensten Woerden',
  openGraph: {
    title: 'Diensten Autopoetsbedrijf Woerden | AM Carcleaning',
    description: 'Professionele autodiensten in Woerden. Auto polijsten, interieur reiniging en meer.',
    url: 'https://amcarcleaning.nl/diensten',
  },
}

export default function DienstenPage() {
  return (
    <PageLayout isHomepage={true} hideTopbar={true}>
      {/* Pricing Section with Toggle - Bovenaan */}
      <div style={{ marginTop: '80px' }}>
        <PricingSection />
      </div>

      {/* Services Overview Section - Dark Mode */}
      <div style={{ padding: '120px 0', backgroundColor: '#151515' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s" style={{ marginBottom: '64px' }}>
            <h6 style={{color: "#bc9600", textTransform: "uppercase", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px", fontFamily: 'Barlow, serif'}}>// Onze Diensten //</h6>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, color: '#ffffff', marginBottom: '24px', fontWeight: 600, fontFamily: 'Barlow, serif' }}>Wat Kunnen Wij Voor U Betekenen?</h1>
            <p style={{ margin: '0 auto', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6, maxWidth: '600px' }}>
              Bij AM Carcleaning bieden wij professionele auto behandelingen voor zowel interieur als exterieur.
              Van het verwijderen van hardnekkige vlekken tot het herstellen van uw autolak - wij zorgen ervoor
              dat uw auto er weer piekfijn uitziet.
            </p>
          </div>

          <div className="row g-4">
            {/* Interieur Card */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div style={{
                background: '#1f1f1f',
                borderRadius: '2px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 200ms ease',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}>
                <img
                  className="img-fluid w-100"
                  src="/fotos-zaak/WhatsApp Image 2025-10-29 at 12.21.24 (1).jpeg"
                  alt="Interieur reiniging"
                  style={{height: '300px', objectFit: 'cover'}}
                />
                <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="d-flex mb-3" style={{ alignItems: 'center', marginBottom: '24px' }}>
                    <div style={{width: '50px', height: '50px', backgroundColor: "rgba(188, 150, 0, 0.15)", borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(188, 150, 0, 0.3)'}}>
                      <i className="fa fa-spray-can" style={{color: "#bc9600"}}></i>
                    </div>
                    <h4 style={{ margin: 0, marginLeft: '16px', fontSize: '1.5rem', fontWeight: 600, color: '#ffffff', fontFamily: 'Barlow, serif' }}>Interieur Reiniging</h4>
                  </div>
                  <p style={{ marginBottom: '32px', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6, flex: 1 }}>
                    Een frisse en schone auto-interieur maakt het verschil. Wij behandelen bekleding,
                    dashboard, leer en verwijderen hardnekkige geuren en vlekken met professionele
                    reinigingsmiddelen en technieken.
                  </p>
                  <a href="/diensten/interieur" style={{
                    display: 'inline-block',
                    backgroundColor: '#ffffff',
                    color: '#151515',
                    padding: '16px 40px',
                    borderRadius: '2px',
                    border: '2px solid #ffffff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    fontFamily: "'Roboto Condensed', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    transition: 'all 200ms ease'
                  }}>
                    Meer Over Interieur<i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Exterieur Card */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <div style={{
                background: '#1f1f1f',
                borderRadius: '2px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 200ms ease',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}>
                <img
                  className="img-fluid w-100"
                  src="/fotos-zaak/WhatsApp Image 2025-10-29 at 12.20.14.jpeg"
                  alt="Exterieur polijsten"
                  style={{height: '300px', objectFit: 'cover'}}
                />
                <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="d-flex mb-3" style={{ alignItems: 'center', marginBottom: '24px' }}>
                    <div style={{width: '50px', height: '50px', backgroundColor: "rgba(188, 150, 0, 0.15)", borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(188, 150, 0, 0.3)'}}>
                      <i className="fa fa-star" style={{color: "#bc9600"}}></i>
                    </div>
                    <h4 style={{ margin: 0, marginLeft: '16px', fontSize: '1.5rem', fontWeight: 600, color: '#ffffff', fontFamily: 'Barlow, serif' }}>Exterieur Reiniging</h4>
                  </div>
                  <p style={{ marginBottom: '32px', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6, flex: 1 }}>
                    Waskrassen, swirls en oxidatie verwijderen wij vakkundig door professioneel polijsten.
                    Uw autolak krijgt weer die showroomglans met bescherming tegen weersinvloeden en
                    langdurig resultaat.
                  </p>
                  <a href="/diensten/exterieur" style={{
                    display: 'inline-block',
                    backgroundColor: '#ffffff',
                    color: '#151515',
                    padding: '16px 40px',
                    borderRadius: '2px',
                    border: '2px solid #ffffff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    fontFamily: "'Roboto Condensed', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    transition: 'all 200ms ease'
                  }}>
                    Meer Over Exterieur<i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action matching homepage style */}
      <div style={{ padding: '80px 0', backgroundColor: '#1a1a1a' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{
            backgroundColor: 'rgba(188, 150, 0, 0.08)',
            padding: '64px 40px',
            borderRadius: '2px',
            border: '1px solid rgba(188, 150, 0, 0.2)'
          }} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-4 align-items-center">
              <div className="col-lg-8">
                <h3 style={{ color: '#ffffff', marginBottom: '16px', fontSize: '1.75rem', fontWeight: 600, fontFamily: 'Barlow, serif' }}>
                  <i className="fa fa-phone-alt me-3" style={{ color: '#bc9600' }}></i>Klaar om uw auto te laten stralen?
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>
                  Neem direct contact met ons op voor een vrijblijvende offerte of om een afspraak te maken.
                  We staan klaar om uw auto de beste behandeling te geven!
                </p>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <a
                  href="/contact"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#ffffff',
                    color: '#151515',
                    padding: '16px 40px',
                    borderRadius: '2px',
                    border: '2px solid #ffffff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    fontFamily: "'Roboto Condensed', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    transition: 'all 200ms ease'
                  }}
                >
                  Contact Opnemen<i className="fa fa-arrow-right ms-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
