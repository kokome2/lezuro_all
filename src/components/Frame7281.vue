<template>
  <div :class="[`frame-7281-2`, className || ``]"><frame7772 :text175="frame7772Props.text175" /></div>
</template>

<script>
import Frame7772 from "./Frame7772";
export default {
  name: "Frame7281",
  components: {
    Frame7772,
  },
  props: ["className", "frame7772Props"],
};
</script>

<style>
.frame-7281-2 {
  background-color: var(--hint-of-red);
  border: 0.5px solid;
  border-color: var(--alto);
  height: 50px;
  position: relative;
  width: 320px;
}

.frame-7281-2.frame-7281-3,
.frame-7281-2.frame-7281-5,
.frame-7281-2.frame-7281-7,
.frame-7281-2.frame-7281-9 {
  height: 220px;
}
</style>
