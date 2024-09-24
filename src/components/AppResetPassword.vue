<template>
  <div class="container-center-horizontal">
    <div class="resetpassword2-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-18">
        <group33618 :frame7706Props="group33618Props.frame7706Props" />
        <div class="text-898 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text898 }}</div>
        <div class="frame-8036">
          <div class="frame-803">
            <frame8033 :text899="frame80331Props.text899" :text900="frame80331Props.text900" />
            <frame8033 :text899="frame80332Props.text899" :text900="frame80332Props.text900" />
          </div>
          <div class="frame-803">
            <div class="group-758-11">
              <div class="overlap-group-75">
                <div class="text-903 valign-text-middle pretendard-semi-bold-white-16px">{{ text903 }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="group-33619-2">
          <div class="rectangle-509274-2"></div>
          <div class="overlap-group3-18">
            <div class="flex-row-34">
              <img class="lezuro_logo_white-2-47" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
              <div class="frame-7500-59">
                <div class="group-729-59">
                  <img
                    class="vector-129"
                    src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                    alt="Vector"
                  />
                </div>
                <div class="group-730-59" :style="{ 'background-image': 'url(' + group730 + ')' }">
                  <img
                    class="vector-130"
                    src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-17.svg"
                    alt="Vector"
                  />
                </div>
                <div class="group-731-59"><img class="group-728-59" :src="group728" alt="Group 728" /></div>
              </div>
            </div>
            <div class="flex-row-35">
              <div class="text-895 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text895 }}</div>
              <img
                class="line-59"
                src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
                alt="Line 3"
              />
              <div class="text-89-1 valign-text-middle pretendard-bold-white-12px">{{ text896 }}</div>
              <img
                class="line-59"
                src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
                alt="Line 4"
              />
              <div class="text-89-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text897 }}</div>
            </div>
            <p class="x-84 pretendard-regular-normal-white-12px">
              <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
              ><span class="span1-59 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame8033 from "./Frame8033";
export default {
  name: "AppResetPassword",
  components: {
    Frame7740,
    Group33618,
    Frame8033,
  },
  props: [
    "text898",
    "text903",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text895",
    "text896",
    "text897",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "group33618Props",
    "frame80331Props",
    "frame80332Props",
  ],
};
</script>

<style>
.resetpassword2-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 800px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-18 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 800px;
  position: relative;
  width: 368px;
}

.text-898 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 17px;
  margin-top: 40px;
  min-width: 145px;
  position: relative;
  text-align: center;
  white-space: nowrap;
}

.frame-8036 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 9px;
  margin-top: 31px;
  position: relative;
  width: 325px;
}

.frame-803 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.group-758-11 {
  align-self: stretch;
  height: 54px;
  margin-right: -2px;
  position: relative;
  width: 100%;
}

.overlap-group-75 {
  align-items: flex-start;
  background-color: var(--monza);
  display: flex;
  height: 54px;
  min-width: 325px;
  padding: 17px 124.9px;
}

.text-903 {
  height: 19px;
  letter-spacing: 0;
  line-height: normal;
  width: 74px;
}

.group-33619-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 95px;
  min-height: 311px;
  width: 368px;
}

.rectangle-509274-2 {
  background-color: var(--alto);
  height: 1px;
  width: 360px;
}

.overlap-group3-18 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-34 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-47 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-59 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-59 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-129 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-59 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-130 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-59 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-59 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-35 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-895 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-59 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-89-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-84 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-59 {
  text-decoration: underline;
}
</style>
