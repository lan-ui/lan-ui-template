
{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#if_eq importType "partly"}}
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  {{#lint}}
  /* eslint-disable no-unused-vars */
  Style,
  {{/lint}}
  {{#unless lint}}
  Style,
  {{/unless}}
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  TabBar,
  TabPanels,
  // form
  Checkbox,
  CheckboxGroup,
  Checker,
  Radio,
  RadioGroup,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  Drawer,
  ImagePreview,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Sticky,
  ScrollNav,
  ScrollNavBar,
  // hx
  HxBank,
  HxCertificatetype,
  HxNationality,
  HxSex,
  HxLocation,
  HxProvinces,
  HxValidity,
  HxBirthdate,
  HxPhoneNumber,
  HxPhoneVerification,
  HxAccountName,
  HxAccountNumber,
  HxAddress,
  HxIdNumber,
  HxEmail,
  HxInput,
  HxInputFdn,
  RecycleList{{#if_eq lintConfig "airbnb"}}{{/if_eq}}
} from 'hx-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq importType "fully"}}
import Hx from 'hx-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
{{#rem}}
import './rem'
{{/rem}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

{{#if_eq importType "partly"}}
Vue.use(Button){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Loading){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Tip){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Toolbar){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(TabBar){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(TabPanels){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Checkbox){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(CheckboxGroup){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Checker){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Radio){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(RadioGroup){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Input){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Textarea){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Select){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Switch){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Rate){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Validator){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Upload){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Form){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Popup){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Toast){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Picker){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(CascadePicker){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(DatePicker){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(TimePicker){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(SegmentPicker){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Dialog){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ActionSheet){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Drawer){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ImagePreview){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Scroll){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Slide){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(IndexList){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Swipe){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Sticky){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ScrollNav){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ScrollNavBar){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxBank){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxCertificatetype){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxNationality){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxSex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxLocation){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxProvinces){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxValidity){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxBirthdate){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxPhoneNumber){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxPhoneVerification){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxAccountName){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxAccountNumber){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxAddress){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxIdNumber){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxEmail){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxInput){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(HxInputFdn){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq importType "fully"}}
Vue.use(Hx){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
