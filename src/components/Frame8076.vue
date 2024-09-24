<template>
  <div :class="[`frame-8076`, className || ``]">
    <group673 />
    <div class="frame-8075">
      <div class="group-3363">
        <div class="overlap-group-55">
          <div class="rectangle-50918"></div>
          <div class="number-47 pretendard-medium-log-cabin-16px">1</div>
        </div>
      </div>
      <div class="group-3363">
        <div class="overlap-group-55">
          <div class="rectangle-509188"></div>
          <div class="number-39 pretendard-medium-white-16px">2</div>
        </div>
      </div>
      <div class="group-33632">
        <div class="overlap-group-55">
          <div class="rectangle-50918"></div>
          <div class="number-39 pretendard-medium-log-cabin-16px">3</div>
        </div>
      </div>
    </div>
    <group673 />
  </div>
</template>

<script>
import Group673 from "./Group673";
export default {
  name: "Frame8076",
  components: {
    Group673,
  },
  props: ["className"],
};
</script>

<style>
.frame-8076 {
  align-items: center;
  display: inline-flex;
  gap: 30px;
  margin-right: 8px;
  margin-top: 39px;
  position: relative;
}

.frame-8075 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
}

.group-3363 {
  height: 32px;
  position: relative;
  width: 32px;
}

.overlap-group-55 {
  height: 32px;
  position: relative;
  top: -1px;
  width: 30px;
}

.rectangle-50918 {
  background-color: var(--gallery);
  border-radius: 40px;
  height: 30px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 30px;
}

.number-47 {
  -webkit-text-stroke: 1px var(--alto);
  left: 10px;
  letter-spacing: -0.64px;
  line-height: 32px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.rectangle-509188 {
  background-color: var(--monza);
  border-radius: 40px;
  height: 30px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 30px;
}

.number-39 {
  -webkit-text-stroke: 1px var(--alto);
  left: 9px;
  letter-spacing: -0.64px;
  line-height: 32px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.group-33632 {
  height: 32px;
  margin-right: -2px;
  position: relative;
  width: 32px;
}

.frame-8076.frame-8076-1,
.frame-8076.frame-8076-2,
.frame-8076.frame-8076-7 {
  margin-top: 30px;
}

.frame-8076.frame-8076-3 {
  margin-right: unset;
  margin-top: 30px;
}

.frame-8076.frame-8076-4 {
  margin-top: 20px;
}

.frame-8076.frame-8076-5 {
  margin-top: 40px;
}

.frame-8076.frame-8076-6 {
  margin-top: 50px;
}
</style>
