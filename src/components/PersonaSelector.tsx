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
    <section className="panel persona-panel" aria-labelledby="persona-title">
      <div className="panel-heading">
        <p className="panel-kicker">Step 02</p>
        <h3 id="persona-title">选择陪伴人设</h3>
      </div>

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
