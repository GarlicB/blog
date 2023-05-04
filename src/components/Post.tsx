import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

type PostProps = {
  postSlug: string;
};

export const Post: React.FC = () => {
  const [mdSource, setMdSource] = useState<string | null>(null);
  const { postSlug } = useParams<PostProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPostContent = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`./posts/${postSlug}.md`);
        if (!response.ok) {
          throw new Error("Error fetching post");
        }
        const mdSource = await response.text();
        setMdSource(mdSource);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostContent();
  }, [postSlug]);

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <span>Loading</span>
          <span className="loading-dots">...</span>
        </div>
      ) : mdSource ? (
        <>
          <ReactMarkdown className="markdown">{mdSource}</ReactMarkdown>
          <div className="home-button">
            <Link to="/blog/">Home</Link>
          </div>
        </>
      ) : null}
    </>
  );
};
