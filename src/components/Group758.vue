<template>
  <div class="group-758">
    <div class="overlap-group-6"  @click="$emit('buttonClick')">
      <div class="text-130 valign-text-middle pretendard-semi-bold-white-18px">{{ text130 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group758",
  props: ["text130"],
};
</script>

<style>
.group-758,
.group-758-1,
.group-758-2,
.group-758-3,
.group-758-4 {
  height: 55px;
  margin-right: -2px;
  position: relative;
  width: 702px;
}

.overlap-group-6,
.overlap-group-9,
.overlap-group-10,
.overlap-group-11,
.overlap-group-12 {
  align-items: flex-start;
  background-color: var(--monza);
  display: flex;
  height: 55px;
  justify-content: flex-end;
  min-width: 700px;
  padding: 15px 254.8px;
}

.text-130,
.text-148,
.text-527,
.text-2097,
.text-2216 {
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 189px;
}
</style>
