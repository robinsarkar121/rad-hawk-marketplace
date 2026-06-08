import { useState, useMemo } from "react";
import ItemCard from "../components/ItemCard";
import items from "../data/itemsData";

const CATEGORIES = ["All", "Electronics", "Clothes", "Books", "Furniture", "Shoes", "Sports", "Accessories", "School Supplies"];
const CONDITIONS  = ["All", "Like New", "Good", "Used"];
const SORT_OPTIONS = [
  { label: "Newest First",   value: "newest" },
  { label: "Price: Low → High", value: "price_asc" },
  { label: "Price: High → Low", value: "price_desc" },
];

export default function Marketplace() {
  const [search,    setSearch]    = useState("");
  const [category,  setCategory]  = useState("All");
  const [condition, setCondition] = useState("All");
  const [minPrice,  setMinPrice]  = useState("");
  const [maxPrice,  setMaxPrice]  = useState("");
  const [sort,      setSort]      = useState("newest");
  const [sideOpen,  setSideOpen]  = useState(true);

  const filtered = useMemo(() => {
    let result = [...items];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(i =>
        i.title.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q) ||
        i.seller.toLowerCase().includes(q)
      );
    }
    if (category !== "All")  result = result.filter(i => i.category === category);
    if (condition !== "All") result = result.filter(i => i.condition === condition);
    if (minPrice !== "")     result = result.filter(i => i.price >= Number(minPrice));
    if (maxPrice !== "")     result = result.filter(i => i.price <= Number(maxPrice));

    if (sort === "price_asc")  result.sort((a, b) => a.price - b.price);
    if (sort === "price_desc") result.sort((a, b) => b.price - a.price);
    // "newest" keeps the original order (id order from data file)

    return result;
  }, [search, category, condition, minPrice, maxPrice, sort]);

  const handleReset = () => {
    setSearch("");
    setCategory("All");
    setCondition("All");
    setMinPrice("");
    setMaxPrice("");
    setSort("newest");
  };

  return (
    <main style={{ padding: "40px 48px", maxWidth: "1200px", margin: "0 auto" }}>

      {/* ── Page header ── */}
      <div style={{ marginBottom: "32px" }}>
        <p style={{
          fontFamily:    "'Bebas Neue', Impact, sans-serif",
          fontSize:      "13px",
          letterSpacing: "4px",
          color:         "#cc0000",
          textTransform: "uppercase",
          margin:        "0 0 6px",
        }}>
          LaGuardia Community College
        </p>
        <h1 style={{
          fontFamily:    "'Bebas Neue', Impact, sans-serif",
          fontSize:      "clamp(36px, 5vw, 60px)",
          lineHeight:    0.95,
          color:         "#111",
          margin:        "0 0 12px",
          letterSpacing: "1px",
        }}>
          MARKETPLACE
        </h1>
        <p style={{ color: "#777", fontFamily: "Georgia, serif", fontSize: "15px", margin: 0 }}>
          {filtered.length} listing{filtered.length !== 1 ? "s" : ""} available
        </p>
      </div>

      {/* ── Search + sort bar ── */}
      <div style={{
        display:       "flex",
        gap:           "12px",
        marginBottom:  "28px",
        alignItems:    "center",
        flexWrap:      "wrap",
      }}>
        {/* Search input */}
        <div style={{ position: "relative", flex: "1 1 280px" }}>
          <span style={{
            position:  "absolute",
            left:      "14px",
            top:       "50%",
            transform: "translateY(-50%)",
            fontSize:  "16px",
            color:     "#aaa",
          }}>🔍</span>
          <input
            type="text"
            placeholder="Search items, categories, sellers…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width:        "100%",
              padding:      "12px 14px 12px 40px",
              fontSize:     "14px",
              border:       "2px solid #e8e8e8",
              borderRadius: "8px",
              outline:      "none",
              fontFamily:   "Georgia, serif",
              boxSizing:    "border-box",
              transition:   "border-color 0.2s",
            }}
            onFocus={e => e.target.style.borderColor = "#cc0000"}
            onBlur={e  => e.target.style.borderColor = "#e8e8e8"}
          />
        </div>

        {/* Sort */}
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          style={{
            padding:      "12px 16px",
            fontSize:     "13px",
            border:       "2px solid #e8e8e8",
            borderRadius: "8px",
            outline:      "none",
            background:   "#fff",
            color:        "#333",
            fontFamily:   "Georgia, serif",
            cursor:       "pointer",
          }}
        >
          {SORT_OPTIONS.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>

        {/* Toggle sidebar */}
        <button
          onClick={() => setSideOpen(o => !o)}
          style={{
            padding:       "12px 18px",
            fontSize:      "12px",
            fontWeight:    700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            border:        "2px solid #111",
            borderRadius:  "8px",
            background:    sideOpen ? "#111" : "#fff",
            color:         sideOpen ? "#fff" : "#111",
            cursor:        "pointer",
            transition:    "all 0.18s",
            whiteSpace:    "nowrap",
          }}
        >
          {sideOpen ? "✕ Hide Filters" : "⊞ Show Filters"}
        </button>
      </div>

      {/* ── Body: sidebar + grid ── */}
      <div style={{ display: "flex", gap: "28px", alignItems: "flex-start" }}>

        {/* ── Sidebar filters ── */}
        {sideOpen && (
          <aside style={{
            width:        "230px",
            flexShrink:   0,
            background:   "#fff",
            border:       "2px solid #ebebeb",
            borderRadius: "10px",
            padding:      "24px 20px",
            position:     "sticky",
            top:          "80px",
          }}>
            <div style={{
              display:        "flex",
              justifyContent: "space-between",
              alignItems:     "center",
              marginBottom:   "20px",
            }}>
              <h3 style={{
                fontFamily:    "'Bebas Neue', Impact, sans-serif",
                fontSize:      "18px",
                letterSpacing: "1.5px",
                color:         "#111",
                margin:        0,
              }}>
                FILTERS
              </h3>
              <button
                onClick={handleReset}
                style={{
                  background:    "none",
                  border:        "none",
                  color:         "#cc0000",
                  fontSize:      "11px",
                  fontWeight:    700,
                  letterSpacing: "0.5px",
                  cursor:        "pointer",
                  padding:       0,
                }}
              >
                Reset All
              </button>
            </div>

            {/* Divider */}
            <div style={{ height: "2px", background: "#cc0000", marginBottom: "20px" }} />

            {/* Category */}
            <FilterGroup label="Category">
              {CATEGORIES.map(cat => (
                <FilterChip
                  key={cat}
                  label={cat}
                  active={category === cat}
                  onClick={() => setCategory(cat)}
                />
              ))}
            </FilterGroup>

            {/* Condition */}
            <FilterGroup label="Condition">
              {CONDITIONS.map(cond => (
                <FilterChip
                  key={cond}
                  label={cond}
                  active={condition === cond}
                  onClick={() => setCondition(cond)}
                />
              ))}
            </FilterGroup>

            {/* Price range */}
            <FilterGroup label="Price Range ($)">
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={e => setMinPrice(e.target.value)}
                  style={priceInputStyle}
                />
                <span style={{ color: "#bbb", fontSize: "12px" }}>–</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={e => setMaxPrice(e.target.value)}
                  style={priceInputStyle}
                />
              </div>
            </FilterGroup>
          </aside>
        )}

        {/* ── Item grid ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {filtered.length === 0 ? (
            <div style={{
              textAlign:  "center",
              padding:    "80px 20px",
              color:      "#aaa",
              fontFamily: "Georgia, serif",
            }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
              <p style={{ fontSize: "18px", fontWeight: 600, color: "#555", marginBottom: "8px" }}>
                No items found
              </p>
              <p style={{ fontSize: "14px" }}>
                Try adjusting your search or filters.
              </p>
              <button
                onClick={handleReset}
                style={{
                  marginTop:     "20px",
                  padding:       "10px 24px",
                  background:    "#cc0000",
                  color:         "#fff",
                  border:        "none",
                  borderRadius:  "6px",
                  fontWeight:    700,
                  fontSize:      "13px",
                  cursor:        "pointer",
                  letterSpacing: "0.5px",
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(220px, 1fr))",
            gap: "22px",
          }}
          >
            {filtered.map((item) => (
              <ItemCard key={item.id} item={item} />
          ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

/* ── Small helper components ── */

function FilterGroup({ label, children }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <p style={{
        fontFamily:    "'Bebas Neue', Impact, sans-serif",
        fontSize:      "13px",
        letterSpacing: "1.5px",
        color:         "#111",
        margin:        "0 0 10px",
        textTransform: "uppercase",
      }}>
        {label}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {children}
      </div>
    </div>
  );
}

function FilterChip({ label, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding:       "5px 10px",
        fontSize:      "11px",
        fontWeight:    600,
        border:        `1.5px solid ${active ? "#cc0000" : "#e0e0e0"}`,
        borderRadius:  "5px",
        background:    active ? "#cc0000" : hovered ? "#fff0f0" : "#fff",
        color:         active ? "#fff" : hovered ? "#cc0000" : "#555",
        cursor:        "pointer",
        transition:    "all 0.15s",
        letterSpacing: "0.3px",
      }}
    >
      {label}
    </button>
  );
}

const priceInputStyle = {
  width:        "68px",
  padding:      "7px 9px",
  fontSize:     "12px",
  border:       "1.5px solid #e0e0e0",
  borderRadius: "6px",
  outline:      "none",
  fontFamily:   "Georgia, serif",
};