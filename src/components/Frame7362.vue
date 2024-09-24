<template>
  <div :class="[`frame-736`, className || ``]">
    <div class="ellipse-11-3"></div>
    <frame7359 :text2310="frame7359Props.text2310" />
  </div>
</template>

<script>
import Frame7359 from "./Frame7359";
export default {
  name: "Frame7362",
  components: {
    Frame7359,
  },
  props: ["className", "frame7359Props"],
};
</script>

<style>
.frame-736 {
  align-items: flex-end;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-color: var(--celeste);
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  padding: 0px 0px 20px 30px;
  position: relative;
  width: 100%;
}

.ellipse-11-3 {
  border: 3px solid;
  border-color: var(--greygrey-900);
  border-radius: 6px;
  height: 12px;
  position: relative;
  width: 12px;
}

.frame-736.frame-7365 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  padding: 0px 0px 10px 30px;
  position: relative;
  width: 100%;
}
</style>
