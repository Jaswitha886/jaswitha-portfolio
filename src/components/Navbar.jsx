import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        Jaswitha
      </Link>

      <nav className="navbar__links" aria-label="Main navigation">
        <Link to="/#about">About</Link>
        <Link to="/#work">Work</Link>
        <Link to="/#notes">Notes</Link>
        <Link to="/#contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Navbar