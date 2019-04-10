// import {getQiniu} from '../server/api'
import axios from 'axios'

export default {
  //添加cookie /修改cookie
  setCookie(name, value) {
    let Days = 14;
    let exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  },
  getCookie(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  },
  //删除cookie
  removeCookie(name) {
    let d = new Date("2000-02-02");
    document.cookie = unescape(name) + "=;expires=" + d;
    return escape(document.cookie);
  },
  //修改标题
  changeTitle(t) {
    document.title = t;
    let i = document.createElement('iframe');
    i.style.display = 'none';
    i.onload = function () {
      setTimeout(function () {
        i.remove();
      }, 9)
    };
    document.body.appendChild(i);
  },
  //字段的验证，支持是否为空、手机、邮箱的判断
  testVal(value, type) {
    value = $.trim(value);
    //非空验证
    if ('require' === type) {
      return !!value;
    }
    //手机号验证
    if ('phone' === type) {
      return /^1(3|4|5|7|8)\d{9}$/.test(value);
    }
    //邮箱验证
    if ('email' === type) {
      return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value);
    }
    //名字检测
    if ('name' === type) {
      return /^[\u4e00-\u9fa50-9a-zA-Z]{1,20}$/.test(value)
    }
    //验证密码
    if ('pwd' === type) {
      return /^([a-zA-Z0-9\.\@\!\#\$\%\^\&\*\(\)]){6,16}$/.test(value)
    }
    //身份证验证15和18位
    if ('idCard' === type) {
      return /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/
    }
  },
  // 获取url中的参数（url中没有#）
  getUrlParams(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  },
  //		获取url中的参数（url中有#）
  getHashUrlParams(eNumber) {
    let after = window.location.hash.split("?")[1];
    if (after) {
      let reg = new RegExp("(^|&)" + eNumber + "=([^&]*)(&|$)");
      let r = after.match(reg);
      if (r != null) {
        return decodeURIComponent(r[2]);
      } else {
        return null;
      }
    }
  },


  getQueryString(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  },

  //上传七牛云
  uploadImgToQiniu(file, el) {
    return new Promise((resolve, reject) => {

      // getQiniu().then((res)=>{
      //   if(res.data.code == 200){
      //
      //     const axiosInstance = axios.create({
      //       withCredentials: false,
      //     });    //withCredentials 禁止携带cookie，带cookie在七牛上有可能出现跨域问题
      //
      //     let data = new FormData();
      //     data.append('xxx_Token', res.data.data.token);     //七牛需要的token，叫后台给，是七牛账号密码等组成的hash
      //     data.append('file', file);
      //     axiosInstance({
      //       method: 'POST',
      //       url: 'https://up-z2.qiniup.com',  //上传区域地址
      //       data: data,
      //       timeout:30000,      //超时时间，因为图片上传有可能需要很久
      //       onUploadProgress: (progressEvent)=> {
      //         //imgLoadPercent 是上传进度，可以用来添加进度条
      //         // let imgLoadPercent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
      //       },
      //     }).then(data =>{
      //       //上传成功...  (登录七牛账号，找到七牛给你的 URL地址) 和 data里面的key 拼接成图片下载地址
      //
      //       let url = `${res.data.data.domain}${data.data.key}`
      //       resolve(url)
      //     }).catch(function(err) {
      //       //上传失败
      //
      //       reject();
      //       console.log(err,'上传错误！！')
      //     });
      //
      //
      //   }
      //
      // })

    })

  },
}









