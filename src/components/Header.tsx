function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand-mark" href="#top" aria-label="刷到即行动">
          <span className="brand-dot" />
          <span>刷到即行动</span>
        </a>
        <nav className="header-nav" aria-label="主要导航">
          <a href="#difference">差异</a>
          <a href="#input-center">输入</a>
          <a href="#scene-understanding">理解</a>
          <a href="#action-cards">行动卡</a>
          <a href="#companion">陪伴</a>
          <a href="#memory">记忆</a>
        </nav>
        <a className="header-cta" href="#input-center">
          生成行动卡
        </a>
      </div>
    </header>
  );
}

export default Header;
