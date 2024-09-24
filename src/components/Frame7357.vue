<template>
  <div :class="[`frame-7357-1`, className || ``]">
    <div class="table-1">
      <div class="th-1">
        <div class="frame-7322-2">
          <div class="place-4 valign-text-middle pretendard-semi-bold-log-cabin-18px">Hole</div>
        </div>
        <div class="frame-7323">
          <div class="number-189 valign-text-middle pretendard-semi-bold-log-cabin-18px">1</div>
        </div>
        <frame73242 :number="frame732421Props.number" />
        <frame73242 :number="frame732422Props.number" />
        <frame73242 :number="frame732423Props.number" />
        <frame73242 :number="frame732424Props.number" />
        <frame73242 :number="frame732425Props.number" />
        <frame73242 :number="frame732426Props.number" />
        <frame73242 :number="frame732427Props.number" />
        <frame73242 :number="frame732428Props.number" />
        <div class="frame-733">
          <div class="text-2108 valign-text-middle pretendard-semi-bold-log-cabin-18px">합계</div>
        </div>
      </div>
      <div class="th-2">
        <div class="frame-7322-2">
          <div class="place-5 valign-text-middle pretendard-bold-mine-shaft-18px">PAR</div>
        </div>
        <frame7323 :number="frame73231Props.number" />
        <frame7323 :number="frame73232Props.number" />
        <frame7323 :number="frame73233Props.number" />
        <frame7323 :number="frame73234Props.number" />
        <frame7323 :number="frame73235Props.number" />
        <frame7323 :number="frame73236Props.number" />
        <frame7323 :number="frame73237Props.number" />
        <frame7323 :number="frame73238Props.number" />
        <frame7323 :number="frame73239Props.number" />
        <div class="frame-733"><div class="number-188 valign-text-middle pretendard-bold-mine-shaft-18px">36</div></div>
      </div>
      <div class="th-3">
        <frame73223 :text2109="frame732231Props.text2109" />
        <frame73232 />
        <frame73232 />
        <frame73232 />
        <frame73232 />
        <frame7327 :number="frame73271Props.number" />
        <frame73232 />
        <frame73232 />
        <frame73232 />
        <frame73232 />
        <div class="frame-733">
          <div class="text-2118 valign-text-middle pretendard-regular-normal-mine-shaft-18px">28(-8)</div>
        </div>
      </div>
      <div class="th-4">
        <frame73223 :text2109="frame732232Props.text2109" />
        <frame7327 :number="frame73272Props.number" />
        <frame73243 />
        <frame7327 :number="frame73273Props.number" />
        <frame73243 />
        <frame7327 :number="frame73274Props.number" />
        <frame73243 />
        <frame73243 />
        <frame7327 :number="frame73275Props.number" />
        <frame73243 />
        <div class="frame-7333">
          <div class="number-190 valign-text-middle pretendard-regular-normal-mine-shaft-18px">14</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame73242 from "./Frame73242";
import Frame7323 from "./Frame7323";
import Frame73223 from "./Frame73223";
import Frame73232 from "./Frame73232";
import Frame7327 from "./Frame7327";
import Frame73243 from "./Frame73243";
export default {
  name: "Frame7357",
  components: {
    Frame73242,
    Frame7323,
    Frame73223,
    Frame73232,
    Frame7327,
    Frame73243,
  },
  props: [
    "className",
    "frame732421Props",
    "frame732422Props",
    "frame732423Props",
    "frame732424Props",
    "frame732425Props",
    "frame732426Props",
    "frame732427Props",
    "frame732428Props",
    "frame73231Props",
    "frame73232Props",
    "frame73233Props",
    "frame73234Props",
    "frame73235Props",
    "frame73236Props",
    "frame73237Props",
    "frame73238Props",
    "frame73239Props",
    "frame732231Props",
    "frame73271Props",
    "frame732232Props",
    "frame73272Props",
    "frame73273Props",
    "frame73274Props",
    "frame73275Props",
  ],
};
</script>

<style>
.frame-7357-1 {
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  height: 200px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.table-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 200px;
  overflow: hidden;
  position: relative;
  width: 801px;
}

.th-1 {
  align-items: center;
  align-self: stretch;
  background-color: var(--wild-sand);
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-color: var(--alto);
  display: flex;
  height: 50px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.frame-7322-2 {
  align-items: center;
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 0.5px;
  display: flex;
  height: 60px;
  justify-content: center;
  margin-bottom: -5px;
  margin-top: -5px;
  position: relative;
  width: 85px;
}

.place-4,
.number-189,
.text-2108,
.place-5,
.text-2118,
.number-190 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

.frame-7323 {
  align-items: center;
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 0.5px;
  display: flex;
  height: 60px;
  justify-content: center;
  margin-bottom: -5px;
  margin-top: -5px;
  position: relative;
  width: 71px;
}

.frame-733 {
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: center;
  margin-bottom: -5px;
  margin-top: -5px;
  position: relative;
  width: 71px;
}

.th-2 {
  align-items: center;
  background-color: var(--wild-sand);
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-color: var(--alto);
  display: flex;
  height: 50px;
  overflow: hidden;
  position: relative;
  width: 801px;
}

.number-188 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 31px;
}

.th-3,
.th-4 {
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-color: var(--alto);
  display: flex;
  height: 50px;
  margin-right: -9px;
  overflow: hidden;
  position: relative;
  width: 810px;
}

.frame-7333 {
  align-items: center;
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 0.5px;
  display: flex;
  height: 60px;
  justify-content: center;
  margin-bottom: -5px;
  margin-top: -5px;
  position: relative;
  width: 83px;
}

.frame-7357-1.frame-7357 {
  margin-bottom: -20px;
}
</style>
