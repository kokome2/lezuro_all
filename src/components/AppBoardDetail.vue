<template>
  <div class="container-center-horizontal">
    <div class="communitydetails-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-26">
        <frame7706 :className="frame7706Props.className" />
        <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
        <div class="text-1232 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1232 }}</div>
        <div class="frame-8140">
          <p class="text-1253 valign-text-middle pretendard-bold-mine-shaft-20px" v-html="text1253"></p>
          <div class="frame-8142 pretendard-regular-normal-granite-gray-16px">
            <div class="text-1254 valign-text-middle">{{ text1254 }}</div>
            <div class="frame-8141">
              <div class="text-125 valign-text-middle">{{ text1255 }}</div>
              <div class="text-125 valign-text-middle">{{ text1256 }}</div>
            </div>
          </div>
        </div>
        <div class="frame-7836-5">
          <img class="rectangle-509279" :src="rectangle509279" alt="Rectangle 509279" />
          <p class="lorem-ipsum-dolor-si-6 valign-text-middle pretendard-light-granite-gray-14px">
            {{ loremIpsumDolorSi }}
          </p>
        </div>
        <frame7837 :text479="frame7837Props.text479" :className="frame7837Props.className" />
        <div class="frame-8176">
          <div class="frame-8143">
            <div class="group-769">
              <div class="frame-7847">
                <div class="text-1261 pretendard-regular-normal-mountain-mist-16px">{{ text1261 }}</div>
              </div>
            </div>
            <frame77143
              :frame771331Props="frame77143Props.frame771331Props"
              :frame771332Props="frame77143Props.frame771332Props"
            />
          </div>
          <div class="frame-8175">
            <frame7307 :text480="frame7307Props.text480" />
            <div class="frame-8145">
              <frame7850
                :frame78442Props="frame78501Props.frame78442Props"
                :frame77143Props="frame78501Props.frame77143Props"
              />
              <frame7850
                :frame78442Props="frame78502Props.frame78442Props"
                :frame77143Props="frame78502Props.frame77143Props"
              />
            </div>
          </div>
        </div>
        <div class="overlap-group3-26">
          <div class="flex-row-50">
            <img class="lezuro_logo_white-2-55" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-67">
              <div class="group-729-67">
                <img
                  class="vector-151"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-67" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-152"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-11.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-67"><img class="group-728-67" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-51">
            <div class="text-1258 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1258 }}</div>
            <img
              class="line-67"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-12-14 valign-text-middle pretendard-bold-white-12px">{{ text1259 }}</div>
            <img
              class="line-67"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-12-14 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1260 }}</div>
          </div>
          <p class="x-92 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-67 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame7837 from "./Frame7837";
import Frame77143 from "./Frame77143";
import Frame7307 from "./Frame7307";
import Frame7850 from "./Frame7850";
export default {
  name: "AppBoardDetail",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame7837,
    Frame77143,
    Frame7307,
    Frame7850,
  },
  props: [
    "text1232",
    "text1253",
    "text1254",
    "text1255",
    "text1256",
    "rectangle509279",
    "loremIpsumDolorSi",
    "text1261",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1258",
    "text1259",
    "text1260",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame7706Props",
    "frame72912Props",
    "frame7837Props",
    "frame77143Props",
    "frame7307Props",
    "frame78501Props",
    "frame78502Props",
  ],
};
</script>

<style>
.communitydetails-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 2439px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-26 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 2439px;
  position: relative;
  width: 368px;
}

.text-1232 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 39px;
  min-width: 78px;
  white-space: nowrap;
}

.frame-8140 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 8px;
  margin-top: 31px;
  position: relative;
  width: 320px;
}

.text-1253 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.frame-8142 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.text-1254 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 23px;
  margin-top: -1px;
  position: relative;
}

.frame-8141 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
}

.text-125 {
  letter-spacing: 0;
  line-height: 23px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7836-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 8px;
  margin-top: 30px;
  position: relative;
  width: 320px;
}

.rectangle-509279 {
  align-self: stretch;
  height: 400px;
  object-fit: cover;
  position: relative;
  width: 100%;
}

.lorem-ipsum-dolor-si-6 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 20px;
  position: relative;
}

.frame-8176 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-right: 8px;
  margin-top: 42px;
  position: relative;
  width: 320px;
}

.frame-8143 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.group-769 {
  align-self: stretch;
  height: 150px;
  position: relative;
  width: 100%;
}

.frame-7847 {
  align-items: flex-start;
  background-color: var(--hint-of-red);
  border: 1px solid;
  border-color: var(--celeste);
  display: flex;
  gap: 10px;
  height: 150px;
  padding: 20px;
  position: relative;
  width: 320px;
}

.text-1261 {
  letter-spacing: -0.64px;
  line-height: 10px;
  margin-top: -1px;
  opacity: 0.5;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-8175 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-8145 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}

.overlap-group3-26 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 197px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-50 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-55 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-67 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-67 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-151 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-67 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-152 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-67 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-67 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-51 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1258 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-67 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-12-14 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-92 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-67 {
  text-decoration: underline;
}
</style>
