const aiComparison = [
  "你问，它答",
  "输出一段文本",
  "需要用户自己整理",
  "用户自己决定下一步",
  "问完关系中断",
];

const actionComparison = [
  "你刷到，它转化",
  "输出行动卡片",
  "自动识别场景和需求",
  "直接生成第一步行动",
  "记录反馈，下次更懂你",
];

function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">AI 内容行动化助手</p>
        <h1>普通 AI 给你答案，我们把内容变成行动。</h1>
        <p className="hero-slogan">
          刷到即行动，是一个 AI 内容行动化工作台。它把视频、截图、通知、学习资料和灵感，转化为可执行的行动卡片、任务链和下一步计划。
        </p>
        <p className="hero-anchor">
          3 分钟，把一条比赛通知变成 5 张可执行的行动卡。
        </p>
      </div>

      <div className="comparison-board" aria-label="普通 AI 与刷到即行动对比">
        <article className="comparison-column muted-column">
          <div className="comparison-label">普通 AI</div>
          <ul>
            {aiComparison.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="comparison-column action-column">
          <div className="comparison-label">刷到即行动</div>
          <ul>
            {actionComparison.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default HeroSection;
