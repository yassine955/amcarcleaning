'use client'

// Prijzen (excl BTW)
const prices = {
  personenautoCompleet: 200,
  bedrijfswagenCompleet: 270,
  personenautoInterieur: 150,
  bedrijfswagenInterieur: 200
}

// Format prijs voor weergave
const formatPrice = (price: number): string => {
  if (price === 0) return 'op aanvraag'
  return `€${price}`
}

export default function PricingSection() {

  return (
    <div className="container-xxl py-5" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 style={{ color: '#bc9600', textTransform: 'uppercase', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', marginTop: '16px', fontFamily: 'Barlow, serif' }}>// Wat Kost Het? //</h6>
          <h1 className="mb-5" style={{ color: '#ffffff', fontFamily: 'Barlow, serif' }}>Onze Diensten & Prijzen</h1>

        </div>

        {/* Pricing Table - Single Column - Dark Mode */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="p-4 wow fadeInUp" data-wow-delay="0.2s" style={{ backgroundColor: '#1f1f1f', borderRadius: '2px', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}>
              <h4 className="mb-4 text-center" style={{ color: '#bc9600' }}>
                <i className="fa fa-list me-2"></i>Diensten Lijst
              </h4>

              {/* BTW Notice */}
              <p className="mb-3 text-center" style={{ color: '#b0b0b0', fontSize: '0.9375rem' }}>
                <i className="fa fa-info-circle me-2" style={{ color: '#bc9600' }}></i>
                Alle prijzen zijn exclusief 21% BTW
              </p>

              {/* Combined Services List */}
              <div className="mb-3 d-flex justify-content-between align-items-start pb-2" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', gap: '16px' }}>
                <span style={{ color: '#b0b0b0', flex: 1 }}>Personenauto's interieur & polijsten buitenkant auto</span>
                <strong style={{ color: '#ffffff', flexShrink: 0, textAlign: 'right', whiteSpace: 'nowrap' }}>{formatPrice(prices.personenautoCompleet)}</strong>
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-start pb-2" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', gap: '16px' }}>
                <span style={{ color: '#b0b0b0', flex: 1 }}>Bedrijfswagens compleet poetsen & polijsten buitenkant</span>
                <strong style={{ color: '#ffffff', flexShrink: 0, textAlign: 'right', whiteSpace: 'nowrap' }}>vanaf {formatPrice(prices.bedrijfswagenCompleet)}</strong>
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-start pb-2" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', gap: '16px' }}>
                <span style={{ color: '#b0b0b0', flex: 1 }}>Personenauto's enkel interieur, showroomklaar</span>
                <strong style={{ color: '#ffffff', flexShrink: 0, textAlign: 'right', whiteSpace: 'nowrap' }}>vanaf {formatPrice(prices.personenautoInterieur)}</strong>
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-start pb-2" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', gap: '16px' }}>
                <span style={{ color: '#b0b0b0', flex: 1 }}>Bedrijfswagens enkel interieur</span>
                <strong style={{ color: '#ffffff', flexShrink: 0, textAlign: 'right', whiteSpace: 'nowrap' }}>vanaf {formatPrice(prices.bedrijfswagenInterieur)}</strong>
              </div>
              <div className="mb-3 pb-2" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="d-flex justify-content-between align-items-start" style={{ gap: '16px' }}>
                  <span style={{ color: 'rgb(176, 176, 176)', flex: 1 }}>Glas & Keramische coating op uw auto</span>
                  <strong style={{ color: 'rgb(255, 255, 255)', flexShrink: 0, textAlign: 'right', whiteSpace: 'nowrap' }}>vanaf €800</strong>
                </div>
                <p className="mb-0 mt-2" style={{ color: 'rgb(176, 176, 176)', fontSize: '0.675rem' }}>
                  <i className="fa fa-shield-alt me-2" style={{ color: 'rgb(188, 150, 0)' }}></i>
                  De coating blijft minimaal 4 jaar op uw auto, tevens bieden wij 4 jaar garantie
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-start mb-3 pb-2" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', gap: '16px' }}>
                <span style={{ color: '#b0b0b0', flex: 1 }}>Bankstel reiniging op afspraak</span>
                <strong style={{ color: '#ffffff', flexShrink: 0, textAlign: 'right', whiteSpace: 'nowrap' }}>neem contact op</strong>
              </div>

              {/* Extra Informatie */}
              <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <p className="mb-2" style={{ color: '#b0b0b0' }}>
                  <i className="fa fa-info-circle me-2" style={{ color: '#bc9600' }}></i>
                  <strong style={{ color: '#ffffff' }}>Belettering verwijderen:</strong> Voor zowel personenauto's als bedrijfswagens.
                  Prijs verschilt per hoeveelheid werk en wordt mondeling afgestemd.
                </p>
                <p className="mb-2" style={{ color: '#b0b0b0' }}>
                  <i className="fa fa-truck me-2" style={{ color: '#bc9600' }}></i>
                  <strong style={{ color: '#ffffff' }}>Ophaal & brengservice:</strong> Wij bieden ophaal & brengservice aan voor klanten in Woerden.
                </p>
                <p className="mb-0" style={{ color: '#b0b0b0' }}>
                  <i className="fa fa-building me-2" style={{ color: '#bc9600' }}></i>
                  <strong style={{ color: '#ffffff' }}>Voor bedrijven:</strong> Eventueel op locatie mogelijk.
                </p>
              </div>

              <div className="mt-4 pt-4 text-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>

                <a href="/contact" className="btn" style={{
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
                }}>
                  <i className="fa fa-calculator me-2"></i>Offerte Aanvragen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
