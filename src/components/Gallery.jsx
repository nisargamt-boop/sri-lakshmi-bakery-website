import './Gallery.css';

export default function Gallery() {
  const defaultFallbackImage = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&q=80';
  
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1624353614322-8bed7cfc9a01?w=400&q=80', alt: 'Chocolate Truffle Cake with frosting', label: 'Chocolate Cake' },
    { id: 2, url: 'https://images.unsplash.com/photo-1630080534794-381b73042399?w=400&q=80', alt: 'Red Velvet Cake with cream cheese frosting', label: 'Red Velvet' },
    { id: 3, url: 'https://images.unsplash.com/photo-1578987992253-2c4af01c1d06?w=400&q=80', alt: 'Vanilla cake with frosting', label: 'Vanilla Cake' },
    { id: 4, url: 'https://images.unsplash.com/photo-1641952036408-7d7b6eeb1e2b?w=400&q=80', alt: 'Decorated cupcakes with frosting', label: 'Cupcakes' },
    { id: 5, url: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80', alt: 'Homemade cookies and biscuits', label: 'Cookies' },
    { id: 6, url: 'https://images.unsplash.com/photo-1587080353051-40251e1b5aa1?w=400&q=80', alt: 'Pastries and bakery items', label: 'Pastries' },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <h2>Gallery</h2>
        <p className="gallery-subtitle">Moments of happiness at Sri Lakshmi Bakery</p>
        
        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="gallery-image">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  loading="lazy"
                  onError={(e) => {
                    if (e.target.src !== defaultFallbackImage) {
                      e.target.src = defaultFallbackImage;
                    }
                  }}
                />
              </div>
              <p className="image-label">{image.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
