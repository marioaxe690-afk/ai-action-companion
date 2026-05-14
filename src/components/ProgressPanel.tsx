import type { ProgressStats } from "../types";

interface ProgressPanelProps {
  completedCount: number;
  totalCount: number;
  progressPercent: number;
  stats: ProgressStats;
}

function ProgressPanel({
  completedCount,
  totalCount,
  progressPercent,
  stats,
}: ProgressPanelProps) {
  const completionRate = totalCount === 0 ? 0 : progressPercent;

  return (
    <section className="progress-panel" aria-labelledby="progress-title">
      <div className="panel-heading">
        <p className="panel-kicker">Progress</p>
        <h3 id="progress-title">完成进度</h3>
      </div>

      <div
        className="progress-meter"
        role="progressbar"
        aria-valuenow={completionRate}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`当前完成率 ${completionRate}%`}
      >
        <span style={{ width: `${completionRate}%` }} />
      </div>

      <div className="progress-number">
        <strong>{completedCount}</strong>
        <span>/ {totalCount || stats.plannedToday} 张行动卡</span>
      </div>

      <div className="stats-grid">
        <div>
          <span>完成率</span>
          <strong>{completionRate}%</strong>
        </div>
        <div>
          <span>建议时间盒</span>
          <strong>{stats.focusMinutes}</strong>
        </div>
        <div>
          <span>重启次数</span>
          <strong>{stats.restartCount}</strong>
        </div>
      </div>
    </section>
  );
}

export default ProgressPanel;
