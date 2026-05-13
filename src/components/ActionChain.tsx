import type { ActionStep } from "../types";

interface ActionChainProps {
  steps: ActionStep[];
  completedStepIds: string[];
  goal: string;
  onToggleStep: (stepId: string) => void;
}

function ActionChain({
  steps,
  completedStepIds,
  goal,
  onToggleStep,
}: ActionChainProps) {
  return (
    <section className="panel action-chain-panel" aria-labelledby="chain-title">
      <div className="panel-heading">
        <p className="panel-kicker">Step 03</p>
        <h3 id="chain-title">行动链</h3>
      </div>

      {steps.length === 0 ? (
        <div className="empty-state">
          <p>这里会显示 mock 拆解步骤。</p>
          <span>点击“生成行动链”后，每一步都可以勾选完成。</span>
        </div>
      ) : (
        <>
          <p className="chain-goal">目标：{goal}</p>
          <ol className="step-list">
            {steps.map((step, index) => {
              const isCompleted = completedStepIds.includes(step.id);

              return (
                <li
                  className={`action-step ${isCompleted ? "is-completed" : ""}`}
                  key={step.id}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={isCompleted}
                      onChange={() => onToggleStep(step.id)}
                    />
                    <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="step-copy">
                      <strong>{step.title}</strong>
                      <span>{step.microAction}</span>
                      <small>
                        预计 {step.estimateMinutes} 分钟 · {step.reason}
                      </small>
                    </span>
                  </label>
                </li>
              );
            })}
          </ol>
        </>
      )}
    </section>
  );
}

export default ActionChain;
