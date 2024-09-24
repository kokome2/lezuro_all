<template>
  <div :class="[`btn-group-3`, className || ``]">
    <div class="btnsecondary"  @click="$emit('click', 'close')">
      <div class="text_label-35 valign-text-middle notosanskr-light-white-16px"  @click="$emit('click', 'close')">닫기</div>
    </div>
    <div class="btnprimary-3"  @click="$emit('click', 'cancel')">
      <div class="text-83 valign-text-middle notosanskr-light-white-16px" @click="$emit('click', 'cancel')">취소</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnGroup2",
  props: ["text_Label", "text83", "className"],
};
</script>

<style>
.btn-group-3 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
}

.btnsecondary {
  align-items: center;
  background-color: var(--nobel);
  display: flex;
  gap: 10px;
  height: 52px;
  justify-content: center;
  margin-bottom: -1px;
  margin-left: -1px;
  margin-top: -1px;
  padding: 14px 10px;
  position: relative;
  width: 140px;
}

.text_label-35 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.btnprimary-3 {
  align-items: center;
  background-color: var(--monza);
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 14px 10px;
  position: relative;
  width: 138px;
}

.text-83 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -2px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.btn-group-3.btn-group-8 .btnsecondary {
  border-color: var(--blackwhitewhite);
  border-right-style: solid;
  border-right-width: 0.5px;
}

.btn-group-3.btn-group-8 .text_label-35 {
  margin-top: -1.25px;
}

.btn-group-3.btn-group-8 .btnprimary-3 {
  background-color: var(--nobel);
}
</style>
