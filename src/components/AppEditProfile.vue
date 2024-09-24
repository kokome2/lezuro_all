<template>
  <div class="container-center-horizontal">
    <div class="editprofile2-2 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-4">
        <div class="overlap-group-67">
          <div class="text-362 valign-text-middle pretendard-bold-black-18px">{{ text362 }}</div>
        </div>
        <div class="frame-7697-3">
          <div class="frame-7696-2">
            <div class="frame-7625-3">
              <div class="frame-763-6">
                <frame76133 :text383="frame761331Props.text383" />
                <div class="frame-761-2"><frame76313 /></div>
              </div>
              <div class="frame-7626-1">
                <frame76133 :text383="frame761332Props.text383" />
                <div class="frame-7614-2"><frame76314 /></div>
              </div>
              <div class="frame-763-6">
                <frame76133 :text383="frame761333Props.text383" />
                <div class="frame-761-2"><frame76315 /></div>
              </div>
              <div class="frame-763-6">
                <frame76133 :text383="frame761334Props.text383" />
                <div class="frame-761-2"><frame76316 /></div>
              </div>
            </div>
          </div>
          <div class="group-758-7">
            <div class="overlap-group-68">
              <div class="text-388 valign-text-middle pretendard-semi-bold-white-14px">{{ text388 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7740 from "./Frame7740";
import Frame76133 from "./Frame76133";
import Frame76313 from "./Frame76313";
import Frame76314 from "./Frame76314";
import Frame76315 from "./Frame76315";
import Frame76316 from "./Frame76316";
export default {
  name: "AppEditProfile",
  components: {
    Frame7740,
    Frame76133,
    Frame76313,
    Frame76314,
    Frame76315,
    Frame76316,
  },
  props: [
    "text362",
    "text388",
    "frame7740Props",
    "frame761331Props",
    "frame761332Props",
    "frame761333Props",
    "frame761334Props",
  ],
};
</script>

<style>
.editprofile2-2 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 800px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 57px;
  min-height: 664px;
  width: 362px;
}

.overlap-group-67 {
  align-items: center;
  background-image: url(https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/frame-7706.svg);
  background-size: 100% 100%;
  display: flex;
  height: 24px;
  margin-right: 2px;
  margin-top: 17px;
  min-width: 360px;
  padding: 0 131px;
}

.text-362 {
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 98px;
  white-space: nowrap;
}

.frame-7697-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-right: 2px;
  position: relative;
}

.frame-7696-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-7625-3 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-763-6 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
}

.frame-761-2 {
  align-items: center;
  align-self: stretch;
  background-color: var(--cultured-pearl);
  display: flex;
  gap: 30px;
  height: 55px;
  padding: 0px 20px;
  position: relative;
  width: 100%;
}

.frame-7626-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px 0px 0px;
  position: relative;
  width: 100%;
}

.frame-7614-2 {
  align-items: center;
  background-color: var(--cultured-pearl);
  display: flex;
  gap: 30px;
  height: 55px;
  margin-right: -20px;
  padding: 0px 20px;
  position: relative;
  width: 320px;
}

.group-758-7 {
  height: 40px;
  margin-right: -2px;
  position: relative;
  width: 322px;
}

.overlap-group-68 {
  align-items: center;
  background-color: var(--monza);
  border-radius: 4px;
  display: flex;
  height: 40px;
  justify-content: flex-end;
  min-width: 320px;
  padding: 0 116.5px;
}

.text-388 {
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 86px;
}
</style>
