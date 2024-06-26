export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' },],
  },
  {path: '/', redirect: '/add_chart'},
  {name: '智能BI', path: '/add_chart', component: './AddChart', icon: 'barChart'},
  {name: '我的图表', path: '/my_chart', component: './MyChart', icon: 'PieChart'},
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
