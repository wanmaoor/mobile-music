/*
 * @Description:
 * @version:
 * @Author: wanmao
 * @LastEditors: wanmao
 */
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Top, Tab, TabItem } from './style';
import Icon from '../../components/Icon';
import style from '../../assets/global-style';
import { NavLink } from 'react-router-dom';
function Home(props) {
  return (
    <div>
      <Top>
        <Icon name="menu" color={style['font-color-light']} />
        <span className="title">
          <Icon name="yinle" /> &nbsp;WebApp&nbsp;<Icon name="yinle" />
        </span>
        <Icon name="search" color={style['font-color-light']} />
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem>
            <span> 推荐 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers" activeClassName="selected">
          <TabItem>
            <span> 歌手 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <TabItem>
            <span> 排行榜 </span>
          </TabItem>
        </NavLink>
      </Tab>
      {renderRoutes(props.route.routes)}
    </div>
  );
}

export default React.memo(Home);
