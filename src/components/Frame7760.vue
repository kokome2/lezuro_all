<template>
  <div class="frame-776">
    <frame7690 :group763="frame76901Props.group763" :frame7758Props="frame76901Props.frame7758Props" 
     @click="$emit('click')"/>
    <frame7690
      :group763="frame76902Props.group763"
      :className="frame76902Props.className"
      :frame7758Props="frame76902Props.frame7758Props"
       @click="$emit('click')"
    />
    <frame7690
      :group763="frame76903Props.group763"
      :className="frame76903Props.className"
      :frame7758Props="frame76903Props.frame7758Props"
      @click="$emit('click')"
    />
  </div>
</template>

<script>
import Frame7690 from "./Frame7690";
export default {
  name: "Frame7760",
  components: {
    Frame7690,
  },
  props: ["frame76901Props", "frame76902Props", "frame76903Props"],
};
</script>

<style>
.frame-776 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 40px;
  position: relative;
  width: 100%;
}
</style>
