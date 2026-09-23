import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  // Fetch products when application loads
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products`,
      );

      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Unable to load products.");
    }
  };

  // Selected product details
  const selectedProductData = products.find(
    (product) => product.title === selectedProduct,
  );

  // Categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products
  const filteredProducts = products.filter((product) => {
    const searchText = searchTerm.toLowerCase().trim();

    const matchesSearch =
      product.title.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText);

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Get recommendations
  const getRecommendations = async () => {
    if (!selectedProduct) {
      setError("Please select a product.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setRecommendations([]);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/recommendations`,
        {
          product: selectedProduct,
        },
      );
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error("Recommendation error:", error);
      setError("Unable to get recommendations.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      {/* ================= HEADER ================= */}

      <header className="header">
        <div className="header-content">
          <div className="logo">🛍️</div>

          <h1>Product Recommendation System</h1>

          <p>Discover products you'll love using Machine Learning</p>

          <div className="header-features">
            <span>✨ Smart Recommendations</span>

            <span>🎯 Find Similar Products</span>

            <span>⚡ Better Shopping Experience</span>
          </div>
        </div>
      </header>

      {/* ================= MAIN SELECTION CARD ================= */}

      <section className="selection-section">
        <h2>Find Similar Products</h2>

        <p className="selection-description">
          Search, filter or select a product to get personalized recommendations
        </p>

        {/* ================= FILTER ROW ================= */}

        <div className="filter-row">
          {/* SEARCH */}

          <div className="control-group">
            <div className="search-control">
              <span className="control-icon">🔍</span>

              <input
                type="text"
                placeholder="Search by product name..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setSelectedProduct("");
                  setRecommendations([]);
                  setError("");
                }}
              />

              {searchTerm && (
                <button
                  className="clear-search"
                  onClick={() => setSearchTerm("")}
                >
                  ×
                </button>
              )}
            </div>

            <span className="control-label">Search by product name</span>
          </div>

          {/* CATEGORY */}

          <div className="control-group">
            <div className="select-control">
              <span className="control-icon">▦</span>

              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setSelectedProduct("");
                  setRecommendations([]);
                  setError("");
                }}
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item === "All" ? "All Categories" : item}
                  </option>
                ))}
              </select>
            </div>

            <span className="control-label">Filter by category</span>
          </div>

          {/* PRODUCT */}

          <div className="control-group">
            <div className="select-control">
              <span className="control-icon">🏷️</span>

              <select
                value={selectedProduct}
                onChange={(e) => {
                  setSelectedProduct(e.target.value);
                  setRecommendations([]);
                  setError("");
                }}
              >
                <option value="">Select a product...</option>

                {filteredProducts.map((product) => (
                  <option key={product._id} value={product.title}>
                    {product.title}
                  </option>
                ))}
              </select>
            </div>

            <span className="control-label">Select a product</span>
          </div>

          {/* RECOMMEND BUTTON */}

          <div className="recommend-button-container">
            <button
              className="recommend-button"
              onClick={getRecommendations}
              disabled={loading || !selectedProduct}
            >
              {loading ? "Finding..." : "✨ Get Recommendations"}
            </button>
          </div>
        </div>

        {/* ================= SELECTED PRODUCT ================= */}

        {selectedProductData && (
          <div className="selected-product">
            <div className="selected-product-image">
              <img
                src={selectedProductData.image_url}
                alt={selectedProductData.title}
              />
            </div>

            <div className="selected-product-info">
              <span className="selected-label">SELECTED PRODUCT</span>

              <h3>{selectedProductData.title}</h3>

              <span className="category">{selectedProductData.category}</span>

              <p>{selectedProductData.description}</p>
            </div>
          </div>
        )}
      </section>

      {/* ================= ERROR ================= */}

      {error && <div className="error">⚠️ {error}</div>}

      {/* ================= LOADING ================= */}

      {loading && (
        <div className="loading">
          <div className="spinner"></div>

          <p>Our AI is finding similar products...</p>
        </div>
      )}

      {/* ================= RECOMMENDATIONS ================= */}

      {!loading && recommendations.length > 0 && (
        <section className="recommendations">
          <div className="recommendation-header">
            <h2>Recommended For You</h2>

            <p>Based on product similarity</p>
          </div>

          <div className="product-grid">
            {recommendations.map((product, index) => (
              <div className="product-card" key={index}>
                <div className="image-container">
                  <img src={product.image} alt={product.title} />

                  <span className="match-badge">
                    {(product.score * 100).toFixed(1)}% Match
                  </span>
                </div>

                <div className="product-info">
                  <span className="category">{product.category}</span>

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <div className="similarity">
                    <div className="similarity-header">
                      <span>Similarity</span>

                      <strong>{(product.score * 100).toFixed(1)}%</strong>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{
                          width: `${product.score * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= EMPTY STATE ================= */}

      {!loading &&
        selectedProduct &&
        recommendations.length === 0 &&
        !error && (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>

            <h3>Ready to discover?</h3>

            <p>Click "Get Recommendations" to find similar products.</p>
          </div>
        )}
    </div>
  );
}

export default App;
