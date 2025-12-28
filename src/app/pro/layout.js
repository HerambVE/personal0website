export default function ProfessionalLayout({ sections }) {
  return (
    <div
      style={{
        minHeight: "100vh", display: "flex", justifyContent: "center",
      }}
    >
      <main
        style={{
          display: "flex", flexDirection: "column", alignItems: "center", width: "100%",
        }}
      >
        {sections}
      </main>
    </div>
  );
}
