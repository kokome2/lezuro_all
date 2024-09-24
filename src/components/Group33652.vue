<template>
  <div class="group-3365">
    <div class="frame-container-2">
      <frame8080 />
      <frame8082 :text1405="frame8082Props.text1405" />
    </div>
  </div>
</template>

<script>
import Frame8080 from "./Frame8080";
import Frame8082 from "./Frame8082";
export default {
  name: "Group33652",
  components: {
    Frame8080,
    Frame8082,
  },
  props: ["frame8082Props"],
};
</script>

<style>
.group-3365 {
  height: 249px;
  position: relative;
  width: 155px;
}

.frame-container-2 {
  height: 249px;
  position: relative;
}
</style>
