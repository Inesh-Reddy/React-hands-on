// Challenge 5: Blog Post Preview
// 📌 Scenario: You need a BlogPreview component to show an article summary.
// ✅ Props: title, excerpt, author, date, isFeatured.
// ✅ Bonus: Apply a special style if isFeatured is true.

function BlogPreview({ title, excerpt, author, date, isFeatured }) {
  const styles = {
    featured: {
      border: "3px solid gold",
      padding: "15px",
      borderRadius: "10px",
      backgroundColor: "#fffbe6",
    },
    normal: {
      border: "2px solid #ddd",
      padding: "10px",
      borderRadius: "5px",
    },
  };

  return (
    <div style={isFeatured ? styles.featured : styles.normal}>
      <h1>{title}</h1>
      <p><strong>By:</strong> {author}</p>
      <p><strong>Date:</strong> {date}</p>
      <p>{excerpt}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <BlogPreview 
        title="Zero to One by Peter Thiel."
        excerpt="Brilliant thinking is rare, but courage is in even shorter supply than genius. Thiel emphasizes that successful startups don’t just improve existing ideas—they create something entirely new."
        author="Peter Thiel"
        date={new Date().toLocaleDateString()} 
        isFeatured={true} 
      />
    </>
  );
}

export default App;

