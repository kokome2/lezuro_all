<template>
  <div class="btn-group">
    <div class="btnprimary"  @click="$emit('buttonClick')">
      <div class="text-80 valign-text-middle pretendard-regular-normal-white-16px-2">확인</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnGroup",
};
</script>

<style>
.btn-group,
.btn-group-1,
.btn-group-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.btnprimary,
.btnprimary-1,
.btnprimary-2 {
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

.text-80,
.text-81,
.text-82 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -2px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
