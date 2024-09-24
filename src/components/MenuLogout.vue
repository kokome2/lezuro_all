<template>
  <div class="container-center-horizontal">
    <div class="menu-logout screen">
      <frame8150 />
      <div class="frame-8204">
        <div class="frame-8203">
          <img
            class="majesticonsuser-line-34"
            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/majesticons-user-line-1.svg"
            alt="majesticons:user-line"
          />
          <div class="text-46 valign-text-middle pretendard-regular-normal-log-cabin-14px">{{ text46 }}</div>
        </div>
      </div>
      <frame8201
        :frame81571Props="frame8201Props.frame81571Props"
        :frame81572Props="frame8201Props.frame81572Props"
        :frame81611Props="frame8201Props.frame81611Props"
        :frame81612Props="frame8201Props.frame81612Props"
      />
    </div>
  </div>
</template>

<script>
import Frame8150 from "./Frame8150";
import Frame8201 from "./Frame8201";
export default {
  name: "MenuLogout",
  components: {
    Frame8150,
    Frame8201,
  },
  props: ["text46", "frame8201Props"],
};
</script>

<style>
.menu-logout {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 800px;
  position: relative;
  width: 260px;
}

.frame-8204 {
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--gallery);
  display: flex;
  gap: 55px;
  height: 50px;
  padding: 0px 10px;
  position: relative;
  width: 230px;
}

.frame-8203 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  position: relative;
}

.majesticonsuser-line-34 {
  height: 16px;
  position: relative;
  width: 16px;
}

.text-46 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
