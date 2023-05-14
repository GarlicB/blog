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
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(10);

  const handlePagination = (newStartIndex: number, newEndIndex: number) => {
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
    window.scrollTo(0, -40);
  };

  const paginatedPosts = posts.slice(startIndex, endIndex);

  return (
    <div className="home">
      {paginatedPosts.map((post, index) => {
        const isNewYear =
          index === 0 ||
          post.date.slice(0, 4) !== paginatedPosts[index - 1].date.slice(0, 4);

        return (
          <div key={post.slug}>
            {isNewYear && (
              <div className="post-list-year">{post.date.slice(0, 4)}년</div>
            )}
            <Link
              to={`/blog/posts/${post.date.slice(0, 4)}/${post.date.slice(
                5,
                7
              )}/${post.slug}`}
            >
              <div className="post-list-item">
                <div className="post-list-title">
                  <span>{post.title}</span>
                </div>
                <div className="post-list-summary">
                  <span>{post.summary}</span>
                </div>
                <div className="post-list-date">{post.date}</div>
              </div>
            </Link>
          </div>
        );
      })}
      <div className="pagination">
        {startIndex > 0 && (
          <div
            className="move"
            onClick={() => handlePagination(startIndex - 10, endIndex - 10)}
          >
            prev
          </div>
        )}
        {endIndex < posts.length && (
          <div
            className="move"
            onClick={() => handlePagination(startIndex + 10, endIndex + 10)}
          >
            next
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;
