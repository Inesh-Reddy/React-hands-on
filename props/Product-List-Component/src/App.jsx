// Challenge 4: Product List Component
// 📌 Scenario: You’re developing an e-commerce site. Build a ProductList component that renders an array of products using props.
// ✅ Props: An array of objects, each with id, title, price, and imageURL.
// ✅ Bonus: Render a “SALE” badge for products under $10.
function ProductList({ products }) {
  return (
    <div>
      {products.map(({ id, title, price, imageURL }) => (
        <div
          key={id}
          style={{
            border: "2px solid #ddd",
            borderRadius: 10,
            padding: 10,
            margin: 10,
            textAlign: "center",
            position: "relative",
          }}
        >
          {price < 10 && (
            <span
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                backgroundColor: "red",
                color: "white",
                padding: "3px 8px",
                borderRadius: 5,
                fontSize: "20px",
              }}
            >
              SALE
            </span>
          )}
          <img src={imageURL} alt={title} style={{ width: 100, height: 100 }} />
          <h2>{title}</h2>
          <p>Price: ₹{price}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const productData = [
    { id: 1, title: "Laptop", price: 342999, imageURL: "https://vsprod.vijaysales.com/media/catalog/product/2/2/222901-image1_2.jpg?optimize=medium&fit=bounds&height=500&width=500" },
    { id: 2, title: "Phone", price: 169900, imageURL: "https://vsprod.vijaysales.com/media/catalog/product/2/3/232304-image.jpg?optimize=medium&fit=bounds&height=500&width=500" },
    { id: 3, title: "Headphones", price: 56900, imageURL: "https://vsprod.vijaysales.com/media/catalog/product/2/3/232328-image.jpg?optimize=medium&fit=bounds&height=500&width=500" },
    { id: 4, title: "Cheap earphones", price: 5, imageURL: "https://vsprod.vijaysales.com/media/catalog/product/2/2/228782-image1.jpg?optimize=medium&fit=bounds&height=500&width=500" },
  ];

  return <ProductList products={productData} />;
}

export default App;

