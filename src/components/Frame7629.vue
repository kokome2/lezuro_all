<template>
  <div class="frame-7629">
    <frame7613 :text123="frame7613Props.text123" />
    <div class="frame-7611-18">
      <frame76317 :text1029="frame763171Props.text1029" />
      <frame76317 :text1029="frame763172Props.text1029" />
    </div>
  </div>
</template>

<script>
import Frame7613 from "./Frame7613";
import Frame76317 from "./Frame76317";
export default {
  name: "Frame7629",
  components: {
    Frame7613,
    Frame76317,
  },
  props: ["frame7613Props", "frame763171Props", "frame763172Props"],
};
</script>

<style>
.frame-7629,
.frame-7629-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.frame-7611-18,
.frame-7611-19 {
  align-items: center;
  display: flex;
  gap: 30px;
  height: 55px;
  position: relative;
  width: 560px;
}
</style>
