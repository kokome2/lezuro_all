<template>
  <div :class="['btnprimary-21', className]" @click="$emit('click')">
    <div class="text-37 valign-text-middle pretendard-semi-bold-white-16px">{{ text_Label }}</div>
  </div>
</template>

<script>
export default {
  name: "Btnprimary",
  props: ["text_Label", "className"],
};
</script>

<style>
.btnprimary-21 {
  align-items: center;
  background-color: var(--nobel);
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 14px 10px;
  position: relative;
  width: 140px;
}

.text-37 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -2px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.btnprimary-21.btnprimary-22,
.btnprimary-21.btnprimary-24,
.btnprimary-21.btnprimary-26 {
  background-color: var(--monza);
}
</style>
