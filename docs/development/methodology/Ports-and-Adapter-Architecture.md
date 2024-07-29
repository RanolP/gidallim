# 단자와 변환기 구성법(Ports and Adapter Architecture/Hexagonal Architecture)

단자와 변환기 구성법은 해결책(Logic)이 필요로 하는 입력과, 처리 결과 발생하는 출력을 "단자(Port)"라는 인터페이스로 정의하고,
거기에 변환기(Adapter)를 연결해 외부 세계의 구현을 주입받는 코드 구성법이다.
