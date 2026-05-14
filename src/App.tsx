import { useMemo, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GoalInputPanel from "./components/GoalInputPanel";
import PersonaSelector from "./components/PersonaSelector";
import ActionChain from "./components/ActionChain";
import CompanionPanel from "./components/CompanionPanel";
import ProgressPanel from "./components/ProgressPanel";
import ProductFramework from "./components/ProductFramework";
import Footer from "./components/Footer";
import SceneUnderstandingPanel from "./components/SceneUnderstandingPanel";
import MemoryPanel from "./components/MemoryPanel";
import {
  contentExamples,
  feedbackTemplates,
  inputTypes,
  memoryProfile,
  mockProgressStats,
  personas,
  productFlowSteps,
  sceneActionMap,
} from "./data/mockData";
import type {
  ActionStep,
  ContentExample,
  FeedbackStage,
  InputTypeId,
  PersonaId,
  SceneUnderstanding,
} from "./types";

const buildMockActionCards = (inputTypeId: InputTypeId): ActionStep[] =>
  sceneActionMap[inputTypeId].steps.map((step) => ({ ...step }));

const resolveFeedback = (template: string, actionTitle: string): string =>
  template.replace(/\{\{action\}\}/g, actionTitle);

const getFeedbackStage = (
  hasGenerated: boolean,
  completedCount: number,
  totalCount: number,
): FeedbackStage => {
  if (!hasGenerated || totalCount === 0 || completedCount === 0) {
    return "empty";
  }

  if (completedCount === totalCount) {
    return "done";
  }

  if (completedCount / totalCount >= 0.5) {
    return "halfway";
  }

  return "started";
};

function App() {
  const [content, setContent] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [selectedInputTypeId, setSelectedInputTypeId] =
    useState<InputTypeId>("competition");
  const [selectedPersonaId, setSelectedPersonaId] =
    useState<PersonaId>("friend");
  const [actionSteps, setActionSteps] = useState<ActionStep[]>([]);
  const [completedStepIds, setCompletedStepIds] = useState<string[]>([]);
  const [sceneUnderstanding, setSceneUnderstanding] =
    useState<SceneUnderstanding>(sceneActionMap.competition.scene);

  const selectedPersona = useMemo(
    () => personas.find((persona) => persona.id === selectedPersonaId) ?? personas[0],
    [selectedPersonaId],
  );

  const completedCount = completedStepIds.length;
  const totalCount = actionSteps.length;
  const progressPercent =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);
  const hasGenerated = actionSteps.length > 0;

  const feedbackStage = getFeedbackStage(
    hasGenerated,
    completedCount,
    totalCount,
  );
  const currentAction =
    actionSteps.find((step) => !completedStepIds.includes(step.id)) ??
    actionSteps[0];
  const currentActionTitle = currentAction?.title ?? "等待生成行动卡";
  const rawFeedback = feedbackTemplates[selectedPersona.id][feedbackStage];
  const companionFeedback = hasGenerated
    ? resolveFeedback(rawFeedback, currentActionTitle)
    : rawFeedback;
  const remainingMinutes = actionSteps
    .filter((step) => !completedStepIds.includes(step.id))
    .reduce((sum, step) => sum + step.estimateMinutes, 0);

  const handleSelectExample = (example: ContentExample) => {
    setContent(example.content);
    setSelectedInputTypeId(example.inputTypeId);
    setSceneUnderstanding(sceneActionMap[example.inputTypeId].scene);

    if (hasGenerated) {
      setActionSteps(buildMockActionCards(example.inputTypeId));
      setCompletedStepIds([]);
    }
  };

  const handleSelectInputType = (inputTypeId: InputTypeId) => {
    setSelectedInputTypeId(inputTypeId);
    setSceneUnderstanding(sceneActionMap[inputTypeId].scene);

    if (hasGenerated) {
      setActionSteps(buildMockActionCards(inputTypeId));
      setCompletedStepIds([]);
    }
  };

  const handleGenerate = () => {
    const fallbackContent = contentExamples[0].content;
    const nextContent = content.trim() || fallbackContent;

    setContent(nextContent);
    setGeneratedContent(nextContent);
    setActionSteps(buildMockActionCards(selectedInputTypeId));
    setSceneUnderstanding(sceneActionMap[selectedInputTypeId].scene);
    setCompletedStepIds([]);
  };

  const handleToggleStep = (stepId: string) => {
    setCompletedStepIds((current) =>
      current.includes(stepId)
        ? current.filter((id) => id !== stepId)
        : [...current, stepId],
    );
  };

  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <ProductFramework steps={productFlowSteps} />
        <GoalInputPanel
          content={content}
          inputTypes={inputTypes}
          selectedInputTypeId={selectedInputTypeId}
          examples={contentExamples}
          generatedContent={generatedContent}
          onContentChange={setContent}
          onSelectInputType={handleSelectInputType}
          onSelectExample={handleSelectExample}
          onGenerate={handleGenerate}
        />
        <SceneUnderstandingPanel
          understanding={sceneUnderstanding}
          hasGenerated={hasGenerated}
        />
        <ActionChain
          steps={actionSteps}
          completedStepIds={completedStepIds}
          generatedContent={generatedContent}
          onToggleStep={handleToggleStep}
        />

        <section className="companion-section" id="companion">
          <PersonaSelector
            personas={personas}
            selectedPersonaId={selectedPersonaId}
            onSelectPersona={setSelectedPersonaId}
          />
          <div className="companion-grid">
            <CompanionPanel
              persona={selectedPersona}
              feedback={companionFeedback}
              progressPercent={progressPercent}
              completedCount={completedCount}
              totalCount={totalCount}
              currentActionTitle={currentActionTitle}
            />
            <ProgressPanel
              completedCount={completedCount}
              totalCount={totalCount}
              progressPercent={progressPercent}
              currentActionTitle={currentActionTitle}
              currentSceneType={sceneUnderstanding.contentType}
              remainingMinutes={remainingMinutes}
              stats={mockProgressStats}
            />
          </div>
        </section>

        <MemoryPanel items={memoryProfile} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
