/*
 * @Description:
 * @version:
 * @Author: wanmao
 * @LastEditors: wanmao
 */
import React from 'react';
import { ListWrapper, ListItem, List } from './style';
import { getCount } from '../../api/utils';
import Icon from '../../components/Icon';
import LazyLoad from 'react-lazyload';
const RecommendList = (props) => {
  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {props.recommendList.map((item, index) => {
          return (
            <ListItem key={item.id + index}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                {/* 加此参数可以减小请求的图片资源大小 */}
                <LazyLoad
                  placeholder={
                    <img
                      width="100%"
                      height="100%"
                      src={require('./music.png')}
                      alt="music"
                    />
                  }
                >
                  <img
                    src={item.picUrl + '?param=300x300'}
                    width="100%"
                    height="100%"
                    alt="music"
                    onLoad={props.handleRefresh}
                  />
                </LazyLoad>
                <div className="play_count">
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
                <div className="play">
                  <Icon name="play1" size={24} color="#f1f1f1" />
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
};

export default React.memo(RecommendList);
