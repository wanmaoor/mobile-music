/*
 * @Description:
 * @version:
 * @Author: wanmao
 * @LastEditors: wanmao
 */
import React, { useEffect, useState } from 'react';
import Horizon from '../../baseUI/horizon-item';
import { categoryTypes, alphaTypes } from '../../api/config';
import { NavContainer } from './style';
import { List, ListContainer, ListItem } from './style';
import Scroll from '../../components/Scroll';
import { useDispatch, useSelector } from 'react-redux';
import { REQUEST_HOT_SINGER_LIST } from './action';

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
  const [category, setCategory] = useState('');
  const [alpha, setAlpha] = useState('');
  const dispatch = useDispatch();
  const singerList = useSelector((state) => state.singerReducer.singerList);


  // useEffect(() => {
  //   dispatch({
  //     type: REQUEST_SINGER_LIST,
  //     payload: {
  //       category,
  //       alpha,
  //       count: 30,
  //     },
  //   });
  // }, [alpha, category, dispatch]);

  useEffect(() => {
    dispatch({
      type: REQUEST_HOT_SINGER_LIST,
      payload: {
        count: 30,
      },
    });
  }, [dispatch]);

  return (
    <>
      <NavContainer>
        <Horizon
          list={categoryTypes}
          oldVal={category}
          title={'分类 (默认热门):'}
          handleClick={(val) => {
            setCategory(val);
          }}
        ></Horizon>
        <Horizon
          list={alphaTypes}
          oldVal={alpha}
          title={'首字母:'}
          handleClick={(val) => setAlpha(val)}
        ></Horizon>
      </NavContainer>
      <ListContainer>
        <Scroll>{renderSingerList(singerList)}</Scroll>
      </ListContainer>
    </>
  );
}

export default React.memo(Singers);
