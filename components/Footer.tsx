'use client'

export default function Footer() {
  return (
    <>
      <style jsx>{`
        /* Rogo DNA: Footer Styles */
        .rogo-footer {
          background-color: #151515;
          color: rgba(255, 255, 255, 0.8);
          padding-top: 80px;
          padding-bottom: 40px;
        }
        .rogo-footer h4 {
          color: #ffffff;
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 24px;
          font-family: 'Barlow', serif;
        }
        .rogo-footer p {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
        }
        .rogo-footer a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 200ms ease;
          font-size: 0.9375rem;
        }
        .rogo-footer a:hover {
          color: #bc9600 !important;
        }
        .rogo-footer .btn.btn-link,
        .rogo-footer .btn-link {
          display: block !important;
          padding: 6px 0 !important;
          text-align: left !important;
          border: none !important;
          background: none !important;
          color: #bc9600 !important;
          text-decoration: none !important;
          font-weight: normal !important;
          letter-spacing: 0 !important;
        }
        .rogo-footer .btn.btn-link:hover,
        .rogo-footer .btn-link:hover {
          color: #a08500 !important;
          background: none !important;
          letter-spacing: 0.5px !important;
        }
        .rogo-footer .btn.btn-link::before,
        .rogo-footer .btn-link::before {
          color: #bc9600 !important;
        }
        .rogo-footer .btn-primary,
        .rogo-footer .btn.btn-primary,
        .rogo-footer a.btn-primary,
        .rogo-footer a.btn.btn-primary {
          background-color: #ffffff !important;
          background: #ffffff !important;
          border: 2px solid #ffffff !important;
          color: #151515 !important;
          font-weight: 600 !important;
          font-size: 1rem !important;
          font-family: 'Roboto Condensed', sans-serif !important;
          padding: 16px 40px !important;
          border-radius: 2px !important;
          text-shadow: none !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          transition: all 200ms ease !important;
          display: inline-block !important;
          box-shadow: none !important;
        }
        .rogo-footer .btn-primary:hover,
        .rogo-footer .btn.btn-primary:hover,
        .rogo-footer a.btn-primary:hover {
          background-color: transparent !important;
          color: #ffffff !important;
          border-color: #ffffff !important;
          transform: translateY(-2px) !important;
          text-decoration: none !important;
        }
        .rogo-footer .btn-primary:focus,
        .rogo-footer .btn-primary:active,
        .rogo-footer .btn.btn-primary:focus,
        .rogo-footer .btn.btn-primary:active,
        .rogo-footer a.btn-primary:focus,
        .rogo-footer a.btn-primary:active {
          background-color: transparent !important;
          color: #ffffff !important;
          border-color: #ffffff !important;
        }
        .rogo-footer .copyright {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 32px;
          margin-top: 64px;
          text-align: center;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.5);
        }
        .rogo-footer i {
          color: #bc9600;
          margin-right: 8px;
        }
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: #ffffff !important;
          color: #151515 !important;
          width: 56px;
          height: 56px;
          border-radius: 2px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99;
          transition: all 200ms ease !important;
          border: 2px solid #ffffff !important;
          text-decoration: none !important;
          font-size: 1.5rem;
        }
        .back-to-top:hover {
          background-color: transparent !important;
          color: #ffffff !important;
          border-color: #ffffff !important;
          transform: translateY(-4px) !important;
        }

        /* Mobile footer styling */
        @media (max-width: 767.98px) {
          .rogo-footer .row > div {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .rogo-footer h4 {
            font-size: 1.125rem !important;
            margin-bottom: 16px !important;
          }

          .rogo-footer p {
            font-size: 0.9375rem !important;
          }

          .rogo-footer .btn-primary {
            width: 100% !important;
            margin-top: 8px !important;
          }
        }
      `}</style>

      <div className="rogo-footer" style={{
        borderTop: '1px solid rgba(213, 213, 213, 0.2)'
      }}>
        <div className="container" style={{ maxWidth: '1200px', padding: '0 32px' }}>
          <div className="row g-4 g-lg-5 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <h4>Adres</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt"></i>Barwoutswaarder 5<br />3449 HE Woerden</p>
              <p className="mb-2"><i className="fa fa-phone-alt"></i><a href="tel:+31624680451">+31 6 246 804 51</a></p>
              <p className="mb-0"><i className="fa fa-envelope"></i><a href="mailto:carcleaning75@gmail.com">carcleaning75@gmail.com</a></p>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <h4>Openingstijden</h4>
              <p className="mb-1">Ma-Vr: 07:00 - 17:00</p>
              <p className="mb-1">Za: 09:00 - 15:00</p>
              <p className="mb-0">Zo: Gesloten</p>
            </div>
          </div>

          <div className="copyright">
            <p className="mb-2">&copy; {new Date().getFullYear()} Autopoetsbedrijf AM Carcleaning. Alle rechten voorbehouden. KvK: 65 41 07 69</p>
            <p className="mb-0" style={{ fontSize: '0.8125rem' }}>
              Built by <a href="https://www.oarized.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#bc9600', textDecoration: 'none', fontWeight: 500 }}>OARIZED</a>
            </p>
          </div>
        </div>
      </div>

      {/* <Link
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
        style={{
          fontSize: '1rem',
          fontWeight: 600,
          fontFamily: '"Roboto Condensed", sans-serif',
          borderRadius: '2px',
          backgroundColor: 'rgb(255, 255, 255)',
          color: 'rgb(21, 21, 21)',
          border: '2px solid rgb(255, 255, 255)',
          padding: '11px',
          transition: '200ms',
          textDecoration: 'none',
          display: 'inline-block',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          width: '56px',
          height: '56px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <i className="bi bi-arrow-up"></i>
      </Link> */}
    </>
  )
}
