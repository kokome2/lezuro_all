<template>
  <div class="btn-group-13">
    <!-- 닫기 버튼 클릭 시 'close' 이벤트 emit -->
    <btnprimary :text_Label="btnprimary1Props.text_Label" @click="$emit('click', 'close')" />
    
    <!-- 신청 버튼 클릭 시 'apply' 이벤트 emit -->
    <btnprimary :text_Label="btnprimary2Props.text_Label" :className="btnprimary2Props.className" @click="$emit('click', 'apply')" />
  </div>
</template>

<script>
import Btnprimary from "./Btnprimary";
export default {
  name: "BtnGroup4",
  components: {
    Btnprimary,
  },
  props: ["btnprimary1Props", "btnprimary2Props"],
};
</script>

<style>
.btn-group-13,
.btn-group-14,
.btn-group-15 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}
</style>
