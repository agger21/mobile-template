import axios from './HttpRequest';

//获取列表数据
export function getGoods(params) {
  return axios.post('plantList', params)
}
