// ============================================================================
// PRODUCT CARD Component
// Individual product card displayed in product lists with Framer Motion Tilt
// ============================================================================

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './styles/ProductCard.css';

function ProductCard({ product }) {
  const cardRef = useRef(null);

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth tilt
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Rotate transforms (tilt effect)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  // Lighting/glare effect
  const glareOpacity = useTransform(smoothY, [-0.5, 0.5], [0.1, 0.3]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  const glareX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Reset back to neutral on leave
    x.set(0);
    y.set(0);
  };

  const currency = product.currency || '₱';
  const formattedPrice = `${currency}${product.price.toLocaleString('en-PH')}`;

  return (
    <Link to={`/product/${product.id}`} className={`product-card-link ${product.status === 'sold_out' ? 'sold-out-link' : ''}`} style={{ perspective: 1000, pointerEvents: product.status === 'sold_out' ? 'none' : 'auto' }}>
      <motion.div 
        className={`product-card ${product.status === 'sold_out' ? 'sold-out' : ''}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        whileHover={{ scale: 1.02, zIndex: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        
        {/* Dynamic Glare Overlay */}
        <motion.div 
          className="card-glare"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(105deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 40%)',
            opacity: glareOpacity,
            x: glareX,
            y: glareY,
            pointerEvents: 'none',
            zIndex: 5,
            mixBlendMode: 'overlay',
            borderRadius: '16px'
          }}
        />

        {/* Product Image */}
        <div className="product-image-container" style={{ transform: "translateZ(30px)" }}>
          <img 
            src={product.image} 
            alt={product.name}
            className={`product-image ${product.status === 'sold_out' ? 'grayscale' : ''}`}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x400?text=Product+Image';
            }}
          />
          {product.status === 'sold_out' && (
            <div className="sold-out-badge">SOLD OUT</div>
          )}
          {/* Add to Cart Overlay */}
          {product.status !== 'sold_out' && (
            <div className="product-overlay">
              <button className="overlay-button">View Details</button>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="product-info" style={{ transform: "translateZ(20px)", opacity: product.status === 'sold_out' ? 0.6 : 1 }}>
          <h3 className="product-name">{product.name}</h3>

          {/* Price */}
          <div className="product-price">
            <span className="price">{formattedPrice}</span>
          </div>

          {/* Color Preview */}
          {product.colors && product.colors.length > 0 && (
            <div className="color-preview">
              {product.colors.slice(0, 3).map((color, index) => (
                <div 
                  key={index} 
                  className="color-dot" 
                  title={color}
                  style={{ backgroundColor: getColorCode(color) }}
                ></div>
              ))}
              {product.colors.length > 3 && (
                <span className="color-more">+{product.colors.length - 3}</span>
              )}
            </div>
          )}

          {/* Size Preview */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="size-preview">
              <small>Sizes: {product.sizes.slice(0, 2).join(', ')}{product.sizes.length > 2 ? '+' : ''}</small>
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

// Helper function to convert color names to hex codes
function getColorCode(colorName) {
  const colorMap = {
    'Pink': '#ffc0cb',
    'Rose Pink': '#ff1493',
    'Lavender': '#e6b3f0',
    'Blush': '#ffb6c1',
    'Coral': '#ff7f50',
    'Cream': '#fff8dc',
    'White': '#ffffff',
    'Black': '#000000',
    'Mint': '#98d8c8',
    'Mint Green': '#98d8c8',
    'Sage': '#9dc183',
    'Sage Green': '#9dc183',
    'Moss Green': '#8a9b7b',
    'Forest Green': '#228b22',
    'Ivory': '#fffff0',
    'Gold': '#ffd700',
    'Blue': '#87ceeb',
    'Purple': '#da70d6',
    'Red': '#ff6347',
    'Champagne': '#f7e7ce',
    'Rose Gold': '#b76e79',
    'Rose': '#ff007f',
    'Mauve': '#e0b0ff',
    'Peach': '#ffcc99',
    'Khaki': '#f0e68c',
    'Hot Pink': '#ff1493',
    'Silver': '#c0c0c0',
    'Bronze': '#cd7f32',
    'Iridescent': '#e0ffff',
    'Rainbow': '#ff1493',
    'Dusty Rose': '#c08081',
    'Dusty Blue': '#6c7899',
    'White/Pink': '#ffb6d9',
    'White/Purple': '#d8b4e8',
    'Black/Silver': '#505050',
    'Gold/Green': '#8b7e00',
    'Silver/Mint': '#7fffff',
    'Bronze/Sage': '#9b8b7e',
  };
  return colorMap[colorName] || '#cccccc';
}

export default ProductCard;
