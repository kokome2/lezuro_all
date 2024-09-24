<template>
  <div :class="[`frame-7645`, className || ``]">
    <div class="overlap-group-container">
      <div class="overlap-group"><div class="number-3 pretendard-medium-log-cabin-16px">1</div></div>
      <div class="overlap-group1"><div class="number-4 pretendard-medium-white-16px">2</div></div>
      <div class="overlap-group2"><div class="number-5 pretendard-medium-log-cabin-16px">3</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame7645",
  props: ["className"],
};
</script>

<style>
.frame-7645 {
  height: 40px;
  position: relative;
  width: 150px;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  gap: 15px;
  min-width: 152px;
}

.overlap-group {
  align-items: flex-start;
  background-color: var(--gallery);
  border-radius: 40px;
  display: flex;
  height: 40px;
  min-width: 40px;
  padding: 3px 15.8px;
}

.number-3 {
  -webkit-text-stroke: 1px var(--alto);
  letter-spacing: -0.64px;
  line-height: 32px;
  width: 7px;
}

.overlap-group1 {
  align-items: center;
  background-color: var(--monza);
  border-radius: 40px;
  display: flex;
  height: 40px;
  min-width: 40px;
  padding: 0 15px;
}

.number-4 {
  letter-spacing: -0.64px;
  line-height: 32px;
  width: 9px;
}

.overlap-group2 {
  align-items: flex-start;
  background-color: var(--gallery);
  border-radius: 40px;
  display: flex;
  height: 40px;
  min-width: 40px;
  padding: 3px 13.7px;
}

.number-5 {
  -webkit-text-stroke: 1px var(--alto);
  letter-spacing: -0.64px;
  line-height: 32px;
  width: 11px;
}

.frame-7645.frame-7645-5 .overlap-group,
.frame-7645.frame-7645-5 .overlap-group2,
.frame-7645.frame-7645-6 .overlap-group,
.frame-7645.frame-7645-6 .overlap-group2 {
  background-color: var(--cultured-pearl);
}
</style>
