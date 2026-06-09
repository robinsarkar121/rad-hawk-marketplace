import { useState } from "react";

const CATEGORIES = ["All", "Electronics", "Clothing", "Books", "Furniture", "Sports", "Other"];
const CONDITIONS = ["All", "New", "Used"];

export default function Filters({ onFilterChange }) {
  const [category, setCategory] = useState("All");
  const [condition, setCondition] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");

  const handleApply = () => {
    if (onFilterChange) {
      onFilterChange({ category, condition, minPrice, maxPrice, location });
    }
  };

  const handleReset = () => {
    setCategory("All");
    setCondition("All");
    setMinPrice("");
    setMaxPrice("");
    setLocation("");
    if (onFilterChange) {
      onFilterChange({ category: "All", condition: "All", minPrice: "", maxPrice: "", location: "" });
    }
  };

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.title}>Filters</h3>

      {/* Category */}
      <div style={styles.group}>
        <label style={styles.label}>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={styles.select}>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Condition */}
      <div style={styles.group}>
        <label style={styles.label}>Condition</label>
        <div style={styles.radioGroup}>
          {CONDITIONS.map((cond) => (
            <label key={cond} style={styles.radioLabel}>
              <input
                type="radio"
                name="condition"
                value={cond}
                checked={condition === cond}
                onChange={() => setCondition(cond)}
              />
              {" "}{cond}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div style={styles.group}>
        <label style={styles.label}>Price Range ($)</label>
        <div style={styles.priceRow}>
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            style={styles.priceInput}
          />
          <span>–</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            style={styles.priceInput}
          />
        </div>
      </div>

      {/* Location */}
      <div style={styles.group}>
        <label style={styles.label}>Location</label>
        <input
          type="text"
          placeholder="e.g. London, Manchester"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Buttons */}
      <div style={styles.buttonRow}>
        <button onClick={handleApply} style={styles.applyBtn}>Apply</button>
        <button onClick={handleReset} style={styles.resetBtn}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1.2rem",
    width: "240px",
    fontFamily: "sans-serif",
  },
  title: {
    marginTop: 0,
    marginBottom: "1rem",
    fontSize: "1.1rem",
    color: "#333",
  },
  group: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    fontWeight: "600",
    marginBottom: "0.4rem",
    fontSize: "0.9rem",
    color: "#444",
  },
  select: {
    width: "100%",
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "0.9rem",
  },
  radioGroup: {
    display: "flex",
    gap: "0.8rem",
    flexWrap: "wrap",
  },
  radioLabel: {
    fontSize: "0.9rem",
    cursor: "pointer",
  },
  priceRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  priceInput: {
    width: "80px",
    padding: "0.4rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "0.9rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "0.9rem",
    boxSizing: "border-box",
  },
  buttonRow: {
    display: "flex",
    gap: "0.5rem",
    marginTop: "0.5rem",
  },
  applyBtn: {
    flex: 1,
    padding: "0.5rem",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  resetBtn: {
    flex: 1,
    padding: "0.5rem",
    backgroundColor: "#e5e7eb",
    color: "#333",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
};
