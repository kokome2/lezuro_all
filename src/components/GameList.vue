<template>
  <div class="container-center-horizontal">
    <div class="tournaments-2 screen">
      <Header />
      <rj-zs-wi
        :frame72911Props="rJZsWIProps.frame72911Props"
        :frame72912Props="rJZsWIProps.frame72912Props"
      />
      <view :text89="viewProps.text89" :className="viewProps.className" />
      <frame72982 />
      <div class="content">
        <!-- 게임 탭 -->
        <div class="game_tab">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            @click="selectTab(tab)"
            :class="['tab', { active: selectedTab === tab }]"
          >
            {{ tab }}
          </div>
        </div>

        <!-- 전체 탭 -->
        <div class="card_box" v-if="selectedTab === '전체'" @click="goDetailgame">
          <div class="table_box">
            <div
              v-for="card in paginatedCardsEntire"
              :key="card.id"
              class="card"
              @click="goToCardPage(card.id)"
            >
              <div :class="['status-box', card.type]">
                {{
                  card.type === "game"
                    ? "모집중"
                    : card.type === "competition"
                    ? "진행중"
                    : "종료"
                }}
              </div>
              <img :src="card.image" alt="대회 이미지" class="card-image" />
              <div class="card-info">
                <h2>{{ card.name }}</h2>
                <div>
                  <span>번호</span>
                  <p>{{ card.id }}</p>
                </div>
                <div>
                  <span>기간</span>
                  <p>{{ card.period }}</p>
                </div>
                <div>
                  <span>진행</span>
                  <div>
                    <p
                      v-for="(info, index) in getShopInfo(card.shop)"
                      :key="index"
                    >
                      {{ info }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 모집중 탭 -->
        <div class="card_box" v-else-if="selectedTab === '모집중'" @click="goDetailgame">
          <div class="table_box">
            <div v-for="card in paginatedCardsGame" :key="card.id" class="card">
              <div class="status-box game">모집중</div>
              <img :src="card.image" alt="대회 이미지" class="card-image" />
              <div class="card-info">
                <h2>{{ card.name }}</h2>
                <div>
                  <span>번호</span>
                  <p>{{ card.id }}</p>
                </div>
                <div>
                  <span>기간</span>
                  <p>{{ card.period }}</p>
                </div>
                 <div>
                  <span>진행</span>
                  <div>
                    <p
                      v-for="(info, index) in getShopInfo(card.shop)"
                      :key="index"
                    >
                      {{ info }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 진행중 탭 -->
        <div class="card_box" v-else-if="selectedTab === '진행중'" @click="goDetailgame">
          <div class="table_box">
            <div
              v-for="card in paginatedCardsCompetition"
              :key="card.id"
              class="card"
              @click="goToCardPage(card.id)"
            >
              <div class="status-box competition">진행중</div>
              <img :src="card.image" alt="대회 이미지" class="card-image" />
              <div class="card-info">
                <h2>{{ card.name }}</h2>
                <div>
                  <span>번호</span>
                  <p>{{ card.id }}</p>
                </div>
                <div>
                  <span>기간</span>
                  <p>{{ card.period }}</p>
                </div>
                 <div>
                  <span>진행</span>
                  <div>
                    <p
                      v-for="(info, index) in getShopInfo(card.shop)"
                      :key="index"
                    >
                      {{ info }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 종료 탭 -->
        <div class="card_box" v-else-if="selectedTab === '종료'" @click="goDetailgame"> 
          <div class="table_box">
            <div
              v-for="card in paginatedCardsEnded"
              :key="card.id"
              class="card"
              @click="goToCardPage(card.id)"
            >
              <div class="status-box ended">종료</div>
              <img :src="card.image" alt="대회 이미지" class="card-image" />
              <div class="card-info">
                <h2>{{ card.name }}</h2>
                <div>
                  <span>번호</span>
                  <p>{{ card.id }}</p>
                </div>
                <div>
                  <span>기간</span>
                  <p>{{ card.period }}</p>
                </div>
                 <div>
                  <span>진행</span>
                  <div>
                    <p
                      v-for="(info, index) in getShopInfo(card.shop)"
                      :key="index"
                    >
                      {{ info }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 페이징 버튼 탭 -->
        <!-- 전체 페이징 버튼 탭 -->
        <div
          class="paging"
          v-if="totalPagesEntire > 1"
          v-show="selectedTab === '전체'"
        >
          <button
            @click="prevPage('entire')"
            :disabled="currentPageEntire === 1"
            class="paging-button"
          >
            <img
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg"
              alt="이전 페이지"
            />
          </button>
          <div class="paging-numbers">
            <div
              v-for="page in totalPagesEntire"
              :key="page"
              @click="goToPage(page, 'entire')"
              :class="['paging-number', { active: currentPageEntire === page }]"
            >
              {{ page }}
            </div>
          </div>
          <button
            @click="nextPage('entire')"
            :disabled="currentPageEntire === totalPagesEntire"
            class="paging-button"
          >
            <img
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg"
              alt="다음 페이지"
              class="flipped"
            />
          </button>
        </div>
        <!-- 모집중 페이징 버튼 탭 -->
        <div
          class="paging"
          v-if="totalPagesGame > 1"
          v-show="selectedTab === '모집중'"
        >
          <button
            @click="prevPage('game')"
            :disabled="currentPageGame === 1"
            class="paging-button"
          >
            <img
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg"
              alt="이전 페이지"
            />
          </button>
          <div class="paging-numbers">
            <div
              v-for="page in totalPagesGame"
              :key="page"
              @click="goToPage(page, 'game')"
              :class="['paging-number', { active: currentPageGame === page }]"
            >
              {{ page }}
            </div>
          </div>
          <button
            @click="nextPage('game')"
            :disabled="currentPageGame === totalPagesGame"
            class="paging-button"
          >
            <img
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg"
              alt="다음 페이지"
              class="flipped"
            />
          </button>
        </div>
        <!-- 진행중 페이징 버튼 탭 -->
        <div
          class="paging"
          v-if="totalPagesCompetition > 1"
          v-show="selectedTab === '진행중'"
        >
          <button
            @click="prevPage('competition')"
            :disabled="currentPageCompetition === 1"
            class="paging-button"
          >
            <img
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg"
              alt="이전 페이지"
            />
          </button>
          <div class="paging-numbers">
            <div
              v-for="page in totalPagesCompetition"
              :key="page"
              @click="goToPage(page, 'competition')"
              :class="[
                'paging-number',
                { active: currentPageCompetition === page },
              ]"
            >
              {{ page }}
            </div>
          </div>
          <button
            @click="nextPage('competition')"
            :disabled="currentPageCompetition === totalPagesCompetition"
            class="paging-button"
          >
            <img
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg"
              alt="다음 페이지"
              class="flipped"
            />
          </button>
        </div>
        <!-- 종료 페이징 버튼 탭 -->
        <div
          class="paging"
          v-if="totalPagesEnded > 1"
          v-show="selectedTab === '종료'"
        >
          <button
            @click="prevPage('ended')"
            :disabled="currentPageEnded === 1"
            class="paging-button"
          >
            <img
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg"
              alt="이전 페이지"
            />
          </button>
          <div class="paging-numbers">
            <div
              v-for="page in totalPagesEnded"
              :key="page"
              @click="goToPage(page, 'ended')"
              :class="['paging-number', { active: currentPageEnded === page }]"
            >
              {{ page }}
            </div>
          </div>
          <button
            @click="nextPage('ended')"
            :disabled="currentPageEnded === totalPagesEnded"
            class="paging-button"
          >
            <img
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg"
              alt="다음 페이지"
              class="flipped"
            />
          </button>
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
      <!-- <img
        class="material-symbolsclose-7"
        :src="materialSymbolsClose"
        alt="material-symbols:close"
      /> -->
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import RjZsWi from "./RjZsWi";
import View from "./View";
import Frame72982 from "./Frame72982";
import XFooter from "./XFooter";
export default {
  name: "GameList",

  components: {
    Header,
    RjZsWi,
    View,
    Frame72982,
    XFooter,
  },
  data() {
    return {
      tabs: ["전체", "모집중", "진행중", "종료"],
      selectedTab: "전체",
      currentPageEntire: 1,
      cardsPerPage: 6, // Number of cards per page
      currentPageGame: 1,
      currentPageCompetition: 1,
      currentPageEnded: 1,
      // isModalVisible: false,
      text2098: "Game Title",
      text2099: "Details",
      date: "2024-09-11",
      text2102: "Some data",
      a: "A value",
      text2104: "Another value",
      text2106: "Yet another value",
      text2107: "Final value",
      cards: [
        {
          id: 1,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          name: "대회 이름",
          period: "2023-01-01 ~ 2023-01-10",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
          ],
          type: "game",
        },
        {
          id: 2,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          name: "대회 이름",
          period: "2023-02-01 ~ 2023-02-10",
          shop: ["나이스 파크골프", "AK 파크골프", "레저로 파크골프"],
          type: "game",
        },
        {
          id: 3,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          name: "대회 이름",
          period: "2023-03-01 ~ 2023-03-10",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
            "그냥 파크골프",
          ],
          type: "competition",
        },
        {
          id: 4,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          name: "대회 이름",
          period: "2023-04-01 ~ 2023-04-10",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
          ],
          type: "ended",
        },
        {
          id: 5,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          name: "대회 이름",
          period: "2023-05-01 ~ 2023-05-10",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
          ],
          type: "ended",
        },
        {
          id: 6,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          period: "2023-06-01 ~ 2023-06-10",
          name: "대회 이름",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
          ],
          type: "ended",
        },
        {
          id: 7,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          period: "2023-07-01 ~ 2023-07-10",
          name: "대회 이름",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
          ],
          type: "game",
        },
        {
          id: 8,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          period: "2023-08-01 ~ 2023-08-10",
          name: "대회 이름",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
          ],
          type: "competition",
        },
        {
          id: 9,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          name: "대회 이름",
          period: "2023-09-01 ~ 2023-09-10",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
          ],
          type: "ended",
        },
        {
          id: 10,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          name: "대회 이름",
          period: "2023-10-01 ~ 2023-10-10",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
          ],
          type: "game",
        },
        {
          id: 11,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          name: "대회 이름",
          period: "2023-11-01 ~ 2023-11-10",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
          ],
          type: "competition",
        },
        {
          id: 12,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          name: "대회 이름",
          period: "2023-12-01 ~ 2023-12-10",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
          ],
          type: "ended",
        },
        {
          id: 13,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",

          name: "대회 이름",
          period: "2023-01-01 ~ 2023-01-10",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
          ],
          type: "game",
        },
        {
          id: 14,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          name: "대회 이름",
          period: "2023-02-01 ~ 2023-02-10",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
          ],
          type: "competition",
        },
        {
          id: 15,
          image:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png",
          name: "대회 이름",
          period: "2023-03-01 ~ 2023-03-10",
          shop: [
            "나이스 파크골프",
            "AK 파크골프",
            "레저로 파크골프",
            "해양 파크골프",
          ],
          type: "ended",
        },
      ],
    };
  },
  props: [
    "text2574",
    "text2577",
    "group763",
    "materialSymbolsClose",
    "rJZsWIProps",
    "viewProps",
    "frame767221Props",
    "frame767222Props",
    "frame767223Props",
    "frame767224Props",
    "frame76851Props",
    "frame76881Props",
    "frame80822Props",
    "frame76852Props",
    "frame76882Props",
    "frame76853Props",
    "frame763Props",
    "xFooterProps",
  ],

  computed: {
    filteredCardsEntire() {
      return this.cards.filter(
        (card) =>
          card.type === "game" ||
          card.type === "competition" ||
          card.type === "ended"
      );
    },
    filteredCardsGame() {
      return this.cards.filter((card) => card.type === "game");
    },
    filteredCardsCompetition() {
      return this.cards.filter((card) => card.type === "competition");
    },
    filteredCardsEnded() {
      return this.cards.filter((card) => card.type === "ended");
    },
    totalPagesEntire() {
      return Math.ceil(this.filteredCardsEntire.length / this.cardsPerPage);
    },
    totalPagesGame() {
      return Math.ceil(this.filteredCardsGame.length / this.cardsPerPage);
    },
    totalPagesCompetition() {
      return Math.ceil(
        this.filteredCardsCompetition.length / this.cardsPerPage
      );
    },
    totalPagesEnded() {
      return Math.ceil(this.filteredCardsEnded.length / this.cardsPerPage);
    },
    paginatedCardsEntire() {
      const start = (this.currentPageEntire - 1) * this.cardsPerPage;
      const end = start + this.cardsPerPage;
      return this.filteredCardsEntire.slice(start, end);
    },
    paginatedCardsGame() {
      const start = (this.currentPageGame - 1) * this.cardsPerPage;
      const end = start + this.cardsPerPage;
      return this.filteredCardsGame.slice(start, end);
    },
    paginatedCardsCompetition() {
      const start = (this.currentPageCompetition - 1) * this.cardsPerPage;
      const end = start + this.cardsPerPage;
      return this.filteredCardsCompetition.slice(start, end);
    },
    paginatedCardsEnded() {
      const start = (this.currentPageEnded - 1) * this.cardsPerPage;
      const end = start + this.cardsPerPage;
      return this.filteredCardsEnded.slice(start, end);
    },
  },
  methods: {
    prevPage(type) {
      if (type === "entire" && this.currentPageEntire > 1) {
        this.currentPageEntire--;
      } else if (type === "game" && this.currentPageGame > 1) {
        this.currentPageGame--;
      } else if (type === "competition" && this.currentPageCompetition > 1) {
        this.currentPageCompetition--;
      } else if (type === "ended" && this.currentPageEnded > 1) {
        this.currentPageEnded--;
      }
    },
    nextPage(type) {
      if (type === "entire" && this.currentPageEntire < this.totalPagesEntire) {
        this.currentPageEntire++;
      } else if (
        type === "game" &&
        this.currentPageGame < this.totalPagesGame
      ) {
        this.currentPageGame++;
      } else if (
        type === "competition" &&
        this.currentPageCompetition < this.totalPagesCompetition
      ) {
        this.currentPageCompetition++;
      } else if (
        type === "ended" &&
        this.currentPageEnded < this.totalPagesEnded
      ) {
        this.currentPageEnded++;
      }
    },
    goToPage(page, type) {
      if (type === "entire") {
        this.currentPageEntire = page;
      } else if (type === "game") {
        this.currentPageGame = page;
      } else if (type === "competition") {
        this.currentPageCompetition = page;
      } else if (type === "ended") {
        this.currentPageEnded = page;
      }
    },
    selectTab(tab) {
      this.selectedTab = tab;
      this.currentPageEntire = 1;
      this.currentPageGame = 1;
      this.currentPageCompetition = 1;
      this.currentPageEnded = 1;
    },
    getShopInfo(shop) {
      if (shop.length <= 3) {
        return shop;
      } else {
        return [...shop.slice(0, 3), `외 ${shop.length - 3}개`];
      }
    },
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    goDetailgame() {
      this.$router.push({ path: "/gameinfo-detail" });
    },
  },
};
</script>

<style>
.entire {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-bottom: none;
}
.game-grid {
  width: 100%;
  padding: 40px;
  border: 1px solid #e6e6e6;
  border-top: 0px;
}

.group-763 {
  background-image: url(https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 250px;
  position: relative;
  width: 413px;
}
.row {
  display: flex !important;
  justify-content: space-between !important;
  margin-bottom: 20px !important;
}

.column {
  flex: 1 !important;
  padding: 10px !important;
  max-width: calc(33.33% - 40px) !important; /* 3개가 한 줄에 들어가도록 설정 */
  display: flex !important;
  flex-direction: column !important;
}

.frame-7683-2 {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  padding: 30px;
  width: 413px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 100%; */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.text-25-5 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  line-height: 1.4;
  color: #333;
}

.frame-7689-1 {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.frame-76-10 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-2540,
.number-213,
.text-2541,
.text-2542,
.text-2543 {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.ak-2-1 {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
  line-height: 1.6;
}

.pagination-controls {
  display: flex;
  align-items: center;
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

.tournaments-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blackwhitewhite);
  width: 100%;
}

.frame-container-8 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  /*width: 100%; */
}

.frame-7691-6 {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.frame-container-9 {
  display: flex;
}

.frame-7671-22 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e6e6e6;
  padding: 20px 159px;
  width: 350px;
  font-size: 18px;
  font-weight: bold;
}

.text-257 {
  white-space: nowrap;
}

.frame-7674-23 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-bottom: 1px solid #e6e6e6;
  padding: 23px 159px;
  width: 350px;
}

.frame-7726 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 50px;
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
}

.frame-772 {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}

.material-symbolsclose-7 {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
}
</style>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game_tab {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.card_box {
  border: 1px solid #dddddd;
}

.tab {
  line-height: 100%;
  width: 350px;
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
  width: 348px;
  border: 1px solid #ddd;
  margin-bottom: -2px;
  background-color: #fff;
  border-bottom: 2px solid #fff;
  position: relative;
  z-index: 2;
  color: #222222;
  font-family: "Pretendard-Bold";
}

.table_box {
  display: flex;
  flex-wrap: wrap;
  width: 1320px;
  margin: 39px;
  gap: 40px;
}

.card {
  position: relative;
  width: 411px;
  height: 490px;
  border: 1px solid #ccc;
  border-radius: 20px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 250px;
  display: block; /* Block으로 설정하여 상하 마진 제거 */
  object-fit: cover;
}

.card-info {
  padding: 33px 30px;
}

.card-info h2 {
  margin-bottom: 30px;
  font-size: 24px;
  font-family: "Pretendard-Bold";
  line-height: 80%;
}

.card-info div {
  display: flex;
  line-height: 70%;
  margin-bottom: 15px;
  color: #666;
}
.card-info p {
  margin: 5px 0;
}
.card-info div:nth-child(4) {
  margin-bottom: 0px;
}

.card-info div span {
  width: 48px;
  line-height: 80%;
  font-family: "Pretendard-Light";
  font-size: 16px;
}

.card-info div p {
  font-size: 16px;
  color: #222;
  margin: 0;
  padding: 0;
}

.card-info div:nth-child(4) div {
  display: flex;
  margin-bottom: 0px;
  line-height: 120%;
  flex-direction: column; /* 세로로 정렬 */
  align-items: flex-start; /* 왼쪽 정렬, 필요에 따라 조정 */
}
.paging {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.paging-button {
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.paging-button img {
  width: 20px;
  height: 20px;
}

.paging-numbers {
  display: flex;
}

.paging-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  cursor: pointer;
  background-color: #eeeeee;
}

.paging-number.active {
  background-color: #d30f1a;
  color: white;
}

.status-box {
  position: absolute;
  top: 25px;
  left: 25px;
  width: 65px;
  height: 30px;
  display: flex; /* Flexbox 컨테이너로 설정 */
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  text-align: center;
  color: white;
  font-family: "Pretendard-SemiBold";
  border-radius: 18.5px;
  font-size: 12px;
}

.status-box.game {
  background-color: #d30f1a; /* Red for game (모집중) */
}

.status-box.competition {
  background-color: #184199; /* Blue for competition (진행중) */
}

.status-box.ended {
  background-color: #333333; /* Black for ended (종료) */
}
</style>
