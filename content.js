// Classification editions and sources are maintained centrally; labels may overlap.
window.CLASSIFICATION_POLICY={
  "checkedOn": "2026-10-18",
  "ccfInternational": {
    "edition": 2026,
    "source": "https://scdm-shu.github.io/ccf/2026-CCF-Ranking.pdf",
    "officialSource": "https://www.ccf.org.cn/Academic_Evaluation/CGAndMT/"
  },
  "ccfChinese": {
    "edition": 2025,
    "source": "https://www.ccf.org.cn/ccftjgjxskwml/"
  },
  "sci": {
    "edition": 2025,
    "scheme": "中科院期刊分区表，2025 年升级版，大类分区；不混用 JCR 或 2026 新锐分区",
    "sources": {
      "IEEE TIP": [
        "https://www.sci365.cn/journals/ieee-transactions-on-image-processing-10577149/",
        "https://journalcompass.com/journals/ieee-transactions-on-image-processing-10577149.html"
      ],
      "IEEE TCSVT": [
        "https://www.cqvip.com/journal/925648X/detail",
        "https://journalcompass.com/journals/ieee-transactions-on-circuits-and-systems-for-video-technology-10518215.html"
      ],
      "ACM TOMM": [
        "https://journalcompass.com/journals/acm-transactions-on-multimedia-computing-communications-and-applicatio-15516857.html",
        "https://www.minicod.com/journals/acm-transactions-on-multimedia-computing-communications-and-applications-210192ab"
      ]
    }
  },
  "counting": "可重叠覆盖：每篇论文在每个标签内计数一次，可同时计入多个标签；汇总标签不要求加和等于论文总数。"
};
window.VENUE_CLASSIFICATIONS={
  "CVPR": [
    "CCF A"
  ],
  "CVPR Findings": [
    "CCF A Findings"
  ],
  "ECCV": [
    "CCF B"
  ],
  "AAAI": [
    "CCF A"
  ],
  "ICASSP": [
    "CCF B"
  ],
  "NeurIPS": [
    "CCF A"
  ],
  "IEEE TIP": [
    "CCF A",
    "SCI 1区",
    "IEEE 汇刊"
  ],
  "计算机学报": [
    "CCF T1"
  ],
  "BMVC": [
    "CCF C"
  ],
  "ACM MM": [
    "CCF A"
  ],
  "IEEE TCSVT": [
    "CCF B",
    "SCI 1区",
    "IEEE 汇刊"
  ],
  "ACM TOMM": [
    "CCF B",
    "SCI 3区",
    "ACM 汇刊"
  ],
  "软件学报": [
    "CCF T1"
  ]
};
window.TAG_BASES={
  "CCF A": "CCF 推荐国际学术会议和期刊目录（2026 年版）",
  "CCF B": "CCF 推荐国际学术会议和期刊目录（2026 年版）",
  "CCF C": "CCF 推荐国际学术会议和期刊目录（2026 年版）",
  "CCF T1": "CCF 计算领域高质量科技期刊分级目录（2025）",
  "CCF T2": "CCF 计算领域高质量科技期刊分级目录（2025）",
  "CCF T3": "CCF 计算领域高质量科技期刊分级目录（2025）",
  "SCI 1区": "中科院期刊分区表（2025 年升级版，大类分区）",
  "SCI 2区": "中科院期刊分区表（2025 年升级版，大类分区）",
  "SCI 3区": "中科院期刊分区表（2025 年升级版，大类分区）",
  "SCI 4区": "中科院期刊分区表（2025 年升级版，大类分区）",
  "IEEE 汇刊": "IEEE Transactions 系列期刊，不含 IEEE 会议",
  "ACM 汇刊": "ACM Transactions 系列期刊，不含 ACM 会议",
  "CCF A Findings": "按用户指定的主页展示与统计口径：栏目汇总计入 CCF A，条目保留 Findings 标识；不据此声称 Findings 具有独立的官方 CCF A 评级",
  "在线发表": "论文首页记载的在线出版状态"
};
// Custom homepage label: CCF A conferences and ECCV; excludes Findings and journals.
window.CONFERENCE_VENUES=['CVPR','CVPR Findings','ECCV','AAAI','ICASSP','NeurIPS','BMVC','ACM MM'];
window.PROFILE={
  "name": "陈俊杰",
  "englishName": "Junjie Chen",
  "email": "chen.bys@outlook.com",
  "education": [
    [
      "2018 — 2023",
      "上海交通大学",
      "工学博士"
    ],
    [
      "2014 — 2018",
      "四川大学",
      "工学学士"
    ]
  ]
};
window.PAPERS=[
  {
    "year": 2026,
    "venue": "CVPR",
    "title": "Learning and Aligning Click-Aware Shape Prior for Interactive Amodal Instance Segmentation",
    "role": "唯一一作",
    "figureImage": "images/paper-banner-01.png",
    "figureWidth": 723,
    "figureHeight": 363,
    "detailPage": "papers/clickpriornet/index.html",
    "desc": "结合用户点击与形状先验，把被遮挡物体的完整轮廓补出来——解决组件结构表征里“看不全也要懂结构”的问题。",
    "figureTitle": "ClickPriorNet：正点击补全缺失前景，负点击去除多余背景",
    "figureBrief": "依次展示遮挡图像、正负点击、点击感知形状先验与完整实例掩码，突出交互信息对补全结果的作用。"
  },
  {
    "year": 2026,
    "venue": "CVPR Findings",
    "title": "Learning to Propose Pose for Category-Agnostic Objects via Joint Refinement with Co-Matching Supervision",
    "role": "唯一一作",
    "figureImage": "images/paper-banner-02.png",
    "desc": "不认识物体类别也能先猜关键点在哪，再用共同匹配监督反复校正——为任意物体的组件结构表征提供关键点基础。",
    "figureTitle": "从姿态候选到联合细化",
    "figureBrief": "并列展示传统支持样本流程与姿态候选预测，再以共同匹配监督连接候选与细化后的关键点。"
  },
  {
    "year": 2026,
    "venue": "ECCV",
    "title": "PoseImageNet: Pose Estimation for Extensive Classes Based on Rich Structure Prototypes",
    "role": "唯一一作",
    "figureImage": "images/paper-banner-03.png",
    "desc": "用“结构原型”给每类物体定义关键点骨架，让上万种物体能用同一套语言描述姿态——为组件结构表征打下数据基础。",
    "figureTitle": "丰富结构原型支撑多类别姿态估计",
    "figureBrief": "展示不同物体类别、结构原型及关键点预测，用对应关系连接类别覆盖与结构多样性。"
  },
  {
    "year": 2026,
    "venue": "AAAI",
    "title": "Infrared-Privileged UAV Detection via Cross-Modal Vector-Quantization",
    "role": "唯一通讯",
    "figureImage": "images/paper-banner-04.png",
    "desc": "训练时借助红外、使用时只用可见光，把红外知识搬进可见光模型，帮助在低空场景中及时发现无人机，服务场景活动理解中的低空监测。",
    "figureTitle": "训练借助红外，推理只用可见光",
    "figureBrief": "分开绘制训练与推理两条流程：训练使用可见光和红外，经向量量化迁移知识；推理仅输入可见光并输出无人机检测框。"
  },
  {
    "year": 2026,
    "venue": "ECCV",
    "title": "A Simple Baseline with Placement Prior for Point-Supervised Oriented Object Detection",
    "role": "唯一通讯",
    "figureImage": "images/paper-banner-05.png",
    "desc": "航拍场景里目标摆放有规律——车顺着车道、船贴着岸线。只标中心点，利用这种放置关系也能检出带方向的框，让场景理解少花标注成本。",
    "figureTitle": "从点标注与放置关系到旋转框",
    "figureBrief": "在航拍场景中标出目标中心点，展示相邻目标放置关系提供的方向与尺度线索，再展示旋转检测框。"
  },
  {
    "year": 2026,
    "venue": "ICASSP",
    "title": "Amodal Instance Segmentation by Expanding from Active Boundary with Compatible Prior",
    "role": "唯一通讯",
    "figureImage": "images/paper-banner-06.png",
    "desc": "从看得见的边界出发，一步步把被挡住的部分推出来，恢复物体完整形状——仍是组件结构表征里“看不全”的解题思路。",
    "figureTitle": "沿活动边界扩展完整物体",
    "figureBrief": "用同一遮挡物体依次展示可见掩码、活动边界、相容先验及完整掩码，突出边界扩展过程。"
  },
  {
    "year": 2025,
    "venue": "NeurIPS",
    "title": "Weak-Shot Keypoint Estimation via Keyness and Correspondence Transfer",
    "role": "唯一一作",
    "selected": true,
    "desc": "新类别一张关键点标注都没有，靠已有类别学会“关键点通常长在哪、怎么对应”再迁移过去——组件结构表征要能推广到没见过的物体。",
    "figureTitle": "有标注基础类别 → 无标注新类别",
    "figureBrief": "展示基础类别的关键点标注、关键性与对应关系知识迁移、新类别无标注图像及关键点预测；明确新类别训练图像没有关键点标注。",
    "figureImage": "images/paper-banner-07.png"
  },
  {
    "year": 2025,
    "venue": "CVPR",
    "title": "Recurrent Feature Mining and Keypoint Mixup Padding for Category-Agnostic Pose Estimation",
    "role": "唯一一作",
    "selected": true,
    "authors": "Junjie Chen, Weilong Chen, Yifan Zuo, Yuming Fang",
    "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Chen_Recurrent_Feature_Mining_and_Keypoint_Mixup_Padding_for_Category-Agnostic_Pose_CVPR_2025_paper.html",
    "desc": "对没见过的类别，反复挖掘图像里的结构线索、边看边修正，把关键点一步步找准——组件结构表征的跨类别泛化。",
    "bib": "@InProceedings{Chen_2025_CVPR,\n  author = {Chen, Junjie and Chen, Weilong and Zuo, Yifan and Fang, Yuming},\n  title = {Recurrent Feature Mining and Keypoint Mixup Padding for Category-Agnostic Pose Estimation},\n  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},\n  year = {2025},\n  pages = {22035--22044}\n}",
    "figureTitle": "逐步看清关键点所在的位置",
    "figureBrief": "选取同一物体，展示循环特征挖掘中的定位细化与关键点混合填充，用局部放大解释结构线索。",
    "figureImage": "images/paper-banner-08.png"
  },
  {
    "year": 2025,
    "venue": "IEEE TIP",
    "title": "Webly Supervised Fine-Grained Classification by Integrally Tackling Noises and Subtle Differences",
    "role": "唯一一作",
    "figureImage": "images/paper-banner-09.png",
    "desc": "用网上现成图片学会区分长相极近的类别，同时自动剔除标错的照片——把目标认准，是看懂场景活动的第一步。",
    "figureTitle": "同时处理网络噪声与细粒度差异",
    "figureBrief": "展示网络图像中的错误样本与易混类别，连接噪声处理、细微差异学习和分类结果。"
  },
  {
    "year": 2025,
    "venue": "计算机学报",
    "title": "基于类别共享与独有信息双向融合的多类别姿态估计",
    "role": "唯一一作",
    "figureImage": "images/paper-banner-10.png",
    "desc": "不同物体既共享部位结构、又有自己的独特构造，把两种信息双向融合，多类物体的姿态都能估——组件结构表征的核心思路。",
    "figureTitle": "共享结构与类别独有信息双向融合",
    "figureBrief": "以多类物体展示共享关键部位与类别独有结构，通过双向融合箭头连接姿态估计结果。"
  },
  {
    "year": 2025,
    "venue": "BMVC",
    "title": "Pointly-Supervised Weak-Shot Semantic Segmentation via Dual Mapping Transfer",
    "role": "唯一通讯",
    "figureImage": "images/paper-banner-11.png",
    "desc": "只在新类别上点几个点，其余靠已有类别迁移知识，就能把整张场景图按像素分清楚——降低场景理解的标注门槛。",
    "figureTitle": "点标注下的双映射分割迁移",
    "figureBrief": "展示基础类别知识、新类别点标注、双映射迁移及像素分割掩码，区分监督信息与预测结果。"
  },
  {
    "year": 2024,
    "venue": "CVPR",
    "title": "Meta-Point Learning and Refining for Category-Agnostic Pose Estimation",
    "role": "唯一一作",
    "selected": true,
    "authors": "Junjie Chen, Jiebin Yan, Yuming Fang, Li Niu",
    "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Chen_Meta-Point_Learning_and_Refining_for_Category-Agnostic_Pose_Estimation_CVPR_2024_paper.html",
    "desc": "先学会物体潜在的“关键点长法”，再看几个带标注的例子就能对号入座——让结构表征推广到任意类别。",
    "bib": "@InProceedings{Chen_2024_CVPR,\n  author = {Chen, Junjie and Yan, Jiebin and Fang, Yuming and Niu, Li},\n  title = {Meta-Point Learning and Refining for Category-Agnostic Pose Estimation},\n  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},\n  year = {2024},\n  pages = {23534--23543}\n}",
    "figureTitle": "从潜在结构到指定关键点",
    "figureBrief": "以同一查询图像展示潜在元点、支持样本提供的关键点定义及匹配细化后的结果。",
    "figureImage": "images/paper-banner-12.png"
  },
  {
    "year": 2023,
    "venue": "AAAI",
    "title": "Amodal Instance Segmentation via Prior-guided Expansion",
    "role": "唯一一作",
    "figureImage": "images/paper-banner-13.png",
    "desc": "顺着可见区域，靠形状先验一步步往外推，把被挡住的部分补齐——组件结构表征里“从看得见到看得全”。",
    "figureTitle": "先验引导遮挡区域逐步扩展",
    "figureBrief": "依次展示可见区域、形状先验与扩展得到的完整实例掩码，突出被遮挡部分的推断。"
  },
  {
    "year": 2023,
    "venue": "ACM MM",
    "title": "Scene-aware Human Pose Generation using Transformer",
    "role": "合著",
    "figureImage": "images/paper-banner-14.png",
    "desc": "让虚拟人先看懂场景里哪里能站、哪里能靠，再生成与之相适应的姿态——把场景理解延伸到行动选择，与视觉行动决策相通。",
    "figureTitle": "场景可供性引导人体姿态生成",
    "figureBrief": "展示场景、指定目标位置以及与环境相适应的人体姿态，突出人体动作和周围物体的关系。"
  },
  {
    "year": 2022,
    "venue": "NeurIPS",
    "title": "Weak-shot Semantic Segmentation via Dual Similarity Transfer",
    "role": "唯一一作",
    "selected": true,
    "desc": "新类别只有很少的监督，靠已有类别传两条“相似性”线索，也能把整幅场景按像素分清——服务场景理解的低成本落地。",
    "figureTitle": "双重相似性迁移帮助新类别分割",
    "figureBrief": "区分基础类别监督与新类别监督设置，展示双重相似性迁移及新类别分割掩码。",
    "figureImage": "images/paper-banner-15.png"
  },
  {
    "year": 2021,
    "venue": "NeurIPS",
    "title": "Weak-shot fine-grained classification via similarity transfer",
    "role": "唯一一作",
    "figureImage": "images/paper-banner-16.png",
    "desc": "把已见类别里的“像与不像”迁移到没见过的类别，少量样本也能分得清——目标识别是场景理解的基本功。",
    "figureTitle": "从已有类别迁移细粒度相似性",
    "figureBrief": "以易混淆细粒度类别为例，展示基础类别的相似性知识、跨类别迁移与新类别分类。"
  },
  {
    "year": 2021,
    "venue": "IEEE TIP",
    "title": "Depth Privileged Scene Recognition via Dual Attention Hallucination",
    "role": "唯一一作",
    "figureImage": "images/paper-banner-17.png",
    "desc": "训练时额外看深度图、理解场景的三维布局，使用时只凭一张照片就能识别场景——把结构理解“折叠”进二维识别。",
    "figureTitle": "深度知识帮助可见光场景识别",
    "figureBrief": "区分训练和推理，展示深度特权信息、双重注意力幻觉与仅依赖图像的场景分类。"
  },
  {
    "year": 2021,
    "venue": "NeurIPS",
    "title": "Mixed supervised object detection by transferring mask prior and semantic similarity",
    "role": "合著",
    "figureImage": "images/paper-banner-18.png",
    "desc": "把框、点、掩码等粗细不一的标注混合起来训练检测模型，让场景理解的地基打得更省。",
    "figureTitle": "掩码先验与语义相似性共同迁移",
    "figureBrief": "展示不同标注形式的训练图像，连接掩码先验、语义相似性迁移和目标检测结果。"
  },
  {
    "year": 2021,
    "venue": "AAAI",
    "title": "Depth Privileged Object Detection in Indoor Scenes via Deformation Hallucination",
    "role": "合著",
    "figureImage": "images/paper-banner-19.png",
    "desc": "训练时借深度图想象物体的形状变化，使用时只看普通照片，就能在室内场景中找准物体。",
    "figureTitle": "深度特权信息辅助室内目标检测",
    "figureBrief": "展示室内可见光与深度信息、形变幻觉迁移和检测结果，明确训练与推理的输入差别。"
  },
  {
    "year": 2021,
    "venue": "ACM MM",
    "title": "Video Semantic Segmentation via Sparse Temporal Transformer",
    "role": "合著",
    "figureImage": "images/paper-banner-20.png",
    "desc": "视频是连续的活动场景，挑关键帧、串起前后联系，让每一帧的分割结果保持连贯——理解动态场景的一种省力做法。",
    "figureTitle": "稀疏时序联系支撑视频分割",
    "figureBrief": "展示连续视频帧、稀疏时序关联及对应分割掩码，用一致颜色说明跨帧语义联系。"
  },
  {
    "year": 2020,
    "venue": "CVPR",
    "title": "Learning from web data with self-organizing memory module",
    "role": "合著",
    "figureImage": "images/paper-banner-21.png",
    "desc": "从杂乱的海量网络图片里自主学习、边学边整理，为“认识物体”积累视觉常识。",
    "figureTitle": "自组织记忆帮助学习网络图像",
    "figureBrief": "展示含噪网络图像、自组织记忆模块与学习得到的类别信息，突出网络数据的筛选与利用。"
  },
  {
    "year": 2025,
    "venue": "IEEE TCSVT",
    "title": "Multitask Auxiliary Network for Perceptual Quality Assessment of Non-Uniformly Distorted Omnidirectional Images",
    "desc": "全景图像一次记录整个周围场景，这项工作自动判断它哪里清晰、哪里失真——为场景观测数据的质量把关。",
    "role": "合著",
    "figureImage": "images/paper-banner-22.png",
    "figureTitle": "局部失真与整体质量的多任务评价",
    "figureBrief": "展示同一全景图的非均匀失真区域、局部质量线索和整体评价，用分支箭头说明辅助任务的作用。"
  },
  {
    "year": 2025,
    "venue": "IEEE TIP",
    "title": "Omnidirectional Image Quality Captioning: A Large-Scale Database and a New Model",
    "desc": "建了万张级全景图像库，并让模型自动给画质写文字说明——把“看得清不清楚”变成能查询的信息，服务大规模场景数据管理。",
    "role": "合著",
    "figureImage": "images/paper-banner-23.png",
    "figureTitle": "从质量分数到文字质量描述",
    "figureBrief": "展示 OIQ-10K 中的全景图像、失真空间分布、质量评分与文字描述，突出 IQCaption360 的联合输出。"
  },
  {
    "year": 2025,
    "venue": "ACM TOMM",
    "title": "Viewport-Unaware Blind Omnidirectional Image Quality Assessment: A Flexible and Effective Paradigm",
    "desc": "不必先挑选观察视角，直接在全景图上抽样判断质量——面对一整圈场景数据也能快速给出可靠度评估。",
    "role": "合著",
    "figureImage": "images/paper-banner-24.png",
    "figureTitle": "无需生成视口的全景质量评价",
    "figureBrief": "展示全景投影图像直接采样、局部图块的形变适应特征融合和整体质量聚合，与视口生成流程形成对应。"
  },
  {
    "year": 2026,
    "venue": "软件学报",
    "title": "基于最大差异化竞争的通用视觉难样本挖掘",
    "desc": "让不同视觉模型互相比赛、互相挑错，自动找出谁都会出错的难样本——给感知与决策系统做“体检”，先知道哪里不可靠。",
    "role": "合著",
    "figureImage": "images/paper-banner-25.png",
    "figureTitle": "用模型竞争挖掘通用视觉难样本",
    "figureBrief": "展示同一图像在不同模型与视觉任务上的预测差异，连接最大差异化竞争、难样本筛选与测试基准。",
    "statusTags": [
      "在线发表"
    ]
  }
];
window.PAPERS.forEach(p=>{
 p.tags=[...new Set([...(window.VENUE_CLASSIFICATIONS[p.venue]||[]),...(p.statusTags||[])])];
 if(window.CONFERENCE_VENUES.includes(p.venue)&&!p.venue.includes('Findings')&&(p.tags.includes('CCF A')||p.venue==='ECCV'))p.tags.push('视觉顶会');
});
