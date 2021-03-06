/*
 * @Description:
 * @version:
 * @Author: wanmao
 * @LastEditors: wanmao
 */
import React, { useEffect, useRef } from 'react';
import Horizon from '../../baseUI/horizon-item';
import { categoryTypes, alphaTypes, areaTypes } from '../../api/config';
import { NavContainer } from './style';
import { List, ListContainer, ListItem } from './style';
import Scroll from '../../components/Scroll';
import { useDispatch, useSelector } from 'react-redux';
import {
  CHANGE_SINGER_PIVOT,
  REQUEST_HOT_SINGER_LIST,
  REQUEST_SINGER_LIST,
  SCROLL_ACTION,
} from './action';
import { debounce } from '../../api/utils';
import Loading from '../../components/Loading';

const renderSingerList = (list) => {
  return (
    <List>
      {list &&
        list.map((item) => {
          return (
            <ListItem key={item.id}>
              <div className="img_wrapper">
                <img
                  src={`${item.picUrl}?param=300*300`}
                  width="100%"
                  height="100%"
                  alt="music"
                ></img>
              </div>
              <span className="name">{item.name}</span>
            </ListItem>
          );
        })}
    </List>
  );
};
function Singers() {
  const firstUpdate = useRef(true);
  const myRef = useRef();
  const dispatch = useDispatch();
  const { singerList, pivot, scroll, firstLoadHotSinger } = useSelector(
    (state) => state.singerReducer,
  );
  const { alpha, area, category } = pivot;
  
  useEffect(() => {
    if (firstLoadHotSinger && !category && !alpha && !area) {
      dispatch({
        type: REQUEST_HOT_SINGER_LIST,
        payload: {
          count: 30,
        },
      });
    }
  }, [alpha, area, category, dispatch, firstLoadHotSinger]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    dispatch({
      type: REQUEST_SINGER_LIST,
      payload: {
        type: category,
        area,
        alpha,
      },
    });
  }, [category, alpha, area, dispatch]);

  useEffect(() => {
    myRef.current.refresh();
  }, [singerList]);

  const handleScroll = debounce((scroll) => {
    dispatch({ type: SCROLL_ACTION, payload: scroll });
  }, 100);

  return (
    <>
      <NavContainer>
        <Horizon
          list={categoryTypes}
          oldVal={category}
          title={'?????? (????????????):'}
          handleClick={(val) => {
            dispatch({
              type: CHANGE_SINGER_PIVOT,
              payload: { key: 'category', val },
            });
          }}
        ></Horizon>
        <Horizon
          list={alphaTypes}
          oldVal={alpha}
          title={'?????????:'}
          handleClick={(val) => {
            dispatch({
              type: CHANGE_SINGER_PIVOT,
              payload: { key: 'alpha', val },
            });
          }}
        ></Horizon>
        <Horizon
          list={areaTypes}
          oldVal={area}
          title={'??????:'}
          handleClick={(val) => {
            dispatch({
              type: CHANGE_SINGER_PIVOT,
              payload: { key: 'area', val },
            });
          }}
        ></Horizon>
      </NavContainer>
      <ListContainer>
        <Scroll scrollPosition={scroll} onScroll={handleScroll} ref={myRef}>
          {singerList.length ? (
            renderSingerList(singerList)
          ) : (
            <Loading></Loading>
          )}
        </Scroll>
      </ListContainer>
    </>
  );
}

export default React.memo(Singers);
