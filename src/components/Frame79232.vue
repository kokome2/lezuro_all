<template>
  <div class="frame-7923-6">
    <div class="frame-7926-2">
      <frame7923 :text_Label="frame7923Props.text_Label" :className="frame7923Props.className" />
    </div>
  </div>
</template>

<script>
import Frame7923 from "./Frame7923";
export default {
  name: "Frame79232",
  components: {
    Frame7923,
  },
  props: ["frame7923Props"],
};
</script>

<style>
.frame-7923-6 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.frame-7926-2 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: flex-end;
  position: relative;
  width: 300px;
}
</style>
