<template>
  <div class="container-center-horizontal">
    <div class="editprofile1-1 screen">
      <div class="frame-7634">
        <frame7605 :text122="frame7605Props.text122" />
        <div class="frame-7697">
          <div class="frame-7696">
            <div class="frame-7625">
              <div class="frame-7-24">
                <frame7613 :text123="frame76131Props.text123" />
                <input type="text"
                class="frame-761"
                placeholder="레저로 이름">
              </div>
              <div class="frame-7-24">
                <frame7613 :text123="frame76132Props.text123" />
                 <input type="text"
                class="frame-761"
                placeholder="2002년 7월 2일">
              </div>
              <div class="frame-7-24">
                <frame7613 :text123="frame76133Props.text123" />
                <input type="radio"
                class=" valign-text-middle pretendard-medium-mountain-mist-16px">남자
                <input type="radio"
                class=" valign-text-middle pretendard-medium-mountain-mist-16px"
                style="margin-left:20px;">여자
              </div>
            </div>
          </div>
          <group758 :text130="group758Props.text130" @buttonClick="confirmEditInfo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7605 from "./Frame7605";
import Frame7613 from "./Frame7613";
import Frame7631 from "./Frame7631";
import Frame76312 from "./Frame76312";
import Frame7904 from "./Frame7904";
import Group758 from "./Group758";
export default {
  name: "EditSocialProfile",
  components: {
    Frame7605,
    Frame7613,
    Frame7631,
    Frame76312,
    Frame7904,
    Group758,
  },
  props: ["frame7605Props", "frame76131Props", "frame76132Props", "frame76133Props", "group758Props"],
  methods:{
    confirmEditInfo(){
      alert('변경이 완료되었습니다')
      this.$router.push({path:"/myprofile"})
    }
  }
};
</script>

<style>
.editprofile1-1 {
  align-items: flex-start;
  background-color: var(--gallery);
  display: flex;
  height: 1005px;
  padding: 272px 560px;
  width: 1920px;
}

.frame-7634 {
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

.frame-7697 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap:20px;
  position: relative;
  width: 100%;
}

.frame-7696 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-7625 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-7-24 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.frame-761 {
  align-items: center;
  background-color: var(--cultured-pearl);
  display: flex;
  gap: 30px;
  height: 55px;
  border:none;
  padding: 0px 20px;
  position: relative;
  width: 560px;
}

.frame-7614 {
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  gap: 30px;
  height: 55px;
  position: relative;
  width: 560px;
}
</style>
