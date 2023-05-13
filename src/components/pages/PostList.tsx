import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  const handleNext = () => {
    setStartIndex((prevStartIndex) => prevStartIndex + 10);
    setEndIndex((prevEndIndex) => prevEndIndex + 10);
    window.scrollTo(0, -40);
  };

  const handlePrev = () => {
    setStartIndex((prevStartIndex) => prevStartIndex - 10);
    setEndIndex((prevEndIndex) => prevEndIndex - 10);
    window.scrollTo(0, -40);
  };

  const paginatedPosts = posts.slice(startIndex, endIndex);

  return (
    <div className="home">
      {paginatedPosts.map((post, index) => (
        <div key={post.slug}>
          {index === 0 ||
          post.date.slice(0, 4) !==
            paginatedPosts[index - 1].date.slice(0, 4) ? (
            <div className="post-list-year">{post.date.slice(0, 4)}년</div>
          ) : null}
          <Link
            to={`/blog/posts/${post.date.slice(0, 4)}/${post.date.slice(
              5,
              7
            )}/${post.slug}`}
          >
            <div className="post-list-item">
              {post.title}
              <div className="post-list-summary">
                <span>{post.summary}</span>
              </div>
              <div className="post-list-date">{post.date}</div>
            </div>
          </Link>
        </div>
      ))}
      <div className="pagination">
        {startIndex > 0 && (
          <div className="move" onClick={handlePrev}>
            prev
          </div>
        )}
        {endIndex < posts.length && (
          <div className="move" onClick={handleNext}>
            next
          </div>
        )}
      </div>
    </div>
  );
};
