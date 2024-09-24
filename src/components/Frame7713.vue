<template>
  <div :class="[`frame-7713-1`, className || ``]">
    <div class="text-18-1 valign-text-middle pretendard-medium-white-14px">{{ text181 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame7713",
  props: ["text181", "className"],
};
</script>

<style>
.frame-7713-1 {
  align-items: center;
  background-color: var(--mountain-mist);
  border-radius: 4px;
  display: flex;
  gap: 10px;
  height: 40px;
  justify-content: center;
  padding: 18px 66px;
  position: relative;
  width: 155px;
}

.text-18-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -2px;
  margin-left: -13px;
  margin-right: -13px;
  margin-top: -4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7713-1.frame-7712-16,
.frame-7713-1.frame-7712-17,
.frame-7713-1.frame-7712-18,
.frame-7713-1.frame-7712-19,
.frame-7713-1.frame-7712-20,
.frame-7713-1.frame-7712-21,
.frame-7713-1.frame-7712-22,
.frame-7713-1.frame-7712-23 {
  background-color: var(--monza);
}
</style>
