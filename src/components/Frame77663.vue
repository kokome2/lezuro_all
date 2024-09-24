<template>
  <div :class="[`frame-7766-6`, className || ``]">
    <frame73034 :text1512="frame73034Props.text1512" />
    <div class="frame-7281-10"><frame77722 :text209="frame77722Props.text209" /></div>
  </div>
</template>

<script>
import Frame73034 from "./Frame73034";
import Frame77722 from "./Frame77722";
export default {
  name: "Frame77663",
  components: {
    Frame73034,
    Frame77722,
  },
  props: ["className", "frame73034Props", "frame77722Props"],
};
</script>

<style>
.frame-7766-6 {
  align-items: center;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--celeste);
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  padding: 20px 20px 20px 0px;
  position: relative;
  width: 100%;
}

.frame-7281-10 {
  background-color: var(--hint-of-red);
  border: 0.5px solid;
  border-color: var(--alto);
  height: 50px;
  position: relative;
  width: 1147px;
}

.frame-7766-6.frame-7783-6 {
  align-items: flex-start;
  border-top-style: unset;
  border-top-width: unset;
}

.frame-7766-6.frame-7783-6 .frame-7281-10 {
  height: 220px;
}
</style>
