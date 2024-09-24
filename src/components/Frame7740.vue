<template>
  <div :class="[`frame-7740`, className || ``]">
    <frame7736 :frame7737Props="frame77361Props.frame7737Props"  @click="$emit('click')"/>
    <frame7736 :className="frame77362Props.className" :frame7737Props="frame77362Props.frame7737Props" @click="$emit('click')"/>
    <frame7736 :className="frame77363Props.className" :frame7737Props="frame77363Props.frame7737Props" @click="$emit('click')"/>
    <frame7736 :className="frame77364Props.className" :frame7737Props="frame77364Props.frame7737Props" @click="$emit('click')"/>
  </div>
</template>

<script>
import Frame7736 from "./Frame7736";
export default {
  name: "Frame7740",
  components: {
    Frame7736,
  },
  props: ["className", "frame77361Props", "frame77362Props", "frame77363Props", "frame77364Props"],
};
</script>

<style>
.frame-7740 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: -515px;
  margin-top: 581px;
  position: relative;
  width: 335px;
}

.frame-7740.frame-7740-3 {
  margin-top: 13px;
}

.frame-7740.frame-7740-5,
.frame-7740.frame-7740-8 {
  margin-top: 39px;
}

.frame-7740.frame-7740-40 {
  margin-left: unset;
  margin-top: unset;
}
</style>
