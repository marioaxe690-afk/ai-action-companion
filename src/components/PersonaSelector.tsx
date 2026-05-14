import type { Persona, PersonaId } from "../types";

interface PersonaSelectorProps {
  personas: Persona[];
  selectedPersonaId: PersonaId;
  onSelectPersona: (personaId: PersonaId) => void;
}

function PersonaSelector({
  personas,
  selectedPersonaId,
  onSelectPersona,
}: PersonaSelectorProps) {
  return (
    <section className="persona-panel" aria-labelledby="persona-title">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Execution tone</p>
        <h2 id="persona-title">陪伴执行区</h2>
      </div>
      <p className="panel-description">执行模式选择</p>

      <div className="persona-grid" role="list">
        {personas.map((persona) => {
          const isActive = persona.id === selectedPersonaId;

          return (
            <button
              className={`persona-card ${isActive ? "is-active" : ""}`}
              key={persona.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelectPersona(persona.id)}
            >
              <span className="persona-name">{persona.name}</span>
              <span className="persona-role">{persona.role}</span>
              <span className="persona-signal">{persona.signal}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default PersonaSelector;
