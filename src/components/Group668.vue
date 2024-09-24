<template>
  <div :class="[`group-668`, className || ``]">
    <div class="overlap-group-69">
      <div class="rectangle-50918-8"></div>
      <div class="number-61 valign-text-middle pretendard-medium-log-cabin-14px">{{ number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group668",
  props: ["number", "className"],
};
</script>

<style>
.group-668 {
  height: 30px;
  position: relative;
  width: 32px;
}

.overlap-group-69 {
  height: 31px;
  position: relative;
  top: -1px;
  width: 30px;
}

.rectangle-50918-8 {
  background-color: var(--gallery);
  border-radius: 40px;
  height: 30px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 30px;
}

.number-61 {
  -webkit-text-stroke: 1px var(--alto);
  height: 30px;
  left: 10px;
  letter-spacing: -0.56px;
  line-height: 32px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 7px;
}

.group-668.group-669,
.group-668.group-669-1,
.group-668.group-669-2 {
  margin-right: -2px;
}

.group-668.group-669 .number-61,
.group-668.group-669-1 .number-61,
.group-668.group-669-2 .number-61 {
  width: 11px;
}
</style>
