<template>
  <div :class="[`frame-7714`, className || ``]">
    <frame7713 :text181="frame77131Props.text181" />
    <frame7713 :text181="frame77132Props.text181" :className="frame77132Props.className" />
  </div>
</template>

<script>
import Frame7713 from "./Frame7713";
export default {
  name: "Frame7714",
  components: {
    Frame7713,
  },
  props: ["className", "frame77131Props", "frame77132Props"],
};
</script>

<style>
.frame-7714 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 320px;
}

.frame-7714.frame-7714-4 {
  flex: unset;
  height: 40px;
  margin-right: 8px;
  margin-top: 50px;
}
</style>
