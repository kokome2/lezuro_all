<template>
  <div :class="[`frame-7758-2`, className || ``]">
    <div class="text-1609">코스난이도</div>
    <frame7345 :className="frame7345Props.className" />
  </div>
</template>

<script>
import Frame7345 from "./Frame7345";
export default {
  name: "Frame7758",
  components: {
    Frame7345,
  },
  props: ["className", "frame7345Props"],
};
</script>

<style>
.frame-7758-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  margin-right: -78px;
  position: relative;
}

.text-1609 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7758-2.frame-7758-1 {
  flex: unset;
  left: 0;
  margin-right: unset;
  position: absolute;
  top: 26px;
}

.frame-7758-2.frame-7758-3 {
  margin-right: unset;
}
</style>
