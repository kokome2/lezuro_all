<template>
  <div class="container-center-horizontal">
    <div class="communitywrite-2 screen">
      <Header />
      <rj-zs-wi :frame72911Props="rJZsWIProps.frame72911Props" :frame72912Props="rJZsWIProps.frame72912Props" />
      <view :text89="viewProps.text89" :className="viewProps.className" />
       <div class="frame-7782-1">
        <div class="frame-7857-7">
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
               <frame7782
        :frame776641Props="frame7782Props.frame776641Props"
        :frame776642Props="frame7782Props.frame776642Props"
        :frame77843Props="frame7782Props.frame77843Props"
        :frame7859Props="frame7782Props.frame7859Props"
      />
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
import Frame7782 from "./Frame7782";
import XFooter from "./XFooter";
export default {
  name: "ContactWrite",
  components: {
    Header,
    RjZsWi,
    View,
    Frame7782,
    XFooter,
  },
  props: ["x9cITtGProps", "rJZsWIProps", "viewProps", "frame7782Props", "xFooterProps"],
};
</script>

<style>
.frame-7859-3{
top:20px;
  justify-content: center;
width:100%;}
.communitywrite-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 1492px;
  position: relative;
  width: 1920px;
}
</style>
