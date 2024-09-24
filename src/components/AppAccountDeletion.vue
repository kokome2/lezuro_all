<template>
  <div class="container-center-horizontal">
    <div class="secession-1 screen">
      <div class="group-757">
        <div class="overlap-group-54">
          <div class="text-252 valign-text-middle pretendard-bold-black-18px">{{ text252 }}</div>
        </div>
      </div>
      <div class="frame-8008">
        <img
          class="objects"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/objects.svg"
          alt="Objects"
        />
        <div class="frame-7810">
          <h1 class="text-273 valign-text-middle pretendard-bold-mine-shaft-24px">{{ text273 }}</h1>
          <p class="text-274 valign-text-middle pretendard-regular-normal-log-cabin-16px" v-html="text274"></p>
        </div>
        <frame77122 :text_Label="frame77122Props.text_Label" />
      </div>
      <frame7740
        :className="frame7740Props.className"
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
    </div>
  </div>
</template>

<script>
import Frame77122 from "./Frame77122";
import Frame7740 from "./Frame7740";
export default {
  name: "AppAccountDeletion",
  components: {
    Frame77122,
    Frame7740,
  },
  props: ["text252", "text273", "text274", "frame77122Props", "frame7740Props"],
};
</script>

<style>
.secession-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 800px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.group-757 {
  align-items: center;
  display: flex;
  height: 58px;
  min-width: 362px;
}

.overlap-group-54 {
  align-items: center;
  background-image: url(https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/frame-7706.svg);
  background-size: 100% 100%;
  display: flex;
  height: 24px;
  min-width: 360px;
  padding: 0 148px;
}

.text-252 {
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 63px;
  white-space: nowrap;
}

.frame-8008 {
  align-items: center;
  align-self: center;
  display: inline-flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 175px;
  position: relative;
}

.objects {
  height: 80px;
  position: relative;
  width: 80px;
}

.frame-7810 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 350px;
}

.text-273 {
  letter-spacing: 0;
  line-height: 60px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text-274 {
  align-self: stretch;
  height: 118px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
}
</style>
