import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Search for items..."
          value={query}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    gap: "0.5rem",
  },
  input: {
    flex: 1,
    padding: "0.6rem 1rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
  },
  button: {
    padding: "0.6rem 1.2rem",
    fontSize: "1rem",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
