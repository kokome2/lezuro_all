<template>
  <div class="container-center-horizontal">
    <div class="findpassword1-2 screen">
      <uui-t-pl />
      <div class="frame-7635-33">
        <frame7605 :text122="frame7605Props.text122" />
        <div class="frame-7697-9">
          <div class="frame-7696-7">
            <div class="frame-7625-9">
              <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">
                  성명
                </div>
                <input
                  type="text"
                  placeholder="이름을 입력해주세요"
                  class="frame-7611-1 valign-text-middle pretendard-medium-mountain-mist-16px"
                />
              </div>
              <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">
                  아이디
                </div>
                <input
                  type="text"
                  placeholder="영문, 숫자/6 ~ 12자로 입력하세요"
                  class="frame-7611-1 valign-text-middle pretendard-medium-mountain-mist-16px"
                />
              </div>
              <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">
                  휴대폰번호
                </div>
                <input
                  type="text"
                  placeholder="휴대폰번호를 입력하세요"
                  class="frame-7611-2 valign-text-middle pretendard-medium-mountain-mist-16px"
                />
                <div class="frame-7698-2">
                  <div
                    class="text-21-6 valign-text-middle pretendard-medium-white-16px"
                  >휴대폰번호 확인</div>
                </div>
              </div>
              <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">
                  인증번호
                </div>
                <input
                  type="text"
                  placeholder="인증번호를 입력하세요"
                  class="frame-7611-2 valign-text-middle pretendard-medium-mountain-mist-16px"
                />
                <div class="frame-7698-2">
                  <div
                    class="text-21-6 valign-text-middle pretendard-medium-white-16px"
                  >인증번호 확인</div>
                </div>
              </div>
            </div>
          </div>
          <group7585 
          :text2153="group7585Props.text2153"
          @buttonclick="successfindpassword" />
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import UuiTPl from "./UuiTPl";
import Frame7605 from "./Frame7605";
import Frame7623 from "./Frame7623";
import Frame7699 from "./Frame7699";
import Group7585 from "./Group7585";
import XFooter from "./XFooter";
export default {
  name: "FindPassword",
  components: {
    UuiTPl,
    Frame7605,
    Frame7623,
    Frame7699,
    Group7585,
    XFooter,
  },
  props: [
    "frame7605Props",
    "frame76231Props",
    "frame76232Props",
    "frame76991Props",
    "frame76992Props",
    "group7585Props",
    "xFooterProps",
  ],
  methods : {
    successfindpassword(){
      this.$router.push({ path:"/editpassword" });
    }
  }
};
</script>

<style>
.findpassword1-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 1575px;
  position: relative;
  width: 1920px;
}

.frame-7635-33 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  margin-top: 283px;
  overflow: hidden;
  padding: 50px;
  position: relative;
  width: 600px;
}

.frame-7697-9 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7696-7 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-7625-9 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}
</style>
