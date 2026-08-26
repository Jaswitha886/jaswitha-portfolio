function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar__brand">
        Jaswitha
      </a>

      <nav className="navbar__links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#notes">Notes</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Navbar