#VUE2.0移动端模版

## 框架目录说明  ##
      - build                   //webpack构建配置文件
      - config                  //全局构建配置文件
      - src                     //项目核心源文件
	  | - assets                  //资源目录
        | - image               //放置图片资源
        | - css                 //放置样式资源
        | - font                //icon资源
    | - router
      | -  router-intercept     //路由拦截配置
    | - filter                  //过滤器
    | - server
        | - api                 //请求API接口数据
        | -  HttpRequest        //axios请求配置
    | - store                   //vuex配置
        | - modules             //请求文件目录(注意：不同模块划分不同的文件)
    | - vuepage                 //放置vue页面
        | - commom              //放置可复用vue组件
    | -  wechat                 //微信业务功能
    | - jslib                   //js类库
      -App.vue                  //顶层vue页面
      -main.js                  //入口文件

## 项目规范

1. 文件夹命名：
  以小写为主，多词组合时以小写开头，驼峰命名（如：`searchBar`）

2. 独立组件：
  * 应有相应的注释与命名
  * `props` 应有类型，与默认值

    ```vue
    <script>
    export default {
      name: 'TodoItem',   // 大写开头，驼峰命名
      props: {
        // 注释
        name: {
          type: String,   // 类型
          default: '',    // 默认值
        },
        // ...
      },
      // ...
    };
    </script>
    ```

3. 组件内调用其他组件：

    ```vue
    <template>
      <other-component></other-component>
    </template>

    <script>
    // ...
    import OtherCompoent from './OtherCompoent';
    // ...

    export default {
      // ...
      components: {
        OtherCompoent
      }
    };
    </script>
    ```

4. 单标签有多个属性值时：
  `v-if` 类指令放在最先，之后依次是静态值，动态值，事件放在最后（**指令统一用缩写**）

    ```vue
    <template>
      <div
        v-for="(item, index) in list"
        class="a"
        :key="index"
        :name="div"
        @click="click"
      >
        content
      </div>
    </template>
    ```

5. 组件内样式：
  * 组件内样式开启 `scoped` 模式
  * 引入其他文件需要与样式空开一行
  * 以父元素样式包裹子元素样式
  * 样式以多词组合时以小写开头，驼峰命名（如：`otherClass`）

    ```vue
    <style scoped lang="less">
    @import url('base');

    #main {
      .otherClass{

      }
    }
    </style>
    ```

6. 通用方法：
  自己写的组件或是 `mixins` 方法中应该带有 `$_` 开头

    ```vue
    <script>
    export default {
      // ...
      methods: {
        // ...
        $_myGreatMixin_update() {
          // ...
        },
        // ...
      },
      // ...
    };
    </script>
    ```




