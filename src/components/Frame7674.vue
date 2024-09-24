<template>
  <div :class="[`frame-7674-4`, className || ``]">
    <div class="text-11 valign-text-middle pretendard-medium-granite-gray-18px">1:1 문의내역</div>
  </div>
</template>

<script>
export default {
  name: "Frame7674",
  props: ["className"],
};
</script>

<style>
.frame-7674-4 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  gap: 10px;
  height: 60px;
  justify-content: center;
  padding: 23px 159px;
  position: relative;
  width: 466.66px;
}

.text-11 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7674-4.frame-7673-2 {
  padding: 23px 151px;
}
</style>
