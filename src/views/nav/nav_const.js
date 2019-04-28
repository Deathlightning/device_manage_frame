const purchaser_menu = [
    {
        'name': '任务列表',
        'url': base_url + '/common/task'
    },
    {
        'name': '现有设备列表',
        'url': base_url + '/purchaser/list'
    },
    {
        'name': base_url + '/purchaser/newDevice'
    }
];
const management_menu = [
    {
        'name': '现有设备列表',
        'url': base_url + '/common/list'
    },
    {
        'name': '故障设备列表',
        'url': base_url + '/manage/failureDevice'
    },
    {
        'name': '设备采购',
        'url': base_url + '/manage/task'
    },
    {
        'name': '数据据统计',
        'url': base_url + '/manage/statistic'
    }
]
import base_url from '@/main.js'
export default {
    purchaser_menu,
    management_menu
}