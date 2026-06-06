export default function Footer() {
  return (
   <footer style={{
  background: "#111",
  color: "#fff",
  padding: "56px 48px 24px",
  borderTop: "4px solid #cc0000",
  textAlign: "left",
}}>

      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
      }}>

        {/* Top row */}
       <div style={{
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "40px",
  marginBottom: "48px",
  textAlign: "left",
}}>


          {/* Brand column */}
          <div>
            <h2 style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "28px", letterSpacing: "2px",
              margin: "0 0 4px", color: "#fff",
            }}>
              RAD <span style={{ color: "#cc0000" }}>HAWK</span>
            </h2>
            <p style={{
              fontSize: "11px", letterSpacing: "3px",
              color: "#666", textTransform: "uppercase",
              margin: "0 0 16px",
            }}>
              Marketplace
            </p>
            <p style={{
              color: "#888", fontSize: "13px",
              lineHeight: 1.7, maxWidth: "260px",
            }}>
              Buy, sell, and connect with LaGuardia students. Your campus. Your community.
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              {[
  { icon: "f", label: "Facebook", color: "#1877f2" },
  { icon: "in", label: "LinkedIn", color: "#0a66c2" },
  { icon: "ig", label: "Instagram", color: "#e1306c" },
].map((social, i) => (
  <a key={i} href="#" title={social.label} style={{
    width: "36px", height: "36px",
    background: "#1f1f1f",
    border: "1px solid #2a2a2a",
    borderRadius: "4px",
    display: "flex", alignItems: "center",
    justifyContent: "center",
    fontSize: "11px", fontWeight: 800,
    color: social.color,
    textDecoration: "none",
    cursor: "pointer",
    letterSpacing: "-0.5px",
  }}
    onMouseEnter={e => e.currentTarget.style.background = social.color}
    onMouseLeave={e => e.currentTarget.style.background = "#1f1f1f"}
  >
    {social.icon}
  </a>
))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: "#fff", fontSize: "12px",
              fontWeight: 700, letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 20px",
              paddingBottom: "10px",
              borderBottom: "2px solid #cc0000",
              display: "inline-block",
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Home", href: "/" },
                { label: "Marketplace", href: "/marketplace" },
                { label: "Categories", href: "/marketplace" },
                { label: "Safety", href: "/safety" },
                { label: "Support", href: "/support" },
              ].map(link => (
                <li key={link.label} style={{ marginBottom: "10px" }}>
                  <a href={link.href} style={{
                    color: "#888", fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={e => e.target.style.color = "#cc0000"}
                    onMouseLeave={e => e.target.style.color = "#888"}
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{
              color: "#fff", fontSize: "12px",
              fontWeight: 700, letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 20px",
              paddingBottom: "10px",
              borderBottom: "2px solid #cc0000",
              display: "inline-block",
            }}>
              Categories
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Clothes", "Shoes", "Books", "Electronics", "Furniture", "Free Items"].map(cat => (
                <li key={cat} style={{ marginBottom: "10px" }}>
                  <a href={`/marketplace?category=${cat}`} style={{
                    color: "#888", fontSize: "13px",
                    textDecoration: "none",
                  }}
                    onMouseEnter={e => e.target.style.color = "#cc0000"}
                    onMouseLeave={e => e.target.style.color = "#888"}
                  >
                    → {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety */}
          <div>
            <h4 style={{
              color: "#fff", fontSize: "12px",
              fontWeight: 700, letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 20px",
              paddingBottom: "10px",
              borderBottom: "2px solid #cc0000",
              display: "inline-block",
            }}>
              Safety
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Safety Tips", "Report a User", "Campus Meetup Spots", "Contact Support"].map(item => (
                <li key={item} style={{ marginBottom: "10px" }}>
                  <a href="/safety" style={{
                    color: "#888", fontSize: "13px",
                    textDecoration: "none",
                  }}
                    onMouseEnter={e => e.target.style.color = "#cc0000"}
                    onMouseLeave={e => e.target.style.color = "#888"}
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #222", paddingTop: "24px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "12px",
        }}>
          <p style={{ color: "#555", fontSize: "12px", margin: 0 }}>
            © 2026 Rad Hawk Marketplace — LaGuardia Community College Student Project
          </p>
          <p style={{ color: "#555", fontSize: "12px", margin: 0 }}>
            Built with ❤️ by <span style={{ color: "#cc0000" }}>Team RAD HAWK</span>
          </p>
        </div>

      </div>
    </footer>
  );
}