<template>
  <div class="popupu47defualt-13 screen">
    <div class="frame-5-13">
      <div class="frame-4-13">
        <div class="x-55 valign-text-middle notosanskr-medium-log-cabin-16px">내 정보 변경하기</div>
        <div class="text_label-56 valign-text-middle notosanskr-normal-tuatara-14px">내 정보를 변경하시겠습니까?</div>
      </div>
    </div>
    <btn-group2 :text_Label="btnGroup2Props.text_Label" :text83="btnGroup2Props.text83" />
  </div>
</template>

<script>
import BtnGroup2 from "./BtnGroup2";
export default {
  name: "EditProfileModal",
  components: {
    BtnGroup2,
  },
  props: ["btnGroup2Props"],
};
</script>

<style>
.popupu47defualt-13,
.popupu47defualt-14 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.frame-5-13,
.frame-5-14 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 24px 10px;
  position: relative;
}

.frame-4-13,
.frame-4-14 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.x-55,
.x-56 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text_label-56,
.text_label-57 {
  letter-spacing: -0.28px;
  line-height: 21px;
  position: relative;
  text-align: center;
  width: 226px;
}
</style>
