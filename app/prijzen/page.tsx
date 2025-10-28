import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'

export default function PrijzenPage() {
  return (
    <PageLayout>
      <PageHeader title="Prijzen" />

      {/* Pricing Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Onze Tarieven //</h6>
            <h1 className="mb-5">Transparante Prijzen</h1>
            <p className="mb-5">
              Alle prijzen zijn richtprijzen en kunnen variëren afhankelijk van de staat en grootte van uw auto.
              Neem contact op voor een offerte op maat.
            </p>
          </div>

          <div className="row g-5">
            {/* Interieur Services */}
            <div className="col-lg-6">
              <div className="bg-light p-5 h-100">
                <h3 className="text-primary mb-4">Interieur Services</h3>

                <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
                  <span>Binnen reinigen</span>
                  <strong>vanaf &euro;120</strong>
                </div>

                <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
                  <span>Binnen reinigen met bekleding</span>
                  <strong>vanaf &euro;150</strong>
                </div>

                <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
                  <span>Leder behandeling</span>
                  <strong>vanaf &euro;50</strong>
                </div>

                <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
                  <span>Dashboard behandeling</span>
                  <strong>vanaf &euro;30</strong>
                </div>

                <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
                  <span>Geur verwijdering</span>
                  <strong>vanaf &euro;75</strong>
                </div>

                <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
                  <span>Vlekken verwijderen (per stoel)</span>
                  <strong>vanaf &euro;25</strong>
                </div>

                <div className="mt-4 p-3 bg-white rounded">
                  <p className="mb-0 small text-muted">
                    <i className="fa fa-info-circle me-2"></i>
                    Prijzen zijn afhankelijk van de staat en grootte van het voertuig
                  </p>
                </div>
              </div>
            </div>

            {/* Exterieur Services */}
            <div className="col-lg-6">
              <div className="bg-light p-5 h-100">
                <h3 className="text-primary mb-4">Exterieur Services</h3>

                <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
                  <span>Hand wassen</span>
                  <strong>vanaf &euro;25</strong>
                </div>

                <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
                  <span>Hand wassen + waxen</span>
                  <strong>vanaf &euro;50</strong>
                </div>

                <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
                  <span>Basis polijstbeurt (1-step)</span>
                  <strong>vanaf &euro;150</strong>
                </div>

                <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
                  <span>Premium polijstbeurt (2-step)</span>
                  <strong>vanaf &euro;300</strong>
                </div>

                <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
                  <span>Complete lakcorrectie (3-step)</span>
                  <strong>vanaf &euro;500</strong>
                </div>

                <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
                  <span>Koplampen polijsten (per stuk)</span>
                  <strong>vanaf &euro;40</strong>
                </div>

                <div className="mt-4 p-3 bg-white rounded">
                  <p className="mb-0 small text-muted">
                    <i className="fa fa-info-circle me-2"></i>
                    Grotere voertuigen (SUV, bestelwagen) op aanvraag
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Combination Packages */}
          <div className="row g-5 mt-3">
            <div className="col-12">
              <div className="bg-primary p-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h3 className="text-white mb-3">
                      <i className="fa fa-star me-3"></i>Combi Pakketten
                    </h3>
                    <p className="text-white mb-0">
                      Combineer binnen- en buitenreiniging voor het beste resultaat en profiteer van aantrekkelijke combikortingen.
                      Neem contact met ons op voor een persoonlijk advies en offerte op maat.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
                    <a href="/contact" className="btn btn-secondary py-3 px-5">
                      Offerte Aanvragen<i className="fa fa-arrow-right ms-3"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="row g-4 mt-3">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex py-3">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-clock text-white"></i>
                </div>
                <div className="ms-4">
                  <h5>Flexibele Afspraken</h5>
                  <p className="mb-0">Maandag t/m zaterdag van 09:00 tot 18:00 uur</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="d-flex py-3">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-euro-sign text-white"></i>
                </div>
                <div className="ms-4">
                  <h5>Transparante Prijzen</h5>
                  <p className="mb-0">Geen verrassingen achteraf, offerte vooraf</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="d-flex py-3">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-certificate text-white"></i>
                </div>
                <div className="ms-4">
                  <h5>Kwaliteitsgarantie</h5>
                  <p className="mb-0">Professionele producten en jarenlange ervaring</p>
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
              <h6 className="text-primary text-uppercase">// Offerte op maat nodig? //</h6>
              <h1 className="mb-4">Neem direct contact met ons op!</h1>
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
