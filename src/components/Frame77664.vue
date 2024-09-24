<template>
  <div :class="[`frame-7766-7`, className || ``]">
    <frame73034 :text1512="frame73034Props.text1512" />
    <div class="frame-7281-11"><frame7772 :text175="frame7772Props.text175" /></div>
  </div>
</template>

<script>
import Frame73034 from "./Frame73034";
import Frame7772 from "./Frame7772";
export default {
  name: "Frame77664",
  components: {
    Frame73034,
    Frame7772,
  },
  props: ["className", "frame73034Props", "frame7772Props"],
};
</script>

<style>
.frame-7766-7 {
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

.frame-7281-11 {
  background-color: var(--hint-of-red);
  border: 0.5px solid;
  border-color: var(--alto);
  height: 50px;
  position: relative;
  width: 1147px;
}

.frame-7766-7.frame-7783-7,
.frame-7766-7.frame-7783-8,
.frame-7766-7.frame-7783-9,
.frame-7766-7.frame-7783-10 {
  align-items: flex-start;
  border-top-style: unset;
  border-top-width: unset;
}

.frame-7766-7.frame-7783-7 .frame-7281-11,
.frame-7766-7.frame-7783-8 .frame-7281-11,
.frame-7766-7.frame-7783-9 .frame-7281-11,
.frame-7766-7.frame-7783-10 .frame-7281-11 {
  height: 220px;
}
</style>
