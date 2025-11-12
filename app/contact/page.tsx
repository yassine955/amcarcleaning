'use client'

import PageLayout from '@/components/PageLayout'
import { useState } from 'react'

// Note: metadata export doesn't work in client components,
// will be handled by parent layout

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Bedankt voor uw bericht! We hebben een bevestiging naar uw email gestuurd en nemen zo snel mogelijk contact met u op.'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Er is een fout opgetreden. Probeer het later opnieuw.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Kan geen verbinding maken met de server. Controleer uw internetverbinding of bel ons direct op +31 6 246 804 51.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <PageLayout isHomepage={true} hideTopbar={true}>
      {/* Dark Mode: Contact Form & Map Section */}
      <div style={{ padding: '120px 0', backgroundColor: '#151515', marginTop: '80px' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="row g-5">
            <div className="col-lg-6">
              <h6 style={{color: "#bc9600", textTransform: "uppercase", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px", fontFamily: 'Barlow, serif'}}>// Stuur Een Bericht //</h6>
              <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.2, color: '#ffffff', marginBottom: '24px', fontWeight: 600, fontFamily: 'Barlow, serif' }}>Heeft U Vragen?</h1>
              <p style={{ marginBottom: '32px', color: '#b0b0b0', fontSize: '1rem', lineHeight: 1.6, maxWidth: '600px' }}>
                Vul het formulier in en we nemen zo snel mogelijk contact met u op. U kunt ons ook
                direct bellen of mailen.
              </p>
              <form onSubmit={handleSubmit}>
                {/* Success/Error Message */}
                {submitStatus.type && (
                  <div style={{
                    padding: '16px 20px',
                    marginBottom: '24px',
                    backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                    border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                    borderRadius: '2px',
                    color: submitStatus.type === 'success' ? '#155724' : '#721c24'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <i className={`fa ${submitStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`} style={{ fontSize: '20px', marginRight: '12px', marginTop: '2px' }}></i>
                      <div>
                        <strong>{submitStatus.type === 'success' ? 'Gelukt!' : 'Fout'}</strong>
                        <p style={{ margin: '4px 0 0 0' }}>{submitStatus.message}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Uw Naam"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '2px', border: '1px solid rgba(255, 255, 255, 0.1)', backgroundColor: '#1f1f1f', color: '#ffffff' }}
                      />
                      <label htmlFor="name">Uw Naam</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Uw Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '2px', border: '1px solid rgba(255, 255, 255, 0.1)', backgroundColor: '#1f1f1f', color: '#ffffff' }}
                      />
                      <label htmlFor="email">Uw Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Onderwerp"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '2px', border: '1px solid rgba(255, 255, 255, 0.1)', backgroundColor: '#1f1f1f', color: '#ffffff' }}
                      />
                      <label htmlFor="subject">Onderwerp</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Uw Bericht"
                        id="message"
                        name="message"
                        style={{height: '150px', borderRadius: '2px', border: '1px solid rgba(255, 255, 255, 0.1)', backgroundColor: '#1f1f1f', color: '#ffffff'}}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Uw Bericht</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      style={{
                        width: '100%',
                        backgroundColor: '#ffffff',
                        color: '#151515',
                        padding: '16px 40px',
                        borderRadius: '2px',
                        border: '2px solid #ffffff',
                        fontWeight: 600,
                        fontSize: '1rem',
                        fontFamily: "'Roboto Condensed', sans-serif",
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        transition: 'all 200ms ease',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        opacity: isSubmitting ? 0.7 : 1
                      }}
                      type="submit"
                      disabled={isSubmitting}
                      onMouseEnter={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.backgroundColor = 'transparent'
                          e.currentTarget.style.color = '#ffffff'
                          e.currentTarget.style.transform = 'translateY(-2px)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff'
                        e.currentTarget.style.color = '#151515'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Bezig met verzenden...
                        </>
                      ) : (
                        <>
                          <i className="fa fa-paper-plane me-2"></i>
                          Verzenden
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <h6 style={{color: "#bc9600", textTransform: "uppercase", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "16px", fontFamily: 'Barlow, serif'}}>// Waar Vindt U Ons? //</h6>
              <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.2, color: '#ffffff', marginBottom: '24px', fontWeight: 600, fontFamily: 'Barlow, serif' }}>Locatie</h1>

              {/* Dark Mode: Image in dark frame with shadow */}
              <div style={{
                backgroundColor: '#0a0a0a',
                padding: '8px',
                borderRadius: '2px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                marginBottom: '24px'
              }}>
                <iframe
                  className="position-relative w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.123456789!2d4.8677894!3d52.0858167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c669b5e9c6b8b9%3A0x9c5c5c5c5c5c5c5c!2sBarwoutswaarder%205%2C%203449%20HE%20Woerden!5e0!3m2!1snl!2snl!4v1234567890123"
                  style={{minHeight: '300px', border: 0, borderRadius: '2px'}}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>

              {/* Dark Mode: Card style for info boxes */}
              <div style={{
                backgroundColor: '#1f1f1f',
                padding: '32px',
                marginBottom: '24px',
                borderRadius: '2px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h5 style={{ marginBottom: '24px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Openingstijden</h5>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ color: '#b0b0b0' }}>Maandag - Vrijdag</span>
                  <strong style={{ color: '#ffffff' }}>07:00 - 17:00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ color: '#b0b0b0' }}>Zaterdag</span>
                  <strong style={{ color: '#ffffff' }}>09:00 - 15:00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#b0b0b0' }}>Zondag</span>
                  <strong style={{ color: '#ffffff' }}>Gesloten</strong>
                </div>
              </div>
              <div style={{
                backgroundColor: '#1f1f1f',
                padding: '32px',
                marginBottom: '24px',
                borderRadius: '2px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h5 style={{ marginBottom: '16px', fontSize: '1.125rem', fontWeight: 600, color: '#ffffff' }}>Bedrijfsgegevens</h5>
                <p style={{ marginBottom: '8px', color: '#b0b0b0' }}><strong style={{ color: '#ffffff' }}>KvK:</strong> 65 41 07 69</p>
                <p style={{ margin: 0, color: '#b0b0b0' }}><strong style={{ color: '#ffffff' }}>Adres:</strong> Barwoutswaarder 5, 3449 HE Woerden</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section matching homepage style */}
      <div style={{ padding: '80px 0', backgroundColor: '#1a1a1a' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{
            backgroundColor: 'rgba(188, 150, 0, 0.08)',
            padding: '64px 40px',
            borderRadius: '2px',
            border: '1px solid rgba(188, 150, 0, 0.2)'
          }}>
            <div className="row g-4 align-items-center">
              <div className="col-lg-8">
                <h3 style={{ color: '#ffffff', marginBottom: '16px', fontSize: '1.75rem', fontWeight: 600, fontFamily: 'Barlow, serif' }}>
                  <i className="fa fa-phone-alt me-3" style={{ color: '#bc9600' }}></i>Bel Direct Voor Een Afspraak
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>
                  Heeft u spoed of wilt u liever direct contact? Bel ons gerust tijdens openingstijden.
                  We helpen u graag verder met advies en het maken van een afspraak.
                </p>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <a
                  href="tel:+31624680451"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#ffffff',
                    color: '#151515',
                    padding: '16px 40px',
                    borderRadius: '2px',
                    border: '2px solid #ffffff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    fontFamily: "'Roboto Condensed', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    transition: 'all 200ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff'
                    e.currentTarget.style.color = '#151515'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  +31 6 246 804 51
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
