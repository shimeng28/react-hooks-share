import React from 'react';
import { Menu } from 'antd';
import {
  HashRouter as Router, Link,
  Route, Switch,
} from 'react-router-dom';
import Home from './hooks/Home';
import SimpleHooksComp1 from './hooks/SimpleHooksComp1';
import SimpleHooksComp2 from './hooks/SimpleHooksComp2';
import SimpleHooksComp3 from './hooks/SimpleHooksComp3';
import SimpleHooksComp4 from './hooks/SimpleHooksComp4';
import SimpleHooksComp5 from './hooks/SimpleHooksComp5';
import SimpleHooksComp6 from './hooks/SimpleHooksComp6';
import SimpleHooksComp7 from './hooks/SimpleHooksComp7';
import SimpleHooksComp8 from './hooks/SimpleHooksComp8';

import './App.css';

const { Item } = Menu;

const list = [
  {
    to: '/home',
    name: '首页',
    component: Home,
  },
  {
    to: '/hooks1',
    name: 'React 01 -- useState',
    component: SimpleHooksComp1,
  },
  {
    to: '/hooks2',
    name: 'React 02 -- useEffect',
    component: SimpleHooksComp2,
  },
  {
    to: '/hooks3',
    name: 'React 03 -- useCallback',
    component: SimpleHooksComp3,
  },
  {
    to: '/hooks4',
    name: 'React 04 -- useMemo',
    component: SimpleHooksComp4,
  },
  {
    to: '/context',
    name: 'React 05 --- useReducer',
    component: SimpleHooksComp5,
  },
  {
    to: '/context',
    name: 'React 06 --- Context',
    component: SimpleHooksComp6,
  },
  {
    to: '/ref',
    name: 'React 07 --- Ref',
    component: SimpleHooksComp7,
  },
  {
    to: '/other-hooks',
    name: 'React 08 --- 其他hooks',
    component: SimpleHooksComp8,
  },
];
function App() {
  return (
    <div className="App">
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={[ list[0].to ]}
        mode="inline"
      >
        {
          list.map((item) => (
            <Item
              key={item.to}
            ><Link to={item.to} >{item.name}</Link></Item>
          ))
        }
      </Menu>
      <div className="content">
        <Switch>
          {
            list.map((item) => <Route key={item.to} path={item.to} component={item.component} />)
          }
        </Switch>
      </div>
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
}

export default AppRouter;
