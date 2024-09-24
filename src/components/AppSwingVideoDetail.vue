<template>
  <div class="container-center-horizontal">
    <div class="swingvideoswrite2-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-1">
        <frame7706 />
        <frame72912 :text149="frame72912Props.text149" />
        <div class="frame-8133-1">
          <div class="text-207-1 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text207 }}</div>
          <div class="frame-7857-1">
            <div class="frame-7766-4">
              <frame7303 :text174="frame73031Props.text174" />
              <frame72812 :frame77722Props="frame728121Props.frame77722Props" />
            </div>
            <div class="frame-7783-4">
              <frame7303 :text174="frame73032Props.text174" />
              <frame72812 :className="frame728122Props.className" :frame77722Props="frame728122Props.frame77722Props" />
            </div>
            <frame7784 :frame7303Props="frame7784Props.frame7303Props" />
          </div>
          <div class="frame-7714-1">
            <frame77132 :text215="frame771321Props.text215" />
            <frame77132 :text215="frame771322Props.text215" :className="frame771322Props.className" />
            <frame77132 :text215="frame771323Props.text215" :className="frame771323Props.className" />
          </div>
        </div>
        <div class="overlap-group3-2">
          <div class="flex-row-2">
            <img class="lezuro_logo_white-2-6" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-43">
              <div class="group-729-43">
                <img
                  class="vector-93"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-43" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-94"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-11.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-43"><img class="group-728-43" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-3">
            <div class="text-204-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text204 }}</div>
            <img
              class="line-43"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-20-4 valign-text-middle pretendard-bold-white-12px">{{ text205 }}</div>
            <img
              class="line-43"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-20-4 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text206 }}</div>
          </div>
          <p class="x-68 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-43 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame7303 from "./Frame7303";
import Frame72812 from "./Frame72812";
import Frame7784 from "./Frame7784";
import Frame77132 from "./Frame77132";
export default {
  name: "AppSwingVideoDetail",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame7303,
    Frame72812,
    Frame7784,
    Frame77132,
  },
  props: [
    "text207",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text204",
    "text205",
    "text206",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame72912Props",
    "frame73031Props",
    "frame728121Props",
    "frame73032Props",
    "frame728122Props",
    "frame7784Props",
    "frame771321Props",
    "frame771322Props",
    "frame771323Props",
  ],
};
</script>

<style>
.swingvideoswrite2-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1181px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1181px;
  position: relative;
  width: 368px;
}

.frame-8133-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
  position: relative;
  width: 360px;
}

.text-207-1 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.frame-7857-1 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 320px;
}

.frame-7766-4 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 10px;
  position: relative;
  width: 100%;
}

.frame-7783-4 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 10px 0px;
  position: relative;
  width: 100%;
}

.frame-7714-1 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 320px;
}

.overlap-group3-2 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-top: 91px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-2 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-6 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-43 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-43 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-93 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-43 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-94 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-43 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-43 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-3 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-204-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-43 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-20-4 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-68 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-43 {
  text-decoration: underline;
}
</style>
