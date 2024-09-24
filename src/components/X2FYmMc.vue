<template>
  <div class="view-5">
    <div class="frame-7636">
      <router-link :to="{ path: '/' }">
      <img
        class="frame-7635"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/frame-7635.svg"
        alt="Frame 7635"
      />
      </router-link>
          <div @click="toggleDropdown">
      <frame7291 :text_Label="frame7291Props.text_Label" />
          </div>
    </div>
    <div v-if="isDropdownOpen" class="dropdown-menu">
        <ul>
          <li 
            v-for="(item, index) in dropdownItems" 
            :key="index"
            @click="navigateTo(item.link)"> <!-- li 전체를 클릭 -->
            {{ item.label }} <!-- 텍스트만 표시 -->
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import Frame7291 from "./Frame7291";
export default {
  name: "X2FYmMc",
  components: {
    Frame7291,
  },
  data() {
    return {
      isDropdownOpen: false, // 드롭다운 상태 관리
      // 드롭다운 메뉴 항목과 해당하는 라우트 설정
      dropdownItems: [
        { label: "기록실", link: "/myscorecard" },
        { label: "대회", link: "/game-list" },
        { label: "매장·예약", link: "/map-list" },
        { label: "코스", link: "/course-list" },
        { label: "가이드", link: "/system-preparing" },
        { label: "커뮤니티", link: "/events-list" },
        { label: "고객센터", link: "/notice-list" },
      ],
    };
  },
  methods: {
    // 드롭다운 열기/닫기
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    // 클릭 시 라우트 이동
    navigateTo(link) {
      this.$router.push(link); // 프로그래밍 방식으로 라우터 이동
    },
  },
  props: ["frame7291Props"],
};
</script>

<style>
.view-5,
.view-6,
.view-7,
.view-8,
.view-9,
.view-10,
.view-11,
.view-12,
.view-13 {
  align-items: flex-start;
  background-color: var(--monza);
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 70px;
  padding: 0px 260px;
  position: relative;
  width: 1920px;
}

.frame-7636,
.frame-7636-1,
.frame-7636-2,
.frame-7636-3,
.frame-7636-4,
.frame-7636-5,
.frame-7636-6,
.frame-7636-7,
.frame-7636-8 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 1400px;
}

.frame-7635,
.frame-7635-1,
.frame-7635-2,
.frame-7635-3,
.frame-7635-4,
.frame-7635-5,
.frame-7635-6,
.frame-7635-7,
.frame-7635-8 {
  height: 70px;
  position: relative;
  width: 70px;
}

.dropdown-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  padding: 20px;
  border: 1px solid #ddd;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f1f1f1;
}
</style>
<style scoped>
.dropdown-menu {
  background-color: white;
  border: 1px solid #ddd;
  position: absolute;
  top: 100%;
  left:330px !important;
  width: 200px;
  z-index: 1000;
}
</style>