# DaGaLi Web

**DaGaLi Client (DGL)** 소개 사이트. 이름 풀이는 **`dDal gGak Life`**.
tmux를 감싸 세션 재연결·관리를 돕는 앱과 개발 상태를 안내합니다.
표준 tmux 세션은 로컬 터미널에서도 직접 사용할 수 있으며, 내장 SSH는 원격 접속을 위한 부가 기능입니다.

- 영어 `/`, 한국어 `/ko/`. 언어 전환은 명시적이며 JavaScript가 켜져 있으면 읽던 섹션을 유지합니다.
- Astro 정적 사이트, 시스템 글꼴, CSS 효과와 작은 언어 전환 스크립트.
- Apple App Store·Google Play·Desktop은 모두 비활성 상태. 다운로드 설정은 `src/data/site.ts`에서 관리합니다.
- GitHub Star 수는 빌드 시 공개 API 조회. `0`도 표시하며 오류·1.8초 시간 초과 시 숫자 링크만 생략합니다. 브라우저에서는 API를 호출하지 않습니다.
- 백엔드·회원가입·웹 SSH·자격 증명 수집·분석·광고·결제 없음.

## 개발

Node **22.23.4 이상**, npm 필요. GitHub Pages CI는 **Node 24**를 사용합니다.

```sh
npm ci
npm run dev
```

검증 순서:

```sh
npm run check
npm run build
npm test
npx playwright install chromium
npm run test:e2e
npm run test:build
npm run perf
```

`npm run check`는 Astro/TypeScript와 Prettier를 검사합니다. `npm run format`으로 정리합니다.
`npm run test:e2e`는 자체 로컬 preview 서버를 사용하고, `npm run test:build`는 별도 출력 폴더에서 GitHub 응답·실패를 검사합니다.
`npm run perf`는 임시 로컬 서버에서 Lighthouse 모바일 설정으로 언어별 3회 측정합니다. 결과·스크린샷·추적 파일은 Git에서 제외된 `artifacts/`, `test-results/`에 저장합니다.

```sh
npm run preview
```

현재 환경의 Node가 오래되었다면 전역 설정을 바꾸지 않고 임시 런타임으로 검증할 수 있습니다.

```sh
npx --yes --package=node@22.23.4 -c 'npm ci && npm run check && npm run build && npm test && npm run test:e2e && npm run test:build && npm run perf'
```

브라우저는 위 `playwright install chromium` 명령으로 먼저 설치합니다.

## 구조와 기록

| 위치                              | 책임                                         |
| --------------------------------- | -------------------------------------------- |
| `src/data/site.ts`                | 브랜드, 경로, 다운로드 상태와 목적지         |
| `src/data/content.ts`             | 공통 타입의 영어·한국어 검토 콘텐츠          |
| `src/components/`, `src/layouts/` | 공통 UI, 앱 화면, 메타데이터                 |
| `public/images/`                  | Hero의 실제 앱 스크린샷                      |
| `src/lib/stars.ts`                | 빌드 시 GitHub 조회·검증·시간 제한·실패 처리 |
| `src/styles/`                     | 공통 스타일, 화면 배치, CSS 효과·동작 줄이기 |
| `tests/`, `scripts/`              | 단위·브라우저·실제 빌드 실패·성능 검증       |
| `docs/project-plan.md`            | 승인 범위·결정 주체·기술 선택과 근거         |
| `docs/project-checklist.md`       | 변경 전후 재확인 기준                        |
| `docs/verification.md`            | 실제 검증 결과와 한계                        |
| `docs/operations.md`              | 콘텐츠·출시 설정 변경, 배포·복구 절차        |
| `task.md`                         | 진행·검증·로컬 커밋·재개 지점                |

운영 주소는 `https://ddal.ggak.life`. Pages Source는 **GitHub Actions**로 사용하며, `main` push 시 Astro 빌드·검증 후 `dist/`를 배포합니다. 수동 실행도 유지합니다. 기본 브랜치/Jekyll 배포는 사용하지 않습니다. Actions 성공과 별개로 실주소 HTTPS·언어 경로·자산·링크를 검증하고 `docs/verification.md`에 결과를 기록합니다.
