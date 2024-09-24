<template>
  <div class="container-center-horizontal">
    <div class="mytournament-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-3">
        <frame7706 :className="frame7706Props.className" />
        <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
        <div class="text-276 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text276 }}</div>
        <frame7950 :text300="frame7950Props.text300" :frame7949Props="frame7950Props.frame7949Props" />
        <div class="frame-8189">
          <frame8186 />
          <frame8186 />
          <div class="frame-818">
            <div class="frame-8183">
              <div class="text-318 valign-text-middle">{{ text318 }}</div>
              <p class="text-3-11 valign-text-middle pretendard-medium-log-cabin-16px">{{ text319 }}</p>
            </div>
            <frame8185 />
          </div>
          <div class="frame-818">
            <div class="frame-8183">
              <div class="text-326 valign-text-middle">{{ text326 }}</div>
              <p class="text-3-11 valign-text-middle pretendard-medium-log-cabin-16px">{{ text327 }}</p>
            </div>
            <frame8185 />
          </div>
        </div>
        <frame8076 />
        <div class="overlap-group3-4">
          <div class="flex-row-6">
            <img class="lezuro_logo_white-2-30" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-45">
              <div class="group-729-45">
                <img
                  class="vector-97"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-45" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-98"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-17.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-45"><img class="group-728-45" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-7">
            <div class="text-297-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text297 }}</div>
            <img
              class="line-45"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-29-1 valign-text-middle pretendard-bold-white-12px">{{ text298 }}</div>
            <img
              class="line-45"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-29-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text299 }}</div>
          </div>
          <p class="x-70 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-45 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame7950 from "./Frame7950";
import Frame8186 from "./Frame8186";
import Frame8185 from "./Frame8185";
import Frame8076 from "./Frame8076";
export default {
  name: "AppMyGameList",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame7950,
    Frame8186,
    Frame8185,
    Frame8076,
  },
  props: [
    "text276",
    "text318",
    "text319",
    "text326",
    "text327",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text297",
    "text298",
    "text299",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame7706Props",
    "frame72912Props",
    "frame7950Props",
  ],
};
</script>

<style>
.mytournament-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1187px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1255px;
  position: relative;
  width: 368px;
}

.text-276 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 9px;
  margin-top: 39px;
  min-width: 63px;
  white-space: nowrap;
}

.frame-8189 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 30px;
  position: relative;
  width: 320px;
}

.frame-818 {
  align-items: flex-start;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  width: 100%;
}

.frame-8183 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
}

.text-318 {
  color: var(--black-2);
  font-family: var(--font-family-pretendard-medium);
  font-size: var(--font-size-xxl);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 55px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 28px;
}

.text-3-11 {
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: -1px;
  position: relative;
  width: 210px;
}

.text-326 {
  color: var(--torea-bay);
  font-family: var(--font-family-pretendard-medium);
  font-size: var(--font-size-xxl);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 55px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 28px;
}

.overlap-group3-4 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 115px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-6 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-30 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-45 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-45 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-97 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-45 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-98 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-45 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-45 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-7 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-297-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-45 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-29-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-70 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-45 {
  text-decoration: underline;
}
</style>
