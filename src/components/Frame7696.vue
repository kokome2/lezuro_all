<template>
  <div class="frame-769">
    <div class="frame-7625-2">
      <div class="frame-7627">
        <frame7613 :text123="frame7613Props.text123" />
        <div class="frame-7611">
          <div class="text-3-17 valign-text-middle pretendard-medium-mountain-mist-16px">{{ text356 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7613 from "./Frame7613";
export default {
  name: "Frame7696",
  components: {
    Frame7613,
  },
  props: ["text356", "frame7613Props"],
};
</script>

<style>
.frame-769 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-7625-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-7627 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
}

.frame-7611 {
  align-items: center;
  background-color: var(--cultured-pearl);
  display: flex;
  gap: 286px;
  height: 55px;
  justify-content: space-around;
  padding: 0px 20px;
  position: relative;
  width: 320px;
}

.text-3-17 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
