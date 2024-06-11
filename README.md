# 당충전 프로젝트 백엔드

## 1.프로젝트 설명
전기 차는 다른 차량들에 비해 주유를 할 수 있는 충전소가 보편화 되지 않아 방문하려면 많은 시간이 걸린다거나 이미 충전 중인 차량 때문에 헛걸음하게 된다는 단점이 있습니다.
저희 프로젝트는 충전소를 찾기 위해 많은 시간을 소비되는 것을 방지하고 원하는 충전소에 대한 위치와 정보를 손쉽게 얻을 수 있는 서비스를 제공합니다.

## 2.주요기능
<a href="https://imgbb.com/"><img src="https://i.ibb.co/P9501mR/Screenshot-2024-06-11-at-10-03-39-AM.png" alt="Screenshot-2024-06-11-at-10-03-39-AM" border="0"></a>

[로그인/회원가입]
- auth.js 관련 
- 로컬 회원 가입 시 user 테이블 생성 및 데이터 저장
- users 테이블 모델링 : email, username, password, provider, kakaoId, freshToken, creatAt, updateAt, deleteAt

[커뮤니티 - 후기]
- review.js 관련
- reviews 테이블 생성 및 데이터 저장
- reviews 테이블 모델링 : station, starscore, content, createAt, updateAt, UserId
  
[커뮤니티 - 신고하기]
- community.js 관련
- reports 테이블 생성 및 데이터 저장
- reports 테이블 모델링 : catNum, staion, content, createAt, updateAt, UserId

[마이페이지 - 개인정보 수정]
- route
