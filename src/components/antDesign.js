import Vue from 'vue';
import { 
  Base,
  Affix,
  Anchor,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Collapse,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  FormModel,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  Mentions,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Upload,
  Drawer,
  Skeleton,
  Comment,
  // ColorPicker,
  ConfigProvider,
  Empty,
  Result,
  Descriptions,
  PageHeader,
  Space,

  message
} from 'ant-design-vue';

/**
 * 文档 ant-design-vue https://1x.antdv.com/docs/vue/use-with-vue-cli-cn/
 * import 'ant-design-vue/dist/antd.css'; // 加载了全部的 antd 组件的样式（对前端性能是个隐患）
 * 高级配置 在babel.config.js中添加plugins重启
 * 使用 npm install babel-plugin-import --dev
 * npm install less@3.0.4 less-loader@5.0.0 --save-dev
 */
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Result);
Vue.use(Table);
Vue.use(Spin);
Vue.use(Tree);
Vue.use(Select);
Vue.use(Row);
Vue.use(Col);
Vue.use(Switch);
Vue.use(Space);
Vue.use(Divider);
Vue.use(Dropdown);
Vue.use(Popconfirm);
Vue.use(Modal);
Vue.use(TreeSelect);
Vue.prototype.$message = message;