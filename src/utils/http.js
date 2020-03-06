/* istanbul ignore next */
function core(method, url, options) {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.onload = () => {
    options.success && options.success(xhr.response)
  }
  xhr.onerror = () => {
    options.error && options.error(xhr)
  }
  xhr.send(options.data)
}

export default {
  /* istanbul ignore next */
  post(url, options){
    core('post', url, options)
  },
};