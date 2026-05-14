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
          <div className="panel-heading inline-heading">
            <p className="panel-kicker">Input mode</p>
            <h3>输入类型</h3>
          </div>
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
          <div className="console-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <strong>Content Console</strong>
          </div>
          <label className="field-label" htmlFor="content-input">
            粘贴你刷到、看到、想到的内容
          </label>
          <textarea
            id="content-input"
            value={content}
            onChange={(event) => onContentChange(event.target.value)}
            placeholder="> 粘贴你刷到的内容、截图文字或灵感..."
            rows={7}
          />

          <p className="example-title">示例内容</p>
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
            生成行动卡 →
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
