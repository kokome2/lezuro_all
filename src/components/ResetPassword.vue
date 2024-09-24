<template>
  <div class="container-center-horizontal">
    <div class="resetpassword2-2 screen">
      <uui-t-pl />
      <div class="frame-7635-34">
        <frame7605 :text122="frame7605Props.text122" />
        <div class="frame-7697-10">
          <div class="frame-7696-8">
            <div class="frame-7625-10">
              <frame76232 :text2242="frame762321Props.text2242" :text2243="frame762321Props.text2243" />
              <frame76232 :text2242="frame762322Props.text2242" :text2243="frame762322Props.text2243" />
            </div>
          </div>
          <group7585
           :text2153="group7585Props.text2153" />
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import UuiTPl from "./UuiTPl";
import Frame7605 from "./Frame7605";
import Frame76232 from "./Frame76232";
import Group7585 from "./Group7585";
import XFooter from "./XFooter";
export default {
  name: "ResetPassword",
  components: {
    UuiTPl,
    Frame7605,
    Frame76232,
    Group7585,
    XFooter,
  },
  props: ["frame7605Props", "frame762321Props", "frame762322Props", "group7585Props", "xFooterProps"],
};
</script>

<style>
.resetpassword2-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 1343px;
  position: relative;
  width: 1920px;
}

.frame-7635-34 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  margin-top: 232px;
  overflow: hidden;
  padding: 50px;
  position: relative;
  width: 600px;
}

.frame-7697-10 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7696-8 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-7625-10 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}
</style>
