import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormStatus('');
      return;
    }
    
    setFormStatus('success');
    setFormData({ name: '', phone: '', email: '', message: '' });
    setErrors({});
    
    // Clear success message after 5 seconds
    setTimeout(() => setFormStatus(''), 5000);
  };

  const openWhatsApp = () => {
    const phoneNumber = '919876543210';
    window.open(`https://wa.me/${phoneNumber}?text=Hi%20I%20would%20like%20to%20contact%20Sri%20Lakshmi%20Bakery`, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">We'd love to hear from you</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <h3>Address</h3>
              <p>Main Road, Timsagar Area<br />Your City, ST 12345</p>
            </div>

            <div className="info-card">
              <span className="info-icon">📞</span>
              <h3>Phone</h3>
              <p><a href="tel:+919876543210">+91 9876543210</a></p>
            </div>

            <div className="info-card">
              <span className="info-icon">📧</span>
              <h3>Email</h3>
              <p><a href="mailto:srilakshmibakery@gmail.com">srilakshmibakery@gmail.com</a></p>
            </div>

            <div className="info-card">
              <span className="info-icon">💬</span>
              <h3>WhatsApp</h3>
              <button className="whatsapp-btn" onClick={openWhatsApp}>
                Message Us on WhatsApp
              </button>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1890039906593!2d-74.00601592345!3d40.71282571234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ0LjIiTiA3NMKwMDAnMDEuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {formStatus === 'success' && (
              <div className="success-message">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit phone number"
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
