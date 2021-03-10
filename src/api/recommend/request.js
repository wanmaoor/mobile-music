/*
 * @Description: 
 * @version: 
 * @Author: wanmao
 * @LastEditors: wanmao
 */

import {axiosInstance} from '../config'

export const getBannerRequest = () => {
  return axiosInstance.get('/banner')
}

export const getRecommendListRequest = () => {
 return axiosInstance.get('/personalized') 
}

export const fetcher = (url) => axiosInstance.get(url)