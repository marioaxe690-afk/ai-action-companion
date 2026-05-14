function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="刷到即行动">
        <span className="brand-dot" />
        <span>刷到即行动</span>
      </a>
      <nav className="header-nav" aria-label="主要导航">
        <a href="#positioning">定位</a>
        <a href="#input-center">输入</a>
        <a href="#action-cards">行动卡</a>
        <a href="#memory">记忆</a>
      </nav>
    </header>
  );
}

export default Header;
