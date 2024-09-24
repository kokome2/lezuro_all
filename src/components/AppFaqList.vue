<template>
  <div class="container-center-horizontal">
    <div class="faq-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-13">
        <frame7706 />
        <frame72912 :text149="frame72912Props.text149" />
        <div class="frame-8133-8">
          <div class="faq-2 valign-text-middle pretendard-bold-mine-shaft-18px">{{ faq }}</div>
          <frame7950
            :text300="frame7950Props.text300"
            :className="frame7950Props.className"
            :frame7949Props="frame7950Props.frame7949Props"
          />
          <div class="frame-7867">
            <div class="frame-7865">
              <div class="frame-7860">
                <div class="text-72 valign-text-middle pretendard-bold-log-cabin-14px">{{ text720 }}</div>
              </div>
              <frame7861 :text721="frame78611Props.text721" />
              <frame7861 :text721="frame78612Props.text721" />
              <frame7861 :text721="frame78613Props.text721" />
              <frame7861 :text721="frame78614Props.text721" />
              <frame7865 :text725="frame78651Props.text725" />
              <frame7865 :text725="frame78652Props.text725" />
              <frame7861 :text721="frame78615Props.text721" />
            </div>
          </div>
          <div class="frame-7877">
            <div class="frame-7876">
              <div class="frame-7870">
                <div class="frame-8139">
                  <div class="text-72 valign-text-middle pretendard-bold-black-16px">{{ text728 }}</div>
                  <p class="text-729 valign-text-middle pretendard-regular-normal-log-cabin-16px">{{ text729 }}</p>
                  <img
                    class="vector-3-24"
                    src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-3-15.svg"
                    alt="Vector 3"
                  />
                </div>
              </div>
              <div class="frame-7872">
                <div class="frame-7869">
                  <div class="frame-7868">
                    <p class="text-730 valign-text-middle pretendard-regular-normal-granite-gray-16px">{{ text730 }}</p>
                  </div>
                </div>
              </div>
            </div>
            <frame7876 />
            <frame7877 />
            <frame7877 />
            <frame7877 />
            <frame7876 />
            <frame7876 />
          </div>
        </div>
        <div class="overlap-group3-13">
          <div class="flex-row-24">
            <img class="lezuro_logo_white-2-42" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-54">
              <div class="group-729-54">
                <img
                  class="vector-119"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-25.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-54" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-120"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-26.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-54"><img class="group-728-54" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-25">
            <div class="text-715 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text715 }}</div>
            <img
              class="line-54"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-71-1 valign-text-middle pretendard-bold-white-12px">{{ text716 }}</div>
            <img
              class="line-54"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-71-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text717 }}</div>
          </div>
          <p class="x-79 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-54 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame7861 from "./Frame7861";
import Frame7865 from "./Frame7865";
import Frame7876 from "./Frame7876";
import Frame7877 from "./Frame7877";
export default {
  name: "AppFaqList",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame7950,
    Frame7861,
    Frame7865,
    Frame7876,
    Frame7877,
  },
  props: [
    "faq",
    "text720",
    "text728",
    "text729",
    "text730",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text715",
    "text716",
    "text717",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame72912Props",
    "frame7950Props",
    "frame78611Props",
    "frame78612Props",
    "frame78613Props",
    "frame78614Props",
    "frame78651Props",
    "frame78652Props",
    "frame78615Props",
  ],
};
</script>

<style>
.faq-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1547px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-13 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1545px;
  position: relative;
  width: 368px;
}

.frame-8133-8 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
  position: relative;
  width: 360px;
}

.faq-2 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.frame-7867 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 6px;
  position: relative;
  width: 320px;
}

.frame-7865 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 6px 6px;
  position: relative;
  width: 100%;
}

.frame-7860 {
  align-items: center;
  background-color: var(--monza-2);
  border: 1px solid;
  border-color: var(--monza);
  border-radius: 10px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  padding: 20px;
  position: relative;
}

.text-72 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.frame-7877 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 320px;
}

.frame-7876 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.frame-7870 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto);
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  position: relative;
  width: 100%;
}

.frame-8139 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 280px;
}

.text-729 {
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: -1px;
  position: relative;
  width: 220px;
}

.vector-3-24 {
  height: 7.41px;
  margin-top: -1.41px;
  position: relative;
  width: 12px;
}

.frame-7872 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--cultured-pearl);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 0px 0px 10px 10px;
  border-right-style: solid;
  border-right-width: 1px;
  display: flex;
  flex: 0 0 auto;
  gap: 903px;
  padding: 20px;
  position: relative;
  width: 100%;
}

.frame-7869 {
  align-items: flex-start;
  display: flex;
  gap: 30px;
  position: relative;
  width: 280px;
}

.frame-7868 {
  align-items: flex-start;
  display: flex;
  gap: 10px;
  position: relative;
  width: 280px;
}

.text-730 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 280px;
}

.overlap-group3-13 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-top: 114px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-24 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-42 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-54 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-54 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-119 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-54 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-120 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-54 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-54 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-25 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-715 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-54 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-71-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-79 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-54 {
  text-decoration: underline;
}
</style>
