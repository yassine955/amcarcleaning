import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'

export default function InterieurPage() {
  return (
    <PageLayout>
      <PageHeader title="Interieur Reiniging" />

      {/* Services Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-primary text-uppercase">// Interieur Behandeling //</h6>
              <h1 className="mb-5">Professionele Interieur Behandeling</h1>
              <p className="mb-4">
                Vlekken in de bekleding, vet en stof op het dashboard, nicotine-aanslag en geuren.
                Eenmaal in de auto is het minder leuk toeven. Daarom heeft AM Carcleaning een
                diepgaande interieurbehandeling ontwikkeld waarbij uw auto van binnen grondig wordt
                gereinigd en geconditioneerd.
              </p>
              <p className="mb-4">
                Met speciale reinigings en verzorgingsproducten en een grondige werkwijze krijgt
                het interieur een frisse en goed onderhouden aanblik.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-0">Bekleding diep reinigen</h5>
                      <p className="mb-0">Verwijdering van vlekken en vuil uit alle stoffen</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-0">Dashboard behandeling</h5>
                      <p className="mb-0">Reiniging en bescherming van kunststof delen</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-0">Leder conditioneren</h5>
                      <p className="mb-0">Intensieve verzorging voor leren bekleding</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-0">Geur verwijdering</h5>
                      <p className="mb-0">Effectieve behandeling tegen nicotine en andere geuren</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-4" style={{minHeight: '400px'}}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/img/about.jpg"
                  style={{objectFit: 'cover'}}
                  alt="Interieur reiniging"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{minHeight: '400px'}}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/img/service-2.jpg"
                  style={{objectFit: 'cover'}}
                  alt="Interieur proces"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="text-primary text-uppercase">// Onze Werkwijze //</h6>
              <h1 className="mb-4">Hoe werkt de interieur behandeling?</h1>
              <p className="mb-4">
                Wij werken volgens een bewezen methode die uw auto van binnen volledig nieuw leven inblaast:
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-secondary text-white">
                      <span>1</span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-2">Grondige inspectie</h5>
                      <p className="mb-0">We inspecteren het interieur en bepalen de juiste aanpak voor uw specifieke situatie</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-secondary text-white">
                      <span>2</span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-2">Stofzuigen en voorbehandeling</h5>
                      <p className="mb-0">Alle losse delen worden verwijderd en het interieur wordt grondig gestofzuigd</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-secondary text-white">
                      <span>3</span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-2">Diepe reiniging</h5>
                      <p className="mb-0">Met professionele reinigingsmiddelen en machines wordt het interieur diepgaand gereinigd</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-secondary text-white">
                      <span>4</span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-2">Conditioneren en beschermen</h5>
                      <p className="mb-0">Alle oppervlakken worden behandeld met beschermende middelen voor langdurig resultaat</p>
                    </div>
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
              <h6 className="text-primary text-uppercase">// Interesse in een interieur behandeling? //</h6>
              <h1 className="mb-4">Maak een afspraak voor uw auto!</h1>
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
