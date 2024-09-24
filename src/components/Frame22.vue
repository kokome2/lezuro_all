<template>
  <div :class="[`frame-2-2`, className || ``]">
    <div class="text-1457 valign-text-middle pretendard-regular-normal-white-12px-3">전체매장 펼쳐보기</div>
  </div>
</template>

<script>
export default {
  name: "Frame22",
  props: ["className"],
};
</script>

<style>
.frame-2-2 {
  align-items: center;
  background-color: var(--torea-bay);
  border: 0.5px solid;
  border-color: var(--alto);
  border-radius: 5px;
  display: flex;
  gap: 10px;
  height: 35px;
  justify-content: center;
  padding: 6px 0px;
  position: relative;
  width: 120px;
}

.text-1457 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-2-2.frame-2-3 {
  border-radius: 3px;
}
</style>
