<template>
  <div class="view">
    <div class="frame-7504">
      <router-link to="/">
      <img
        class="lezuro_logo_black-1"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/lezuro-logo-black-1@2x.png"
        alt="Lezuro_logo_black 1"
      />
      </router-link>
      <div class="frame-7371" >
           <div class="menu-item" @click="setActiveMenu('record')">
          <router-link to="/myscorecard" class="nav-text" :class="{ active: activeMenu === 'record' }">
            <div class="text-2 valign-text-middle pretendard-semi-bold-log-cabin-18px">기록실</div>
          </router-link>
          <div class="submenu">
            <router-link to='/myscorecard' @click="setActiveMenu('scorecard')">
              <div class="submenu-item" :class="{ active: activeMenu === 'scorecard' }">스코어 카드</div>
            </router-link>
            <router-link to="/myswingvideos-list" @click="setActiveMenu('myswingvideos')">
              <div class="submenu-item" :class="{ active: activeMenu === 'myswingvideos' }">나의 스윙 영상</div>
            </router-link>
          </div>
        </div>
         <div class="menu-item" @click="setActiveMenu('game')">
          <router-link to="/game-list" :class="{ active: activeMenu === 'game' }">
            <div class="text-2 valign-text-middle pretendard-semi-bold-log-cabin-18px">대회</div>
          </router-link>
          <div class="submenu">
            <router-link to="/game-list">
              <div class="submenu-item" :class="{ active: activeMenu === 'game' }">대회</div>
            </router-link>
            <router-link to="/mygame-list">
              <div class="submenu-item">나의 대회</div>
            </router-link>
          </div>
        </div>
        <router-link to="/map-list">
          <div
            class="text-2 valign-text-middle pretendard-semi-bold-mine-shaft-18px"
          >
            매장·예약
          </div>
        </router-link>
        <router-link to="/course-list">
          <div
            class="navbar-link-text-20-1 valign-text-middle pretendard-semi-bold-log-cabin-18px"
          >
            코스
          </div>
        </router-link>
         <router-link to="/system-preparing">
        <div
          class="text-2 valign-text-middle pretendard-semi-bold-log-cabin-18px"
        >
          가이드
        </div>
        </router-link>

        <div class="menu-item">
          <router-link to="/events-list" class="nav-text">
            <div class="text-2 valign-text-middle pretendard-semi-bold-log-cabin-18px">커뮤니티</div>
          </router-link>
          <div class="submenu">
            <router-link to='/events-list'>
              <div class="submenu-item">이벤트</div>
            </router-link>
            <router-link to="/board-list">
              <div class="submenu-item">자유 게시판</div>
            </router-link>
          </div>
        </div>

        <div class="menu-item"> 
          <router-link to="/notice-list" class="nav-text">
            <div class="text-2 valign-text-middle pretendard-semi-bold-log-cabin-18px">고객센터</div>
          </router-link>
          <div class="submenu">
            <router-link to='/notice-list'>
              <div class="submenu-item">공지사항</div>
            </router-link>
            <router-link to="/contact-write">
              <div class="submenu-item">1:1문의</div>
            </router-link>
            <router-link to="/faq-list">
              <div class="submenu-item">FAQ</div>
            </router-link>
          </div>
        </div>
      </div>
       
     <div class="frame-7372">
        <div class="menu-item" v-if="isLoggedIn" >
          <!-- 로그인 상태 -->
          <div class="info" >
            <router-link to="/myscorecard" class="nav-text">
              <img
                class="majesticonsuser-line"
                src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/majesticons-user-line.svg"
                alt="majesticons:user-line"
              />
              <div class="text-9 valign-text-middle pretendard-regular-normal-mine-shaft-16px">
                레저로님
              </div>
              <img
                class="vector-3"
                src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-3.svg"
                alt="Vector 3"
              />
            </router-link>
          </div>
          <!-- 드롭다운 메뉴 -->
          <div class="submenu">
            <router-link to="/myprofile">
              <div class="submenu-item" style="padding-top: 20px;">
                <img src="../../img/majesticons_user-linemypage.png" alt="" />
                <div>마이페이지</div>
              </div>
            </router-link>
            <router-link to="/admin">
              <div class="submenu-item" style="padding-bottom: 20px;">
                <img src="../../img/Vectoradmin.png" alt="" />
                <div>관리자</div>
              </div>
            </router-link>
            <router-link to="/logout">
              <div class="submenu-item" style="border-top: 1px solid #ddd;">
                <img src="../../img/hugeicons_logout-04logout.png" alt="" />
                <div>로그아웃</div>
              </div>
            </router-link>
          </div>
        </div>

        <!-- 로그인되지 않은 상태 -->
        <div v-else class="frame-7279" >
          <router-link to="/login">
            <div class="text-2045 valign-text-middle pretendard-regular-normal-monza-16px">로그인</div>
          </router-link>
          <img class="line-1-1" src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-1.svg" alt="Line 1" />
          <router-link to="/signup">
            <div class="text-2046 valign-text-middle pretendard-regular-normal-granite-gray-16px">회원가입</div>
          </router-link>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false, // 로그인 상태
       activeMenu: '' // 현재 활성 메뉴 항목
    };
  },
  mounted() {
    // 로그인 상태를 확인 (예: 로컬 스토리지에서 토큰 확인)
    const token = localStorage.getItem("authToken");
    this.isLoggedIn = !!token; // 토큰이 있으면 true, 없으면 false
    
  },
 methods: {
    setActiveMenu(menu) {
      this.activeMenu = menu; // 클릭한 메뉴 항목을 활성화
    }
  }
};
</script>

<style>
.active {
  color: #D30F1A; /* 활성화된 메뉴 항목 색상 */
}

/* 서브 메뉴 아이템에 대한 활성화 색상 */
.submenu-item.active {
  color: #D30F1A; /* 서브 메뉴 아이템 활성화 색상 */
}
.frame-7372 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px; /* Adjust the gap between items */
  justify-content: flex-end;
  position: relative;
}

.menu-item {
  display: inline-flex;
  align-items: center;
  gap: 8px; 
  position: relative;
}

.majesticonsuser-line {
  height: 24px; /* Increase the icon size */
  width: 24px;
}

.text-9 {
  font-size: 18px; /* Adjust font size */
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
  color: #333333; /* Match the text color */
}

.vector-3 {
  height: 10px; /* Adjust the size of the vector (arrow) */
  width: 12px;
  margin-left: 4px; /* Adjust spacing between text and vector */
}

.submenu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 130%; /* Position the submenu just below the "레저로님" */
  right:10;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  border-radius: 8px;
}

.menu-item:hover .submenu {
  display: flex;
}

.submenu-item {
  display: flex; /* 아이콘과 텍스트를 같은 줄에 배치 */
  align-items: center; /* 아이콘과 텍스트가 수직 가운데 정렬 */
  gap: 8px; /* 아이콘과 텍스트 사이 간격 조정 */
  padding: 15px 20px;
  white-space: nowrap; /* 텍스트가 한 줄에 표시되도록 설정 */
}

.submenu-item:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}

.submenu img {
  width: 16px; /* Adjust submenu icons size */
  height: 16px;
}

.info{
  display: inline-flex; /* 모든 요소를 한 줄에 나열 */
  align-items: center; /* 아이콘, 텍스트, 벡터를 수직 중앙에 정렬 */
  gap: 8px; /* 아이콘과 텍스트 간 간격 설정 */
}
.view,
.view-1,
.view-2,
.view-3,
.view-4 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  height: 100px;
  min-width: 1920px;
  padding: 0 261px;
}

.frame-7504,
.frame-7504-1,
.frame-7504-2,
.frame-7504-3,
.frame-7504-4 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1398px;
}

.lezuro_logo_black-1,
.lezuro_logo_black-1-1,
.lezuro_logo_black-1-2,
.lezuro_logo_black-1-3,
.lezuro_logo_black-1-4 {
  height: 40px;
  position: relative;
  width: 127px;
}

.frame-7371,
.frame-7371-1,
.navbar,
.navbar-1,
.navbar-2 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 616px;
}

.text-2,
.text-6,
.navbar-link-text-1,
.navbar-link-text-10,
.navbar-link-text-227 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.menu-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.menu-item::before {
  content: "";
  position: absolute;
  top: -10px;  
  left: 0;
  right: 0;
  padding-bottom: 20px; 
  height: 30px; 
  background: transparent;
}

.nav-text {
  display: block;
}

.submenu {
  display: none;
  flex-direction: column;
  position: absolute;
  border-radius: 10px;
  top: 150%; /* Keep the submenu right below */
  background-color: white;
  border: 0.5px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.menu-item:hover .submenu {
  display: flex;
}

.submenu-item {
  padding: 20px 20px;
  white-space: nowrap;
}

.submenu-item:hover {
  color: #D30F1A;
}


.info {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.view {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  height: 100px;
  min-width: 1920px;
  padding: 0 261px;
}

.frame-7504 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1398px;
}

.lezuro_logo_black-1 {
  height: 40px;
  position: relative;
  width: 127px;
}

.frame-7371 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 616px;
}

.text-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7279 {
  align-items: flex-start;
  display: inline-flex;
  gap: 20px;
  justify-content: flex-end;
}

.text-2045 {
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.line-1-1 {
  height: 12px;
  width: 1px;
}

.text-2046 {
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}
</style>
