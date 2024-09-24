<template>
  <div :class="[`frame-73-1-1`, className || ``]">
    <div class="text-18-4 valign-text-middle pretendard-regular-normal-mine-shaft-16px">{{ text1816 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame7310",
  props: ["text1816", "className"],
};
</script>

<style>
.frame-73-1-1 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 0.5px solid;
  border-color: var(--pink-swan);
  border-radius: 5px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  height: 48px;
  justify-content: center;
  overflow: hidden;
  padding: 10px 20px;
  position: relative;
}

.text-18-4 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 51px;
}

.frame-73-1-1.frame-73-2 {
  background-color: unset;
}
</style>
