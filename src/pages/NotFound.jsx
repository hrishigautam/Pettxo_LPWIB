import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <style>{`
        .not-found-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 32px 20px;
          background: #F5EFE6;
          color: #5c3629;
          text-align: center;
          font-family: inherit;
        }

        /* Decorative dotted background */
        .not-found-page::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.5;
          background-image: radial-gradient(
            rgba(247, 89, 39, 0.16) 2px,
            transparent 2px
          );
          background-size: 46px 46px;
          pointer-events: none;
        }

        .not-found-page::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          right: -160px;
          bottom: -180px;
          border-radius: 50%;
          background: rgba(247, 89, 39, 0.08);
          filter: blur(50px);
          pointer-events: none;
        }

        .not-found-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 460px;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 36px 42px;
          background: rgba(255, 252, 249, 0.96);
          border: 1px solid rgba(92, 54, 41, 0.10);
          border-radius: 28px;
          box-shadow:
            0 20px 55px rgba(92, 54, 41, 0.12),
            0 4px 14px rgba(247, 89, 39, 0.06);
        }

        .not-found-paw {
          position: absolute;
          top: -14px;
          left: -14px;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #F75927;
          color: white;
          box-shadow: 0 8px 18px rgba(247, 89, 39, 0.28);
          transform: rotate(-7deg);
        }

        .not-found-logo {
          width: 110px;
          height: auto;
          margin-bottom: 34px;
          object-fit: contain;
        }

        .not-found-code {
          position: relative;
          margin: 0 0 16px;
          color: #F75927;
          font-size: clamp(72px, 14vw, 104px);
          line-height: 0.9;
          font-weight: 800;
          letter-spacing: -5px;
          text-shadow:
            5px 5px 0 rgba(247, 89, 39, 0.16);
        }

        .not-found-title {
          margin: 0 0 12px;
          color: #5c3629;
          font-size: clamp(25px, 5vw, 32px);
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.8px;
        }

        .not-found-title span {
          color: #F75927;
        }

        .not-found-text {
          max-width: 360px;
          margin: 0 auto 28px;
          color: #6b625d;
          font-size: 14px;
          line-height: 1.65;
        }

        .not-found-home {
          width: 100%;
          max-width: 260px;
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 999px;
          background: #F75927;
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 7px 0 #d9471e;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            opacity 180ms ease;
        }

        .not-found-home:hover {
          transform: translateY(-2px);
          box-shadow: 0 9px 0 #d9471e;
        }

        .not-found-home:active {
          transform: translateY(3px);
          box-shadow: 0 4px 0 #d9471e;
        }

        .not-found-back {
          margin-top: 22px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 0;
          background: transparent;
          color: #6b625d;
          font-size: 13px;
          cursor: pointer;
        }

        .not-found-back:hover {
          color: #F75927;
        }

        .not-found-badge {
          position: absolute;
          right: -14px;
          bottom: -10px;
          padding: 7px 13px;
          border: 1px solid rgba(92, 54, 41, 0.12);
          border-radius: 999px;
          background: #F5EFE6;
          color: #6b625d;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.4px;
          transform: rotate(5deg);
        }

        .not-found-footer {
          position: absolute;
          z-index: 1;
          bottom: 22px;
          left: 20px;
          right: 20px;
          color: #8d8179;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        @media (max-width: 600px) {
          .not-found-page {
            padding: 24px 18px 70px;
          }

          .not-found-card {
            min-height: 470px;
            padding: 42px 26px 34px;
            border-radius: 24px;
          }

          .not-found-paw {
            width: 44px;
            height: 44px;
            left: -8px;
            top: -10px;
          }

          .not-found-logo {
            width: 90px;
            margin-bottom: 28px;
          }

          .not-found-code {
            font-size: 72px;
            letter-spacing: -3px;
          }

          .not-found-title {
            font-size: 25px;
          }

          .not-found-text {
            font-size: 14px;
          }

          .not-found-home {
            max-width: 100%;
          }

          .not-found-badge {
            right: -5px;
          }

          .not-found-footer {
            bottom: 18px;
            font-size: 8px;
            letter-spacing: 2px;
          }
        }
      `}</style>

      <div className="not-found-card">

        {/* Paw icon */}
        <div className="not-found-paw" aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <ellipse cx="5.5" cy="10" rx="2" ry="2.6" />
            <ellipse cx="9.5" cy="5.6" rx="2" ry="2.7" />
            <ellipse cx="14.5" cy="5.6" rx="2" ry="2.7" />
            <ellipse cx="18.5" cy="10" rx="2" ry="2.6" />
            <path d="M12 11c-3 0-5.5 2.6-5.5 5.2 0 1.9 1.4 2.8 3 2.8 1 0 1.6-.4 2.5-.4s1.5.4 2.5.4c1.6 0 3-.9 3-2.8C17.5 13.6 15 11 12 11z" />
          </svg>
        </div>

        {/* Logo */}
        {/* <img
          src="/images/logo.png"
          alt="Pettxo"
          className="not-found-logo"
        /> */}

        {/* 404 */}
        <div className="not-found-code">404</div>

        {/* Heading */}
        <h1 className="not-found-title">
          Oops! <span>Page not found.</span>
        </h1>

        {/* Description */}
        <p className="not-found-text">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to Pettxo.
        </p>

        {/* Home button */}
        <Link to="/" className="not-found-home">
          <span aria-hidden="true">✣</span>
          Back to Home
        </Link>

        {/* Browser back */}
        <button
          type="button"
          className="not-found-back"
          onClick={() => window.history.back()}
        >
          {/* <span aria-hidden="true">←</span> */}
          {/* Go back */}
        </button>

        {/* Badge */}
        <div className="not-found-badge">
          ERROR 404
        </div>
      </div>

      {/* Footer */}
      <div className="not-found-footer">
        PETTXO — MADE FOR PETS AND THEIR PEOPLE
      </div>
    </main>
  );
}