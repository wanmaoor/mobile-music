/*
 * @Description: 
 * @version: 
 * @Author: wanmao
 * @LastEditors: wanmao
 */

import axios from 'axios'

export const baseURL = 'https://netease-cloud-music-api-ruddy.vercel.app';

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.response.use(res => res.data, err => {
  console.log(err, '网络错误');
})

export {
  axiosInstance
}