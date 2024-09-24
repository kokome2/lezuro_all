<template>
  <div class="container-center-horizontal">
    <div class="eventdetails-2 screen">
       <Header />
      <rj-zs-wi :frame72911Props="rJZsWIProps.frame72911Props" :frame72912Props="rJZsWIProps.frame72912Props" />
      <div class="frame-7837-2">
        <div class="frame-7784-12">
          <view :text89="viewProps.text89" :className="viewProps.className" />
          <div class="frame-7834">
            <div class="frame-7754-4">
              <p class="text-2786 valign-text-middle pretendard-bold-log-cabin-30px">{{ text2786 }}</p>
              <div class="text-2787 valign-text-middle pretendard-regular-normal-mountain-mist-20px">
                {{ text2787 }}
              </div>
            </div>
            <div class="frame-7783-12">
              <div class="frame-7755-1">
                <img
                  class="rectangle-509275-1"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/rectangle-509275-1.svg"
                  alt="Rectangle 509275"
                />
              </div>
            </div>
          </div>
        </div>
        <frame7712 :text_Label="frame7712Props.text_Label" :className="frame7712Props.className" @click="toGoEventsList" />
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import RjZsWi from "./RjZsWi";
import View from "./View";
import Frame7712 from "./Frame7712";
import XFooter from "./XFooter";
export default {
  name: "EventDetail",
  components: {
    Header,
    RjZsWi,
    View,
    Frame7712,
    XFooter,
  },
  props: ["text2786", "text2787", "jGBKX4Props", "rJZsWIProps", "viewProps", "frame7712Props", "xFooterProps"],
  methods:{
    toGoEventsList(){
      this.$router.push({path:"/events-list"})
    }
  }
};
</script>

<style>
.eventdetails-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 2572px;
  position: relative;
  width: 1920px;
}

.frame-7837-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: 1px;
  margin-top: 104px;
  position: relative;
  width: 1401px;
}

.frame-7784-12 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7834 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}

.frame-7754-4 {
  align-items: flex-start;
  border-color: var(--greygrey-900);
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  padding: 40px 0px;
  position: relative;
  width: 1401px;
}

.text-2786 {
  height: 35px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: 658px;
}

.text-2787 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7783-12 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 60px;
  justify-content: flex-end;
  position: relative;
  width: 100%;
}

.frame-7755-1 {
  align-items: flex-start;
  align-self: stretch;
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
  position: relative;
  width: 100%;
}

.rectangle-509275-1 {
  height: 1368px;
  position: relative;
  width: 1320px;
}
</style>
