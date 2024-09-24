<template>
  <div class="container-center-horizontal">
    <div class="findid2-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-17">
        <group33618 :frame7706Props="group33618Props.frame7706Props" />
        <div class="text-873 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text873 }}</div>
        <div class="park222 valign-text-middle pretendard-medium-mine-shaft-20px" v-html="park222"></div>
        <group7583 :text874="group7583Props.text874" />
        <div class="group-33619-1">
          <div class="rectangle-509274-1"></div>
          <div class="overlap-group3-17">
            <div class="flex-row-32">
              <img class="lezuro_logo_white-2-46" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
              <div class="frame-7500-58">
                <div class="group-729-58">
                  <img
                    class="vector-127"
                    src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                    alt="Vector"
                  />
                </div>
                <div class="group-730-58" :style="{ 'background-image': 'url(' + group730 + ')' }">
                  <img
                    class="vector-128"
                    src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-17.svg"
                    alt="Vector"
                  />
                </div>
                <div class="group-731-58"><img class="group-728-58" :src="group728" alt="Group 728" /></div>
              </div>
            </div>
            <div class="flex-row-33">
              <div class="text-870 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text870 }}</div>
              <img
                class="line-58"
                src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
                alt="Line 3"
              />
              <div class="text-87-1 valign-text-middle pretendard-bold-white-12px">{{ text871 }}</div>
              <img
                class="line-58"
                src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
                alt="Line 4"
              />
              <div class="text-87-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text872 }}</div>
            </div>
            <p class="x-83 pretendard-regular-normal-white-12px">
              <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
              ><span class="span1-58 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Group7583 from "./Group7583";
export default {
  name: "AppFindId",
  components: {
    Frame7740,
    Group33618,
    Group7583,
  },
  props: [
    "text873",
    "park222",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text870",
    "text871",
    "text872",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "group33618Props",
    "group7583Props",
  ],
};
</script>

<style>
.findid2-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 800px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-17 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 800px;
  position: relative;
  width: 368px;
}

.text-873 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 17px;
  margin-top: 40px;
  position: relative;
  text-align: center;
  width: 235px;
}

.park222 {
  height: 48px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 50px;
  min-width: 200px;
  text-align: center;
}

.group-33619-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 175px;
  min-height: 311px;
  width: 368px;
}

.rectangle-509274-1 {
  background-color: var(--alto);
  height: 1px;
  width: 360px;
}

.overlap-group3-17 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-32 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-46 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-58 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-58 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-127 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-58 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-128 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-58 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-58 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-33 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-870 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-58 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-87-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-83 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-58 {
  text-decoration: underline;
}
</style>
