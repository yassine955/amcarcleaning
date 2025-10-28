import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'

export default function ExterieurPage() {
  return (
    <PageLayout>
      <PageHeader title="Exterieur Polijsten" />

      {/* Services Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-primary text-uppercase">// Exterieur Behandeling //</h6>
              <h1 className="mb-5">Uw Auto Is Een Kostbaar Bezit</h1>
              <p className="mb-4">
                Wij hebben ruime ervaring met auto's wassen en poetsen. Dagelijks krijgt een
                autolak te maken met allerlei invloeden van buitenaf, zoals vogelpoep, boomhars,
                insecten, roest, ijzer, teer, weg zout, regen, hagel en uv-licht. Als u goed naar
                de lak van uw auto kijkt zult u zien dat er door het wassen cq. automatische
                wasstraten waskrassen ontstaan, ook wel Swirls genoemd.
              </p>
              <p className="mb-4">
                Wij kunnen door de lak te reinigen en polijsten de waskrassen cq. swirls
                verwijderen en uw auto zal er weer als nieuw uitzien. Ook kunnen we eventuele
                schade aan de lak opvullen door middel van een van onze behandelingen.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-0">Verwijderen van swirls en krassen</h5>
                      <p className="mb-0">Professioneel polijsten voor een krassen vrije lak</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-0">Lak correctie</h5>
                      <p className="mb-0">Herstel van lakschade en oxidatie</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-0">Beschermende coating</h5>
                      <p className="mb-0">Langdurige bescherming tegen weersinvloeden</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-0">Hand wassen en drogen</h5>
                      <p className="mb-0">Schadevrij en zorgvuldig met de hand gewassen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-4" style={{minHeight: '400px'}}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/img/service-1.jpg"
                  style={{objectFit: 'cover'}}
                  alt="Exterieur polijsten"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Polish Packages */}
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Onze Polijst Pakketten //</h6>
            <h1 className="mb-5">Kies het pakket dat bij u past</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="bg-light overflow-hidden p-4 h-100">
                <div className="service-item position-relative overflow-hidden h-100 d-flex flex-column">
                  <div className="bg-primary d-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="fa fa-2x fa-certificate text-white"></i>
                  </div>
                  <h5 className="mb-3">Basis Polijstbeurt</h5>
                  <p>Grondige reiniging en polijsten om lichte swirls te verwijderen. Perfecte keuze voor regelmatig onderhoud.</p>
                  <div className="mt-auto">
                    <h4 className="text-primary mb-3">Vanaf �150</h4>
                    <a className="btn btn-sm" href="/prijzen"><i className="fa fa-arrow-right text-primary me-2"></i>Meer info</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-light overflow-hidden p-4 h-100">
                <div className="service-item position-relative overflow-hidden h-100 d-flex flex-column">
                  <div className="bg-primary d-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="fa fa-2x fa-star text-white"></i>
                  </div>
                  <h5 className="mb-3">Premium Polijstbeurt</h5>
                  <p>Meerdere polijststappen voor het verwijderen van middelmatige swirls en krassen. Inclusief beschermende wax.</p>
                  <div className="mt-auto">
                    <h4 className="text-primary mb-3">Vanaf �300</h4>
                    <a className="btn btn-sm" href="/prijzen"><i className="fa fa-arrow-right text-primary me-2"></i>Meer info</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-light overflow-hidden p-4 h-100">
                <div className="service-item position-relative overflow-hidden h-100 d-flex flex-column">
                  <div className="bg-primary d-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <i className="fa fa-2x fa-crown text-white"></i>
                  </div>
                  <h5 className="mb-3">Complete Lakcorrectie</h5>
                  <p>Volledige lakcorrectie met meerdere polijststappen. Voor het beste resultaat met langdurige bescherming.</p>
                  <div className="mt-auto">
                    <h4 className="text-primary mb-3">Op maat</h4>
                    <a className="btn btn-sm" href="/contact"><i className="fa fa-arrow-right text-primary me-2"></i>Contact</a>
                  </div>
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
              <h6 className="text-primary text-uppercase">// Interesse in een polijstbeurt? //</h6>
              <h1 className="mb-4">Laat uw auto weer stralen!</h1>
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
