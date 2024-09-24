<template>
  <div :class="[`frame-7713-3`, className || ``]">
    <div class="text-21-1 valign-text-middle pretendard-medium-white-14px">{{ text215 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame77132",
  props: ["text215", "className"],
};
</script>

<style>
.frame-7713-3 {
  align-items: center;
  background-color: var(--mountain-mist);
  border-radius: 4px;
  display: flex;
  gap: 10px;
  height: 40px;
  justify-content: center;
  padding: 18px 66px;
  position: relative;
  width: 100px;
}

.text-21-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -2px;
  margin-left: -40.5px;
  margin-right: -40.5px;
  margin-top: -4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7713-3.frame-7712-24 {
  background-color: var(--greygrey-900);
}

.frame-7713-3.frame-7714-2 {
  background-color: var(--monza);
}
</style>
