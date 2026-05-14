import type { ContentExample, ContentInputType, InputTypeId } from "../types";

interface GoalInputPanelProps {
  content: string;
  inputTypes: ContentInputType[];
  selectedInputTypeId: InputTypeId;
  examples: ContentExample[];
  generatedContent: string;
  onContentChange: (value: string) => void;
  onSelectInputType: (value: InputTypeId) => void;
  onSelectExample: (example: ContentExample) => void;
  onGenerate: () => void;
}

function GoalInputPanel({
  content,
  inputTypes,
  selectedInputTypeId,
  examples,
  generatedContent,
  onContentChange,
  onSelectInputType,
  onSelectExample,
  onGenerate,
}: GoalInputPanelProps) {
  return (
    <section className="content-input-section" id="input-center" aria-labelledby="input-title">
      <div className="section-heading">
        <p className="eyebrow">Content input center</p>
        <h2 id="input-title">内容输入中心</h2>
      </div>

      <div className="input-workbench">
        <div className="input-type-panel">
          <p className="field-label">输入类型</p>
          <div className="type-grid" role="list">
            {inputTypes.map((type) => {
              const isActive = type.id === selectedInputTypeId;

              return (
                <button
                  className={`type-button ${isActive ? "is-active" : ""} ${
                    type.isPrimary ? "is-primary" : ""
                  }`}
                  key={type.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => onSelectInputType(type.id)}
                >
                  <span>{type.label}</span>
                  <small>{type.description}</small>
                </button>
              );
            })}
          </div>
        </div>

        <div className="content-editor-panel">
          <label className="field-label" htmlFor="content-input">
            粘贴你刷到、看到、想到的内容
          </label>
          <textarea
            id="content-input"
            value={content}
            onChange={(event) => onContentChange(event.target.value)}
            placeholder="例如：我收到一个 AI 黑客松比赛通知，需要报名、组队、确定方向和准备 Demo，但现在不知道从哪一步开始。"
            rows={7}
          />

          <div className="example-list" aria-label="示例内容">
            {examples.map((example) => (
              <button
                className="example-button"
                key={example.id}
                type="button"
                onClick={() => onSelectExample(example)}
              >
                <span>{example.title}</span>
                <small>{example.hint}</small>
              </button>
            ))}
          </div>

          <button className="primary-action" type="button" onClick={onGenerate}>
            生成行动卡
          </button>

          {generatedContent ? (
            <p className="generated-note">
              当前 mock 转化来自：{generatedContent.slice(0, 42)}
              {generatedContent.length > 42 ? "..." : ""}
            </p>
          ) : (
            <p className="generated-note muted">
              点击示例或输入内容后，可生成场景理解与行动卡。当前版本不接真实 AI。
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default GoalInputPanel;
