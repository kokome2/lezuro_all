<template>
  <div class="frame">
    <frame78442 :group736="frame78442Props.group736" />
    <div class="rectangle-509280-2"></div>
    <frame77143
      :frame771331Props="frame77143Props.frame771331Props"
      :frame771332Props="frame77143Props.frame771332Props"
    />
    <div class="park pretendard-regular-normal-granite-gray-18px">
      안녕하세요 ~! 반갑습니다.<br />레저로 Park입니다.
    </div>
  </div>
</template>

<script>
import Frame78442 from "./Frame78442";
import Frame77143 from "./Frame77143";
export default {
  name: "Frame7850",
  components: {
    Frame78442,
    Frame77143,
  },
  props: ["frame78442Props", "frame77143Props"],
};
</script>

<style>
.frame {
  align-items: flex-start;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.rectangle-509280-2 {
  align-self: stretch;
  background-color: var(--hint-of-red);
  height: 200px;
  position: relative;
  width: 100%;
}

.park {
  left: 25px;
  letter-spacing: -0.72px;
  line-height: 32px;
  position: absolute;
  top: 81px;
}
</style>
