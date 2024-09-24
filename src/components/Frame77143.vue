<template>
  <div class="frame-7714-7">
    <frame77133 :text1262="frame771331Props.text1262" />
    <frame77133 :text1262="frame771332Props.text1262" :className="frame771332Props.className" />
  </div>
</template>

<script>
import Frame77133 from "./Frame77133";
export default {
  name: "Frame77143",
  components: {
    Frame77133,
  },
  props: ["frame771331Props", "frame771332Props"],
};
</script>

<style>
.frame-7714-7 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}
</style>
