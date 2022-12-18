import PostList from "./PostList";

function Home() {
  return (
    <div
      className="home"
      style={{
        background: "white",
        color: "black",
        minHeight: "calc( 100vh - 80px )",
        maxWidth: "1920px",
        padding: "0 1rem",
      }}
    >
      <div>
        <PostList></PostList>
      </div>
    </div>
  );
}

export default Home;
