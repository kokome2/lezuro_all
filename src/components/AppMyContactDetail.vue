<template>
  <div class="container-center-horizontal">
    <div class="contactview-2 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-6">
        <frame7706 :className="frame7706Props.className" />
        <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
        <div class="frame-8136">
          <div class="text-472 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text472 }}</div>
          <frame8040 :frame76732Props="frame8040Props.frame76732Props" />
          <div class="frame-7914-1">
            <div class="frame-7754-1">
              <h1 class="text-476 valign-text-middle pretendard-bold-log-cabin-24px">{{ text476 }}</h1>
              <div class="frame-7835-1">
                <div class="frame-8123 pretendard-regular-normal-mountain-mist-14px">
                  <div class="frame-8123-item valign-text-middle">{{ date }}</div>
                  <div class="rectangle-509276-1"></div>
                  <div class="frame-8123-item valign-text-middle">{{ text477 }}</div>
                </div>
                <frame7731 />
              </div>
            </div>
            <div class="frame-7916-1">
              <div class="frame-7915-1">
                <frame7836 />
                <frame7837 :text479="frame7837Props.text479" />
              </div>
              <div class="frame-7911-1">
                <div class="frame-79-1">
                  <frame7307 :text480="frame7307Props.text480" />
                  <div class="frame-79-1">
                    <div class="frame-7850-1">
                      <frame7844 :group736="frame7844Props.group736" />
                      <div class="rectangle-509280-1"></div>
                      <p class="text-482 pretendard-regular-normal-granite-gray-18px" v-html="text482"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overlap-group3-6">
          <div class="flex-row-10">
            <img class="lezuro_logo_white-2-33" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-47">
              <div class="group-729-47">
                <img
                  class="vector-105"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-47" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-106"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-24.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-47"><img class="group-728-47" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-11">
            <div class="text-483 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text483 }}</div>
            <img
              class="line-47"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-48-1 valign-text-middle pretendard-bold-white-12px">{{ text484 }}</div>
            <img
              class="line-47"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-48-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text485 }}</div>
          </div>
          <p class="x-72 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-47 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame8040 from "./Frame8040";
import Frame7731 from "./Frame7731";
import Frame7836 from "./Frame7836";
import Frame7837 from "./Frame7837";
import Frame7307 from "./Frame7307";
import Frame7844 from "./Frame7844";
export default {
  name: "AppMyContactDetail",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame8040,
    Frame7731,
    Frame7836,
    Frame7837,
    Frame7307,
    Frame7844,
  },
  props: [
    "text472",
    "text476",
    "date",
    "text477",
    "text482",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text483",
    "text484",
    "text485",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame7706Props",
    "frame72912Props",
    "frame8040Props",
    "frame7837Props",
    "frame7307Props",
    "frame7844Props",
  ],
};
</script>

<style>
.contactview-2 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1805px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-6 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1805px;
  position: relative;
  width: 368px;
}

.frame-8136 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-right: 8px;
  margin-top: 40px;
  position: relative;
  width: 320px;
}

.text-472 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.frame-7914-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 1224px;
  position: relative;
  width: 100%;
}

.frame-7754-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 5px;
  position: relative;
  width: 100%;
}

.text-476 {
  height: 35px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 320px;
}

.frame-7835-1 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  position: relative;
}

.frame-8123 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.frame-8123-item {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.rectangle-509276-1 {
  background-color: var(--mountain-mist);
  height: 11px;
  position: relative;
  width: 1px;
}

.frame-7916-1 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 320px;
}

.frame-7915-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-7911-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-79-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}

.frame-7850-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 0px 0px 50px;
  position: relative;
  width: 100%;
}

.rectangle-509280-1 {
  align-self: stretch;
  background-color: var(--hint-of-red);
  height: 200px;
  position: relative;
  width: 100%;
}

.text-482 {
  left: 20px;
  letter-spacing: -0.72px;
  line-height: 32px;
  position: absolute;
  top: 81px;
  width: 278px;
}

.overlap-group3-6 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-10 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-33 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-47 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-47 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-105 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-47 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-106 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-47 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-47 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-11 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-483 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-47 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-48-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-72 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-47 {
  text-decoration: underline;
}
</style>
