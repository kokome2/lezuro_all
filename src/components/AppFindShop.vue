<template>
  <div class="container-center-horizontal">
    <div class="findvenue-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-38">
        <frame7706 />
        <frame72912 :text149="frame72912Props.text149" />
        <div class="text-1938 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1938 }}</div>
        <div class="frame-7950-5">
          <div class="frame-7948-9">
            <frame7672 :text1571="frame76721Props.text1571" :className="frame76721Props.className" />
            <frame7672 :text1571="frame76722Props.text1571" :className="frame76722Props.className" />
          </div>
          <frame7949 :text301="frame7949Props.text301" />
        </div>
        <div class="rectangle-509268"></div>
        <div class="frame-8196">
          <frame8194 />
          <frame8194 />
          <frame8194 />
          <frame8194 />
          <frame8194 />
          <frame8194 />
          <frame8194 />
        </div>
        <div class="rectangle-509274-13"></div>
        <div class="overlap-group3-36">
          <div class="flex-row-84">
            <img class="lezuro_logo_white-2-72" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-84">
              <div class="group-729-84">
                <img
                  class="vector-187"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-84" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-188"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-17.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-84"><img class="group-728-84" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-85">
            <div class="text-1997 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1997 }}</div>
            <img
              class="line-84"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-1998 valign-text-middle pretendard-bold-white-12px">{{ text1998 }}</div>
            <img
              class="line-84"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-1999 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1999 }}</div>
          </div>
          <p class="x-109 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-84 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame8194 from "./Frame8194";
export default {
  name: "AppFindShop",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame7672,
    Frame7949,
    Frame8194,
  },
  props: [
    "text1938",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1997",
    "text1998",
    "text1999",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame72912Props",
    "frame76721Props",
    "frame76722Props",
    "frame7949Props",
  ],
};
</script>

<style>
.findvenue-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-38 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 2704px;
  position: relative;
  width: 360px;
}

.text-1938 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 1px;
  margin-top: 39px;
  min-width: 63px;
  white-space: nowrap;
}

.frame-7950-5 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 31px;
  position: relative;
  width: 320px;
}

.frame-7948-9 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.rectangle-509268 {
  background-color: var(--alto);
  height: 1px;
  margin-top: 20px;
  width: 360px;
}

.frame-8196 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 360px;
}

.rectangle-509274-13 {
  background-color: var(--alto);
  height: 1px;
  margin-top: 92px;
  width: 360px;
}

.overlap-group3-36 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  min-height: 605px;
  padding: 50px 20px;
  width: 360px;
}

.flex-row-84 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  min-width: 320px;
}

.lezuro_logo_white-2-72 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-84 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-84 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-187 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-84 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-188 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-84 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-84 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-85 {
  align-items: flex-start;
  display: flex;
  height: 9px;
  margin-left: 0.04px;
  margin-top: 29px;
  min-width: 248px;
}

.text-1997 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-84 {
  align-self: flex-end;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-1998 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.text-1999 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  white-space: nowrap;
}

.x-109 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 19px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-84 {
  text-decoration: underline;
}
</style>
