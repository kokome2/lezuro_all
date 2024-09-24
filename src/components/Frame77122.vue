<template>
  <div :class="[`frame-7712-25`, className || ``]">
    <div class="text_label-67 valign-text-middle pretendard-medium-white-14px">{{ text_Label }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame77122",
  props: ["text_Label", "className"],
};
</script>

<style>
.frame-7712-25 {
  align-items: center;
  background-color: var(--monza);
  border-radius: 4px;
  display: flex;
  gap: 10px;
  height: 40px;
  justify-content: center;
  padding: 18px 66px;
  position: relative;
  width: 300px;
}

.text_label-67 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -2px;
  margin-top: -4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7712-25.frame-7858-6,
.frame-7712-25.frame-7858-6-1 {
  height: 35px;
  width: 138px;
}

.frame-7712-25.frame-7858-6-1 .text_label-67,
.frame-7712-25.frame-7858-6 .text_label-67 {
  margin-bottom: -4.5px;
  margin-left: -35.5px;
  margin-right: -35.5px;
  margin-top: -6.5px;
}
</style>
