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
    <section className="panel progress-panel" aria-labelledby="progress-title">
      <div className="panel-heading">
        <p className="panel-kicker">Today</p>
        <h3 id="progress-title">进度记录</h3>
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
        <span>/ {totalCount || stats.plannedToday} 个行动</span>
      </div>

      <div className="stats-grid">
        <div>
          <span>今日完成率</span>
          <strong>{completionRate}%</strong>
        </div>
        <div>
          <span>专注分钟</span>
          <strong>{stats.focusMinutes}</strong>
        </div>
        <div>
          <span>重新启动</span>
          <strong>{stats.restartCount}</strong>
        </div>
      </div>
    </section>
  );
}

export default ProgressPanel;
