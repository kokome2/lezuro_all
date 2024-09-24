<template>
  <div class="frame-8027">
    <div class="text-1028 valign-text-middle pretendard-medium-log-cabin-16px">성별</div>
    <div class="frame-7611-13">
      <frame76317 :text1029="frame763171Props.text1029" />
      <frame76317 :text1029="frame763172Props.text1029" />
    </div>
  </div>
</template>

<script>
import Frame76317 from "./Frame76317";
export default {
  name: "Frame8027",
  components: {
    Frame76317,
  },
  props: ["frame763171Props", "frame763172Props"],
};
</script>

<style>
.frame-8027,
.frame-8027-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 6px;
  position: relative;
  width: 100%;
}

.text-1028,
.text-1171 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.frame-7611-13,
.frame-7611-14 {
  align-items: center;
  display: flex;
  gap: 30px;
  height: 55px;
  position: relative;
  width: 212px;
}
</style>
