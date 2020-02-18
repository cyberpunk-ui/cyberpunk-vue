import Vue from "vue"
import chai, { expect } from "chai";
import sinon from 'sinon';
import { mount } from "@vue/test-utils";
import sinonChai from 'sinon-chai';
import Carousel from "@/components/carousel/main";
import CCarouselItem from "@/components/carousel-item"

chai.use(sinonChai);
Vue.use(CCarouselItem);

const template = `
  <c-carousel-item name="1">
    <h1 class="item1">1</h1>
  </c-carousel-item>
  <c-carousel-item name="2">
    <h1 class="item2">2</h1>
  </c-carousel-item>
  <c-carousel-item name="3">
    <h1 class="item3">3</h1>
  </c-carousel-item>
`;

describe("[Carousel]", () => {
  it("create carousel component.", () => {
    expect(Carousel).to.be.ok;
  });
  it("set CCarouselItem children.", (done) => {
    const wrapper = mount(Carousel, {
      propsData: {
        autoplay: false
      },
      slots: {
        default: template
      },
    })
    setTimeout(()=> {
      expect(wrapper.find('.item1').exists()).to.be.true
      done()
    })
  });
  it("set selected attribute.", (done) => {
    const wrapper = mount(Carousel, {
      propsData: {
        autoplay: false,
        selected: '3'
      },
      slots: {
        default: template
      },
    })
    setTimeout(()=> {
      expect(wrapper.find('.item3').exists()).to.be.true
      done()
    })
  });
  it("set autoplay & interval attribute.", (done) => {
    const callback = sinon.fake();
    const wrapper = mount(Carousel, {
      propsData: {
        autoplay: true,
        interval: 100,
        selected: '1'
      },
      slots: {
        default: template,
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(()=> {
      expect(callback).to.have.been.calledWith('2');
      done()
    }, 100)
  });
  it("set reverseAutoplay attribute.", (done) => {
    const callback = sinon.fake();
    const wrapper = mount(Carousel, {
      propsData: {
        autoplay: true,
        reverseAutoplay: true,
        interval: 100,
        selected: '1'
      },
      slots: {
        default: template,
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(()=> {
      expect(callback).to.have.been.calledWith('3');
      done()
    }, 100)
  });
  it("test dots click event.", (done) => {
    const wrapper = mount(Carousel, {
      propsData: {
        autoplay: false,
        selected: '1'
      },
      slots: {
        default: template,
      },
      listeners: {
        'update:selected': (selected) => {
          expect(selected).to.eq('3')
          done()
        }
      }
    })
    setTimeout(()=> {
      wrapper.find('[data-index="3"]').trigger('click')
    })
  });
  it("test left button click event.", (done) => {
    const wrapper = mount(Carousel, {
      propsData: {
        autoplay: false,
        selected: '1'
      },
      slots: {
        default: template,
      },
      listeners: {
        'update:selected': (selected) => {
          expect(selected).to.eq('3')
          done()
        }
      }
    })
    setTimeout(()=> {
      wrapper.find('[data-button="left"]').trigger('click')
    })
  });
  it("test right button click event.", (done) => {
    const wrapper = mount(Carousel, {
      propsData: {
        autoplay: false,
        selected: '1'
      },
      slots: {
        default: template,
      },
      listeners: {
        'update:selected': (selected) => {
          expect(selected).to.eq('2')
          done()
        }
      }
    })
    setTimeout(()=> {
      wrapper.find('[data-button="right"]').trigger('click')
    })
  });
});
