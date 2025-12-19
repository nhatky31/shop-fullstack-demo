import React, { useEffect, useState } from 'react';
import './App.css'; // Quan trọng: Import file trang trí

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Thay localhost bằng link Render vừa có
    fetch('https://shop-api-nhatky.onrender.com/products') 
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Lỗi kết nối:', error));
  }, []);
  return (
    <div className="App">
      {/* Header đẹp mắt */}
      <header className="header">
        <h1>📱 Huỳnh Nhật Ký  - Ca Cuối </h1>
        <p>Cửa hàng công nghệ Demo React + Node.js</p>
      </header>

      <div className="container">
        {products.length === 0 ? (
          <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h2>⏳ Đang tải sản phẩm từ Server...</h2>
          </div>
        ) : (
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                {/* Ảnh minh họa giả */}
                <div className="product-image"></div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <span className="product-price">{product.price}</span>
                  <br/>
                  <button className="buy-btn" onClick={() => alert(`Bạn đã chọn mua: ${product.name}`)}>
                    Thêm vào giỏ 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;