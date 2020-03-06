import { version } from './package.json';
import Button from "./src/components/button";
import Icon from "./src/components/icon";
import ButtonGroup from "./src/components/button-group";
import Input from "./src/components/input";
import Row from "./src/components/row";
import Col from "./src/components/col";
import Aside from "./src/components/aside";
import Layout from "./src/components/layout";
import Main from "./src/components/main";
import Header from "./src/components/header";
import Footer from "./src/components/footer";
import Message from "./src/components/message";
import Tabs from "./src/components/tabs";
import TabsPane from "./src/components/tabs-pane";
import TabsHead from "./src/components/tabs-head";
import TabsItem from "./src/components/tabs-item";
import TabsBody from "./src/components/tabs-body";
import Popover from "./src/components/popover";
import Collapse from "./src/components/collapse";
import CollapseItem from "./src/components/collapse-item";
import Cascader from "./src/components/cascader";
import Carousel from "./src/components/carousel";
import CarouselItem from "./src/components/carousel-item";
import Menu from "./src/components/menu";
import MenuItem from "./src/components/menu-item";
import SubMenu from "./src/components/sub-menu";
import Pagination from "./src/components/pagination";
import Table from "./src/components/table";
import Upload from "./src/components/upload";

const components = [
  Button,
  Icon,
  ButtonGroup,
  Input,
  Row,
  Col,
  Aside,
  Layout,
  Main,
  Header,
  Footer,
  Message,
  Tabs,
  TabsPane,
  TabsHead,
  TabsItem,
  TabsBody,
  Popover,
  Collapse,
  CollapseItem,
  Cascader,
  Carousel,
  CarouselItem,
  Menu,
  MenuItem,
  SubMenu,
  Pagination,
  Table,
  Upload,
];

const install = function(Vue) {
  components.forEach(component => {
    Vue.use(component);
  });
  Vue.prototype.$message = Message;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  version,
  install,
  Button,
  Icon,
  ButtonGroup,
  Input,
  Row,
  Col,
  Aside,
  Layout,
  Main,
  Header,
  Footer,
  Message,
  Tabs,
  TabsPane,
  TabsHead,
  TabsItem,
  TabsBody,
  Popover,
  Collapse,
  CollapseItem,
  Cascader,
  Carousel,
  CarouselItem,
  Menu,
  MenuItem,
  SubMenu,
  Pagination,
  Table,
  Upload,
};

export default {
  version,
  install,
};