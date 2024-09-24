<template>
  <div class="container-center-horizontal">
    <div class="menu-login screen">
      <frame8150 />
      <div class="frame-8204-1">
        <div class="frame-8203-1">
          <img
            class="x-line"
            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/majesticons-user-line-1.svg"
            alt="majesticons:user-line"
          />
          <div class="text-5-3 valign-text-middle pretendard-regular-normal-log-cabin-14px">{{ text56 }}</div>
        </div>
        <div class="group-33660">
          <img
            class="vector-4-3"
            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-4-10.svg"
            alt="Vector 4"
          />
        </div>
      </div>
      <frame8201
        :frame81571Props="frame8201Props.frame81571Props"
        :frame81572Props="frame8201Props.frame81572Props"
        :frame81611Props="frame8201Props.frame81611Props"
        :frame81612Props="frame8201Props.frame81612Props"
      />
      <div class="frame-8206">
        <div class="frame-820">
          <img
            class="x-line"
            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/lets-icons-setting-line-light.svg"
            alt="lets-icons:setting-line-light"
          />
          <div class="text-5-3 valign-text-middle pretendard-regular-normal-granite-gray-14px">{{ text57 }}</div>
        </div>
        <div class="frame-820">
          <img
            class="hugeiconslogout-04"
            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/hugeicons-logout-04.svg"
            alt="hugeicons:logout-04"
          />
          <div class="text-5-3 valign-text-middle pretendard-regular-normal-granite-gray-14px">{{ text58 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame8150 from "./Frame8150";
import Frame8201 from "./Frame8201";
export default {
  name: "MenuLogin",
  components: {
    Frame8150,
    Frame8201,
  },
  props: ["text56", "text57", "text58", "frame8201Props"],
};
</script>

<style>
.menu-login {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 800px;
  position: relative;
  width: 260px;
}

.frame-8204-1 {
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--gallery);
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0px 10px;
  position: relative;
  width: 230px;
}

.frame-8203-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  position: relative;
}

.x-line {
  height: 16px;
  position: relative;
  width: 16px;
}

.text-5-3 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.group-33660 {
  background-color: var(--wild-sand);
  border-radius: 11px;
  height: 22px;
  position: relative;
  width: 22px;
}

.vector-4-3 {
  height: 7px;
  left: 10px;
  position: absolute;
  top: 8px;
  width: 4px;
}

.frame-8206 {
  align-items: center;
  border-color: var(--alto);
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  margin-top: 219px;
  position: relative;
  width: 230px;
}

.frame-820 {
  align-items: center;
  display: flex;
  gap: 4px;
  justify-content: center;
  padding: 18px 0px;
  position: relative;
  width: 115px;
}

.hugeiconslogout-04 {
  height: 14px;
  position: relative;
  width: 14px;
}
</style>
