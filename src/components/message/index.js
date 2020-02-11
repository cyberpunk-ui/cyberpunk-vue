import Message from "./main";

let currentMessage = null;

export default {
  install(Vue) {
    Vue.prototype.$message = function({ message, ...propsData }) {
      if (currentMessage) {
        currentMessage.close();
      }
      currentMessage = createMessage({
        Vue,
        message,
        propsData,
        onClose: () => {
          currentMessage = null;
        }
      });
    };
  }
};

function createMessage({ Vue, message: content, propsData, onClose }) {
  let Constructor = Vue.extend(Message);
  let messageObj = new Constructor({ propsData });
  messageObj.$slots.default = [content];
  messageObj.$mount();
  messageObj.$on("close", onClose);
  document.body.appendChild(messageObj.$el);
  return messageObj;
}
