<template>
  <div class="container-center-horizontal">
    <div class="login-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-23">
        <group33618 :frame7706Props="group33618Props.frame7706Props" />
        <div class="frame-8014">
          <div class="text-1107 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1107 }}</div>
          <p class="text-1108 valign-text-middle pretendard-regular-normal-granite-gray-14px">{{ text1108 }}</p>
        </div>
        <div class="frame-8020">
          <div class="frame-8018">
            <div class="frame-8017">
              <div class="frame-8016-11">
                <div class="frame-801">
                  <frame7611 :text1132="frame76111Props.text1132" :text1133="frame76111Props.text1133" />
                  <frame7611 :text1132="frame76112Props.text1132" :text1133="frame76112Props.text1133" />
                </div>
                <frame7610 />
              </div>
              <group7584 :text1062="group7584Props.text1062" :className="group7584Props.className" />
            </div>
            <frame7616 />
          </div>
          <div class="frame-801">
            <div class="frame-7618">
              <div class="text-1141 valign-text-middle pretendard-semi-bold-black-16px">{{ text1141 }}</div>
            </div>
            <div class="frame-7619">
              <div class="text-1142 valign-text-middle pretendard-semi-bold-white-16px">{{ text1142 }}</div>
            </div>
          </div>
        </div>
        <div class="rectangle-509274-6"></div>
        <div class="overlap-group3-23">
          <div class="flex-row-44">
            <img class="lezuro_logo_white-2-52" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-64">
              <div class="group-729-64">
                <img
                  class="vector-145"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-64" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-146"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-17.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-64"><img class="group-728-64" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-45">
            <div class="text-1129 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1129 }}</div>
            <img
              class="line-64"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-113-1 valign-text-middle pretendard-bold-white-12px">{{ text1130 }}</div>
            <img
              class="line-64"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-113-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1131 }}</div>
          </div>
          <p class="x-89 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-64 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame7611 from "./Frame7611";
import Frame7610 from "./Frame7610";
import Group7584 from "./Group7584";
import Frame7616 from "./Frame7616";
export default {
  name: "AppLogin",
  components: {
    Frame7740,
    Group33618,
    Frame7611,
    Frame7610,
    Group7584,
    Frame7616,
  },
  props: [
    "text1107",
    "text1108",
    "text1141",
    "text1142",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1129",
    "text1130",
    "text1131",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "group33618Props",
    "frame76111Props",
    "frame76112Props",
    "group7584Props",
  ],
};
</script>

<style>
.login-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1021px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-23 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1021px;
  position: relative;
  width: 368px;
}

.frame-8014 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-right: 5px;
  margin-top: 81px;
  position: relative;
  width: 235px;
}

.text-1107 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.text-1108 {
  align-self: stretch;
  letter-spacing: -0.7px;
  line-height: normal;
  position: relative;
}

.frame-8020 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-right: 6px;
  margin-top: 30px;
  position: relative;
  width: 320px;
}

.frame-8018 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 14px;
  position: relative;
  width: 100%;
}

.frame-8017 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-8016-11 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.frame-801 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.frame-7618 {
  align-items: center;
  align-self: stretch;
  background-color: var(--lemon);
  display: flex;
  gap: 10px;
  height: 54px;
  justify-content: center;
  padding: 16px 185px;
  position: relative;
  width: 100%;
}

.text-1141 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: -82.5px;
  margin-right: -82.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7619 {
  align-items: center;
  align-self: stretch;
  background-color: var(--malachite);
  display: flex;
  gap: 10px;
  height: 54px;
  justify-content: center;
  padding: 16px 185px;
  position: relative;
  width: 100%;
}

.text-1142 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: -84.5px;
  margin-right: -84.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.rectangle-509274-6 {
  background-color: var(--alto);
  height: 1px;
  margin-right: 8px;
  margin-top: 84px;
  width: 360px;
}

.overlap-group3-23 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-44 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-52 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-64 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-64 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-145 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-64 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-146 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-64 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-64 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-45 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1129 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-64 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-113-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-89 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-64 {
  text-decoration: underline;
}
</style>
