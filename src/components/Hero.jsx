import './Hero.css';

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '919876543210';
    window.open(`https://wa.me/${phoneNumber}?text=Hi%20I%20would%20like%20to%20order%20from%20Sri%20Lakshmi%20Bakery`, '_blank');
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Freshly Baked Happiness Every Day</h1>
        <p className="hero-subtitle">Delicious cakes, pastries, and snacks made with love.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToMenu}>
            View Menu
          </button>
          <button className="btn btn-secondary" onClick={openWhatsApp}>
            Order on WhatsApp
          </button>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
}
