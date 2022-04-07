import React, { Component } from "react";
const HOC = (Wrapp, c) => {
  return (
    <div className={c}>
      <Wrapp />
    </div>
  );
};

export default HOC;
