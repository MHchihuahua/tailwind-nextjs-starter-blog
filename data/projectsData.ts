interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'JavaScript 30 挑戰 (進行中)',
    description: `透過 JavaScript 30 挑戰，製作 30 個小作品，提升 JavaScript 能力。`,
    imgSrc: '/static/images/projects/JS30.png',
    href: 'https://mhchihuahua.github.io/JavaScript30/',
  },
  {
    title: '【計畫】設計情境創新工具研究',
    description: `協助成大「設計情境創新工具研究」計畫，利用 AI 技術輔助設計思考流程。開發基於 Python Flask 和 ChatGPT API 的即時網頁應用，透過 SSE 技術實現資料即時更新，並模擬 ChatGPT 打字效果，提升互動性與使用者體驗。`,
    imgSrc: '/static/images/projects/designThinking.png',
    href: '',
  },
  {
    title: '【論文】車流量計數互動元件',
    description: `使用 Fabric.js 協助 Lab 投稿論文的互動元件製作，論文主旨為利用 YOLO 與 DeepSORT 進行車流辨識與計數，透過互動元件可以了解這兩項技術是如何應用在車流上`,
    imgSrc: '/static/images/projects/AI-X.png',
    href: 'https://smalloshin.github.io/AI-X/',
  },
]

export default projectsData
