import Vue from "vue"
import chai, {expect} from "chai"
import sinon from 'sinon'
import {mount} from "@vue/test-utils"
import sinonChai from 'sinon-chai'
import CMenu from "@/components/menu/main"
import CMenuItem from "@/components/menu-item"
import CSubMenu from "@/components/sub-menu"
import Carousel from "@/components/carousel/main"

Vue.use(CMenuItem)
Vue.use(CSubMenu)
chai.use(sinonChai)

const template = `
  <c-menu-item name="home">Home</c-menu-item>
  <c-sub-menu name="about">
    <template slot="title">About</template>
    <c-menu-item name="about1">About1</c-menu-item>
    <c-menu-item name="about2">About1</c-menu-item>
    <c-sub-menu name="contact">
      <template slot="title">Contact</template>
      <c-menu-item name="qq">QQ</c-menu-item>
      <c-menu-item name="phone">Phone</c-menu-item>
      <c-menu-item name="wechat">WeChat</c-menu-item>
    </c-sub-menu>
  </c-sub-menu>
  <c-menu-item name="hire">Hire</c-menu-item>
`

describe("[Menu]", () => {
  it("create menu component.", () => {
    expect(CMenu).to.be.ok
  })
  it("set selected attribute.", () => {
    const wrapper = mount(CMenu, {
      propsData: {
        selected: ['hire']
      },
      slots: {
        default: template
      },
    })
    setTimeout(()=> {
      expect(wrapper.find('[data-name="hire"]').classes()).to.includes('active')
    })
  })
  it("set multiple attribute.", () => {
    const wrapper = mount(CMenu, {
      propsData: {
        selected: ['home', 'hire'],
        multiple: true
      },
      slots: {
        default: template
      },
    })
    setTimeout(()=> {
      expect(wrapper.find('[data-name="hire"]').classes()).to.includes('active')
      expect(wrapper.find('[data-name="home"]').classes()).to.includes('active')
    })
  })
  it("set direction attribute.", () => {
    const wrapper = mount(CMenu, {
      propsData: {
        direction: 'vertical'
      },
      slots: {
        default: template
      },
    })
    setTimeout(()=> {
      expect(wrapper.find('.vertical').exists()).to.be.true
    })
  })
  it("test item click event.", (done) => {
    const callback = sinon.fake();
    const wrapper = mount(CMenu, {
      slots: {
        default: template,
      },
      listeners: {
        'update:selected': callback
      }
    })
    wrapper.find('[data-name="hire"]').trigger('click')
    expect(callback).to.have.been.calledWith(['hire'])
    done()
  });
})
