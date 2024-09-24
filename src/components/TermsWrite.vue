<template>
  <div class="container-center-horizontal">
    <div class="updateterms screen">
      <Header />
      <rj-zs-wi :frame72911Props="rJZsWIProps.frame72911Props" :frame72912Props="rJZsWIProps.frame72912Props" />
      <div class="frame-7883-2">
        <frame7856 :viewProps="frame7856Props.viewProps" />
        <div class="frame-7882">
          <div class="frame-7857-5">
            <div class="frame-7766-5">
              <div class="text-151-1 valign-text-middle pretendard-medium-black-18px">제목</div>
            <input type="text"
             class="frame-7281-8"
             placeholder="약관제목을 입력해주세요">
            </div>
             <div class="frame-7766-5">
              <div class="text-151-2 valign-text-middle pretendard-medium-black-18px">내용</div>
            <input type="text"
             class="frame-7281-9"
             placeholder="약관내용을 입력해주세요">
            </div>
          </div>
          <a href="#"><frame7859
            :frame77121Props="frame7859Props.frame77121Props"
            :frame77122Props="frame7859Props.frame77122Props"
          /></a>
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import RjZsWi from "./RjZsWi";
import Frame7856 from "./Frame7856";
import Frame77662 from "./Frame77662";
import Frame7859 from "./Frame7859";
import XFooter from "./XFooter";
export default {
  name: "TermsWrite",
  components: {
    Header,
    RjZsWi,
    Frame7856,
    Frame77662,
    Frame7859,
    XFooter,
  },
  props: [
    "x9cITtGProps",
    "rJZsWIProps",
    "frame7856Props",
    "frame776621Props",
    "frame776622Props",
    "frame7859Props",
    "xFooterProps",
  ],
};
</script>

<style>
.frame-7281-9{
   background-color: var(--hint-of-red);
  border: 0.5px solid;
  border-color: var(--alto);
  flex: 1;
  flex-grow: 1;
  padding:10px;
  height: 400px;
  position: relative;
}
.text-151-2{
  align-items: center;
  display: flex;
  gap: 10px;
  height: 400px;
  padding: 0px 0px 0px 20px;
  position: relative;
  width: 150px;
}
.text-151-1{
  align-items: center;
  display: flex;
  gap: 10px;
  height: 48px;
  padding: 0px 0px 0px 20px;
  position: relative;
  width: 150px;
}
.updateterms {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 1325px;
  position: relative;
  width: 1920px;
}

.frame-7883-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 104px;
  position: relative;
  width: 1400px;
}

.frame-7882 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7857-5 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}
</style>
