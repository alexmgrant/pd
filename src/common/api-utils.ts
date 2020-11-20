import axios from 'axios';
import { getData } from './utils';

const API_URL = 'https://api.pagerduty.com/';

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use((config: any) => {
  const token = 'y_NbAkKc66ryYTWUXYEu';
  config.headers.authorization = `Token token=${token}`;

  return config;
});

const getUsers = async (limit: number) =>
  await instance.get(`${API_URL}/users?limit=${limit}`).then(getData);

export { getUsers };
