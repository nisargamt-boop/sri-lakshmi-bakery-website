import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Regular Customer',
      text: 'Sri Lakshmi Bakery makes the best cakes! I ordered a custom birthday cake and it was absolutely delicious. The freshness and quality are unmatched. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Raj Patel',
      role: 'Party Organizer',
      text: 'We ordered cakes and pastries for a corporate event. The presentation was stunning and the taste was incredible. Sri Lakshmi Bakery is our go-to place for all our events!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Anjali Verma',
      role: 'Satisfied Customer',
      text: 'I pick up fresh pastries from Sri Lakshmi Bakery every Sunday. The variety, freshness, and affordable prices make it my favorite bakery in town!',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>What Our Customers Say</h2>
        <p className="testimonials-subtitle">Join thousands of happy customers</p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
