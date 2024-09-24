<template>
  <div :class="[`frame-8130`, className || ``]">
    <frame8127 :text1611="frame81271Props.text1611" :text1612="frame81271Props.text1612" />
    <frame8127 :text1611="frame81272Props.text1611" :text1612="frame81272Props.text1612" />
    <frame8127 :text1611="frame81273Props.text1611" :text1612="frame81273Props.text1612" />
  </div>
</template>

<script>
import Frame8127 from "./Frame8127";
export default {
  name: "Frame8130",
  components: {
    Frame8127,
  },
  props: ["className", "frame81271Props", "frame81272Props", "frame81273Props"],
};
</script>

<style>
.frame-8130 {
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  top: 0;
  width: 320px;
}

.frame-8130.frame-8131 {
  top: 130px;
}
</style>
