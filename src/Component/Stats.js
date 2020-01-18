import React from "react";

function Stats() {
  return (
    <div className="Stats">
      <div>Level18</div>
      <div>60 (3.7) CS</div>
      <div className="kill-rate">P/Kill 67%</div>
      <div>
        <span>Tier Average</span>
        <span style={{ fontWeight: "bold", display: "block" }}>Silver 4</span>
      </div>
    </div>
  );
}

export default Stats;
