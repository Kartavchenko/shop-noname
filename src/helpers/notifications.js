import Notiflix from "notiflix";

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '10px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 3000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  plainText: true,
  showOnlyTheLastOne: false,
  clickToClose: false,
  pauseOnHover: true,
  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,
  fontFamily: 'Quicksand',
  fontSize: '13px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'fade',
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
  fontAwesomeIconStyle: 'basic',
  fontAwesomeIconSize: '34px',
  success: {
  background: '#966dbf',
  textColor: '#fff',
  childClassName: 'notiflix-notify-success',
  notiflixIconColor: 'rgba(0,0,0,0.2)',
  fontAwesomeClassName: 'fas fa-check-circle',
  fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
  backOverlayColor: 'rgba(50,198,130,0.2)',
  },
  failure: {
  background: '#ff5549',
  textColor: '#fff',
  childClassName: 'notiflix-notify-failure',
  notiflixIconColor: 'rgba(0,0,0,0.2)',
  fontAwesomeClassName: 'fas fa-times-circle',
  fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
  backOverlayColor: 'rgba(255,85,73,0.2)',
  },
  warning: {
  background: '#eebf31',
  textColor: '#fff',
  childClassName: 'notiflix-notify-warning',
  notiflixIconColor: 'rgba(0,0,0,0.2)',
  fontAwesomeClassName: 'fas fa-exclamation-circle',
  fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
  backOverlayColor: 'rgba(238,191,49,0.2)',
  },
  info: {
  background: '#26c0d3',
  textColor: '#fff',
  childClassName: 'notiflix-notify-info',
  notiflixIconColor: 'rgba(0,0,0,0.2)',
  fontAwesomeClassName: 'fas fa-info-circle',
  fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
  backOverlayColor: 'rgba(38,192,211,0.2)',
},
});

Notiflix.Report.init({
	className: 'notiflix-report',
	width: '320px',
	backgroundColor: '#f8f8f8',
	borderRadius: '25px',
	rtl: false,
	zindex: 4002,
	backOverlay: true,
	backOverlayColor: 'rgba(0,0,0,0.5)',
	backOverlayClickToClose: false,
	fontFamily: 'Quicksand',
	svgSize: '110px',
	plainText: true,
	titleFontSize: '16px',
	titleMaxLength: 34,
	messageFontSize: '13px',
	messageMaxLength: 400,
	buttonFontSize: '14px',
	buttonMaxLength: 34,
	cssAnimation: true,
	cssAnimationDuration: 360,
	cssAnimationStyle: 'fade',
	success: {
	svgColor: '#d3ac2b',
	titleColor: '#1e1e1e',
	messageColor: '#242424',
	buttonBackground: '#d3ac2b',
	buttonColor: '#fff',
	backOverlayColor: 'rgba(50,198,130,0.1)',
	},
	failure: {
	svgColor: '#ff5549',
	titleColor: '#1e1e1e',
	messageColor: '#242424',
	buttonBackground: '#ff5549',
	buttonColor: '#fff',
	backOverlayColor: 'rgba(255,85,73,0.2)',
	},
	warning: {
	svgColor: '#eebf31',
	titleColor: '#1e1e1e',
	messageColor: '#242424',
	buttonBackground: '#eebf31',
	buttonColor: '#fff',
	backOverlayColor: 'rgba(238,191,49,0.2)',
	},
	info: {
	svgColor: '#26c0d3',
	titleColor: '#1e1e1e',
	messageColor: '#242424',
	buttonBackground: '#26c0d3',
	buttonColor: '#fff',
	backOverlayColor: 'rgba(38,192,211,0.2)',
	},
});

export default Notiflix;
