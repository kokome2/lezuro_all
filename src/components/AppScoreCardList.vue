<template>
  <div class="container-center-horizontal">
    <div class="scorecard-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-36">
        <frame7706 :className="frame7706Props.className" />
        <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
        <div class="text-1633 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1633 }}</div>
        <div class="frame-7638">
          <div class="text-1654 valign-text-middle pretendard-medium-white-16px">{{ text1654 }}</div>
          <frame7637 />
        </div>
        <div class="frame-803-2">
          <div class="text-1659 valign-text-middle pretendard-medium-log-cabin-18px">{{ text1659 }}</div>
          <div class="group-33623">
            <div class="flex-col-35">
              <div class="text-container pretendard-medium-log-cabin-16px">
                <div class="text-166 valign-text-middle">{{ text1661 }}</div>
                <div class="text-166-1 valign-text-middle">{{ text1662 }}</div>
                <div class="text-166-2 valign-text-middle">{{ text1663 }}</div>
              </div>
              <div class="overlap-group1-54 pretendard-regular-normal-black-14px">
                <div class="text-1660" v-html="text1660"></div>
                <div class="x50-1008m-2109m valign-text-middle" v-html="x501008M2109M1"></div>
                <div class="x64xk-1523m-2440m valign-text-middle" v-html="x64Xk1523M2440M1"></div>
                <div class="rectangle-509289"></div>
                <div class="rectangle-509290"></div>
              </div>
              <div class="rectangle-509291"></div>
            </div>
          </div>
        </div>
        <div class="frame-803-2">
          <div class="frame-8039">
            <div class="text-1664 valign-text-middle pretendard-medium-log-cabin-18px">{{ text1664 }}</div>
            <frame7288 />
          </div>
          <div class="group-33623">
            <div class="flex-col-35">
              <div class="text-container pretendard-medium-log-cabin-16px">
                <div class="text-166 valign-text-middle">{{ text1667 }}</div>
                <div class="text-166-1 valign-text-middle">{{ text1668 }}</div>
                <div class="text-166-2 valign-text-middle">{{ text1669 }}</div>
              </div>
              <div class="overlap-group1-54 pretendard-regular-normal-black-14px">
                <div class="text-1666" v-html="text1666"></div>
                <div class="x50-1008m-2109m valign-text-middle">{{ x501008M2109M2 }}</div>
                <div class="x64xk-1523m-2440m valign-text-middle">{{ x64Xk1523M2440M2 }}</div>
                <div class="rectangle-509289"></div>
                <div class="rectangle-509290"></div>
              </div>
              <div class="rectangle-509291"></div>
            </div>
          </div>
        </div>
        <div class="frame-8040-11">
          <frame76714 :text926="frame76714Props.text926" :className="frame76714Props.className" />
          <frame76732 :text473="frame76732Props.text473" :className="frame76732Props.className" />
          <frame76746 :text1399="frame76746Props.text1399" />
        </div>
        <div class="frame-8051">
          <frame8047 />
          <div class="rectangle-50929"></div>
          <frame8047 />
          <div class="rectangle-50929"></div>
          <frame8047 />
          <div class="rectangle-50929"></div>
          <frame8047 />
          <div class="rectangle-50929"></div>
        </div>
        <frame8076 :className="frame8076Props.className" />
        <div class="overlap-group3-34">
          <div class="flex-row-72">
            <img class="lezuro_logo_white-2-66" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-78">
              <div class="group-729-78">
                <img
                  class="vector-174"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-78" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-175"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-17.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-78"><img class="group-728-78" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-73">
            <div class="text-1698 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1698 }}</div>
            <img
              class="line-78"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-1-14 valign-text-middle pretendard-bold-white-12px">{{ text1699 }}</div>
            <img
              class="line-78"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-1-14 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1700 }}</div>
          </div>
          <p class="x-103 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-78 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame7637 from "./Frame7637";
import Frame7288 from "./Frame7288";
import Frame76714 from "./Frame76714";
import Frame76732 from "./Frame76732";
import Frame76746 from "./Frame76746";
import Frame8047 from "./Frame8047";
import Frame8076 from "./Frame8076";
export default {
  name: "AppScoreCardList",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame7637,
    Frame7288,
    Frame76714,
    Frame76732,
    Frame76746,
    Frame8047,
    Frame8076,
  },
  props: [
    "text1633",
    "text1654",
    "text1659",
    "text1661",
    "text1662",
    "text1663",
    "text1660",
    "x501008M2109M1",
    "x64Xk1523M2440M1",
    "text1664",
    "text1667",
    "text1668",
    "text1669",
    "text1666",
    "x501008M2109M2",
    "x64Xk1523M2440M2",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1698",
    "text1699",
    "text1700",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame7706Props",
    "frame72912Props",
    "frame76714Props",
    "frame76732Props",
    "frame76746Props",
    "frame8076Props",
  ],
};
</script>

<style>
.scorecard-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1967px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-36 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1967px;
  position: relative;
  width: 368px;
}

.text-1633 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 39px;
  min-width: 82px;
  white-space: nowrap;
}

.frame-7638 {
  align-items: center;
  background-color: var(--greygrey-900);
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin-right: 8px;
  margin-top: 31px;
  padding: 0px 20px;
  position: relative;
  width: 320px;
}

.text-1654 {
  letter-spacing: -0.8px;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-803-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-right: 8px;
  margin-top: 40px;
  position: relative;
  width: 320px;
}

.text-1659 {
  align-self: stretch;
  letter-spacing: -0.9px;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.group-33623 {
  height: 201px;
  margin-right: -6px;
  position: relative;
  width: 326px;
}

.flex-col-35 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 201px;
}

.text-container {
  align-items: flex-end;
  background-color: var(--cultured-pearl);
  display: flex;
  height: 50px;
  justify-content: flex-end;
  min-width: 320px;
  padding: 19px 26px;
}

.text-166 {
  height: 11px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 28px;
  white-space: nowrap;
}

.text-166-1 {
  height: 11px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 69px;
  min-width: 42px;
  white-space: nowrap;
}

.text-166-2 {
  height: 11px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 57px;
  min-width: 56px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group1-54 {
  height: 110px;
  position: relative;
  width: 320px;
}

.text-1660 {
  left: 18px;
  letter-spacing: 0;
  line-height: 50px;
  position: absolute;
  text-align: center;
  top: 0;
}

.x50-1008m-2109m {
  height: 110px;
  left: 136px;
  letter-spacing: 0;
  line-height: 50px;
  position: absolute;
  text-align: center;
  top: 0;
}

.x64xk-1523m-2440m {
  height: 110px;
  left: 241px;
  letter-spacing: 0;
  line-height: 50px;
  position: absolute;
  text-align: center;
  top: 0;
}

.rectangle-509289 {
  background-color: var(--alto);
  height: 1px;
  left: 0;
  position: absolute;
  top: 30px;
  width: 320px;
}

.rectangle-509290 {
  background-color: var(--alto);
  height: 1px;
  left: 0;
  position: absolute;
  top: 80px;
  width: 320px;
}

.rectangle-509291 {
  background-color: var(--alto);
  height: 1px;
  width: 320px;
}

.frame-8039 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.text-1664 {
  letter-spacing: -0.9px;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.text-1666 {
  left: 32px;
  letter-spacing: 0;
  line-height: 50px;
  position: absolute;
  text-align: center;
  top: 0;
}

.frame-8040-11 {
  align-items: center;
  display: flex;
  height: 50px;
  margin-right: 8px;
  margin-top: 30px;
  position: relative;
  width: 320px;
}

.frame-8051 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 8px;
  margin-top: 21px;
  position: relative;
  width: 320px;
}

.rectangle-50929 {
  align-self: stretch;
  background-color: var(--alto);
  height: 1px;
  position: relative;
  width: 100%;
}

.overlap-group3-34 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 110px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-72 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-66 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-78 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-78 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-174 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-78 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-175 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-78 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-78 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-73 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1698 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-78 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-1-14 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-103 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-78 {
  text-decoration: underline;
}
</style>
