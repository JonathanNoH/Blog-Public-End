import Articles from "./Articles";

function Home() {
  return (
      <main>
        <h2>Welcome to the homepage of this blog</h2>
        <p>This blog was made with react and express.</p>
        <Articles />
      </main>
  );
}

export default Home;