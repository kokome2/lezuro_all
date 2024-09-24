<template>
  <div class="container-center-horizontal">
    <div class="contacthistory-1 screen">
      <Header />
      <x2-f-ym-mc :frame7291Props="x2FYmMcProps.frame7291Props" />
      <view :text89="viewProps.text89" />
      <div class="frame-7692">
        <div class="frame-7691-1">
          <div class="group-764-1">
            <frame7727 :className="frame7727Props.className" :frame7673Props="frame7727Props.frame7673Props" />
          </div>
        </div>
      </div>
      <div class="frame-7831">
        <div class="frame-7830">
          <div class="navbar-3 pretendard-bold-mine-shaft-18px">
            <div class="navbar-link-text-90 valign-text-middle">{{ navbarLinkText90 }}</div>
            <div class="navbar-link-text-91 valign-text-middle">{{ navbarLinkText91 }}</div>
            <div class="navbar-link-text-92 valign-text-middle">{{ navbarLinkText92 }}</div>
            <div class="navbar-link-text-93 valign-text-middle">{{ navbarLinkText93 }}</div>
          </div>
          <div v-for="item in paginatedItems" :key="item.id" class="list" @click="openContactDetail">
            <component :is="item.component" :number="item.number"/>
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
import Frame7727 from "./Frame7727";
import Frame7730 from "./Frame7730";
import Th from "./Th";
import Th2 from "./Th2";
import Frame763 from "./Frame763";
import XFooter from "./XFooter";
export default {
  name: "ContactList",
  components: {
    Header,
    X2FYmMc,
    View,
    Frame7727,
    Frame7730,
    Th,
    Th2,
    Frame763,
    XFooter,
  },
  props: [
    "navbarLinkText90",
    "navbarLinkText91",
    "navbarLinkText92",
    "navbarLinkText93",
    "number",
    "text94",
    "date",
    "x2FYmMcProps",
    "viewProps",
    "frame7727Props",
    "th1Props",
    "th21Props",
    "th2Props",
    "th22Props",
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
        { id: 1, number:"1", component: "Th"},
        { id: 2, number:"2", component: "Th2" },
        { id: 3, number:"3", component: "Th"},
        { id: 4, number:"4", component: "Th2" },
        { id: 5, number:"5", component: "Th"},
        { id: 6, number:"6", component: "Th2" },
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
    openContactDetail(){
      this.$router.push({path:"/mycontact-detail"})
    }
  },
};
</script>

<style>
.list{width:100%;
height:70px;}

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
.contacthistory-1 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 1517px;
  position: relative;
  width: 1920px;
}

.frame-7692 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 52px;
  position: relative;
  width: 1400px;
}

.frame-7691-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  position: relative;
  width: 100%;
}

.group-764-1 {
  height: 60px;
  position: relative;
  width: 1399.98px;
}

.frame-7831 {
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-style: solid;
  border-right-width: 1px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 40px;
  position: relative;
  width: 1400px;
}

.frame-7830 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.navbar-3 {
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

.navbar-link-text-90 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 80px;
}

.navbar-link-text-91 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 400px;
}

.navbar-link-text-92,
.date-2 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 130px;
}

.navbar-link-text-93 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 100px;
}

.th {
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

.number-30 {
  letter-spacing: 0;
  line-height: 55px;
  position: relative;
  text-align: center;
  width: 80px;
}

.frame-7908 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  position: relative;
}

.text-94 {
  letter-spacing: 0;
  line-height: 55px;
  margin-top: -1px;
  position: relative;
  width: 400px;
}
</style>
