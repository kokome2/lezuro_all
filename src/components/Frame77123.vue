<template>
  <div class="frame-7712-34">
    <div class="text_label-70 valign-text-middle pretendard-regular-normal-mountain-mist-20px">{{ text_Label }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame77123",
  props: ["text_Label"],
};
</script>

<style>
.frame-7712-34 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 10px;
  height: 80px;
  padding: 18px 40px;
  position: relative;
}

.text_label-70 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
