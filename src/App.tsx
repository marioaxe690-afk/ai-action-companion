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
import {
  baseActionSteps,
  feedbackTemplates,
  goalExamples,
  mockProgressStats,
  personas,
  productFlowSteps,
} from "./data/mockData";
import type { ActionStep, FeedbackStage, PersonaId } from "./types";

const buildMockActionChain = (goalText: string): ActionStep[] => {
  const cleanGoal = goalText.trim() || "今天开始一个小目标";

  return baseActionSteps.map((step, index) => {
    if (index === 0) {
      return {
        ...step,
        title: `把「${cleanGoal}」改写成一个可验证结果`,
      };
    }

    if (index === 2) {
      return {
        ...step,
        microAction: `设置 5 分钟计时器，只处理「${cleanGoal}」相关的一个最小动作。`,
      };
    }

    return step;
  });
};

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
  const [goal, setGoal] = useState("");
  const [generatedGoal, setGeneratedGoal] = useState("");
  const [selectedPersonaId, setSelectedPersonaId] =
    useState<PersonaId>("friend");
  const [actionSteps, setActionSteps] = useState<ActionStep[]>([]);
  const [completedStepIds, setCompletedStepIds] = useState<string[]>([]);

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
  const companionFeedback =
    feedbackTemplates[selectedPersona.id][feedbackStage];

  const handleGenerate = () => {
    const fallbackGoal = goalExamples[0].title;
    const nextGoal = goal.trim() || fallbackGoal;

    setGoal(nextGoal);
    setGeneratedGoal(nextGoal);
    setActionSteps(buildMockActionChain(nextGoal));
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

        <section className="workspace-section" id="prototype">
          <div className="section-heading">
            <p className="eyebrow">Interactive prototype</p>
            <h2>从一个模糊目标，到一条能立刻开始的行动链</h2>
          </div>

          <div className="prototype-grid">
            <GoalInputPanel
              goal={goal}
              examples={goalExamples}
              generatedGoal={generatedGoal}
              onGoalChange={setGoal}
              onGenerate={handleGenerate}
            />
            <PersonaSelector
              personas={personas}
              selectedPersonaId={selectedPersonaId}
              onSelectPersona={setSelectedPersonaId}
            />
            <ActionChain
              steps={actionSteps}
              completedStepIds={completedStepIds}
              goal={generatedGoal}
              onToggleStep={handleToggleStep}
            />
            <aside className="side-stack">
              <CompanionPanel
                persona={selectedPersona}
                feedback={companionFeedback}
                progressPercent={progressPercent}
                completedCount={completedCount}
                totalCount={totalCount}
              />
              <ProgressPanel
                completedCount={completedCount}
                totalCount={totalCount}
                progressPercent={progressPercent}
                stats={mockProgressStats}
              />
            </aside>
          </div>
        </section>

        <ProductFramework steps={productFlowSteps} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
