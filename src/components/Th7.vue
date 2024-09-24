<template>
  <div class="container-center-horizontal">
    <div class="scorecard-2 screen">
      <div class="frame-7826">
        <div class="frame-7826-item-wrapper">
          <div v-for="(item, index) in paginatedTh7" :key="index">
            <th7 @buttonClick="openModal" />
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

      <!-- 모달 -->
      <GameScoreCard v-if="isModalVisible" @closeModal="closeModal" />
    </div>
  </div>
</template>

<script>
import Th7 from './Th7';
import GameScoreCard from './GameScoreCard';

export default {
  name: 'MyScoreCard',
  components: {
    Th7,
    GameScoreCard,
  },
  data() {
    return {
      th7Items: Array(10).fill({
        date: "2024-06-25",
        location: "서울 레저로 파크",
        course: "레저로 A코스",
        holes: "18홀",
        score: "0타",
      }), // 10개의 항목만 관리
      currentPage: 1,
      itemsPerPage: 5, // 한 페이지당 표시할 th7 항목 수
      isModalVisible: false,
      arrowLeftImage: 'path_to_left_arrow_image',
      arrowRightImage: 'path_to_right_arrow_image',
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.th7Items.length / this.itemsPerPage);
    },
    paginatedTh7() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.th7Items.slice(start, end);
    },
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
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
  },
};
</script>

<style>
.scorecard-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1920px;
}

.frame-7826 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-top: 51px;
  position: relative;
  width: 1400px;
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

.flipped {
  transform: scaleX(-1);
}
</style>
