# 계층식 아키텍처/계층식 구성법(Layered Architecture)

계층식 구성법은 소프트웨어를 여러 계층으로 나누어 관심사를 분리(Separation of Concerns)하는 구성법이다.
대체로 표현, 작업, 자료 관리 기능 등을 물리적으로 구분되게 나눈다.

계층식 구성법을 사용할 경우, 개발자가 기능을 수정할 때 어느 계층에서 수정할지 빠르게 찾을 수 있고,
[단자](./Ports-and-Adapter-Architecture.md)를 수정하는 게 아닌 이상, 변경점은 대체로 해당 계층에만 영향을 끼치기 때문에 유연하고 효율적인 개발을 돕는다.

계층식 구성법에서 각 계층은 하위 계층에 의존한다.
일부 완화된 변종에서는 꼭 바로 아래 계층이여야 할 필요는 없고, 두 단계 아래나 세 단계 아래 등도 허용하곤 한다.

## 계층 구분 사례

- 2 계층
  - 클라이언트(Client) - 서버(Server) : 일반적인 '클라이언트 - 서버' 구조를 계층으로 해석할 수 있다.
- 3 계층
  - 표현(Presentation) - 논리(Logic) - 자료(Data) : '클라이언트 - 서버 로직 - 쿼리 및 데이터베이스' 구조를 계층으로 해석할 수도 있다.
- 4 계층
  - 표현(Presentation) - 앱(Application) - 비즈니스(Business)/문제영역(Domain) - 자료 접근(Data Access)/영속성(Persistence)/인프라, 기틀(Infrastructure)

## 각 계층의 역할

### 표현 계층(Presentation Layer)

만약 화면 구성을 포함한다면 표현 계층은 시각적으로 보이는 화면을 포함할 수 있다.

그렇지 않은 경우, 일반적으로 통신 규약 및 입/출력 자료의 표현형과 밀접한 관련이 있다.
입력 자료를 순수한(Pure) 자료 전달 객체(DTO; Data Transfer Object)로 변환해 앱 계층으로 보내고,
앱 계층이 돌려준 순수한 자료 전달 객체를 다시 출력 자료 표현형에 알맞게 변환한다.

### 논리 계층(Logic Layer)

앱 계층과 문제영역 계층을 구분하지 않는 경우,
논리 계층에서 두 기능을 전부 수행할 수도 있다.

### 앱 계층(Application Layer)

앱 계층은 일반적으로 저장소(Repository)나 맥락(Context) 등 핵심 문제해결책(Domain Logic)과는 무관하나,
실행을 위해 필요한 정보를 표현 계층이 전달해준 자료 전달 객체와 결합하는 역할을 수행한다.

이후, 해당 정보를 문제영역 계층(Domain Layer)나 비즈니스 계층(Business Layer)에 전달해 실제 명령/질의를 수행한다.

그 외, 트랜잭션(Transaction) 관리나 보안 처리, 검증 등을 수행하기도 한다.

### 문제영역 계층(Domain Layer)

문제영역 계층은 특정한 문제영역 내에서의 해결책을 논하는 계층이다.

규칙이나 핵심 해결책을 세우는 데에 필요한 인터페이스 및 모델 등을 정의하고, 실제 해결책(Logic)을 작성한다.

자세한 설명은 [문제영역 주도 설계(Domain-Driven Design)](../../culture/Domain-Driven-Design.md)를 참조하라.

### 비즈니스 계층(Business Layer)

비즈니스 계층은 문제영역 계층과 비슷하나,
문제영역 사이 연산을 조율하거나, 여러 문제영역과 외부 시스템에 걸친 복잡한 작업흐름(Workflow)를 관리하곤 한다.

### 자료 접근 계층(Data Access Layer)

일반적으로 자료 접근 계층은 다음 개념을 활용해 데이터베이스에 직접 접근하고, 자료를 가져오거나 수정한다.
기초적인 CRUD(Create, Read, Update, Delete)를 사용하는 경우가 많다.

- 저장소(Repository) : 자료에 접근하거나 조작하는 연산을 정의한 인터페이스다.
- 자료 접근 객체(DAO; Data Access Object) : 자료에 접근할 때 쓰는 객체로, 보통 특정 개체(Entity)나 연관 개체(Related Entities)에 집중한다.
- 자료 변환기(Data Mapper) : 데이터베이스 스키마와 문제영역 계층의 모델 사이 변환을 수행한다.

### 영속성 계층(Persistence Layer)

영속성 계층은 자료 접근 계층과 비슷하나,
더 넓은 범위의 자료를 유지(Persist)하고 관리하는 데에 더 집중한다.

어떻게 자료가 접근되고, 저장되고, 관리되며, 유지보수되는지를 중점적으로 살펴보며, 자료 접근 계층을 포함하는 경우도 있다.

객체-관계형 변환기(ORM; Object-Relational Mapping)를 사용해 관계형 데이터베이스 자료와 객체 사이의 변환을 수행하거나, 트랜잭션 관리, 캐싱(Caching), 연결 풀링(Connection Pooling) 등을 수행하는 경우도 많다.

### 인프라 계층/기틀 계층(Infrastructure Layer)

자료 접근 및 영속성이 단순 자료 저장에만 집중한 반면, 기틀 계층은 앱을 위해 필요한 모든 기틀을 잡는다.
웹 서버 설정, 로그 프레임워크 설정, 보안 설정, 전산망 설정 등 켜지기 위해 필요한 모든 것은 대체로 기틀 계층에 속할 수 있다.
