import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

type PostProps = {
  year: string;
  month: string;
  slug: string;
};

export const Post: React.FC = () => {
  const [mdSource, setMdSource] = useState<string | null>(null);
  const { year, month, slug } = useParams<PostProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPostContent = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`./posts/${year}/${month}/${slug}.md`);
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
  }, [slug]);

  return (
    <div className="post">
      {isLoading ? (
        <div className="loading">
          <span>Loading</span>
          <span className="loading-dots" />
        </div>
      ) : mdSource ? (
        <>
          <ReactMarkdown className="markdown" rehypePlugins={[rehypeHighlight]}>
            {mdSource}
          </ReactMarkdown>
          <div className="home-button">
            <Link to="/blog/">Home</Link>
          </div>
        </>
      ) : null}
    </div>
  );
};
