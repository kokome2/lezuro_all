<template>
  <div class="container-center-horizontal">
    <div class="events-2 screen">
      <Header />
      <rj-zs-wi
        :frame72911Props="rJZsWIProps.frame72911Props"
        :frame72912Props="rJZsWIProps.frame72912Props"
      />
      <view :text89="viewProps.text89" :className="viewProps.className" />
      <div class="events_wrap">
        <!-- Tabs section -->
        <div class="events_tab">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            @click="selectTab(tab)"
            :class="['tab', { active: selectedTab === tab }]"
          >
            {{ tab }}
          </div>
        </div>

        <!-- 전체 이벤트 탭 -->
        <div class="frame-7820" v-if="selectedTab === '전체 이벤트'">
          <div class="frame-7825">
            <div class="frame-7824 grid-container">
              <div
                v-for="(course, index) in paginatedCourses"
                :key="index"
                class="frame-782"
                @click="toGoEventDetail"
              >
              <div class="label-box pretendard-medium-white-14px" :style="getLabelStyle(course.type)">
    {{ course.type === '진행중' ? '진행중' : '종료' }}
  </div>
                <img
                  class="mask-group-2"
                  :src="course.maskGroup"
                  alt="Mask group"
                />
                <div class="frame-7813-2">
                  <p
                    class="text-283 valign-text-middle pretendard-bold-log-cabin-24px"
                  >
                    {{ course.description }}
                  </p>
                  <div
                    class="text-28-2 valign-text-middle pretendard-light-granite-gray-16px"
                  >
                    {{ course.period }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination controls -->
            <div class="pagination-controls">
              <img
                class="pagination-arrow"
                @click="prevPage"
                :src="arrowLeftImage"
                alt="Previous"
                :class="{ disabled: currentPage === 1 }"
              />
              <div class="page-numbers">
                <div
                  v-for="page in totalPages"
                  :key="page"
                  :class="['page-number', { active: page === currentPage }]"
                  @click="goToPage(page)"
                >
                  {{ page }}
                </div>
              </div>
              <img
                class="pagination-arrow flipped"
                @click="nextPage"
                :src="arrowRightImage"
                alt="Next"
                :class="{ disabled: currentPage === totalPages }"
              />
            </div>
          </div>
        </div>

        <!-- 진행중 이벤트 탭 -->
        <div class="frame-7820" v-if="selectedTab === '진행중 이벤트'">
          <div class="frame-7825">
            <div class="frame-7824 grid-container">
              <div
                v-for="(course, index) in paginatedCourses"
                :key="index"
                class="frame-782"
              >
              <div class="label-box pretendard-medium-white-14px" :style="getLabelStyle(course.type)">
    {{ course.type === '진행중' ? '진행중' : '종료' }}
  </div>
                <img
                  class="mask-group-2"
                  :src="course.maskGroup"
                  alt="Mask group"
                />
                <div class="frame-7813-2">
                  <p
                    class="text-283 valign-text-middle pretendard-bold-log-cabin-24px"
                  >
                    {{ course.description }}
                  </p>
                  <div
                    class="text-28-2 valign-text-middle pretendard-light-granite-gray-16px"
                  >
                    {{ course.period }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination controls -->
            <div class="pagination-controls">
              <img
                class="pagination-arrow"
                @click="prevPage"
                :src="arrowLeftImage"
                alt="Previous"
                :class="{ disabled: currentPage === 1 }"
              />
              <div class="page-numbers">
                <div
                  v-for="page in totalPages"
                  :key="page"
                  :class="['page-number', { active: page === currentPage }]"
                  @click="goToPage(page)"
                >
                  {{ page }}
                </div>
              </div>
              <img
                class="pagination-arrow flipped"
                @click="nextPage"
                :src="arrowRightImage"
                alt="Next"
                :class="{ disabled: currentPage === totalPages }"
              />
            </div>
          </div>
        </div>

        <!-- 종료 이벤트 탭 -->
        <div class="frame-7820" v-if="selectedTab === '종료 이벤트'">
          <div class="frame-7825">
            <div class="frame-7824 grid-container">
              <div
                v-for="(course, index) in paginatedCourses"
                :key="index"
                class="frame-782"
              >
              <div class="label-box  pretendard-medium-white-14px" :style="getLabelStyle(course.type)">
    {{ course.type === '진행중' ? '진행중' : '종료' }}
  </div>
                <img
                  class="mask-group-2"
                  :src="course.maskGroup"
                  alt="Mask group"
                />
                <div class="frame-7813-2">
                  <p
                    class="text-283 valign-text-middle pretendard-bold-log-cabin-24px"
                  >
                    {{ course.description }}
                  </p>
                  <div
                    class="text-28-2 valign-text-middle pretendard-light-granite-gray-16px"
                  >
                    {{ course.period }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination controls -->
            <div class="pagination-controls">
              <img
                class="pagination-arrow"
                @click="prevPage"
                :src="arrowLeftImage"
                alt="Previous"
                :class="{ disabled: currentPage === 1 }"
              />
              <div class="page-numbers">
                <div
                  v-for="page in totalPages"
                  :key="page"
                  :class="['page-number', { active: page === currentPage }]"
                  @click="goToPage(page)"
                >
                  {{ page }}
                </div>
              </div>
              <img
                class="pagination-arrow flipped"
                @click="nextPage"
                :src="arrowRightImage"
                alt="Next"
                :class="{ disabled: currentPage === totalPages }"
              />
            </div>
          </div>
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import RjZsWi from "./RjZsWi";
import View from "./View";
import XFooter from "./XFooter";

export default {
  name: "EventList",
  components: {
    Header,
    RjZsWi,
    View,
    XFooter,
  },
  props: ["rJZsWIProps", "viewProps", "xFooterProps"],
  data() {
    return {
      tabs: ["전체 이벤트", "진행중 이벤트", "종료 이벤트"],
      selectedTab: "전체 이벤트",
      currentPage: 1,
      itemsPerPage: 6,
      courses: [
        {
          type: "진행중",
          maskGroup: require("../../img/Rectangle 509274.png"),
          description: "홀인원 챌린지에 성공하면, 2천만원 나눠 드려요",
          period: "2024-04-11 ~ 2024-11-30",
        },
        {
          type: "진행중",
          maskGroup: require("../../img/Rectangle 509274.png"),
          description: "홀인원 챌린지에 성공하면, 2천만원 나눠 드려요",
          period: "2024-04-11 ~ 2024-11-30",
        },
        {
          type: "진행중",
          maskGroup: require("../../img/Rectangle 509274.png"),
          description: "홀인원 챌린지에 성공하면, 2천만원 나눠 드려요",
          period: "2024-04-11 ~ 2024-11-30",
        },
        {
          type: "종료",
          maskGroup: require("../../img/Rectangle 509274.png"),
          description: "스크린골프 대회가 종료되었습니다.",
          period: "2024-04-11 ~ 2024-11-30",
        },
        {
          type: "종료",
          maskGroup: require("../../img/Rectangle 509274.png"),
          description: "스크린골프 대회가 종료되었습니다.",
          period: "2024-04-11 ~ 2024-11-30",
        },
        {
          type: "진행중",
          maskGroup: require("../../img/Rectangle 509274.png"),
          description: "스크린골프 챌린지 진행중입니다.",
          period: "2024-04-11 ~ 2024-11-30",
        },
        {
          type: "종료",
          maskGroup: require("../../img/Rectangle 509274.png"),
          description: "스크린골프 대회가 종료되었습니다.",
          period: "2024-04-11 ~ 2024-11-30",
        },
      ],
      arrowLeftImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg",
      arrowRightImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg",
    };
  },
  computed: {
    filteredCourses() {
      if (this.selectedTab === "전체 이벤트") {
        return this.courses;
      } else if (this.selectedTab === "진행중 이벤트") {
        return this.courses.filter((course) => course.type === "진행중");
      } else if (this.selectedTab === "종료 이벤트") {
        return this.courses.filter((course) => course.type === "종료");
      }
    },
    totalPages() {
      return Math.ceil(this.filteredCourses.length / this.itemsPerPage);
    },
    paginatedCourses() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredCourses.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
      this.currentPage = 1; // Reset to the first page when tab is changed
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
      getLabelStyle(type) {
    if (type === '진행중') {
      return {
        backgroundColor: '#D30F1A',
        color: 'white',
        padding: '15px 30px',
        position: 'absolute',
        top: '30px',
        left: '30px',
        borderRadius: '30px',
      };
    } else if (type === '종료') {
      return {
        backgroundColor: '#444444',
        color: 'white',
        padding: '15px 30px',
        position: 'absolute',
        top: '30px',
        left: '30px',
        borderRadius: '30px',
      };
    }
  },
toGoEventDetail(){
  this.$router.push({path:"/event-detail"})
}
  },
};
</script>

<style scoped>
.events_wrap{
 display: flex;
  flex-direction: column;
  align-items: center;
}

.frame-7820{
  padding:40px;
  border:1px solid #ddd;
}
.events_tab {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.tab {
  line-height: 100%;
  width: 466px;
  padding: 23px 0px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  color: #666666;
  background-color: #f5f6f6;
}


.tab:hover {
  background-color: #fff;
}

.tab.active {
  width: 466px;
  border: 1px solid #ddd;
  margin-bottom: -2px;
  background-color: #fff;
  border-bottom: 2px solid #fff;
  position: relative;
  z-index: 2;
  color: #222222;
  font-family: "Pretendard-Bold";
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
}

.page-number.active {
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination-arrow {
  cursor: pointer;
}

.pagination-arrow.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-arrow.flipped {
  transform: rotate(180deg);
}
.text-283 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.frame-782 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 640px;
  border-radius: 20px;
  overflow: hidden;
}

.mask-group-2 {
  height: 330px;
  width: 640px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
}
.frame-7813-2 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto);
  border-radius: 0px 0px 20px 20px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  padding: 40px 30px;
  position: relative;
  width: 100%;
}
.text-28-2 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}
</style>
