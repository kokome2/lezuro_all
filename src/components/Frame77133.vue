<template>
  <div :class="[`frame-7713-4`, className || ``]">
    <div class="text-126-1 valign-text-middle pretendard-medium-white-14px">{{ text1262 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame77133",
  props: ["text1262", "className"],
};
</script>

<style>
.frame-7713-4 {
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

.text-126-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -2px;
  margin-left: -1px;
  margin-right: -1px;
  margin-top: -4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7713-4.frame-7712-32 {
  background-color: var(--torea-bay);
}

.frame-7713-4.frame-7712-31 {
  background-color: var(--monza);
}
</style>
