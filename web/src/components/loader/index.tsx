import React from "react";
import Loader from "react-loading";

interface props {
  height: number;
  width: number;
  color: string;
}

const loader: React.FC<props> = ({ height, width, color }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Loader height={height} width={width} color={color} type="spin" />
    </div>
  );
};

export default loader;
