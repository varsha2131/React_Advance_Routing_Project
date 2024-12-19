import React from 'react';
import { Data } from '../data/products';
import { useLocation, useNavigate } from 'react-router-dom';

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryparams = new URLSearchParams(location.search); // These help in destructuring the query params
  console.log(queryparams);

  // Extract the parameters
  const category = queryparams.get("category");
  const sort = queryparams.get("sort");

  // Filtering the Products
  const filteredProducts = Data.filter((product) =>
    category ? product.category === category : true
  );
  console.log(filteredProducts);

  // Sorting the Products
  if (sort === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "des") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Handle filter updates
  function HandleFilter(key, value) {
    if (value) {
      queryparams.set(key, value);
    } else {
      queryparams.delete(key);
    }
    navigate(`?${queryparams.toString()}`);
  }

  return (
    <div className='container' style={{ backgroundColor: '#f4f4f4', padding: '20px' }}>

      {/* Sale of the Day 50% Discount Section with added div */}
      <div className="sale-banner" style={{
        marginBottom: '30px', 
        padding: '30px', 
        backgroundColor: '#D9AFD9', 
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        textAlign: 'center',
        transition: 'transform 0.3s ease-in-out'
      }}>
        <h1 className='fs-2 text-center my-3 discount' style={{ color: '#333', fontWeight: 'bold' }}>
          Sale Of The Day 50% Discount
        </h1>
        {/* Additional content in the added div */}
        <div className="sale-details" style={{ textAlign: 'center', marginTop: '15px', fontSize: '20px', color: '#2c3e50' }}>
          <p style={{ lineHeight: '1.5', fontSize: '18px' }}>Don't miss out on these amazing deals. Grab your favorite products now at 50% off!</p>
        </div>
      </div>

      {/* Display Selected Category */}
      {category && (
        <div style={{ marginBottom: '20px', fontSize: '18px', color: '#2c3e50' }}>
          <strong>Currently showing: {category}</strong>
        </div>
      )}

      <div className='d-flex justify-content-around align-items-center'>
        {/* Category filters section */}
        <div className='category'>
          <h3 className='fs-5' style={{ color: '#3498db' }}>Filter by Category</h3>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              onClick={() => HandleFilter("category", "men's clothing")}
              className="btn btn-lg"
              style={{
                background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
                border: 'none',
                color: '#fff',
              }}
            >
              Men's Clothing
            </button>
            <button
              type="button"
              onClick={() => HandleFilter("category", "women's clothing")}
              className="btn btn-lg"
              style={{
                background: 'linear-gradient(135deg, #f12711, #f5af19)',
                border: 'none',
                color: '#fff',
              }}
            >
              Women's Clothing
            </button>
            <button
              type="button"
              onClick={() => HandleFilter("category", "electronics")}
              className="btn btn-lg"
              style={{
                background: 'linear-gradient(135deg, #ff4b2b, #ff416c)',
                border: 'none',
                color: '#fff',
              }}
            >
              Electronics
            </button>
            <button
              type="button"
              onClick={() => HandleFilter("category", "jewelery")}
              className="btn btn-lg"
              style={{
                background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
                border: 'none',
                color: '#fff',
              }}
            >
              Jewelry
            </button>
            <button
              type="button"
              onClick={() => HandleFilter("category", "")}
              className="btn btn-lg"
              style={{
                background: 'linear-gradient(135deg, #56ab2f, #a8e063)',
                border: 'none',
                color: '#fff',
              }}
            >
              All Products
            </button>
          </div>
        </div>

        {/* Sorting buttons section */}
        <div className='sort-products'>
          <h3 className='fs-5' style={{ color: '#e67e22' }}>Filter by Price</h3>
          <div className="btn-group" role="group" aria-label="Price sorting">
            <button
              type="button"
              onClick={() => HandleFilter("sort", "asc")}
              className="btn btn-lg"
              style={{
                background: 'linear-gradient(135deg, #4caf50, #8bc34a)',
                border: 'none',
                color: '#fff',
              }}
            >
              Low to High
            </button>
            <button
              type="button"
              onClick={() => HandleFilter("sort", "des")}
              className="btn btn-lg"
              style={{
                background: 'linear-gradient(135deg, #f44336, #e57373)',
                border: 'none',
                color: '#fff',
              }}
            >
              High to Low
            </button>
          </div>
        </div>
      </div>

      {/* Products section */}
      <div className="row gy-3 my-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((ele) => (
            <div className='col-sm-12 col-md-3 col-lg-3' key={ele.id}>
              <div
                className="card shadow p-3 text-center"
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s ease',
                  width: '100%', // Reducing the width of the cards
                  maxWidth: '280px', // Limiting the maximum width for each card
                  margin: 'auto', // Centering the card
                }}
              >
                <img
                  src={ele.image}
                  alt={ele.title}
                  width="100%"
                  height="200px"
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
                <h3 className="card-title" style={{ color: '#333', marginTop: '10px' }}>
                  {ele.title.slice(0, 15)}...
                </h3>
                <p className="card-text" style={{ color: '#e74c3c', fontWeight: 'bold' }}>
                  Rs. {ele.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: '#dc3545', fontSize: '1.2rem' }}>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;