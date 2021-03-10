/*
 * @Description:
 * @version:
 * @Author: wanmao
 * @LastEditors: wanmao
 */
import React from 'react';
import Slider from '../../components/slider/index';
import RecommendList from '../../components/recommend-list/index';
import Scroll from '../../components/Scroll/index';
import { Content } from './style';
import useSWR from 'swr';
import { fetcher } from '../../api/recommend/request';
import { forceCheck } from 'react-lazyload';
function Recommend(props) {
  const myRef = React.createRef();

  const { data: bannerData } = useSWR('/banner', fetcher);
  const { data: recommendListData } = useSWR('/personalized', fetcher);

  return (
    <Content>
      <div className="before"></div>
      <Scroll className="list" ref={myRef} onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerData ? bannerData.banners : []}></Slider>
          <RecommendList
            handleRefresh={() => {
              myRef.current.recompute();
            }}
            recommendList={recommendListData ? recommendListData.result : []}
          ></RecommendList>
        </div>
      </Scroll>
    </Content>
  );
}

export default React.memo(Recommend);
