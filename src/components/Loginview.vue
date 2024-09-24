<template>
  <div class="container-center-horizontal">
    <div class="login-2 screen">
       <Header />
      <!-- <div class="text-97 valign-text-middle pretendard-semi-bold-black-18px">
        {{ text }}
        {{ text }}
      </div> -->
     
      <div class="frame-7622">
        <div class="frame-7605-9">
          <h1
            class="text-2166 valign-text-middle pretendard-extra-extra-bold-black-30px"
          >
            {{ text2166 }}
          </h1>
          <p
            class="text-2167 valign-text-middle pretendard-regular-normal-granite-gray-16px"
          >
            {{ text2167 }}
          </p>
        </div>
        <div class="frame-7621">
          <div class="frame-7617">
            <div class="frame-7615">
              <div class="frame-76-7">
                <div class="frame-7613-10">
                  <input
                    type="text"
                    class="frame-761-5 valign-text-middle pretendard-medium-mountain-mist-16px"
                    placeholder="아이디"
                  />
                  <input
                    type="text"
                    class="frame-761-5 valign-text-middle pretendard-medium-mountain-mist-16px"
                    placeholder="비밀번호"
                  />
                </div>
                <div class="frame-7610">
                  <input type="checkbox" id="rememberMe" />
                  <label
                    for="rememberMe"
                    class="text-1136 valign-text-middle pretendard-medium-granite-gray-14px"
                  >
                    로그인 상태유지
                  </label>
                </div>
              </div>
              <div class="group-758-18">
                <div class="overlap-group-96" @click="loginbutton">
                  <div
                    class="text-2173 valign-text-middle pretendard-semi-bold-white-18px"
                  >
                    {{ text2173 }}
                  </div>
                </div>
              </div>
            </div>
            <frame7616 />
          </div>
          <div class="frame-76-7">
            <div class="frame-7618-1">
              <a href="#"
                ><div
                  class="text-2177 valign-text-middle pretendard-semi-bold-black-18px"
                >
                  {{ text2177 }}
                </div></a
              >
            </div>
            <div class="frame-7619-1">
              <a href="#">
                <div
                  class="text-2178 valign-text-middle pretendard-semi-bold-white-18px"
                >
                  {{ text2178 }}
                </div>
              </a>
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
import Frame76112 from "./Frame76112";
import Frame7610 from "./Frame7610";
import Frame7616 from "./Frame7616";
import XFooter from "./XFooter";
export default {
  name: "Loginview",
  components: {
    Header,
    Frame76112,
    Frame7610,
    Frame7616,
    XFooter,
  },
  props: [
    "text",
    "text2166",
    "text2167",
    "text2173",
    "text2177",
    "text2178",
    // "uuiTPlProps",
    "frame761121Props",
    "frame761122Props",
    "xFooterProps",
  ],
  methods: {
    loginbutton() {
      alert("로그인이 성공하였습니다");
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
#rememberMe {
  position: relative;
}
.text-1136,
.text-2172 {
  letter-spacing: -0.7px;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}
.frame-761-5 {
  border: none;
}
.login-2 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 1575px;
  overflow: hidden;
  position: relative;
  width: 1920px;
}

.text-97 {
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -751px;
  margin-top: -91px;
  white-space: nowrap;
}

.frame-7622 {
  align-items: center;
  align-self: center;
  background-color: var(--cultured-pearl);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 235px;
  padding: 50px;
  position: relative;
  width: 600px;
}

.frame-7605-9 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 283px;
}

.text-2166 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.text-2167 {
  align-self: stretch;
  letter-spacing: -0.8px;
  line-height: normal;
  position: relative;
}

.frame-7621 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7617 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-7615 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}

.frame-76-7 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-7613-10 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 122px;
  position: relative;
  width: 100%;
}

.group-758-18 {
  height: 55px;
  margin-right: -2px;
  position: relative;
  width: 502px;
}

.overlap-group-96 {
  align-items: flex-start;
  background-color: var(--monza);
  display: flex;
  height: 55px;
  justify-content: flex-end;
  min-width: 500px;
  padding: 15.4px 226px;
}

.text-2173 {
  height: 23px;
  letter-spacing: 0;
  line-height: normal;
  width: 47px;
}

.frame-7618-1 {
  align-items: center;
  align-self: stretch;
  background-color: var(--lemon);
  display: flex;
  gap: 10px;
  height: 55px;
  justify-content: center;
  padding: 16px 185px;
  position: relative;
  width: 100%;
}

.text-2177 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7619-1 {
  align-items: center;
  align-self: stretch;
  background-color: var(--malachite);
  display: flex;
  gap: 10px;
  height: 55px;
  justify-content: center;
  padding: 16px 185px;
  position: relative;
  width: 100%;
}

.text-2178 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: -1.5px;
  margin-right: -1.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
