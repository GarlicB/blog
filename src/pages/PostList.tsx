import { useNavigate } from "react-router-dom";
import list from "../posts/list.json";

function PostList() {
  // CampDetail로 state 값을 전달하기위한 useNavigate 선언
  const navigate = useNavigate();
  let result: string[] = list.posts;

  return (
    <div style={{ padding: "1.2rem 0" }}>
      {result.map((e, i) => {
        const data = e.split("/");
        const year = data[2];
        const mmdd = data[3].slice(0, 3);
        return (
          <div
            key={i}
            onClick={() => {
              navigate(`posts/${i}`, {
                state: {
                  post: e,
                },
              });
            }}
            style={{
              borderBottom: "1px solid grey",
              fontWeight: "700",
              margin: "0 0 1.2rem 0",
              padding: "0.5rem",
            }}
          >
            <div>{data[3].slice(5, -4)}</div>
            <div
              style={{
                fontWeight: "200",
                fontSize: "12px",
                textAlign: "right",
              }}
            >{`${year}${mmdd}`}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
