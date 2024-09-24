<template>
  <div :class="[`frame-7719`, className || ``]">
    <div class="text-186 valign-text-middle pretendard-bold-log-cabin-16px">코스 소개</div>
    <div class="text-186-1 valign-text-middle pretendard-regular-normal-mountain-mist-14px">
      레저로만의 다향한 코스들을 만나세요!
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame7719",
  props: ["className"],
};
</script>

<style>
.frame-7719 {
  align-items: center;
  align-self: flex-start;
  display: inline-flex;
  gap: 8px;
  margin-left: 20px;
  margin-top: 50px;
  position: relative;
}

.text-186 {
  letter-spacing: -0.8px;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.text-186-1 {
  letter-spacing: -0.7px;
  line-height: normal;
  margin-top: -0.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7719.frame-7720 {
  margin-left: 2px;
  margin-top: unset;
}
</style>
