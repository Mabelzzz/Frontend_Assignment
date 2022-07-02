import * as axios from 'axios';

export const getTrips = (keyword,lang) => {
	let baseUrl = 'http://localhost:3001';
  let pathLang = lang === 'en' ? '/en' : '/th';
  let uri = baseUrl + pathLang + '/trips'
	return axios.default.get(uri , {
		params: {
			keyword
		}
	}).then(res => res.data);
};
