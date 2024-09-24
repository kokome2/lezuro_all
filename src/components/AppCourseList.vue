<template>
  <div class="container-center-horizontal">
    <div class="courses-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-32">
        <frame7706 :className="frame7706Props.className" />
        <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
        <div class="text-1517 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1517 }}</div>
        <div class="frame-7950-4">
          <div class="frame-7948-8">
            <frame7672 :text1571="frame76721Props.text1571" />
            <frame7672 :text1571="frame76722Props.text1571" :className="frame76722Props.className" />
          </div>
          <frame7949 :text301="frame7949Props.text301" />
        </div>
        <div class="frame-8081-1">
          <group33633 />
          <group33633 />
          <group33633 />
          <group33633 />
          <group33633 />
          <group33633 />
        </div>
        <frame8076 :className="frame8076Props.className" />
        <div class="overlap-group3-32">
          <div class="flex-row-64">
            <img class="lezuro_logo_white-2-62" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-74">
              <div class="group-729-74">
                <img
                  class="vector-165"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-74" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-166"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-11.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-74"><img class="group-728-74" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-65">
            <div class="text-1538 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1538 }}</div>
            <img
              class="line-74"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-15-9 valign-text-middle pretendard-bold-white-12px">{{ text1539 }}</div>
            <img
              class="line-74"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-15-9 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1540 }}</div>
          </div>
          <p class="x-99 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-74 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame7672 from "./Frame7672";
import Frame7949 from "./Frame7949";
import Group33633 from "./Group33633";
import Frame8076 from "./Frame8076";
export default {
  name: "AppCourseList",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame7672,
    Frame7949,
    Group33633,
    Frame8076,
  },
  props: [
    "text1517",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1538",
    "text1539",
    "text1540",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame7706Props",
    "frame72912Props",
    "frame76721Props",
    "frame76722Props",
    "frame7949Props",
    "frame8076Props",
  ],
};
</script>

<style>
.courses-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1691px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-32 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1691px;
  position: relative;
  width: 368px;
}

.text-1517 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 39px;
  min-width: 32px;
  white-space: nowrap;
}

.frame-7950-4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-right: 8px;
  margin-top: 31px;
  position: relative;
  width: 320px;
}

.frame-7948-8 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.frame-8081-1 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  justify-content: space-between;
  margin-right: 8px;
  margin-top: 30px;
  position: relative;
  width: 320px;
}

.overlap-group3-32 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 160px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-64 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-62 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-74 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-74 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-165 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-74 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-166 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-74 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-74 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-65 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1538 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-74 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-15-9 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-99 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-74 {
  text-decoration: underline;
}
</style>
