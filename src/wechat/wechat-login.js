function checkLogin(wx) {
  if (!localStorage.getItem('xxx_Token')) {
    let url = window.location.href;

    if (url.indexOf('code') >= 0) {
      let a = url.split("?")[1];
      let b = a.split('&')[0];
      let aCode = b.split('=')[1];
    } else {
      let aCode = 0;
    }

    if (aCode) {
      //获取token操作

    } else {
      // 注意：开始做微信登录的时候才打开注释
      // document.location.href= `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wx.appId}&redirect_uri=${wx.redirectUrl}&response_type=code&scope=${wx.loginStyle}&state=${wx.param}#wechat_redirect`;
    }
  }
}

export default checkLogin
