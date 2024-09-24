<template>
  <div class="popupu47defualt-6 screen">
    <div class="frame-5-8">
      <div class="frame-4-8">
        <div class="x-50 valign-text-middle notosanskr-medium-log-cabin-16px">비공개 대회</div>
        <div class="frame-7281">
          <div class="text-85 valign-text-middle pretendard-regular-normal-mountain-mist-14px">비밀번호</div>
        </div>
        <div class="text_label-41 valign-text-middle notosanskr-normal-tuatara-14px">비밀번호를 입력해주세요.</div>
      </div>
    </div>
    <btn-group2 :text_Label="btnGroup2Props.text_Label" :text83="btnGroup2Props.text83" />
  </div>
</template>

<script>
import BtnGroup2 from "./BtnGroup2";
export default {
  name: "PGamePasswordModalno2",
  components: {
    BtnGroup2,
  },
  props: ["btnGroup2Props"],
};
</script>

<style>
.popupu47defualt-6,
.popupu47defualt-7 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.frame-5-8,
.frame-5-9 {
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

.frame-4-8,
.frame-4-9 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.x-50,
.x-51 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.frame-7281,
.frame-7281-1 {
  background-color: var(--blackwhitewhite);
  border: 0.5px solid;
  border-color: var(--alto);
  height: 53px;
  position: relative;
  width: 242px;
}

.text-85,
.text-87 {
  height: 10px;
  left: 26px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 22px;
  white-space: nowrap;
}

.text_label-41,
.text_label-52 {
  letter-spacing: -0.28px;
  line-height: 21px;
  position: relative;
  text-align: center;
  width: 226px;
}
</style>
