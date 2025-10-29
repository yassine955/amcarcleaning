'use client'

import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'
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
        message: 'Kan geen verbinding maken met de server. Controleer uw internetverbinding of bel ons direct op 06 246 804 51.'
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
    <PageLayout>
      <PageHeader title="Contact" />

      {/* Contact Info */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Neem Contact Op //</h6>
            <h1 className="mb-5">Wij Helpen U Graag</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-light p-5 h-100">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: '75px', height: '75px'}}>
                  <i className="fa fa-map-marker-alt fa-2x text-white"></i>
                </div>
                <h5 className="mb-3">Bezoekadres</h5>
                <p className="mb-0">Barwoutswaarder 5</p>
                <p className="mb-0">3449 HE Woerden</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-light p-5 h-100">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: '75px', height: '75px'}}>
                  <i className="fa fa-phone-alt fa-2x text-white"></i>
                </div>
                <h5 className="mb-3">Telefoon</h5>
                <p className="mb-0"><a href="tel:0624680451">06 246 804 51</a></p>
                <p className="mb-0 small text-muted mt-2">Ma - Za: 09:00 - 18:00</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light p-5 h-100">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: '75px', height: '75px'}}>
                  <i className="fa fa-envelope fa-2x text-white"></i>
                </div>
                <h5 className="mb-3">Email</h5>
                <p className="mb-0"><a href="mailto:carcleaning75@gmail.com">carcleaning75@gmail.com</a></p>
                <p className="mb-0 small text-muted mt-2">We reageren binnen 24 uur</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-primary text-uppercase">// Stuur Een Bericht //</h6>
              <h1 className="mb-4">Heeft U Vragen?</h1>
              <p className="mb-4">
                Vul het formulier in en we nemen zo snel mogelijk contact met u op. U kunt ons ook
                direct bellen of mailen.
              </p>
              <form onSubmit={handleSubmit}>
                {/* Success/Error Message */}
                {submitStatus.type && (
                  <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                    <div className="d-flex align-items-start">
                      <i className={`fa ${submitStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} me-3 mt-1`} style={{fontSize: '20px'}}></i>
                      <div>
                        <strong>{submitStatus.type === 'success' ? 'Gelukt!' : 'Fout'}</strong>
                        <p className="mb-0 mt-1">{submitStatus.message}</p>
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
                        style={{height: '150px'}}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Uw Bericht</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      disabled={isSubmitting}
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
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="text-primary text-uppercase">// Waar Vindt U Ons? //</h6>
              <h1 className="mb-4">Locatie</h1>
              <div className="bg-light p-4 mb-4">
                <h5 className="mb-3">Openingstijden</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>Maandag - Vrijdag</span>
                  <strong>09:00 - 18:00</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Zaterdag</span>
                  <strong>09:00 - 18:00</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Zondag</span>
                  <strong>Gesloten</strong>
                </div>
              </div>
              <div className="bg-light p-4 mb-4">
                <h5 className="mb-3">Bedrijfsgegevens</h5>
                <p className="mb-1"><strong>KvK:</strong> 65 41 07 69</p>
                <p className="mb-0"><strong>BTW:</strong> NL34 98 90 675 B01</p>
              </div>
              <iframe
                className="position-relative w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.123456789!2d4.883!3d52.083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDA1JzAwLjAiTiA0wrA1Mic1OS4wIkU!5e0!3m2!1snl!2snl!4v1234567890"
                style={{minHeight: '300px', border: 0}}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="bg-primary p-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-8">
                <h3 className="text-white mb-3">
                  <i className="fa fa-phone-alt me-3"></i>Bel Direct Voor Een Afspraak
                </h3>
                <p className="text-white mb-0">
                  Heeft u spoed of wilt u liever direct contact? Bel ons gerust tijdens openingstijden.
                  We helpen u graag verder met advies en het maken van een afspraak.
                </p>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <a href="tel:0624680451" className="btn btn-secondary py-3 px-5">
                  06 246 804 51
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
