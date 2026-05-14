import type {
  ActionStep,
  ContentExample,
  ContentInputType,
  FeedbackMap,
  InputTypeId,
  MemoryProfileItem,
  Persona,
  ProductFlowStep,
  ProgressStats,
  SceneUnderstanding,
} from "../types";

export const inputTypes: ContentInputType[] = [
  {
    id: "competition",
    label: "比赛通知",
    description: "报名、组队、定方向、作品准备",
    isPrimary: true,
  },
  {
    id: "study",
    label: "学习内容",
    description: "把知识点转成复习任务",
  },
  {
    id: "campus",
    label: "校园通知",
    description: "提炼时间、地点和准备事项",
  },
  {
    id: "short-video",
    label: "短视频文案",
    description: "从刷到的内容里抽出行动建议",
  },
  {
    id: "idea",
    label: "项目灵感",
    description: "把想法压缩成第一版方案",
  },
  {
    id: "life",
    label: "生活目标",
    description: "转成低阻力执行计划",
  },
];

export const contentExamples: ContentExample[] = [
  {
    id: "hackathon",
    title: "我收到一个 AI 黑客松比赛通知",
    hint: "第一版重点场景",
    inputTypeId: "competition",
    content:
      "学校社群里发了一个 AI 黑客松比赛通知，主题和内容理解、视觉搜索、AI 助手相关。三天后截止报名，需要组队、确定方向、做一个可展示 Demo，还要准备路演。我想参加，但现在方向很多，不知道第一步该做什么。",
  },
  {
    id: "calculus",
    title: "我刷到一个高数学习视频",
    hint: "学习内容转任务",
    inputTypeId: "study",
    content:
      "我刷到一个讲高数极限和导数的视频，里面提到先理解定义，再刷典型题。我期末快到了，但不知道怎么把视频内容变成今天的复习计划。",
  },
  {
    id: "lecture",
    title: "我看到一张校园讲座通知",
    hint: "校园通知转清单",
    inputTypeId: "campus",
    content:
      "学院通知周五晚上有一场创业讲座，需要提前报名，地点在图书馆报告厅。通知里还提到可以带项目问题现场提问。",
  },
  {
    id: "product-idea",
    title: "我有一个产品灵感",
    hint: "灵感转方案",
    inputTypeId: "idea",
    content:
      "我想做一个工具，把别人发来的长通知、比赛要求和学习资料，直接变成行动卡片，让我知道现在先做哪一步。",
  },
  {
    id: "phone-time",
    title: "我想减少刷手机时间",
    hint: "生活目标转执行",
    inputTypeId: "life",
    content:
      "我最近每天刷手机时间太长，晚上会拖到很晚才睡。我想减少刷手机时间，但不想靠特别痛苦的方式坚持。",
  },
];

export const personas: Persona[] = [
  {
    id: "strict",
    name: "严格导师",
    role: "压住发散，要求立刻执行",
    summary: "适合方向太多、容易把任务越想越大的时刻。",
    signal: "直接、短句、有边界",
    actionFeedback: "别继续想新点子了。现在只做一件事：把主方向定下来。",
  },
  {
    id: "friend",
    name: "温柔朋友",
    role: "降低压力，陪你先动一步",
    summary: "适合压力大、害怕开始、需要被接住的时刻。",
    signal: "共情、鼓励、低门槛",
    actionFeedback: "不用一次想完，我们先把最重要的方向选出来。",
  },
  {
    id: "observer",
    name: "冷静监督者",
    role: "只看证据和下一次调整",
    summary: "适合需要清晰复盘、不喜欢情绪化反馈的人。",
    signal: "客观、克制、时间盒",
    actionFeedback: "当前任务是方向决策，建议限时 20 分钟完成。",
  },
  {
    id: "partner",
    name: "灵感搭子",
    role: "把方向打磨成能讲清楚的故事",
    summary: "适合有雏形但缺少表达和演示张力的阶段。",
    signal: "启发、画面感、可展示",
    actionFeedback: "这个方向已经有雏形了，我们把它变成能打动人的故事。",
  },
];

export const competitionActionSteps: ActionStep[] = [
  {
    id: "direction",
    title: "确定产品主方向",
    reason: "方向不定，后续开发和分工都会失控。",
    estimateMinutes: 20,
    firstStep: "在三个候选方向中选一个主方向。",
    completionCriteria: "团队能用一句话说清楚产品给谁用、解决什么问题。",
    risk: "不要同时做内容总结、任务管理、视觉搜索和聊天陪伴四个方向。",
    nextStep: "确定 MVP 功能边界。",
  },
  {
    id: "mvp",
    title: "锁定 MVP 功能",
    reason: "第一版不能功能过多，必须做深一条链路。",
    estimateMinutes: 25,
    firstStep: "只保留内容输入、场景理解、行动卡、陪伴反馈、记忆展示。",
    completionCriteria: "团队明确哪些做、哪些不做。",
    risk: "功能全做会变成空壳。",
    nextStep: "设计页面结构。",
  },
  {
    id: "prototype",
    title: "搭建网页原型",
    reason: "黑客松需要可展示 Demo。",
    estimateMinutes: 60,
    firstStep: "先完成静态页面和 mock 流程。",
    completionCriteria: "页面能打开、能点击、能展示完整流程。",
    risk: "不要急着接 API。",
    nextStep: "准备演示场景。",
  },
  {
    id: "team",
    title: "明确团队分工",
    reason: "分工不清会导致重复劳动。",
    estimateMinutes: 15,
    firstStep: "将成员分为产品、前端、技术、测试展示。",
    completionCriteria: "每个人知道自己负责什么。",
    risk: "不要让所有人一起改同一批文件。",
    nextStep: "建立 GitHub 协作规则。",
  },
  {
    id: "pitch",
    title: "准备路演故事",
    reason: "评委需要快速理解产品价值。",
    estimateMinutes: 30,
    firstStep: `用"我们自己参加比赛时遇到的问题"作为开场故事。`,
    completionCriteria: "能讲清楚为什么不是普通 AI。",
    risk: "不要只讲功能，要讲场景和价值。",
    nextStep: "整理演示脚本。",
  },
];

export const studyActionSteps: ActionStep[] = [
  {
    id: "extract",
    title: "提取核心概念",
    reason: "视频信息密度高，先抓主干再补细节。",
    estimateMinutes: 10,
    firstStep: "看完视频后，用自己的话写下 3 个核心概念。",
    completionCriteria: "能不看视频说出每个概念的含义。",
    risk: "不要试图抄下所有内容，只抓主干。",
    nextStep: "用 15 分钟专攻一个概念。",
  },
  {
    id: "focus-block",
    title: "完成一个 15 分钟学习块",
    reason: "短时聚焦比长时间低效刷题更有效。",
    estimateMinutes: 15,
    firstStep: "选一个最薄弱的概念，打开对应课本章节。",
    completionCriteria: "15 分钟内只碰这一个概念，不切换。",
    risk: "不要同时复习多个章节。",
    nextStep: "做一道最小练习题验证理解。",
  },
  {
    id: "mini-exercise",
    title: "做一道最小练习题",
    reason: "做题是检验理解的最快方式。",
    estimateMinutes: 10,
    firstStep: "找一道与当前概念直接相关的基础题。",
    completionCriteria: "独立完成，能解释每一步的原因。",
    risk: "不要一上来就做难题，先验证基础。",
    nextStep: "记录做题过程中不懂的地方。",
  },
  {
    id: "record-doubt",
    title: "记录一个不懂的问题",
    reason: "问题不清，复习就没有方向。",
    estimateMinutes: 5,
    firstStep: "把做题或看书时卡住的点写成一句话问题。",
    completionCriteria: "问题具体到可以问别人或搜索。",
    risk: `不要写"这个章节都不懂"，要写具体点。`,
    nextStep: "安排明天的复习时间。",
  },
  {
    id: "schedule-review",
    title: "安排明日复习",
    reason: "间隔复习比集中突击更持久。",
    estimateMinutes: 5,
    firstStep: "在明天的日程里固定一个 20 分钟的复习时段。",
    completionCriteria: "有具体时间和具体要复习的内容。",
    risk: "不要安排太多，每天只复习 1-2 个概念。",
    nextStep: "明天按时执行，不重新制定计划。",
  },
];

export const genericActionSteps: ActionStep[] = [
  {
    id: "identify",
    title: "识别内容核心价值",
    reason: "刷到的内容容易过眼不过脑。",
    estimateMinutes: 5,
    firstStep: "用一句话说清楚这条内容对你有什么用。",
    completionCriteria: `能回答"这跟我当前的什么事有关"。`,
    risk: `不要只写"内容讲了什么"，要写"对我有什么用"。`,
    nextStep: "把核心价值转成一个具体行动。",
  },
  {
    id: "first-action",
    title: "定义最小第一步",
    reason: "想法不落地就只是想法。",
    estimateMinutes: 10,
    firstStep: "把核心价值转化成一个 10 分钟内能完成的动作。",
    completionCriteria: "动作具体到可以直接开始，不需要再查资料。",
    risk: `不要把第一步定义成"做一个完整方案"。`,
    nextStep: "立刻执行这一步。",
  },
  {
    id: "execute",
    title: "立刻执行第一步",
    reason: "拖延是行动的最大敌人。",
    estimateMinutes: 10,
    firstStep: `现在就开始，不等"准备好了"。`,
    completionCriteria: "有可见的产出，哪怕很粗糙。",
    risk: "不要追求完美，先有再好。",
    nextStep: "记录执行结果和卡点。",
  },
  {
    id: "record",
    title: "记录执行结果",
    reason: "不记录就无法复盘和改进。",
    estimateMinutes: 5,
    firstStep: "写下：做了什么、花了多久、卡在哪里。",
    completionCriteria: "下次看到类似内容时知道怎么更快进入状态。",
    risk: `不要只写"完成了"，要写具体细节。`,
    nextStep: "看看是否有后续行动需要安排。",
  },
  {
    id: "next-step",
    title: "决定是否有后续",
    reason: "不是每条内容都需要长期跟进。",
    estimateMinutes: 5,
    firstStep: "判断这件事是否值得继续投入时间。",
    completionCriteria: "明确：结束 / 安排下次 / 立刻做下一步。",
    risk: `不要因为"已经开始了"就强迫自己继续。`,
    nextStep: "按决定执行，不悬而未决。",
  },
];

export const competitionSceneUnderstanding: SceneUnderstanding = {
  contentType: "比赛 / 黑客松通知",
  userIntent: ["报名", "组队", "定方向", "准备作品"],
  recommendedTransform: ["行动卡", "时间线", "分工建议", "路演提纲"],
  urgency: "中高",
  riskJudgement: ["方向过大", "功能发散", "团队经验不均"],
  suitableTracks: ["内容重构", "刷到懂你的瞬间", "视觉搜索"],
};

export const studySceneUnderstanding: SceneUnderstanding = {
  contentType: "学习资料 / 知识视频",
  userIntent: ["理解概念", "形成练习", "安排复习"],
  recommendedTransform: ["知识卡", "练习任务", "15 分钟行动计划"],
  urgency: "中",
  riskJudgement: ["只收藏不学习", "计划过大", "缺少反馈"],
  suitableTracks: ["内容重构", "刷到懂你的瞬间"],
};

export const genericSceneUnderstanding: SceneUnderstanding = {
  contentType: "通用内容",
  userIntent: ["整理思路", "找到行动点", "推进执行"],
  recommendedTransform: ["行动卡", "关键提取", "最小第一步"],
  urgency: "中",
  riskJudgement: ["过度抽象", "计划过大", "想太多不做"],
  suitableTracks: ["内容重构"],
};

export const sceneActionMap: Record<
  InputTypeId,
  { scene: SceneUnderstanding; steps: ActionStep[] }
> = {
  competition: {
    scene: competitionSceneUnderstanding,
    steps: competitionActionSteps,
  },
  study: {
    scene: studySceneUnderstanding,
    steps: studyActionSteps,
  },
  campus: {
    scene: genericSceneUnderstanding,
    steps: genericActionSteps,
  },
  "short-video": {
    scene: genericSceneUnderstanding,
    steps: genericActionSteps,
  },
  idea: {
    scene: genericSceneUnderstanding,
    steps: genericActionSteps,
  },
  life: {
    scene: genericSceneUnderstanding,
    steps: genericActionSteps,
  },
};

export const feedbackTemplates: FeedbackMap = {
  strict: {
    empty: "先把刷到的内容放进来，不要在脑子里继续整理。",
    started: "行动卡已生成。当前任务：{{action}}。做完再碰下一张，不要跳。",
    halfway: "进度过半。继续收束，把剩余卡片按时间盒处理完。",
    done: "这轮行动卡完成。停止加码，记录这次有效的执行方式。",
  },
  friend: {
    empty: "先不用想完整计划，把那段通知或灵感贴进来就可以。",
    started: "你已经把内容变成行动了，先聚焦「{{action}}」，做完第一步就好。",
    halfway: "现在已经不是从零开始了，剩下的卡片会更容易推进。",
    done: "这组行动卡完成了。下次遇到类似内容，可以更快进入状态。",
  },
  observer: {
    empty: "暂无内容样本。输入后可生成场景理解和行动卡。",
    started: "已产生启动证据。当前行动：{{action}}。建议限时完成，避免重新决策。",
    halfway: "完成率超过一半。当前拆解粒度有效，继续保持同一节奏。",
    done: "行动链已完成。记录结果，用于下一次任务拆解调整。",
  },
  partner: {
    empty: "把你刷到的东西丢进来，我们先找出里面最有价值的行动线。",
    started: "第一条行动线「{{action}}」已经出现了，把它做扎实就是故事的起点。",
    halfway: "这个方向越来越清楚了，剩下要把执行证据补齐。",
    done: "行动闭环已经成形，可以把它整理成路演里的关键瞬间。",
  },
};

export const productFlowSteps: ProductFlowStep[] = [
  {
    id: "input",
    title: "输入原始内容",
    description: "视频文案、截图通知、学习资料、比赛信息、项目灵感或生活目标。",
  },
  {
    id: "understand",
    title: "理解内容场景",
    description: "先识别内容类型、用户意图、紧急程度、风险和可转化方向。",
  },
  {
    id: "rebuild",
    title: "重构关键信息",
    description: "把混乱内容整理成重点、约束、时间线和可执行判断。",
  },
  {
    id: "cards",
    title: "生成行动卡片",
    description: "输出原因、耗时、第一步、完成标准、风险提示和下一步。",
  },
  {
    id: "companion",
    title: "陪伴执行反馈",
    description: "用不同人设服务行动推进，而不是把产品变成闲聊机器人。",
  },
  {
    id: "memory",
    title: "轻量记忆沉淀",
    description: "记录常见卡点、任务粒度和偏好反馈，让下次更懂你。",
  },
];

export const mockProgressStats: ProgressStats = {
  plannedToday: 5,
  focusMinutes: 20,
  restartCount: 1,
};

export const memoryProfile: MemoryProfileItem[] = [
  {
    label: "常见卡点",
    value: "方向太多，难以收束",
  },
  {
    label: "适合任务粒度",
    value: "15-25 分钟",
  },
  {
    label: "偏好反馈",
    value: "直接、结构化、有边界",
  },
  {
    label: "高完成率场景",
    value: "有明确截止时间的比赛任务",
  },
  {
    label: "下一次建议",
    value: "先定主线，再展开功能",
  },
];
