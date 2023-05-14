import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./components/Context";
import ScrollToTop from "./components/ScrollToTop";
import "./main.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <ContextProvider>
      <ScrollToTop />
      <App />
    </ContextProvider>
  </BrowserRouter>
);
