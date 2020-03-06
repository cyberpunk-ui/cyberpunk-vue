let callbacks = [];
let onClickDocument = (e) => {
  let {target} = e;
  callbacks.forEach((item) => {
    /* istanbul ignore next */
    if (target === item.el || item.el.contains(target)) {
      return
    }
    item.callback()
  })
};
document.addEventListener('click', onClickDocument);

export default {
  bind: (el, binding) => {
    callbacks.push({el, callback: binding.value})
  },
}
