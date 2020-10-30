// 时间插件
import moment from 'moment'
// 自定义类型
import{ Post } from "@/types"
// console.log(Post);

export const basePost: Post = {
    id: 1,
    title: 'ezmock',
    markdown: '课程表',
    html: '<p>课程列表</p>',
    authorId: 1,
    created:moment()
}
export const todayPost: Post = {
    ...basePost,
    title: '今天'
}
export const todayWeek: Post = {
    ...basePost,
    title: '本周',
    // 参数2天  
    created: moment().subtract(2, "days")
}
export const todayMonth: Post = {
    ...basePost,
    title: '本月',
    // 30天之内都算本月
    created: moment().subtract(30, "weeks")
}