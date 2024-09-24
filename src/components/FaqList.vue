<template>
  <div class="container-center-horizontal">
    <div class="faq-2-1 screen">
      <Header />
      <rj-zs-wi :frame72911Props="rJZsWIProps.frame72911Props" :frame72912Props="rJZsWIProps.frame72912Props" />
      <view :text89="viewProps.text89" :className="viewProps.className" />
      <div class="frame-7878">
        <div class="frame-7855">
          <frame7298 :frame7669Props="frame7298Props.frame7669Props" />
          <div class="frame-78-3">
            <div class="frame-7865-1">
              <div class="frame-7860-1">
                <div class="text-2516 valign-text-middle pretendard-bold-log-cabin-18px">{{ text2516 }}</div>
              </div>
              <a href="#"><frame78612 :text2517="frame786121Props.text2517" /></a>
              <a href="#"><frame78612 :text2517="frame786122Props.text2517" /></a>
              <a href="#"><frame78612 :text2517="frame786123Props.text2517" /></a>
              <a href="#"><frame78612 :text2517="frame786124Props.text2517" /></a>
            </div>
            <div class="frame-7866">
              <a href="#"><frame78652 :text2521="frame786521Props.text2521" /></a>
              <a href="#"><frame78652 :text2521="frame786522Props.text2521" /></a>
              <a href="#"><frame78612 :text2517="frame786125Props.text2517" /></a>
            </div>
          </div>
        </div>
         <div v-for="(question, index) in questions" :key="index">
          <!-- Question Block -->
          <div class="frame-7870-3" @click="toggleAnswer(index)">
            <div class="frame-7869-1">
              <div class="price valign-text-middle pretendard-bold-black-24px">Q</div>
              <div class="frame-7868-1">
                <div class="text-2524 valign-text-middle pretendard-bold-black-20px">{{ question.title }}</div>
                <p class="text-2525 valign-text-middle pretendard-regular-normal-log-cabin-18px">{{ question.description }}</p>
              </div>
            </div>
            <img class="vector-3-29" src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-3-15.svg" alt="Arrow" />
          </div>

          <!-- Conditional Answer Display -->
          <div class="frame-7872-1" v-if="question.isVisible">
            <div class="frame-7869-2">
              <div class="a-11 valign-text-middle pretendard-bold-black-24px">A</div>
              <div class="frame-7868-1">
                <p class="text-2526 valign-text-middle pretendard-regular-normal-granite-gray-16px">{{ question.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import RjZsWi from "./RjZsWi";
import View from "./View";
import Frame7298 from "./Frame7298";
import Frame78612 from "./Frame78612";
import Frame78652 from "./Frame78652";
import Frame7871 from "./Frame7871";
import XFooter from "./XFooter";
export default {
  name: "FaqList",
  components: {
    Header,
    RjZsWi,
    View,
    Frame7298,
    Frame78612,
    Frame78652,
    Frame7871,
    XFooter,
  },
  props: [
    "text2516",
    "price",
    "text2524",
    "text2525",
    "a",
    "text2526",
    "x9cITtGProps",
    "rJZsWIProps",
    "viewProps",
    "frame7298Props",
    "frame786121Props",
    "frame786122Props",
    "frame786123Props",
    "frame786124Props",
    "frame786521Props",
    "frame786522Props",
    "frame786125Props",
    "xFooterProps",
  ],
   data() {
    return {
      questions: [
        {
          title: "대회",
          description: "대회 관련 질문입니다 대회 관련 질문입니다",
          answer: "대회 관련 첫 번째 답변입니다.",
          isVisible: false,
        },
        {
          title: "대회",
          description: "대회 관련 질문입니다 대회 관련 질문입니다",
          answer: "대회 관련 두 번째 답변입니다.",
          isVisible: false,
        },
        {
          title: "대회",
          description: "대회 관련 질문입니다 대회 관련 질문입니다",
          answer: "대회 관련 세 번째 답변입니다.",
          isVisible: false,
        },
        {
          title: "대회",
          description: "대회 관련 질문입니다 대회 관련 질문입니다",
          answer: "대회 관련 네 번째 답변입니다.",
          isVisible: false,
        },
        {
          title: "대회",
          description: "대회 관련 질문입니다 대회 관련 질문입니다",
          answer: "대회 관련 다섯 번째 답변입니다.",
          isVisible: false,
        },
      ],
    };
  },
   methods: {
    toggleAnswer(index) {
      this.questions[index].isVisible = !this.questions[index].isVisible;
    },
  },
};
</script>

<style>
.faq-2-1 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 1850px;
  position: relative;
  width: 1920px;
}

.frame-7878 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 51px;
  position: relative;
  width: 1400px;
}

.frame-7855 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-78-3 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 1400px;
}

.frame-7865-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.frame-7860-1 {
  align-items: center;
  background-color: var(--monza-2);
  border: 1px solid;
  border-color: var(--monza);
  border-radius: 10px;
  display: flex;
  gap: 10px;
  height: 60px;
  justify-content: center;
  padding: 23px 112px;
  position: relative;
  width: 272px;
}

.text-2516 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.frame-7866 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.frame-7876-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.frame-7870-3 {
  align-items: center;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto);
  border-radius: 20px;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  padding: 30px;
  position: relative;
  width: 1400px;
  cursor: pointer;
}

.frame-7869-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 30px;
  position: relative;
}

.price,
.text-2524,
.a-11 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.frame-7868-1 {
  align-items: flex-end;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
}

.text-2525 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.vector-3-29 {
  height: 7.41px;
  margin-right: -1px;
  position: relative;
  width: 12px;
}

.frame-7872-1 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--cultured-pearl);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 0px 0px 20px 20px;
  border-right-style: solid;
  border-right-width: 1px;
  display: flex;
  flex: 0 0 auto;
  gap: 903px;
  /* justify-content: space-around; */
  padding: 30px;
  position: relative;
  width: 100%;
}

.frame-7869-2 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 30px;
  position: relative;
}

.text-2526 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}
</style>
