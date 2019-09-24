import http from 'utils/http';

export const signin = (params) => {
  return http.post('/', params);
}
export const submitted = () => 
http.get('/submitted/position');
