<template>
  <div class="container-center-horizontal">
    <div class="community-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-25">
        <frame7706 :className="frame7706Props.className" />
        <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
        <div class="text-1181 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1181 }}</div>
        <frame7837 :text479="frame7837Props.text479" :className="frame7837Props.className" />
        <div class="frame-8147">
          <frame8189 />
          <frame8189 />
          <frame8189 />
          <frame8189 />
          <frame8189 />
        </div>
        <frame8076 :className="frame8076Props.className" />
        <div class="overlap-group3-25">
          <div class="flex-row-48">
            <img class="lezuro_logo_white-2-54" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-66">
              <div class="group-729-66">
                <img
                  class="vector-149"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-66" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-150"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-11.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-66"><img class="group-728-66" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-49">
            <div class="text-1227 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1227 }}</div>
            <img
              class="line-66"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-122-1 valign-text-middle pretendard-bold-white-12px">{{ text1228 }}</div>
            <img
              class="line-66"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-122-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1229 }}</div>
          </div>
          <p class="x-91 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-66 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame8189 from "./Frame8189";
import Frame8076 from "./Frame8076";
export default {
  name: "AppBoardList",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame7837,
    Frame8189,
    Frame8076,
  },
  props: [
    "text1181",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1227",
    "text1228",
    "text1229",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame7706Props",
    "frame72912Props",
    "frame7837Props",
    "frame8076Props",
  ],
};
</script>

<style>
.community-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1187px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-25 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1187px;
  position: relative;
  width: 368px;
}

.text-1181 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 39px;
  min-width: 78px;
  white-space: nowrap;
}

.frame-8147 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 30px;
  position: relative;
  width: 320px;
}

.overlap-group3-25 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 135px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-48 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-54 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-66 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-66 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-149 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-66 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-150 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-66 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-66 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-49 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1227 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-66 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-122-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-91 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-66 {
  text-decoration: underline;
}
</style>
