import chai, { expect } from "chai";
import sinonChai from 'sinon-chai';
import { mount } from "@vue/test-utils";
import Upload from "@/components/upload/main";
import http from '@/utils/http';

chai.use(sinonChai);

describe("[Upload]", () => {
  it("create upload component.", () => {
    expect(Upload).to.be.ok;
  });
  it("test upload one file.", () => {
    http.post = (url, options) => {
      setTimeout(()=>{
        options.success('{key: "a0cd70fb3da0e18426665712a946f7d2"}')
      }, 200)
    }
    const wrapper = mount(Upload, {
      propsData: {
        name: 'file',
        action: '/xxx',
        fileList: [],
      },
      slots: {
        default: `<button id="test">upload</button>`
      },
      listeners: {
        'update:fileList': (fileList)=> {
          wrapper.setProps({fileList})
        }
      }
    })
    wrapper.find('#test').trigger('click')

    const inputWrapper = wrapper.find('input[type="file"]')
    const input = inputWrapper.element
    let file = new File(['test'], 'xxx.txt')
    const data = new DataTransfer()
    data.items.add(file)
    input.files = data.files
    inputWrapper.trigger('change')
    setTimeout(()=> {
      expect(wrapper.find('ol').element.children.length).to.eq(1)
      expect(wrapper.find('.content').classes()).to.include('pending')
    },100)
    setTimeout(()=> {
      expect(wrapper.find('.content').classes()).to.include('success')
    },210)
  });
  it("test upload multiple file.", () => {
    http.post = (url, options) => {
      setTimeout(()=>{
        options.success('{key: "a0cd70fb3da0e18426665712a946f7d2"}')
      }, 200)
    }
    const wrapper = mount(Upload, {
      propsData: {
        name: 'file',
        action: '/xxx',
        fileList: [],
        multiple: true
      },
      slots: {
        default: `<button id="test">upload</button>`
      },
      listeners: {
        'update:fileList': (fileList)=> {
          wrapper.setProps({fileList})
        }
      }
    })
    wrapper.find('#test').trigger('click')

    const inputWrapper = wrapper.find('input[type="file"]')
    const input = inputWrapper.element
    // 1. test repeat file name
    // 2. test multiple file
    let file1 = new File(['test1'], '1.txt')
    let file2 = new File(['test2'], '1.txt')
    let file3 = new File(['test3'], '3.txt')
    const data = new DataTransfer()
    data.items.add(file1)
    data.items.add(file2)
    data.items.add(file3)
    input.files = data.files
    inputWrapper.trigger('change')
    setTimeout(()=> {
      expect(wrapper.find('ol').element.children.length).to.eq(3)
      expect(wrapper.findAll('.content').at(0).classes()).to.include('pending')
      expect(wrapper.findAll('.content').at(1).classes()).to.include('pending')
      expect(wrapper.findAll('.content').at(2).classes()).to.include('pending')
    },100)
    setTimeout(()=> {
      expect(wrapper.findAll('.content').at(0).classes()).to.include('success')
      expect(wrapper.findAll('.content').at(1).classes()).to.include('success')
      expect(wrapper.findAll('.content').at(2).classes()).to.include('success')
    },210)
  });
  it("test remove file.", (done) => {
    http.post = (url, options) => {
      setTimeout(()=>{
        options.success('{key: "a0cd70fb3da0e18426665712a946f7d2"}')
        done()
      }, 100)
    }
    const wrapper = mount(Upload, {
      propsData: {
        name: 'file',
        action: '/xxx',
        fileList: [],
      },
      slots: {
        default: `<button id="test">upload</button>`
      },
      listeners: {
        'update:fileList': (fileList)=> {
          wrapper.setProps({fileList})
        },
      }
    })
    wrapper.find('#test').trigger('click')

    const inputWrapper = wrapper.find('input[type="file"]')
    const input = inputWrapper.element
    let file = new File(['test'], 'xxx.txt')
    const data = new DataTransfer()
    data.items.add(file)
    input.files = data.files
    inputWrapper.trigger('change')
    setTimeout(()=> {
      expect(wrapper.find('.content').classes()).to.include('success')
      wrapper.find('.close').trigger('click')
      expect(wrapper.find('ol').element.children.length).to.eq(0)
    },110)
  });
  it("set accept attribute.", (done) => {
    http.post = (url, options) => {
      setTimeout(()=>{
        options.success('{key: "a0cd70fb3da0e18426665712a946f7d2"}')
        done()
      }, 100)
    }
    const wrapper = mount(Upload, {
      propsData: {
        name: 'file',
        action: '/xxx',
        fileList: [],
        accept: 'text/plain'
      },
      slots: {
        default: `<button id="test">upload</button>`
      },
      listeners: {
        'update:fileList': (fileList)=> {
          wrapper.setProps({fileList})
        },
      }
    })
    wrapper.find('#test').trigger('click')

    const inputWrapper = wrapper.find('input[type="file"]')
    const input = inputWrapper.element
    let file = new File(['test'], 'xxx.txt', {type: 'text/plain'})
    const data = new DataTransfer()
    data.items.add(file)
    input.files = data.files
    inputWrapper.trigger('change')
    setTimeout(()=> {
      expect(wrapper.find('.content').classes()).to.include('success')
    },110)
  });
});
