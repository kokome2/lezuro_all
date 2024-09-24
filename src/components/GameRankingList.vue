<template>
  <div class="container-center-horizontal">
    <div class="tournamentleaderboard-2 screen">
      <n-tbq-j2 />
      <rj-zs-wi :frame72911Props="rJZsWIProps.frame72911Props" :frame72912Props="rJZsWIProps.frame72912Props" />
      <view :text89="viewProps.text89" :className="viewProps.className" />
      <div class="frame-7692-4">
        <div class="frame-7691-5">
          <div class="group-764-6">
            <div class="frame-7727-7">
              <frame76737 />
              <div class="frame-7671-21">
                <div class="text-2464 valign-text-middle pretendard-bold-log-cabin-18px">{{ text2464 }}</div>
              </div>
              <frame7673 :text10="frame7673Props.text10" :className="frame7673Props.className" />
            </div>
          </div>
        </div>
      </div>
      <div class="frame-7729">
        <div class="navbar-33 pretendard-bold-mine-shaft-18px">
          <div class="navbar-link-text-2466 valign-text-middle">{{ navbarLinkText2466 }}</div>
          <div class="navbar-link-text-2467 valign-text-middle">{{ navbarLinkText2467 }}</div>
          <div class="navbar-link-text-2468 valign-text-middle">{{ navbarLinkText2468 }}</div>
          <div class="navbar-link-text-2469 valign-text-middle">{{ navbarLinkText2469 }}</div>
          <div class="navbar-link-text-2470 valign-text-middle">{{ navbarLinkText2470 }}</div>
          <div class="navbar-link-text-2471 valign-text-middle">{{ navbarLinkText2471 }}</div>
        </div>
        <div class="th-14">
          <div class="number-203 valign-text-middle pretendard-regular-normal-granite-gray-18px">{{ number1 }}</div>
          <div class="frame-7728">
            <img class="group-736-5" :src="group736" alt="Group 736" />
            <div class="text-2472 valign-text-middle pretendard-regular-normal-granite-gray-16px">{{ text2472 }}</div>
          </div>
          <div class="text-2473 valign-text-middle pretendard-regular-normal-granite-gray-18px">{{ text2473 }}</div>
          <div class="number-204 valign-text-middle pretendard-regular-normal-granite-gray-18px">{{ number2 }}</div>
          <div class="text-2474 valign-text-middle pretendard-regular-normal-granite-gray-18px">{{ text2474 }}</div>
          <frame77302 />
        </div>
        <th8 :number1="th81Props.number1" :group736="th81Props.group736" :text2476="th81Props.text2476" />
        <th8
          :number1="th82Props.number1"
          :group736="th82Props.group736"
          :text2476="th82Props.text2476"
          :className="th82Props.className"
        />
        <th8
          :number1="th83Props.number1"
          :group736="th83Props.group736"
          :text2476="th83Props.text2476"
          :className="th83Props.className"
        />
        <th8
          :number1="th84Props.number1"
          :group736="th84Props.group736"
          :text2476="th84Props.text2476"
          :className="th84Props.className"
        />
      </div>
      <x-footer :className="xFooterProps.className" />
      <img class="material-symbolsclose-6" :src="materialSymbolsClose" alt="material-symbols:close" />
    </div>
  </div>
</template>

<script>
import NTbqJ2 from "./NTbqJ2";
import RjZsWi from "./RjZsWi";
import View from "./View";
import Frame76737 from "./Frame76737";
import Frame7673 from "./Frame7673";
import Frame77302 from "./Frame77302";
import Th8 from "./Th8";
import XFooter from "./XFooter";
export default {
  name: "GameRankingList",
  components: {
    NTbqJ2,
    RjZsWi,
    View,
    Frame76737,
    Frame7673,
    Frame77302,
    Th8,
    XFooter,
  },
  props: [
    "text2464",
    "navbarLinkText2466",
    "navbarLinkText2467",
    "navbarLinkText2468",
    "navbarLinkText2469",
    "navbarLinkText2470",
    "navbarLinkText2471",
    "number1",
    "group736",
    "text2472",
    "text2473",
    "number2",
    "text2474",
    "materialSymbolsClose",
    "rJZsWIProps",
    "viewProps",
    "frame7673Props",
    "th81Props",
    "th82Props",
    "th83Props",
    "th84Props",
    "xFooterProps",
  ],
};
</script>

<style>
.tournamentleaderboard-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--black);
  display: flex;
  flex-direction: column;
  height: 1401px;
  overflow: hidden;
  position: relative;
  width: 1920px;
}

.frame-7692-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 51px;
  position: relative;
  width: 1400px;
}

.frame-7691-5 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  position: relative;
  width: 100%;
}

.group-764-6 {
  height: 60px;
  position: relative;
  width: 1399.98px;
}

.frame-7727-7 {
  align-items: center;
  display: inline-flex;
  position: relative;
}

.frame-7671-21 {
  align-items: center;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-style: solid;
  border-right-width: 1px;
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  gap: 10px;
  height: 60px;
  justify-content: center;
  padding: 23px 159px;
  position: relative;
  width: 466.66px;
}

.text-2464 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7729 {
  align-items: flex-start;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-style: solid;
  border-right-width: 1px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  position: relative;
  width: 1400px;
}

.navbar-33 {
  align-items: center;
  align-self: stretch;
  background-color: var(--cultured-pearl);
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0px 40px;
  position: relative;
  width: 100%;
}

.navbar-link-text-2466,
.navbar-link-text-2468,
.navbar-link-text-2469,
.navbar-link-text-2470,
.number-203,
.text-2473,
.number-204,
.text-2474 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 100px;
}

.navbar-link-text-2467 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 200px;
}

.navbar-link-text-2471 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 109px;
}

.th-14 {
  align-items: center;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0px 40px;
  position: relative;
  width: 100%;
}

.frame-7728 {
  align-items: center;
  display: flex;
  gap: 12px;
  position: relative;
  width: 200px;
}

.group-736-5 {
  height: 30px;
  position: relative;
  width: 30px;
}

.text-2472 {
  letter-spacing: 0;
  line-height: 55px;
  margin-right: -32px;
  position: relative;
  width: 190px;
}

.material-symbolsclose-6 {
  align-self: flex-start;
  height: 30px;
  margin-left: -943px;
  margin-top: 14648px;
  width: 30px;
}
</style>
