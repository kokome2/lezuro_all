<template>
  <div :class="[`frame-8099-2`, className || ``]">
    <div class="text-1356 valign-text-middle pretendard-regular-normal-granite-gray-16px">라운드</div>
    <div class="rectangle-509299-1"></div>
    <div class="number-76 valign-text-middle pretendard-semi-bold-log-cabin-16px">9</div>
  </div>
</template>

<script>
export default {
  name: "Frame8099",
  props: ["className"],
};
</script>

<style>
.frame-8099-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.text-1356,
.number-76 {
  letter-spacing: 0;
  line-height: 55px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.rectangle-509299-1 {
  background-color: var(--granite-gray);
  height: 8px;
  position: relative;
  width: 1px;
}

.frame-8099-2.frame-8099-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  margin-right: -34px;
  position: relative;
}
</style>
