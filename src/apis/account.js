import http from 'utils/http';
import axios from 'axios'
export const signin = (params) => {
  return http.post('/', params);
}
//获取投递过的岗位
export const submitted = () => axios.get('api/submitted/position');
//获取简历简讯
export const brief = () => axios.get('api/resume/brief');
//获取收藏的岗位
export const favorite = () => axios.get('api/favorite/position');
//取消对岗位的收藏
export const isfavorite = (id) => axios.delete(`api/favorite/position/${id}`);
//城市
export const city = () => axios.get('api/constant/district');
//获取推荐岗位
export const searched = (params) => axios.post('api/searched/position',params);