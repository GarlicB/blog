import { Link } from "react-router-dom";

type PostMetadata = {
  title: string;
  summary: string;
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
        <Link key={post.slug} to={`/blog/posts/${post.slug}`}>
          <div className="post-list-item">
            {post.title}
            <div className="post-list-summary">{post.summary}</div>
            <div className="post-list-date">{post.date}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};
