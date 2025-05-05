function Homepage(){
    return(
        <div>
  {/* <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
      background-color: #f2f2f2;
    }
    .container {
      background: white;
      padding: 20px;
      display: flex;
      max-width: 800px;
      margin: auto;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .product-image img {
      width: 300px;
    }
    .product-details {
      margin-left: 30px;
    }
    .product-title {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .product-price {
      color: #b12704;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .product-description {
      margin-bottom: 20px;
    }
    .buy-button {
      background-color: #ffa41c;
      padding: 10px 20px;
      border: none;
      color: white;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
    }
    .buy-button:hover {
      background-color: #f08804;
    }
  </style> */}
{/* </head> */}
    <div className="container">
        <div className="product-image">
        {/* <img src="" alt="description" /> */}

        </div>
        <div className="product-details">
        <div className="product-title">Sample Product Title</div>
        <div className="product-price">$29.99</div>
        <div className="product-description">
            This is a short description of the product. It includes key features and benefits to help customers make a decision.
        </div>
        <button className="buy-button">Add to Cart</button>
        </div>
    </div>

    </div>
    )
}

export default Homepage;