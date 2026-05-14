import type { ProductFlowStep } from "../types";

interface ProductFrameworkProps {
  steps: ProductFlowStep[];
}

function ProductFramework({ steps }: ProductFrameworkProps) {
  return (
    <section className="positioning-section" id="positioning">
      <div className="section-heading">
        <p className="eyebrow">Product positioning</p>
        <h2>刷到即行动：AI 内容行动化助手</h2>
      </div>

      <p className="positioning-copy">
        用户可以输入短视频文案、截图通知、学习资料、比赛信息、项目灵感或生活目标。系统会将原始内容转化为行动卡、知识卡、任务链、项目方案或待办清单。
      </p>

      <div className="flow-track" aria-label="内容行动化流程">
        {steps.map((step, index) => (
          <article className="flow-step" key={step.id}>
            <div className="flow-step-top">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <b className="flow-icon" aria-hidden="true" />
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductFramework;
