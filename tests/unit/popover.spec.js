import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Popover from '@/components/popover/main'


describe('[Popover]', () => {
  it('create popover component.', () => {
    expect(Popover).to.exist
  })
  it('set position attribute.', (done) => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>click me</button>`},
        content: '<div>popover</div>'
      },
      propsData: {
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    setTimeout(()=> {
      let classes = wrapper.find('.content-wrapper').classes()
      expect(classes).to.include('position-bottom')
      done()
    })
  })
  it('set hover trigger attribute.', (done) => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>click me</button>`},
        content: '<div>popover</div>'
      },
      propsData: {
        position: 'bottom',
        trigger: 'hover'
      }
    })
    expect(wrapper.find('.content-wrapper').exists()).to.eq(false);
    wrapper.find('.c-popover').trigger('mouseenter')
    setTimeout(()=> {
      expect(wrapper.find('.content-wrapper').exists()).to.eq(true);
      wrapper.destroy()
      done()
    })
  })
  it('test close.', (done) => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>click me</button>`},
        content: '<div>popover</div>'
      },
      propsData: {
        position: 'bottom',
      }
    })
    expect(wrapper.find('.content-wrapper').exists()).to.eq(false);
    wrapper.find('.c-popover').trigger('click')
    setTimeout(()=> {
      wrapper.find('.c-popover').trigger('click')
      expect(wrapper.find('.content-wrapper').exists()).to.eq(false);
      wrapper.destroy()
      done()
    })
  })
})