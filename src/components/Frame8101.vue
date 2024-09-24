<template>
  <div class="frame-8101-1">
    <div class="number-82 valign-text-middle pretendard-semi-bold-log-cabin-16px">{{ number }}</div>
    <frame8096 />
  </div>
</template>

<script>
import Frame8096 from "./Frame8096";
export default {
  name: "Frame8101",
  components: {
    Frame8096,
  },
  props: ["number"],
};
</script>

<style>
.frame-8101-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
}

.number-82 {
  letter-spacing: 0;
  line-height: 55px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
