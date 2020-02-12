let callbacks = [];
let onClickDocument = (e) => {
  let {target} = e;
  callbacks.forEach((item) => {
    if (target === item.el || item.el.contains(target)) {
      return
    } else {
      item.callback()
    }
  })
};
document.addEventListener('click', onClickDocument);

export default {
  bind: (el, binding) => {
    callbacks.push({el, callback: binding.value})
  },
  unbind: () => {
    document.removeEventListener('click', onClickDocument)
  }
}
