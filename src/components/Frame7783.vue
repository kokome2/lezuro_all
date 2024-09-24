<template>
  <div class="frame-7783">
    <frame7303 :text174="frame7303Props.text174" />
    <frame7281 :className="frame7281Props.className" :frame7772Props="frame7281Props.frame7772Props" />
  </div>
</template>

<script>
import Frame7303 from "./Frame7303";
import Frame7281 from "./Frame7281";
export default {
  name: "Frame7783",
  components: {
    Frame7303,
    Frame7281,
  },
  props: ["frame7303Props", "frame7281Props"],
};
</script>

<style>
.frame-7783,
.frame-7783-1,
.frame-7783-2,
.frame-7783-3 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 10px 0px;
  position: relative;
  width: 100%;
}
</style>
