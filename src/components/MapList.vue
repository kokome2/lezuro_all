<template>
  <div class="container-center-horizontal">
    <div class="findvenue-2 screen">
      <Header />
      <x2-f-ym-mc :frame7291Props="x2FYmMcProps.frame7291Props" />
      <view :text89="viewProps.text89" :className="viewProps.className" />
      <frame72983
        :text2658="frame72983Props.text2658"
        :frame76691Props="frame72983Props.frame76691Props"
        :frame76692Props="frame72983Props.frame76692Props"
      />
      <div class="frame-7741">
             <div class="frame-7740 frame-7740-40">
          <div v-for="(venue, index) in venues" :key="index" class="frame-7736">
            <div class="frame-7737-42">
              <div class="frame-7734">
                <div class="text-1-9 valign-text-middle pretendard-bold-mine-shaft-20px">{{ venue.name }}</div>
              </div>
              <p class="text-1-10 valign-text-middle pretendard-regular-normal-granite-gray-16px">
                주소 : {{ venue.address }}<br />
                연락처 : {{ venue.contact }}
              </p>
            </div>
            <div class="frame-7946">
              <div class="view-44" @click="openModal">
                <div class="overlap-group-13" >
                  <div class="text-1-2 valign-text-middle pretendard-medium-white-12px">자세히보기</div>
                </div>
              </div>
              <div class="view-45" @click="toGoReservationWrite">
                <div class="overlap-group1-10">
                    <div class="text-1-3 valign-text-middle pretendard-medium-white-12px">예약하기</div>
                </div>
              </div>
              <div class="view-46">
                <div class="overlap-group2-5">
                  <a :href="'tel:' + venue.contact">
                    <div class="text-1-4 valign-text-middle pretendard-medium-white-12px">전화걸기</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="view-220">
          <div class="frame-container-10" :style="{ 'background-image': 'url(' + frameContainer + ')' }">
            <frame72984 :text2687="frame729841Props.text2687" />
            <frame72984 :text2687="frame729842Props.text2687" :className="frame729842Props.className" />
            <frame72984 :text2687="frame729843Props.text2687" :className="frame729843Props.className" />
            <frame72984 :text2687="frame729844Props.text2687" :className="frame729844Props.className" />
          </div>
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
      <GameDetail v-if="isModalVisible"  @close="closeModal" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import X2FYmMc from "./X2FYmMc";
import View from "./View";
import Frame72983 from "./Frame72983";
import Frame72984 from "./Frame72984";
import XFooter from "./XFooter";
import GameDetail from "./GameDetail"
export default {
  name: "MapList",
  components: {
     Header,
     GameDetail,
    X2FYmMc,
    View,
    Frame72983,
    Frame72984,
    XFooter,
  },
  props: [
    "frameContainer",
    "hArHeeProps",
    "x2FYmMcProps",
    "viewProps",
    "frame72983Props",
    "frame729841Props",
    "frame729842Props",
    "frame729843Props",
    "frame729844Props",
    "xFooterProps",
  ],
  data() {
    return {
          isModalVisible: false,
      game: {
        address: "경기도 광명시 오리로500",
        time: "평일 09:00 ~ 24:00 / 주말 10:00 ~ 22:00",
        parking: "2시간 무료",
        room: "10개 게임 룸",
        info: "매장에 대한 안내 내용입니다",
      },
       venues: [
        {
          name: "레저로스크린파크골프 광명점",
          address: "경기도 광명시 오리로500",
          contact: "02-898-0727",
        },
        {
          name: "레저로스크린파크골프 서울점",
          address: "서울특별시 강남구 역삼로 123",
          contact: "02-123-4567",
        },
        {
          name: "레저로스크린파크골프 부산점",
          address: "부산광역시 해운대구 해대로 56",
          contact: "051-789-1234",
        },
        {
          name: "레저로스크린파크골프 인천점",
          address: "인천광역시 남동구 구월로 789",
          contact: "032-345-6789",
        },
      ],
    };
  },
  methods:{
  openModal() {
    this.isModalVisible = true; // 모달 열기
  },
      closeModal() {
    this.isModalVisible = false;
  },
  toGoReservationWrite(){
    this.$router.push({path:"/reservation-write"})
  }
  }
};
</script>

<style>
.findvenue-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1920px;
}

.frame-7741 {
  align-items: flex-start;
  display: inline-flex;
  margin-top: 30px;
  position: relative;
  
}

.view-220 {
  border: 1px solid;
  border-color: var(--alto);
  height: 800px;
  overflow: hidden;
  position: relative;
  width: 1065px;
}

.frame-container-10 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  left: -471px;
  min-height: 886px;
  padding: 226px 323px;
  position: relative;
  top: -28px;
  width: 1618px;
}
</style>

<style scoped>
.frame-7740 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: -515px;
  margin-top: 581px;
  position: relative;
  width: 335px;
}

.frame-7740.frame-7740-40 {
  margin-left: unset;
  margin-top: unset;
}
.frame-7736 {
  align-items: flex-start;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 40px;
  position: relative;
  width: 100%;
  gap:20px !important;
}

.frame-7946 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 5px;
  justify-content: center;
  position: relative;
}

.view-44 {
  height: 30px;
  position: relative;
  width: 82px;
}

.overlap-group-13 {
  align-items: center;
  background-color: var(--mountain-mist);
  border-radius: 4px;
  display: flex;
  height: 30px;
  justify-content: flex-end;
  min-width: 80px;
  padding: 0 9px;
}

.text-1-2 {
  height: 10px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 61px;
}

.view-45 {
  height: 30px;
  position: relative;
  width: 83px;
}

.overlap-group1-10 {
  align-items: flex-end;
  background-color: var(--monza);
  border-radius: 4px;
  display: flex;
  height: 30px;
  min-width: 81px;
  padding: 9.2px 17px;
}

.text-1-3 {
  height: 11px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 46px;
}

.view-46 {
  height: 30px;
  margin-right: -2px;
  position: relative;
  width: 82px;
}

.overlap-group2-5 {
  align-items: center;
  background-color: var(--torea-bay);
  border-radius: 4px;
  display: flex;
  height: 30px;
  min-width: 80px;
  padding: 0 14px;
}

.text-1-4 {
  height: 10px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 52px;
}

.frame-7736.frame-773,
.frame-7736.frame-773-1,
.frame-7736.frame-773-2,
.frame-7736.frame-773-3,
.frame-7736.frame-773-4,
.frame-7736.frame-773-5,
.frame-7736.frame-773-6,
.frame-7736.frame-773-7,
.frame-7736.frame-773-8,
.frame-7736.frame-773-9,
.frame-7736.frame-773-10,
.frame-7736.frame-773-11,
.frame-7736.frame-773-12,
.frame-7736.frame-773-13,
.frame-7736.frame-773-14,
.frame-7736.frame-773-15,
.frame-7736.frame-773-16,
.frame-7736.frame-773-17,
.frame-7736.frame-773-18,
.frame-7736.frame-773-19,
.frame-7736.frame-773-20,
.frame-7736.frame-773-21,
.frame-7736.frame-773-22,
.frame-7736.frame-773-23,
.frame-7736.frame-773-24,
.frame-7736.frame-773-25,
.frame-7736.frame-773-26,
.frame-7736.frame-773-27,
.frame-7736.frame-773-28,
.frame-7736.frame-773-29,
.frame-7736.frame-773-30,
.frame-7736.frame-773-31,
.frame-7736.frame-773-32,
.frame-7736.frame-773-33,
.frame-7736.frame-773-34,
.frame-7736.frame-773-35,
.frame-7736.frame-773-36,
.frame-7736.frame-773-37,
.frame-7736.frame-773-38,
.frame-7736.frame-773-39,
.frame-7736.frame-773-40 {
  border-top-style: unset;
  border-top-width: unset;
}
.frame-7737-42 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  gap:0px !important;
  width: 244px;
}

.frame-7734 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 4px;
  position: relative;
  width: 100%;
}

.text-1-9 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.text-1-10 {
  letter-spacing: 0;
  line-height: 23px;
  position: relative;
  width: fit-content;
}

.frame-7737-41.frame-7954 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 20px;
  margin-top: 31px;
  position: relative;
  width: 244px;
}

.frame-7737-41.frame-7954 .text-1-10 {
  white-space: nowrap;
}
</style>
