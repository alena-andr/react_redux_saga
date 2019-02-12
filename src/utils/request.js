import axios from 'axios';

const origin = 'https://api.citybik.es/v2';

export default function request(url) {
  return axios({
    method: 'GET',
    url: `${origin}${url}`,
  })
    .then(response => response);
};
