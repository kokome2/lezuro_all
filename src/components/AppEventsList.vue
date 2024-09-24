<template>
  <div class="container-center-horizontal">
    <div class="events-1 screen">
      <group33618 :className="group33618Props.className" :frame7706Props="group33618Props.frame7706Props" />
      <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
      <div class="text-1396 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1396 }}</div>
      <div class="frame-8040-9">
        <frame76714 :text926="frame76714Props.text926" :className="frame76714Props.className" />
        <div class="frame-7673-13">
          <div class="text-1398 valign-text-middle pretendard-medium-granite-gray-14px">{{ text1398 }}</div>
        </div>
        <frame76746 :text1399="frame76746Props.text1399" />
      </div>
      <div class="frame-8081">
        <group33652 :frame8082Props="group336521Props.frame8082Props" />
        <group33652 :frame8082Props="group336522Props.frame8082Props" />
        <group33652 :frame8082Props="group336523Props.frame8082Props" />
        <div class="group-33656">
          <div class="frame-container-1">
            <frame8080 />
            <frame80822 />
          </div>
        </div>
        <group33652 :frame8082Props="group336524Props.frame8082Props" />
        <group33652 :frame8082Props="group336525Props.frame8082Props" />
      </div>
      <frame8076 :className="frame8076Props.className" />
      <div class="group-33621">
        <div class="overlap-group-80">
          <div class="flex-row-58">
            <img class="lezuro_logo_white-2-59" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-71">
              <div class="group-729-71">
                <img
                  class="vector-159"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-71" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-160"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-11.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-71"><img class="group-728-71" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-59">
            <div class="text-1400 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1400 }}</div>
            <img
              class="line-71"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-140-1 valign-text-middle pretendard-bold-white-12px">{{ text1401 }}</div>
            <img
              class="line-71"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-140-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1402 }}</div>
          </div>
          <p class="x-96 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-71 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame76714 from "./Frame76714";
import Frame76746 from "./Frame76746";
import Group33652 from "./Group33652";
import Frame8080 from "./Frame8080";
import Frame80822 from "./Frame80822";
import Frame8076 from "./Frame8076";
export default {
  name: "AppEventsList",
  components: {
    Group33618,
    Frame72912,
    Frame76714,
    Frame76746,
    Group33652,
    Frame8080,
    Frame80822,
    Frame8076,
  },
  props: [
    "text1396",
    "text1398",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1400",
    "text1401",
    "text1402",
    "spanText1",
    "spanText2",
    "spanText3",
    "group33618Props",
    "frame72912Props",
    "frame76714Props",
    "frame76746Props",
    "group336521Props",
    "group336522Props",
    "group336523Props",
    "group336524Props",
    "group336525Props",
    "frame8076Props",
  ],
};
</script>

<style>
.events-1 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 1503px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.text-1396 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 1px;
  margin-top: 39px;
  min-width: 47px;
  white-space: nowrap;
}

.frame-8040-9 {
  align-items: center;
  display: flex;
  height: 50px;
  margin-top: 51px;
  position: relative;
  width: 320px;
}

.frame-7673-13 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--celeste);
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 23px 151px;
  position: relative;
  width: 106px;
}

.text-1398 {
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

.frame-8081 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  justify-content: space-between;
  margin-top: 20px;
  position: relative;
  width: 320px;
}

.group-33656 {
  height: 249px;
  position: relative;
  width: 155px;
}

.frame-container-1 {
  height: 249px;
  position: relative;
}

.group-33621 {
  align-items: flex-start;
  display: flex;
  height: 310px;
  margin-left: 8px;
  margin-top: 75px;
  min-width: 368px;
}

.overlap-group-80 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-58 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-59 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-71 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-71 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-159 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-71 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-160 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-71 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-71 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-59 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1400 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-71 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-140-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-96 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-71 {
  text-decoration: underline;
}
</style>
