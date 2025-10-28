import PageLayout from '@/components/PageLayout'
import FAQ from '@/components/FAQ'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AM Carcleaning Woerden | Professioneel Autopoetsbedrijf',
  description: 'Autopoetsbedrijf AM Carcleaning in Woerden. Specialist in auto polijsten, interieur reiniging, lak correctie en swirls verwijderen. Ruime ervaring sinds 2016. Bel 06 246 804 51.',
  openGraph: {
    title: 'AM Carcleaning Woerden | Professioneel Autopoetsbedrijf',
    description: 'Autopoetsbedrijf AM Carcleaning in Woerden. Auto polijsten, interieur reiniging, lak correctie.',
    url: 'https://amcarcleaning.nl',
  },
}

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section Start */}
      <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="/img/carousel-bg-1.jpg" alt="Autopoetsbedrijf" />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                      <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Professioneel Autopoetsbedrijf //</h6>
                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Uw auto verdient de beste verzorging</h1>
                      <a href="/contact" className="btn btn-primary py-3 px-5 animated slideInDown">Contact<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img className="img-fluid" src="/img/carousel-1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Services Preview Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex py-5 px-4">
                <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                <div className="ps-4">
                  <h5 className="mb-3">Interieur Reiniging</h5>
                  <p>Professionele behandeling van bekleding, dashboard en alle interieur onderdelen</p>
                  <a className="text-secondary border-bottom" href="/interieur">Meer info</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="d-flex bg-light py-5 px-4">
                <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                <div className="ps-4">
                  <h5 className="mb-3">Exterieur Polijsten</h5>
                  <p>Verwijderen van krasjes en swirls door vakkundig polijsten</p>
                  <a className="text-secondary border-bottom" href="/exterieur">Meer info</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="d-flex py-5 px-4">
                <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                <div className="ps-4">
                  <h5 className="mb-3">Scherpe Prijzen</h5>
                  <p>Als onafhankelijk poetsbedrijf garanderen wij scherpe prijzen en goede kwaliteit</p>
                  <a className="text-secondary border-bottom" href="/prijzen">Prijzen</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Preview End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{minHeight: '400px'}}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img className="position-absolute img-fluid w-100 h-100" src="/img/about.jpg" style={{objectFit: 'cover'}} alt="" />
                <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{background: 'rgba(0, 0, 0, .08)'}}>
                  <h1 className="display-4 text-white mb-0">15+ <span className="fs-4">Jaar</span></h1>
                  <h4 className="text-white">Ervaring</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="text-primary text-uppercase">// Over Ons //</h6>
              <h1 className="mb-4"><span className="text-primary">AM Carcleaning</span> - Uw Auto Is Een Kostbaar Bezit</h1>
              <p className="mb-4">Wij hebben ruime ervaring met auto´s wassen en poetsen. Als onafhankelijk poetsbedrijf garanderen wij scherpe prijzen en goede kwaliteit. Dit in tegenstelling tot veel andere bedrijven die gebonden zijn aan een bepaalde dealer of zijn aangesloten bij franchise bedrijven.</p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: '45px', height: '45px'}}>
                      <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                      <h6>Professioneel & Expert</h6>
                      <span>Vakkundig werk met oog voor detail</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: '45px', height: '45px'}}>
                      <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                      <h6>Scherpe Prijzen</h6>
                      <span>Onafhankelijk poetsbedrijf met eerlijke prijzen</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: '45px', height: '45px'}}>
                      <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                      <h6>Flexibel & Bereikbaar</h6>
                      <span>Ook buiten openingstijden telefonisch bereikbaar</span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/over-ons" className="btn btn-primary py-3 px-5">Meer Over Ons<i className="fa fa-arrow-right ms-3"></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Contact CTA Start */}
      <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 py-5">
              <div className="py-5">
                <h1 className="text-white mb-4">Professioneel Autopoetsbedrijf in Woerden</h1>
                <p className="text-white mb-0">Bezoek ons in onze garage in Woerden. Wij accepteren elk merk en staan open voor uw vragen. Ook buiten openingstijden zijn wij telefonisch bereikbaar voor het maken van een afspraak.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                <h1 className="text-white mb-4">Neem Contact Op</h1>
                <div className="row g-3">
                  <div className="col-12">
                    <a href="tel:0624680451" className="btn btn-secondary w-100 py-3">
                      <i className="fa fa-phone me-2"></i>06 246 804 51
                    </a>
                  </div>
                  <div className="col-12">
                    <a href="mailto:carcleaning75@gmail.com" className="btn btn-secondary w-100 py-3">
                      <i className="fa fa-envelope me-2"></i>E-mail Ons
                    </a>
                  </div>
                  <div className="col-12">
                    <a href="/contact" className="btn btn-secondary w-100 py-3">
                      <i className="fa fa-map-marker-alt me-2"></i>Bezoek Ons
                    </a>
                  </div>
                  <div className="col-12">
                    <p className="text-white mb-0">
                      <small>Barwoutswaarder 5, 3449 HE Woerden<br/>
                      Ma-Za: 09:00 - 18:00</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact CTA End */}

      {/* FAQ Section */}
      <FAQ />
      {/* FAQ End */}
    </PageLayout>
  )
}
