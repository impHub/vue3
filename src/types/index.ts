import { Moment } from "moment";
// 值的定义
export type Period = "今天" | "本周" | "本月";
// 类型定义
export interface Post {
  id: number;
  title: string;
  markdown: string;
  html: string;
  authorId: number;
  created: Moment;
}
