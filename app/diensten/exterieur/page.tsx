import PageLayout from '@/components/PageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auto Polijsten Woerden | Lak Correctie | Swirls Verwijderen | AM Carcleaning',
  description: 'Professioneel auto polijsten in Woerden. Lak correctie, swirls verwijderen, waskrassen verwijderen en beschermende coating. Specialist in lak polijsten. Bel +31 6 246 804 51 voor een afspraak.',
  keywords: 'auto polijsten Woerden, lak correctie Woerden, swirls verwijderen, waskrassen verwijderen, auto detailing Woerden, lak polijsten',
  openGraph: {
    title: 'Auto Polijsten Woerden | Lak Correctie | AM Carcleaning',
    description: 'Professioneel auto polijsten in Woerden. Lak correctie en swirls verwijderen.',
    url: 'https://amcarcleaning.nl/diensten/exterieur',
  },
}

export default function ExterieurPage() {
  return (
    <PageLayout isHomepage={true} hideTopbar={true}>

      {/* Services Section */}
      <div style={{ padding: '120px 0', marginTop: '80px', backgroundColor: '#151515' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 style={{color: "#bc9600", textTransform: "uppercase", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px", fontFamily: 'Barlow, serif'}}>// Exterieur Behandeling //</h6>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, color: '#ffffff', marginBottom: '32px', fontWeight: 600, fontFamily: 'Barlow, serif' }}>Geef Uw Autolak De Verzorging Die Het Verdient</h1>
              <p style={{ marginBottom: '24px', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6, maxWidth: '600px' }}>
                De lak van uw auto wordt dagelijks blootgesteld aan invloeden van buitenaf zoals
                vogelpoep, boomhars, insecten, roest, ijzer, teer, wegzout, regen, hagel en UV-licht.
                Door het wassen in automatische wasstraten ontstaan er waskrassen en zogenaamde 'swirls'
                die de glans van uw lak aantasten en uw auto er ouder uit laten zien.
              </p>
              <p style={{ marginBottom: '32px', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6, maxWidth: '600px' }}>
                Met onze professionele polijsttechnieken verwijderen wij deze waskrassen, swirls en
                lakschade volledig. Uw auto krijgt weer die spiegelende showroomglans terug. Daarnaast
                behandelen wij de lak met beschermende coatings voor langdurig resultaat en optimale
                bescherming tegen toekomstige schade.
              </p>
              <div className="row g-4">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <i className="fa fa-check" style={{color: "#ffffff"}}></i>
                    </div>
                    <div className="ms-4">
                      <h5 style={{ marginBottom: '8px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Verwijderen van swirls en krassen</h5>
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Professioneel polijsten voor een krassen vrije lak</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <i className="fa fa-check" style={{color: "#ffffff"}}></i>
                    </div>
                    <div className="ms-4">
                      <h5 style={{ marginBottom: '8px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Lak correctie</h5>
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Herstel van lakschade en oxidatie</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <i className="fa fa-check" style={{color: "#ffffff"}}></i>
                    </div>
                    <div className="ms-4">
                      <h5 style={{ marginBottom: '8px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Beschermende coating</h5>
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Langdurige bescherming tegen weersinvloeden</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <i className="fa fa-check" style={{color: "#ffffff"}}></i>
                    </div>
                    <div className="ms-4">
                      <h5 style={{ marginBottom: '8px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Hand wassen en drogen</h5>
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Schadevrij en zorgvuldig met de hand gewassen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-4" style={{minHeight: '400px'}}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/fotos-zaak/WhatsApp Image 2025-10-29 at 12.20.14 (1).jpeg"
                  style={{objectFit: 'cover', borderRadius: '2px'}}
                  alt="Exterieur polijsten"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Polish Benefits */}
      <div style={{ padding: '120px 0', backgroundColor: '#1a1a1a' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s" style={{ marginBottom: '64px' }}>
            <h6 style={{color: "#bc9600", textTransform: "uppercase", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px", fontFamily: 'Barlow, serif'}}>// Waarom Polijsten? //</h6>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, color: '#ffffff', marginBottom: 0, fontWeight: 600, fontFamily: 'Barlow, serif' }}>Voordelen van Professioneel Polijsten</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div style={{
                background: '#1f1f1f',
                padding: '40px',
                height: '100%',
                borderRadius: '2px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 200ms ease',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}>
                <div className="d-flex align-items-center" style={{ marginBottom: '24px' }}>
                  <div style={{width: '50px', height: '50px', backgroundColor: "rgba(188, 150, 0, 0.15)", borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '16px', border: '1px solid rgba(188, 150, 0, 0.3)'}}>
                    <i className="fa fa-shield-alt" style={{color: "#bc9600"}}></i>
                  </div>
                  <h5 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Bescherming</h5>
                </div>
                <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Uw lak wordt beter beschermd tegen weersinvloeden en blijft langer mooi.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div style={{
                background: '#1f1f1f',
                padding: '40px',
                height: '100%',
                borderRadius: '2px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 200ms ease',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}>
                <div className="d-flex align-items-center" style={{ marginBottom: '24px' }}>
                  <div style={{width: '50px', height: '50px', backgroundColor: "rgba(188, 150, 0, 0.15)", borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '16px', border: '1px solid rgba(188, 150, 0, 0.3)'}}>
                    <i className="fa fa-star" style={{color: "#bc9600"}}></i>
                  </div>
                  <h5 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Waardebehoud</h5>
                </div>
                <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Een goed onderhouden auto behoudt beter zijn waarde bij verkoop.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div style={{
                background: '#1f1f1f',
                padding: '40px',
                height: '100%',
                borderRadius: '2px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 200ms ease',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}>
                <div className="d-flex align-items-center" style={{ marginBottom: '24px' }}>
                  <div style={{width: '50px', height: '50px', backgroundColor: "rgba(188, 150, 0, 0.15)", borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '16px', border: '1px solid rgba(188, 150, 0, 0.3)'}}>
                    <i className="fa fa-gem" style={{color: "#bc9600"}}></i>
                  </div>
                  <h5 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Glans</h5>
                </div>
                <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Uw auto krijgt een diepe, spiegelende glans zoals bij nieuwe auto's.</p>
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
                <h6 style={{color: "#bc9600", textTransform: "uppercase", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px", fontFamily: 'Barlow, serif'}}>// Interesse in een polijstbeurt? //</h6>
                <h3 style={{ color: '#ffffff', marginBottom: '16px', fontSize: '1.75rem', fontWeight: 600, fontFamily: 'Barlow, serif' }}>Laat uw auto weer stralen!</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>
                  Neem contact op voor een vrijblijvende offerte en advies over de beste behandeling voor uw auto.
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
