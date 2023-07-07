const Features = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", marginTop: 30 }}
    >
      {[1, 2, 3].map((item, idx) => (
        <div style={{ background: "#FF5D0A", padding: 50 }} key={item}>
          <p>Feature {idx}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
