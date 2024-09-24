<template>
  <div :class="[`frame-7850-2`, className || ``]">
    <frame78442 :group736="frame78442Props.group736" />
    <div class="rectangle-509280-3"></div>
    <frame7846
      :className="frame7846Props.className"
      :frame731121Props="frame7846Props.frame731121Props"
      :frame731122Props="frame7846Props.frame731122Props"
    />
    <div class="park-3 pretendard-regular-normal-granite-gray-18px">
      안녕하세요 ~! 반갑습니다.<br />레저로 Park입니다.
    </div>
  </div>
</template>

<script>
import Frame78442 from "./Frame78442";
import Frame7846 from "./Frame7846";
export default {
  name: "Frame78502",
  components: {
    Frame78442,
    Frame7846,
  },
  props: ["className", "frame78442Props", "frame7846Props"],
};
</script>

<style>
.frame-7850-2 {
  align-items: flex-start;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 0px 0px 50px;
  position: relative;
  width: 100%;
}

.rectangle-509280-3 {
  align-self: stretch;
  background-color: var(--hint-of-red);
  height: 200px;
  position: relative;
  width: 100%;
}

.park-3 {
  left: 25px;
  letter-spacing: -0.72px;
  line-height: 32px;
  position: absolute;
  top: 81px;
}

.frame-7850-2.frame-7851 {
  border-bottom-style: unset;
  border-bottom-width: unset;
  border-color: unset;
  padding: unset;
}
</style>
