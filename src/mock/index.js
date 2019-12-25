import Mock from 'mockjs';
import allAPI from './data';

Mock.setup({
    timeout: '1000-2000' // 表示响应时间介于 1000 和 2000 毫秒之间，默认值是'10-100'。
});


Mock.mock(/\/api\/login/, 'post', allAPI.login);
Mock.mock(/\/api\/menu/, 'get', allAPI.getMenuList);
Mock.mock(/\/api\/permission/, 'get', allAPI.getPermissionList());
Mock.mock(/\/api\/getList/, 'get', allAPI.getList());

export default Mock;
