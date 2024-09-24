<template>
  <div class="container-center-horizontal">
    <div class="community-2 screen">
      <Header />
      <rj-zs-wi
        :frame72911Props="rJZsWIProps.frame72911Props"
        :frame72912Props="rJZsWIProps.frame72912Props"
      />
      <div class="flex-row-91">
        <img
          class="material-symbolsclose-10"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/material-symbols-close-10.svg"
          alt="material-symbols:close"
        />
        <div class="frame-7832">
          <view :text89="viewProps.text89" :className="viewProps.className" />
          <div class="frame-7833">
            <a href="#"
              ><frame7712
                :text_Label="frame7712Props.text_Label"
                :className="frame7712Props.className"
            /></a>
            <div class="frame-7831-3">
              <div class="frame-7830-3">
                <div class="th-16 pretendard-bold-mine-shaft-18px">
                  <div class="text-2898 valign-text-middle">{{ text2898 }}</div>
                  <div class="text-2899 valign-text-middle">{{ text2899 }}</div>
                  <div class="text-2900 valign-text-middle">{{ text2900 }}</div>
                  <div class="text-2901 valign-text-middle">{{ text2901 }}</div>
                  <div class="text-2902 valign-text-middle">{{ text2902 }}</div>
                </div>
                <div class="frame-7830-3">
                  <th10
                    v-for="(item, index) in paginatedItems"
                    :key="index"
                    @click="goToBoardDetail"
                  />
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
import Frame7712 from "./Frame7712";
import Th10 from "./Th10";
import Frame763 from "./Frame763";
import XFooter from "./XFooter";
export default {
  name: "BoardList",
  components: {
    Header,
    RjZsWi,
    View,
    Frame7712,
    Th10,
    Frame763,
    XFooter,
  },
  props: [
    "text2898",
    "text2899",
    "text2900",
    "text2901",
    "text2902",
    "jGBKX4Props",
    "rJZsWIProps",
    "viewProps",
    "frame7712Props",
    "frame763Props",
    "xFooterProps",
  ],
  data(){
    return{
      currentPage: 1,
      itemsPerPage: 5, // Display 6 courses per page
       arrowLeftImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg", // 왼쪽 화살표 이미지 URL
      arrowRightImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg", // 오른쪽 화살표 이미지 URL
       thItems: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
      { id: 6, name: 'Item 6' },
      { id: 7, name: 'Item 7' },
      { id: 8, name: 'Item 8' },
      { id: 9, name: 'Item 9' },
       ],
    }
  },
  computed: {
  totalPages() {
    return Math.ceil(this.thItems.length / this.itemsPerPage);
  },
  paginatedItems() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.thItems.slice(start, start + this.itemsPerPage);
  },
},
  methods: {
    goToBoardDetail() {
      this.$router.push({ path: "/board-detail" });
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
.community-2 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 1458px;
  overflow-x: hidden;
  position: relative;
  width: 1920px;
}

.flex-row-91 {
  align-items: flex-start;
  display: flex;
  gap: 1025px;
  height: 647px;
  margin-left: -795px;
  margin-top: 104px;
  min-width: 2455px;
}

.material-symbolsclose-10 {
  height: 30px;
  margin-top: 9px;
  width: 30px;
}

.frame-7832 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  position: relative;
  width: 1400px;
}

.frame-7833 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-7831-3 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7830-3 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.th-16 {
  align-items: center;
  align-self: stretch;
  background-color: var(--cultured-pearl);
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0px 40px;
  position: relative;
  width: 100%;
}

.text-2898 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 80px;
}

.text-2899 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 320px;
}

.text-2900 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 100px;
}

.text-2901 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 130px;
}

.text-2902 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 109px;
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
font-weight: bold;}
</style>
