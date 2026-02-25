import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <div className="image-placeholder">�</div>
        </div>
        <div className="about-content">
          <h2>About Sri Lakshmi Bakery</h2>
          <p>
            Sri Lakshmi Bakery has been serving freshly baked cakes, pastries, and snacks to the local community. 
            We specialize in custom birthday cakes, party orders, and daily fresh treats made with high-quality ingredients.
          </p>
          <p>
            Every product is crafted with love and passion, using the finest ingredients available. 
            From delicate pastries to rich cakes, each item is designed to bring joy to your celebrations and everyday moments.
          </p>
          <p>
            Visit us today and experience the warmth of freshly baked goodness. Whether you're looking for a special occasion cake 
            or simply craving a sweet treat, Sri Lakshmi Bakery has something perfect for you.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>200+</h3>
              <p>Cake Recipes</p>
            </div>
            <div className="stat">
              <h3>5★</h3>
              <p>Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
