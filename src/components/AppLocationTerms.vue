<template>
  <div class="container-center-horizontal">
    <div class="location screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-9">
        <frame7706 />
        <frame72912 :text149="frame72912Props.text149" />
        <div class="frame-8133-4">
          <div class="text-601 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text601 }}</div>
          <div class="frame-8040-3">
            <frame76733 :text602="frame76733Props.text602" />
            <frame76744 :text603="frame76744Props.text603" />
            <frame76713 :text604="frame76713Props.text604" />
          </div>
          <frame7915 />
          <frame77142 :frame7713Props="frame77142Props.frame7713Props" />
        </div>
        <div class="overlap-group3-9">
          <div class="flex-row-16">
            <img class="lezuro_logo_white-2-36" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-50">
              <div class="group-729-50">
                <img
                  class="vector-111"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-25.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-50" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-112"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-26.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-50"><img class="group-728-50" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-17">
            <div class="text-598 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text598 }}</div>
            <img
              class="line-50"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-70 valign-text-middle pretendard-bold-white-12px">{{ text599 }}</div>
            <img
              class="line-50"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-70 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text600 }}</div>
          </div>
          <p class="x-75 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-50 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame76744 from "./Frame76744";
import Frame76713 from "./Frame76713";
import Frame7915 from "./Frame7915";
import Frame77142 from "./Frame77142";
export default {
  name: "AppLocationTerms",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame76733,
    Frame76744,
    Frame76713,
    Frame7915,
    Frame77142,
  },
  props: [
    "text601",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text598",
    "text599",
    "text600",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame72912Props",
    "frame76733Props",
    "frame76744Props",
    "frame76713Props",
    "frame77142Props",
  ],
};
</script>

<style>
.location {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1547px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-9 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1545px;
  position: relative;
  width: 368px;
}

.frame-8133-4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
  position: relative;
  width: 360px;
}

.text-601 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.frame-8040-3 {
  align-items: center;
  align-self: stretch;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.overlap-group3-9 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-top: 337px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-16 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-36 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-50 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-50 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-111 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-50 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-112 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-50 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-50 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-17 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-598 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-50 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-70 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-75 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-50 {
  text-decoration: underline;
}
</style>
