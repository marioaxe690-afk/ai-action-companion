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
  const nextPrompt =
    totalCount === 0
      ? "先把内容转成行动卡。"
      : completedCount === totalCount
        ? "记录这次有效的执行方式。"
        : "完成当前卡后再进入下一张。";

  return (
    <section className="companion-panel" aria-labelledby="companion-title">
      <div className="panel-heading">
        <p className="panel-kicker">Live feedback</p>
        <h3 id="companion-title">实时执行反馈</h3>
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
      <div className="feedback-footer">
        <p className="feedback-meta">{progressLabel}</p>
        <p className="next-prompt">下一步提示：{nextPrompt}</p>
      </div>
    </section>
  );
}

export default CompanionPanel;
