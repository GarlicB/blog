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
          navigate(`/blog/posts/2022/12/about`);
        }}
      >
        About
      </div>
    </div>
  );
}

export default Header;
