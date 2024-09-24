<template>
  <div class="container-center-horizontal">
    <div class="signup1-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-22">
        <group33618 :frame7706Props="group33618Props.frame7706Props" />
        <div class="text-1037 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1037 }}</div>
        <div class="frame-8021">
          <frame8016 :text840="frame8016Props.text840" />
          <group7584 :text1062="group7584Props.text1062" />
        </div>
        <div class="rectangle-509274-5"></div>
        <div class="overlap-group3-22">
          <div class="flex-row-42">
            <img class="lezuro_logo_white-2-51" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-63">
              <div class="group-729-63">
                <img
                  class="vector-141"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-63" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-142"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-17.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-63"><img class="group-728-63" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-43">
            <div class="text-1058 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1058 }}</div>
            <img
              class="line-63"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-10-10 valign-text-middle pretendard-bold-white-12px">{{ text1059 }}</div>
            <img
              class="line-63"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-10-10 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1060 }}</div>
          </div>
          <p class="x-88 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-63 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
            ><span class="pretendard-regular-normal-white-12px">{{ spanText3 }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7740 from "./Frame7740";
import Group33618 from "./Group33618";
import Frame8016 from "./Frame8016";
import Group7584 from "./Group7584";
export default {
  name: "AppPhoneCertification",
  components: {
    Frame7740,
    Group33618,
    Frame8016,
    Group7584,
  },
  props: [
    "text1037",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1058",
    "text1059",
    "text1060",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "group33618Props",
    "frame8016Props",
    "group7584Props",
  ],
};
</script>

<style>
.signup1-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 800px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-22 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 803px;
  position: relative;
  width: 368px;
}

.text-1037 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 7px;
  margin-top: 40px;
  position: relative;
  text-align: center;
  width: 235px;
}

.frame-8021 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 8px;
  margin-top: 31px;
  position: relative;
  width: 320px;
}

.rectangle-509274-5 {
  background-color: var(--alto);
  height: 1px;
  margin-right: 8px;
  margin-top: 232px;
  width: 360px;
}

.overlap-group3-22 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-42 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-51 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-63 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-63 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-141 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-63 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-142 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-63 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-63 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-43 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1058 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-63 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-10-10 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-88 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-63 {
  text-decoration: underline;
}
</style>
