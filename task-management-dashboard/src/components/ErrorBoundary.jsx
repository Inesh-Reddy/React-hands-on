import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            fontFamily: "Arial, sans-serif",
            fontSize: "18px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>
            Something went wrong:{" "}
            <span style={{ fontWeight: "bold" }}>{this.state.error.message}</span>
          </h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
