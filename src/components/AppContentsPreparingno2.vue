<template>
  <div class="container-center-horizontal">
    <div class="gameguide-1 screen">
      <group33618 :className="group33618Props.className" :frame7706Props="group33618Props.frame7706Props" />
      <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
      <frame7812 />
      <div class="group-33642-1">
        <div class="rectangle-509274-9"></div>
        <div class="overlap-group-83">
          <div class="flex-row-70">
            <img class="lezuro_logo_white-2-65" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-77">
              <div class="group-729-77">
                <img
                  class="vector-172"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-77" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-173"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-11.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-77"><img class="group-728-77" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-71">
            <div class="text-1627 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1627 }}</div>
            <img
              class="line-77"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-162-1 valign-text-middle pretendard-bold-white-12px">{{ text1628 }}</div>
            <img
              class="line-77"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-162-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1629 }}</div>
          </div>
          <p class="x-102 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-77 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
            ><span class="pretendard-regular-normal-white-12px">{{ spanText3 }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Group33618 from "./Group33618";
import Frame72912 from "./Frame72912";
import Frame7812 from "./Frame7812";
export default {
  name: "AppContentsPreparingno2",
  components: {
    Group33618,
    Frame72912,
    Frame7812,
  },
  props: [
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1627",
    "text1628",
    "text1629",
    "spanText1",
    "spanText2",
    "spanText3",
    "group33618Props",
    "frame72912Props",
  ],
};
</script>

<style>
.gameguide-1 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 1043px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.group-33642-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-top: 206px;
  min-height: 320px;
  width: 368px;
}

.rectangle-509274-9 {
  background-color: var(--alto);
  height: 1px;
  width: 360px;
}

.overlap-group-83 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  min-height: 319px;
  padding: 50px 20px;
  width: 360px;
}

.flex-row-70 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  min-width: 320px;
}

.lezuro_logo_white-2-65 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-77 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-77 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-172 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-77 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-173 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-77 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-77 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-71 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1627 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-77 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-162-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-102 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-77 {
  text-decoration: underline;
}
</style>
