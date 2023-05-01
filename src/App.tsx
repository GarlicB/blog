import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { PostList } from "./components/PostList";
import { Post } from "./components/Post";
import Header from "./components/Header";
import Footer from "./components/Footer";

type PostMetadata = {
  title: string;
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
        <Route path="/blog/posts/:postSlug" element={<Post />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
