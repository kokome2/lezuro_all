<template>
  <div class="popupu47defualt-11 screen">
    <div class="frame-5-12">
      <div class="frame-4-12">
        <div class="x-54 valign-text-middle notosanskr-medium-log-cabin-16px">{{ DlPP1d }}</div>
        <div class="text_label-55 valign-text-middle notosanskr-normal-tuatara-14px">{{ text_Label }}</div>
      </div>
    </div>
    <btn-group2 :text_Label="btnGroup2Props.text_Label" :text83="btnGroup2Props.text83" />
  </div>
</template>

<script>
import BtnGroup2 from "./BtnGroup2";
export default {
  name: "SwingVideoDeleteModalno2",
  components: {
    BtnGroup2,
  },
  props: ["DlPP1d", "text_Label", "btnGroup2Props"],
};
</script>

<style>
.popupu47defualt-11 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.frame-5-12 {
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

.frame-4-12 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.x-54 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text_label-55 {
  letter-spacing: -0.28px;
  line-height: 21px;
  position: relative;
  text-align: center;
  width: 226px;
}
</style>
