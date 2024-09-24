<template>
  <div class="frame-7623">
    <frame76134 :text2145="frame76134Props.text2145" />
    <div class="frame-7611-21">
      <div class="text-2146 valign-text-middle pretendard-medium-mountain-mist-16px">{{ text2146 }}</div>
    </div>
  </div>
</template>

<script>
import Frame76134 from "./Frame76134";
export default {
  name: "Frame7623",
  components: {
    Frame76134,
  },
  props: ["text2146", "frame76134Props"],
};
</script>

<style>
.frame-7623,
.frame-7-29 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.frame-7611-21,
.frame-7611-20 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 286px;
  height: 55px;
  justify-content: space-around;
  padding: 0px 20px;
  position: relative;
  width: 400px;
}

.text-2146,
.text-22-5 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
