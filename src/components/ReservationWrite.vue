<template>
  <div class="container-center-horizontal">
    <div class="reservation1-2 screen">
      <Header />
      <x2-f-ym-mc :frame7291Props="x2FYmMcProps.frame7291Props" />
      <div class="frame-7784-11">
        <view :text89="viewProps.text89" :className="viewProps.className" />
        <div class="frame-7783-11">
          <div class="frame-7755">
            <div class="frame-7754-3">
              <div class="text-2733 valign-text-middle">{{ text2733 }}</div>
              <div class="text-2734 valign-text-middle">{{ text2734 }}</div>
            </div>
            <div
              class="frame-7330-1"
              :style="{ 'background-image': 'url(' + frame7330 + ')' }"
            >
              <frame72984
                :text2687="frame72984Props.text2687"
                :className="frame72984Props.className"
              />
            </div>
          </div>
          <div class="frame-7782-5">
            <div class="frame-7774">
              <div class="frame-777">
                <div
                  class="text-27-7 valign-text-middle pretendard-bold-mine-shaft-24px"
                >
                  {{ text2736 }}
                </div>
                <div class="frame-7769">
                  <frame7764
                    :frame73034Props="frame77641Props.frame73034Props"
                    :frame7772Props="frame77641Props.frame7772Props"
                    placeholder="예약자명을 입력해주세요"
                  />
                  <frame7764
                    :className="frame77642Props.className"
                    :frame73034Props="frame77642Props.frame73034Props"
                    :frame7772Props="frame77642Props.frame7772Props"
                    placeholder="연락처를 입력해주세요"
                  />
                </div>
              </div>
              <div class="frame-777">
                <div
                  class="text-27-7 valign-text-middle pretendard-bold-mine-shaft-24px"
                >
                  {{ text2741 }}
                </div>
                <div class="frame-7769">
                  <frame77642
                    :text2743="frame776421Props.text2743"
                    :frame73034Props="frame776421Props.frame73034Props"
                    selectPlaceholder="날짜를 선택해주세요"
                  />
                  <frame77642
                    :text2743="frame776422Props.text2743"
                    :className="frame776422Props.className"
                    :frame73034Props="frame776422Props.frame73034Props"
                    selectPlaceholder="룸을 선택해주세요"
                  />
                  <div class="frame-7768">
                    <div class="frame-7303-19">
                      <div
                        class="text-2746 valign-text-middle pretendard-medium-black-18px"
                      >
                        {{ text2746 }}
                      </div>
                    </div>
                    <div class="frame-7281-16">
                      <frame7310
                        :text1816="frame73101Props.text1816"
                        :className="frame73101Props.className"
                      />
                      <frame7309 />
                      <frame7310
                        :text1816="frame73102Props.text1816"
                        :className="frame73102Props.className"
                      />
                      <frame7311
                        :text1819="frame73111Props.text1819"
                        :className="frame73111Props.className"
                      />
                      <frame7311
                        :text1819="frame73112Props.text1819"
                        :className="frame73112Props.className"
                      />
                      <frame7310
                        :text1816="frame73103Props.text1816"
                        :className="frame73103Props.className"
                      />
                      <frame7310
                        :text1816="frame73104Props.text1816"
                        :className="frame73104Props.className"
                      />
                      <frame7311
                        :text1819="frame73113Props.text1819"
                        :className="frame73113Props.className"
                      />
                      <frame7310
                        :text1816="frame73105Props.text1816"
                        :className="frame73105Props.className"
                      />
                      <frame7310
                        :text1816="frame73106Props.text1816"
                        :className="frame73106Props.className"
                      />
                      <frame7310
                        :text1816="frame73107Props.text1816"
                        :className="frame73107Props.className"
                      />
                      <frame7310
                        :text1816="frame73108Props.text1816"
                        :className="frame73108Props.className"
                      />
                      <frame7310
                        :text1816="frame73109Props.text1816"
                        :className="frame73109Props.className"
                      />
                      <frame7310
                        :text1816="frame731010Props.text1816"
                        :className="frame731010Props.className"
                      />
                      <frame7311
                        :text1819="frame73114Props.text1819"
                        :className="frame73114Props.className"
                      />
                      <frame7310
                        :text1816="frame731011Props.text1816"
                        :className="frame731011Props.className"
                      />
                      <frame7311
                        :text1819="frame73115Props.text1819"
                        :className="frame73115Props.className"
                      />
                      <frame7310
                        :text1816="frame731012Props.text1816"
                        :className="frame731012Props.className"
                      />
                      <frame7310
                        :text1816="frame731013Props.text1816"
                        :className="frame731013Props.className"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="frame-7771">
                <div
                  class="text-2766 valign-text-middle pretendard-bold-mine-shaft-24px"
                >
                  {{ text2766 }}
                </div>
                <frame7773 />
              </div>
              <div class="frame-777-1">
                <div
                  class="text-27-8 valign-text-middle pretendard-bold-mine-shaft-24px"
                >
                  {{ text2768 }}
                </div>
                <div
                  class="frame-7776-1 pretendard-regular-normal-mine-shaft-16px"
                >
                  <p class="text-2769 valign-text-middle">{{ text2769 }}</p>
                  <p class="text-2770 valign-text-middle">{{ text2770 }}</p>
                </div>
              </div>
              <div class="frame-777-2">
                <div class="checkbox-container">
                  <label class="custom-checkbox">
                    <input type="checkbox" v-model="isChecked" />
                    <span class="checkmark"></span>
                    <span class="label-text valign-text-middle pretendard-medium-black-16px" >동의합니다</span>
                  </label>
                </div>
                <div class="text-1842 valign-text-middle pretendard-medium-mountain-mist-16px" >
                  <a href="#">자세히보기</a>
                </div>
              </div>
            </div>
            <frame7712
              :text_Label="frame7712Props.text_Label"
              :className="frame7712Props.className"
              @click="completeReservation"
            />
          </div>
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
import Frame72984 from "./Frame72984";
import Frame7764 from "./Frame7764";
import Frame77642 from "./Frame77642";
import Frame7310 from "./Frame7310";
import Frame7309 from "./Frame7309";
import Frame7311 from "./Frame7311";
import Frame7773 from "./Frame7773";
import Frame7781 from "./Frame7781";
import Frame7712 from "./Frame7712";
import XFooter from "./XFooter";
export default {
  name: "ReservationWrite",
  components: {
    Header,
    X2FYmMc,
    View,
    Frame72984,
    Frame7764,
    Frame77642,
    Frame7310,
    Frame7309,
    Frame7311,
    Frame7773,
    Frame7781,
    Frame7712,
    XFooter,
  },
  props: [
    "text2733",
    "text2734",
    "frame7330",
    "text2736",
    "text2741",
    "text2746",
    "text2766",
    "text2768",
    "text2769",
    "text2770",
    "text2771",
    "x2FYmMcProps",
    "viewProps",
    "frame72984Props",
    "frame77641Props",
    "frame77642Props",
    "frame776421Props",
    "frame776422Props",
    "frame73101Props",
    "frame73102Props",
    "frame73111Props",
    "frame73112Props",
    "frame73103Props",
    "frame73104Props",
    "frame73113Props",
    "frame73105Props",
    "frame73106Props",
    "frame73107Props",
    "frame73108Props",
    "frame73109Props",
    "frame731010Props",
    "frame73114Props",
    "frame731011Props",
    "frame73115Props",
    "frame731012Props",
    "frame731013Props",
    "frame7712Props",
    "xFooterProps",
  ],
  data() {
    return {
      isChecked: false, // 체크박스 상태 관리
    };
  },
  methods: {
    completeReservation() {
      alert("예약이 완료되었습니다");
      this.$router.push({ path: "/reservation-progress" });
    },
  },
};
</script>

<style>
a{text-decoration: none; 
 color:black;}
.checkbox-container {
  display: flex;
  align-items: center;
}

.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.custom-checkbox input[type="checkbox"] {
  opacity: 0;
  position: absolute;
}

.checkmark {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 2px solid red;
  border-radius: 50%;
  margin-right: 10px;
  display: inline-block;
  position: relative;
}

.custom-checkbox input[type="checkbox"]:checked + .checkmark {
  background-color: red;
  border-color: red;
}

.custom-checkbox input[type="checkbox"]:checked + .checkmark:after {
  content: "✔";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
}

.label-text {
  font-size: 16px;
  color: #333;
}
.reservation1-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 2584px;
  position: relative;
  width: 1920px;
}

.frame-7784-11 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: 1px;
  margin-top: 104px;
  position: relative;
  width: 1401px;
}

.frame-7783-11 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.frame-7755 {
  align-items: flex-start;
  align-self: stretch;
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
  position: relative;
  width: 100%;
}

.frame-7754-3 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 470px;
}

.text-2733 {
  align-self: stretch;
  color: var(--mine-shaft);
  font-family: var(--font-family-pretendard-bold);
  font-size: 30px;
  font-weight: 700;
  height: 35px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
}

.text-2734 {
  align-self: stretch;
  color: var(--mine-shaft);
  font-family: var(--font-family-pretendard-regular);
  font-size: var(--font-size-xxxxl);
  font-weight: 400;
  height: 19px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
}

.frame-7330-1 {
  background-position: 50% 50%;
  background-size: cover;
  height: 250px;
  position: relative;
  width: 1320px;
}

.frame-7782-5 {
  align-items: center;
  align-self: stretch;
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  padding: 40px 20px;
  position: relative;
  width: 100%;
}

.frame-7774 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 60px;
  position: relative;
  width: 1320px;
}

.frame-777 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}

.text-27-7 {
  align-self: stretch;
  height: 19px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
}

.frame-7769 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.frame-7768 {
  align-items: flex-start;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  padding: 20px 0px;
  position: relative;
  width: 100%;
}

.frame-7303-19 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 48px;
  justify-content: center;
  padding: 0px 10px;
  position: relative;
  width: 150px;
}

.text-2746 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}

.frame-7281-16 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  margin-right: -20px;
  position: relative;
  width: 1190px;
}

.frame-7771 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  position: relative;
}

.text-2766 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 150px;
}

.frame-777-1 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 1320px;
}
.frame-777-2 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  gap: 30px;
  position: relative;
  width: 1320px;
}

.text-27-8 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.frame-7776-1 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--cultured-pearl);
  border-radius: 10px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  overflow: hidden;
  padding: 30px;
  position: relative;
  width: 100%;
}

.text-2769 {
  align-self: stretch;
  height: 20px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.text-2770 {
  align-self: stretch;
  height: 20px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}
</style>
