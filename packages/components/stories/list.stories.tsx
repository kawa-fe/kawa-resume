import React from "react";
import List from "../list/list";
import type { Meta, StoryFn } from "@storybook/react";

import { ListItemWithPoint, ListItemWithNumber } from "../list/ListRenderItem";

export default {
  title: "Components/List",
  component: List,
} as Meta;

/**
 * 
 * @returns
 * List组件可以用于简历中的项目经历、技能清单、工作经历列表式数据的渲染
 * 可以在/packages/components/list/listRenderItem中继续开发不同渲染形式的ListRenderItem
 */
export const NumberedList: StoryFn = () => (
  <>
    <List
      data={[
        "深入理解函数式编程、高阶组件(HOC)和Hooks设计模式，能灵活运用于复杂组件架构；",
        "精通状态管理库如Redux、Recoil，能设计可扩展的全局状态管理方案；",
        "熟练使用TypeScript，擅长类型推断、泛型编程和高级类型操作；",
        "具备性能优化经验，熟悉React Profiler、React.memo、useMemo等性能优化技术；",
      ]}
      renderItem={(item, index) => (
        <ListItemWithNumber item={item} index={index || 0} />
      )}
    />
  </>
);

export const PointedList: StoryFn = () => (
  <>
    <List
      data={[
        "精通Node.js后端开发，熟悉Express/Koa/Nest.js等主流框架，能设计高性能RESTful API；",
        "深入理解微服务架构，使用Docker容器化部署，并基于Kubernetes实现服务编排和弹性扩展；",
        "熟练使用TypeORM/Prisma进行数据库ORM操作，能设计复杂的数据库查询和性能优化方案；",
        "具备分布式系统设计经验，熟悉Redis缓存策略、消息队列(RabbitMQ/Kafka)等中间件技术；",
      ]}
      renderItem={(item) => <ListItemWithPoint item={item} />}
    />
  </>
);
