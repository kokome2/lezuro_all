<template>
  <div :class="[`frame-7746`, className || ``]">
    <div class="frame-7744">
      <div class="text-17-13 valign-text-middle pretendard-medium-white-14px">{{ text1769 }}</div>
    </div>
    <div class="frame-7745-1">
      <div class="text-17-13 valign-text-middle pretendard-medium-log-cabin-14px">{{ text1770 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame7746",
  props: ["text1769", "text1770", "className"],
};
</script>

<style>
.frame-7746 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.frame-7744 {
  align-items: center;
  background-color: var(--granite-gray);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  gap: 10px;
  height: 40px;
  justify-content: center;
  padding: 15px;
  position: relative;
  width: 130px;
}

.text-17-13 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7745-1 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  gap: 10px;
  padding: 15px;
  position: relative;
  width: 590px;
}

.frame-7746.frame-77,
.frame-7746.frame-77-1,
.frame-7746.frame-77-2,
.frame-7746.frame-77-3 {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
}

.frame-7746.frame-77-1 .frame-7745-1,
.frame-7746.frame-77-2 .frame-7745-1,
.frame-7746.frame-77 .frame-7745-1 {
  border-top-style: unset;
  border-top-width: unset;
}

.frame-7746.frame-77-3 .frame-7745-1 {
  border-top-style: unset;
  border-top-width: unset;
  height: 40px;
}
</style>
