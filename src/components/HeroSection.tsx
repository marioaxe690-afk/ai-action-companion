function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Hackathon Prototype v0.1</p>
        <h1>AI 主动陪伴式行动助手</h1>
        <p className="hero-slogan">把“我想做”拆成今天能开始的第一步。</p>
        <div className="hero-points" aria-label="核心卖点">
          <span>极小任务拆解</span>
          <span>人设陪伴反馈</span>
          <span>轻量行动记忆</span>
        </div>
      </div>

      <div className="hero-board" aria-label="产品概念摘要">
        <div className="board-label">Today start plan</div>
        <div className="board-line strong">目标太大时，先别逼自己完整执行。</div>
        <div className="board-line">系统只负责把下一步切到足够小。</div>
        <div className="board-chip-row">
          <span>2-5 min</span>
          <span>Mock AI</span>
          <span>No backend</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
