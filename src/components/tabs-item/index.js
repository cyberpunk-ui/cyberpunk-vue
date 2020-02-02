import CTabsItem from './main';

/* istanbul ignore next */
CTabsItem.install = function(Vue) {
  Vue.component(CTabsItem.name, CTabsItem);
};

export default CTabsItem;