<template>
  <div class="frame-7-30">
    <frame76134 :text2145="frame76134Props.text2145" />
    <div class="frame-7611-22">
      <div class="text-21-5 valign-text-middle pretendard-medium-mountain-mist-16px">{{ text2148 }}</div>
    </div>
    <div class="frame-7698-2">
      <div class="text-21-6 valign-text-middle pretendard-medium-white-16px">{{ text2149 }}</div>
    </div>
  </div>
</template>

<script>
import Frame76134 from "./Frame76134";
export default {
  name: "Frame7699",
  components: {
    Frame76134,
  },
  props: ["text2148", "text2149", "frame76134Props"],
};
</script>

<style>
.frame-7-30,
.frame-7-31 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  position: relative;
}

.frame-7611-22,
.frame-7611-23 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 286px;
  height: 55px;
  justify-content: space-around;
  padding: 0px 20px;
  position: relative;
  width: 260px;
}

.text-21-5,
.text-222 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7698-2,
.frame-7698-3 {
  align-items: center;
  background-color: var(--mine-shaft);
  display: flex;
  gap: 10px;
  height: 55px;
  justify-content: center;
  padding: 18px 36px;
  position: relative;
  width: 140px;
}

.text-21-6,
.text-222-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: -9.5px;
  margin-right: -9.5px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
