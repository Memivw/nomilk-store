import HomeScene from '../screens/Home/HomeScene';

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
    ref: 'coupon_tab',
    label: 'คูปอง',
    // icon: <img src={coupon} style={{ width: '20px', height: '20px' }} />,
    // iconActive: <img src={couponActive} style={{ width: '20px', height: '20px' }} />,
    to: '/coupon',
  },
  {
    ref: 'profile_tab',
    label: 'บัญชีผู้ใช้',
    // icon: <img src={profile} style={{ width: '20px', height: '20px' }} />,
    // iconActive: <img src={profileActive} style={{ width: '20px', height: '20px' }} />,
    to: '/profile',
  },
];
