<template>
  <div :class="[`frame-7311-1`, className || ``]">
    <div class="text-298 pretendard-regular-normal-white-18px">{{ text2982 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame73112",
  props: ["text2982", "className"],
};
</script>

<style>
.frame-7311-1 {
  align-items: center;
  background-color: var(--mountain-mist);
  border: 0.5px solid;
  border-color: var(--blackwhitewhite);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 48px;
  justify-content: center;
  margin-bottom: -6px;
  margin-top: -6px;
  overflow: hidden;
  position: relative;
  width: 90px;
}

.text-298 {
  align-self: stretch;
  letter-spacing: -0.72px;
  line-height: 32px;
  position: relative;
  text-align: center;
}

.frame-7311-1.frame-7845-1 {
  background-color: var(--torea-bay);
}

.frame-7311-1.frame-7845 {
  background-color: var(--monza);
}
</style>
