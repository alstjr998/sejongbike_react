# 어울링 페이지 리메이크

세종특별자치시에서 운영중인 공공자전거 '어울링'의 PC 홈페이지를 리메이크해보는 비영리 개인 프로젝트입니다.

기존 웹사이트 : https://www.sejongbike.kr/

---

'어울링'의 로고 및 색상 팔레트 등이 현재 바뀐 상태임에도 불구, PC 페이지는 현재 구형 그대로인 상태이기에
코딩 공부에도 적합하다고 판단해 개인적으로 현재의 디자인을 활용해 리메이크해보고 있습니다.

기존 페이지와 레이아웃은 비슷하게 구성하였으며, 몇 가지 필요하지 않다고 판단한 요소는 통합 & 제외하였습니다.
또한 가로 910px 이하부터 반응형으로 모바일 페이지 레이아웃으로 변환되며, 이는 가로 380px까지 유지됩니다.

---

## 제작 순서

1. React + CSS + JavaScript로 메인 페이지 제작

2. 메인 페이지에 OpenWeatherMap API를 이용하여 오늘의 날씨 정보를 표시하는 블록 완성

  ※OpenWeatherMap API (<https://openweathermap.org/>)

  ※날씨 아이콘 활용 basmilus-Meteocons (<https://github.com/basmilius/weather-icons>)

3. 메인 페이지 완성 후 애니메이션을 활용하여 추가 페이지 제작

4. 회원 정보 및 공지사항 게시판을 연결하는 데이터베이스 Back-end API 연결 작업

5. 대여소 위치 조회를 위해 Naver Maps API와 세종시 어울링 대여소 현황 API를 받아 Marker로 표시하는 화면 제작

  ※Naver Maps API (<https://www.ncloud.com/product/applicationService/maps>)

  ※세종시 어울링 대여소 위치 API - 2022.08.30 기준 (<https://www.data.go.kr/data/15091421/fileData.do#tab-layer-openapi>)

6. Spring Security와 JWT를 기반으로 한 로그인/로그아웃 기능 구현


---

## 참고 사이트

1. CSS 애니메이션 (Ease) 작성 시 참고한 애니메이션 그래프 툴 사이트 (<https://matthewlein.com/tools/ceaser>)

