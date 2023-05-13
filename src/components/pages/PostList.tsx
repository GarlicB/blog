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
        <Link
          key={post.slug}
          to={`/blog/posts/${post.date.slice(0, 4)}/${post.date.slice(5, 7)}/${
            post.slug
          }`}
        >
          <div className="post-list-item">
            {post.title}
            <div className="post-list-summary">
              <span>{post.summary}</span>
            </div>
            <div className="post-list-date">{post.date}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};
