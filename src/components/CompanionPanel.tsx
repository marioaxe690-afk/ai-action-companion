import type { Persona } from "../types";

interface CompanionPanelProps {
  persona: Persona;
  feedback: string;
  progressPercent: number;
  completedCount: number;
  totalCount: number;
  currentActionTitle: string;
}

function CompanionPanel({
  persona,
  feedback,
  progressPercent,
  completedCount,
  totalCount,
  currentActionTitle,
}: CompanionPanelProps) {
  const progressLabel =
    totalCount === 0 ? "等待行动卡" : `${completedCount}/${totalCount} 已完成`;

  return (
    <section className="companion-panel" aria-labelledby="companion-title">
      <div className="panel-heading">
        <p className="panel-kicker">Live feedback</p>
        <h3 id="companion-title">人设服务于行动</h3>
      </div>

      <div className="companion-card">
        <div>
          <p className="companion-name">{persona.name}</p>
          <p className="companion-role">{persona.summary}</p>
        </div>
        <div className="progress-badge">{progressPercent}%</div>
      </div>

      <div className="current-action">
        <span>当前行动卡</span>
        <strong>{currentActionTitle}</strong>
      </div>

      <blockquote>{feedback}</blockquote>
      <p className="feedback-meta">{progressLabel}</p>
    </section>
  );
}

export default CompanionPanel;
