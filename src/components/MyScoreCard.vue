<template>
  <div class="container-center-horizontal">
    <div class="scorecard-2 screen">
      <Header />
      <rj-zs-wi
        :frame72911Props="rJZsWIProps.frame72911Props"
        :frame72912Props="rJZsWIProps.frame72912Props"
      />
      <view :text89="viewProps.text89" :className="viewProps.className" />
      <div class="frame-7829">
        <div class="frame-7643">
          <div class="frame-7638-1">
            <div
              class="text-2392 valign-text-middle pretendard-bold-white-18px"
            >
              {{ text2392 }}
            </div>
            <frame7637 />
          </div>
          <div class="frame-7642">
            <div class="frame-764">
              <div
                class="text-2394 valign-text-middle pretendard-medium-log-cabin-20px"
              >
                {{ text2394 }}
              </div>
              <div class="group-759-1">
                <div class="flex-col-39">
                  <div class="frame-7639 pretendard-medium-log-cabin-16px">
                    <div class="text-2-20 valign-text-middle">
                      {{ text2395 }}
                    </div>
                    <div class="text-2-20 valign-text-middle">
                      {{ text2396 }}
                    </div>
                    <div class="text-2-21 valign-text-middle">
                      {{ text2397 }}
                    </div>
                  </div>
                  <div
                    class="overlap-group-105 pretendard-regular-normal-black-14px"
                  >
                    <div
                      class="text-2398 valign-text-middle"
                      v-html="text2398"
                    ></div>
                    <div
                      class="x50-1008m-2109m-1 valign-text-middle"
                      v-html="x501008M2109M1"
                    ></div>
                    <div
                      class="x64xk-1523m-2440m-1 valign-text-middle"
                      v-html="x64Xk1523M2440M1"
                    ></div>
                    <div class="rectangle-509257"></div>
                    <div class="rectangle-509258"></div>
                  </div>
                  <div class="rectangle-509259"></div>
                </div>
              </div>
            </div>
            <div class="frame-764">
              <div class="frame-7644">
                <div
                  class="text-2399 valign-text-middle pretendard-medium-log-cabin-20px"
                >
                  {{ text2399 }}
                </div>
                <frame7288 />
              </div>
              <div class="group-759-2">
                <div class="flex-col-39">
                  <div class="frame-7639 pretendard-medium-log-cabin-16px">
                    <div class="text-2-20 valign-text-middle">
                      {{ text2401 }}
                    </div>
                    <div class="text-2-20 valign-text-middle">
                      {{ text2402 }}
                    </div>
                    <div class="text-2-21 valign-text-middle">
                      {{ text2403 }}
                    </div>
                  </div>
                  <div
                    class="overlap-group-105 pretendard-regular-normal-black-14px"
                  >
                    <div
                      class="text-2404 valign-text-middle"
                      v-html="text2404"
                    ></div>
                    <div
                      class="x50-1008m-2109m-1 valign-text-middle"
                      v-html="x501008M2109M2"
                    ></div>
                    <div
                      class="x64xk-1523m-2440m-1 valign-text-middle"
                      v-html="x64Xk1523M2440M2"
                    ></div>
                    <div class="rectangle-509257"></div>
                    <div class="rectangle-509258"></div>
                  </div>
                  <div class="rectangle-509259"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div class="game">
          <div class="game_tab">
            <div
              v-for="(tab, index) in tabs"
              :key="index"
              @click="selectTab(tab)"
              :class="['tab', { active: selectedTab === tab }]"
            >
              {{ tab }}
              <!-- 데이터 개수 표시 -->
              <span v-if="tab === '전체 경기'">{{ totalEntireGameData }}</span>
              <span v-if="tab === '일반 경기'">{{
                totalGameCompetitionData
              }}</span>
              <span v-if="tab === '대회 경기'">{{
                totalCompetitionGameData
              }}</span>
            </div>
          </div>
          <div class="game_table">
            <!-- 전체 경기 탭 -->
            <div v-if="selectedTab === '전체 경기'" class="table_box">
              <table class="table">
                <thead>
                  <tr>
                    <th v-for="(header, index) in CTableHeaders" :key="index">
                      {{ header }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, rowIndex) in paginatedEntireGameData"
                    :key="rowIndex"
                  >
                    <td v-for="(cell, cellIndex) in row" :key="cellIndex">
                      <span v-if="cell === '상세보기'" @click="openModal(row)">
                        {{ cell }}
                      </span>
                      <span v-else>{{ cell }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 일반 경기 탭 -->
            <div v-if="selectedTab === '일반 경기'" class="table_box">
              <table class="table">
                <thead>
                  <tr>
                    <th v-for="(header, index) in CTableHeaders" :key="index">
                      {{ header }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, rowIndex) in paginatedGameCompetitionData"
                    :key="rowIndex"
                  >
                    <td v-for="(cell, cellIndex) in row" :key="cellIndex">
                      <span v-if="cell === '상세보기'" @click="openModal(row)">
                        {{ cell }}
                      </span>
                      <span v-else>{{ cell }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 대회 경기 탭 -->
            <div v-if="selectedTab === '대회 경기'" class="table_box">
              <table class="table">
                <thead>
                  <tr>
                    <th v-for="(header, index) in CTableHeaders" :key="index">
                      {{ header }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, rowIndex) in paginatedCompetitionGameData"
                    :key="rowIndex"
                  >
                    <td v-for="(cell, cellIndex) in row" :key="cellIndex">
                      <span v-if="cell === '상세보기'" @click="openModal(row)">
                        {{ cell }}
                      </span>
                      <span v-else>{{ cell }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- 페이징 버튼들 -->
          <div class="paging" v-show="selectedTab === '전체 경기'">
            <button
              @click="prevPage('entire')"
              :disabled="currentPageEntire === 1"
              class="paging-button"
            >
              <img src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg" alt="이전 페이지" />
            </button>
            <div class="paging-numbers">
              <div
                v-for="page in totalPagesEntire"
                :key="page"
                @click="goToPage(page, 'entire')"
                :class="[
                  'paging-number',
                  { active: currentPageEntire === page },
                ]"
              >
                {{ page }}
              </div>
            </div>
            <button
              @click="nextPage('entire')"
              :disabled="currentPageEntire === totalPagesEntire"
              class="paging-button"
            >
              <img src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg" alt="다음 페이지"   class="flipped"/>
            </button>
          </div>
          <div class="paging" v-show="selectedTab === '일반 경기'">
            <button
              @click="prevPage('game')"
              :disabled="currentPageGame === 1"
              class="paging-button"
            >
              <img src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg" alt="이전 페이지" />
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
              <img src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg" alt="다음 페이지"   class="flipped"/>
            </button>
          </div>
          <div class="paging" v-show="selectedTab === '대회 경기'">
            <button
              @click="prevPage('competition')"
              :disabled="currentPageCompetition === 1"
              class="paging-button"
            >
              <img src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg" alt="이전 페이지" />
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
              <img src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg" alt="다음 페이지" 
              class="flipped"/>
            </button>
          </div>
        </div>
      </div>

      <!-- GameScoreCard 모달이 보일 때만 렌더링 -->
      <GameScoreCard
        v-if="isModalVisible"
        :text2098="text2098"
        :text2099="text2099"
        :date="date"
        :text2102="text2102"
        :a="a"
        :text2104="text2104"
        :text2106="text2106"
        :text2107="text2107"
        :frame732221Props="frame732221Props"
        :frame732222Props="frame732222Props"
        :frame732223Props="frame732223Props"
        :frame732224Props="frame732224Props"
        :frame7357Props="frame7357Props"
        :frame76511Props="frame76511Props"
        :frame76512Props="frame76512Props"
        @closeModal="closeModal"
      />

      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import RjZsWi from "./RjZsWi";
import View from "./View";
import Frame7637 from "./Frame7637";
import Frame7288 from "./Frame7288";
import Frame76715 from "./Frame76715";
import Frame7673 from "./Frame7673";
import Th7 from "./Th7";
import Group673 from "./Group673";
import XFooter from "./XFooter";
import GameScoreCard from "./GameScoreCard";

export default {
  name: "MyScoreCard",
  data() {
    return {
         CTableHeaders: ["일시", "장소", "코스", "홀", "타수", "스코어 카드"],
      gameCompetitionData: [
        ["2024-06-25", "서울 레저로 파크", "A코스", "16홀", "0타", "상세보기"],
        ["2024-06-25", "서울 레저로 파크", "A코스", "18홀", "0타", "상세보기"],
        ["2024-06-25", "서울 레저로 파크", "A코스", "9홀", "0타", "상세보기"],
        ["2024-06-25", "서울 레저로 파크", "A코스", "18홀", "0타", "상세보기"],
        ["2024-06-25", "서울 레저로 파크", "A코스", "18홀", "0타", "상세보기"],
      ],
      competitionGameData: [
        ["2024-06-26", "서울 레저로 파크", "A코스", "18홀", "0타", "상세보기"],
        ["2024-06-26", "서울 레저로 파크", "A코스", "18홀", "0타", "상세보기"],
        ["2024-06-26", "서울 레저로 파크", "A코스", "18홀", "0타", "상세보기"],
        ["2024-06-26", "서울 레저로 파크", "A코스", "18홀", "0타", "상세보기"],
        ["2024-06-26", "서울 레저로 파크", "A코스", "18홀", "0타", "상세보기"],
      ], // 10개의 항목 정의
      currentPage: 1,
        selectedTab: "전체 경기",
      itemsPerPage: 5, // 한 페이지당 보여줄 데이터 수
         currentPageEntire: 1,
      currentPageGame: 1,
      currentPageCompetition: 1,
         itemsPerPage: 5,
      tabs: ["전체 경기", "일반 경기", "대회 경기"],
      isModalVisible: false,
      text2098: "Game Title",
      text2099: "Details",
      date: "2024-09-11",
      text2102: "Some data",
      a: "A value",
      text2104: "Another value",
      text2106: "Yet another value",
      text2107: "Final value",
      arrowLeftImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg", // 왼쪽 화살표 이미지 URL
      arrowRightImage:
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/iconamoon-arrow-up-2-thin.svg", // 오른쪽 화살표 이미지 URL
      frame732221Props: { text2100: "Frame 73222 Data 1" },
      frame732222Props: { text2100: "Frame 73222 Data 2" },
      frame732223Props: { text2100: "Frame 73222 Data 3" },
      frame732224Props: { text2100: "Frame 73222 Data 4" },
      frame7357Props: { someProp: "Data for frame 7357" },
      frame76511Props: {
        a: "Data for frame 76511",
        frame7357Props: { someProp: "Data for frame 7357 inside 76511" },
      },
      frame76512Props: {
        a: "Data for frame 76512",
        frame7357Props: { someProp: "Data for frame 7357 inside 76512" },
      },
    };
  },
  components: {
    GameScoreCard,
    Header,
    RjZsWi,
    View,
    Frame7637,
    Frame7288,
    Frame76715,
    Frame7673,
    Th7,
    Group673,
    XFooter,
  },
  props: [
    "text2392",
    "text2394",
    "text2395",
    "text2396",
    "text2397",
    "text2398",
    "x501008M2109M1",
    "x64Xk1523M2440M1",
    "text2399",
    "text2401",
    "text2402",
    "text2403",
    "text2404",
    "x501008M2109M2",
    "x64Xk1523M2440M2",
    "rJZsWIProps",
    "viewProps",
    "frame76715Props",
    "frame76731Props",
    "frame76732Props",
    "xFooterProps",
  ],
  computed: {
    totalPages() {
      return Math.ceil(this.th7Items.length / this.itemsPerPage);
    },
    paginatedEntireGameData() {
      const start = (this.currentPageEntire - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return [...this.gameCompetitionData, ...this.competitionGameData].slice(
        start,
        end
      );
    },
    totalPagesEntire() {
      return Math.ceil(
        (this.gameCompetitionData.length + this.competitionGameData.length) /
          this.itemsPerPage
      );
    },
    paginatedGameCompetitionData() {
      const start = (this.currentPageGame - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.gameCompetitionData.slice(start, end);
    },
    totalPagesGame() {
      return Math.ceil(this.gameCompetitionData.length / this.itemsPerPage);
    },
    paginatedCompetitionGameData() {
      const start = (this.currentPageCompetition - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.competitionGameData.slice(start, end);
    },
    totalPagesCompetition() {
      return Math.ceil(this.competitionGameData.length / this.itemsPerPage);
    },
    totalEntireGameData() {
      return this.gameCompetitionData.length + this.competitionGameData.length;
    },
    totalGameCompetitionData() {
      return this.gameCompetitionData.length;
    },
    totalCompetitionGameData() {
      return this.competitionGameData.length;
    },
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
   prevPage(type) {
      if (type === "entire" && this.currentPageEntire > 1) {
        this.currentPageEntire--;
      } else if (type === "game" && this.currentPageGame > 1) {
        this.currentPageGame--;
      } else if (type === "competition" && this.currentPageCompetition > 1) {
        this.currentPageCompetition--;
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
      }
    },
    goToPage(page, type) {
      if (type === "entire") {
        this.currentPageEntire = page;
      } else if (type === "game") {
        this.currentPageGame = page;
      } else if (type === "competition") {
        this.currentPageCompetition = page;
      }
    },
    selectTab(tab) {
      this.selectedTab = tab;
      this.currentPageEntire = 1;
      this.currentPageGame = 1;
      this.currentPageCompetition = 1;
    },
  },
};
</script>

<style>
.score-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ddd;
  border-top: none;
  padding: 40px;
}
.table-header,
.table-row {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.table-cell {
  flex: 1;
  text-align: center;
  padding: 10px;
}

.table-header {
  background-color: #f5f5f5;
  font-weight: bold;
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
.scorecard-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1920px;
}

.frame-7829 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-top: 51px;
  position: relative;
  width: 1400px;
}

.frame-7643 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}
.flipped {
  transform: scaleX(-1); /* 가로로 반전 */
}
.frame-7638-1 {
  align-items: center;
  align-self: stretch;
  background-color: var(--greygrey-900);
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0px 35px;
  position: relative;
  width: 100%;
}

.text-2392 {
  letter-spacing: -0.9px;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7642 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 40px;
  position: relative;
  width: 100%;
}

.frame-764 {
  align-items: flex-start;
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 330px;
  padding: 40px;
  position: relative;
  width: 680px;
}

.text-2394 {
  align-self: stretch;
  letter-spacing: -1px;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.group-759-1 {
  height: 201px;
  margin-right: -6px;
  position: relative;
  width: 606px;
}

.flex-col-39 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 201px;
  width: 600px;
}

.frame-7639 {
  align-items: center;
  background-color: var(--cultured-pearl);
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0px 60px;
  position: relative;
  width: 600px;
}

.text-2-20 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.text-2-21 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.overlap-group-105 {
  height: 110px;
  margin-top: 21px;
  position: relative;
  width: 600px;
}

.text-2398 {
  height: 110px;
  left: 39px;
  letter-spacing: 0;
  line-height: 50px;
  position: absolute;
  text-align: center;
  top: 0;
}

.x50-1008m-2109m-1 {
  height: 110px;
  left: 261px;
  letter-spacing: 0;
  line-height: 50px;
  position: absolute;
  text-align: center;
  top: 0;
}

.x64xk-1523m-2440m-1 {
  height: 110px;
  left: 481px;
  letter-spacing: 0;
  line-height: 50px;
  position: absolute;
  text-align: center;
  top: 0;
}

.rectangle-509257 {
  background-color: var(--alto-2);
  height: 1px;
  left: 0;
  position: absolute;
  top: 29px;
  width: 600px;
}

.rectangle-509258 {
  background-color: var(--alto-2);
  height: 1px;
  left: 0;
  position: absolute;
  top: 79px;
  width: 600px;
}

.rectangle-509259 {
  background-color: var(--alto-2);
  height: 1px;
  margin-top: 19px;
  width: 600px;
}

.frame-7644 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 600px;
}

.text-2399 {
  letter-spacing: -1px;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.group-759-2 {
  height: 201px;
  margin-bottom: -1px;
  margin-right: -6px;
  position: relative;
  width: 606px;
}

.text-2404 {
  height: 110px;
  left: 53px;
  letter-spacing: 0;
  line-height: 50px;
  position: absolute;
  text-align: center;
  top: 0;
}
</style>
<style scoped>
.game {
  width: 100%;
  margin-top: 80px;
  border-top: none;
}

.game_tab {
  display: flex;
  justify-content: center;
}

.tab {
width:470px;
padding:23.5px 0px;
text-align: center;
  line-height: 100%;
  cursor: pointer;
  color: #666666;
  background-color: #F5F6F6;
}
th,
td {
  text-align: center;
  width:220px;
  padding:20px 0px !important;
}

td {
  border-bottom: 0.5px solid #cccccc !important;
}

th {
  background-color: #F5F6F6;
}
.table_box {
  border: 1px solid #ccc;
}

.table {
  margin: 40px;
  width: 1320px;
}

.tab span {
  color: #666666;
}

.tab:hover {
  background-color: #fff;
}

.tab.active {
  border: 1px solid #ccc;
  border-bottom: none;
  margin-bottom: -2px;
  background-color: #fff;
  color: #222222;
  font-weight: 700;
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
  background-color: #EEEEEE;
}

.paging-number.active {
  background-color: #D30F1A;
  color: white;
}
</style>
