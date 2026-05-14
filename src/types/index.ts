export type PersonaId = "strict" | "friend" | "observer" | "partner";

export type InputTypeId =
  | "competition"
  | "study"
  | "campus"
  | "short-video"
  | "idea"
  | "life";

export interface Persona {
  id: PersonaId;
  name: string;
  role: string;
  summary: string;
  signal: string;
  actionFeedback: string;
}

export interface ContentInputType {
  id: InputTypeId;
  label: string;
  description: string;
  isPrimary?: boolean;
}

export interface ContentExample {
  id: string;
  title: string;
  hint: string;
  content: string;
  inputTypeId: InputTypeId;
}

export interface ActionStep {
  id: string;
  title: string;
  reason: string;
  estimateMinutes: number;
  firstStep: string;
  completionCriteria: string;
  risk: string;
  nextStep: string;
}

export interface SceneUnderstanding {
  contentType: string;
  userIntent: string[];
  recommendedTransform: string[];
  urgency: string;
  riskJudgement: string[];
  suitableTracks: string[];
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

export interface MemoryProfileItem {
  label: string;
  value: string;
}

export type FeedbackStage = "empty" | "started" | "halfway" | "done";

export type FeedbackMap = Record<PersonaId, Record<FeedbackStage, string>>;
