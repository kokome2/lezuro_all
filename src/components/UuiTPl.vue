<template>
  <div :class="[`view-209`, className || ``]">
    <div class="frame-7504-19">
      <!-- <img
        class="lezuro_logo_black-1-62"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/lezuro-logo-black-1@2x.png"
        alt="Lezuro_logo_black 1"
      /> -->
      <Header />
      <div class="frame-7279">
        <div class="text-2045 valign-text-middle pretendard-regular-normal-monza-16px">로그인</div>
        <img
          class="line-1-1"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-1.svg"
          alt="Line 1"
        />
        <div class="text-2046 valign-text-middle pretendard-regular-normal-granite-gray-16px">회원가입</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "UuiTPl",
  components: {
    Header,
  },
  props: ["className"],
};
</script>

<style>
.view-209 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  height: 100px;
  min-width: 1920px;
  /* padding: 0 261px; */
}

.frame-7504-19 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1398px;
}

.lezuro_logo_black-1-62 {
  height: 40px;
  position: relative;
  width: 127px;
}

.frame-7279 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  justify-content: flex-end;
  position: relative;
}

.text-2045 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.line-1-1 {
  height: 12px;
  object-fit: cover;
  position: relative;
  width: 1px;
}

.text-2046 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 59px;
}

.view-209.view-212 {
  margin-top: 70px;
}

.view-209.view-216 {
  margin-top: 3587px;
}
</style>
