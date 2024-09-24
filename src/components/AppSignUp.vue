<template>
  <div class="container-center-horizontal">
    <div class="signup2-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-21">
        <group33618 :frame7706Props="group33618Props.frame7706Props" />
        <div class="text-994 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text994 }}</div>
        <div class="frame-8024">
          <frame8022 :text839="frame80221Props.text839" :frame8016Props="frame80221Props.frame8016Props" />
          <frame8022 :text839="frame80222Props.text839" :frame8016Props="frame80222Props.frame8016Props" />
          <frame8022 :text839="frame80223Props.text839" :frame8016Props="frame80223Props.frame8016Props" />
          <frame8022 :text839="frame80224Props.text839" :frame8016Props="frame80224Props.frame8016Props" />
          <frame8026 />
          <frame8027
            :frame763171Props="frame8027Props.frame763171Props"
            :frame763172Props="frame8027Props.frame763172Props"
          />
          <frame8022 :text839="frame80225Props.text839" :frame8016Props="frame80225Props.frame8016Props" />
          <frame8022 :text839="frame80226Props.text839" :frame8016Props="frame80226Props.frame8016Props" />
        </div>
        <p class="text-1035 valign-text-middle pretendard-regular-normal-mine-shaft-14px" v-html="text1035"></p>
        <div class="overlap-group4">
          <div class="text-1036 valign-text-middle pretendard-semi-bold-white-16px">{{ text1036 }}</div>
        </div>
        <div class="group-33619-4">
          <div class="rectangle-509274-4"></div>
          <div class="overlap-group3-21">
            <div class="flex-row-40">
              <img class="lezuro_logo_white-2-50" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
              <div class="frame-7500-62">
                <div class="group-729-62">
                  <img
                    class="vector-137"
                    src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                    alt="Vector"
                  />
                </div>
                <div class="group-730-62" :style="{ 'background-image': 'url(' + group730 + ')' }">
                  <img
                    class="vector-138"
                    src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-17.svg"
                    alt="Vector"
                  />
                </div>
                <div class="group-731-62"><img class="group-728-62" :src="group728" alt="Group 728" /></div>
              </div>
            </div>
            <div class="flex-row-41">
              <div class="text-1015 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1015 }}</div>
              <img
                class="line-62"
                src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
                alt="Line 3"
              />
              <div class="text-101 valign-text-middle pretendard-bold-white-12px">{{ text1016 }}</div>
              <img
                class="line-62"
                src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
                alt="Line 4"
              />
              <div class="text-101 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1017 }}</div>
            </div>
            <p class="x-87 pretendard-regular-normal-white-12px">
              <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
              ><span class="span1-62 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
              ><span class="pretendard-regular-normal-white-12px">{{ spanText3 }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7740 from "./Frame7740";
import Group33618 from "./Group33618";
import Frame8022 from "./Frame8022";
import Frame8026 from "./Frame8026";
import Frame8027 from "./Frame8027";
export default {
  name: "AppSignUp",
  components: {
    Frame7740,
    Group33618,
    Frame8022,
    Frame8026,
    Frame8027,
  },
  props: [
    "text994",
    "text1035",
    "text1036",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1015",
    "text1016",
    "text1017",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "group33618Props",
    "frame80221Props",
    "frame80222Props",
    "frame80223Props",
    "frame80224Props",
    "frame8027Props",
    "frame80225Props",
    "frame80226Props",
  ],
};
</script>

<style>
.signup2-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1460px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-21 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1460px;
  position: relative;
  width: 368px;
}

.text-994 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 7px;
  margin-top: 40px;
  position: relative;
  text-align: center;
  width: 235px;
}

.frame-8024 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 8px;
  margin-top: 31px;
  position: relative;
  width: 320px;
}

.text-1035 {
  height: 40px;
  letter-spacing: -0.35px;
  line-height: 20px;
  margin-right: 8px;
  margin-top: 9px;
  text-align: center;
  width: 320px;
}

.overlap-group4 {
  align-items: flex-start;
  background-color: var(--monza);
  display: flex;
  height: 54px;
  justify-content: flex-end;
  margin-right: 8px;
  margin-top: 31px;
  min-width: 320px;
  padding: 17.4px 125.5px;
}

.text-1036 {
  height: 19px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.group-33619-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  min-height: 311px;
  width: 368px;
}

.rectangle-509274-4 {
  background-color: var(--alto);
  height: 1px;
  width: 360px;
}

.overlap-group3-21 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-40 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-50 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-62 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-62 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-137 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-62 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-138 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-62 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-62 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-41 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1015 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-62 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-101 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-87 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-62 {
  text-decoration: underline;
}
</style>
