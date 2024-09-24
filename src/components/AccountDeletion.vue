<template>
  <div class="container-center-horizontal">
    <div class="secession-2 screen">
      <div class="frame-7812-3">
        <div class="frame-7907">
          <div class="frame-7811">
            <img
              class="objects-1"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/objects-1.svg"
              alt="Objects"
            />
            <div class="frame-7810-4">
              <h1 class="text-1787 valign-text-middle pretendard-bold-mine-shaft-48px">{{ text1787 }}</h1>
              <p class="text-1788 valign-text-middle pretendard-regular-normal-log-cabin-28px" v-html="text1788"></p>
            </div>
          </div>
          <frame7712 :text_Label="frame7712Props.text_Label" :className="frame7712Props.className" @click="confirmDeletation" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7712 from "./Frame7712";
export default {
  name: "AccountDeletion",
  components: {
    Frame7712,
  },
  props: ["text1787", "text1788", "frame7712Props"],
  methods:{
    confirmDeletation(){
      this.$router.push({ path:"/" })
    }
  }
};
</script>

<style>
.secession-2 {
  align-items: flex-start;
  background-color: var(--gallery);
  display: flex;
  height: 975px;
  padding: 135px 560px;
  width: 1920px;
}

.frame-7812-3 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 1px;
  padding: 70px 50px 60px;
  position: relative;
  width: 800px;
}

.frame-7907 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7811 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 100px;
  position: relative;
  width: 100%;
}

.objects-1 {
  height: 180px;
  position: relative;
  width: 180px;
}

.frame-7810-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.text-1787 {
  letter-spacing: 0;
  line-height: 60px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text-1788 {
  align-self: stretch;
  height: 100px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
}
</style>
