<template>
  <div class="container-center-horizontal">
    <div class="mytournament-2 screen">
      <Header />
      <rj-zs-wi :frame72911Props="rJZsWIProps.frame72911Props" :frame72912Props="rJZsWIProps.frame72912Props" />
      <view :text89="viewProps.text89" :className="viewProps.className" />
      <frame72982 :className="frame72982Props.className" />
      <div class="frame-7729-1">
        <div class="th-15 pretendard-bold-mine-shaft-18px">
          <div class="text-2611 valign-text-middle">{{ text2611 }}</div>
          <div class="text-2612 valign-text-middle">{{ text2612 }}</div>
          <div class="text-26-6 valign-text-middle">{{ text2613 }}</div>
          <div class="text-26-7 valign-text-middle">{{ text2614 }}</div>
          <div class="text-2615 valign-text-middle">{{ text2615 }}</div>
          <div class="text-2616 valign-text-middle">{{ text2616 }}</div>
        </div>
         <div v-for="(item, index) in paginatedItems" :key="index" class="list">
          <!-- th-9와 frame-7729-item-4 교차 표시 -->
          <th9 v-if="item.type === 'th9'" />
          <div class="frame-7729-item-4" v-if="item.type === 'frame'" @click="openPGameModal">
            <div class="frame-7731-3"
             :class="{ 'frame-red': item.text === '진행', 'framd-blue': item.text === '예정' }">
             <div
                class="text-2622 valign-text-middle pretendard-semi-bold-monza-14px"
                :class="{ 'text-red': item.text === '진행', 'text-blue': item.text === '예정' }"
              >{{ item.text }}</div>
            </div>
            <div class="text-26-8 valign-text-middle pretendard-regular-normal-granite-gray-16px">{{ item.subtext }}</div>
            <frame7732 />
            <div class="text-26-7 valign-text-middle pretendard-regular-normal-granite-gray-18px">{{ item.extra1 }}</div>
            <div class="text-2626 valign-text-middle pretendard-regular-normal-granite-gray-18px">{{ item.extra2 }}</div>
            <div class="number-219 valign-text-middle pretendard-regular-normal-granite-gray-18px">{{ item.number }}</div>
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
      <PGamePasswordModal
      v-if="isModalVisible"
      @close="closeModal"
      />
      <x-footer :className="xFooterProps.className" />
      <!-- <img class="material-symbolsclose-9" :src="materialSymbolsClose" alt="material-symbols:close" /> -->
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import RjZsWi from "./RjZsWi";
import View from "./View";
import Frame72982 from "./Frame72982";
import Th9 from "./Th9";
import Frame7732 from "./Frame7732";
import Frame77312 from "./Frame77312";
import Group673 from "./Group673";
import Frame7645 from "./Frame7645";
import XFooter from "./XFooter";
import PGamePasswordModal from "./PGamePasswordModal";

export default {
  name: "MyGameList",
  components: {
    Header,
    RjZsWi,
    View,
    Frame72982,
    Th9,
    Frame7732,
    Frame77312,
    Group673,
    Frame7645,
    XFooter,
    PGamePasswordModal,
  },
  props: [
    "text2611",
    "text2612",
    "text2613",
    "text2614",
    "text2615",
    "text2616",
    "text2622",
    "text2623",
    "text2625",
    "text2626",
    "number1",
    "text2628",
    "text2630",
    "text2631",
    "number2",
    "text2638",
    "text2639",
    "text2640",
    "text2641",
    "number3",
    "materialSymbolsClose",
    "rJZsWIProps",
    "viewProps",
    "frame72982Props",
    "xFooterProps",
  ],
  data(){
    return{
      isModalVisible:false,
         currentPage: 1,
      itemsPerPage: 5, // Display 6 courses per page
       arrowLeftImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg", // 왼쪽 화살표 이미지 URL
      arrowRightImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg", // 오른쪽 화살표 이미지 URL
         thItems: [
        { type: 'th9', id: 1 },
        { type: 'frame', text: '진행', subtext: '2024-07-30 ~ 2024-08-23', extra1: '레저로 여름맞이 스크린 골프대회', extra2: '-24', number: 1 },
        { type: 'th9', id: 2 },
        { type: 'frame', text: '진행', subtext: '2024-07-30 ~ 2024-08-23', extra1: '레저로 여름맞이 스크린 골프대회', extra2: '24', number: 1 },
         { type: 'frame', text: '예정', subtext: '2024-07-30 ~ 2024-08-23', extra1: '레저로 여름맞이 스크린 골프대회', extra2: '24', number: 1 },
         
        // 더 많은 항목 추가
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
  methods : {
    openPGameModal(){
      this.isModalVisible=true;
    },
    closeModal(){
      this.isModalVisible = false;
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
  }
};
</script>

<style>
.text-red {
  color: red;
}

.text-blue {
  color: blue !important;
}
.framd-blue{
  border-color:blue !important;
}
.list{width:100%;}
.mytournament-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 1555px;
  overflow: hidden;
  position: relative;
  width: 1920px;
}

.frame-7729-1 {
  align-items: center;
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 44px;
  padding: 40px;
  position: relative;
  width: 1400px;
}

.th-15 {
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

.text-2611 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 80px;
}

.text-2612 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 214px;
}

.text-26-6 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 70px;
}

.text-26-7 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 300px;
}

.text-2615,
.text-2626,
.number-219,
.text-2631,
.number-220,
.text-2641,
.number-221 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 100px;
}

.text-2616 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 109px;
}

.frame-7729-item-4 {
  align-items: center;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0px 40px;
  position: relative;
  width: 100%;
}

.frame-7731-3 {
  align-items: center;
  border: 1px solid;
  border-color: var(--monza);
  border-radius: 90px;
  display: flex;
  gap: 10px;
  height: 32px;
  justify-content: center;
  padding: 12px 4px;
  position: relative;
  width: 80px;
}

.text-2622 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -2px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text-26-8 {
  letter-spacing: 0;
  line-height: 55px;
  position: relative;
  text-align: center;
  width: 214px;
}

.frame-7667-9 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 30px;
  justify-content: center;
  padding: 50px 0px 0px;
  position: relative;
}

.material-symbolsclose-9 {
  align-self: flex-start;
  height: 30px;
  margin-left: -4216px;
  margin-top: 16513px;
  width: 30px;
}
</style>
