<template>
  <div class="container-center-horizontal">
    <div class="findid2-2 screen">
      <div class="text-99 valign-text-middle pretendard-semi-bold-black-18px">{{ text }}</div>
      <uui-t-pl :className="uuiTPlProps.className" />
      <div class="frame-7634-6">
        <frame7605 :text122="frame7605Props.text122" />
        <p class="park222-1 valign-text-middle pretendard-medium-mine-shaft-20px">{{ park222 }}</p>
        <group7585 :text2153="group7585Props.text2153" 
         @buttonclick="togoLogin"/>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import UuiTPl from "./UuiTPl";
import Frame7605 from "./Frame7605";
import Group7585 from "./Group7585";
import XFooter from "./XFooter";
export default {
  name: "FindIdResult",
  components: {
    UuiTPl,
    Frame7605,
    Group7585,
    XFooter,
  },
  props: ["text", "park222", "uuiTPlProps", "frame7605Props", "group7585Props", "xFooterProps"],
  methods:{
    togoLogin(){
      this.$router.push({path: "/login"})
    }
  }
};
</script>

<style>
.findid2-2 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 1345px;
  position: relative;
  width: 1920px;
}

.text-99 {
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 340px;
  margin-top: -3608px;
  min-width: 1px;
  text-align: center;
  white-space: nowrap;
}

.frame-7634-6 {
  align-items: center;
  align-self: center;
  background-color: var(--cultured-pearl);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  margin-top: 294px;
  overflow: hidden;
  padding: 50px;
  position: relative;
  width: 600px;
}

.park222-1 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
