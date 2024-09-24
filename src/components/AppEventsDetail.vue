<template>
  <div class="container-center-horizontal">
    <div class="eventdetails-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-28">
        <frame7706 :className="frame7706Props.className" />
        <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
        <div class="text-1298 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1298 }}</div>
        <div class="frame-8140-1">
          <p class="text-1319 valign-text-middle pretendard-bold-mine-shaft-20px" v-html="text1319"></p>
          <div class="text-1320 valign-text-middle pretendard-regular-normal-granite-gray-16px">{{ text1320 }}</div>
        </div>
        <img
          class="rectangle-509275"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/rectangle-509275.svg"
          alt="Rectangle 509275"
        />
        <frame7837 :text479="frame7837Props.text479" :className="frame7837Props.className" />
        <div class="overlap-group3-28">
          <div class="flex-row-54">
            <img class="lezuro_logo_white-2-57" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-69">
              <div class="group-729-69">
                <img
                  class="vector-155"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-69" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-156"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-11.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-69"><img class="group-728-69" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-55">
            <div class="text-1322 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1322 }}</div>
            <img
              class="line-69"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-132-1 valign-text-middle pretendard-bold-white-12px">{{ text1323 }}</div>
            <img
              class="line-69"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-132-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1324 }}</div>
          </div>
          <p class="x-94 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-69 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame7837 from "./Frame7837";
export default {
  name: "AppEventsDetail",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame7837,
  },
  props: [
    "text1298",
    "text1319",
    "text1320",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1322",
    "text1323",
    "text1324",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame7706Props",
    "frame72912Props",
    "frame7837Props",
  ],
};
</script>

<style>
.eventdetails-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1187px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-28 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1187px;
  position: relative;
  width: 368px;
}

.text-1298 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 9px;
  margin-top: 39px;
  min-width: 47px;
  white-space: nowrap;
}

.frame-8140-1 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
  margin-top: 31px;
  position: relative;
  width: 278px;
}

.text-1319 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.text-1320 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 23px;
  position: relative;
}

.rectangle-509275 {
  height: 454px;
  margin-right: 8px;
  margin-top: 20px;
  width: 320px;
}

.overlap-group3-28 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 73px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-54 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-57 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-69 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-69 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-155 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-69 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-156 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-69 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-69 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-55 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1322 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-69 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-132-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-94 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-69 {
  text-decoration: underline;
}
</style>
