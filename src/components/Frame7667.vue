<template>
  <div class="frame-7667-5">
    <group673 />
    <div class="frame-7645-2">
      <group668 :number="group6681Props.number" />
      <div class="group-667">
        <div class="overlap-group1-51">
          <div class="number-58 valign-text-middle pretendard-medium-white-14px">2</div>
        </div>
      </div>
      <group668 :number="group6682Props.number" :className="group6682Props.className" />
    </div>
    <group673 />
  </div>
</template>

<script>
import Group673 from "./Group673";
import Group668 from "./Group668";
export default {
  name: "Frame7667",
  components: {
    Group673,
    Group668,
  },
  props: ["group6681Props", "group6682Props"],
};
</script>

<style>
.frame-7667-5,
.frame-7667-6,
.frame-7667-7 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  justify-content: center;
  position: relative;
}

.frame-7645-2,
.frame-7645-3,
.frame-7645-4 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
}

.group-667,
.group-667-1,
.group-667-2 {
  height: 30px;
  position: relative;
  width: 32px;
}

.overlap-group1-51,
.overlap-group1-52,
.overlap-group1-53 {
  align-items: flex-start;
  background-color: var(--monza);
  border-radius: 40px;
  display: flex;
  justify-content: flex-end;
  min-width: 30px;
  padding: 0 10px;
}

.number-58,
.number-59,
.number-60 {
  height: 30px;
  letter-spacing: -0.56px;
  line-height: 32px;
  white-space: nowrap;
}
</style>
