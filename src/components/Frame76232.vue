<template>
  <div class="frame-7-32">
    <div class="frame-7613-11">
      <div class="text-224 valign-text-middle pretendard-medium-log-cabin-18px">{{ text2242 }}</div>
    </div>
    <div class="frame-7611-24">
      <div class="text-224 valign-text-middle pretendard-medium-mountain-mist-16px">{{ text2243 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame76232",
  props: ["text2242", "text2243"],
};
</script>

<style>
.frame-7-32 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.frame-7613-11 {
  align-items: center;
  display: flex;
  gap: 286px;
  height: 55px;
  position: relative;
  width: 120px;
}

.text-224 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7611-24 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 286px;
  height: 55px;
  justify-content: space-around;
  padding: 0px 20px;
  position: relative;
  width: 380px;
}
</style>
