<template>
  <div :class="[`group-764-3`, className || ``]">
    <div class="ellipse-11-1"></div>
    <p class="text-18-8 valign-text-middle pretendard-semi-bold-white-12px-2">
      <span
        ><span class="span-89 pretendard-semi-bold-log-cabin-12px">{{ spanText1 }}</span
        ><span class="span-89 pretendard-semi-bold-mountain-mist-12px">계양구 아나지로 524-1</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Group764",
  props: ["spanText1", "className"],
};
</script>

<style>
.group-764-3 {
  align-items: center;
  display: flex;
  gap: 5px;
  height: 40px;
  left: 20px;
  min-width: 302px;
  position: absolute;
  top: 0;
}

.ellipse-11-1 {
  border: 2px solid;
  border-color: var(--greygrey-900);
  border-radius: 4px;
  height: 8px;
  width: 8px;
}

.text-18-8 {
  height: 40px;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
  width: 287px;
}

.group-764-3.group-765 {
  top: 40px;
}

.group-764-3.group-766 {
  top: 80px;
}

.group-764-3.group-767 {
  top: 120px;
}

.group-764-3.group-768 {
  top: 160px;
}

.group-764-3.group-769-1 {
  top: 200px;
}
</style>
