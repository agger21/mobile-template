'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
 NODE_ENV: '"development"',
 VN_CONFIG: '"dev"',
 BASE_URL: '"http://park.yipage.cn/api/v1/admin/"',     //测试接口域名
 IMG_RESOURE: '"http://www.TES.com/"'                   //测试图片域名
})
