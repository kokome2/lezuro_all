<template>
  <div class="frame-802-4">
    <div class="text-84-2 valign-text-middle pretendard-medium-log-cabin-16px">{{ text843 }}</div>
    <div class="frame-8030">
      <div class="frame-8016-6">
        <div class="frame-8015-6">
          <div class="frame-7611-8">
            <div class="text-84-3 valign-text-middle pretendard-medium-mountain-mist-14px">{{ text844 }}</div>
          </div>
        </div>
      </div>
      <div class="frame-7698">
        <div class="text-84-4 valign-text-middle pretendard-medium-white-14px">{{ text845 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame8023",
  props: ["text843", "text844", "text845"],
};
</script>

<style>
.frame-802-4,
.frame-802-5 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 6px;
  position: relative;
  width: 100%;
}

.text-84-2,
.text-9-11 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.frame-8030,
.frame-8030-1 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 320px;
}

.frame-8016-6,
.frame-8016-7 {
  align-items: center;
  display: flex;
  gap: 14px;
  position: relative;
  width: 207px;
}

.frame-8015-6,
.frame-8015-7 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 207px;
}

.frame-7611-8,
.frame-7611-9 {
  align-items: center;
  align-self: stretch;
  background-color: var(--cultured-pearl);
  display: flex;
  gap: 286px;
  height: 54px;
  justify-content: space-around;
  padding: 0px 20px;
  position: relative;
  width: 100%;
}

.text-84-3,
.text-9-12 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.frame-7698,
.frame-7698-1 {
  align-items: center;
  background-color: var(--mine-shaft);
  display: flex;
  gap: 10px;
  height: 55px;
  justify-content: center;
  padding: 18px 36px;
  position: relative;
  width: 113px;
}

.text-84-4,
.text-9-13 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: -18px;
  margin-right: -18px;
  position: relative;
  width: fit-content;
}
</style>
