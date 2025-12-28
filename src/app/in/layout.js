// app/in/layout.js
export default function InformalLayout({sections}) {
  return (
    <div style={{ minHeight: "100vh" }}>
      <main>{sections}</main>
    </div>
  );
}
