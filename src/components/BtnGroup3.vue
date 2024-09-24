<template>
  <div class="btn-group-5">
    <div class="btnprimary-8" @click="$emit('buttonClick')" >
      <div class="text-131 valign-text-middle pretendard-semi-bold-white-16px">확인</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "BtnGroup3",
};
</script>

<style>
.btn-group-5,
.btn-group-6,
.btn-group-7,
.btn-group-9,
.btn-group-10,
.btn-group-11,
.btn-group-12 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.btnprimary-8,
.btnprimary-15,
.btnprimary-16,
.btnprimary-17,
.btnprimary-18,
.btnprimary-19,
.btnprimary-20 {
  align-items: center;
  background-color: var(--monza);
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 14px 10px;
  position: relative;
}

.text-131,
.text-133,
.text-137,
.text-138,
.text-139,
.text-140,
.text-141 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -2px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
