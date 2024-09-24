<template>
  <div :class="[`frame-7846`, className || ``]">
    <frame73112 :text2982="frame731121Props.text2982" />
    <frame73112 :text2982="frame731122Props.text2982" :className="frame731122Props.className" />
  </div>
</template>

<script>
import Frame73112 from "./Frame73112";
export default {
  name: "Frame7846",
  components: {
    Frame73112,
  },
  props: ["className", "frame731121Props", "frame731122Props"],
};
</script>

<style>
.frame-7846 {
  align-items: center;
  display: inline-flex;
  gap: 10px;
  height: 36px;
  left: 1190px;
  position: absolute;
  top: 87px;
}

.frame-7846.frame-7849 {
  top: 200px;
}
</style>
