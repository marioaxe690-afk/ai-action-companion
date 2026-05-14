import type { ActionStep } from "../types";

interface ActionChainProps {
  steps: ActionStep[];
  completedStepIds: string[];
  generatedContent: string;
  onToggleStep: (stepId: string) => void;
}

function ActionChain({
  steps,
  completedStepIds,
  generatedContent,
  onToggleStep,
}: ActionChainProps) {
  return (
    <section className="action-cards-section" id="action-cards" aria-labelledby="cards-title">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Action cards</p>
          <h2 id="cards-title">行动卡生成区</h2>
        </div>
        <p className="section-note">
          每张卡都包含原因、耗时、第一步、完成标准、风险提示和下一步。
        </p>
      </div>

      {steps.length === 0 ? (
        <div className="empty-state wide-empty">
          <p>这里会生成 5 张可勾选的行动卡。</p>
          <span>先在内容输入中心点击“生成行动卡”。</span>
        </div>
      ) : (
        <>
          <p className="chain-goal">
            已将内容转化为行动卡：{generatedContent.slice(0, 58)}
            {generatedContent.length > 58 ? "..." : ""}
          </p>
          <ol className="action-card-grid">
            {steps.map((step, index) => {
              const isCompleted = completedStepIds.includes(step.id);

              return (
                <li
                  className={`action-card ${isCompleted ? "is-completed" : ""}`}
                  key={step.id}
                >
                  <div className="card-topline">
                    <span>行动卡 {index + 1}</span>
                    <span>{step.estimateMinutes} 分钟</span>
                  </div>
                  <h3>{step.title}</h3>

                  <dl className="action-card-details">
                    <div>
                      <dt>为什么要做</dt>
                      <dd>{step.reason}</dd>
                    </div>
                    <div>
                      <dt>第一步</dt>
                      <dd>{step.firstStep}</dd>
                    </div>
                    <div>
                      <dt>完成标准</dt>
                      <dd>{step.completionCriteria}</dd>
                    </div>
                    <div>
                      <dt>风险提示</dt>
                      <dd>{step.risk}</dd>
                    </div>
                    <div>
                      <dt>下一步</dt>
                      <dd>{step.nextStep}</dd>
                    </div>
                  </dl>

                  <label className="complete-toggle">
                    <input
                      type="checkbox"
                      checked={isCompleted}
                      onChange={() => onToggleStep(step.id)}
                    />
                    <span>{isCompleted ? "已完成" : "勾选完成"}</span>
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
