// app/in/layout.js
export default function InformalLayout({sections}) {
  return (
    <div style={{ padding: "2rem", background: "#fffbe6", minHeight: "100vh" }}>
      <header style={{ marginBottom: "1.5rem" }}>
        <h1>Informal Mode</h1>
      </header>

      <main>{sections}</main>

      <footer style={{ marginTop: "2rem", textAlign: "center", color: "#666" }}>
        © 2025 Your Name
      </footer>
    </div>
  );
}
