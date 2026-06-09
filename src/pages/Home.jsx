import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";

export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh", background: "#fff" }}>
      <Hero />
      <CategorySection />
    </div>
  );
}