<template>
  <div class="frame-7951-3">
    <div class="frame-7953">
      <frame79522 :text940="frame79522Props.text940" :className="frame79522Props.className" />
    </div>
  </div>
</template>

<script>
import Frame79522 from "./Frame79522";
export default {
  name: "Frame7951",
  components: {
    Frame79522,
  },
  props: ["frame79522Props"],
};
</script>

<style>
.frame-7951-3,
.frame-7951-4 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  position: relative;
}

.frame-7953,
.frame-7953-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  justify-content: space-around;
  position: relative;
  width: 100%;
}
</style>
