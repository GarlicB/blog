import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components/layout";
import { PostList, Post } from "./components/pages";

type PostMetadata = {
  title: string;
  summary: string;
  date: string;
  slug: string;
};

function App() {
  const [posts, setPosts] = useState<PostMetadata[]>([]);

  const fetchPostsMetadata = async () => {
    const response = await fetch("./posts/metadata.json", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPostsMetadata();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/blog/" element={<PostList posts={posts} />} />
        <Route path="/blog/posts/:year/:month/:slug" element={<Post />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
