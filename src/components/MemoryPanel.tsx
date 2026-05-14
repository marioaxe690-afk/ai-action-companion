import type { MemoryProfileItem } from "../types";

interface MemoryPanelProps {
  items: MemoryProfileItem[];
}

function MemoryPanel({ items }: MemoryPanelProps) {
  return (
    <section className="memory-section" id="memory" aria-labelledby="memory-title">
      <div className="section-heading">
        <p className="eyebrow">Light memory</p>
        <h2 id="memory-title">下次更懂你</h2>
      </div>

      <p className="memory-copy">
        这里对应“刷到懂你的瞬间”：系统不保存真实账号数据，只用 mock 行动反馈展示轻量记忆如何帮助下一次更快收束。
      </p>

      <div className="memory-grid">
        {items.map((item) => (
          <article className="memory-item" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MemoryPanel;
