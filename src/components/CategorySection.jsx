import { useState } from "react";
 
const CATEGORIES = [
  { icon: "👕", label: "Clothes" },
  { icon: "👟", label: "Shoes" },
  { icon: "📚", label: "Books" },
  { icon: "💻", label: "Electronics" },
  { icon: "🪑", label: "Furniture" },
  { icon: "✏️", label: "School Supplies" },
  { icon: "👜", label: "Accessories" },
  { icon: "⚽", label: "Sports" },
  { icon: "🏠", label: "Home & Kitchen" },
  { icon: "•••", label: "More", isMore: true },
];
 
export default function CategorySection() {
  const [hovered, setHovered] = useState(null);
 
  return (
    <section id="categories" style={{ background: "#fff", padding: "48px 48px 40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
 
        {/* Section header */}
        <h2 style={{
          fontFamily: "'Bebas Neue', Impact, sans-serif",
          fontSize: "26px", color: "#111",
          letterSpacing: "2px", margin: "0 0 28px",
          display: "flex", alignItems: "center", gap: "12px",
        }}>
          Shop by Category
          <div style={{ height: "2px", width: "48px", background: "#cc0000" }} />
        </h2>
 
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "12px",
        }}>
          {CATEGORIES.map((cat, i) => (
            <a
              key={cat.label}
              href={cat.isMore ? "/marketplace" : `/marketplace?category=${cat.label}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? "#cc0000" : "#fff",
                border: "1.5px solid #e0e0e0",
                borderRadius: "8px",
                padding: "20px 12px",
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: "10px",
                cursor: "pointer", textDecoration: "none",
                transition: "all 0.18s",
                boxShadow: hovered === i ? "0 4px 16px rgba(204,0,0,0.15)" : "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <span style={{ fontSize: "28px", lineHeight: 1 }}>
                {cat.isMore ? <span style={{ fontSize: "20px", letterSpacing: "2px", color: hovered === i ? "#fff" : "#999" }}>•••</span> : cat.icon}
              </span>
              <span style={{
                color: hovered === i ? "#fff" : "#222",
                fontSize: "12px", fontWeight: 700,
                letterSpacing: "0.3px",
                textAlign: "center",
                fontFamily: "Georgia, serif",
              }}>
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}