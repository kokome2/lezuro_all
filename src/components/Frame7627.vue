<template>
  <div :class="[`frame-7627-1-1`, className || ``]">
    <frame7613 :text123="frame7613Props.text123" />
    <div class="frame-7611-1">
      <div class="text-52-1 valign-text-middle pretendard-medium-mountain-mist-16px">{{ text522 }}</div>
    </div>
  </div>
</template>

<script>
import Frame7613 from "./Frame7613";
export default {
  name: "Frame7627",
  components: {
    Frame7613,
  },
  props: ["text522", "className", "frame7613Props"],
};
</script>

<style>
.frame-7627-1-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.frame-7611-1 {
  align-items: center;
  background-color: var(--cultured-pearl);
  display: flex;
  gap: 286px;
  height: 55px;
  justify-content: space-around;
  padding: 0px 20px;
  position: relative;
  width: 560px;
}

.text-52-1 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7627-1-1.frame-76-2 .frame-7611-1,
.frame-7627-1-1.frame-76-1-1 .frame-7611-1,
.frame-7627-1-1.frame-76-3 .frame-7611-1,
.frame-7627-1-1.frame-76-4 .frame-7611-1,
.frame-7627-1-1.frame-76-5 .frame-7611-1,
.frame-7627-1-1.frame-76-6 .frame-7611-1,
.frame-7627-1-1.frame-76 .frame-7611-1,
.frame-7627-1-1.frame-76-1-2 .frame-7611-1,
.frame-7627-1-1.frame-76-1 .frame-7611-1 {
  background-color: var(--blackwhitewhite);
}
.frame-7613{
  align-items: center;
  display: flex;
  gap: 286px;
  height: 55px;
  position: relative;
  width: 140px;
}
</style>
