<template>
  <div class="container-center-horizontal">
    <div class="tournamentgallery-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-27">
        <frame7706 :className="frame7706Props.className" />
        <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
        <div class="text-1270 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1270 }}</div>
        <div class="frame-8040-7">
          <frame76733 :text602="frame76733Props.text602" />
          <div class="frame-7674-15">
            <div class="text-1295 valign-text-middle pretendard-medium-granite-gray-14px">{{ text1295 }}</div>
          </div>
          <div class="frame-7671-18">
            <div class="text-1296 valign-text-middle pretendard-bold-log-cabin-14px">{{ text1296 }}</div>
          </div>
        </div>
        <img class="rectangle-509271" :src="rectangle509271" alt="Rectangle 509271" />
        <div class="overlap-group3-27">
          <div class="flex-row-52">
            <img class="lezuro_logo_white-2-56" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-68">
              <div class="group-729-68">
                <img
                  class="vector-153"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-68" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-154"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-17.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-68"><img class="group-728-68" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-53">
            <div class="text-1291 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1291 }}</div>
            <img
              class="line-68"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-129 valign-text-middle pretendard-bold-white-12px">{{ text1292 }}</div>
            <img
              class="line-68"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-129 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1293 }}</div>
          </div>
          <p class="x-93 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-68 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
export default {
  name: "AppgameImageDetail",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame76733,
  },
  props: [
    "text1270",
    "text1295",
    "text1296",
    "rectangle509271",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1291",
    "text1292",
    "text1293",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame7706Props",
    "frame72912Props",
    "frame76733Props",
  ],
};
</script>

<style>
.tournamentgallery-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1096px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-27 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1096px;
  position: relative;
  width: 368px;
}

.text-1270 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 39px;
  min-width: 32px;
  white-space: nowrap;
}

.frame-8040-7 {
  align-items: center;
  display: flex;
  height: 50px;
  margin-right: 8px;
  margin-top: 31px;
  position: relative;
  width: 320px;
}

.frame-7674-15 {
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
  width: 108px;
}

.text-1295 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -2px;
  margin-left: -123.5px;
  margin-right: -123.5px;
  margin-top: -4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7671-18 {
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

.text-1296 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -2px;
  margin-left: -136.5px;
  margin-right: -136.5px;
  margin-top: -4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.rectangle-509271 {
  height: 453px;
  margin-right: 8px;
  margin-top: 20px;
  object-fit: cover;
  width: 320px;
}

.overlap-group3-27 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 72px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-52 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-56 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-68 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-68 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-153 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-68 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-154 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-68 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-68 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-53 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1291 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-68 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-129 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-93 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-68 {
  text-decoration: underline;
}
</style>
