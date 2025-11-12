'use client'

import { useEffect, useState } from 'react'

interface TopbarProps {
  transparent?: boolean
}

export default function Topbar({ transparent = false }: TopbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (!transparent) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [transparent])

  const shouldBeTransparent = transparent && !isScrolled

  return (
    <div
      className={`container-fluid p-0 ${shouldBeTransparent ? 'position-fixed w-100' : 'bg-light'}`}
      style={shouldBeTransparent ? {
        top: 0,
        left: 0,
        zIndex: 1050,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      } : {
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className={`fa fa-map-marker-alt me-2 ${shouldBeTransparent ? 'text-warning' : 'text-primary'}`}></small>
            <small className={shouldBeTransparent ? 'text-white' : ''}>Barwoutswaarder 5, 3449 HE Woerden</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center py-3">
            <small className={`far fa-clock me-2 ${shouldBeTransparent ? 'text-warning' : 'text-primary'}`}></small>
            <small className={shouldBeTransparent ? 'text-white' : ''}>Ma - Za : 09:00 - 18:00</small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center py-3">
            <small className={`fa fa-phone-alt me-2 ${shouldBeTransparent ? 'text-warning' : 'text-primary'}`}></small>
            <small className={shouldBeTransparent ? 'text-white' : ''}>+31 6 246 804 51</small>
          </div>
        </div>
      </div>
    </div>
  )
}
