import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "#F5EFE6",
        color: "#5c3629",
        textAlign: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "620px" }}>
        <img
          src="/images/logo.png"
          alt="Pettxo"
          style={{
            width: "110px",
            height: "auto",
            marginBottom: "28px",
          }}
        />

        <div
          style={{
            color: "#F75927",
            fontSize: "72px",
            lineHeight: 1,
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          404
        </div>

        <h1
          style={{
            margin: "0 0 16px",
            fontSize: "34px",
            lineHeight: 1.2,
          }}
        >
          Oops! Page not found.
        </h1>

        <p
          style={{
            margin: "0 auto 28px",
            maxWidth: "500px",
            color: "#6b625d",
            fontSize: "16px",
            lineHeight: 1.7,
          }}
        >
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to Pettxo.
        </p>

        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "14px 26px",
            borderRadius: "999px",
            background: "#F75927",
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}