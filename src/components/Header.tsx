function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="AI Action Companion">
        <span className="brand-dot" />
        <span>AI Action Companion</span>
      </a>
      <nav className="header-nav" aria-label="主要导航">
        <a href="#prototype">原型</a>
        <a href="#framework">流程</a>
        <a href="#footer">版本</a>
      </nav>
    </header>
  );
}

export default Header;
