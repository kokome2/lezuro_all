<template>
  <div class="frame-7859-3">
    <frame7712 :text_Label="frame77121Props.text_Label" :className="frame77121Props.className" />
    <frame7712 :text_Label="frame77122Props.text_Label" :className="frame77122Props.className" />
  </div>
</template>

<script>
import Frame7712 from "./Frame7712";
export default {
  name: "Frame7859",
  components: {
    Frame7712,
  },
  props: ["frame77121Props", "frame77122Props"],
};
</script>

<style>
.frame-7859-3,
.frame-7859-4,
.frame-7859-5,
.frame-7859-6,
.frame-7859-7 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}
</style>
