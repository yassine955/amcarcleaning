'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

interface NavbarProps {
  transparent?: boolean
  centered?: boolean
}

export default function Navbar({ transparent = false, centered = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (!transparent) return

    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const navbarHeight = 80 // Rogo DNA: 70-90px navigation height
      setIsScrolled(window.scrollY > heroHeight - navbarHeight)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [transparent])

  const shouldBeTransparent = transparent && !isScrolled

  return (
    <>
      <style jsx global>{`
        /* Rogo DNA: Navigation Styles */
        .navbar .dropdown:hover .dropdown-menu {
          display: block;
          margin-top: 0;
        }
        .navbar .dropdown .dropdown-menu {
          transition: all 200ms ease;
          background-color: #1f1f1f !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        .navbar .dropdown-item {
          color: #ffffff !important;
          transition: all 200ms ease;
        }
        .navbar .dropdown-item:hover {
          background-color: #252525 !important;
          color: #bc9600 !important;
        }
        .navbar {
          transition: all 200ms ease;
          padding: 0 !important;
          height: 80px;
          display: flex;
          align-items: center;
        }

        /* Rogo DNA: Transparent State - Dark mode minimal design */
        .navbar-transparent {
          background: rgba(21, 21, 21, 0.7) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: none !important;
          backdrop-filter: blur(10px) !important;
          -webkit-backdrop-filter: blur(10px);
        }

        /* Rogo DNA: Scrolled State - Dark background */
        .navbar-scrolled {
          background: #151515 !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
        }

        /* Rogo DNA: Text-only links, minimal design - Dark mode */
        .navbar-scrolled .nav-item.nav-link,
        .navbar-scrolled .nav-link {
          color: #ffffff !important;
          text-shadow: none !important;
          font-weight: 500 !important;
          font-size: 0.9375rem !important;
          letter-spacing: 0;
          transition: all 200ms ease;
          padding: 0.5rem 1rem !important;
        }
        .navbar-scrolled .nav-item.nav-link:hover,
        .navbar-scrolled .nav-link:hover {
          color: #bc9600 !important;
        }
        .navbar-scrolled .dropdown-toggle {
          color: #ffffff !important;
        }

        /* Rogo DNA: Primary CTA Button - White style compact */
        .navbar-scrolled .btn-primary {
          background-color: #ffffff !important;
          border: 2px solid #ffffff !important;
          color: #151515 !important;
          font-weight: 600 !important;
          font-size: 0.875rem !important;
          font-family: 'Roboto Condensed', sans-serif !important;
          padding: 10px 20px !important;
          border-radius: 2px !important;
          text-shadow: none !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          transition: all 200ms ease !important;
        }
        .navbar-scrolled .btn-primary:hover {
          background-color: transparent !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
          box-shadow: none !important;
        }

        /* Rogo DNA: Transparent navbar links */
        .navbar-transparent .nav-item.nav-link,
        .navbar-transparent .nav-link {
          color: rgba(255, 255, 255, 0.9) !important;
          text-shadow: none !important;
          font-weight: 500 !important;
          font-size: 0.9375rem !important;
          letter-spacing: 0;
          transition: all 200ms ease;
          padding: 0.5rem 1rem !important;
        }
        .navbar-transparent .nav-item.nav-link:hover,
        .navbar-transparent .nav-link:hover {
          color: #ffffff !important;
        }
        .navbar-transparent .dropdown-toggle {
          color: rgba(255, 255, 255, 0.9) !important;
        }

        /* Rogo DNA: Transparent navbar button - White style compact */
        .navbar-transparent .btn-primary {
          background-color: #ffffff !important;
          border: 2px solid #ffffff !important;
          color: #151515 !important;
          font-weight: 600 !important;
          font-size: 0.875rem !important;
          font-family: 'Roboto Condensed', sans-serif !important;
          padding: 10px 20px !important;
          border-radius: 2px !important;
          text-shadow: none !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          backdrop-filter: blur(10px);
          transition: all 200ms ease !important;
        }
        .navbar-transparent .btn-primary:hover {
          background-color: transparent !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
          box-shadow: none !important;
        }

        .navbar-transparent .navbar-brand {
          opacity: 1 !important;
          visibility: visible !important;
        }

        /* Rogo DNA: Minimal hamburger menu with react-icons */
        .navbar-toggler {
          border: none !important;
          padding: 0.5rem !important;
          background: transparent !important;
        }
        .navbar-toggler:focus {
          box-shadow: none !important;
          outline: none !important;
        }

        /* Rogo DNA: Logo transition */
        .navbar-brand {
          transition: opacity 200ms ease, visibility 200ms ease;
        }

        /* Rogo DNA: Remove arrow icon from button */
        .navbar .btn-primary i {
          display: none;
        }

        /* Mobile menu styling */
        @media (max-width: 991.98px) {
          .navbar {
            padding-top: 12px !important;
            padding-bottom: 12px !important;
          }

          .navbar-collapse {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #1a1a1a !important;
            margin-top: 0;
            border-radius: 0 0 2px 2px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
          }

          .navbar-nav {
            padding: 0 24px !important;
            gap: 0 !important;
          }

          .navbar-nav .nav-link,
          .navbar-nav .nav-item.nav-link {
            padding: 12px 0 !important;
            font-size: 1rem !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            margin: 0 !important;
          }

          .navbar-nav .nav-item:first-child .nav-link,
          .navbar-nav .nav-link:first-child {
            padding-top: 12px !important;
          }

          .navbar-nav .nav-item:last-child .nav-link,
          .navbar-nav .nav-link:last-child {
            padding-bottom: 12px !important;
          }

          .navbar-nav .nav-item.dropdown {
            padding: 0 !important;
            margin: 0 !important;
          }

          .navbar-nav .nav-item.dropdown .nav-link {
            padding: 12px 0 !important;
            margin: 0 !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .navbar-nav > .nav-item:last-child .nav-link,
          .navbar-nav > .nav-link:last-child {
            border-bottom: none;
          }

          .dropdown-menu {
            background-color: rgba(255, 255, 255, 0.05) !important;
            border: none !important;
            padding-left: 16px !important;
            margin-top: 12px !important;
          }

          .dropdown-item {
            color: rgba(255, 255, 255, 0.8) !important;
            padding: 12px 0 !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
      <nav className={`navbar navbar-expand-lg ${shouldBeTransparent ? 'navbar-transparent' : 'navbar-scrolled'} p-0`} style={shouldBeTransparent ? { position: 'fixed', top: centered ? 0 : '0', left: 0, width: '100%', zIndex: 1040 } : { position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1040 }}>
        <div className={`container-fluid ${centered ? 'px-4 px-lg-5' : 'px-4 px-lg-5'}`}>
          <Link href="/" className={`navbar-brand d-flex align-items-center`}>
            <Image src="/img/logo-white-mode.svg" alt="AM Carcleaning" width={160} height={40} style={{ objectFit: 'contain' }} priority />
          </Link>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" style={{ border: 'none', background: 'transparent', padding: '0.5rem' }}>
            <RxHamburgerMenu style={{ color: '#ffffff', fontSize: '24px' }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className={`navbar-nav p-4 p-lg-0 ${centered ? 'mx-auto' : 'ms-auto'}`} style={{ gap: '24px' }}>
              <Link href="/" className="nav-item nav-link">Home</Link>
              <Link href="/diensten" className="nav-item nav-link">Diensten</Link>
              <div className="nav-item dropdown">
                <Link href="#" className="nav-link dropdown-toggle">Reiniging</Link>
                <div className="dropdown-menu fade-up m-0">
                  <Link href="/diensten/interieur" className="dropdown-item">Interieur Reiniging</Link>
                  <Link href="/diensten/exterieur" className="dropdown-item">Exterieur Reiniging</Link>
                </div>
              </div>
              <Link href="/over-ons" className="nav-item nav-link">Over Ons</Link>
              <Link href="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <a href="tel:+31624680451" className="btn btn-primary d-none d-lg-block me-4">Neem contact op</a>
          </div>
        </div>
      </nav>
    </>
  )
}
