import { useState } from "react";
import React from "react";

import HOC from "./hoc";
const Folder = () => {
  return <div>"Nitin"</div>;
};

const Folder1 = () => {
  return <div>"Gite"</div>;
};
const C1 = HOC(Folder1, "green");
const C2 = HOC(Folder, "red");
export { C1, C2 };
