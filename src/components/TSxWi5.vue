<template>
  <div class="view-224">
    <div class="frame-7504-37">
      <img
        class="lezuro_logo_black-1-80"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/lezuro-logo-black-1@2x.png"
        alt="Lezuro_logo_black 1"
      />
      <div class="frame-7371-2">
        <div class="text-27-5 valign-text-middle pretendard-semi-bold-log-cabin-18px">기록실</div>
        <div class="text-27-5 valign-text-middle pretendard-semi-bold-log-cabin-18px">대회</div>
        <div class="text-27-5 valign-text-middle pretendard-semi-bold-mine-shaft-18px">매장·예약</div>
        <div class="text-27-5 valign-text-middle pretendard-semi-bold-log-cabin-18px">코스</div>
        <div class="text-27-5 valign-text-middle pretendard-semi-bold-monza-18px">가이드</div>
        <div class="text-27-5 valign-text-middle pretendard-semi-bold-log-cabin-18px">커뮤니티</div>
        <div class="text-27-5 valign-text-middle pretendard-semi-bold-log-cabin-18px">고객센터</div>
      </div>
      <frame7372 :className="frame7372Props.className" />
    </div>
  </div>
</template>

<script>
import Frame7372 from "./Frame7372";
export default {
  name: "TSxWi5",
  components: {
    Frame7372,
  },
  props: ["frame7372Props"],
};
</script>

<style>
.view-224,
.view-225,
.view-226 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  height: 100px;
  min-width: 1920px;
  padding: 0 261px;
}

.frame-7504-37,
.frame-7504-38,
.frame-7504-39 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1398px;
}

.lezuro_logo_black-1-80,
.lezuro_logo_black-1-81,
.lezuro_logo_black-1-82 {
  height: 40px;
  position: relative;
  width: 127px;
}

.frame-7371-2,
.frame-7371-3,
.frame-7371-4 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 616px;
}

.text-27-5,
.text-27-6,
.text-280 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
