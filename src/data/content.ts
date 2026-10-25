import type { Language } from './site';

interface Content {
  title: string;
  description: string;
  workflowStack: string;
  nav: {
    label: string;
    workflow: string;
    features: string;
    getApp: string;
    faq: string;
    language: string;
    stars: string;
  };
  hero: {
    title: string;
    emphasis: string;
    body: string;
    github: string;
    getApp: string;
    status: string;
    note: string;
  };
  preview: {
    label: string;
    caption: string;
    host: string;
    session: string;
    agent: string;
    output: string;
    footer: string;
  };
  workflow: {
    eyebrow: string;
    title: string;
    body: string;
    steps: { title: string; detail: string }[];
    note: string;
  };
  features: {
    eyebrow: string;
    title: string;
    body: string;
    items: { icon: string; title: string; body: string; tag: string }[];
  };
  getApp: {
    eyebrow: string;
    title: string;
    body: string;
    status: string;
    unavailable: string;
    notice: string;
    repo: string;
    package: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
    source: string;
    reviewed: string;
  };
  footer: { note: string; top: string };
}

export const content: Record<Language, Content> = {
  en: {
    title: 'DaGaLi Client — SSH, tmux & your AI agents | DaGaLi Web',
    description:
      'Meet DaGaLi Client (DGL): a development-stage SSH client for tmux and AI coding agents on your personal server. Explore features and platform progress.',
    workflowStack: 'SSH + tmux + AI coding agents',
    nav: {
      label: 'On this page',
      workflow: 'How it works',
      features: 'Features',
      getApp: 'Get App',
      faq: 'FAQ',
      language: 'Language',
      stars: 'GitHub stars. Snapshot at build time; not a live count.',
    },
    hero: {
      title: 'Step away.',
      emphasis: 'Keep your place.',
      body: 'Already running AI coding agents in tmux? Connect over SSH, find your sessions and panes, and pick up the work on your personal server.',
      github: 'Explore on GitHub',
      getApp: 'Get App',
      status: 'In development',
      note: 'Work continues while its tmux session and server stay running. Downloads are not available yet.',
    },
    preview: {
      label: 'ILLUSTRATIVE EXAMPLE',
      caption:
        'A sketch of the workflow. Not an app screenshot or a live SSH connection.',
      host: 'personal-server',
      session: 'dev session',
      agent: 'AI agent',
      output: 'Your work lives here.',
      footer: 'SSH → tmux → AI coding agents',
    },
    workflow: {
      eyebrow: '02 / THE CONNECTION',
      title: 'SSH in. Return to tmux.',
      body: 'Your AI coding agents are already running in tmux. DaGaLi Client brings you back to the sessions, windows and panes you use on your server.',
      steps: [
        { title: 'Personal server', detail: 'The machine you manage' },
        { title: 'SSH', detail: 'Connect with your account' },
        { title: 'tmux', detail: 'Sessions, windows & panes' },
        { title: 'AI coding agents', detail: 'Your CLI, on your server' },
      ],
      note: 'Disconnecting the client leaves a running tmux session on the server. Reconnect to that session to continue. An ordinary SSH shell may not preserve work after disconnection.',
    },
    features: {
      eyebrow: '03 / LESS FRICTION',
      title: 'Keep the CLI. Simplify the way in.',
      body: 'Built around the moments between connecting, finding a session, and getting back to work. Features below are implemented in the development candidate; platform verification varies.',
      items: [
        {
          icon: 'tree',
          title: 'Your tmux sessions and panes',
          body: 'Browse a session → window → pane tree. Select a target, split a tmux pane, or move focus without remembering every command.',
          tag: 'TMUX NAVIGATION',
        },
        {
          icon: 'server',
          title: 'Your hosts, together',
          body: 'Save hosts, aliases and favorites. Recent connections and independent tabs keep your servers within reach.',
          tag: 'HOST MANAGEMENT',
        },
        {
          icon: 'layout',
          title: 'Room for parallel work',
          body: 'Arrange desktop tab groups side by side or top to bottom. Resize and move tabs as your workspace changes.',
          tag: 'DESKTOP WORKSPACE',
        },
        {
          icon: 'keyboard',
          title: 'Small screen, useful keys',
          body: 'Android input helpers put Esc, Tab and other shortcuts in reach. Compose multilingual or multiline text before sending it.',
          tag: 'ANDROID INPUT',
        },
        {
          icon: 'activity',
          title: 'A little more context',
          body: 'Optional agent hooks surface observed events and help you jump to a pane. An event is not proof of current waiting or task success; CLI coverage varies.',
          tag: 'OPTIONAL AGENT INTEGRATION',
        },
      ],
    },
    getApp: {
      eyebrow: '01 / GET APP',
      title: 'Get DaGaLi Client',
      body: 'DaGaLi Client is in development. Public downloads are not available yet.',
      status: 'IN DEVELOPMENT',
      unavailable: 'Not available yet',
      notice:
        'Store listings and release timing are unconfirmed. The Apple button does not confirm iOS support or release.',
      repo: 'Follow development on GitHub',
      package: 'Planned package ID',
    },
    faq: {
      eyebrow: '04 / GOOD TO KNOW',
      title: 'Before you connect.',
      items: [
        {
          question: 'What do I need on my server?',
          answer:
            'A server you can access over SSH, your own account and authentication, a UTF-8 locale, and tmux for the session workflow. The client documents tmux 3.3–3.7 Control Mode support, with upstream server checks on 3.3a and 3.7c. Install and sign in to your AI CLI tools on that server yourself.',
        },
        {
          question: 'What does tmux keep running?',
          answer:
            'tmux holds sessions, windows and panes on the server. Closing SSH can leave that work running so you can attach again, provided the server, session and processes survive. A server restart, deleted session or terminated process can end the work. An ordinary SSH shell does not offer the same persistence guarantee.',
        },
        {
          question: 'Where can I download DaGaLi Client?',
          answer:
            'Public downloads are not available yet. Apple App Store, Google Play and Desktop are all disabled here. Desktop is planned to point to GitHub Releases when a release is ready; no numeric Apple App Store ID has been assigned. Follow the repository for current progress.',
        },
        {
          question: 'What is the platform status?',
          answer:
            'According to the Client repository: Android 14–16 has emulator-based checks; physical-device acceptance remains pending. macOS ARM64 build and core SSH/tmux checks passed, while actual GUI and Keychain acceptance remain pending. Windows x64 has build and ZIP packaging paths, with native build and device checks pending. Linux is a later target with no current execution or distribution path. iOS support and release are unconfirmed. These are upstream-reported development results, not release certification.',
        },
        {
          question: 'Does this website connect to my server?',
          answer:
            'This is an introduction to DaGaLi Client. It has no web SSH terminal, account system or hosted AI service. It does not ask for SSH credentials. No visitor analytics, advertising or payments are included.',
        },
      ],
      source: 'Read the Client documentation',
      reviewed: 'Content reviewed',
    },
    footer: {
      note: 'A small client for a workflow that stays yours.',
      top: 'Back to top ↑',
    },
  },
  ko: {
    title: 'DaGaLi Client — SSH, tmux, 나의 AI 에이전트 | DaGaLi Web',
    description:
      '개인 서버의 tmux와 AI 코딩 에이전트를 위한 개발 중인 SSH 클라이언트, DaGaLi Client(DGL). 주요 기능과 플랫폼별 개발 상태를 확인하세요.',
    workflowStack: 'SSH + tmux + AI coding agents',
    nav: {
      label: '페이지 탐색',
      workflow: '사용 흐름',
      features: '주요 기능',
      getApp: 'Get App',
      faq: 'FAQ',
      language: '언어',
      stars: 'GitHub Star 수. 빌드 시점 기준이며 실시간 수치가 아닙니다.',
    },
    hero: {
      title: '자리는 바뀌어도,',
      emphasis: '작업은 이어지게.',
      body: 'tmux에서 실행 중인 AI 코딩 에이전트에 SSH로 다시 연결하세요. 세션·창·패널을 찾아 서버에 남겨 둔 작업을 이어갑니다.',
      github: 'GitHub에서 살펴보기',
      getApp: 'Get App',
      status: '개발 중',
      note: '서버와 tmux 세션이 실행 중일 때 작업을 이어갈 수 있습니다. 다운로드는 아직 준비 중입니다.',
    },
    preview: {
      label: '설명용 예시',
      caption:
        '사용 흐름을 그린 예시입니다. 실제 앱 화면이나 실시간 SSH 연결이 아닙니다.',
      host: 'personal-server',
      session: 'dev 세션',
      agent: 'AI agent',
      output: '작업은 이곳에 남아 있습니다.',
      footer: 'SSH → tmux → AI coding agents',
    },
    workflow: {
      eyebrow: '02 / 연결 흐름',
      title: 'SSH로 연결해, tmux 작업으로.',
      body: '이미 tmux에서 실행 중인 AI 코딩 에이전트. DaGaLi Client로 서버의 익숙한 세션·창·패널에 돌아오세요.',
      steps: [
        { title: '개인 서버', detail: '직접 관리하는 작업 공간' },
        { title: 'SSH', detail: '내 계정으로 연결' },
        { title: 'tmux', detail: '세션 · 창 · 패널 관리' },
        { title: 'AI 코딩 에이전트', detail: '서버에서 실행하는 CLI' },
      ],
      note: '클라이언트 연결을 닫아도 실행 중인 tmux 세션은 서버에 남습니다. 같은 세션에 다시 연결해 이어가세요. 일반 SSH 셸의 작업은 연결 종료 후 보존되지 않을 수 있습니다.',
    },
    features: {
      eyebrow: '03 / 주요 기능',
      title: 'CLI는 그대로. 진입은 더 편하게.',
      body: '서버 연결부터 원하는 세션을 찾아 다시 작업하기까지. 아래 기능은 개발용 후보에 구현되어 있으며, 플랫폼별 실제 검증 범위는 다릅니다.',
      items: [
        {
          icon: 'tree',
          title: 'tmux 세션부터 원하는 패널까지',
          body: '세션 → 창 → 패널 트리를 탐색하세요. 명령을 모두 외우지 않아도 대상을 고르고 tmux 패널을 나누거나 포커스를 옮깁니다.',
          tag: 'TMUX 탐색',
        },
        {
          icon: 'server',
          title: '내 서버를 한곳에',
          body: '호스트, 별칭, 즐겨찾기를 저장하세요. 최근 접속과 독립된 여러 연결로 필요한 서버를 빠르게 찾습니다.',
          tag: '호스트 관리',
        },
        {
          icon: 'layout',
          title: '나란히 펼치는 작업',
          body: '데스크톱 탭 그룹을 좌우·상하로 배치하세요. 작업에 맞춰 경계를 조절하고 탭을 옮깁니다.',
          tag: '데스크톱 분할',
        },
        {
          icon: 'keyboard',
          title: '작은 화면에도 필요한 키',
          body: 'Android 입력 보조로 Esc, Tab과 단축키를 가까이. 한글이나 여러 줄 텍스트도 편집한 뒤 전송합니다.',
          tag: 'ANDROID 입력 보조',
        },
        {
          icon: 'activity',
          title: '에이전트 소식을 가까이',
          body: '선택적 훅 연동으로 관측된 사건을 확인하고 해당 패널로 이동하세요. 사건은 현재 대기나 작업 성공의 증거가 아니며, CLI별 연동 범위는 다릅니다.',
          tag: '선택적 에이전트 연동',
        },
      ],
    },
    getApp: {
      eyebrow: '01 / GET APP',
      title: 'DaGaLi Client 받기',
      body: 'DaGaLi Client는 개발 중입니다. 공개 다운로드는 아직 준비 중입니다.',
      status: '개발 중',
      unavailable: '아직 다운로드할 수 없습니다',
      notice:
        '스토어 등록과 출시 일정은 미정입니다. Apple 버튼은 iOS 지원이나 출시 확정을 뜻하지 않습니다.',
      repo: 'GitHub에서 개발 진행 확인',
      package: '예정 패키지 ID',
    },
    faq: {
      eyebrow: '04 / 알아두기',
      title: '연결하기 전에.',
      items: [
        {
          question: '서버에 무엇을 준비해야 하나요?',
          answer:
            'SSH로 접근할 수 있는 서버, 내 계정과 인증 정보, UTF-8 로케일, 세션 작업을 위한 tmux가 필요합니다. Client 문서는 tmux 3.3–3.7의 Control Mode를 지원 범위로 안내하며, 실제 서버 검증은 3.3a·3.7c에서 진행했습니다. AI CLI 도구는 서버에 직접 설치하고 로그인해야 합니다.',
        },
        {
          question: 'tmux는 무엇을 유지하나요?',
          answer:
            'tmux는 서버에서 세션·창·패널을 관리합니다. 서버와 tmux 세션, 프로세스가 살아 있다면 SSH 연결을 닫은 뒤 다시 붙어 작업을 이어갈 수 있습니다. 서버 재시작, 세션 삭제, 프로세스 종료로 작업이 끝날 수 있으며 일반 SSH 셸은 같은 영속성을 보장하지 않습니다.',
        },
        {
          question: 'DaGaLi Client는 어디서 받나요?',
          answer:
            '아직 공개 다운로드를 제공하지 않습니다. Apple App Store·Google Play·Desktop 버튼은 모두 비활성 상태입니다. Desktop은 출시 준비가 끝나면 GitHub Releases로 연결할 예정이며, Apple의 숫자형 App Store ID는 미정입니다. 현재 진행 상황은 저장소에서 확인하세요.',
        },
        {
          question: '플랫폼별 개발 상태는 어떤가요?',
          answer:
            'Client 저장소 기준으로 Android 14–16은 에뮬레이터 검증을 진행했으며 물리 기기 인수는 대기입니다. macOS ARM64는 빌드와 코어 SSH/tmux 검사를 통과했지만 실제 GUI·Keychain 인수는 대기입니다. Windows x64는 빌드·ZIP 패키징 경로를 마련했으며 네이티브 빌드·실기 검증은 대기입니다. Linux는 현재 실행·배포 경로가 없는 후속 대상이고, iOS 지원·출시는 미확정입니다. 앱 저장소가 보고한 개발 결과이며 출시 인증을 뜻하지 않습니다.',
        },
        {
          question: '이 웹사이트에서 서버에 연결하나요?',
          answer:
            '이곳은 DaGaLi Client 소개 페이지입니다. 웹 SSH 터미널, 회원 계정, 호스팅된 AI 서비스를 제공하지 않으며 SSH 인증 정보를 요청하지 않습니다. 방문 분석, 광고, 결제도 포함하지 않습니다.',
        },
      ],
      source: 'Client 문서 읽기',
      reviewed: '콘텐츠 검토일',
    },
    footer: {
      note: '나의 작업 방식을 위한 작은 클라이언트.',
      top: '맨 위로 ↑',
    },
  },
};
