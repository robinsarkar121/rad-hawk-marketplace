import { useEffect, useState } from "react";
import hawkImg from "../assets/images/radhawk.png";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section style={{
      position: "relative",
      background: "#fff",
      minHeight: "500px",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      borderBottom: "3px solid #e8e8e8",
    }}>

      {/* Red right side with hawk image */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0,
        width: "52%",
        background: "linear-gradient(135deg, #cc0000 0%, #8b0000 100%)",
        clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
        zIndex: 0,
        overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <img
          src={hawkImg}
          alt="Rad Hawk"
          style={{
            width: "85%",
            objectFit: "contain",
            opacity: 0.92,
            filter: "drop-shadow(-8px 8px 24px rgba(0,0,0,0.5))",
            transform: "scale(1.05)",
          }}
        />
      </div>

      {/* Diagonal red slash accent */}
      <div style={{
        position: "absolute", left: "44%", top: 0, bottom: 0,
        width: "6px", background: "#cc0000",
        transform: "skewX(-8deg)", zIndex: 2,
      }} />

      {/* Left content */}
      <div style={{
        position: "relative", zIndex: 3,
        padding: "60px 48px",
        maxWidth: "560px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
      }}>
        <p style={{
          fontFamily: "'Bebas Neue', Impact, sans-serif",
          fontSize: "14px", letterSpacing: "4px",
          color: "#cc0000", margin: "0 0 12px",
          textTransform: "uppercase",
        }}>LA GUARDIA COMMUNITY COLLEGE</p>

        <h1 style={{
          fontFamily: "'Bebas Neue', Impact, sans-serif",
          fontSize: "clamp(56px, 8vw, 96px)",
          lineHeight: 0.9,
          color: "#111",
          margin: "0 0 8px",
          letterSpacing: "1px",
        }}>
          LA GUARDIA<br />
          <span style={{ color: "#cc0000" }}>RAD HAWK</span><br />
          MARKETPLACE
        </h1>

        <p style={{
          color: "#555", fontSize: "15px", lineHeight: 1.7,
          margin: "20px 0 36px", maxWidth: "360px",
          fontFamily: "Georgia, serif",
        }}>
          Buy, sell, and connect with LaGuardia students.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/marketplace" style={{
            background: "#cc0000", color: "#fff",
            padding: "14px 32px", fontWeight: 700,
            fontSize: "13px", letterSpacing: "1.5px",
            textDecoration: "none", textTransform: "uppercase",
            border: "2px solid #cc0000",
          }}>
            Browse Marketplace →
          </a>
          <a href="#categories" style={{
            background: "transparent", color: "#111",
            border: "2px solid #111",
            padding: "14px 28px", fontWeight: 600,
            fontSize: "13px", letterSpacing: "1px",
            textDecoration: "none", textTransform: "uppercase",
          }}>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}