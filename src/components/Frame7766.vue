<template>
  <div class="frame-7766">
    <frame7303 :text174="frame7303Props.text174" />
    <frame7281 :frame7772Props="frame7281Props.frame7772Props" />
  </div>
</template>

<script>
import Frame7303 from "./Frame7303";
import Frame7281 from "./Frame7281";
export default {
  name: "Frame7766",
  components: {
    Frame7303,
    Frame7281,
  },
  props: ["frame7303Props", "frame7281Props"],
};
</script>

<style>
.frame-7766,
.frame-7766-1,
.frame-7766-2,
.frame-7766-3 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 10px;
  position: relative;
  width: 100%;
}
</style>
