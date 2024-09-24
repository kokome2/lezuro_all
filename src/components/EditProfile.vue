<template>
  <div class="container-center-horizontal">
    <div class="editprofile2-1 screen">
      <div class="frame-7634-1">
        <frame7605 :text122="frame7605Props.text122" />
        <div class="frame-7697-1">
          <div class="frame-7696-1">
            <div class="frame-7625-1">
              <div class="frame-763-5">
                <frame76132 :text143="frame761321Props.text143" />
                <input type="text" 
                class="frame-7614-1" 
                placeholder="레저로 골프왕" />
              </div>
              <div class="frame-7626">
                <frame76132 :text143="frame761322Props.text143" />
                <input
                  type="text"
                  class="frame-7614-1"
                  placeholder="4215"
                />
              </div>
              <div class="frame-763-5">
                <frame76132 :text143="frame761323Props.text143" />
                <input
                  type="text"
                  class="frame-7614-1"
                  placeholder="010-4561-4561"
                />
              </div>
              <div class="frame-763-5">
                <frame76132 :text143="frame761324Props.text143" />
                <input type="text" 
                class="frame-7614-1"
                 placeholder="abcd@gmail.com" />
              </div>
            </div>
          </div>
          <group758 :text130="group758Props.text130" @buttonClick="editprofile"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7605 from "./Frame7605";
import Frame76132 from "./Frame76132";
import Frame76313 from "./Frame76313";
import Frame76314 from "./Frame76314";
import Frame76315 from "./Frame76315";
import Frame76316 from "./Frame76316";
import Group758 from "./Group758";
export default {
  name: "EditProfile",
  components: {
    Frame7605,
    Frame76132,
    Frame76313,
    Frame76314,
    Frame76315,
    Frame76316,
    Group758,
  },
  props: [
    "frame7605Props",
    "frame761321Props",
    "frame761322Props",
    "frame761323Props",
    "frame761324Props",
    "group758Props",
  ],
  methods:{
    editprofile(){
      alert('변경되었습니다.')
      this.$router.push({path:"/myprofile"})
    }
  }
};
</script>

<style>
.editprofile2-1 {
  align-items: flex-start;
  background-color: var(--gallery);
  display: flex;
  height: 1005px;
  padding: 238.5px 560px;
  width: 1920px;
}

.frame-7634-1 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  margin-top: 1px;
  overflow: hidden;
  padding: 50px;
  position: relative;
  width: 800px;
}

.frame-7697-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7696-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-7625-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-763-5 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.frame-761-1 {
  align-items: center;
  background-color: var(--cultured-pearl);
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 30px;
  height: 55px;
  padding: 0px 20px;
  position: relative;
}

.frame-7626 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  padding: 0px 20px 0px 0px;
  position: relative;
  width: 100%;
}

.frame-7614-1 {
  align-items: center;
  border:none;
  background-color: var(--cultured-pearl);
  display: flex;
  gap: 30px;
  height: 55px;
  margin-right: -20px;
  padding: 0px 20px;
  position: relative;
  width: 530px;
}
</style>
