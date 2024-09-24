<template>
  <div class="container-center-horizontal">
    <div class="myprofile-2 screen">
      <Header />
      <x2-f-ym-mc :frame7291Props="x2FYmMcProps.frame7291Props" />
      <view :text89="viewProps.text89" />
       <h1 class="text-1 valign-text-middle pretendard-bold-mine-shaft-38px">
            내정보
          </h1>
      <div class="frame-7692-1">
        <div class="frame-7691-2">
          <div class="group-764-2">
            <div class="frame-7727-3">
              <div class="profile_tab pretendard-medium-granite-gray-18px">
                <div
                  v-for="(tab, index) in tabs"
                  :key="index"
                  @click="selectTab(tab)"
                  :class="['tab', { active: selectedTab === tab }]"
                >
                  {{ tab }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="frame-7900" v-if="selectedTab === '내정보 변경'">
        <div class="frame-7962-1">
          <div class="frame-7961-1">
            <div class="group-33593-1">
              <div class="overlap-group-78">
                <div class="ellipse-1-1"></div>
                <img
                  class="vector-143"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-63.svg"
                  alt="Vector"
                />
                <div class="group-2-1">
                  <img
                    class="vector-144"
                    src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-64.svg"
                    alt="Vector"
                  />
                </div>
              </div>
            </div>
            <div class="frame-7960-1">
              <div class="frame-795-2">
                <div class="frame-7953-2">
                  <div class="frame-7952">
                    <h1
                      class="text-929 valign-text-middle pretendard-medium-black-24px"
                    >
                      개인정보
                    </h1>
                    <div class="frame-7951-1">
                      <div class="ellipse-47"></div>
                      <div
                        class="text-930 valign-text-middle pretendard-medium-granite-gray-18px"
                      >
                        네이버 로그인
                      </div>
                    </div>
                  </div>
                  <frame7712
                    :text_Label="frame77121Props.text_Label"
                    :className="frame77121Props.className"
                    @click="editmyprofile"
                  />
                </div>
                <div class="frame-7948-6">
                  <div class="frame-78-1">
                    <div class="frame-78-2 pretendard-bold-black-18px">
                      <frame78842 :text1077="frame788421Props.text1077" />
                      <div class="frame-788-3">
                        <div class="text-10-11 valign-text-middle">
                          {{ text1078 }}
                        </div>
                      </div>
                      <div class="frame-788-3">
                        <div class="text-1079 valign-text-middle">
                          {{ text1079 }}
                        </div>
                      </div>
                      <frame78842
                        :text1077="frame788422Props.text1077"
                        :className="frame788422Props.className"
                      />
                      <frame78842
                        :text1077="frame788423Props.text1077"
                        :className="frame788423Props.className"
                      />
                    </div>
                    <div class="frame-78-2">
                      <div class="frame-7884">
                        <div
                          class="text-10-11 valign-text-middle pretendard-light-granite-gray-18px"
                        >
                          {{ text1082 }}
                        </div>
                      </div>
                      <div class="frame-788-4">
                        <div
                          class="park123-1 valign-text-middle pretendard-light-granite-gray-18px"
                        >
                          {{ park123 }}
                        </div>
                      </div>
                      <div class="frame-788-4">
                        <div
                          class="date-11 valign-text-middle pretendard-light-granite-gray-18px"
                        >
                          {{ date }}
                        </div>
                      </div>
                      <div class="frame-788-4">
                        <div
                          class="text-1083 valign-text-middle pretendard-light-granite-gray-18px"
                        >
                          {{ text1083 }}
                        </div>
                      </div>
                      <div class="frame-788-4">
                        <div
                          class="text-1084 valign-text-middle pretendard-medium-monza-18px"
                        >
                          {{ text1084 }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    class="text-1085 valign-text-middle pretendard-light-red-14px"
                  >
                    {{ text1085 }}
                  </p>
                </div>
              </div>
              <div class="frame-795-2">
                <div class="frame-7951-5">
                  <div class="frame-7953-2">
                    <frame79522
                      :text940="frame79522Props.text940"
                      :className="frame79522Props.className"
                    />
                    <frame7712
                      :text_Label="frame77122Props.text_Label"
                      :className="frame77122Props.className"
                      @click="editmysocialprofile"
                    />
                  </div>
                </div>
                <div class="frame-7956-1">
                  <div class="frame-795-2">
                    <div class="frame-7948-7">
                      <div class="frame-78-1">
                        <div class="frame-7883-1">
                          <div class="frame-78-1">
                            <frame77842
                              :text1088="frame778421Props.text1088"
                              :frame73033Props="
                                frame778421Props.frame73033Props
                              "
                            />
                            <div class="frame-7787-2">
                              <frame73033
                                :text1087="frame730331Props.text1087"
                                :className="frame730331Props.className"
                              />
                              <div class="frame-7-28">
                                <div
                                  class="number-69 valign-text-middle pretendard-medium-granite-gray-18px"
                                >
                                  {{ number }}
                                </div>
                                <p
                                  class="text-1090 valign-text-middle pretendard-medium-suva-gray-16px"
                                >
                                  {{ text1090 }}
                                </p>
                              </div>
                            </div>
                            <frame77842
                              :text1088="frame778422Props.text1088"
                              :className="frame778422Props.className"
                              :frame73033Props="
                                frame778422Props.frame73033Props
                              "
                            />
                            <frame77842
                              :text1088="frame778423Props.text1088"
                              :className="frame778423Props.className"
                              :frame73033Props="
                                frame778423Props.frame73033Props
                              "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frame-795-3">
                <frame7951 :frame79522Props="frame79511Props.frame79522Props" />
                <div class="frame-7956-1">
                  <div class="frame-795-2">
                    <div class="frame-7787-1">
                      <frame73033 :text1087="frame730332Props.text1087" />
                      <div class="frame-7-28">
                        <div
                          class="text-1095 valign-text-middle pretendard-medium-torea-bay-18px"
                          @click="toGoEditPassword"
                        >
                          {{ text1095 }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frame-795-3">
                <frame7951 :frame79522Props="frame79512Props.frame79522Props" />
                <div class="frame-7956-1">
                  <div class="frame-795-2">
                    <div class="frame-7787-1">
                      <frame73033 :text1087="frame730333Props.text1087" />
                      <div class="frame-7-28">
                        <frame8113 :className="frame8113Props.className" />
                        <a href="#"><frame2 /></a>
                        <a href="#"><frame7895 /></a>
                        <a href="#"><frame7896 /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-7897-1">
            <div
              class="text-1102 valign-text-middle pretendard-light-mountain-mist-18px"
            >
              {{ text1102 }}
            </div>
            <div
              class="text-1103 valign-text-middle pretendard-medium-granite-gray-18px"
              @click="openAccountDeletionModal"
            >
              {{ text1103 }}
            </div>
          </div>
        </div>
      </div>
      <div class="frame-7820" v-else-if="selectedTab === '1:1 문의내역'">
        <div class="frame-7831" style="margin-top: 40px">
          <div class="frame-7830">
            <div class="navbar-3 pretendard-bold-mine-shaft-18px">
              <div class="navbar-link-text-90 valign-text-middle">번호</div>
              <div class="navbar-link-text-91 valign-text-middle">제목</div>
              <div class="navbar-link-text-92 valign-text-middle">작성일</div>
              <div class="navbar-link-text-93 valign-text-middle">상태</div>
            </div>
            <div
              v-for="item in paginatedItems"
              :key="item.id"
              class="list"
              @click="openContactDetail"
            >
              <component :is="item.component" :number="item.number" />
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

      <!-- 예약내역 탭 -->
      <div class="frame-78201" v-else-if="selectedTab === '예약내역'">
      <div v-for="(reservation, index) in paginatedReservations" :key="index" class="frame-777">
      <div class="frame-7925">
        <div class="frame-7301">
          <img class="frame-7298" :src="reservation.image" alt="예약 이미지" />
        </div>
        <div class="frame-7923">
          <div class="frame-7922">
            <div class="frame-7308">
              <div class="frame-7917">
                <div class="group-33601">
                    <img
                      v-if="reservation.status === '접수중'"
                           class="noniconsloading-16 group-33600"
                      src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/nonicons-loading-16.svg"
                      alt="접수중 아이콘"
                    />  
                    <img
                      v-else-if="reservation.status === '예약완료'"
                         class="lets-iconscheck-fill"
                    src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/lets-icons-check-fill.svg"
                      alt="예약완료 아이콘"
                    />
                    <img
                      v-else-if="reservation.status === '예약취소'"
                      class="vector"
                      src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-2.svg"
                      alt="예약취소 아이콘"
                    />
                </div>
                <div v-if="reservation.status !== '예약취소'" class="text-16 valign-text-middle">{{ reservation.status }}</div>
              </div>
            </div>
            <div class="frame-7921">
              <div class="frame-7303">
                <div class="text valign-text-middle pretendard-bold-mine-shaft-24px">
                  {{ reservation.store }}
                </div>
              </div>
              <div class="frame-7920">
                <div class="frame-7918 pretendard-semi-bold-black-16px">
                  <div class="text-5 valign-text-middle">예약자</div>
                  <div class="text-19 valign-text-middle">예약 시간</div>
                  <div class="text-20-2 valign-text-middle">인원</div>
                </div>
                <div class="frame-7919 pretendard-regular-normal-log-cabin-16px">
                  <div class="text-5 valign-text-middle">{{ reservation.name }}</div>
                  <div class="text-22-1 valign-text-middle">{{ reservation.time }}</div>
                  <div class="number valign-text-middle">{{ reservation.people }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-7926">
            <article
              v-if="reservation.status !== '예약취소'"
              class="frame-7923-3"
              @click="openRModal"
            >
              <div class="text_label-31 valign-text-middle pretendard-medium-white-18px">
                예약취소
              </div>
            </article>
            <article class="frame-7923-3" @click="openRModal">
              <div class="text_label-31 valign-text-middle pretendard-medium-white-18px">
                매장보기
              </div>
            </article>
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
    <ReservationCancelModal
      v-if="isOpenReservationCancelModal"
      :btnGroup2Props="btnGroup2Props"
      @closeRModal="closeRModal"
    />
  </div>
      <AccountDeletionModal
        v-if="isModalVisible"
        :x6XWXUF="modalData.x6XWXUF"
        :spanText1="modalData.spanText1"
        :spanText2="modalData.spanText2"
        :btnGroup2Props="modalData.btnGroup2Props"
        @close="closeModal"
      />
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import X2FYmMc from "./X2FYmMc";
import View from "./View";
import Frame78842 from "./Frame78842";
import Frame79522 from "./Frame79522";
import Frame77842 from "./Frame77842";
import Frame73033 from "./Frame73033";
import Frame7951 from "./Frame7951";
import Frame8113 from "./Frame8113";
import Frame2 from "./Frame2";
import Frame7895 from "./Frame7895";
import Th from "./Th";
import Th2 from "./Th2";
import Frame7727 from "./Frame7727";
import Frame7730 from "./Frame7730";
import Frame7896 from "./Frame7896";
import XFooter from "./XFooter";
import AccountDeletionModal from "./AccountDeletionModal.vue";
import ReservationCancelModal from "./ReservationCancelModal";
export default {
  name: "MyProfile",
  components: {
    Header,
    X2FYmMc,
    View,
    ReservationCancelModal,
    Frame7727,
    Frame7730,
    Th,
    Th2,
    Frame78842,
    Frame79522,
    Frame77842,
    Frame73033,
    Frame7951,
    Frame8113,
    Frame2,
    Frame7895,
    Frame7896,
    XFooter,
    AccountDeletionModal,
  },
  props: [
    "text1078",
    "text1079",
    "text1082",
    "park123",
    "date",
    "text1083",
    "text1084",
    "text1085",
    "number",
    "text1090",
    "text1095",
    "text1102",
    "frame73011Props",
    "text1103",
    "x2FYmMcProps",
    "viewProps",
    "th1Props",
    "th21Props",
    "th2Props",
    "th22Props",
    "frame7952Props",
    "frame77121Props",
    "frame788421Props",
    "frame788422Props",
    "frame788423Props",
    "frame79522Props",
    "frame77122Props",
    "frame778421Props",
    "frame730331Props",
    "frame778422Props",
    "frame778423Props",
    "frame79511Props",
    "frame730332Props",
    "frame79512Props",
    "frame730333Props",
    "frame8113Props",
    "xFooterProps",
  ],
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5, // Display 6 courses per page
      RitemsPerPage:3,
      arrowLeftImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg", // 왼쪽 화살표 이미지 URL
      arrowRightImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg", // 오른쪽 화살표 이미지 URL
      thItems: [
        { id: 1, number: "1", component: "Th" },
        { id: 2, number: "2", component: "Th2" },
        { id: 3, number: "3", component: "Th" },
        { id: 4, number: "4", component: "Th2" },
        { id: 5, number: "5", component: "Th" },
        { id: 6, number: "6", component: "Th2" },
      ],
        reservations: [
        {
          store: '레저로파크골프',
          name: '김길동',
          time: '07월 20일 14:00',
          people: 2,
          status: '접수중',
          image: 'https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/frame-7298@2x.png',
        },
        {
          store: '레저로파크골프',
          name: '김길동',
          time: '07월 20일 14:00',
          people: 2,
          status: '예약완료',
          image: 'https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/frame-7298@2x.png',
        },
        {
          store: '레저로파크골프',
          name: '김길동',
          time: '07월 20일 14:00',
          people: 2,
          status: '예약취소',
          image: 'https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/frame-7298@2x.png',
        },
                {
          store: '레저로파크골프',
          name: '김길동',
          time: '07월 20일 14:00',
          people: 2,
          status: '예약취소',
          image: 'https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/frame-7298@2x.png',
        },
      ],
      isModalVisible: false,
      tabs: ["내정보 변경", "1:1 문의내역", "예약내역"],
      selectedTab: "내정보 변경",
      modalData: {
        x6XWXUF: "계정 삭제",
        spanText1: "정말로 계정을 삭제하시겠습니까?",
        spanText2: "삭제 후 복구할 수 없습니다.",
        btnGroup2Props: {
          text_Label: "삭제",
          text83: "취소",
        },
      },
      isOpenReservationCancelModal: false,
      btnGroup2Props: {
        text_Label: "닫기",
        text83: "확인",
      },
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
       totalPages() {
      return Math.ceil(this.reservations.length / this.RitemsPerPage);
    },
    paginatedReservations() {
      const start = (this.currentPage - 1) * this.RitemsPerPage;
      return this.reservations.slice(start, start + this.RitemsPerPage);
    },
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
    openAccountDeletionModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    editmyprofile() {
      this.$router.push({ path: "/editprofile" });
    },
    editmysocialprofile() {
      this.$router.push({ path: "/editsocialprofile" });
    },
    toGoEditPassword() {
      this.$router.push({ path: "/editpassword" });
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
    openContactDetail() {
      this.$router.push({ path: "/mycontact-detail" });
    },
    openRModal() {
      this.isOpenReservationCancelModal = true;
    },
    closeRModal() {
      this.isOpenReservationCancelModal = false;
    },
  },
};
</script>

<style>
.myprofile-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1920px;
}
.profile_tab {
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
  color: #666666;
  background-color: #f5f6f6;
}

.tab:hover {
  background-color: #fff;
}

.tab.active {
  width: 468.5px;
  border: 1px solid #ddd;
  margin-bottom: -2px;
  background-color: #fff;
  border-bottom: 2px solid #fff;
  position: relative;
  z-index: 2;
  color: #222222;
  font-family: "Pretendard-Bold";
}

.frame-7692-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 52px;
  position: relative;
  width: 1400px;
}

.frame-7691-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  position: relative;
  width: 100%;
}

.group-764-2 {
  height: 60px;
  position: relative;
  width: 1399.98px;
}

.frame-7727-3 {
  align-items: center;
  display: inline-flex;
  position: relative;
}

.frame-7900 {
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
margin-top:43px;
  justify-content: center;
  padding: 50px 40px;
  position: relative;
  width: 1400px;
}

.frame-7962-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-end;
  position: relative;
  width: 100%;
}

.frame-7961-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}

.group-33593-1 {
  height: 130px;
  position: relative;
  width: 140px;
}

.overlap-group-78 {
  height: 130px;
  position: relative;
}

.ellipse-1-1 {
  background-color: var(--gallery);
  border-radius: 65px;
  height: 130px;
  left: 0;
  position: absolute;
  top: 0;
  width: 130px;
}

.vector-143 {
  height: 49px;
  left: 40px;
  position: absolute;
  top: 40px;
  width: 49px;
}

.group-2-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--gallery);
  border-radius: 20px;
  display: flex;
  height: 40px;
  left: 100px;
  min-width: 40px;
  padding: 13px 12px;
  position: absolute;
  top: 71px;
}

.vector-144 {
  height: 13px;
  width: 15px;
}

.frame-7960-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-795-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-7953-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.frame-7948-6 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-78-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.frame-78-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.frame-788-3 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  gap: 10px;
  height: 60px;
  justify-content: center;
  padding: 28px 116px;
  position: relative;
  width: 264px;
}

.text-10-11 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -3.5px;
  margin-left: -7.5px;
  margin-right: -7.5px;
  margin-top: -5.5px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text-1079 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -3.5px;
  margin-left: -15.5px;
  margin-right: -15.5px;
  margin-top: -5.5px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.frame-7884 {
  align-items: center;
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  gap: 10px;
  height: 60px;
  justify-content: center;
  padding: 28px 116px;
  position: relative;
  width: 264px;
}

.frame-788-4 {
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  gap: 10px;
  height: 60px;
  justify-content: center;
  padding: 28px 116px;
  position: relative;
  width: 264px;
}

.park123-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -3.5px;
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -5.5px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.date-11 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -3.5px;
  margin-left: -32px;
  margin-right: -32px;
  margin-top: -5.5px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text-1083 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -3.5px;
  margin-top: -5.5px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text-1084 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -3.5px;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -5.5px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text-1085 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}

.frame-7951-5 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-end;
  position: relative;
  width: 100%;
}

.frame-7956-1 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-7948-7 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-end;
  position: relative;
  width: 100%;
}

.frame-7883-1 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 1320px;
}

.frame-7787-2 {
  align-items: center;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  gap: 30px;
  padding: 0px 20px 0px 0px;
  position: relative;
  width: 100%;
}

.frame-7-28 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
}

.number-69 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.text-1090 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-795-3 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.frame-7787-1 {
  align-items: center;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  gap: 30px;
  padding: 0px 20px 0px 0px;
  position: relative;
  width: 100%;
}

.text-1095 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-decoration: underline;
  white-space: nowrap;
  width: fit-content;
}

.frame-7897-1 {
  align-items: flex-end;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  justify-content: flex-end;
  position: relative;
}

.text-1102 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text-1103 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  text-decoration: underline;
  white-space: nowrap;
  width: fit-content;
}
</style>
<style scoped>
.list {
  width: 100%;
  height: 70px;
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
  font-weight: bold;
}
/* 예약내역 */

.frame-7929 {
  padding:39px;
  margin-top:43px;
  border:1px solid #ddd;
}

.frame-7928 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.frame-7925 {
  align-items: center;
  align-self: stretch;
  background-color: var(--hint-of-red);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  padding: 30px 40px;
  position: relative;
  width: 100%;
}

.frame-7923 {
  align-items: flex-end;
  display: flex;
  gap: 30px;
  justify-content: flex-end;
  margin-right: -4.5px;
  padding: 30px 0px 30px 30px;
  position: relative;
  width: 1049px;
}

.frame-7922 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 10px;
  justify-content: center;
  position: relative;
}

.frame-7308 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 212px;
}

.frame-7917 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  position: relative;
}

.group-33601,
.lets-iconscheck-fill {
  height: 24px;
  position: relative;
  /* width: 24px; */
}

.group-33600 {
  align-items: center;
  background-color: var(--slimy-green);
  border-radius: 9px;
  display: flex;
  height: 18px;
  left: -2px;
  min-width: 18px;
  padding: 0 4px;
  position: relative;
  top: 5px;
}

.text-16 {
  color: var(--slimy-green-2);
  font-family: var(--font-family-pretendard-bold);
  font-size: var(--font-size-xxl);
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7921 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  position: relative;
  width: 100%;
}

.frame-7303 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.text {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.frame-7926 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.frame-792 {
  align-items: center;
  align-self: stretch;
  background-color: var(--hint-of-red);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  padding: 30px 40px;
  position: relative;
  width: 100%;
}

.frame-7923-1 {
  align-items: flex-end;
  display: flex;
  gap: 30px;
  justify-content: flex-end;
  margin-right: -2px;
  padding: 30px 0px 30px 30px;
  position: relative;
  width: 1044px;
}

.text-23 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7923-2 {
  align-items: flex-end;
  display: flex;
  gap: 30px;
  justify-content: flex-end;
  padding: 30px 0px 30px 30px;
  position: relative;
  width: 1034px;
}

.group-33600-1 {
  background-color: var(--monza);
  border-radius: 9px;
  height: 18px;
  position: relative;
  width: 18px;
}

.vector {
  width:17px;
  height:17px;
  border-radius:20px;
  padding:2px;
  position: absolute;
  background-color:#D30f1A;
  top: 5px;
}

.rectangle-509282 {
  height: 24px;
  margin-left: -11px;
  position: relative;
  width: 24px;
}

.text-30 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: -11px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7952 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  justify-content: center;
  position: relative;
  width: 236px;
}

.text-929 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7951-1 {
  align-items: center;
  display: flex;
  gap: 4px;
  justify-content: center;
  position: relative;
  width: 133px;
}

.ellipse-47 {
  background-color: var(--malachite);
  border-radius: 8px;
  height: 16px;
  position: relative;
  width: 16px;
}

.text-930 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.frame-7952.frame-7952-1 {
  flex: unset;
}

.frame-7920 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
}

.frame-7918 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 71px;
}

.text-5 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.text-19,
.text-20-2,
.text-22-1,
.number,
.text-26,
.text-27,
.text-29,
.number-1,
.text-33,
.text-34,
.text-36,
.number-2 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}

.frame-7919 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 113px;
}

.frame-7923-3 {
  align-items: center;
  background-color:#D30f1A;
  border-radius: 8px;
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 18px 66px;
  position: relative;
  width: 150px;
}

.text_label-31 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: -22.5px;
  margin-right: -22.5px;
  margin-top: -0.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
.frame-7301 {
  align-items: center;
  border-radius: 20px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 40px;
  margin-left: -4.5px;
  position: relative;
}

.frame-7298 {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 20px;
  height: 200px;
  position: relative;
  width: 200px;
}

.frame-78201{
  padding: 40px;
    border: 1px solid #ddd;
    margin-top: 40px;
}
</style>

