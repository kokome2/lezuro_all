<template>
  <div :class="[`frame-7837-1`, className || ``]">
    <div class="text-479 valign-text-middle pretendard-medium-white-14px">{{ text479 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame7837",
  props: ["text479", "className"],
};
</script>

<style>
.frame-7837-1 {
  align-items: center;
  background-color: var(--monza);
  border-radius: 4px;
  display: flex;
  gap: 10px;
  height: 40px;
  justify-content: center;
  padding: 18px 66px;
  position: relative;
  width: 320px;
}

.text-479 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -2px;
  margin-top: -4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7837-1.frame-7712-26 {
  margin-right: 8px;
  margin-top: 37px;
}

.frame-7837-1.frame-7712-27 {
  margin-right: 8px;
  margin-top: 36px;
}

.frame-7837-1.frame-7712-28 {
  margin-right: 8px;
  margin-top: 30px;
}

.frame-7837-1.frame-7712-29 {
  margin-top: 51px;
}
</style>
