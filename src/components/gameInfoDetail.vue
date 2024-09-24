<template>
  <div class="container-center-horizontal">
    <div class="tournamentinfo-2 screen">
      <Header />
      <rj-zs-wi
        :frame72911Props="rJZsWIProps.frame72911Props"
        :frame72912Props="rJZsWIProps.frame72912Props"
      />
      <view :text89="viewProps.text89" :className="viewProps.className" />
      <div class="wrap"> 
    <div class="title">
      <h3>대회</h3>
    </div>
    <div class="content">
      <div class="game_tab">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(tab)"
          :class="['tab', { active: selectedTab === tab }]"
            class="text-2341 valign-text-middle pretendard-regular-normal-granite-gray-18px"
        >
          {{ tab }}
        </div>
      </div>
      <div class="card_box" v-if="selectedTab === '대회정보'">
        <div class="table_box">
          <div class="card">
            <table>
              <thead>
                <tr>
                  <th class="pretendard-medium-log-cabin-18px">대회이름</th>
                  <th  class="text-2341 valign-text-middle pretendard-regular-normal-granite-gray-18px">{{ competition.name }}</th>
                  <th>대회 일정</th>
                  <th class="text-2343 valign-text-middle pretendard-regular-normal-granite-gray-18px">{{ competition.schedule }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="pretendard-medium-log-cabin-18px">대회상태</td>
                  <td colspan="3" class=" pretendard-bold-monza-18px">
                    {{ competition.status }}
                  </td>
                </tr>
                <tr>
                  <td class="pretendard-medium-log-cabin-18px">대회매장</td>
                  <td class="store-cell pretendard-bold-log-cabin-18px " colspan="3">
                    {{ competition.store }}개 매장
                    <div class="s_button pretendard-regular-normal-white-12px-3" @click="toGoMapList">전체매장 펼쳐보기</div>
                    <div class="shop_name">
                      <div
                        v-for="(shop, index) in competition.shopname"
                        :key="index"
                      >
                        <span class="shop-location pretendard-medium-log-cabin-18px">{{ shop.location }}</span>
                        <span class="shop-address pretendard-regular-normal-granite-gray-16px">{{ shop.address }}</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pretendard-medium-log-cabin-18px">대회코스</td>
                  <td colspan="3">
                    <div
                      v-for="(course, index) in competition.course"
                      :key="index"
                      class="inline pretendard-medium-log-cabin-16px"
                    >
                      {{ course }}
                      <div  @click="toGoCourseDetail" class="c_button">
                        자세히 보기
                      </div>
                      <span v-if="index < competition.course.length - 1">
                        /
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pretendard-medium-log-cabin-18px">대회옵션</td>
                  <td colspan="3">
                    <div
                      v-for="(option, index) in competition.options"
                      :key="index"
                      class="inline"
                    >
                      {{ option }}
                      <span v-if="index < competition.options.length - 1">
                        /
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pretendard-medium-log-cabin-18px">참가 조건</td>
                  <td colspan="3">
                    <div
                      v-for="(condition, index) in competition.conditions"
                      :key="index"
                      class="inline pretendard-medium-black-16px"
                    >
                      {{ condition }}
                      <span v-if="index < competition.conditions.length - 1">
                        /
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pretendard-medium-log-cabin-18px">대회 상태</td>
                  <td colspan="3">{{ competition.text }}</td>
                </tr>
              </tbody>
            </table>
            <div class="button">
              <div  @click="openJoinConfirmModal">참가신청</div>
              <div @click="openNotJoinModalNo2">참가취소</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card_box" v-if="selectedTab === '순위표'">
        <div v-if="selectedTab === '순위표'" class="ranking_box">
          <table class="table">
            <thead>
              <tr>
                <th v-for="(header, index) in RTableHeaders" :key="index">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
               <tr v-for="(row, rowIndex) in RankingData" :key="rowIndex">
                <td v-for="(cell, cellIndex) in row" :key="cellIndex">
                  <div v-if="RTableHeaders[cellIndex] === '상세기록'">
                    <span class="ranking-details">
                      {{ cell }}
                    </span>
                  </div>
                  <span v-else>{{ cell }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 대회 이미지-->
      <div class="img_box" v-if="selectedTab === '대회 이미지'">
          <div v-for="(image, index) in game.images" :key="index" class="image-container">
            <img :src="image" :alt="'대회 이미지 ' + (index + 1)">
          </div>
      </div>
    </div>
  </div>
      <JoinConfrimModal
        v-if="isJoinConfirmModalVisible"
        @close="closeJoinConfirmModal"
        :njR4ze="'참여 확인'"
        :text_Label="'정말로 이 대회에 참여하시겠습니까?'"
        :btnGroup4Props="btnGroup43Data"
      />
      <NotJoinModalNo2
        v-if="isNotJoinModalNo2Visible"
        @close="closeNotJoinNo2Modal"
        :o9HT3M="'정말로 취소하시겠어요?'"
        :text_Label="'취소 후 다시 대화에 참여하실 수 있습니다.'"
        :btnGroup2Props="btnGroup27Data"
      />

      <x-footer :className="xFooterProps.className" />
      <!-- <img class="material-symbolsclose-4" :src="materialSymbolsClose" alt="material-symbols:close" /> -->
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import RjZsWi from "./RjZsWi";
import View from "./View";
import Frame7280 from "./Frame7280";
import Frame22 from "./Frame22";
import Frame7295 from "./Frame7295";
import Frame7712 from "./Frame7712";
import Frame7671 from "./Frame7671";
import Frame76736 from "./Frame76736";
import Frame7673 from "./Frame7673";
import XFooter from "./XFooter";
import JoinConfrimModal from "./JoinConfrimModal.vue";
import NotJoinModalNo2 from "./NotJoinModalNo2";

export default {
  name: "gameInfoDetail",
  components: {
    Header,
    RjZsWi,
    View,
    Frame7280,
    Frame22,
    Frame7295,
    Frame7712,
    Frame7671,
    Frame76736,
    Frame7673,
    XFooter,
    JoinConfrimModal,
    NotJoinModalNo2,
  },
  data() {
    return {
      isJoinConfirmModalVisible: false, 
      isNotJoinModalNo2Visible: false,
      btnGroup43Data: {
        btnprimary1Props: { text_Label: "닫기" },
        btnprimary2Props: { text_Label: "신청", className: "btnprimary-26" },
      },
      btnGroup27Data: {
        btnGroup2Props: { text_Label: "닫기" },
        btnGroup2Props: { text_Label: "취소" },
      },
       competition: {
        name: "레저로 여름맞이 스크린 대회",
        schedule: "2024-06-10 ~ 2024-06-11",
        status: "진행중",
        store: "15",
        course: ["스카이뷰CC", "하이원CC"],
        options: ["1.5m", "1"],
        conditions: ["등급", "성별", "매장이용", "나이"],
        text: "개최자 text 입력",
        shopname: [
          { location: "레저로 파그골프", address: "계양구 아나지로 524-1" },
          { location: "새마을금고 본점", address: "전남 목포시 백년대로 294" },
          { location: "나이스 파크골프", address: "단원구 원곡동 822" },
          {
            location: "한국시니어건강체육회",
            address: "서울시 종로구 경희궁길 28 서광빌딩 2층",
          },
          { location: "AK파크골프", address: "달서구 대천동718" },
        ],
      },
         RTableHeaders: [
        "순위",
        "닉네임",
        "등급",
        "라운드",
        "최종성적",
        "상세기록",
      ],
       RankingData: [
        ["1", "스코티 셰틀러", "마스터", "9", "-24", "상세보기"],
        ["2", "로이 맥길로이", "마스터", "9", "-24", "상세보기"],
        ["3", "콜린 모리카와", "마스터", "9", "-24", "상세보기"],
        ["4", "빅토르 호블랜드", "마스터", "9", "-24", "상세보기"],
        ["5", "로이 맥길로이", "마스터", "9", "-24", "상세보기"],
      ],
       tabs: ["대회정보", "순위표", "대회 이미지"],
      selectedTab: "대회정보",
        game:{images:[
        require('../../img/rectangle-509271.png')     ]
      },
    };
  },
  props: [
    "text2341",
    "text2343",
    "text2345",
    "text2346",
    "spanText1",
    "spanText2",
    "text2349",
    "text2350",
    "text2355",
    "text2356",
    "ak",
    "text2357",
    "cc1",
    "text2360",
    "cc2",
    "text2363",
    "x15M",
    "text2364",
    "text2365",
    "number",
    "text2367",
    "text2368",
    "text2369",
    "text2370",
    "text2371",
    "text2372",
    "text2373",
    "text",
    "materialSymbolsClose",
    "rJZsWIProps",
    "viewProps",
    "frame72801Props",
    "frame72802Props",
    "frame72803Props",
    "frame22Props",
    "frame72951Props",
    "frame72952Props",
    "frame72804Props",
    "frame72805Props",
    "frame72806Props",
    "frame72807Props",
    "frame77121Props",
    "frame77122Props",
    "frame7671Props",
    "frame7673Props",
    "xFooterProps",
  ],
  methods: {
    openJoinConfirmModal() {
      this.isJoinConfirmModalVisible = true; // Show the modal when the button is clicked
    },
    closeJoinConfirmModal() {
      this.isJoinConfirmModalVisible = false; // Hide the modal when the close event is emitted
    },
    openNotJoinModalNo2() {
      this.isNotJoinModalNo2Visible = true; // Show modal when button is clicked
    },
    closeNotJoinNo2Modal() {
      this.isNotJoinModalNo2Visible = false; // Hide modal when 'close' event is emitted
    },
    toGoCourseDetail() {
      this.$router.push({ path: "/course-detail" });
    },
    toGoMapList(){
      this.$router.push({path:"/map-list"})
    },
     selectTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style>
.frame-2-4,
.frame-2-5 {
  align-items: center;
  background-color: var(--greygrey-900);
  border-radius: 3px;
  display: flex;
  gap: 10px;
  height: 24px;
  justify-content: center;
  padding: 6px 0px;
  position: relative;
  width: 73px;
}

.text-14-16,
.text-23-1 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
.tournamentinfo-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 1920px;
}

.frame-container-7 {
  height: 911px;
  margin-top: 52px;
  position: relative;
  width: 1400px;
}

.frame-7722 {
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
  justify-content: flex-end;
  left: 0;
  padding: 40px;
  position: absolute;
  top: 59px;
  width: 1400px;
}

.frame-77-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.frame-771-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  position: relative;
}

.frame-7281-12 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 0.5px solid;
  border-color: var(--alto);
  display: flex;
  height: 60px;
  padding: 0px 20px;
  position: relative;
  width: 460px;
}

.text-2341,
.text-2345,
.text-2346,
.text-2350,
.text-2355,
.text-2356,
.text-2357,
.cc-2,
.cc-3,
.text-2363,
.text-2365,
.text-2367,
.text-2369,
.text-2371,
.text-2373,
.text-102 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.text-2343 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 211px;
}

.frame-7281-14 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 0.5px solid;
  border-color: var(--alto);
  display: flex;
  height: 60px;
  padding: 0px 20px;
  position: relative;
  width: 1120px;
}

.frame-7280 {
  align-items: center;
  background-color: var(--wild-sand);
  border: 0.5px solid;
  border-color: var(--alto);
  display: flex;
  height: 312px;
  padding: 0px 20px;
  position: relative;
  width: 200px;
}

.frame-7705 {
  align-items: flex-start;
  border: 0.5px solid;
  border-color: var(--alto);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  position: relative;
  width: 1120px;
}

.frame-7720-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 12px 12px;
  justify-content: center;
  position: relative;
}

.text-2347 {
  color: transparent;
  font-family: var(--font-family-pretendard-bold);
  font-size: var(--font-size-xxxl);
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.span0-1 {
  color: var(--torea-bay);
}

.frame-7704-1 {
  align-items: flex-start;
  align-self: stretch;
  background-color: #f7f7f7;
  border-radius: 10px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  padding: 30px;
  position: relative;
  width: 100%;
}

.frame-7703-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
}

.text-2349,
.x15m-1,
.number-199 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-729 {
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 12px;
  height: 28px;
  position: relative;
  width: 100%;
}

.ak {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  /* width: 86px; */
}

.frame-7704 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 0.5px solid;
  border-color: var(--alto);
  display: flex;
  gap: 10px;
  height: 60px;
  padding: 0px 20px;
  position: relative;
  width: 1120px;
}

.frame-6 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.text-23-6 {
  letter-spacing: 0;
  line-height: 25.2px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7710 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 30px;
  position: relative;
}

.frame-770 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 5px;
  position: relative;
}

.text-2364 {
  letter-spacing: 0;
  line-height: 25.2px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7704-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 0.5px solid;
  border-color: var(--alto);
  display: flex;
  gap: 20px;
  height: 60px;
  padding: 0px 20px;
  position: relative;
  width: 1120px;
}

.frame-7714-9 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  padding: 50px 0px 0px;
  position: relative;
}

.frame-7727-5 {
  align-items: center;
  display: inline-flex;
  left: 0;
  position: absolute;
  top: 0;
}

.material-symbolsclose-4 {
  align-self: flex-start;
  height: 30px;
  margin-left: -943px;
  margin-top: 16329px;
  width: 30px;
}

</style>
<style scoped>
.wrap {
    margin: 104px 260px;
    width: 1400px;
}

/* 타이틀 */
.title h3 {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 50px;
}

.content {
    display: flex;
    flex-direction: column;
}

/* 탭 */
.game_tab {
    display: flex;
    justify-content: center;
}

.tab {
    line-height: 100%;
    width: 466.66px;
    padding: 23px 0px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    color: #666666;
    background-color: #F5F6F6;
    
}

.tab:hover {
    background-color: #fff;
}

.tab.active {
    width: 466.66px;
    border: 1px solid #ddd;
    margin-bottom: -2px;
    background-color: #fff;
    border-bottom: 2px solid #fff;
    position: relative;
    z-index: 2;
    color: #222222;
}

/* 대회정보  */
.table_box {
    border: 1px solid #ddd;
    padding: 40px;
}

.table_box table {
    border-collapse: collapse;
}

.table_box th,
.table_box td {
    border: 0.5px solid #ddd;
    padding: 18px 20px;
}

.table_box th {
    text-align: left;
    width: 184px;
}

.table_box th:nth-child(1),
.table_box th:nth-child(3) {
    background-color: #f4f4f4;
}

.table_box th:nth-child(2),
.table_box th:nth-child(4) {
    width: 460px;
}

.table_box tr td:nth-child(1) {
    background-color: #f4f4f4;
}


.table_box {
    overflow-x: auto;
}

.s_button {
    width: 120px;
    height: 35px;
    background-color: #184199;
    color: #fff;
    text-align: center;
    margin-left: 12px;
    font-size: 12px;
    align-items: center;
    border-radius: 3px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.c_button {
    width: 73px;
    height: 24px;
    font-size: 12px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #fff;
    margin-right: 10px;
    margin-left: 10px;
    background-color: #222;
    border-radius: 3px;
    font-family: 'Pretendard-Regular';
}

.shop_name {
    padding: 30px;
    background-color: #F7F7F7;
    margin-top: 20px;
    border-radius: 10px;
}

.inline {
    display: inline-block;
    text-align: center;
    margin-right: 10px;
}

.shop-location {
    margin-right: 12px;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
}

.shop-address {
    font-size: 16px;
    color: #666;
}


.status-ongoing {
    color: #D30F1A;
}

.status-recruiting {
    color: #184199;
}

.status-ended {
    color: #222222;
}

.button {
    margin-top: 50px;
    display: flex;
    justify-content: center;
}

.button div {
    width: 200px;
    height: 50px;
    display: flex;
    color: #fff;
    background-color: #D30F1A;
    justify-content: center;
    align-items: center;
}

.button div:nth-child(2) {
    background-color: #999;
    margin-left: 20px;
}

/* 순위표 */

.ranking_box{padding:40px;
             border:1px solid #ddd;}

.ranking_box table {
    border-collapse: separate;
    width:100%;
    border-spacing: 0;
    overflow: hidden;
  }
  
  .ranking_box th,
  .ranking_box td {
    text-align: center;
    width:220px;
    padding:20px 0px;
  }
  
  .ranking_box td {
    border-bottom: 0.5px solid #cccccc;
    color:#666;
  }
  
  .ranking_box th {
    background-color: #F5F6F6;
    width: 220px;
    font-size: 16px;
    padding: 19px 0px;
  }

  .ranking-details{background-color: #184199;
                   color:#fff;
                   padding:11px 30px;
                   text-align: center;
                   font-size:14px;
                   font-weight: 600;
                   border-radius:90px;
                }

.img_box{border:0.5px solid #ddd;
        display: flex;
        justify-content: center;
        position:relative;
        padding:80px;}

        .image-container{width:100%;
         position:relative;}
          .image-container img{width:100%;}
</style>