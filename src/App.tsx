import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/blog" element={<Home />} />
          <Route path="/blog/posts/:id" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
