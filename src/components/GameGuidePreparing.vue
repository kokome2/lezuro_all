<template>
  <div class="container-center-horizontal">
    <div class="gameguide-2 screen">
      <component2 :component22Props="component2Props.component22Props" />
      <view :text89="viewProps.text89" :className="viewProps.className" />
      <frame78122 />
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Component2 from "./Component2";
import View from "./View";
import Frame78122 from "./Frame78122";
import XFooter from "./XFooter";
export default {
  name: "GameGuidePreparing",
  components: {
    Component2,
    View,
    Frame78122,
    XFooter,
  },
  props: ["component2Props", "viewProps", "xFooterProps"],
};
</script>

<style>
.gameguide-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 1531px;
  position: relative;
  width: 1920px;
}
</style>
