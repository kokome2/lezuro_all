<template>
  <div class="frame-812-1">
    <div class="group">
      <div class="group-33608">
        <div class="group">
          <img
            class="group-33602"
            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/group-33602@2x.png"
            alt="Group 33602"
          />
          <div class="text-16-7 pretendard-extra-extra-bold-white-12px">{{ text1611 }}</div>
        </div>
      </div>
    </div>
    <div class="text-16-8 pretendard-semi-bold-black-14px-2">{{ text1612 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame8127",
  props: ["text1611", "text1612"],
};
</script>

<style>
.frame-812-1 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-radius: 10px;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  position: relative;
}

.group {
  height: 60px;
  position: relative;
  width: 60px;
}

.group-33608 {
  align-items: flex-start;
  display: flex;
  min-width: 62px;
}

.group-33602 {
  height: 60px;
  left: 1px;
  position: absolute;
  top: 0;
  width: 57px;
}

.text-16-7 {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 25px;
  white-space: nowrap;
  width: 60px;
}

.text-16-8 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
}
</style>
