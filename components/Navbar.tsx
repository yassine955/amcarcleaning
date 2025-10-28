import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Link href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <Image src="/img/logo.jpg" alt="AM Carcleaning" width={200} height={80} style={{objectFit: 'contain'}} priority />
      </Link>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link href="/" className="nav-item nav-link">Home</Link>
          <Link href="/interieur" className="nav-item nav-link">Interieur</Link>
          <Link href="/exterieur" className="nav-item nav-link">Exterieur</Link>
          <Link href="/prijzen" className="nav-item nav-link">Prijzen</Link>
          <Link href="/over-ons" className="nav-item nav-link">Over Ons</Link>
          <Link href="/contact" className="nav-item nav-link">Contact</Link>
        </div>
        <a href="tel:0624680451" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Bel Ons<i className="fa fa-arrow-right ms-3"></i></a>
      </div>
    </nav>
  )
}
