<template>
  <div :class="[`frame-8082-2`, className || ``]">
    <div class="text-1414 valign-text-middle pretendard-semi-bold-white-12px">종료</div>
  </div>
</template>

<script>
export default {
  name: "Frame80822",
  props: ["className"],
};
</script>

<style>
.frame-8082-2 {
  align-items: center;
  background-color: #444444;
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

.text-1414 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-8082-2.frame-7684-5 {
  background-color: var(--mine-shaft);
}

.frame-8082-2.frame-7684-6 {
  background-color: var(--mine-shaft);
  left: 23px;
  position: relative;
  top: 25px;
}
</style>
