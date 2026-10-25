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
    title: string;
    status: string;
    unavailable: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { id?: string; question: string; answer: string }[];
    source: string;
    reviewed: string;
  };
  footer: { note: string; top: string };
}

export const content: Record<Language, Content> = {
  en: {
    title: 'DaGaLi Client — tmux session manager | DaGaLi Web',
    description:
      'DaGaLi Client (DGL) is a development-stage tmux wrapper for session reconnection and management. Keep using standard tmux, with SSH for remote access.',
    workflowStack: 'tmux wrapper · session manager',
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
      body: 'Let DGL handle SSH reconnection and tmux reattachment, so you can pick up where you left off.',
      github: 'Explore on GitHub',
      getApp: 'Get App',
      status: 'In development',
      note: 'Work continues while the machine, tmux session and processes stay running. Downloads are not available yet.',
    },
    preview: {
      label: 'ILLUSTRATIVE EXAMPLE',
      caption:
        'An illustrative remote tmux workflow. Not an app screenshot or a live SSH connection.',
      host: 'personal-server',
      session: 'dev session',
      agent: 'AI agent',
      output: 'Your work lives here.',
      footer: 'Standard tmux · local terminal or remote SSH',
    },
    workflow: {
      eyebrow: '01 / HOW TO USE IT',
      title: 'Run in tmux. Reconnect. Keep going.',
      body: 'Start a tmux session and run your AI coding agents inside it. Use DaGaLi Client to find sessions, switch windows and panes, and reconnect to your work. The same standard tmux sessions remain accessible from a local terminal; use SSH when you need remote access.',
      steps: [
        { title: 'Start tmux', detail: 'Create a session for your work' },
        { title: 'Run your agents', detail: 'Use your AI CLI inside tmux' },
        { title: 'Manage with DGL', detail: 'Find sessions, windows & panes' },
        { title: 'Reconnect', detail: 'Return with DGL or a local terminal' },
      ],
      note: 'tmux keeps work running as long as the machine, session and processes stay alive. DaGaLi Client helps you manage and reconnect to those sessions. An ordinary shell alone does not provide the same persistence.',
    },
    features: {
      eyebrow: '02 / LESS FRICTION',
      title: 'Keep the CLI. Simplify the way in.',
      body: 'Find tmux sessions, navigate windows and panes, and reconnect when you return. Features below are implemented in the development candidate; platform verification varies.',
      items: [
        {
          icon: 'tree',
          title: 'tmux navigation and reconnection',
          body: 'Browse a session → window → pane tree and reconnect to your work. Select a target, split a tmux pane, or move focus without remembering every command.',
          tag: 'TMUX NAVIGATION',
        },
        {
          icon: 'server',
          title: 'SSH when you need remote access',
          body: 'Save SSH hosts, aliases and favorites for remote work. Recent connections and independent tabs keep your remote machines within reach.',
          tag: 'REMOTE ACCESS',
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
      title: 'DaGaLi Client',
      status: 'IN DEVELOPMENT',
      unavailable: 'Not available yet',
    },
    faq: {
      eyebrow: '03 / GOOD TO KNOW',
      title: 'Before you start.',
      items: [
        {
          question: 'Do I need SSH to use tmux?',
          answer:
            'You can attach to standard tmux sessions directly from a local terminal on the machine running them. DaGaLi Client includes SSH as a way to reach remote sessions, using your own account and authentication. Install tmux and your AI CLI tools on the machine where the work runs, use a UTF-8 locale, and sign in to those tools yourself. The Client documents tmux 3.3–3.7 Control Mode support, with server checks on 3.3a and 3.7c.',
        },
        {
          question: 'What does DaGaLi Client add to tmux?',
          answer:
            'tmux provides the sessions, windows, panes and persistent work environment. DaGaLi Client is a wrapper that helps you navigate, reconnect to and manage those sessions. You can also attach to the same sessions directly from a local terminal. The machine, tmux session and processes must stay alive: a restart, deleted session or terminated process can end the work. An ordinary shell alone does not offer the same persistence.',
        },
        {
          id: 'download-notice',
          question: 'Where can I download DaGaLi Client?',
          answer:
            'Public downloads are not available yet. Apple App Store, Google Play and Desktop are all disabled here. Store listings and release timing are unconfirmed. The Apple button does not confirm iOS support or release. Desktop is planned to point to GitHub Releases when a release is ready; no numeric Apple App Store ID has been assigned. Follow the repository for current progress.',
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
      note: 'A small wrapper for your tmux workflow.',
      top: 'Back to top ↑',
    },
  },
  ko: {
    title: 'DaGaLi Client — tmux 세션 재연결·관리 | DaGaLi Web',
    description:
      'tmux 세션 재연결과 관리를 돕는 개발 중인 래퍼, DaGaLi Client(DGL). 표준 tmux 세션을 로컬 터미널에서도 사용하고, 원격 접속에는 SSH를 활용하세요.',
    workflowStack: 'tmux 래퍼 · 세션 재연결·관리',
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
      body: 'SSH가 끊겨도, 재접속부터 tmux 세션 복귀까지 DGL에 맡기세요. 하던 작업을 그대로 이어가세요.',
      github: 'GitHub에서 살펴보기',
      getApp: 'Get App',
      status: '개발 중',
      note: '작업을 실행한 컴퓨터와 tmux 세션·프로세스가 살아 있는 동안 작업을 이어갈 수 있습니다. 다운로드는 아직 준비 중입니다.',
    },
    preview: {
      label: '설명용 예시',
      caption:
        'SSH로 접속하는 경우의 설명용 예시입니다. 실제 앱 화면이나 실시간 SSH 연결이 아닙니다.',
      host: 'personal-server',
      session: 'dev 세션',
      agent: 'AI agent',
      output: '작업은 이곳에 남아 있습니다.',
      footer: '표준 tmux · 로컬 터미널 또는 원격 SSH',
    },
    workflow: {
      eyebrow: '01 / 사용 흐름',
      title: 'tmux에서 실행하고, 세션을 이어가세요.',
      body: 'tmux 세션을 열고 그 안에서 AI 코딩 에이전트를 실행하세요. DaGaLi Client로 세션을 찾고 창·패널을 전환하며, 다시 연결해 작업을 이어갑니다. 같은 표준 tmux 세션은 로컬 터미널에서도 직접 사용할 수 있고, 원격 접속이 필요할 때 SSH를 사용합니다.',
      steps: [
        { title: 'tmux 세션 시작', detail: '작업할 세션을 구성하세요' },
        { title: 'AI 에이전트 실행', detail: 'tmux 안에서 AI CLI를 쓰세요' },
        { title: 'DGL로 관리', detail: '세션·창·패널을 탐색하세요' },
        { title: '다시 연결', detail: 'DGL이나 로컬 터미널로 이어가세요' },
      ],
      note: '작업을 실행한 컴퓨터와 세션·프로세스가 살아 있는 동안 작업을 유지하는 것은 tmux입니다. DaGaLi Client는 그 세션의 관리와 재연결을 돕습니다. 일반 셸만으로는 같은 작업 유지를 보장하지 않습니다.',
    },
    features: {
      eyebrow: '02 / 주요 기능',
      title: 'CLI는 그대로. 진입은 더 편하게.',
      body: 'tmux 세션을 찾고, 창·패널을 전환하고, 다시 연결해 작업을 이어가세요. 아래 기능은 개발용 후보에 구현되어 있으며, 플랫폼별 실제 검증 범위는 다릅니다.',
      items: [
        {
          icon: 'tree',
          title: 'tmux 세션 탐색과 재연결',
          body: '세션 → 창 → 패널 트리를 탐색하고 작업에 다시 연결하세요. 명령을 모두 외우지 않아도 대상을 고르고 tmux 패널을 나누거나 포커스를 옮깁니다.',
          tag: 'TMUX 탐색',
        },
        {
          icon: 'server',
          title: '원격 접속이 필요할 때는 SSH',
          body: '원격 작업용 SSH 호스트, 별칭, 즐겨찾기를 저장하세요. 최근 접속과 독립된 여러 연결로 필요한 원격 컴퓨터를 빠르게 찾습니다.',
          tag: '원격 접속',
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
      title: 'DaGaLi Client',
      status: '개발 중',
      unavailable: '아직 다운로드할 수 없습니다',
    },
    faq: {
      eyebrow: '03 / 알아두기',
      title: '시작하기 전에.',
      items: [
        {
          question: 'tmux를 쓰려면 SSH가 꼭 필요한가요?',
          answer:
            'tmux가 실행 중인 컴퓨터의 로컬 터미널에서 표준 tmux 세션에 직접 연결해 사용할 수 있습니다. DaGaLi Client의 내장 SSH는 내 계정과 인증 정보로 원격 세션에 접속할 때 쓰는 부가 기능입니다. 작업을 실행할 컴퓨터에 tmux와 AI CLI를 설치하고, UTF-8 로케일을 설정한 뒤 직접 로그인하세요. Client 문서는 tmux 3.3–3.7의 Control Mode를 지원 범위로 안내하며, 실제 서버 검증은 3.3a·3.7c에서 진행했습니다.',
        },
        {
          question: 'DaGaLi Client는 tmux에 무엇을 더하나요?',
          answer:
            'tmux가 세션·창·패널과 작업 유지 기능을 제공합니다. DaGaLi Client는 tmux를 감싸 탐색·재연결·관리를 돕는 래퍼입니다. 필요하면 같은 세션을 로컬 터미널에서 직접 사용할 수도 있습니다. 작업을 실행한 컴퓨터와 tmux 세션·프로세스가 살아 있어야 하며, 컴퓨터 재시작·세션 삭제·프로세스 종료로 작업이 끝날 수 있습니다. 일반 셸만으로는 같은 작업 유지를 보장하지 않습니다.',
        },
        {
          id: 'download-notice',
          question: 'DaGaLi Client는 어디서 받나요?',
          answer:
            '아직 공개 다운로드를 제공하지 않습니다. Apple App Store·Google Play·Desktop 버튼은 모두 비활성 상태입니다. 스토어 등록과 출시 일정은 미정입니다. Apple 버튼은 iOS 지원이나 출시 확정을 뜻하지 않습니다. Desktop은 출시 준비가 끝나면 GitHub Releases로 연결할 예정이며, Apple의 숫자형 App Store ID는 미정입니다. 현재 진행 상황은 저장소에서 확인하세요.',
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
      note: 'tmux 작업을 이어 주는 작은 래퍼.',
      top: '맨 위로 ↑',
    },
  },
};
