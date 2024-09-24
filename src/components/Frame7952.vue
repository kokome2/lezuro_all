<template>
  <div :class="[`frame-7952`, className || ``]">
    <h1 class="text-929 valign-text-middle pretendard-medium-black-24px">개인정보</h1>
    <div class="frame-7951-1">
      <div class="ellipse-47"></div>
      <div class="text-930 valign-text-middle pretendard-medium-granite-gray-18px">네이버 로그인</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame7952",
  props: ["className"],
};
</script>

<style>
.frame-7952 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  justify-content: center;
  position: relative;
  width: 236px;
}

.text-929 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7951-1 {
  align-items: center;
  display: flex;
  gap: 4px;
  justify-content: center;
  position: relative;
  width: 133px;
}

.ellipse-47 {
  background-color: var(--malachite);
  border-radius: 8px;
  height: 16px;
  position: relative;
  width: 16px;
}

.text-930 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.frame-7952.frame-7952-1 {
  flex: unset;
}
</style>
