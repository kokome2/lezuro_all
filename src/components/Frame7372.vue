<template>
  <div :class="[`frame-7372`, className || ``]">
    <div class="menu-item">
       <div class="info">
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
      <div class="submenu">
        <router-link to="/myprofile">
          <div class="submenu-item" style="padding-top:20px">
            <img src="../../img/majesticons_user-linemypage.png" alt="" />
            <div>마이페이지</div>
          </div>
        </router-link>
        <router-link to="/admin">
          <div class="submenu-item" style="padding-bottom:20px">
            <img src="../../img/Vectoradmin.png" alt="" />
            <div>관리자</div>
          </div>
        </router-link>
        <router-link to="/logout">
          <div class="submenu-item" style="border-top:1px solid #ddd">
            <img src="../../img/hugeicons_logout-04logout.png" alt="" />
            <div>로그아웃</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame7372",
  props: ["className"],
};
</script>

<!-- scoped 제거 -->
<style scoped>
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
</style>
