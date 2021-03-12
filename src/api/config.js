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
const categoryTypes = [
  {
    key: '-1',
    name: '全部'
  },
  {
    key: '1',
    name: '男歌手'
  },{
    key: '2',
    name: '女歌手'
  },{
    key: '3',
    name:'乐队'
  }
]

// 歌手首字母
const alphaTypes = [
  {
    key: 'A',
    name: 'A',
  },
  {
    key: 'B',
    name: 'B',
  },
  {
    key: 'C',
    name: 'C',
  },
  {
    key: 'D',
    name: 'D',
  },
  {
    key: 'E',
    name: 'E',
  },
  {
    key: 'F',
    name: 'F',
  },
  {
    key: 'G',
    name: 'G',
  },
  {
    key: 'H',
    name: 'H',
  },
  {
    key: 'I',
    name: 'I',
  },
  {
    key: 'J',
    name: 'J',
  },
  {
    key: 'K',
    name: 'K',
  },
  {
    key: 'L',
    name: 'L',
  },
  {
    key: 'M',
    name: 'M',
  },
  {
    key: 'N',
    name: 'N',
  },
  {
    key: 'O',
    name: 'O',
  },
  {
    key: 'P',
    name: 'P',
  },
  {
    key: 'Q',
    name: 'Q',
  },
  {
    key: 'R',
    name: 'R',
  },
  {
    key: 'S',
    name: 'S',
  },
  {
    key: 'T',
    name: 'T',
  },
  {
    key: 'U',
    name: 'U',
  },
  {
    key: 'V',
    name: 'V',
  },
  {
    key: 'W',
    name: 'W',
  },
  {
    key: 'X',
    name: 'X',
  },
  {
    key: 'Y',
    name: 'Y',
  },
  {
    key: 'Z',
    name: 'Z',
  },
];

const areaTypes = [
  {key:'-1',name: '全部'},
  {key: '7', name: '华语'},
  {key: '96', name: '欧美'},
  {key: '8', name: '日本'},
  {key: '16', name: '韩国'},
  {key: '0', name:'其他'}
]
export {
  axiosInstance,
  categoryTypes,
  alphaTypes,
  areaTypes
}