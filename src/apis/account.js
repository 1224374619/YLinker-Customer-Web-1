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
export const isfavorite = (id) => axios.detele(`/favorite/position/${id}`);
//城市
export const city = () => axios.get('/constant/district');
//获取推荐岗位
export const searched = () => axios.post('/searched/position');