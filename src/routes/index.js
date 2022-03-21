import HomeScene from '../screens/Home/HomeScene';
import React from 'react';

export const ROUTES = [
  {
    ref: 'home',
    path: '/home',
    title: 'หน้าหลัก',
    exact: true,
    component: (props) => <HomeScene {...props} />,
  },
];

export const BOTTOM_TAB_ROUTES = [
  {
    ref: 'home_tab',
    label: 'หน้าหลัก',
    // icon: <img src={home} style={{ width: '20px', height: '20px' }} />,
    // iconActive: <img src={homeActive} style={{ width: '20px', height: '20px' }} />,
    to: '/home',
  },
  {
    ref: 'profile_tab',
    label: 'บัญชีผู้ใช้',
    // icon: <img src={profile} style={{ width: '20px', height: '20px' }} />,
    // iconActive: <img src={profileActive} style={{ width: '20px', height: '20px' }} />,
    to: '/home',
  },
];
