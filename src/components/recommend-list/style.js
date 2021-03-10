/*
 * @Description: 
 * @version: 
 * @Author: wanmao
 * @LastEditors: wanmao
 */
import styled from 'styled-components';
import style from '../../assets/global-style';

export const ListWrapper = styled.div`
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }
`;
export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 33%)
`;

export const ListItem = styled.div`
  padding: 5px;
  .img_wrapper {
    position: relative;
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient
        (hsla (0, 0%, 43%, 0.4), hsla (0, 0%, 100%, 0));
    }
    .play_count {
      position: absolute;
      right: 2px;
      top: 8px;
      font-size: ${style['font-size-s']};
      line-height: 15px;
      color: ${style['font-color-light']};
    }
    .play {
      position: absolute;
      left: 4px;
      top: 4px;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .desc {
    overflow: hidden;
    margin-top: 2px;
    padding: 0 2px;
    height: 40px;
    text-align: left;
    font-size: ${style['font-size-s']};
    line-height: 1.4;
    color: ${style['font-color-desc']};
  }
`;
