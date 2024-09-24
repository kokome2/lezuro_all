<template>
  <div :class="[`frame-8082-1`, className || ``]">
    <div class="text-14-14 valign-text-middle pretendard-semi-bold-white-12px">{{ text1405 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame8082",
  props: ["text1405", "className"],
};
</script>

<style>
.frame-8082-1 {
  align-items: center;
  background-color: var(--monza);
  border-radius: 18.5px;
  display: flex;
  gap: 10px;
  height: 30px;
  justify-content: center;
  /* left: 10px; */
  padding: 11px 19px;
  position: absolute;
  /* top: 10px; */
  width: 66px;
}

.text-14-14 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: -2.15px;
  margin-right: -2.15px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-8082-1.frame-7684-2 {
  align-items: center;
  background-color: var(--torea-bay);
  border-radius: 18.5px;
  display: flex;
  gap: 10px;
  height: 30px;
  justify-content: center;
  left: 10px;
  padding: 11px 19px;
  position: absolute;
  top: 10px;
  width: 66px;
}

.frame-8082-1.frame-7684-1 {
  left: 23px;
  position: relative;
  top: 25px;
}

.frame-8082-1.frame-7684-3 {
  align-items: center;
  background-color: var(--torea-bay);
  border-radius: 18.5px;
  display: flex;
  gap: 10px;
  height: 30px;
  justify-content: center;
  padding: 11px 19px;
  position: relative;
  width: 66px;
}

.frame-8082-1.frame-7684-4 {
  align-items: center;
  background-color: var(--monza);
  border-radius: 18.5px;
  display: flex;
  gap: 10px;
  height: 30px;
  justify-content: center;
  padding: 11px 19px;
  position: relative;
  width: 66px;
}
</style>
