<template>
  <div class="frame-802">
    <div class="text-8-19 valign-text-middle pretendard-medium-log-cabin-16px">{{ text839 }}</div>
    <frame8016 :text840="frame8016Props.text840" />
  </div>
</template>

<script>
import Frame8016 from "./Frame8016";
export default {
  name: "Frame8022",
  components: {
    Frame8016,
  },
  props: ["text839", "frame8016Props"],
};
</script>

<style>
.frame-802,
.frame-8022,
.frame-802-1,
.frame-802-2,
.frame-802-3 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 6px;
  position: relative;
  width: 100%;
}

.text-8-19,
.text-985,
.text-10-6,
.text-11-15,
.text-180-1 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}
</style>
