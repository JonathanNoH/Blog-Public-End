import Articles from "./Articles";

function Home() {
  return (
      <main>
        <h2>Welcome to the homepage of this blog</h2>
        <p>This blog was made using the MERN stack.</p>
        <Articles />
      </main>
  );
}

export default Home;