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
      <div className="hero-stage">
        <div className="hero-copy">
          <p className="eyebrow">AI 内容行动化助手</p>
          <h1>
            <span>普通 AI 给你答案，</span>
            <span>我们把内容变成行动。</span>
          </h1>
          <p className="hero-slogan">
            刷到即行动，是一个 AI 内容行动化工作台。它把视频、截图、通知、学习资料和灵感，转化为可执行的行动卡、任务链和下一步计划。
          </p>
          <p className="hero-anchor">
            3 分钟，把一条比赛通知变成 5 张可执行行动卡。
          </p>
          <div className="hero-actions" aria-label="首屏操作">
            <a className="primary-cta" href="#input-center">
              开始生成行动卡
            </a>
            <a className="secondary-cta" href="#positioning">
              查看产品逻辑
            </a>
          </div>
        </div>

        <aside className="engine-panel" aria-label="AI 转化引擎模拟面板">
          <div className="engine-panel-top">
            <span className="live-dot" />
            <span>AI 转化引擎</span>
            <small>Mock Pipeline</small>
          </div>

          <div className="engine-flow">
            <div className="engine-block engine-input">
              <span>输入</span>
              <strong>AI 黑客松比赛通知</strong>
              <p>报名、组队、定方向、准备 Demo、三天后截止。</p>
            </div>

            <div className="engine-block">
              <span>AI 理解</span>
              <div className="engine-tags">
                <b>场景：比赛 / 黑客松</b>
                <b>意图：报名、组队、定方向</b>
                <b>风险：方向过大、功能发散</b>
              </div>
            </div>

            <div className="engine-block engine-output">
              <span>输出</span>
              <ol>
                <li>行动卡 01：确定产品主方向</li>
                <li>行动卡 02：锁定 MVP 功能</li>
                <li>行动卡 03：搭建网页原型</li>
              </ol>
            </div>
          </div>
        </aside>
      </div>

      <div className="difference-section" id="difference">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">From answer to action</p>
            <h2>普通 AI vs 刷到即行动</h2>
          </div>
          <p className="section-note">
            差异不在“更会聊天”，而在把看到的内容直接压成下一步行动。
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

          <div className="comparison-switch" aria-hidden="true">
            <span>回答</span>
            <strong>→</strong>
            <span>行动</span>
          </div>

          <article className="comparison-column action-column">
            <div className="comparison-label">刷到即行动</div>
            <ul>
              {actionComparison.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
