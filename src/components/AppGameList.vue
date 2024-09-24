<template>
  <div class="container-center-horizontal">
    <div class="tournaments-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-37">
        <frame7706 :className="frame7706Props.className" />
        <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
        <div class="text-1702 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1702 }}</div>
        <frame7950 :text300="frame7950Props.text300" :frame7949Props="frame7950Props.frame7949Props" />
        <div class="frame-8040-12">
          <div class="frame-7671-20">
            <div class="text-17-10 valign-text-middle pretendard-bold-log-cabin-14px">{{ text1728 }}</div>
          </div>
          <frame76734 :text1729="frame767341Props.text1729" />
          <frame76734 :text1729="frame767342Props.text1729" :className="frame767342Props.className" />
          <div class="frame-7675">
            <div class="text-17-10 valign-text-middle pretendard-medium-granite-gray-14px">{{ text1731 }}</div>
          </div>
        </div>
        <div class="frame-8081-2">
          <group336332 :frame8082Props="group3363321Props.frame8082Props" />
          <group336332 :frame8082Props="group3363322Props.frame8082Props" />
          <div class="group-33636">
            <div class="frame-container-5">
              <frame80802 />
              <frame80822 :className="frame80822Props.className" />
            </div>
          </div>
          <group336332 :frame8082Props="group3363323Props.frame8082Props" />
          <group336332 :frame8082Props="group3363324Props.frame8082Props" />
          <group336332 :frame8082Props="group3363325Props.frame8082Props" />
        </div>
        <frame8076 :className="frame8076Props.className" />
        <div class="overlap-group3-35">
          <div class="flex-row-74">
            <img class="lezuro_logo_white-2-67" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-79">
              <div class="group-729-79">
                <img
                  class="vector-176"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-79" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-177"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-17.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-79"><img class="group-728-79" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-75">
            <div class="text-1723 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1723 }}</div>
            <img
              class="line-79"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-172 valign-text-middle pretendard-bold-white-12px">{{ text1724 }}</div>
            <img
              class="line-79"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-172 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1725 }}</div>
          </div>
          <p class="x-104 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-79 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame7950 from "./Frame7950";
import Frame76734 from "./Frame76734";
import Group336332 from "./Group336332";
import Frame80802 from "./Frame80802";
import Frame80822 from "./Frame80822";
import Frame8076 from "./Frame8076";
export default {
  name: "AppGameList",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame7950,
    Frame76734,
    Group336332,
    Frame80802,
    Frame80822,
    Frame8076,
  },
  props: [
    "text1702",
    "text1728",
    "text1731",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1723",
    "text1724",
    "text1725",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame7706Props",
    "frame72912Props",
    "frame7950Props",
    "frame767341Props",
    "frame767342Props",
    "group3363321Props",
    "group3363322Props",
    "frame80822Props",
    "group3363323Props",
    "group3363324Props",
    "group3363325Props",
    "frame8076Props",
  ],
};
</script>

<style>
.tournaments-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1938px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-37 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1938px;
  position: relative;
  width: 368px;
}

.text-1702 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 39px;
  min-width: 32px;
  white-space: nowrap;
}

.frame-8040-12 {
  align-items: center;
  display: flex;
  height: 50px;
  margin-right: 8px;
  margin-top: 30px;
  position: relative;
  width: 320px;
}

.frame-7671-20 {
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
  width: 80px;
}

.text-17-10 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -2px;
  margin-left: -131.5px;
  margin-right: -131.5px;
  margin-top: -4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7675 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--celeste);
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 23px 159px;
  position: relative;
  width: 80px;
}

.frame-8081-2 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  justify-content: space-between;
  margin-right: 8px;
  margin-top: 20px;
  position: relative;
  width: 320px;
}

.group-33636 {
  height: 345px;
  position: relative;
  width: 155px;
}

.frame-container-5 {
  height: 345px;
  position: relative;
}

.overlap-group3-35 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 98px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-74 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-67 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-79 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-79 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-176 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-79 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-177 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-79 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-79 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-75 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1723 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-79 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-172 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-104 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-79 {
  text-decoration: underline;
}
</style>
