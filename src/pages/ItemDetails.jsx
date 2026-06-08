import { useParams, Link, useNavigate } from "react-router-dom";
import itemsData from "../data/itemsData";

const CONDITION_COLORS = {
  "Like New": { bg: "#e8f5e9", text: "#2e7d32" },
  "Good":     { bg: "#fff8e1", text: "#f57f17" },
  "Used":     { bg: "#fce4ec", text: "#c62828" },
};

export default function ItemDetails() {
  const { id }     = useParams();
  const navigate   = useNavigate();
  const item       = itemsData.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <main style={{ padding: "80px 48px", textAlign: "center" }}>
        <div style={{ fontSize: "64px", marginBottom: "16px" }}>🔍</div>
        <h1 style={{
          fontFamily: "'Bebas Neue', Impact, sans-serif",
          fontSize: "48px", color: "#111", marginBottom: "12px",
        }}>
          Item Not Found
        </h1>
        <p style={{ color: "#777", fontFamily: "Georgia, serif", marginBottom: "28px" }}>
          This listing may have been removed or doesn't exist.
        </p>
        <Link to="/marketplace" style={{
          background: "#cc0000", color: "#fff",
          padding: "12px 28px", textDecoration: "none",
          fontWeight: 700, fontSize: "13px", letterSpacing: "1px",
          textTransform: "uppercase",
        }}>
          ← Back to Marketplace
        </Link>
      </main>
    );
  }

  const condStyle = CONDITION_COLORS[item.condition] ?? { bg: "#f5f5f5", text: "#666" };

  return (
    <main style={{ padding: "48px 48px", maxWidth: "1100px", margin: "0 auto" }}>

      {/* Breadcrumb */}
      <div style={{ marginBottom: "28px", display: "flex", alignItems: "center", gap: "8px" }}>
        <Link to="/marketplace" style={{
          color: "#cc0000", fontSize: "12px", fontWeight: 700,
          textDecoration: "none", letterSpacing: "0.5px", textTransform: "uppercase",
        }}>
          ← Marketplace
        </Link>
        <span style={{ color: "#ccc" }}>/</span>
        <span style={{ color: "#999", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          {item.category}
        </span>
      </div>

      {/* Main card */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        background: "#fff",
        border: "2px solid #ebebeb",
        borderRadius: "12px",
        overflow: "hidden",
      }}>

        {/* Left — emoji image */}
        <div style={{
          background: "#f7f7f7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "120px",
          minHeight: "400px",
          borderRight: "2px solid #f0f0f0",
        }}>
          <img
  src={item.image}
  alt={item.title}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }}
/>
        </div>

        {/* Right — details */}
        <div style={{ padding: "40px 40px 40px 0", display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* Category + condition */}
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{
              background: "#f0f0f0", color: "#555",
              fontSize: "10px", fontWeight: 700,
              padding: "4px 10px", borderRadius: "4px",
              textTransform: "uppercase", letterSpacing: "0.5px",
            }}>
              {item.category}
            </span>
            <span style={{
              background: condStyle.bg, color: condStyle.text,
              fontSize: "10px", fontWeight: 700,
              padding: "4px 10px", borderRadius: "4px",
              textTransform: "uppercase", letterSpacing: "0.4px",
            }}>
              {item.condition}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1,
            color: "#111",
            margin: 0,
            letterSpacing: "1px",
          }}>
            {item.title}
          </h1>

          {/* Price */}
          <p style={{
            fontSize: "36px", fontWeight: 800,
            color: "#cc0000", margin: 0,
          }}>
            ${item.price}
          </p>

          {/* Description */}
          <p style={{
            fontFamily: "Georgia, serif",
            color: "#555", fontSize: "15px",
            lineHeight: 1.7, margin: 0,
          }}>
            {item.description}
          </p>

          {/* Divider */}
          <div style={{ height: "1px", background: "#f0f0f0" }} />

          {/* Meta info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { label: "Seller",          value: item.seller },
              { label: "Meet-up Location", value: `📍 ${item.location}` },
              { label: "Posted",          value: item.posted },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: "flex", gap: "8px", fontSize: "13px" }}>
                <span style={{ color: "#aaa", fontWeight: 600, minWidth: "140px" }}>{label}</span>
                <span style={{ color: "#333" }}>{value}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "12px", marginTop: "8px", flexWrap: "wrap" }}>
            <Link
              to={`/contact-seller?item=${item.id}`}
              style={{
                background: "#cc0000", color: "#fff",
                padding: "14px 28px", fontWeight: 700,
                fontSize: "13px", letterSpacing: "1.5px",
                textDecoration: "none", textTransform: "uppercase",
                border: "2px solid #cc0000",
              }}
            >
              Contact Seller →
            </Link>
            <button
              onClick={() => navigate(-1)}
              style={{
                background: "transparent", color: "#111",
                border: "2px solid #111",
                padding: "14px 22px", fontWeight: 600,
                fontSize: "13px", letterSpacing: "1px",
                textTransform: "uppercase", cursor: "pointer",
              }}
            >
              ← Go Back
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}