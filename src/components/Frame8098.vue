<template>
  <div :class="[`frame-8098`, className || ``]">
    <div class="text-13-12 valign-text-middle pretendard-regular-normal-granite-gray-16px">최종성적</div>
    <div class="rectangle-509300"></div>
    <div class="text-13-12 valign-text-middle pretendard-semi-bold-log-cabin-16px">-24</div>
  </div>
</template>

<script>
export default {
  name: "Frame8098",
  props: ["className"],
};
</script>

<style>
.frame-8098 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.text-13-12 {
  letter-spacing: 0;
  line-height: 55px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.rectangle-509300 {
  background-color: var(--granite-gray);
  height: 8px;
  position: relative;
  width: 1px;
}

.frame-8098.frame-8098-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  margin-right: -158px;
  position: relative;
}
</style>
