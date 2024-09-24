<template>
  <div class="container-center-horizontal">
    <div class="editprofile3-1 screen">
      <group757 :text334="group757Props.text334" />
      <div class="frame-7697-2">
        <div class="frame-7966">
          <frame7696 :text356="frame76961Props.text356" :frame7613Props="frame76961Props.frame7613Props" />
          <frame7696 :text356="frame76962Props.text356" :frame7613Props="frame76962Props.frame7613Props" />
          <frame7696 :text356="frame76963Props.text356" :frame7613Props="frame76963Props.frame7613Props" />
        </div>
        <group7582 />
      </div>
      <frame7740
        :className="frame7740Props.className"
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
    </div>
  </div>
</template>

<script>
import Group757 from "./Group757";
import Frame7696 from "./Frame7696";
import Group7582 from "./Group7582";
import Frame7740 from "./Frame7740";
export default {
  name: "AppEditPassword",
  components: {
    Group757,
    Frame7696,
    Group7582,
    Frame7740,
  },
  props: ["group757Props", "frame76961Props", "frame76962Props", "frame76963Props", "frame7740Props"],
};
</script>

<style>
.editprofile3-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 800px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.frame-7697-2 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 40px;
  position: relative;
  width: 320px;
}

.frame-7966 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}
</style>
