<template>
  <div class="container-center-horizontal">
    <div class="signup3-2 screen">
      <uui-t-pl />
      <div class="frame-7634-5">
        <frame7605 :text122="frame7605Props.text122" />
        <div class="frame-7697-8">
          <div class="frame-7696-6">
            <div class="frame-7625-8">
              <frame7627
                :text522="frame76271Props.text522"
                :className="frame76271Props.className"
                :frame7613Props="frame76271Props.frame7613Props"
              />
              <frame7628 :frame7613Props="frame7628Props.frame7613Props" />
              <frame7629
                :frame7613Props="frame7629Props.frame7613Props"
                :frame763171Props="frame7629Props.frame763171Props"
                :frame763172Props="frame7629Props.frame763172Props"
              />
              <frame7627
                :text522="frame76272Props.text522"
                :className="frame76272Props.className"
                :frame7613Props="frame76272Props.frame7613Props"
              />
              <frame7627
                :text522="frame76273Props.text522"
                :className="frame76273Props.className"
                :frame7613Props="frame76273Props.frame7613Props"
              />
            </div>
            <p class="text-2215 valign-text-middle pretendard-regular-normal-mine-shaft-14px">{{ text2215 }}</p>
          </div>
          <group758 :text130="group758Props.text130" />
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import UuiTPl from "./UuiTPl";
import Frame7605 from "./Frame7605";
import Frame7627 from "./Frame7627";
import Frame7628 from "./Frame7628";
import Frame7629 from "./Frame7629";
import Group758 from "./Group758";
import XFooter from "./XFooter";
export default {
  name: "SocialSignUp",
  components: {
    UuiTPl,
    Frame7605,
    Frame7627,
    Frame7628,
    Frame7629,
    Group758,
    XFooter,
  },
  props: [
    "text2215",
    "frame7605Props",
    "frame76271Props",
    "frame7628Props",
    "frame7629Props",
    "frame76272Props",
    "frame76273Props",
    "group758Props",
    "xFooterProps",
  ],
};
</script>

<style>
.signup3-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  gap: 239px;
  min-height: 1575px;
  position: relative;
  width: 1920px;
}

.frame-7634-5 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  overflow: hidden;
  padding: 50px;
  position: relative;
  width: 800px;
}

.frame-7697-8 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7696-6 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-7625-8 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.text-2215 {
  align-self: stretch;
  letter-spacing: -0.35px;
  line-height: normal;
  position: relative;
  text-align: center;
}
</style>
