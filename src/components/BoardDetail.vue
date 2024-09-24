<template>
  <div class="container-center-horizontal">
    <div class="communitydetails-2 screen">
      <jgbkx4 :frame7372Props="jGBKX4Props.frame7372Props" />
      <rj-zs-wi
        :frame72911Props="rJZsWIProps.frame72911Props"
        :frame72912Props="rJZsWIProps.frame72912Props"
      />
      <view :text89="viewProps.text89" :className="viewProps.className" />
      <div class="frame-7913-1">
        <div class="frame-7754-5">
          <div
            class="text-2977 valign-text-middle pretendard-bold-log-cabin-30px"
          >
            {{ text2977 }}
          </div>
          <div
            class="frame-7835-3 pretendard-regular-normal-mountain-mist-20px"
          >
            <div class="text-29-7 valign-text-middle">{{ text2978 }}</div>
            <div class="rectangle-50927-1"></div>
            <div class="text-29-7 valign-text-middle">{{ text2979 }}</div>
            <div class="rectangle-50927-1"></div>
            <div class="text-29-7 valign-text-middle">{{ text2980 }}</div>
          </div>
        </div>
        <div class="frame-791">
          <frame7838 :frame7712Props="frame7838Props.frame7712Props" />
          <div class="frame-791">
            <div class="group-769-2">
              <div class="frame-container-11">
                <input
                  type="text"
                  class="frame-7847-1 pretendard-bold-black-20px"
                  placeholder="내용을 입력해주세요"
                />
                <a href="#">
                  <frame7846
                    :frame731121Props="frame7846Props.frame731121Props"
                    :frame731122Props="frame7846Props.frame731122Props"
                  />
                </a>
              </div>
            </div>
            <div class="frame-79-4">
              <div class="frame-7307-3">
                <div class="text-2984 pretendard-bold-black-20px">
                  {{ text2984 }}
                </div>
              </div>
              <div class="frame-79-4">
                <a href="#">
                  <frame78502
                    :frame78442Props="frame785021Props.frame78442Props"
                    :frame7846Props="frame785021Props.frame7846Props"
                  />
                </a>
                <a href="#">
                  <frame78502
                    :className="frame785022Props.className"
                    :frame78442Props="frame785022Props.frame78442Props"
                    :frame7846Props="frame785022Props.frame7846Props"
                  />
                </a>
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
import Jgbkx4 from "./Jgbkx4";
import RjZsWi from "./RjZsWi";
import View from "./View";
import Frame7838 from "./Frame7838";
import Frame7846 from "./Frame7846";
import Frame78502 from "./Frame78502";
import XFooter from "./XFooter";
export default {
  name: "BoardDetail",
  components: {
    Jgbkx4,
    RjZsWi,
    View,
    Frame7838,
    Frame7846,
    Frame78502,
    XFooter,
  },
  props: [
    "text2977",
    "text2978",
    "text2979",
    "text2980",
    "text2981",
    "text2984",
    "jGBKX4Props",
    "rJZsWIProps",
    "viewProps",
    "frame7838Props",
    "frame7846Props",
    "frame785021Props",
    "frame785022Props",
    "xFooterProps",
  ],
};
</script>

<style>
.communitydetails-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 2993px;
  position: relative;
  width: 1920px;
}

.frame-7913-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 1px;
  margin-top: 50px;
  position: relative;
  width: 1401px;
}

.frame-7754-5 {
  align-items: flex-start;
  align-self: stretch;
  border-color: var(--greygrey-900);
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  padding: 40px 0px;
  position: relative;
  width: 100%;
}

.text-2977 {
  height: 35px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: 658px;
}

.frame-7835-3 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
}

.text-29-7 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.rectangle-50927-1 {
  background-color: var(--mountain-mist);
  height: 11px;
  position: relative;
  width: 1px;
}

.frame-791 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.group-769-2 {
  height: 150px;
  position: relative;
  width: 1400px;
}

.frame-container-11 {
  height: 150px;
  position: relative;
}

.frame-7847-1 {
  align-items: flex-start;
  background-color: var(--hint-of-red);
  border: 1px solid;
  border-color: var(--celeste);
  display: flex;
  gap: 10px;
  height: 150px;
  left: 0;
  padding: 20px;
  position: absolute;
  top: 0;
  width: 1400px;
}

.text-2981 {
  letter-spacing: -0.64px;
  line-height: 10px;
  margin-top: -1px;
  opacity: 0.5;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-79-4 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}

.frame-7307-3 {
  align-items: center;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--mountain-mist);
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  padding: 30px 0px 15px;
  position: relative;
  width: 100%;
}

.text-2984 {
  letter-spacing: -0.8px;
  line-height: 32px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
