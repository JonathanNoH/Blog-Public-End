import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Blog</h1>
      <nav role={"navigation"}>
        <Link to="/">Home</Link>
        <Link to="/archive">Archive</Link>
      </nav>
    </div>
  )
} 

export default Header;