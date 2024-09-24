<template>
  <div class="container-center-horizontal">
    <div class="signup2-2 screen">
      <uui-t-pl />
      <div class="frame-7634-3">
        <frame7605 :text122="frame7605Props.text122" />
        <div class="frame-7697-6">
          <div class="frame-7696-4">
            <div class="frame-7625-6">
              <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">성명</div>
                <input type="text"
                placeholder="이름을 입력해주세요"
                class="frame-7611-1 valign-text-middle pretendard-medium-mountain-mist-16px">
              </div>
              <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">아이디</div>
                <input type="text"
                placeholder="영문,숫자/6 ~ 12자로 입력하세요"
                class="frame-7611-1 valign-text-middle pretendard-medium-mountain-mist-16px">
              </div>
              <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">비밀번호</div>
                <input type="text"
                placeholder="비밀번호 입력해주세요"
                class="frame-7611-1 valign-text-middle pretendard-medium-mountain-mist-16px">
              </div>
             <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">비밀번호 확인</div>
                <input type="text"
                placeholder="비밀번호 재입력하세요"
                class="frame-7611-1 valign-text-middle pretendard-medium-mountain-mist-16px">
              </div>
              <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">생년월일</div>
                <input type="date"
                placeholder="생년월일을 입력해주세요"
                class="frame-7611-1 valign-text-middle pretendard-medium-mountain-mist-16px">
              </div>
              <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">성별</div>
                <input type="radio"
                class=" valign-text-middle pretendard-medium-mountain-mist-16px">남자
                <input type="radio"
                class=" valign-text-middle pretendard-medium-mountain-mist-16px"
                style="margin-left:20px;">여자
              </div>
              <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">닉네임</div>
                <input type="text"
                placeholder="닉네임을 입력해주세요"
                class="frame-7611-1 valign-text-middle pretendard-medium-mountain-mist-16px">
              </div>
             <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">이메일</div>
                <input type="text"
                placeholder="이메일을 입력해주세요"
                class="frame-7611-1 valign-text-middle pretendard-medium-mountain-mist-16px">
              </div>
            </div>
            <p class="text-2096 valign-text-middle pretendard-regular-normal-mine-shaft-14px">{{ text2096 }}</p>
          </div>
          <group758 :text130="group758Props.text130"
          @buttonClick="submitsignup" />
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import UuiTPl from "./UuiTPl";
import Frame7605 from "./Frame7605";
import Frame7627 from "./Frame7627";
import Frame7628 from "./Frame7628";
import Frame7629 from "./Frame7629";
import Group758 from "./Group758";
import XFooter from "./XFooter";
export default {
  name: "SignUp",
  components: {
    UuiTPl,
    Frame7605,
    Frame7627,
    Frame7628,
    Frame7629,
    Group758,
    XFooter,
  },
  props: [
    "text2096",
    "frame7605Props",
    "frame76271Props",
    "frame76272Props",
    "frame76273Props",
    "frame76274Props",
    "frame7628Props",
    "frame7629Props",
    "frame76275Props",
    "frame76276Props",
    "group758Props",
    "xFooterProps",
  ],
  methods:{
    submitsignup(){
      alert("회원가입이 성공하였습니다")
      this.$router.push({path:"/login"})
    }
  }
};
</script>

<style>
.frame-7611-1 {
  align-items: center;
  background-color: #fff;
  border:none;
  text-align: center;
  display: flex;
  gap: 286px;
  height: 55px;
  justify-content: space-around;
  padding: 0px 20px;
  position: relative;
  width: 560px;
}
.frame-7627-1-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}
.signup2-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  gap: 142px;
  min-height: 1575px;
  position: relative;
  width: 1920px;
}

.frame-7634-3 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  overflow: hidden;
  padding: 50px;
  position: relative;
  width: 800px;
}

.frame-7697-6 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7696-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-7625-6 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.text-2096 {
  align-self: stretch;
  letter-spacing: -0.35px;
  line-height: normal;
  position: relative;
  text-align: center;
}
</style>
