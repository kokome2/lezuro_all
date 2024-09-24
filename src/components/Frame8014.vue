<template>
  <div :class="[`frame-80-6`, className || ``]">
    <div class="number-148 valign-text-middle pretendard-regular-normal-log-cabin-14px">{{ number }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame8014",
  props: ["number", "className"],
};
</script>

<style>
.frame-80-6 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 0.5px;
  display: flex;
  height: 40px;
  justify-content: center;
  position: relative;
  width: 60px;
}

.number-148 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}
</style>
