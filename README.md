# THE TICKET 

티켓 스크랩 및 개인 맞춤화된 작품 추천 서비스

## 개요
**더 티켓(The Ticket)** 은 사용자에게 편리한 티켓 스크랩 및 기록 UI를 제공하고 개인 맞춤형 작품을 추천하는 서비스입니다.  
사용자는 더 티켓을 통해 자신의 문화생활을 기록하고 친구들과 이를 공유하며 소통할 수 있습니다.

## 기술 스택

### Frontend

- **React Native** – 컴포넌트 기반 UI 구현, 모바일 환경을 고려하여 native 선정
- **TypeScript** – 정적 타이핑을 통한 안정성 확보
- **Styled Components** – 컴포넌트 단위 스타일 관리
- **React Navigation** – 앱 내 라우팅 처리
- **MobX** – 전역 상태 관리
- **Expo** – React Native 개발을 위한 프레임워크 및 빌드/배포 도구

### 개발 도구

- **Expo CLI** – 앱 실행, 빌드, 배포 자동화
- **ESLint / Prettier** – 코드 스타일 및 정적 분석
- **GitHub** – 버전 관리

## 아키텍처

현재는 로컬 상태 기반으로 동작하며 이후 Firebase를 활용한 백엔드 구축을 계획 중

![thticketdi drawio](https://github.com/user-attachments/assets/7b3eb517-a8fe-46ab-b0db-09cfcdebb43d)



## 주요 기능
- 캘린더, 리스트, 그리드의 세 가지 티켓 뷰 모드
  - [x] 캘린더 뷰 개발
  - [ ] 리스트 뷰 개발
  - [x] 그리드 뷰 개발
  - [ ] drawer 구현 
- 티켓을 추가 기능 (직접 기록하는 방식, 지류 티켓 스캔 및 예매 내역 스크랩 방식을 제공)
- 수집한 티켓 표출 시 필터링 기능
- 사용자와의 상호작용 수집 및 분석 지표 표출
- 개인화된 맞춤 작품 정보 추천

## 데모

> 기능 구현 중입니다. 추후 GIF 또는 링크 추가 예정

## 기여자

- [@kyeongheehong](https://github.com/codehkh)


