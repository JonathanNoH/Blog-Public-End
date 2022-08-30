import { Link } from "react-router-dom";
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <h1>The Blog</h1>
      <nav role={"navigation"}>
        <Link to="/">Home</Link>
        <Link to="/archive">Archive</Link>
      </nav>
    </header>
  )
} 

export default Header;