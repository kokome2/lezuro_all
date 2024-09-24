<template>
  <div class="frame-766">
    <div class="frame-7662">
      <frame7657  @click="$emit('click')"/>
      <frame7657  @click="$emit('click')"/>
      <frame7657  @click="$emit('click')"/>
      <frame7657  @click="$emit('click')"/>
    </div>
  </div>
</template>

<script>
import Frame7657 from "./Frame7657";
export default {
  name: "Frame7663",
  components: {
    Frame7657,
  },
};
</script>

<style>
.frame-766 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 60px;
  position: relative;
  width: 100%;
}

.frame-7662 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 40px;
  justify-content: center;
  position: relative;
  width: 100%;
}
</style>
