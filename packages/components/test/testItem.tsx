import React from 'react';
import ReactDOM from 'react-dom/client';
import List from '../list/list';
import { ListItemWithNumber } from '../list/ListRenderItem';
import '../index.css';

function App() {
  return (
    <div>
      <h1>测试：</h1>
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
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);