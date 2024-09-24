<template>
  <div class="container-center-horizontal">
    <div class="swingvideos screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-5">
        <frame7706 :className="frame7706Props.className" />
        <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
        <div class="text-390 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text390 }}</div>
        <div class="frame-8071">
          <frame8069 :group762Props="frame80691Props.group762Props" />
          <frame8069 :group762Props="frame80692Props.group762Props" />
          <frame8077 />
          <frame8077 />
          <frame8077 />
          <frame8077 />
          <frame8077 />
          <frame8077 />
        </div>
        <frame8076 :className="frame8076Props.className" />
        <div class="overlap-group3-5">
          <div class="flex-row-8">
            <img class="lezuro_logo_white-2-32" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-46">
              <div class="group-729-46">
                <img
                  class="vector-100"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-46" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-101"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-11.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-46"><img class="group-728-46" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-9">
            <div class="text-411 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text411 }}</div>
            <img
              class="line-46"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-41-1 valign-text-middle pretendard-bold-white-12px">{{ text412 }}</div>
            <img
              class="line-46"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-41-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text413 }}</div>
          </div>
          <p class="x-71 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-46 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame8069 from "./Frame8069";
import Frame8077 from "./Frame8077";
import Frame8076 from "./Frame8076";
export default {
  name: "AppSwingVideoList",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame8069,
    Frame8077,
    Frame8076,
  },
  props: [
    "text390",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text411",
    "text412",
    "text413",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame7706Props",
    "frame72912Props",
    "frame80691Props",
    "frame80692Props",
    "frame8076Props",
  ],
};
</script>

<style>
.swingvideos {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1574px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-5 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1574px;
  position: relative;
  width: 368px;
}

.text-390 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 27px;
  margin-top: 39px;
  min-width: 63px;
  white-space: nowrap;
}

.frame-8071 {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  margin-right: 18px;
  margin-top: 31px;
  position: relative;
  width: 320px;
}

.overlap-group3-5 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 85px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-8 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-32 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-46 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-46 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-100 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-46 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-101 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-46 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-46 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-9 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-411 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-46 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-41-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-71 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-46 {
  text-decoration: underline;
}
</style>
