<template>
  <div :class="[`frame-7667`, className || ``]">
    <group673 />
    <frame7645 :className="frame7645Props.className" />
<group673 class="flipped" /> 
  </div>
</template>

<script>
import Group673 from "./Group673";
import Frame7645 from "./Frame7645";
export default {
  name: "Frame763",
  components: {
    Group673,
    Frame7645,
  },
  props: ["className", "frame7645Props"],
};
</script>

<style>
.frame-7667 {
  align-items: flex-end;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 30px;
  justify-content: center;
  position: relative;
}

.frame-7667.frame-7667-1,
.frame-7667.frame-763-1,
.frame-7667.frame-7667-3,
.frame-7667.frame-7667-4 {
  align-items: center;
}

.frame-7667.frame-7667-2,
.frame-7667.frame-763,
.frame-7667.frame-763-2 {
  align-items: center;
  justify-content: unset;
}
.flipped {
  transform: scaleX(-1); /* 가로로 반전 */
}
</style>
