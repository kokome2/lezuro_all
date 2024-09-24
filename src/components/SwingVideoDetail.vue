<template>
  <div class="container-center-horizontal">
    <div class="swingvideoswrite2-2 screen">
       <Header />
      <rj-zs-wi :frame72911Props="rJZsWIProps.frame72911Props" :frame72912Props="rJZsWIProps.frame72912Props" />
      <view :text89="viewProps.text89" :className="viewProps.className" />
      <div class="frame-7782">
        <div class="frame-7857-6">
          <frame77663
            :frame73034Props="frame776631Props.frame73034Props"
            :frame77722Props="frame776631Props.frame77722Props"
          />
          <frame77663
            :className="frame776632Props.className"
            :frame73034Props="frame776632Props.frame73034Props"
            :frame77722Props="frame776632Props.frame77722Props"
          />
          <frame77843 :frame73034Props="frame77843Props.frame73034Props" />
        </div>
        <div class="frame-7859-8">
          <frame7712 :text_Label="frame77121Props.text_Label" :className="frame77121Props.className" />
          <frame7712 :text_Label="frame77122Props.text_Label" :className="frame77122Props.className" />
          <frame7712 :text_Label="frame77123Props.text_Label" :className="frame77123Props.className" />
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
import Frame77663 from "./Frame77663";
import Frame77843 from "./Frame77843";
import Frame7712 from "./Frame7712";
import XFooter from "./XFooter";
export default {
  name: "SwingVideoDetail",
  components: {
    Header,
    RjZsWi,
    View,
    Frame77663,
    Frame77843,
    Frame7712,
    XFooter,
  },
  props: [
    "x9cITtGProps",
    "rJZsWIProps",
    "viewProps",
    "frame776631Props",
    "frame776632Props",
    "frame77843Props",
    "frame77121Props",
    "frame77122Props",
    "frame77123Props",
    "xFooterProps",
  ],
};
</script>

<style>
.swingvideoswrite2-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 1492px;
  position: relative;
  width: 1920px;
}

.frame-7782 {
  align-items: center;
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: 3px;
  margin-top: 44px;
  padding: 40px 20px;
  position: relative;
  width: 1401px;
}

.frame-7857-6 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 1320px;
}

.frame-7859-8 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}
</style>
