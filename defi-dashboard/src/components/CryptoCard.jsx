export const CryptoCard = ({ name, price, change }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "300px",
        minHeight: "100px",
        border: "2px solid grey",
        borderRadius: "5px",
        backgroundColor: "#333",
        padding: "15px",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {name ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <span>
            <strong>Name:</strong> {name}
          </span>
          <span>
            <strong>Price:</strong>{" "}
            {price ? `$${price.toFixed(2)}` : "Price unavailable"}
          </span>
          <span>
            <strong>Change:</strong>{" "}
            {change ? (
              <span style={{ color: change >= 0 ? "#00cc00" : "#ff3333" }}>
                {change.toFixed(2)}%
              </span>
            ) : (
              "Change unavailable"
            )}
          </span>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          Sorry, no currency name to display
        </div>
      )}
    </div>
  );
};
