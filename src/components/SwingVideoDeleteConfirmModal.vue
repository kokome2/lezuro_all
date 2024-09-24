<template>
  <div class="popupu47defualt-15 screen">
    <div class="frame-5-15">
      <div class="frame-4-15">
        <div class="x-57 valign-text-middle pretendard-bold-log-cabin-18px">{{ x7fbmQ2 }}</div>
        <img class="image" :src="image" alt="image" />
      </div>
    </div>
    <btn-group3 />
  </div>
</template>

<script>
import BtnGroup3 from "./BtnGroup3";
export default {
  name: "SwingVideoDeleteConfirmModal",
  components: {
    BtnGroup3,
  },
  props: ["x7fbmQ2", "image"],
};
</script>

<style>
.popupu47defualt-15 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.frame-5-15 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 20px 0px;
  position: relative;
  width: 280px;
}

.frame-4-15 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.x-57 {
  letter-spacing: -0.36px;
  line-height: 27px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.image {
  flex: 0 0 auto;
  position: relative;
  width: 165.77px;
}
</style>
