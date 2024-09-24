<template>
  <div class="frame-8100-1">
    <frame8097 />
    <frame8099 />
    <frame8098 />
  </div>
</template>

<script>
import Frame8097 from "./Frame8097";
import Frame8099 from "./Frame8099";
import Frame8098 from "./Frame8098";
export default {
  name: "Frame8100",
  components: {
    Frame8097,
    Frame8099,
    Frame8098,
  },
};
</script>

<style>
.frame-8100-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
  width: 100%;
}
</style>
