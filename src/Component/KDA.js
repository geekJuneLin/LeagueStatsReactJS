import React from "react";

function KDA() {
  return (
    <div className="KDA">
      <div className="kda">
        <span style={{ color: "#555e5e" }}>15</span> /
        <span style={{ color: "#c6443e" }}> 11 </span>/{" "}
        <span style={{ color: "#555e5e" }}>13</span>
      </div>
      <div className="KDARatio">
        <span style={{ color: "#555e5e" }}>5.00:1</span> KDA
      </div>
      <div className="MultiKill">
        <span style={{ color: "#f2f2f2" }}>Double Kill</span>
      </div>
    </div>
  );
}

export default KDA;
