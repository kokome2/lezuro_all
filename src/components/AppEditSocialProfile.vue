<template>
  <div class="container-center-horizontal">
    <div class="editprofile1-2 screen">
      <group757 :text334="group757Props.text334" />
      <div class="frame-7697-4">
        <div class="frame-7696-3">
          <div class="frame-7625-4">
            <div class="frame-7-25">
              <frame7613 :text123="frame76131Props.text123" />
              <div class="frame-761-3"><frame7631 /></div>
            </div>
            <div class="frame-7-25">
              <frame7613 :text123="frame76132Props.text123" />
              <div class="frame-761-3"><frame76312 /></div>
            </div>
            <div class="frame-7-25">
              <frame7613 :text123="frame76133Props.text123" />
              <div class="frame-7614-3"><frame7904 /></div>
            </div>
          </div>
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
import Frame7613 from "./Frame7613";
import Frame7631 from "./Frame7631";
import Frame76312 from "./Frame76312";
import Frame7904 from "./Frame7904";
import Group7582 from "./Group7582";
import Frame7740 from "./Frame7740";
export default {
  name: "AppEditSocialProfile",
  components: {
    Group757,
    Frame7613,
    Frame7631,
    Frame76312,
    Frame7904,
    Group7582,
    Frame7740,
  },
  props: ["group757Props", "frame76131Props", "frame76132Props", "frame76133Props", "frame7740Props"],
};
</script>

<style>
.editprofile1-2 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 800px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.frame-7697-4 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 40px;
  position: relative;
  width: 320px;
}

.frame-7696-3 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-7625-4 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.frame-7-25 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
}

.frame-761-3 {
  align-items: center;
  background-color: var(--cultured-pearl);
  display: flex;
  gap: 30px;
  height: 55px;
  padding: 0px 20px;
  position: relative;
  width: 320px;
}

.frame-7614-3 {
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  gap: 30px;
  height: 55px;
  position: relative;
  width: 320px;
}
</style>
