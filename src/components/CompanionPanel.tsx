import type { Persona } from "../types";

interface CompanionPanelProps {
  persona: Persona;
  feedback: string;
  progressPercent: number;
  completedCount: number;
  totalCount: number;
}

function CompanionPanel({
  persona,
  feedback,
  progressPercent,
  completedCount,
  totalCount,
}: CompanionPanelProps) {
  const progressLabel =
    totalCount === 0 ? "等待行动链" : `${completedCount}/${totalCount} 已完成`;

  return (
    <section className="panel companion-panel" aria-labelledby="companion-title">
      <div className="panel-heading">
        <p className="panel-kicker">Live feedback</p>
        <h3 id="companion-title">陪伴反馈</h3>
      </div>

      <div className="companion-card">
        <div>
          <p className="companion-name">{persona.name}</p>
          <p className="companion-role">{persona.summary}</p>
        </div>
        <div className="progress-badge">{progressPercent}%</div>
      </div>

      <blockquote>{feedback}</blockquote>
      <p className="feedback-meta">{progressLabel}</p>
    </section>
  );
}

export default CompanionPanel;
