export type PersonaId = "strict" | "friend" | "neko" | "observer";

export interface Persona {
  id: PersonaId;
  name: string;
  role: string;
  summary: string;
  signal: string;
}

export interface GoalExample {
  id: string;
  title: string;
  hint: string;
}

export interface ActionStep {
  id: string;
  title: string;
  microAction: string;
  estimateMinutes: number;
  reason: string;
}

export interface ProductFlowStep {
  id: string;
  title: string;
  description: string;
}

export interface ProgressStats {
  plannedToday: number;
  focusMinutes: number;
  restartCount: number;
}

export type FeedbackStage = "empty" | "started" | "halfway" | "done";

export type FeedbackMap = Record<PersonaId, Record<FeedbackStage, string>>;
