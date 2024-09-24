<template>
  <div class="frame-78-4">
    <frame7822 :maskGroup="frame78221Props.maskGroup" @click="$emit('click')" />
    <frame7822 :maskGroup="frame78222Props.maskGroup" @click="$emit('click')"/>
  </div>
</template>

<script>
import Frame7822 from "./Frame7822";
export default {
  name: "Frame7818",
  components: {
    Frame7822,
  },
  props: ["frame78221Props", "frame78222Props"],
};
</script>

<style>
.frame-78-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 40px;
  position: relative;
  width: 100%;
}
</style>
