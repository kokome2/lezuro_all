<template>
  <div class="view-176">
    <div class="frame-7636-9" ref="dropdownArea">
      <!-- 홈으로 이동하는 링크 -->
      <router-link :to="{ path: '/' }">
        <img
          class="frame-7635"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/frame-7635.svg"
          alt="Frame 7635"
        />
      </router-link>

      <!-- 첫 번째 Frame7291, 클릭 시 드롭다운 열림 -->
      <div @click="toggleDropdown">
        <frame7291 :text_Label="frame72911Props.text_Label" :className="frame72911Props.className" />
      </div>
    <!-- <frame7291 :text_Label="frame72912Props.text_Label" :className="frame72912Props.className" /> -->

      <!-- 첫 번째 드롭다운 메뉴 -->
      <div v-if="isFirstDropdownOpen" class="dropdown-container" @mouseleave="resetSecondDropdown">
        <div class="dropdown-menu">
          <ul>
            <li 
              v-for="(item, index) in dropdownItems" 
              :key="index"
              class="dropdown-item"
               @click="navigateTo(item.link)"
              @mouseover="handleFirstDropdownHover(item.value)">
              {{ item.label }}
              
              <!-- 두 번째 드롭다운이 마우스 오버된 항목의 오른쪽에 뜨도록 설정 -->
              <ul v-if="secondDropdownItems.length && currentDropdown === item.value" class="second-dropdown">
                <li 
                  v-for="(subItem, subIndex) in secondDropdownItems" 
                  :key="subIndex"
                  @click="navigateTo(subItem.link)">
                  {{ subItem.label }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7291 from "./Frame7291";

export default {
  name: "RjZsWi",
  components: {
    Frame7291,
  },
  props: ["frame72911Props", "frame72912Props"],
  data() {
    return {
      isFirstDropdownOpen: false, 
      secondDropdownItems: [], 
      currentDropdown: null, // 현재 활성화된 첫 번째 드롭다운 항목
      dropdownItems: [
        { label: "기록실", value: "record",link: "/myscorecard" },
        { label: "대회", value: "game", link: "/game-list" },
        { label: "매장·예약", link: "/map-list" },
        { label: "코스", link: "/course-list" },
        { label: "가이드", link: "/system-preparing" },
        { label: "커뮤니티", value: "community" ,link: "/events-list"},
        { label: "고객센터", value: "support" , link: "/notice-list" },
      ],
    };
  },
  mounted() {
    // 드롭다운 외부 클릭 이벤트 등록
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    // 컴포넌트가 파괴되기 전에 외부 클릭 이벤트 제거
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    // 드롭다운 외부 클릭 처리
    handleClickOutside(event) {
      const dropdownArea = this.$refs.dropdownArea;
      if (dropdownArea && !dropdownArea.contains(event.target)) {
        this.isFirstDropdownOpen = false; // 외부 클릭 시 드롭다운 닫기
        this.resetSecondDropdown(); // 두 번째 드롭다운도 초기화
      }
    },
    // 첫 번째 드롭다운 열기/닫기
    toggleDropdown(event) {
      this.isFirstDropdownOpen = !this.isFirstDropdownOpen;
    },
    // 첫 번째 드롭다운 항목에 마우스를 올렸을 때 두 번째 드롭다운 항목 설정
    handleFirstDropdownHover(value) {
      this.currentDropdown = value;
      if (value === "record") {
        this.secondDropdownItems = [
          { label: "스코어 카드", link: "/myscorecard" },
          { label: "나의 스윙 영상", link: "/myswingvideos-list" },
        ];
      } else if (value === "game") {
        this.secondDropdownItems = [
          { label: "대회", link: "/game-list" },
          { label: "나의 대회", link: "/mygame-list" },
        ];
      } else if (value === "community") {
        this.secondDropdownItems = [
          { label: "이벤트", link: "/events-list" },
          { label: "자유 게시판", link: "/board-list" },
        ];
      } else if (value === "support") {
        this.secondDropdownItems = [
          { label: "공지사항", link: "/notice-list" },
          { label: "1:1문의", link: "/contact-write" },
          { label: "FAQ", link: "/faq-list" },
        ];
      } else {
        this.secondDropdownItems = []; // 해당 항목 없을 때 초기화
      }
    },
    // 드롭다운 항목을 클릭했을 때 라우트 이동
    navigateTo(link) {
      this.$router.push(link);
    },
    // 두 번째 드롭다운 초기화
    resetSecondDropdown() {
      this.secondDropdownItems = [];
      this.currentDropdown = null; // 마우스가 빠져나가면 첫 번째 항목도 초기화
    }
  },
};
</script>

<style>
.view-176 {
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

.frame-7636-9 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 1400px;
}

.frame-7635 {
  height: 70px;
  width: 70px;
}

.dropdown-container {
  display: inline-block;
  position: absolute;
  top: 70px;
}

.dropdown-menu {
  background-color: white;
  border: 1px solid #ddd;
  position: absolute;
  top: 100%;
  left: 70px;
  width: 200px;
  z-index: 1000;
}

.dropdown-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dropdown-item {
  position: relative; /* 포지션을 상대적으로 설정 */
  padding: 20px;
  display: block;
  border: 1px solid #ddd;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}

/* 두 번째 드롭다운 스타일 */
.second-dropdown {
  background-color: white;
  border: 1px solid #ddd;
  width: 200px;
  position: absolute;
  top: 0;
  left: 100%; /* 첫 번째 드롭다운 항목의 오른쪽에 위치 */
  z-index: 1000;
}

.second-dropdown li {
  padding: 20px;
  cursor: pointer;
  border: 1px solid #ddd;
  display: block;
}

.second-dropdown li:hover {
  background-color: #f1f1f1;
}
</style>
