import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/blog`, {});
      }}
      className="header"
    >
      GarlicB.log
    </div>
  );
}

export default Header;
