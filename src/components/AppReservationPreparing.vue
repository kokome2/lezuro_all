<template>
  <div class="container-center-horizontal">
    <div class="reservation2-1 screen">
      <group33618 :className="group33618Props.className" :frame7706Props="group33618Props.frame7706Props" />
      <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
      <div class="text-1790 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1790 }}</div>
      <div class="frame-7812-4">
        <img
          class="objects-2"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/objects-2.svg"
          alt="Objects"
        />
        <div class="frame-7810-5">
          <h1 class="text-1794 valign-text-middle pretendard-bold-mine-shaft-24px" v-html="text1794"></h1>
          <p class="text-1795 valign-text-middle pretendard-regular-normal-log-cabin-16px" v-html="text1795"></p>
        </div>
        <frame77122 :text_Label="frame77122Props.text_Label" />
      </div>
      <div class="group-33642-3">
        <div class="rectangle-509274-11"></div>
        <div class="overlap-group-87">
          <div class="flex-row-78">
            <img class="lezuro_logo_white-2-69" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-81">
              <div class="group-729-81">
                <img
                  class="vector-180"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-81" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-181"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-17.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-81"><img class="group-728-81" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-79">
            <div class="text-1791 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1791 }}</div>
            <img
              class="line-81"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-179-1 valign-text-middle pretendard-bold-white-12px">{{ text1792 }}</div>
            <img
              class="line-81"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-179-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1793 }}</div>
          </div>
          <p class="x-106 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-81 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
            ><span class="pretendard-regular-normal-white-12px">{{ spanText3 }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Group33618 from "./Group33618";
import Frame72912 from "./Frame72912";
import Frame77122 from "./Frame77122";
export default {
  name: "AppReservationPreparing",
  components: {
    Group33618,
    Frame72912,
    Frame77122,
  },
  props: [
    "text1790",
    "text1794",
    "text1795",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1791",
    "text1792",
    "text1793",
    "spanText1",
    "spanText2",
    "spanText3",
    "group33618Props",
    "frame72912Props",
    "frame77122Props",
  ],
};
</script>

<style>
.reservation2-1 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 1043px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.text-1790 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 1px;
  margin-top: 39px;
  min-width: 63px;
  white-space: nowrap;
}

.frame-7812-4 {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 82px;
  position: relative;
}

.objects-2 {
  height: 80px;
  position: relative;
  width: 80px;
}

.frame-7810-5 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.text-1794 {
  letter-spacing: 0;
  line-height: 30px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: fit-content;
}

.text-1795 {
  align-self: stretch;
  height: 118px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
}

.group-33642-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-top: 116px;
  min-height: 320px;
  width: 368px;
}

.rectangle-509274-11 {
  background-color: var(--alto);
  height: 1px;
  width: 360px;
}

.overlap-group-87 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  min-height: 319px;
  padding: 50px 20px;
  width: 360px;
}

.flex-row-78 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  min-width: 320px;
}

.lezuro_logo_white-2-69 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-81 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-81 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-180 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-81 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-181 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-81 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-81 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-79 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1791 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-81 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-179-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-106 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-81 {
  text-decoration: underline;
}
</style>
