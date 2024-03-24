import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleRgb() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb${r},${g},${b}`);
  }
  useEffect(() => {
    if (typeOfColor === "rgb") handleRgb();
    else handleHex();
  }, [typeOfColor]);
  return (
    <div style={{ width: "100vx", height: "100vh", background: color }}>
      <button onClick={() => setTypeOfColor("hex")}>createHexColor</button>
      <button onClick={() => setTypeOfColor("rgb")}>createRgbColor</button>
      <button onClick={typeOfColor === "hex" ? handleHex : handleRgb}>
        GenerateRandomColor
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "40px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB color" : "HEX color"}</h3>
        <br></br>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
