import PageLayout from '@/components/PageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interieur Reiniging Auto Woerden | Bekleding Reinigen | AM Carcleaning',
  description: 'Professionele auto interieur reiniging in Woerden. Bekleding reinigen, dashboard behandeling, leder conditioneren en geur verwijdering. Specialist in vlekken verwijderen. Bel +31 6 246 804 51.',
  keywords: 'interieur reiniging auto Woerden, bekleding reinigen Woerden, auto stofferen Woerden, dashboard reiniging, geur verwijdering auto',
  openGraph: {
    title: 'Interieur Reiniging Auto Woerden | AM Carcleaning',
    description: 'Professionele auto interieur reiniging in Woerden. Bekleding reinigen, dashboard behandeling en meer.',
    url: 'https://amcarcleaning.nl/diensten/interieur',
  },
}

export default function InterieurPage() {
  return (
    <PageLayout isHomepage={true} hideTopbar={true}>

      {/* Services Section */}
      <div style={{ padding: '120px 0', marginTop: '80px', backgroundColor: '#151515' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 style={{color: "#bc9600", textTransform: "uppercase", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px", fontFamily: 'Barlow, serif'}}>// Interieur Behandeling //</h6>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, color: '#ffffff', marginBottom: '32px', fontWeight: 600, fontFamily: 'Barlow, serif' }}>Van Binnen Weer Als Nieuw</h1>
              <p style={{ marginBottom: '24px', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6, maxWidth: '600px' }}>
                Een vuil interieur maakt autorijden minder aangenaam. Vlekken in de bekleding,
                vetafzetting op het dashboard, nicotine-aanslag op de ramen en onaangename geuren -
                deze problemen pakken wij voor u aan. Bij AM Carcleaning hebben wij een diepgaande
                interieurbehandeling ontwikkeld waarbij uw auto van binnen grondig wordt gereinigd,
                gedesinfecteerd en geconditioneerd.
              </p>
              <p style={{ marginBottom: '32px', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6, maxWidth: '600px' }}>
                Door gebruik te maken van professionele reinigings- en verzorgingsproducten,
                gecombineerd met onze bewezen werkwijze, zorgen wij ervoor dat uw interieur er
                weer showroomklaar uitziet. Het resultaat: een fris, schoon en verzorgd interieur
                waar u weer met plezier in rijdt.
              </p>
              <div className="row g-4">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <i className="fa fa-check" style={{color: "#ffffff"}}></i>
                    </div>
                    <div className="ms-4">
                      <h5 style={{ marginBottom: '8px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Bekleding diep reinigen</h5>
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Verwijdering van vlekken en vuil uit alle stoffen</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <i className="fa fa-check" style={{color: "#ffffff"}}></i>
                    </div>
                    <div className="ms-4">
                      <h5 style={{ marginBottom: '8px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Dashboard behandeling</h5>
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Reiniging en bescherming van kunststof delen</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <i className="fa fa-check" style={{color: "#ffffff"}}></i>
                    </div>
                    <div className="ms-4">
                      <h5 style={{ marginBottom: '8px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Leder conditioneren</h5>
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Intensieve verzorging voor leren bekleding</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <i className="fa fa-check" style={{color: "#ffffff"}}></i>
                    </div>
                    <div className="ms-4">
                      <h5 style={{ marginBottom: '8px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Geur verwijdering</h5>
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Effectieve behandeling tegen nicotine en andere geuren</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-4" style={{minHeight: '400px'}}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/fotos-zaak/WhatsApp Image 2025-10-29 at 12.18.10.jpeg"
                  style={{objectFit: 'cover', borderRadius: '2px'}}
                  alt="Interieur reiniging"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div style={{ padding: '120px 0', backgroundColor: '#1a1a1a' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{minHeight: '400px'}}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/fotos-zaak/WhatsApp Image 2025-10-29 at 12.20.13 (1).jpeg"
                  style={{objectFit: 'cover', borderRadius: '2px'}}
                  alt="Interieur proces"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 style={{color: "#bc9600", textTransform: "uppercase", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px", fontFamily: 'Barlow, serif'}}>// Onze Werkwijze //</h6>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, color: '#ffffff', marginBottom: '24px', fontWeight: 600, fontFamily: 'Barlow, serif' }}>Hoe werkt de interieur behandeling?</h1>
              <p style={{ marginBottom: '32px', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6, maxWidth: '600px' }}>
                Wij werken volgens een bewezen methode die uw auto van binnen volledig nieuw leven inblaast:
              </p>
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <span style={{color: "#ffffff", fontWeight: 600}}>1</span>
                    </div>
                    <div className="ms-4">
                      <h5 style={{ marginBottom: '8px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Grondige inspectie</h5>
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>We inspecteren het interieur en bepalen de juiste aanpak voor uw specifieke situatie</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <span style={{color: "#ffffff", fontWeight: 600}}>2</span>
                    </div>
                    <div className="ms-4">
                      <h5 style={{ marginBottom: '8px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Stofzuigen en voorbehandeling</h5>
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Alle losse delen worden verwijderd en het interieur wordt grondig gestofzuigd</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <span style={{color: "#ffffff", fontWeight: 600}}>3</span>
                    </div>
                    <div className="ms-4">
                      <h5 style={{ marginBottom: '8px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Diepe reiniging</h5>
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Met professionele reinigingsmiddelen en machines wordt het interieur diepgaand gereinigd</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <span style={{color: "#ffffff", fontWeight: 600}}>4</span>
                    </div>
                    <div className="ms-4">
                      <h5 style={{ marginBottom: '8px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Conditioneren en beschermen</h5>
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Alle oppervlakken worden behandeld met beschermende middelen voor langdurig resultaat</p>
                    </div>
                  </div>
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
                <h6 style={{color: "#bc9600", textTransform: "uppercase", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px", fontFamily: 'Barlow, serif'}}>// Interesse in een interieur behandeling? //</h6>
                <h3 style={{ color: '#ffffff', marginBottom: '16px', fontSize: '1.75rem', fontWeight: 600, fontFamily: 'Barlow, serif' }}>Maak een afspraak voor uw auto!</h3>
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
