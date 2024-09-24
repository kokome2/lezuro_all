<template>
  <div class="frame-7688">
    <div class="group-763-2">
      <div class="overlap-group-107">
        <frame8082 :text1405="frame8082Props.text1405" :className="frame8082Props.className" />
      </div>
      <frame7683 :className="frame7683Props.className" />
    </div>
  </div>
</template>

<script>
import Frame8082 from "./Frame8082";
import Frame7683 from "./Frame7683";
export default {
  name: "Frame7688",
  components: {
    Frame8082,
    Frame7683,
  },
  props: ["frame8082Props", "frame7683Props"],
};
</script>

<style>
.frame-7688 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 413px;
}

.group-763-2 {
  height: 490px;
  position: relative;
  width: 413px;
}

.overlap-group-107 {
  align-items: flex-start;
  background-image: url(https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-4@2x.png);
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 250px;
  left: 0;
  min-width: 413px;
  padding: 25px 23.5px;
  position: absolute;
  top: 0;
}
</style>
