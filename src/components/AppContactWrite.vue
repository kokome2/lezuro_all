<template>
  <div class="container-center-horizontal">
    <div class="contact-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-7">
        <frame7706 />
        <frame72912 :text149="frame72912Props.text149" />
        <div class="frame-8133-3">
          <div class="text-510 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text510 }}</div>
          <div class="frame-7857-3">
            <frame7766
              :frame7303Props="frame7766Props.frame7303Props"
              :frame7281Props="frame7766Props.frame7281Props"
            />
            <frame7783
              :frame7303Props="frame7783Props.frame7303Props"
              :frame7281Props="frame7783Props.frame7281Props"
            />
            <frame7784 :frame7303Props="frame7784Props.frame7303Props" />
          </div>
          <frame7714
            :frame77131Props="frame7714Props.frame77131Props"
            :frame77132Props="frame7714Props.frame77132Props"
          />
        </div>
        <div class="overlap-group3-7">
          <div class="flex-row-12">
            <img class="lezuro_logo_white-2-34" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-48">
              <div class="group-729-48">
                <img
                  class="vector-107"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-25.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-48" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-108"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-26.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-48"><img class="group-728-48" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-13">
            <div class="text-507 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text507 }}</div>
            <img
              class="line-48"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-50-1 valign-text-middle pretendard-bold-white-12px">{{ text508 }}</div>
            <img
              class="line-48"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-50-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text509 }}</div>
          </div>
          <p class="x-73 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-48 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame7766 from "./Frame7766";
import Frame7783 from "./Frame7783";
import Frame7784 from "./Frame7784";
import Frame7714 from "./Frame7714";
export default {
  name: "AppContactWrite",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame7766,
    Frame7783,
    Frame7784,
    Frame7714,
  },
  props: [
    "text510",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text507",
    "text508",
    "text509",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame72912Props",
    "frame7766Props",
    "frame7783Props",
    "frame7784Props",
    "frame7714Props",
  ],
};
</script>

<style>
.contact-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1547px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-7 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1545px;
  position: relative;
  width: 368px;
}

.frame-8133-3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
  position: relative;
  width: 360px;
}

.text-510 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.frame-7857-3 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 320px;
}

.overlap-group3-7 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-top: 455px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-12 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-34 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-48 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-48 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-107 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-48 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-108 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-48 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-48 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-13 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-507 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-48 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-50-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-73 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-48 {
  text-decoration: underline;
}
</style>
