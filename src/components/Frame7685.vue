<template>
  <div class="frame-768">
    <div class="group-763-1">
      <frame8082 :text1405="frame8082Props.text1405" :className="frame8082Props.className" />
    </div>
    <frame7683 />
  </div>
</template>

<script>
import Frame8082 from "./Frame8082";
import Frame7683 from "./Frame7683";
export default {
  name: "Frame7685",
  components: {
    Frame8082,
    Frame7683,
  },
  props: ["frame8082Props"],
};
</script>

<style>
.frame-768 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 413px;
}

.group-763-1 {
  background-image: url(https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-3@2x.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 250px;
  position: relative;
  width: 413px;
}
</style>
