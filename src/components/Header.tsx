import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/blog`, {});
      }}
      className="header"
      style={{
        alignItems: "center",
        display: "flex",
        height: "40px",
        padding: "0 1rem",
        textAlign: "left",
      }}
    >
      GarlicB.log
    </div>
  );
}

export default Header;
