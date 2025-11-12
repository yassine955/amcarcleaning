import PageLayout from '@/components/PageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over AM Carcleaning Woerden | Professioneel Autopoetsbedrijf Sinds 2016',
  description: 'Over AM Carcleaning in Woerden. Jarenlange ervaring met auto polijsten en interieur reiniging. Persoonlijke service en professionele producten. Barwoutswaarder 5, Woerden.',
  keywords: 'over autopoetsbedrijf Woerden, AM Carcleaning, professional car detailing Woerden',
  openGraph: {
    title: 'Over AM Carcleaning Woerden | Professioneel Autopoetsbedrijf',
    description: 'Over AM Carcleaning in Woerden. Jarenlange ervaring met autopoesbeurten.',
    url: 'https://amcarcleaning.nl/over-ons',
  },
}

export default function OverOnsPage() {
  return (
    <PageLayout isHomepage={true} hideTopbar={true}>
      {/* About Section - Dark Mode */}
      <div style={{ padding: '120px 0', backgroundColor: '#151515', marginTop: '80px' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{minHeight: '400px'}}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/fotos-zaak/WhatsApp Image 2025-10-29 at 12.20.13.jpeg"
                  style={{objectFit: 'cover', borderRadius: '2px'}}
                  alt="Over AM Carcleaning"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 style={{color: "#bc9600", textTransform: "uppercase", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px", fontFamily: 'Barlow, serif'}}>// Over AM Carcleaning //</h6>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, color: '#ffffff', marginBottom: '24px', fontWeight: 600, fontFamily: 'Barlow, serif' }}>Uw Specialist in Autoprofessional</h1>
              <p style={{ marginBottom: '24px', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6, maxWidth: '600px' }}>
                Welkom bij AM Carcleaning, uw specialist in professionele auto reiniging en
                detailing in Woerden en omgeving. Met jarenlange ervaring in de branche weten wij
                als geen ander hoe belangrijk uw auto voor u is.
              </p>
              <p style={{ marginBottom: '32px', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6, maxWidth: '600px' }}>
                Wij behandelen elke auto met de grootst mogelijke zorg en aandacht. Of het nu gaat
                om een grondige interieur reiniging, een complete polijstbeurt of het verwijderen
                van hardnekkige vlekken en geuren - wij zorgen ervoor dat uw auto er weer als nieuw
                uitziet.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <i className="fa fa-check" style={{color: "#ffffff"}}></i>
                    </div>
                    <div className="ms-4">
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Jarenlange ervaring met auto reiniging en detailing</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <i className="fa fa-check" style={{color: "#ffffff"}}></i>
                    </div>
                    <div className="ms-4">
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Professionele producten en materialen</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div className="flex-shrink-0" style={{width: '50px', height: '50px', backgroundColor: "#bc9600", borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <i className="fa fa-check" style={{color: "#ffffff"}}></i>
                    </div>
                    <div className="ms-4">
                      <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>Persoonlijke service en aandacht voor detail</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us - Dark Mode */}
      <div style={{ padding: '120px 0', backgroundColor: '#1a1a1a' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s" style={{ marginBottom: '64px' }}>
            <h6 style={{color: "#bc9600", textTransform: "uppercase", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px", fontFamily: 'Barlow, serif'}}>// Waarom Kiezen Voor Ons? //</h6>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, color: '#ffffff', marginBottom: 0, fontWeight: 600, fontFamily: 'Barlow, serif' }}>Onze Kernwaarden</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div style={{
                background: '#1f1f1f',
                padding: '40px',
                height: '100%',
                borderRadius: '2px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 200ms ease',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{width: '75px', height: '75px', backgroundColor: "rgba(188, 150, 0, 0.15)", borderRadius: "2px", display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(188, 150, 0, 0.3)'}}>
                  <i className="fa fa-2x fa-award" style={{color: "#bc9600"}}></i>
                </div>
                <h5 style={{ marginBottom: '16px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Kwaliteit</h5>
                <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>
                  Wij werken alleen met professionele producten en materialen van topmerken. Geen
                  compromissen als het gaat om kwaliteit.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div style={{
                background: '#1f1f1f',
                padding: '40px',
                height: '100%',
                borderRadius: '2px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 200ms ease',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{width: '75px', height: '75px', backgroundColor: "rgba(188, 150, 0, 0.15)", borderRadius: "2px", display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(188, 150, 0, 0.3)'}}>
                  <i className="fa fa-2x fa-users" style={{color: "#bc9600"}}></i>
                </div>
                <h5 style={{ marginBottom: '16px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Persoonlijk</h5>
                <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>
                  Elk voertuig is uniek en vraagt om een persoonlijke aanpak. Wij luisteren naar
                  uw wensen en adviseren u graag.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div style={{
                background: '#1f1f1f',
                padding: '40px',
                height: '100%',
                borderRadius: '2px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 200ms ease',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{width: '75px', height: '75px', backgroundColor: "rgba(188, 150, 0, 0.15)", borderRadius: "2px", display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(188, 150, 0, 0.3)'}}>
                  <i className="fa fa-2x fa-heart" style={{color: "#bc9600"}}></i>
                </div>
                <h5 style={{ marginBottom: '16px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Passie</h5>
                <p style={{ margin: 0, color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>
                  Wij hebben een passie voor auto's en houden van ons werk. Dat ziet u terug in
                  het eindresultaat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Info - Dark Mode */}
      <div style={{ padding: '120px 0', backgroundColor: '#151515' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{
            background: '#1f1f1f',
            padding: '64px 40px',
            borderRadius: '2px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-5">
              <div className="col-lg-6">
                <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#ffffff', marginBottom: '32px', fontFamily: 'Barlow, serif' }}>Bedrijfsgegevens</h3>
                <div style={{ marginBottom: '24px' }}>
                  <h5 style={{ marginBottom: '16px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>AM Carcleaning</h5>
                  <p style={{ marginBottom: '12px', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>
                    <i className="fa fa-map-marker-alt me-3" style={{ color: '#bc9600' }}></i>
                    Barwoutswaarder 5<br />
                    <span style={{ marginLeft: '32px' }}>3449 HE Woerden</span>
                  </p>
                  <p style={{ marginBottom: '12px', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>
                    <i className="fa fa-phone-alt me-3" style={{ color: '#bc9600' }}></i>
                    <a href="tel:+31624680451" style={{
                      color: '#ffffff',
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      transition: 'all 200ms ease'
                    }}>+31 6 246 804 51</a>
                  </p>
                  <p style={{ marginBottom: '12px', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6 }}>
                    <i className="fa fa-envelope me-3" style={{ color: '#bc9600' }}></i>
                    <a href="mailto:carcleaning75@gmail.com" style={{
                      color: '#ffffff',
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      transition: 'all 200ms ease'
                    }}>carcleaning75@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#ffffff', marginBottom: '32px', fontFamily: 'Barlow, serif' }}>Openingstijden</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <span style={{ color: '#b0b0b0', fontSize: '1rem' }}>Maandag - Vrijdag</span>
                  <strong style={{ color: '#ffffff', fontSize: '1rem' }}>07:00 - 17:00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <span style={{ color: '#b0b0b0', fontSize: '1rem' }}>Zaterdag</span>
                  <strong style={{ color: '#ffffff', fontSize: '1rem' }}>09:00 - 15:00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <span style={{ color: '#b0b0b0', fontSize: '1rem' }}>Zondag</span>
                  <strong style={{ color: '#ffffff', fontSize: '1rem' }}>Gesloten</strong>
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
                <h6 style={{color: "#bc9600", textTransform: "uppercase", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px", fontFamily: 'Barlow, serif'}}>// Kennismaken? //</h6>
                <h3 style={{ color: '#ffffff', marginBottom: '16px', fontSize: '1.75rem', fontWeight: 600, fontFamily: 'Barlow, serif' }}>Neem contact met ons op!</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>
                  We staan klaar om uw vragen te beantwoorden en een afspraak te maken.
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
