<template>
  <div :class="[`frame-8113`, className || ``]">
    <div class="ellipse-44"></div>
    <div class="text-952 valign-text-middle pretendard-medium-granite-gray-18px">2024-09-05 연동</div>
  </div>
</template>

<script>
export default {
  name: "Frame8113",
  props: ["className"],
};
</script>

<style>
.frame-8113 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  position: relative;
}

.ellipse-44 {
  background-color: var(--monza);
  border-radius: 8px;
  height: 16px;
  position: relative;
  width: 16px;
}

.text-952 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-8113.frame-7894-1 {
  justify-content: center;
}
</style>
