<template>
  <div class="container-center-horizontal">
    <div class="contacthistory-2 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-15">
        <frame7706 />
        <frame72912 :text149="frame72912Props.text149" />
        <div class="frame-8135">
          <div class="text-801 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text801 }}</div>
          <frame8040 :className="frame8040Props.className" :frame76732Props="frame8040Props.frame76732Props" />
          <div class="frame-7831-2">
            <div class="frame-7830-2">
              <th5 :number="th51Props.number" />
              <th6 :number="th61Props.number" />
              <th5 :number="th52Props.number" />
              <th6 :number="th62Props.number" />
              <th6 :number="th63Props.number" />
            </div>
            <frame7667
              :group6681Props="frame7667Props.group6681Props"
              :group6682Props="frame7667Props.group6682Props"
            />
          </div>
        </div>
        <div class="overlap-group3-15">
          <div class="flex-row-28">
            <img class="lezuro_logo_white-2-44" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-56">
              <div class="group-729-56">
                <img
                  class="vector-123"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-25.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-56" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-124"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-26.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-56"><img class="group-728-56" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-29">
            <div class="text-798 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text798 }}</div>
            <img
              class="line-56"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-90 valign-text-middle pretendard-bold-white-12px">{{ text799 }}</div>
            <img
              class="line-56"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-90 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text800 }}</div>
          </div>
          <p class="x-81 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-56 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame8040 from "./Frame8040";
import Th5 from "./Th5";
import Th6 from "./Th6";
import Frame7667 from "./Frame7667";
export default {
  name: "AppMyContactList",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame8040,
    Th5,
    Th6,
    Frame7667,
  },
  props: [
    "text801",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text798",
    "text799",
    "text800",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame72912Props",
    "frame8040Props",
    "th51Props",
    "th61Props",
    "th52Props",
    "th62Props",
    "th63Props",
    "frame7667Props",
  ],
};
</script>

<style>
.contacthistory-2 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1321px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-15 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1321px;
  position: relative;
  width: 368px;
}

.frame-8135 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
  position: relative;
  width: 360px;
}

.text-801 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.frame-7831-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
  position: relative;
  width: 100%;
}

.frame-7830-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.overlap-group3-15 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-28 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-44 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-56 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-56 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-123 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-56 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-124 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-56 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-56 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-29 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-798 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-56 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-90 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-81 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-56 {
  text-decoration: underline;
}
</style>
