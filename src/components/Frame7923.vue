<template>
  <div :class="[`frame-7923-5`, className || ``]">
    <div class="text_label-66 valign-text-middle pretendard-medium-white-14px">{{ text_Label }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame7923",
  props: ["text_Label", "className"],
};
</script>

<style>
.frame-7923-5 {
  align-items: center;
  background-color: var(--celeste);
  border-radius: 5px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  padding: 10px 20px;
  position: relative;
}

.text_label-66 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7923-5.frame-7712-30 {
  background-color: var(--monza);
  border-radius: 4px;
}
</style>
