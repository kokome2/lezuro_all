<template>
  <div class="container-center-horizontal">
    <div class="tournamentleaderboard-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-29">
        <frame7706 :className="frame7706Props.className" />
        <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
        <div class="text-1326 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1326 }}</div>
        <div class="frame-8040-8">
          <frame76733 :text602="frame76733Props.text602" />
          <div class="frame-7671-19">
            <div class="text-1351 valign-text-middle pretendard-bold-log-cabin-14px">{{ text1351 }}</div>
          </div>
          <frame76745 />
        </div>
        <div class="frame-container">
          <frame8103 />
          <div class="frame-8109-1">
            <frame8103 :className="frame8103Props.className" />
            <div class="frame-81-4">
              <div class="frame-8103">
                <div class="frame-8102">
                  <frame8101 :number="frame81011Props.number" />
                  <div class="frame-8100">
                    <frame8097 />
                    <frame8099 :className="frame8099Props.className" />
                    <frame8098 :className="frame8098Props.className" />
                  </div>
                </div>
                <group33639 />
              </div>
            </div>
            <frame8109 :number="frame81091Props.number" />
            <frame8109 :number="frame81092Props.number" />
            <div class="frame-81-4">
              <div class="frame-8103-1">
                <div class="frame-8102">
                  <frame8101 :number="frame81012Props.number" />
                  <frame8100 />
                </div>
                <group33639 />
              </div>
            </div>
          </div>
        </div>
        <div class="overlap-group3-29">
          <div class="flex-row-56">
            <img class="lezuro_logo_white-2-58" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-70">
              <div class="group-729-70">
                <img
                  class="vector-157"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-70" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-158"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-17.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-70"><img class="group-728-70" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-57">
            <div class="text-1347 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1347 }}</div>
            <img
              class="line-70"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-134 valign-text-middle pretendard-bold-white-12px">{{ text1348 }}</div>
            <img
              class="line-70"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-134 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1349 }}</div>
          </div>
          <p class="x-95 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-70 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
            ><span class="pretendard-regular-normal-white-12px">{{ spanText3 }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7740 from "./Frame7740";
import Frame7706 from "./Frame7706";
import Frame72912 from "./Frame72912";
import Frame76733 from "./Frame76733";
import Frame76745 from "./Frame76745";
import Frame8103 from "./Frame8103";
import Frame8101 from "./Frame8101";
import Frame8097 from "./Frame8097";
import Frame8099 from "./Frame8099";
import Frame8098 from "./Frame8098";
import Group33639 from "./Group33639";
import Frame8109 from "./Frame8109";
import Frame8100 from "./Frame8100";
export default {
  name: "AppGameRankingList",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame76733,
    Frame76745,
    Frame8103,
    Frame8101,
    Frame8097,
    Frame8099,
    Frame8098,
    Group33639,
    Frame8109,
    Frame8100,
  },
  props: [
    "text1326",
    "text1351",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1347",
    "text1348",
    "text1349",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame7706Props",
    "frame72912Props",
    "frame76733Props",
    "frame8103Props",
    "frame81011Props",
    "frame8099Props",
    "frame8098Props",
    "frame81091Props",
    "frame81092Props",
    "frame81012Props",
  ],
};
</script>

<style>
.tournamentleaderboard-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1431px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-29 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1431px;
  position: relative;
  width: 368px;
}

.text-1326 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 39px;
  min-width: 32px;
  white-space: nowrap;
}

.frame-8040-8 {
  align-items: center;
  display: flex;
  height: 50px;
  margin-right: 8px;
  margin-top: 31px;
  position: relative;
  width: 320px;
}

.frame-7671-19 {
  align-items: center;
  border-color: var(--celeste);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-style: solid;
  border-right-width: 1px;
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 23px 159px;
  position: relative;
  width: 106px;
}

.text-1351 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -2px;
  margin-left: -124.5px;
  margin-right: -124.5px;
  margin-top: -4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-container {
  height: 805px;
  margin-right: 8px;
  margin-top: 10px;
  position: relative;
  width: 320px;
}

.frame-8109-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  top: 0;
  width: 320px;
}

.frame-81-4 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 320px;
}

.frame-8103 {
  align-items: flex-start;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0px;
  position: relative;
}

.frame-8102 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-8100 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-8103-1 {
  align-items: flex-start;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0px;
  position: relative;
  width: 100%;
}

.overlap-group3-29 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 65px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-56 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-58 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-70 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-70 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-157 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-70 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-158 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-70 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-70 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-57 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1347 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-70 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-134 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-95 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-70 {
  text-decoration: underline;
}
</style>
