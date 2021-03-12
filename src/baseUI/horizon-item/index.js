/*
 * @Description:
 * @version:
 * @Author: wanmao
 * @LastEditors: wanmao
 */
import React, { useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import Scroll from '../../components/Scroll/index'
import styled from 'styled-components';
import style from '../../assets/global-style';
const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  > span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${style['font-size-m']};
  }
`;
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style['font-size-m']};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${style['theme-color']};
    border: 1px solid ${style['theme-color']};
    opacity: 0.8;
  }
`;
const Horizon = (props) => {
  const { list, oldVal, title } = props;
  const { handleClick } = props;
  const categoryRef = useRef(null)
  useEffect(() => {
    let categoryDOM = categoryRef.current
    let tagElements =categoryDOM.querySelectorAll('span')
    let totalWidth = 0
    Array.from(tagElements).forEach(ele => {
      totalWidth += ele.offsetWidth
    })
    categoryDOM.style.width = totalWidth + 10 + 'px'
  }, [])

  return (
    <Scroll direction={'horizontal'}>
      <div ref={categoryRef}>
        <List>
          <span>{title}</span>
          {list.map((item) => {
            return (
              <ListItem
                key={item.key}
                className={`${oldVal === item.key ? 'selected' : ''}`}
                onClick={() => handleClick(item.key)}
              >
                {item.name}
              </ListItem>
            );
          })}
        </List>
      </div>
    </Scroll>
  );
};

Horizon.defaultProps = {
  list: [],
  oldVal: '',
  title: '',
  handleClick: null,
};

Horizon.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func,
};

export default React.memo(Horizon);
