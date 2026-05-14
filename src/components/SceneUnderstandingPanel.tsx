import type { SceneUnderstanding } from "../types";

interface SceneUnderstandingPanelProps {
  understanding: SceneUnderstanding;
  hasGenerated: boolean;
}

const renderList = (items: string[]) => (
  <div className="tag-row">
    {items.map((item) => (
      <span key={item}>{item}</span>
    ))}
  </div>
);

function SceneUnderstandingPanel({
  understanding,
  hasGenerated,
}: SceneUnderstandingPanelProps) {
  return (
    <section className="scene-section" id="scene-understanding">
      <div className="section-heading">
        <p className="eyebrow">Mock AI understanding</p>
        <h2>AI 场景理解区</h2>
      </div>

      {hasGenerated ? (
        <div className="scene-grid">
          <article className="scene-cell strong-cell">
            <span>内容类型</span>
            <strong>{understanding.contentType}</strong>
          </article>
          <article className="scene-cell">
            <span>用户意图</span>
            {renderList(understanding.userIntent)}
          </article>
          <article className="scene-cell">
            <span>推荐转化</span>
            {renderList(understanding.recommendedTransform)}
          </article>
          <article className="scene-cell strong-cell">
            <span>紧急程度</span>
            <strong>{understanding.urgency}</strong>
          </article>
          <article className="scene-cell">
            <span>风险判断</span>
            {renderList(understanding.riskJudgement)}
          </article>
          <article className="scene-cell">
            <span>适合赛道</span>
            {renderList(understanding.suitableTracks)}
          </article>
        </div>
      ) : (
        <div className="empty-state wide-empty">
          <p>生成行动卡后，这里会展示 mock 的 AI 理解结果。</p>
          <span>第一版重点围绕“AI 黑客松比赛通知”场景。</span>
        </div>
      )}
    </section>
  );
}

export default SceneUnderstandingPanel;
