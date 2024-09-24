<template>
  <footer :class="[`footer`, className || ``]">
    <div class="frame-7503">
      <div class="frame-7502">
        <img
          class="lezuro_logo_white-2"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/lezuro-logo-white-2@2x.png"
          alt="Lezuro_logo_white 2"
        />
        <div class="frame-7501">
          <frame7304 />
          <p class="x valign-text-middle pretendard-regular-normal-white-15px">
            <span
              ><span class="span pretendard-regular-normal-white-15px"
                >법인명(상호) : (주)국제파크골프&nbsp;&nbsp; /&nbsp;&nbsp; 대표자(성명) : 김재열&nbsp;&nbsp;
                /&nbsp;&nbsp; 사업자 등록번호 안내 : 104-86-26271<br />통신판매업신고 : 2023-인천계양-1586&nbsp;&nbsp;
                /&nbsp;&nbsp; 개인정보보호책임자 : </span
              ><a href="mailto:leisurero.official@gmail.com" target="_blank"
                ><span class="span1 pretendard-regular-normal-white-15px"
                  >김용훈(leisurero.official@gmail.com)<br /></span></a
              ><span class="span pretendard-regular-normal-white-15px"
                >전화 : 1800-9394&nbsp;&nbsp; /&nbsp;&nbsp; 주소 : 21077 인천광역시 계양구 아나지로 524-1<br /><br />©레저로
                All rights reserved.</span
              >
            </span>
          </p>
        </div>
      </div>
      <frame7500 />
    </div>
  </footer>
</template>

<script>
import Frame7304 from "./Frame7304";
import Frame7500 from "./Frame7500";
export default {
  name: "XFooter",
  components: {
    Frame7304,
    Frame7500,
  },
  props: ["className"],
};
</script>

<style>
.footer {
  align-items: flex-end;
  background-color: var(--mine-shaft);
  border-bottom-style: none;
  border-color: var(--celeste);
  border-left-style: none;
  border-right-style: none;
  border-top-style: solid;
  border-top-width: 0.5px;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  height: 389px;
  justify-content: flex-start;
  margin-top: 959px;
  overflow: hidden;
  padding: 0 260px;
  width: 1920px;
}

.frame-7503 {
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-bottom: -0.21px;
  padding: 80px 0px;
  position: relative;
  width: 1400px;
}

.frame-7502 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 653px;
}

.lezuro_logo_white-2 {
  height: 40.21px;
  object-fit: cover;
  position: relative;
  width: 126px;
}

.frame-7501 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}

.x {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 21px;
  position: relative;
}

.span1 {
  text-decoration: underline;
}

.footer.footer-1 {
  margin-top: 1460px;
}

.footer.footer-2 {
  margin-top: 125px;
}

.footer.footer-3 {
  margin-top: 114px;
}

.footer.footer-4 {
  margin-top: 135px;
}

.footer.footer-5,
.footer.footer-6,
.footer.footer-8,
.footer.footer-9,
.footer.footer-38 {
  margin-top: 133px;
}

.footer.footer-5 .lezuro_logo_white-2,
.footer.footer-6 .lezuro_logo_white-2,
.footer.footer-9 .lezuro_logo_white-2,
.footer.footer-30 .lezuro_logo_white-2,
.footer.footer-33 .lezuro_logo_white-2,
.footer.footer-34 .lezuro_logo_white-2,
.footer.footer-37 .lezuro_logo_white-2 {
  height: 40.21px;
}

.footer.footer-7 {
  margin-top: 227px;
}

.footer.footer-10 {
  margin-top: 538px;
}

.footer.footer-11 {
  margin-top: 126px;
}

.footer.footer-12,
.footer.footer-15 {
  margin-top: unset;
}

.footer.footer-13 {
  margin-top: 316px;
}

.footer.footer-14 {
  margin-top: 235px;
}

.footer.footer-16 {
  margin-top: 282px;
}

.footer.footer-17 {
  margin-top: 231px;
}

.footer.footer-18 {
  margin-top: 286px;
}

.footer.footer-19 {
  margin-top: 2px;
}

.footer.footer-20 {
  margin-top: 86px;
}

.footer.footer-21 {
  margin-top: 154px;
}

.footer.footer-22 {
  margin-top: 143px;
}

.footer.footer-23 {
  margin-top: 100px;
}

.footer.footer-24 {
  margin-top: 207px;
}

.footer.footer-25 {
  margin-top: 54px;
}

.footer.footer-26 {
  margin-top: 108px;
}

.footer.footer-27 {
  margin-top: 60px;
}

.footer.footer-28 {
  margin-top: 137px;
}

.footer.footer-29 {
  margin-top: 177px;
  min-width: 1920px;
  overflow: unset;
  width: auto;
}

.footer.footer-30,
.footer.footer-33,
.footer.footer-34 {
  margin-top: 206px;
}

.footer.footer-31 {
  margin-top: 86px;
  min-width: 1920px;
  overflow: unset;
  width: auto;
}

.footer.footer-32 {
  margin-top: 109px;
}

.footer.footer-32 .lezuro_logo_white-2,
.footer.footer-35 .lezuro_logo_white-2,
.footer.footer-36 .lezuro_logo_white-2,
.footer.footer-39 .lezuro_logo_white-2,
.footer.footer-40 .lezuro_logo_white-2 {
  height: 40.21px;
}

.footer.footer-35 {
  margin-top: 111px;
}

.footer.footer-36 {
  margin-top: 127px;
}

.footer.footer-37,
.footer.footer-39 {
  margin-top: 148px;
}

.footer.footer-40 {
  margin-top: 145px;
}

.footer.footer-41 {
  margin-top: 147px;
}
</style>
