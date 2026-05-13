import type {
  ActionStep,
  FeedbackMap,
  GoalExample,
  Persona,
  ProductFlowStep,
  ProgressStats,
} from "../types";

export const goalExamples: GoalExample[] = [
  {
    id: "exam",
    title: "我想开始准备期末考试",
    hint: "适合学习启动困难",
  },
  {
    id: "essay",
    title: "我想把论文开个头",
    hint: "适合写作拖延",
  },
  {
    id: "fitness",
    title: "我想恢复运动习惯",
    hint: "适合生活节奏重启",
  },
  {
    id: "portfolio",
    title: "我想做一个作品集项目",
    hint: "适合能力展示目标",
  },
];

export const personas: Persona[] = [
  {
    id: "strict",
    name: "严格导师",
    role: "拆掉借口，要求立刻执行",
    summary: "适合需要外部压力、容易反复拖延的时刻。",
    signal: "直接、短句、明确下一步",
  },
  {
    id: "friend",
    name: "温柔朋友",
    role: "降低焦虑，陪你先动一下",
    summary: "适合压力大、害怕开始、需要被接住的时刻。",
    signal: "共情、鼓励、低门槛",
  },
  {
    id: "neko",
    name: "猫娘陪伴",
    role: "用轻松语气把行动变可爱",
    summary: "适合需要趣味感和陪伴感的轻量任务。",
    signal: "俏皮、轻快、提醒不沉重",
  },
  {
    id: "observer",
    name: "冷静监督者",
    role: "只看行为证据和下一次调整",
    summary: "适合想要清晰复盘、不喜欢情绪化反馈的人。",
    signal: "客观、克制、数据导向",
  },
];

export const baseActionSteps: ActionStep[] = [
  {
    id: "step-1",
    title: "把目标改写成一个可验证结果",
    microAction: "打开备忘录，写下“我完成后能看到什么变化”。",
    estimateMinutes: 3,
    reason: "先把模糊愿望变成能判断完成的结果。",
  },
  {
    id: "step-2",
    title: "列出当前最小阻力",
    microAction: "只写一个卡住点，例如资料没找、题目没定、身体太累。",
    estimateMinutes: 4,
    reason: "找到阻力后，下一步才不会继续凭感觉发散。",
  },
  {
    id: "step-3",
    title: "做一个 5 分钟启动动作",
    microAction: "设置 5 分钟计时器，只完成最小动作，不追求质量。",
    estimateMinutes: 5,
    reason: "启动比计划更重要，先创造一个已经开始的证据。",
  },
  {
    id: "step-4",
    title: "留下下一步提示",
    microAction: "写一句“下一次我只需要继续做什么”。",
    estimateMinutes: 2,
    reason: "降低下次重新进入任务的成本。",
  },
  {
    id: "step-5",
    title: "给自己一个完成反馈",
    microAction: "勾选今天完成的动作，并记录一个有效做法。",
    estimateMinutes: 2,
    reason: "让系统记住有效策略，而不是只记录失败。",
  },
];

export const feedbackTemplates: FeedbackMap = {
  strict: {
    empty: "目标还没有变成行动。输入目标，然后生成第一条行动链。",
    started: "已经开始了。别重新规划，现在只处理下一条最小步骤。",
    halfway: "进度过半。保持节奏，把剩余动作按顺序收掉。",
    done: "今天的启动任务完成。停止加码，记录有效动作，明天继续。",
  },
  friend: {
    empty: "先不用想完整计划。把脑子里那个模糊目标写下来就可以。",
    started: "你已经迈出第一步了，先让这个小动作成立，其他事等会儿再说。",
    halfway: "现在已经不是从零开始了。剩下的步骤会比第一步轻很多。",
    done: "今天这组动作已经完成，给自己一点确认感：你真的开始了。",
  },
  neko: {
    empty: "把目标丢进来吧，我会帮你把大任务切成小鱼干一样的小步骤。",
    started: "已经动起来啦。现在只要叼走下一条小步骤，不需要一下子变厉害。",
    halfway: "进度条已经亮起来了。继续一点点推进，很快就能收尾。",
    done: "今日行动链完成。可以伸个懒腰，然后把这个好状态存起来。",
  },
  observer: {
    empty: "暂无行为记录。先输入目标，生成可执行步骤。",
    started: "已产生启动证据。建议继续完成下一项，避免重新决策。",
    halfway: "完成率超过一半。当前策略有效，继续保持同一执行节奏。",
    done: "行动链已完成。记录结果，用于下一次任务拆解调整。",
  },
};

export const productFlowSteps: ProductFlowStep[] = [
  {
    id: "goal",
    title: "目标输入",
    description: "用户写下一个模糊目标，不要求完整计划。",
  },
  {
    id: "understand",
    title: "AI 理解",
    description: "识别目标类型、启动阻力和可能的第一步。",
  },
  {
    id: "breakdown",
    title: "极小任务拆解",
    description: "把目标拆成 2-5 分钟可执行动作。",
  },
  {
    id: "persona",
    title: "人设陪伴",
    description: "根据用户偏好切换反馈语气和监督强度。",
  },
  {
    id: "memory",
    title: "反馈记录",
    description: "记录完成情况、卡点和有效启动方式。",
  },
  {
    id: "adjust",
    title: "下一步调整",
    description: "用轻量记忆优化下一轮行动建议。",
  },
];

export const mockProgressStats: ProgressStats = {
  plannedToday: 5,
  focusMinutes: 16,
  restartCount: 2,
};
