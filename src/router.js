import Vue from "vue";
import Router from "vue-router";
import ReservationHistory from "./components/ReservationHistory";
import MenuLogout from "./components/MenuLogout";
import MenuLogin from "./components/MenuLogin";
import MyContactDetail from "./components/MyContactDetail";
import ResetPasswordConfirmModal from "./components/ResetPasswordConfirmModal";
import PhoneCertificationConfirmModal from "./components/PhoneCertificationConfirmModal";
import ReservationCancelModal from "./components/ReservationCancelModal";
import AccountDeletionModal from "./components/AccountDeletionModal";
import PGamePasswordModalno2 from "./components/PGamePasswordModalno2";
import ContactList from "./components/ContactList";
import NotJoinModalNo2 from "./components/NotJoinModalNo2";
import SwingVideoDownloadModalno2 from "./components/SwingVideoDownloadModalno2";
import SwingVideoDeleteModalno2 from "./components/SwingVideoDeleteModalno2";
import EditProfileModal from "./components/EditProfileModal";
import EditSocialProfile from "./components/EditSocialProfile";
import SwingVideoDeleteConfirmModal from "./components/SwingVideoDeleteConfirmModal";
import PGamePasswordModal from "./components/PGamePasswordModal";
import NotJoinModal from "./components/NotJoinModal";
import SwingVideoDeleteModal from "./components/SwingVideoDeleteModal";
import JoinConfrimModal from "./components/JoinConfrimModal";
import SwingVideoDownloadModal from "./components/SwingVideoDownloadModal";
import ResetPasswordModal from "./components/ResetPasswordModal";
import PhoneCertificationModal from "./components/PhoneCertificationModal";
import EditProfile from "./components/EditProfile";
import AppSwingVideoWrite from "./components/AppSwingVideoWrite";
import AppSwingVideoDetail from "./components/AppSwingVideoDetail";
import AppBoardWrite from "./components/AppBoardWrite";
import AppAccountDeletion from "./components/AppAccountDeletion";
import AppMyGameList from "./components/AppMyGameList";
import AppEditPassword from "./components/AppEditPassword";
import AppEditProfile from "./components/AppEditProfile";
import AppSwingVideoList from "./components/AppSwingVideoList";
import AppEditSocialProfile from "./components/AppEditSocialProfile";
import AppMyContactDetail from "./components/AppMyContactDetail";
import AppContactWrite from "./components/AppContactWrite";
import EditPassword from "./components/EditPassword";
import AppReservationHistory from "./components/AppReservationHistory";
import AppLocationTerms from "./components/AppLocationTerms";
import AppTermsWrite from "./components/AppTermsWrite";
import AppTermsView from "./components/AppTermsView";
import AppPrivacyTerms from "./components/AppPrivacyTerms";
import AppFaqList from "./components/AppFaqList";
import AppNoticeList from "./components/AppNoticeList";
import AppMyContactList from "./components/AppMyContactList";
import AppfindPassword from "./components/AppfindPassword";
import AppFindId from "./components/AppFindId";
import AppResetPassword from "./components/AppResetPassword";
import AppMyProfile from "./components/AppMyProfile";
import AppFindIdWrite from "./components/AppFindIdWrite";
import AppSignUp from "./components/AppSignUp";
import AppPhoneCertification from "./components/AppPhoneCertification";
import MyProfile from "./components/MyProfile";
import AppLogin from "./components/AppLogin";
import AppSocialSignup from "./components/AppSocialSignup";
import AppBoardList from "./components/AppBoardList";
import AppBoardDetail from "./components/AppBoardDetail";
import AppgameImageDetail from "./components/AppgameImageDetail";
import AppEventsDetail from "./components/AppEventsDetail";
import AppGameRankingList from "./components/AppGameRankingList";
import AppEventsList from "./components/AppEventsList";
import AppGameDetail from "./components/AppGameDetail";
import AppMySwingVideoList from "./components/AppMySwingVideoList";
import TermsWrite from "./components/TermsWrite";
import AppCourseList from "./components/AppCourseList";
import AppGameIntroPreparing from "./components/AppGameIntroPreparing";
import AppCourseDetails from "./components/AppCourseDetails";
import AppContentsPreparingno2 from "./components/AppContentsPreparingno2";
import AppScoreCardList from "./components/AppScoreCardList";
import AppGameList from "./components/AppGameList";
import GameDetail from "./components/GameDetail";
import AppContentsPreparing from "./components/AppContentsPreparing";
import AccountDeletion from "./components/AccountDeletion";
import AppReservationPreparing from "./components/AppReservationPreparing";
import AppeReservationWrite from "./components/AppeReservationWrite";
import AppMain from "./components/AppMain";
import SwingVideoDetail from "./components/SwingVideoDetail";
import ContactWriteno2 from "./components/ContactWriteno2";
import NoticeDetail from "./components/NoticeDetail";
import AppFindShop from "./components/AppFindShop";
import ContactWriteno1 from "./components/ContactWriteno1";
import ContactWrite from "./components/ContactWrite";
import PhoneCertification from "./components/PhoneCertification";
import TermsView from "./components/TermsView";
import SignUp from "./components/SignUp";
import GameScoreCard from "./components/GameScoreCard";
import FindIdWrite from "./components/FindIdWrite";
import Loginview from "./components/Loginview";
import SocialSignUp from "./components/SocialSignUp";
import FindPassword from "./components/FindPassword";
import ResetPassword from "./components/ResetPassword";
import FindIdResult from "./components/FindIdResult";
import Home from "./components/Home";
import gameInfoDetail from "./components/gameInfoDetail";
import MyScoreCard from "./components/MyScoreCard";
import GameImageDetail from "./components/GameImageDetail";
import GameRankingList from "./components/GameRankingList";
import FaqList from "./components/FaqList";
import GameList from "./components/GameList";
import MySwingVideoList from "./components/MySwingVideoList";
import MyGameList from "./components/MyGameList";
import MapList from "./components/MapList";
import ReservationProgress from "./components/ReservationProgress";
import SystemPreparing from "./components/SystemPreparing";
import ReservationWrite from "./components/ReservationWrite";
import EventDetail from "./components/EventDetail";
import GameIntroPreparing from "./components/GameIntroPreparing";
import GameGuidePreparing from "./components/GameGuidePreparing";
import EventList from "./components/EventList";
import CourseList from "./components/CourseList";
import BoardList from "./components/BoardList";
import ContactConfirmWrite from "./components/ContactConfirmWrite";
import CourseDetail from "./components/CourseDetail";
import BoardDetail from "./components/BoardDetail";
import NoticeList from "./components/NoticeList";
import {
  reservationHistoryData,
  menuLogoutData,
  menuLoginData,
  contactViewData,
  popupdefualt22Data,
  popupdefualt31Data,
  popupdefualt41Data,
  contactHistoryData,
  popupdefualt5Data,
  popupdefualt6Data,
  popupdefualt7Data,
  popupdefualt81Data,
  editProfile1Data,
  popupdefualt11Data,
  popupdefualt12Data,
  popupdefualt13Data,
  editProfile2Data,
  swingVideosWrite1Data,
  swingVideosWrite2Data,
  communityWriteData,
  secessionData,
  myTournamentData,
  editProfile3Data,
  editProfile22Data,
  swingVideosData,
  editProfile12Data,
  contactView2Data,
  contactData,
  editProfile32Data,
  reservationHistory2Data,
  locationData,
  updateTermsData,
  termsData,
  privacyData,
  faqData,
  announcementsData,
  contactHistory2Data,
  findPassword1Data,
  findId2Data,
  resetPassword2Data,
  myProfileData,
  findId1Data,
  signUp2Data,
  signUp1Data,
  myProfile2Data,
  loginData,
  signUp3Data,
  communityData,
  communityDetailsData,
  tournamentGalleryData,
  eventDetailsData,
  tournamentLeaderboardData,
  eventsData,
  tournamentInfoData,
  mySwingVideosData,
  updateTerms2Data,
  coursesData,
  gameIntroductionData,
  courseDetailsData,
  gameGuideData,
  scorecardData,
  tournamentsData,
  frame7655Data,
  systemOverviewData,
  secession2Data,
  reservation2Data,
  reservation1Data,
  xMainData,
  swingVideosWrite22Data,
  swingVideosWrite12Data,
  announcementsDetailsData,
  findVenueData,
  announcementsWriteData,
  communityWrite2Data,
  signUp12Data,
  terms2Data,
  signUp22Data,
  frame7654Data,
  findId12Data,
  login2Data,
  signUp32Data,
  findPassword12Data,
  resetPassword22Data,
  findId22Data,
  xMain2Data,
  tournamentInfo2Data,
  scorecard2Data,
  tournamentGallery2Data,
  tournamentLeaderboard2Data,
  faq2Data,
  tournaments2Data,
  mySwingVideos2Data,
  myTournament2Data,
  findVenue2Data,
  reservation22Data,
  systemOverview2Data,
  reservation12Data,
  eventDetails2Data,
  gameIntroduction2Data,
  gameGuide2Data,
  events2Data,
  courses2Data,
  community2Data,
  contact2Data,
  courseDetails2Data,
  communityDetails2Data,
  announcements2Data,
} from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/menu-logout",
      component: MenuLogout,
      props: { text46: "로그인 해주세요", frame8201Props: menuLogoutData.frame8201Props },
    },
    {
      path: "/menu-login",
      component: MenuLogin,
      props: {
        text56: "레저로님 어서오세요.",
        text57: "관리자",
        text58: "로그아웃",
        frame8201Props: menuLoginData.frame8201Props,
      },
    },
    {
      path: "/mycontact-detail",
      component: MyContactDetail,
      props: { ...contactViewData },
    },
    {
      path: "/resetpassword-confirmmodal",
      component: ResetPasswordConfirmModal,
      props: { PJ77i0: "비밀번호 재설정", text_Label: "비밀번호 변경이 완료되었습니다." },
    },
    {
      path: "/phone-certificationconfirmmodal",
      component: PhoneCertificationConfirmModal,
      props: { spanText1: "이미 가입된 정보가 있습니다.", spanText2: "다시 확인 후 인증해주세요." },
    },
    {
      path: "/reservation-cancelmodal",
      component: ReservationCancelModal,
      props: { btnGroup2Props: popupdefualt22Data.btnGroup2Props },
    },
    {
      path: "/account-deletionmodal",
      component: AccountDeletionModal,
      props: {
        x6XWXUF: "정말로 탈퇴하시겟어요?",
        spanText1: "탈퇴 버튼 선택 시, 계정은",
        spanText2: "삭제되며 복구되지 않습니다.",
        btnGroup2Props: popupdefualt31Data.btnGroup2Props,
      },
    },
    {
      path: "/pgamepassword-modalno2",
      component: PGamePasswordModalno2,
      props: { btnGroup2Props: popupdefualt41Data.btnGroup2Props },
    },
    {
      path: "/contact-list",
      component: ContactList,
      props: { ...contactHistoryData },
    },
    {
      path: "/not-joinmodalno2",
      component: NotJoinModalNo2,
      props: {
        o9HT3M: "정말로 취소하시겠어요?",
        text_Label: "취소 후 다시 대화에<br /> 참여 하실 수 있습니다",
        btnGroup2Props: popupdefualt5Data.btnGroup2Props,
      },
    },
    {
      path: "/swingvideo-downloadmodalno2",
      component: SwingVideoDownloadModalno2,
      props: {
        ZEieKO: "스윙 영상 다운로드",
        text_Label: "현재 영상을 저장하시겠습니까?",
        btnGroup2Props: popupdefualt6Data.btnGroup2Props,
      },
    },
    {
      path: "/swingvideo-deletemodalno2",
      component: SwingVideoDeleteModalno2,
      props: {
        DlPP1d: "스윙 영상 삭제",
        text_Label: "현재 영상을 삭제하시겠습니까?",
        btnGroup2Props: popupdefualt7Data.btnGroup2Props,
      },
    },
    {
      path: "/editprofilemodal",
      component: EditProfileModal,
      props: { btnGroup2Props: popupdefualt81Data.btnGroup2Props },
    },
    {
      path: "/editsocialprofile",
      component: EditSocialProfile,
      props: {
        frame7605Props: editProfile1Data.frame7605Props,
        frame76131Props: editProfile1Data.frame76131Props,
        frame76132Props: editProfile1Data.frame76132Props,
        frame76133Props: editProfile1Data.frame76133Props,
        group758Props: editProfile1Data.group758Props,
      },
    },
    {
      path: "/swingvideo-deleteconfirmmodal",
      component: SwingVideoDeleteConfirmModal,
      props: {
        x7fbmQ2: "스윙 영상 삭제",
        image:
          "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/-------------------.png",
      },
    },
    {
      path: "/pgamepasswordmodal",
      component: PGamePasswordModal,
    },
    {
      path: "/not-joinmodal",
      component: NotJoinModal,
      props: {
        urkyGq: "참가 하실 수 없습니다.",
        text_Label: "참가 조건을<br />다시 확인해주세요.",
        btnGroup4Props: popupdefualt11Data.btnGroup4Props,
      },
    },
    {
      path: "/swingvideo-deletemodal",
      component: SwingVideoDeleteModal,
      props: {
        lPxZUb: "스윙 영상 삭제",
        text_Label: "현재영상을 삭제하시겠습니까?",
        btnGroup4Props: popupdefualt12Data.btnGroup4Props,
      },
    },
    {
      path: "/join-confrimmodal",
      component: JoinConfrimModal,
      props: {
        njR4ze: "정말로 참가하시겠어요?",
        text_Label: "참가내역은 나의 대회에서<br />확인해주세요.",
        btnGroup4Props: popupdefualt13Data.btnGroup4Props,
      },
    },
    {
      path: "/swingvideo-downloadmodal",
      component: SwingVideoDownloadModal,
      props: { R9grVj: "스윙 영상 다운로드", text_Label: "현재 영상을 저장하시겠습니까?" },
    },
    {
      path: "/resetpasswordmodal",
      component: ResetPasswordModal,
      props: { Oy3YVO: "비밀번호 재설정", text_Label: "비밀번호 변경이 완료되었습니다." },
    },
    {
      path: "/phone-certificationmodal",
      component: PhoneCertificationModal,
      props: { text_Label: "휴대폰 인증이 완료되었습니다.<br />확인 후 회원가입 절차를 진행 해주세요." },
    },
    {
      path: "/editprofile",
      component: EditProfile,
      props: {
        frame7605Props: editProfile2Data.frame7605Props,
        frame761321Props: editProfile2Data.frame761321Props,
        frame761322Props: editProfile2Data.frame761322Props,
        frame761323Props: editProfile2Data.frame761323Props,
        frame761324Props: editProfile2Data.frame761324Props,
        group758Props: editProfile2Data.group758Props,
      },
    },
    {
      path: "/app-swingvideo-write",
      component: AppSwingVideoWrite,
      props: { ...swingVideosWrite1Data },
    },
    {
      path: "/app-swingvideo-detail",
      component: AppSwingVideoDetail,
      props: { ...swingVideosWrite2Data },
    },
    {
      path: "/app-board-write",
      component: AppBoardWrite,
      props: { ...communityWriteData },
    },
    {
      path: "/app-account-deletion",
      component: AppAccountDeletion,
      props: {
        text252: "회원탈퇴",
        text273: "회원탈퇴가 완료되었습니다",
        text274: "그동안 이용해주시고 사랑해주셔서 감사합니다.<br />더욱 더 노력하고 발전하는 제저로가 되겠습니다.",
        frame77122Props: secessionData.frame77122Props,
        frame7740Props: secessionData.frame7740Props,
      },
    },
    {
      path: "/app-mygame-list",
      component: AppMyGameList,
      props: { ...myTournamentData },
    },
    {
      path: "/app-editpassword",
      component: AppEditPassword,
      props: {
        group757Props: editProfile3Data.group757Props,
        frame76961Props: editProfile3Data.frame76961Props,
        frame76962Props: editProfile3Data.frame76962Props,
        frame76963Props: editProfile3Data.frame76963Props,
        frame7740Props: editProfile3Data.frame7740Props,
      },
    },
    {
      path: "/app-editprofile",
      component: AppEditProfile,
      props: {
        text362: "회원정보 변경",
        text388: "변경하기",
        frame7740Props: editProfile22Data.frame7740Props,
        frame761331Props: editProfile22Data.frame761331Props,
        frame761332Props: editProfile22Data.frame761332Props,
        frame761333Props: editProfile22Data.frame761333Props,
        frame761334Props: editProfile22Data.frame761334Props,
      },
    },
    {
      path: "/app-swingvideo-list",
      component: AppSwingVideoList,
      props: { ...swingVideosData },
    },
    {
      path: "/app-editsocialprofile",
      component: AppEditSocialProfile,
      props: {
        group757Props: editProfile12Data.group757Props,
        frame76131Props: editProfile12Data.frame76131Props,
        frame76132Props: editProfile12Data.frame76132Props,
        frame76133Props: editProfile12Data.frame76133Props,
        frame7740Props: editProfile12Data.frame7740Props,
      },
    },
    {
      path: "/app-mycontact-detail",
      component: AppMyContactDetail,
      props: { ...contactView2Data },
    },
    {
      path: "/app-contact-write",
      component: AppContactWrite,
      props: { ...contactData },
    },
    {
      path: "/editpassword",
      component: EditPassword,
      props: {
        frame7605Props: editProfile32Data.frame7605Props,
        frame769621Props: editProfile32Data.frame769621Props,
        frame769622Props: editProfile32Data.frame769622Props,
        frame769623Props: editProfile32Data.frame769623Props,
        group758Props: editProfile32Data.group758Props,
      },
    },
    {
      path: "/app-reservationhistory",
      component: AppReservationHistory,
      props: { ...reservationHistory2Data },
    },
    {
      path: "/app-locationterms",
      component: AppLocationTerms,
      props: { ...locationData },
    },
    {
      path: "/app-terms-write",
      component: AppTermsWrite,
      props: { ...updateTermsData },
    },
    {
      path: "/app-termsview",
      component: AppTermsView,
      props: { ...termsData },
    },
    {
      path: "/app-privacyterms",
      component: AppPrivacyTerms,
      props: { ...privacyData },
    },
    {
      path: "/app-faq-list",
      component: AppFaqList,
      props: { ...faqData },
    },
    {
      path: "/app-notice-list",
      component: AppNoticeList,
      props: { ...announcementsData },
    },
    {
      path: "/app-mycontact-list",
      component: AppMyContactList,
      props: { ...contactHistory2Data },
    },
    {
      path: "/app-findpassword",
      component: AppfindPassword,
      props: { ...findPassword1Data },
    },
    {
      path: "/app-findid",
      component: AppFindId,
      props: { ...findId2Data },
    },
    {
      path: "/app-resetpassword",
      component: AppResetPassword,
      props: { ...resetPassword2Data },
    },
    {
      path: "/app-myprofile",
      component: AppMyProfile,
      props: { ...myProfileData },
    },
    {
      path: "/app-findid-write",
      component: AppFindIdWrite,
      props: { ...findId1Data },
    },
    {
      path: "/app-signup",
      component: AppSignUp,
      props: { ...signUp2Data },
    },
    {
      path: "/app-phone-certification",
      component: AppPhoneCertification,
      props: { ...signUp1Data },
    },
    {
      path: "/myprofile",
      component: MyProfile,
      props: { ...myProfile2Data },
    },
    {
      path: "/app-login",
      component: AppLogin,
      props: { ...loginData },
    },
    {
      path: "/app-socialsignup",
      component: AppSocialSignup,
      props: { ...signUp3Data },
    },
    {
      path: "/app-board-list",
      component: AppBoardList,
      props: { ...communityData },
    },
    {
      path: "/app-board-detail",
      component: AppBoardDetail,
      props: { ...communityDetailsData },
    },
    {
      path: "/app-gameimage-detail",
      component: AppgameImageDetail,
      props: { ...tournamentGalleryData },
    },
    {
      path: "/app-events-detail",
      component: AppEventsDetail,
      props: { ...eventDetailsData },
    },
    {
      path: "/app-gameranking-list",
      component: AppGameRankingList,
      props: { ...tournamentLeaderboardData },
    },
    {
      path: "/app-events-list",
      component: AppEventsList,
      props: { ...eventsData },
    },
    {
      path: "/app-game-detail",
      component: AppGameDetail,
      props: { ...tournamentInfoData },
    },
    {
      path: "/app-myswingvideo-list",
      component: AppMySwingVideoList,
      props: { ...mySwingVideosData },
    },
    {
      path: "/terms-write",
      component: TermsWrite,
      props: {
        x9cITtGProps: updateTerms2Data.x9cITtGProps,
        rJZsWIProps: updateTerms2Data.rJZsWIProps,
        frame7856Props: updateTerms2Data.frame7856Props,
        frame776621Props: updateTerms2Data.frame776621Props,
        frame776622Props: updateTerms2Data.frame776622Props,
        frame7859Props: updateTerms2Data.frame7859Props,
        xFooterProps: updateTerms2Data.xFooterProps,
      },
    },
    {
      path: "/app-course-list",
      component: AppCourseList,
      props: { ...coursesData },
    },
    {
      path: "/app-gameintro-preparing",
      component: AppGameIntroPreparing,
      props: { ...gameIntroductionData },
    },
    {
      path: "/app-course-details",
      component: AppCourseDetails,
      props: { ...courseDetailsData },
    },
    {
      path: "/app-contents-preparingno2",
      component: AppContentsPreparingno2,
      props: { ...gameGuideData },
    },
    {
      path: "/app-scorecard-list",
      component: AppScoreCardList,
      props: { ...scorecardData },
    },
    {
      path: "/app-gamelist",
      component: AppGameList,
      props: { ...tournamentsData },
    },
    {
      path: "/game-detail",
      component: GameDetail,
      props: { ...frame7655Data },
    },
    {
      path: "/app-contents-preparing",
      component: AppContentsPreparing,
      props: { ...systemOverviewData },
    },
    {
      path: "/account-deletion",
      component: AccountDeletion,
      props: {
        text1787: "회원탈퇴가 완료되었습니다",
        text1788: "그동안 이용해주시고 사랑해주셔서 감사합니다.<br />더욱 더 노력하고 발전하는 제저로가 되겠습니다.",
        frame7712Props: secession2Data.frame7712Props,
      },
    },
    {
      path: "/app-reservation-preparing",
      component: AppReservationPreparing,
      props: { ...reservation2Data },
    },
    {
      path: "/app-reservation-write",
      component: AppeReservationWrite,
      props: { ...reservation1Data },
    },
    {
      path: "/app-main",
      component: AppMain,
      props: { ...xMainData },
    },
    {
      path: "/swingvideo-detail",
      component: SwingVideoDetail,
      props: { ...swingVideosWrite22Data },
    },
    {
      path: "/contact-writeno2",
      component: ContactWriteno2,
      props: {
        x9cITtGProps: swingVideosWrite12Data.x9cITtGProps,
        rJZsWIProps: swingVideosWrite12Data.rJZsWIProps,
        viewProps: swingVideosWrite12Data.viewProps,
        frame7782Props: swingVideosWrite12Data.frame7782Props,
        xFooterProps: swingVideosWrite12Data.xFooterProps,
      },
    },
    {
      path: "/notice-detail",
      component: NoticeDetail,
      props: { ...announcementsDetailsData },
    },
    {
      path: "/app-findshop",
      component: AppFindShop,
      props: { ...findVenueData },
    },
    {
      path: "/contact-writeno1",
      component: ContactWriteno1,
      props: {
        x9cITtGProps: announcementsWriteData.x9cITtGProps,
        rJZsWIProps: announcementsWriteData.rJZsWIProps,
        viewProps: announcementsWriteData.viewProps,
        frame7782Props: announcementsWriteData.frame7782Props,
        xFooterProps: announcementsWriteData.xFooterProps,
      },
    },
    {
      path: "/contact-write",
      component: ContactWrite,
      props: {
        x9cITtGProps: communityWrite2Data.x9cITtGProps,
        rJZsWIProps: communityWrite2Data.rJZsWIProps,
        viewProps: communityWrite2Data.viewProps,
        frame7782Props: communityWrite2Data.frame7782Props,
        xFooterProps: communityWrite2Data.xFooterProps,
      },
    },
    {
      path: "/phone-certification",
      component: PhoneCertification,
      props: {
        text2050: "휴대폰 인증",
        frame77123Props: signUp12Data.frame77123Props,
        frame77124Props: signUp12Data.frame77124Props,
        xFooterProps: signUp12Data.xFooterProps,
      },
    },
    {
      path: "/termsview",
      component: TermsView,
      props: { ...terms2Data },
    },
    {
      path: "/signup",
      component: SignUp,
      props: { ...signUp22Data },
    },
    {
      path: "/gamescorecard",
      component: GameScoreCard,
      props: { ...frame7654Data },
    },
    {
      path: "/findid-write",
      component: FindIdWrite,
      props: {
        frame7605Props: findId12Data.frame7605Props,
        frame7623Props: findId12Data.frame7623Props,
        frame76991Props: findId12Data.frame76991Props,
        frame76992Props: findId12Data.frame76992Props,
        group7585Props: findId12Data.group7585Props,
        xFooterProps: findId12Data.xFooterProps,
      },
    },
    {
      path: "/login",
      component: Loginview,
      props: { ...login2Data },
    },
    {
      path: "/socialsignup",
      component: SocialSignUp,
      props: { ...signUp32Data },
    },
    {
      path: "/findpassword",
      component: FindPassword,
      props: {
        frame7605Props: findPassword12Data.frame7605Props,
        frame76231Props: findPassword12Data.frame76231Props,
        frame76232Props: findPassword12Data.frame76232Props,
        frame76991Props: findPassword12Data.frame76991Props,
        frame76992Props: findPassword12Data.frame76992Props,
        group7585Props: findPassword12Data.group7585Props,
        xFooterProps: findPassword12Data.xFooterProps,
      },
    },
    {
      path: "/resetpassword",
      component: ResetPassword,
      props: {
        frame7605Props: resetPassword22Data.frame7605Props,
        frame762321Props: resetPassword22Data.frame762321Props,
        frame762322Props: resetPassword22Data.frame762322Props,
        group7585Props: resetPassword22Data.group7585Props,
        xFooterProps: resetPassword22Data.xFooterProps,
      },
    },
    {
      path: "/findid-result",
      component: FindIdResult,
      props: {
        text: "",
        park222: "박길동 회원님의 아이디는 park222 입니다.",
        uuiTPlProps: findId22Data.uuiTPlProps,
        frame7605Props: findId22Data.frame7605Props,
        group7585Props: findId22Data.group7585Props,
        xFooterProps: findId22Data.xFooterProps,
      },
    },
    {
      path: "/",
      component: Home,
      props: { ...xMain2Data },
    },
    {
      path: "/gameinfo-detail",
      component: gameInfoDetail,
      props: { ...tournamentInfo2Data },
    },
    {
      path: '/myscorecard',
      component: MyScoreCard,
      props: { ...scorecard2Data },
    },
    {
      path: "/gameimage-detail",
      component: GameImageDetail,
      props: {
        rectangle509271:
          "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/rectangle-509271.png",
        materialSymbolsClose:
          "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/mdi-location@2x.png",
        rJZsWIProps: tournamentGallery2Data.rJZsWIProps,
        viewProps: tournamentGallery2Data.viewProps,
        frame76736Props: tournamentGallery2Data.frame76736Props,
        frame76715Props: tournamentGallery2Data.frame76715Props,
        xFooterProps: tournamentGallery2Data.xFooterProps,
      },
    },
    {
      path: "/gameranking-list",
      component: GameRankingList,
      props: { ...tournamentLeaderboard2Data },
    },
    {
      path: "/faq-list",
      component: FaqList,
      props: { ...faq2Data },
    },
    {
      path: "/game-list",
      component: GameList,
      props: { ...tournaments2Data },
    },
    {
      path: "/myswingvideos-list",
      component: MySwingVideoList,
      props: {
        materialSymbolsClose:
          "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/material-symbols-close-6@2x.png",
        rJZsWIProps: mySwingVideos2Data.rJZsWIProps,
        viewProps: mySwingVideos2Data.viewProps,
        frame763Props: mySwingVideos2Data.frame763Props,
        xFooterProps: mySwingVideos2Data.xFooterProps,
      },
    },
    {
      path: "/mygame-list",
      component: MyGameList,
      props: { ...myTournament2Data },
    },
    {
      path: "/map-list",
      component: MapList,
      props: { ...findVenue2Data },
    },
    {
      path: "/reservation-progress",
      component: ReservationProgress,
      props: {
        text2705: "예약 접수중!<br />잠시만 기다려주세요.",
        text2706:
          "매장 확인까지 다소 시간이 소요되며<br />예역 결과는 예약내역에서 확인하시기 바랍니다.<br /><br />즐거운 라운딩이 되세요!",
        x2FYmMcProps: reservation22Data.x2FYmMcProps,
        frame7712Props: reservation22Data.frame7712Props,
        xFooterProps: reservation22Data.xFooterProps,
      },
    },
    {
      path: "/system-preparing",
      component: SystemPreparing,
      props: {
        component2Props: systemOverview2Data.component2Props,
        viewProps: systemOverview2Data.viewProps,
        xFooterProps: systemOverview2Data.xFooterProps,
      },
    },
    {
      path: "/reservation-write",
      component: ReservationWrite,
      props: { ...reservation12Data },
    },
    {
      path: "/event-detail",
      component: EventDetail,
      props: {
        text2786: "홀인원 챌린지에 성공하면, 2천만원 나눠 드려요",
        text2787: "2024-04-11 ~ 2024-11-30",
        jGBKX4Props: eventDetails2Data.jGBKX4Props,
        rJZsWIProps: eventDetails2Data.rJZsWIProps,
        viewProps: eventDetails2Data.viewProps,
        frame7712Props: eventDetails2Data.frame7712Props,
        xFooterProps: eventDetails2Data.xFooterProps,
      },
    },
    {
      path: "/gameintro-preparing",
      component: GameIntroPreparing,
      props: {
        component2Props: gameIntroduction2Data.component2Props,
        viewProps: gameIntroduction2Data.viewProps,
        xFooterProps: gameIntroduction2Data.xFooterProps,
      },
    },
    {
      path: "/gameguide-preparing",
      component: GameGuidePreparing,
      props: {
        component2Props: gameGuide2Data.component2Props,
        viewProps: gameGuide2Data.viewProps,
        xFooterProps: gameGuide2Data.xFooterProps,
      },
    },
    {
      path: "/events-list",
      component: EventList,
      props: { ...events2Data },
    },
    {
      path: "/course-list",
      component: CourseList,
      props: {
        x2FYmMcProps: courses2Data.x2FYmMcProps,
        viewProps: courses2Data.viewProps,
        frame72983Props: courses2Data.frame72983Props,
        frame77601Props: courses2Data.frame77601Props,
        frame77602Props: courses2Data.frame77602Props,
        frame763Props: courses2Data.frame763Props,
        xFooterProps: courses2Data.xFooterProps,
      },
    },
    {
      path: "/board-list",
      component: BoardList,
      props: { ...community2Data },
    },
    {
      path: "/contactconfirm-write",
      component: ContactConfirmWrite,
      props: {
        x9cITtGProps: contact2Data.x9cITtGProps,
        rJZsWIProps: contact2Data.rJZsWIProps,
        viewProps: contact2Data.viewProps,
        frame7782Props: contact2Data.frame7782Props,
        xFooterProps: contact2Data.xFooterProps,
      },
    },
    {
      path: "/course-detail",
      component: CourseDetail,
      props: { ...courseDetails2Data },
    },
    {
      path: "/board-detail",
      component: BoardDetail,
      props: { ...communityDetails2Data },
    },
    {
      path: "/notice-list",
      component: NoticeList,
      props: { ...announcements2Data },
    },
    {
      path: "/reservationhistory",
      component: ReservationHistory,
      props: { ...reservationHistoryData },
    },
  ],
});
