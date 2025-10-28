import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'

export default function OverOnsPage() {
  return (
    <PageLayout>
      <PageHeader title="Over Ons" />

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{minHeight: '400px'}}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/img/about.jpg"
                  style={{objectFit: 'cover'}}
                  alt="Over AM Carcleaning"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="text-primary text-uppercase">// Over AM Carcleaning //</h6>
              <h1 className="mb-4">Uw Specialist in Autoprofessional</h1>
              <p className="mb-4">
                Welkom bij AM Carcleaning, uw specialist in professionele auto reiniging en
                detailing in Woerden en omgeving. Met jarenlange ervaring in de branche weten wij
                als geen ander hoe belangrijk uw auto voor u is.
              </p>
              <p className="mb-4">
                Wij behandelen elke auto met de grootst mogelijke zorg en aandacht. Of het nu gaat
                om een grondige interieur reiniging, een complete polijstbeurt of het verwijderen
                van hardnekkige vlekken en geuren - wij zorgen ervoor dat uw auto er weer als nieuw
                uitziet.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <div className="ms-4">
                      <p className="mb-0">Jarenlange ervaring met auto reiniging en detailing</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <div className="ms-4">
                      <p className="mb-0">Professionele producten en materialen</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <div className="ms-4">
                      <p className="mb-0">Persoonlijke service en aandacht voor detail</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Waarom Kiezen Voor Ons? //</h6>
            <h1 className="mb-5">Onze Kernwaarden</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="bg-light overflow-hidden p-4 h-100">
                <div className="service-item position-relative overflow-hidden h-100">
                  <div className="bg-primary d-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="fa fa-2x fa-award text-white"></i>
                  </div>
                  <h5 className="mb-3">Kwaliteit</h5>
                  <p>
                    Wij werken alleen met professionele producten en materialen van topmerken. Geen
                    compromissen als het gaat om kwaliteit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-light overflow-hidden p-4 h-100">
                <div className="service-item position-relative overflow-hidden h-100">
                  <div className="bg-primary d-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="fa fa-2x fa-users text-white"></i>
                  </div>
                  <h5 className="mb-3">Persoonlijk</h5>
                  <p>
                    Elk voertuig is uniek en vraagt om een persoonlijke aanpak. Wij luisteren naar
                    uw wensen en adviseren u graag.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-light overflow-hidden p-4 h-100">
                <div className="service-item position-relative overflow-hidden h-100">
                  <div className="bg-primary d-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="fa fa-2x fa-heart text-white"></i>
                  </div>
                  <h5 className="mb-3">Passie</h5>
                  <p>
                    Wij hebben een passie voor auto's en houden van ons werk. Dat ziet u terug in
                    het eindresultaat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light p-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-5">
              <div className="col-lg-6">
                <h3 className="text-primary mb-4">Bedrijfsgegevens</h3>
                <div className="mb-3">
                  <h5>AM Carcleaning</h5>
                  <p className="mb-2">
                    <i className="fa fa-map-marker-alt text-primary me-3"></i>
                    Barwoutswaarder 5<br />
                    <span className="ms-5">3449 HE Woerden</span>
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-phone-alt text-primary me-3"></i>
                    <a href="tel:0624680451">06 246 804 51</a>
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-envelope text-primary me-3"></i>
                    <a href="mailto:carcleaning75@gmail.com">carcleaning75@gmail.com</a>
                  </p>
                </div>
                <div className="mt-4">
                  <p className="mb-1"><strong>KvK:</strong> 65 41 07 69</p>
                  <p className="mb-0"><strong>BTW:</strong> NL34 98 90 675 B01</p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="text-primary mb-4">Openingstijden</h3>
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                  <span>Maandag - Vrijdag</span>
                  <strong>09:00 - 18:00</strong>
                </div>
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                  <span>Zaterdag</span>
                  <strong>09:00 - 18:00</strong>
                </div>
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                  <span>Zondag</span>
                  <strong>Gesloten</strong>
                </div>
                <div className="mt-4 p-3 bg-white rounded">
                  <p className="mb-0">
                    <i className="fa fa-info-circle text-primary me-2"></i>
                    Op afspraak zijn andere tijden mogelijk. Neem contact met ons op!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 col-md-6">
              <h6 className="text-primary text-uppercase">// Kennismaken? //</h6>
              <h1 className="mb-4">Neem contact met ons op!</h1>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary d-flex flex-column justify-content-center text-center h-100 p-4">
                <h3 className="text-white mb-4"><i className="fa fa-phone-alt me-3"></i>06 246 804 51</h3>
                <a href="/contact" className="btn btn-secondary py-3 px-5">
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
