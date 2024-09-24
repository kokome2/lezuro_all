<template>
  <div class="container-center-horizontal">
    <div class="announcements-2 screen">
      <Header />
      <rj-zs-wi :frame72911Props="rJZsWIProps.frame72911Props" :frame72912Props="rJZsWIProps.frame72912Props" />
      <div class="frame-7856-2">
        <view :text89="viewProps.text89" :className="viewProps.className" />
        <div class="frame-7855-1">
          <frame7298 :frame7669Props="frame7298Props.frame7669Props" />
          <div class="frame-7854">
            <div class="frame-7853">
              <div class="th-29 pretendard-bold-mine-shaft-18px">
                <div class="text-3003 valign-text-middle">{{ text3003 }}</div>
                <div class="text-3004 valign-text-middle">{{ text3004 }}</div>
                <div class="text-3005 valign-text-middle">{{ text3005 }}</div>
                <div class="text-3006 valign-text-middle">{{ text3006 }}</div>
              </div>
              <!-- 페이징된 항목 렌더링 -->
              <div v-for="(item, index) in paginatedItems" :key="index" class="list">
                <th11 v-if="item.type === 'th11'" @click="openNoticeDetail" />
                <th12 v-if="item.type === 'th12'" :number1="item.number1" @click="openNoticeDetail" />
              </div>
            </div>
            <!-- <frame763 :className="frame763Props.className" :frame7645Props="frame763Props.frame7645Props" /> -->
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

      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import RjZsWi from "./RjZsWi";
import View from "./View";
import Frame7298 from "./Frame7298";
import Th11 from "./Th11";
import Th12 from "./Th12";
import Frame763 from "./Frame763";
import XFooter from "./XFooter";
export default {
  name: "NoticeList",
  components: {
    Header,
    RjZsWi,
    View,
    Frame7298,
    Th11,
    Th12,
    Frame763,
    XFooter,
  },
  props: [
    "text3003",
    "text3004",
    "text3005",
    "text3006",
    "x9cITtGProps",
    "rJZsWIProps",
    "viewProps",
    "frame7298Props",
    "th121Props",
    "th122Props",
    "th123Props",
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
        { type: "th11" }, // th11 item
        { type: "th11" }, // th11 item
        { type: "th12", number1:"1" }, // th12 item
        { type: "th12",  number1:"2"}, // th12 item
        { type: "th12", number1:"3"}, // th12 item
        // Add more items if needed
      ],
    };
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
    openNoticeDetail(){
      this.$router.push({path:"/notice-detail"})
    }
  }
};
</script>

<style>
.announcements-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1920px;
}

.frame-7856-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 104px;
  position: relative;
  width: 1400px;
}

.frame-7855-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}

.frame-7854 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7853 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.th-29 {
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

.text-3003 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 80px;
}

.text-3004 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 350px;
}

.text-3005 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 100px;
}

.text-3006 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 109px;
}
</style>
