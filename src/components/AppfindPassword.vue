<template>
  <div class="container-center-horizontal">
    <div class="findpassword1-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-16">
        <group33618 :frame7706Props="group33618Props.frame7706Props" />
        <div class="text-838 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text838 }}</div>
        <div class="frame-8032">
          <div class="frame-8031">
            <frame8022 :text839="frame80221Props.text839" :frame8016Props="frame80221Props.frame8016Props" />
            <frame8022 :text839="frame80222Props.text839" :frame8016Props="frame80222Props.frame8016Props" />
            <frame8023
              :text843="frame80231Props.text843"
              :text844="frame80231Props.text844"
              :text845="frame80231Props.text845"
            />
            <frame8023
              :text843="frame80232Props.text843"
              :text844="frame80232Props.text844"
              :text845="frame80232Props.text845"
            />
          </div>
          <div class="group-758-8">
            <div class="overlap-group-72">
              <div class="text-849 valign-text-middle pretendard-semi-bold-white-16px">{{ text849 }}</div>
            </div>
          </div>
        </div>
        <div class="group-33619">
          <div class="rectangle-509274"></div>
          <div class="overlap-group3-16">
            <div class="flex-row-30">
              <img class="lezuro_logo_white-2-45" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
              <div class="frame-7500-57">
                <div class="group-729-57">
                  <img
                    class="vector-125"
                    src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                    alt="Vector"
                  />
                </div>
                <div class="group-730-57" :style="{ 'background-image': 'url(' + group730 + ')' }">
                  <img
                    class="vector-126"
                    src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-17.svg"
                    alt="Vector"
                  />
                </div>
                <div class="group-731-57"><img class="group-728-57" :src="group728" alt="Group 728" /></div>
              </div>
            </div>
            <div class="flex-row-31">
              <div class="text-835 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text835 }}</div>
              <img
                class="line-57"
                src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
                alt="Line 3"
              />
              <div class="text-83-1 valign-text-middle pretendard-bold-white-12px">{{ text836 }}</div>
              <img
                class="line-57"
                src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
                alt="Line 4"
              />
              <div class="text-83-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text837 }}</div>
            </div>
            <p class="x-82 pretendard-regular-normal-white-12px">
              <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
              ><span class="span1-57 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame8022 from "./Frame8022";
import Frame8023 from "./Frame8023";
export default {
  name: "AppfindPassword",
  components: {
    Frame7740,
    Group33618,
    Frame8022,
    Frame8023,
  },
  props: [
    "text838",
    "text849",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text835",
    "text836",
    "text837",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "group33618Props",
    "frame80221Props",
    "frame80222Props",
    "frame80231Props",
    "frame80232Props",
  ],
};
</script>

<style>
.findpassword1-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 969px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-16 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 969px;
  position: relative;
  width: 368px;
}

.text-838 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 17px;
  margin-top: 40px;
  position: relative;
  text-align: center;
  width: 235px;
}

.frame-8032 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 8px;
  margin-top: 31px;
  position: relative;
  width: 320px;
}

.frame-8031 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.group-758-8 {
  height: 54px;
  margin-right: -2px;
  position: relative;
  width: 322px;
}

.overlap-group-72 {
  align-items: flex-start;
  background-color: var(--monza);
  display: flex;
  height: 54px;
  min-width: 320px;
  padding: 17px 116px;
}

.text-849 {
  height: 19px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.group-33619 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  min-height: 311px;
  width: 368px;
}

.rectangle-509274 {
  background-color: var(--alto);
  height: 1px;
  width: 360px;
}

.overlap-group3-16 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-30 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-45 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-57 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-57 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-125 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-57 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-126 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-57 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-57 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-31 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-835 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-57 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-83-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-82 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-57 {
  text-decoration: underline;
}
</style>
