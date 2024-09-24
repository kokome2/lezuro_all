<template>
  <div class="frame-765">
    <div class="frame-7362">
      <div class="a-5 valign-text-middle pretendard-semi-bold-log-cabin-20px">{{ a }}</div>
      <frame7357 v-bind="frame7357Props" />
    </div>
  </div>
</template>

<script>
import Frame7357 from "./Frame7357";
export default {
  name: "Frame7651",
  components: {
    Frame7357,
  },
  props: ["a", "frame7357Props"],
};
</script>

<style>
.frame-765 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7362 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 254px;
  padding: 20px 0px;
  position: relative;
  width: 100%;
}

.a-5,
.b {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}
</style>
