<template>
  <div>
    <c-button>基本按钮</c-button>
    <c-button icon="leftarrow">图标按钮</c-button>
    <c-button icon="Rightarrow" icon-position="right">右侧图标</c-button>
    <c-button icon="success">点击事件</c-button>
  </div>
</template>
<script>
  import Button from '../../../src/components/button/button';
  import ButtonGroup from '../../../src/components/button-group/button-group';
  import Icon from '../../../src/components/icon/icon';

  export default  {
    components: {
      'c-button': Button,
      'c-button-group': ButtonGroup,
      'c-Icon': Icon,
    }
  }
</script>