# 기달림

> 대기 알림을, 기달림.

기달림은 대기 순서 알림 서비스로, 건전한 회계를 위해 비용 최적화에 아주 큰 관심을 두고 있다.

## 배경

동인 행사(서코, 일러스타 등)에서 한 부스에 사람이 몰리게 될 경우,
질서 관리를 위해 줄을 세우고, 필요 시 대기표를 발급할 필요성이 생긴다.
하지만 부스 운영진이 현재 몇번째 대기 순번이 방문 가능한지 알릴 수단이 없다.

따라서, 대기 순번 발급 및 알림 앱을 만들도록 한다.

## 기술 스택 및 선정 사유

### 플랫폼

- Cloudflare : 동인 행사는 "한철 장사"이기 때문에 Scale to Zero가 중요하다. 서버리스 컴퓨팅을 잘 활용하기 위해 선택한다.

  - Cloudflare Workers : MVP에서 필요로 하는 모든 기능이 서버리스 컴퓨팅으로 수행하기에 적합하다.
  - Cloudflare R2 : 행사 정보 등, 일부 데이터는 Cloudflare R2 Cache에 올리기 적합하다.
  - Cloudflare D1 : 가성비 좋은 SQLite 데이터베이스이다. 저장할 데이터가 간단하고 적으므로 D1으로 충분하다.

- Firebase : 무료로 제공하는 기능이 다양하므로, 비용 최적화를 위해 사용한다.

  - Firebase Cloud Messaging : 알림 발송을 위해 사용한다.
  - Analytics : 로그 수집을 위해 사용한다.
  - Remote Config : A/B 테스팅을 위해 사용한다.
  - Crashlytics : 크래시율 분석을 위해 사용한다.

문자 발송은 MVP에서 제외할 예정이므로 아직 스택을 정하지 않았다.
다만, 다음 대안들을 목록에 놔둔다.

- [알리고](https://smartsms.aligo.in/main.html) : 8.4원/건
- [네이버 클라우드 SENS](https://www.ncloud.com/product/applicationService/sens) : 월 1000건 기준 8.55원/건, 월 500건 기준 4.05원/건
- [솔라피](https://solapi.com/) : 15원/건

### 개발 공통

- typescript : 서버 개발, 모바일 앱 개발, 홍보용 웹사이트 개발 모두에 적합한 언어이다.
- pnpm : 배울 것이 거의 없고, workspace 구성이 내장 도구로 가능하다.
- eslint : 업계의 사실상 표준 린트 도구이다.
- prettier : 업계의 사실상 표준 포매팅 도구이다.

### API 서버

- GraphQL : 특정 언어에 의존하지 않으면서, 충분히 강력한 프로토콜이다.

- graphql-yoga : 강력한 Standalone GraphQL Server이다.
- pothos : 훌륭한 GraphQL 스키마 빌더이다.
- drizzle-orm : 훌륭한 ORM이다.

### 웹

- vite : 최소한의 비용을 위해 SPA를 구축한다.
- react : 팀원을 고려할 때 가장 적합하다.
- @tanstack/router : type-safe & file-based router의 강력함을 누릴 수 있다.

### 참여자

- RanolP
- return0927
- kiwiyou
- ssogari-dev
