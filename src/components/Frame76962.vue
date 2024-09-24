<template>
  <div class="frame-769-1">
    <div class="frame-7625-5">
      <frame7627 :text522="frame7627Props.text522" :frame7613Props="frame7627Props.frame7613Props" />
    </div>
  </div>
</template>

<script>
import Frame7627 from "./Frame7627";
export default {
  name: "Frame76962",
  components: {
    Frame7627,
  },
  props: ["frame7627Props"],
};
</script>

<style>
.frame-769-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-7625-5 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}
</style>
