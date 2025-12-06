import "./index.css";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const root = document.createElement("div");
root.id = "big_oh_container";
document.body.append(root);

createRoot(root).render(
  <StrictMode>
    <div>Hello World</div>
  </StrictMode>
);