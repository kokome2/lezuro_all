<template>
  <div class="frame-80">
    <group762 :group762="group762Props.group762" />
    <frame8068 />
  </div>
</template>

<script>
import Group762 from "./Group762";
import Frame8068 from "./Frame8068";
export default {
  name: "Frame8069",
  components: {
    Group762,
    Frame8068,
  },
  props: ["group762Props"],
};
</script>

<style>
.frame-80 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 155px;
}
</style>
