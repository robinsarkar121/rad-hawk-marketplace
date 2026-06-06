import { useState } from "react";
 
const ITEMS = [
  { id: 1, title: "Nike Hoodie", price: 25, category: "Clothes", condition: "Like New", emoji: "🧥", seller: "@hawk_seller", color: "#ffebee" },
  { id: 2, title: "MacBook Air", price: 450, category: "Electronics", condition: "Good", emoji: "💻", seller: "@lagcc_student", color: "#f3f3f3" },
  { id: 3, title: "Sony Headphones", price: 40, category: "Electronics", condition: "Like New", emoji: "🎧", seller: "@techseller22", color: "#f5f5f5" },
  { id: 4, title: "Calculus Textbook", price: 30, category: "Books", condition: "Good", emoji: "📖", seller: "@mathtutor", color: "#fff8e1" },
  { id: 5, title: "Desk Lamp", price: 15, category: "Furniture", condition: "Good", emoji: "💡", seller: "@dorm_life", color: "#f9f9f9" },
];
 
function ItemCard({ item }) {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);
 
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: hovered ? "2px solid #cc0000" : "2px solid #ebebeb",
        borderRadius: "10px",
        overflow: "hidden",
        transition: "all 0.22s",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 24px rgba(204,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.06)",
        cursor: "pointer",
      }}
    >
      {/* Image area */}
      <div style={{
        background: item.color,
        height: "170px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "72px", position: "relative",
      }}>
        {item.emoji}
 
        {/* Heart button */}
        <button
          onClick={e => { e.stopPropagation(); setLiked(l => !l); }}
          style={{
            position: "absolute", top: "10px", right: "10px",
            background: "rgba(255,255,255,0.9)",
            border: "none", borderRadius: "50%",
            width: "32px", height: "32px",
            cursor: "pointer", fontSize: "15px",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
          }}
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>
 
      {/* Info */}
      <div style={{ padding: "14px 16px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
          <h3 style={{ color: "#111", margin: 0, fontSize: "14px", fontWeight: 700 }}>{item.title}</h3>
          <span style={{ color: "#cc0000", fontWeight: 800, fontSize: "16px" }}>${item.price}</span>
        </div>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <span style={{
            background: "#f5f5f5", color: "#666",
            fontSize: "10px", fontWeight: 600,
            padding: "3px 8px", borderRadius: "4px",
            textTransform: "uppercase", letterSpacing: "0.5px",
          }}>
            {item.category}
          </span>
          <span style={{ color: "#999", fontSize: "11px" }}>{item.condition}</span>
        </div>
        <p style={{ color: "#aaa", fontSize: "11px", margin: "6px 0 0" }}>{item.seller}</p>
      </div>
    </div>
  );
}
 
export default function FeaturedItems() {
  return (
    <section style={{ background: "#fafafa", padding: "48px 48px 64px", borderTop: "1px solid #ebebeb" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
 
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
          <h2 style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: "26px", color: "#111",
            letterSpacing: "2px", margin: 0,
            display: "flex", alignItems: "center", gap: "12px",
          }}>
            Featured Items
            <div style={{ height: "2px", width: "48px", background: "#cc0000" }} />
          </h2>
          <a href="/marketplace" style={{
            color: "#cc0000", fontSize: "13px",
            fontWeight: 700, textDecoration: "none",
            letterSpacing: "0.5px", display: "flex", alignItems: "center", gap: "4px",
          }}>
            View All →
          </a>
        </div>
 
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
          gap: "18px",
        }}>
          {ITEMS.map(item => <ItemCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}