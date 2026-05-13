import type { GoalExample } from "../types";

interface GoalInputPanelProps {
  goal: string;
  examples: GoalExample[];
  generatedGoal: string;
  onGoalChange: (value: string) => void;
  onGenerate: () => void;
}

function GoalInputPanel({
  goal,
  examples,
  generatedGoal,
  onGoalChange,
  onGenerate,
}: GoalInputPanelProps) {
  return (
    <section className="panel goal-panel" aria-labelledby="goal-title">
      <div className="panel-heading">
        <p className="panel-kicker">Step 01</p>
        <h3 id="goal-title">输入一个模糊目标</h3>
      </div>

      <label className="field-label" htmlFor="goal-input">
        今天最想启动的目标
      </label>
      <textarea
        id="goal-input"
        value={goal}
        onChange={(event) => onGoalChange(event.target.value)}
        placeholder="例如：我想开始准备期末考试，但一直拖着没动"
        rows={5}
      />

      <div className="example-list" aria-label="示例目标">
        {examples.map((example) => (
          <button
            className="example-button"
            key={example.id}
            type="button"
            onClick={() => onGoalChange(example.title)}
          >
            <span>{example.title}</span>
            <small>{example.hint}</small>
          </button>
        ))}
      </div>

      <button className="primary-action" type="button" onClick={onGenerate}>
        生成行动链
      </button>

      {generatedGoal ? (
        <p className="generated-note">当前行动链来自 mock 拆解：{generatedGoal}</p>
      ) : (
        <p className="generated-note muted">先填入目标，再生成一条 mock 行动链。</p>
      )}
    </section>
  );
}

export default GoalInputPanel;
