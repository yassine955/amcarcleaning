'use client'

import PageLayout from '@/components/PageLayout'
import { Sparkles, Car, Award } from 'lucide-react'

export default function Home() {
  return (
    <PageLayout isHomepage={true} hideTopbar={true}>
      {/* Hero Section Start - EXACT ORIGINAL CONTENT with Rogo DNA styling */}
      <div className="position-relative d-flex align-items-center justify-content-center" style={{
        minHeight: '100vh',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
          <img
            src="/img/IMG_7278.jpg"
            alt="Autopoetsbedrijf"
            className="w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
          {/* Rogo DNA: 70% dark overlay for better text contrast */}
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }}></div>
        </div>

        {/* Hero Content */}
        <div className="container position-relative" style={{ zIndex: 10, maxWidth: '1200px', padding: '0 20px' }}>
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-10 text-center" style={{ padding: '0 16px' }}>
              {/* Rogo DNA: Large display headline */}
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                color: '#ffffff',
                marginBottom: '24px',
                lineHeight: '1.2',
                fontWeight: 600,
                fontFamily: "'Barlow', serif"
              }}>
                Professioneel Autopoetsbedrijf in Woerden
              </h1>
              {/* Rogo DNA: Subheading */}
              <p style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '40px',
                lineHeight: '1.6',
                maxWidth: '800px',
                margin: '0 auto 40px auto'
              }}>
                Interieur Reiniging - Exterieur Reiniging - Perfectie in Detail
              </p>
              {/* Square button with Roboto Condensed font */}
              <a
                href="/contact"
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: "'Roboto Condensed', sans-serif",
                  borderRadius: '2px',
                  backgroundColor: '#ffffff',
                  color: '#151515',
                  border: '2px solid #ffffff',
                  padding: '16px 40px',
                  transition: 'all 200ms ease',
                  textDecoration: 'none',
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff'
                  e.currentTarget.style.color = '#151515'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Neem Contact Op
              </a>
            </div>

          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Services Preview Start - Dark Mode - Mobile responsive */}
      <div style={{ paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: 'clamp(40px, 8vw, 80px)', backgroundColor: '#151515' }}>
        <div className="container" style={{ maxWidth: '1200px', padding: '0 20px' }}>
          <div className="row g-3 g-lg-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 'clamp(28px, 5vw, 40px) clamp(24px, 4vw, 32px)', backgroundColor: '#1f1f1f', borderRadius: '2px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ display: 'flex', marginBottom: '16px' }}>
                  <div style={{ flexShrink: 0, marginRight: '24px' }}>
                    <Sparkles size={48} color="#bc9600" strokeWidth={1.5} />
                  </div>
                  <h5 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    fontFamily: "'Barlow', serif",
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    Interieur Reiniging
                  </h5>
                </div>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#b0b0b0',
                  marginBottom: '16px',
                  flex: 1
                }}>
                  Grondige reiniging van bekleding, dashboard en alle interieuronderdelen
                </p>
                <a
                  href="/diensten/interieur"
                  style={{
                    fontSize: '0.9375rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderBottom: '1px solid #ffffff',
                    fontWeight: 500,
                    transition: 'all 200ms ease',
                    width: 'fit-content'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#bc9600'
                    e.currentTarget.style.borderBottomColor = '#bc9600'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.borderBottomColor = '#ffffff'
                  }}
                >
                  Meer info
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#1f1f1f', padding: '40px 32px', borderRadius: '2px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ display: 'flex', marginBottom: '16px' }}>
                  <div style={{ flexShrink: 0, marginRight: '24px' }}>
                    <Car size={48} color="#bc9600" strokeWidth={1.5} />
                  </div>
                  <h5 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    fontFamily: "'Barlow', serif",
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    Exterieur Reiniging
                  </h5>
                </div>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#b0b0b0',
                  marginBottom: '16px',
                  flex: 1
                }}>
                  Vakkundige buitenreiniging, waaronder polijsten, krasverwijdering en glascoating


                </p>
                <a
                  href="/diensten/exterieur"
                  style={{
                    fontSize: '0.9375rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderBottom: '1px solid #ffffff',
                    fontWeight: 500,
                    transition: 'all 200ms ease',
                    width: 'fit-content'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#bc9600'
                    e.currentTarget.style.borderBottomColor = '#bc9600'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.borderBottomColor = '#ffffff'
                  }}
                >
                  Meer info
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 'clamp(28px, 5vw, 40px) clamp(24px, 4vw, 32px)', backgroundColor: '#1f1f1f', borderRadius: '2px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ display: 'flex', marginBottom: '16px' }}>
                  <div style={{ flexShrink: 0, marginRight: '24px' }}>
                    <Award size={48} color="#bc9600" strokeWidth={1.5} />
                  </div>
                  <h5 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    fontFamily: "'Barlow', serif",
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    Vakmanschap & Expertise
                  </h5>
                </div>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#b0b0b0',
                  marginBottom: '16px',
                  flex: 1
                }}>
                  Gespecialiseerd in professionele reiniging. Betrouwbaar, nauwkeurig en altijd toegewijd aan perfectie met jarenlange ervaring
                </p>
                <a
                  href="/over-ons"
                  style={{
                    fontSize: '0.9375rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderBottom: '1px solid #ffffff',
                    fontWeight: 500,
                    transition: 'all 200ms ease',
                    width: 'fit-content'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#bc9600'
                    e.currentTarget.style.borderBottomColor = '#bc9600'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.borderBottomColor = '#ffffff'
                  }}
                >
                  Meer info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Preview End */}

      {/* About Start - Dark Mode */}
      <div style={{ paddingTop: 'clamp(60px, 10vw, 120px)', paddingBottom: 'clamp(60px, 10vw, 120px)', backgroundColor: '#1a1a1a' }}>
        <div className="container" style={{ maxWidth: '1200px', padding: '0 20px' }}>
          <div className="row g-4 g-lg-5">
            <div className="col-lg-6 d-none d-lg-flex" style={{ alignItems: 'center' }}>
              <div className="position-relative w-100" style={{ height: '400px' }}>
                {/* Rogo DNA: Image with subtle filter - HIDDEN ON MOBILE */}
                <img
                  className="img-fluid w-100 h-100"
                  src="/img/about-business.jpg"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '2px',
                    filter: 'brightness(0.95) contrast(0.95)',
                    imageRendering: 'auto'
                  }}
                  alt="AM Carcleaning Woerden"
                />
                {/* Rogo DNA: Experience badge - smaller and positioned bottom-left - HIDDEN ON MOBILE */}
                <div className="position-absolute bottom-0 start-0 mb-4 ms-4" style={{
                  background: 'rgba(10, 10, 10, 0.85)',
                  padding: '20px 28px',
                  borderRadius: '2px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h2 style={{
                    fontSize: '2.5rem',
                    color: '#ffffff',
                    marginBottom: '4px',
                    fontWeight: 700,
                    lineHeight: 1
                  }}>
                    15+ <span style={{ fontSize: '1.25rem' }}>Jaar</span>
                  </h2>
                  <h5 style={{
                    color: '#bc9600',
                    fontSize: '1rem',
                    fontWeight: 600,
                    margin: 0
                  }}>
                    Ervaring
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              {/* Rogo DNA: Subtitle */}
              <h6 style={{
                color: '#bc9600',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                marginBottom: '16px',
                fontFamily: 'Barlow, serif'
              }}>
                // Waarom AM Carcleaning //
              </h6>

              {/* Rogo DNA: Headline */}
              <h2 style={{
                marginBottom: '20px',
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                lineHeight: '1.2',
                fontWeight: 600,
                color: '#ffffff',
                fontFamily: "'Barlow', serif"
              }}>
                Perfectie in Elk Detail
              </h2>

              {/* Rogo DNA: Body text - focus on quality - responsive */}
              <p style={{
                marginBottom: 'clamp(24px, 4vw, 28px)',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.85)',
                maxWidth: '600px'
              }}>
                Bij AM Carcleaning draait alles om perfectie. Met meer dan 15 jaar ervaring behandelen wij elk voertuig als een uniek project. Van diepgaande interieurreiniging tot spiegelglans polijsten - uw auto verlaat onze garage in showroomstaat.
              </p>

              {/* Feature highlights - clean and modern - responsive */}
              <div style={{
                marginBottom: '40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                <div style={{
                  padding: '24px',
                  backgroundColor: 'rgba(188, 150, 0, 0.08)',
                  borderRadius: '2px',
                  border: '1px solid rgba(188, 150, 0, 0.2)'
                }}>
                  <i className="fa fa-award" style={{ fontSize: '2rem', color: '#bc9600', marginBottom: '12px', display: 'block' }}></i>
                  <h6 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontFamily: "'Barlow', serif"
                  }}>
                    Vakmanschap
                  </h6>
                  <span style={{
                    fontSize: '0.9375rem',
                    color: '#b0b0b0',
                    lineHeight: '1.5'
                  }}>
                    Gedreven professionals met passie voor kwaliteit
                  </span>
                </div>

                <div style={{
                  padding: '24px',
                  backgroundColor: 'rgba(188, 150, 0, 0.08)',
                  borderRadius: '2px',
                  border: '1px solid rgba(188, 150, 0, 0.2)'
                }}>
                  <i className="fa fa-gem" style={{ fontSize: '2rem', color: '#bc9600', marginBottom: '12px', display: 'block' }}></i>
                  <h6 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontFamily: "'Barlow', serif"
                  }}>
                    Premium Resultaat
                  </h6>
                  <span style={{
                    fontSize: '0.9375rem',
                    color: '#b0b0b0',
                    lineHeight: '1.5'
                  }}>
                    Uw auto verdient de beste behandeling
                  </span>
                </div>

                <div style={{
                  padding: '24px',
                  backgroundColor: 'rgba(188, 150, 0, 0.08)',
                  borderRadius: '2px',
                  border: '1px solid rgba(188, 150, 0, 0.2)'
                }}>
                  <i className="fa fa-shield-alt" style={{ fontSize: '2rem', color: '#bc9600', marginBottom: '12px', display: 'block' }}></i>
                  <h6 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontFamily: "'Barlow', serif"
                  }}>
                    Betrouwbaar
                  </h6>
                  <span style={{
                    fontSize: '0.9375rem',
                    color: '#b0b0b0',
                    lineHeight: '1.5'
                  }}>
                    15+ jaar ervaring spreekt voor zich
                  </span>
                </div>

                <div style={{
                  padding: '24px',
                  backgroundColor: 'rgba(188, 150, 0, 0.08)',
                  borderRadius: '2px',
                  border: '1px solid rgba(188, 150, 0, 0.2)'
                }}>
                  <i className="fa fa-star" style={{ fontSize: '2rem', color: '#bc9600', marginBottom: '12px', display: 'block' }}></i>
                  <h6 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontFamily: "'Barlow', serif"
                  }}>
                    Zorg voor Detail
                  </h6>
                  <span style={{
                    fontSize: '0.9375rem',
                    color: '#b0b0b0',
                    lineHeight: '1.5'
                  }}>
                    Nauwkeurig werk van binnen tot buiten
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Contact CTA Start - Personal and inviting - Mobile responsive */}
      <div style={{
        backgroundColor: '#151515',
        marginTop: 'clamp(40px, 8vw, 80px)',
        // marginBottom: 'clamp(40px, 8vw, 80px)',
        paddingTop: 'clamp(40px, 8vw, 80px)',
        paddingBottom: 'clamp(40px, 8vw, 80px)'
      }}>
        <div className="container" style={{ maxWidth: '1200px', padding: '0 20px' }}>
          <div className="row gx-3 gx-lg-5 align-items-center">
            <div className="col-lg-6 py-3 py-lg-5 d-none d-lg-block">
              <div className="py-3 py-lg-5">
                {/* Rogo DNA: White text on dark background - more personal - HIDDEN ON MOBILE */}
                <h6 style={{ color: '#bc9600', textTransform: 'uppercase', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '16px', fontFamily: 'Barlow, serif' }}>// Kom Langs //</h6>
                <h1 style={{
                  color: '#ffffff',
                  marginBottom: '24px',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: '1.2',
                  fontWeight: 600,
                  fontFamily: "'Barlow', serif"
                }}>
                  Uw Auto Verdient Het Beste
                </h1>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '24px',
                  fontSize: '1.125rem',
                  lineHeight: '1.7'
                }}>
                  Kom gerust langs in onze garage in Woerden. Wij staan altijd klaar om uw vragen te beantwoorden en adviseren u graag over de beste behandeling voor uw auto. Of het nu gaat om een snelle poetsbeurt of een uitgebreide detailing - bij ons krijgt uw voertuig de aandacht die het verdient.
                </p>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: 0,
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  <i className="fa fa-car me-2" style={{ color: '#bc9600' }}></i>Alle soorten voertuigen welkom
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              {/* Rogo DNA: Dark card with personal touch - Full width on mobile */}
              <div style={{
                backgroundColor: '#1f1f1f',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 'clamp(32px, 6vw, 48px) clamp(24px, 4vw, 40px)',
                borderRadius: '2px',
                border: '1px solid rgba(188, 150, 0, 0.2)'
              }}>
                <h2 style={{
                  color: '#ffffff',
                  marginBottom: '12px',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 600,
                  fontFamily: "'Barlow', serif"
                }}>
                  Direct Contact
                </h2>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '32px',
                  fontSize: '1rem'
                }}>
                  Wij helpen u graag verder
                </p>
                <div className="row g-3">
                  <div className="col-12">
                    {/* Rogo DNA: White buttons matching hero style */}
                    <a
                      href="tel:0624680451"
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        fontFamily: "'Roboto Condensed', sans-serif",
                        borderRadius: '2px',
                        backgroundColor: '#ffffff',
                        color: '#151515',
                        border: '2px solid #ffffff',
                        padding: '16px 40px',
                        transition: 'all 200ms ease',
                        textDecoration: 'none',
                        display: 'block',
                        width: '100%',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = '#ffffff'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff'
                        e.currentTarget.style.color = '#151515'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <i className="fa fa-phone me-2"></i>+31 6 246 804 51
                    </a>
                  </div>
                  <div className="col-12">
                    <a
                      href="mailto:carcleaning75@gmail.com"
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        fontFamily: "'Roboto Condensed', sans-serif",
                        borderRadius: '2px',
                        backgroundColor: '#ffffff',
                        color: '#151515',
                        border: '2px solid #ffffff',
                        padding: '16px 40px',
                        transition: 'all 200ms ease',
                        textDecoration: 'none',
                        display: 'block',
                        width: '100%',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = '#ffffff'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff'
                        e.currentTarget.style.color = '#151515'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <i className="fa fa-envelope me-2"></i>E-mail Ons
                    </a>
                  </div>
                  <div className="col-12">
                    <a
                      href="/contact"
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        fontFamily: "'Roboto Condensed', sans-serif",
                        borderRadius: '2px',
                        backgroundColor: '#ffffff',
                        color: '#151515',
                        border: '2px solid #ffffff',
                        padding: '16px 40px',
                        transition: 'all 200ms ease',
                        textDecoration: 'none',
                        display: 'block',
                        width: '100%',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = '#ffffff'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff'
                        e.currentTarget.style.color = '#151515'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <i className="fa fa-map-marker-alt me-2"></i>Bezoek Ons
                    </a>
                  </div>
                  <div className="col-12">
                    <p style={{ color: '#ffffff', marginBottom: 0, marginTop: '16px' }}>
                      <small>
                        Barwoutswaarder 5, 3449 HE Woerden<br />
                        Ma-Vr: 07:00 - 17:00 | Za: 09:00 - 15:00 | Zo: Gesloten
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact CTA End */}
    </PageLayout>
  )
}
