<template>
  <div class="container-center-horizontal">
    <div class="myswingvideos-2 screen">
      <Header />
      <rj-zs-wi :frame72911Props="rJZsWIProps.frame72911Props" :frame72912Props="rJZsWIProps.frame72912Props" />
      <div class="frame-7668">
        <view :text89="viewProps.text89" :className="viewProps.className" />
        <div class="frame-7667-8">
          <div class="frame-7666">
            <!-- 각 Frame7657 데이터를 직접 렌더링, 8개만 표시 -->
            <div class="row" v-for="(rowItems, rowIndex) in rows" :key="rowIndex">
              <div class="column" v-for="(item, index) in rowItems" :key="index">
                <div class="frame-76-11">
                  <div class="group-762-7" :data="item">
                    <img
                      class="group-762-7"
                      src="./../../img/CK_cm08085552 2.png"
                      alt="Polygon 1"
                    />
                    <img
                      class="vector-img"
                      src="./../../img/Polygon 1.png"
                      alt="Vector"
                        @click="openYouTubeModal"
                    />
                    <img
                      class="corner-vector"
                      src="./../../img/Vector.png"
                      alt="Corner Vector"
                         @click="openDeleteModal(item)"
                    />
                  </div>
                  <div class="group-761">
                    <div class="flex-col-40">
                      <div class="frame-7656">
                        <!-- 데이터 바인딩 -->
                        <div class="text-259 valign-text-middle pretendard-bold-log-cabin-20px">{{ item.courseName }}</div>
                        <div class="x1960m-1 valign-text-middle pretendard-regular-normal-log-cabin-18px">{{ item.shotInfo }}</div>
                      </div>
                      <div class="date-28 valign-text-middle pretendard-regular-normal-mountain-mist-14px">{{ item.date }}</div>
                    </div>
                    <!-- <img
                      class="frame-7655-2"
                      src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/frame-7655-6.svg"
                      alt="Frame 7655"
                      @click="openSwingVideosDownloadModal" 
                    /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 페이징 버튼과 페이지 번호 -->
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
        <!-- <SwingVideoDownloadModal
          v-if="isModalVisible"
          :R9grVj="'스윙 영상 다운로드'"
          :text_Label="'현재 영상을 저장하시겠습니까?'"
          @close="close
          Modal"
        /> -->
         <SwingVideoDeleteModal
          v-if="isDeleteModalVisible"
          @close="closeDeleteModal"
          @confirm="deleteSwingVideo"
        />
           <YouTubeModal v-if="isYouTubeModalVisible" @close="closeYouTubeModal" />
      </div>
    </div>
  </div>
</template>


<script>
import Header from "./Header";
import RjZsWi from "./RjZsWi";
import View from "./View";
// import Frame7657 from "./Frame7657";
import XFooter from "./XFooter";
import SwingVideoDownloadModal from "./SwingVideoDownloadModal";
import SwingVideoDeleteModal from "./SwingVideoDeleteModal"; 
import YouTubeModal from "./YouTubeModal";

export default {
  name: "MySwingVideoList",
  components: {
    Header,
    RjZsWi,
        YouTubeModal,
    View,
    // Frame7657,
       SwingVideoDeleteModal,
    SwingVideoDownloadModal,
    XFooter,
  },
  props: [
    "materialSymbolsClose",
    "rJZsWIProps",
    "viewProps",
    "xFooterProps",
    "items",
  ],
  data() {
    return {
      currentPage: 1,
      isModalVisible: false,
       isDeleteModalVisible: false,
        isYouTubeModalVisible: false,
        videoToDelete: null, // 삭제할 비디오 정보 저장
      itemsPerPage: 8, // 한 페이지당 보여줄 데이터 수
      swingVideos: [
        {
          id:1,
          courseName: "코스 1",
          shotInfo: "티샷: 196.0m",
          date: "2024.09.01",
        },
        {id:2,
          courseName: "코스 2",
          shotInfo: "티샷: 200.0m",
          date: "2024.09.02",
        },
        {id:3,
          courseName: "코스 3",
          shotInfo: "티샷: 210.0m",
          date: "2024.09.03",
        },
        {id:4,
          courseName: "코스 4",
          shotInfo: "티샷: 220.0m",
          date: "2024.09.04",
        },
        {id:5,
          courseName: "코스 5",
          shotInfo: "티샷: 180.0m",
          date: "2024.09.05",
        },
        {id:6,
          courseName: "코스 6",
          shotInfo: "티샷: 170.0m",
          date: "2024.09.06",
        },
        {id:7,
          courseName: "코스 7",
          shotInfo: "티샷: 200.0m",
          date: "2024.09.07",
        },
        {id:8,
          courseName: "코스 8",
          shotInfo: "티샷: 210.0m",
          date: "2024.09.08",
        },
        {id:9,
          courseName: "코스 9",
          shotInfo: "티샷: 220.0m",
          date: "2024.09.09",
        },
      ],
      arrowLeftImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg", // 왼쪽 화살표 이미지 URL
      arrowRightImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg", // 오른쪽 화살표 이미지 URL
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.swingVideos.length / this.itemsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.swingVideos.slice(start, end); // 현재 페이지에 해당하는 데이터만 보여줌
    },
    rows() {
      // 한 페이지에 해당하는 데이터를 두 줄로 나누기 (4개씩 두 줄)
      const result = [];
      for (let i = 0; i < this.paginatedData.length; i += 4) {
        result.push(this.paginatedData.slice(i, i + 4));
      }
      return result;
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
    openSwingVideosDownloadModal() {
      this.isModalVisible = true; // 모달을 열 때 호출
    },
    closeModal() {
      this.isModalVisible = false; // 모달을 닫을 때 호출
    },
    openDeleteModal(item) {
      this.videoToDelete = item; // 삭제할 비디오 설정
      this.isDeleteModalVisible = true; // 모달 열기
    },
    closeDeleteModal() {
      this.isDeleteModalVisible = false; // 모달 닫기
      this.videoToDelete = null; // 선택된 비디오 초기화
    },
    deleteSwingVideo() {
      if (this.videoToDelete) {
        // 삭제할 비디오를 배열에서 제거
        this.swingVideos = this.swingVideos.filter(
          (video) => video.id !== this.videoToDelete.id
        );
        this.closeDeleteModal(); // 모달 닫기
      }
    },
      openYouTubeModal() {
      this.isYouTubeModalVisible = true;
    },
    closeYouTubeModal() {
      this.isYouTubeModalVisible = false;
    },
  },
};
</script>

<style>
.frame-761-5 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  height: 55px;
  justify-content: space-between;
  padding: 0px 20px;
  position: relative;
  width: 500px;
}
.myswingvideos-2 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 1892px;
  overflow: hidden;
  position: relative;
  width: 1920px;
}

.frame-7668 {
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-right: 18px;
  margin-top: 104px;
  position: relative;
  width: 1400px;
}

.frame-7667-8 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

/* 두 줄 4x2 정렬 */
.row {
  display: flex;
  justify-content: flex-start; /* 항목을 왼쪽부터 정렬 */
  margin-bottom: 20px;
}

.column {
  flex: 1;
  max-width: 25%; /* 4개의 항목이 한 줄에 들어가도록 설정 */
  padding: 10px;
}
.material-symbolsclose-8 {
  height: 30px;
  margin-left: -2287px;
  margin-top: 19152px;
  width: 30px;
}

.pagination-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.pagination-arrow {
  width: 30px;
  cursor: pointer;
}

.pagination-arrow.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 20px;
}

.page-number {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: lightgray;
  cursor: pointer;
}

.page-number.active {
  background-color: red;
  color: white;
}

.page-number:hover {
  background-color: #ddd;
}

/* 영상 css */

.corner-vector {
  position: absolute;
  top: 20px; /* 왼쪽 모퉁이 위치 조정 */
  left: 20px;
  width: 17px; /* 너비를 17px로 설정 */
}
.frame-76-11 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 320px;
}

.group-762-7 {
  /* background-image: url(https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/mask-group-107@2x.png); */
  background-size: 100% 100%;
  border-radius: 20px;
  height: 320px;
  position: relative;
  width: 320px;
}

.polygon-1-3 {
  height: 59px;
  left: 140px;
  position: absolute;
  top: 130px;
  width: 53px;
}
.vector-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 77px; /* 원하는 이미지 크기로 조절 */
  height: 77px;
}
.group-761 {
  height: 107px;
  position: relative;
  width: 302px;
}

.flex-col-40 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  left: 0;
  min-height: 107px;
  position: absolute;
  top: 0;
  width: 104px;
}

.frame-7656 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 104px;
}

.text-259 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
}

.x1960m-1 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 25.2px;
  position: relative;
}

.date-28 {
  height: 20px;
  letter-spacing: 0;
  line-height: 19.6px;
  white-space: nowrap;
}

.frame-7655-2 {
  height: 40px;
  left: 260px;
  position: absolute;
  top: 62px;
  width: 40px;
}
</style>
