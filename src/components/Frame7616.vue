<template>
  <div class="frame-7616 pretendard-medium-granite-gray-14px">
    <div class="text-11-17 valign-text-middle" @click="navigateTo('phonecertification')">회원가입</div>
    <div class="rectangle-50925"></div>
    <div class="text-11-17 valign-text-middle" @click="navigateTo('findid')">아이디 찾기</div>
    <div class="rectangle-50925"></div>
    <div class="text-11-17 valign-text-middle" @click="navigateTo('findpassword')">비밀번호 찾기</div>
  </div>
</template>

<script>
export default {
  name: "Frame7616",
  methods: {
    navigateTo(route) {
      if (route === 'phonecertification') {
        this.$router.push('/phone-certification');
      } else if (route === 'findid') {
        this.$router.push('/findid-write');
      } else if (route === 'findpassword') {
        this.$router.push('/findpassword');
      }
    },
  },
};
</script>

<style>
.frame-7616,
.frame-7616-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.text-11-17,
.text-217 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.rectangle-50925,
.rectangle-50925-1 {
  background-color: var(--granite-gray);
  height: 8px;
  position: relative;
  width: 1px;
}
</style>
