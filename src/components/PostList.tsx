import React from "react";
import { Link } from "react-router-dom";

type PostMetadata = {
  title: string;
  date: string;
  slug: string;
};

type PostListProps = {
  posts: PostMetadata[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="home">
      {posts.map((post) => (
        <div key={post.slug} className="post-list-item">
          <Link to={`/blog/posts/${post.slug}`}>{post.title}</Link>
          <div className="post-list-date">{post.date}</div>
        </div>
      ))}
    </div>
  );
};
