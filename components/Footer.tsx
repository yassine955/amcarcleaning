import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Adres</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Barwoutswaarder 5, 3449 HE Woerden</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>06 246 804 51</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>carcleaning75@gmail.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube"></i></a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Openingstijden</h4>
              <h6 className="text-light">Maandag - Zaterdag:</h6>
              <p className="mb-4">09:00 - 18:00</p>
              <h6 className="text-light">Zondag:</h6>
              <p className="mb-0">Gesloten</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Services</h4>
              <Link className="btn btn-link" href="/interieur">Interieur Reiniging</Link>
              <Link className="btn btn-link" href="/exterieur">Exterieur Polijsten</Link>
              <Link className="btn btn-link" href="/prijzen">Ramen Reinigen</Link>
              <Link className="btn btn-link" href="/prijzen">Stoelen Reinigen</Link>
              <Link className="btn btn-link" href="/prijzen">Ozonbehandeling</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Bedrijfsgegevens</h4>
              <p className="mb-2">KvK: 65 41 07 69</p>
              <p className="mb-2">BTW: NL34 98 90 675 B01</p>
              <p className="mb-4">Alle prijzen exclusief 21% BTW</p>
              <Link href="/contact" className="btn btn-primary">Contact Opnemen</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="border-bottom" href="#">Autopoetsbedrijf AM Carcleaning</a>, Alle rechten voorbehouden.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link href="/">Home</Link>
                  <a href="#">Cookies</a>
                  <a href="#">Help</a>
                  <a href="#">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  )
}
