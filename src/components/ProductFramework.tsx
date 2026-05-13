import type { ProductFlowStep } from "../types";

interface ProductFrameworkProps {
  steps: ProductFlowStep[];
}

function ProductFramework({ steps }: ProductFrameworkProps) {
  return (
    <section className="framework-section" id="framework">
      <div className="section-heading">
        <p className="eyebrow">Product framework</p>
        <h2>产品流程框架</h2>
      </div>

      <div className="flow-track" aria-label="产品流程">
        {steps.map((step, index) => (
          <article className="flow-step" key={step.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductFramework;
