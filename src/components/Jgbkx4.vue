<template>
  <div class="view-201">
    <div class="frame-7504-14">
      <img
        class="lezuro_logo_black-1-57"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/lezuro-logo-black-1@2x.png"
        alt="Lezuro_logo_black 1"
      />
      <div class="navbar-13">
        <div class="navbar-link-text-192 valign-text-middle pretendard-semi-bold-log-cabin-18px">기록실</div>
        <div class="navbar-link-text-192 valign-text-middle pretendard-semi-bold-log-cabin-18px">대회</div>
        <div class="navbar-link-text-192 valign-text-middle pretendard-semi-bold-mine-shaft-18px">매장·예약</div>
        <div class="navbar-link-text-192 valign-text-middle pretendard-semi-bold-log-cabin-18px">코스</div>
        <div class="navbar-link-text-192 valign-text-middle pretendard-semi-bold-log-cabin-18px">가이드</div>
        <div class="navbar-link-text-192 valign-text-middle pretendard-semi-bold-monza-18px">커뮤니티</div>
        <div class="navbar-link-text-192 valign-text-middle pretendard-semi-bold-log-cabin-18px">고객센터</div>
      </div>
      <frame7372 :className="frame7372Props.className" />
    </div>
  </div>
</template>

<script>
import Frame7372 from "./Frame7372";
export default {
  name: "Jgbkx4",
  components: {
    Frame7372,
  },
  props: ["frame7372Props"],
};
</script>

<style>
.view-201,
.view-202,
.view-203,
.view-204,
.view-205 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  height: 100px;
  min-width: 1920px;
  padding: 0 261px;
}

.frame-7504-14,
.frame-7504-15,
.frame-7504-16,
.frame-7504-17,
.frame-7504-18 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1398px;
}

.lezuro_logo_black-1-57,
.lezuro_logo_black-1-58,
.lezuro_logo_black-1-59,
.lezuro_logo_black-1-60,
.lezuro_logo_black-1-61 {
  height: 40px;
  position: relative;
  width: 127px;
}

.navbar-13,
.navbar-14,
.navbar-15,
.navbar-16,
.navbar-17 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 616px;
}

.navbar-link-text-192,
.navbar-link-text-27,
.navbar-link-text-28,
.navbar-link-text-28-1,
.navbar-link-text-29-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
