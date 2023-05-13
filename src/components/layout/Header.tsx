import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div
        onClick={() => {
          navigate(`/blog`);
        }}
      >
        GarlicB.log
      </div>
      <div
        onClick={() => {
          navigate(`/blog/posts/about`);
        }}
      >
        About
      </div>
    </div>
  );
}

export default Header;
