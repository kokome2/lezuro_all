<template>
  <div class="container-center-horizontal">
    <div class="courses-2 screen">
      <Header />
      <x2-f-ym-mc :frame7291Props="x2FYmMcProps.frame7291Props" />
      <view :text89="viewProps.text89" :className="viewProps.className" />
      <frame72983
        :text2658="frame72983Props.text2658"
        :frame76691Props="frame72983Props.frame76691Props"
        :frame76692Props="frame72983Props.frame76692Props"
      />
      <div class="frame-7763">
        <div class="courses-grid">
          <div
            v-for="(course, index) in paginatedCourses"
            :key="index"
            :class="['frame-769-2-1', course.className || '']"
            @click="openCourseDetail"
          >
            <div
              class="group-763-3"
              :style="{ 'background-image': 'url(' + course.group763 + ')' }"
            ></div>
            <div class="frame-7683-3">
              <div class="frame-7759">
                <h1
                  class="text-28-3 valign-text-middle pretendard-bold-log-cabin-24px"
                >
                  {{ course.courseName }}
                </h1>
                <div class="group-767-1">
                  <div
                    class="frame-7757-1 pretendard-regular-normal-granite-gray-16px"
                  >
                    <div class="text-28-4">{{ course.holeInfo }}</div>
                    <div class="rectangle-50926-1"></div>
                    <div class="text-28-4">{{ course.courseDetails }}</div>
                    <div class="rectangle-50926-1"></div>
                    <div class="text-28-4">{{ course.region }}</div>
                  </div>
                  <div class="frame-7758-2">
                    <div class="text-1609">코스난이도</div>
                    <!-- 별점 표시 -->
                    <div class="rating-stars">
                      <span
                        v-for="star in 5"
                        :key="star"
                        :class="
                          star <= course.difficulty ? 'red-star' : 'gray-star'
                        "
                      >
                        ★
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pagination-controls">
          <img
            class="pagination-arrow"
            @click="prevPage"
            :src="arrowLeftImage"
            :alt="'Previous'"
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
            :alt="'Next'"
            :class="{ disabled: currentPage === totalPages }"
          />
        </div>
      </div>

      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import X2FYmMc from "./X2FYmMc";
import View from "./View";
import Frame72983 from "./Frame72983";
// import Frame7758 from "./Frame7758";
import XFooter from "./XFooter";

export default{
  name: "CourseList",
  components: {
    Header,
    X2FYmMc,
    View,
    Frame72983,
    XFooter,
  },
  props: [
    "x2FYmMcProps",
    "viewProps",
    "frame72983Props",
    "xFooterProps",
    "frame7758Props",
  ],
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6, // 페이지당 6개의 코스
      arrowLeftImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg", // 왼쪽 화살표 이미지 URL
      arrowRightImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg", // 오른쪽 화살표 이미지 URL
      courses: [
        {
          group763:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-11@2x.png",
          courseName: "벨라스톤",
          holeInfo: "18홀",
          region: "경상도",
          courseDetails: "해돋이, 해넘이",
          difficulty: 4, // 난이도 4점
        },
        {
          group763:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-11@2x.png",
          courseName: "파인힐",
          holeInfo: "9홀",
          region: "충청도",
          courseDetails: "숲속 코스",
          difficulty: 2, // 난이도 2점
        },
        {
          group763:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-11@2x.png",
          courseName: "솔밭힐즈",
          holeInfo: "18홀",
          region: "강원도",
          courseDetails: "해안 코스",
          difficulty: 5, // 난이도 5점
        },
        {
          group763:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-11@2x.png",
          courseName: "벨라스톤",
          holeInfo: "18홀",
          region: "경상도",
          courseDetails: "해돋이, 해넘이",
          difficulty: 5, // 난이도 5점
        },
        {
          group763:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-11@2x.png",
          courseName: "파인힐",
          holeInfo: "9홀",
          region: "충청도",
          courseDetails: "숲속 코스",
          difficulty: 5, // 난이도 5점
        },
        {
          group763:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-11@2x.png",
          courseName: "솔밭힐즈",
          holeInfo: "18홀",
          region: "강원도",
          courseDetails: "해안 코스",
          difficulty: 4, // 난이도 5점
        },
      ],
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.courses.length / this.itemsPerPage);
    },
    paginatedCourses() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.courses.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    openCourseDetail() {
      this.$router.push({ path: "/course-detail" });
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
  },
};
</script>

<style>
.rating-stars {
  display: flex;
  gap: 3px;
}

.red-star {
  color: #d30f1a;
}

.gray-star {
  color: #ddd;
}
.group-763-3 {
  background-position: 50% 50%;
  background-size: cover;
  height: 250px;
  position: relative;
  width: 413px;
}
.courses-grid {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 413px;
  width: 100%;
}
.courses-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1920px;
}

.frame-7763 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 30px;
  padding: 40px;
  position: relative;
  width: 1400px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 열 */
  grid-template-rows: repeat(2, auto); /* 2개의 행 */
  gap: 40px; /* 코스 사이의 간격 */
}
.group-763-3 {
  background-position: 50% 50%;
  background-size: cover;
  height: 250px;
  position: relative;
  width: 413px;
}

.frame-7683-3 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 0px 0px 20px 20px;
  border-right-style: solid;
  border-right-width: 1px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 35px 30px;
  position: relative;
  width: 100%;
}

.frame-7759 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 207px;
}

.text-28-3 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.group-767-1 {
  height: 41px;
  position: relative;
  width: 207px;
}

.frame-7757-1 {
  align-items: flex-end;
  display: flex;
  gap: 10px;
  left: 0;
  position: absolute;
  top: 0;
  width: 207px;
}

.text-28-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.rectangle-50926-1 {
  background-color: var(--granite-gray);
  height: 10px;
  position: relative;
  top: -5px;
  width: 1px;
}
.pagination-controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
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
.frame-7758-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  margin-right: -78px;
  position: absolute;
  top: 30px;
}
</style>
