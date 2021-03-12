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
import Loading from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import {SCROLL_RECOMMEND} from './action'
import { debounce } from '../../api/utils';
function Recommend() {
  const myRef = React.createRef();
  const dispatch = useDispatch()
  const { data: bannerData } = useSWR('/banner', fetcher);
  const { data: recommendListData } = useSWR('/personalized', fetcher);
  const {scroll} = useSelector(state => state.recommendReducer)
  const handleScroll = debounce((scroll) => {
    forceCheck();
    dispatch({ type: SCROLL_RECOMMEND, payload: scroll });
  },100);
  return (
    <Content>
      <Scroll scrollPosition={scroll} className="list" ref={myRef} onScroll={handleScroll}>
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
      {bannerData && recommendListData ? null : <Loading></Loading>}
    </Content>
  );
}

export default React.memo(Recommend);
