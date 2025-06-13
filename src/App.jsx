import { useState } from "react";
import "./App.css";
import { randomHexGenerator } from "./helper";

function App() {
  const [hex, setHex] = useState("#843581");
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    const finalRes = randomHexGenerator();
    setIsCopied(false);
    setHex(finalRes);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="container" style={{ backgroundColor: hex }}>
      {isCopied && <p className="copied">Copied to Ciplboard</p>}
      <p onClick={handleCopy}>
        Hex Color code is : <span className="hex-code">{hex}</span>
      </p>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default App;
