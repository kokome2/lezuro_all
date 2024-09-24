<template>
  <div class="group-3363-9">
    <div class="frame-container-6">
      <frame80802 />
      <frame8082 :text1405="frame8082Props.text1405" :className="frame8082Props.className" />
    </div>
  </div>
</template>

<script>
import Frame80802 from "./Frame80802";
import Frame8082 from "./Frame8082";
export default {
  name: "Group336332",
  components: {
    Frame80802,
    Frame8082,
  },
  props: ["frame8082Props"],
};
</script>

<style>
.group-3363-9 {
  height: 345px;
  position: relative;
  width: 155px;
}

.frame-container-6 {
  height: 345px;
  position: relative;
}
</style>
