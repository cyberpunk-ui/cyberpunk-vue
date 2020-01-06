const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/components/col/col';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Col', () => {
  it('create Col.', function () {
    expect(Col).to.be.ok;
  });
  it('span attribute.', () => {
    const div = document.createElement('div');
    document.body.append(div);
    const colConstructor = Vue.extend(Col);
    const col = new colConstructor({
      propsData: {
        span: '12'
      }
    }).$mount(div);

    const colElement = col.$el;
    expect(colElement.classList.contains('col-12')).to.equal(true);
    div.remove();
    col.$el.remove();
    col.$destroy();
  });
  it('offset attribute.', () => {
    const div = document.createElement('div');
    document.body.append(div);
    const colConstructor = Vue.extend(Col);
    const col = new colConstructor({
      propsData: {
        offset: '12'
      }
    }).$mount(div);

    const colElement = col.$el;
    expect(colElement.classList.contains('offset-12')).to.equal(true);
    div.remove();
    col.$el.remove();
    col.$destroy();
  });
  describe('test xs/sm/md/lg/xl/xxl ', function () {
    let col = null;
    let div = null;

    const colConstructor = Vue.extend(Col);
    afterEach(() => {
      div.remove();
      col.$el.remove();
      col.$destroy();
    });
    it('accept number.', function () {
      ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach((type) => {
        div = document.createElement('div')
        document.body.append(div);
        col = new colConstructor({
          propsData: {
            [type]: 24
          }
        }).$mount(div);

        const colElement = col.$el;
        expect(colElement.classList.contains(`col-${type}-24`)).to.equal(true);
        expect(colElement.classList.contains(`offset-${type}-0`)).to.equal(true);
      })
    });
    it('accept string.', function () {
      ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach((type) => {
        div = document.createElement('div')
        document.body.append(div);
        col = new colConstructor({
          propsData: {
            [type]: '12'
          }
        }).$mount(div);

        const colElement = col.$el;
        expect(colElement.classList.contains(`col-${type}-12`)).to.equal(true);
        expect(colElement.classList.contains(`offset-${type}-0`)).to.equal(true);
      })
    });
    it('accept object.', function () {
      ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach((type) => {
        div = document.createElement('div')
        document.body.append(div);
        col = new colConstructor({
          propsData: {
            [type]: {span: 12, offset: 12}
          }
        }).$mount(div);

        const colElement = col.$el;
        expect(colElement.classList.contains(`col-${type}-12`)).to.equal(true);
        expect(colElement.classList.contains(`offset-${type}-12`)).to.equal(true);
      })
    });
  });
});