'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'jannyxxy@gmail.com',
      link: 'mailto:jannyxxy@gmail.com',
    },
    // LinkedIn - preserved for future use
    // {
    //   icon: '💼',
    //   label: 'LinkedIn',
    //   value: 'linkedin.com/in/yourprofile',
    //   link: 'https://linkedin.com/in/yourprofile',
    // },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/Toorpeedoo',
      link: 'https://github.com/Toorpeedoo',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+639610188542',
      link: 'tel:+639610188542',
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-espresso-300 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-beige-100 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-amber mx-auto shadow-amber-glow"></div>
          <p className="text-beige-300 mt-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-amber-400 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-4 bg-brown-900/40 backdrop-blur-sm border border-amber-800/30 rounded-lg hover:bg-brown-900/60 hover:shadow-warm-glow transition-all duration-300 group"
                >
                  <span className="text-3xl mr-4">{info.icon}</span>
                  <div>
                    <p className="text-sm text-beige-400">
                      {info.label}
                    </p>
                    <p className="text-amber-400 font-medium group-hover:text-amber-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-amber-400 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-beige-200 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brown-900/40 border border-amber-800/30 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-beige-100 placeholder-beige-500 backdrop-blur-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-beige-200 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brown-900/40 border border-amber-800/30 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-beige-100 placeholder-beige-500 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-beige-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-brown-900/40 border border-amber-800/30 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-beige-100 placeholder-beige-500 backdrop-blur-sm"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-amber text-espresso-900 rounded-lg font-semibold hover:shadow-gold-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-warm-glow"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-amber-400 text-center">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

