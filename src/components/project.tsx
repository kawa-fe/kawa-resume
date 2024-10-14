import React from "react";

export default function Project() {
  return (
    <div>
      <section className="mb-0">
        <h2 className="text-xl font-semibold text-blue-700">项目经历</h2>
        <hr className="border-t-2 border-blue-500 my-1" />
        <div>
          <h3 className="text-xl font-semibold text-blue-900">xxxxxxx</h3>
          <p className="text-sm inline-block">
            xxxxxxx
            <span className="underline text-blue-500">
              证书：
              <a
                href="https://github.com/LofiSu/LofiSu/blob/main/My%20Honors%20and%20Awards.md"
                className="underline text-blue-500"
              >
                https://github.com/LofiSu/LofiSu/blob/main/My%20Honors%20and%20Awards.md
              </a>
            </span>
          </p>
          <h4 className="font-bold">xxxxxxx （https://fury.apache.org/）</h4>
          <p className="text-sm pl-5">
            <li>xxxxxxx</li>
            <li>xxxxxxx</li>
            <li>xxxxxxx</li>
          </p>
          <h4 className="font-bold">xxxxxxx</h4>
          <p className="text-sm pl-5">
            <li>xxxxxxx</li>
          </p>
          <h4 className="font-bold">xxxxxxx</h4>
          <p className="text-sm pl-5">
            <li>xxxxxxx</li>
            <li>xxxxxxx</li>
            <li>xxxxxxx</li>
          </p>
          <h4 className="font-bold">xxxxxxx</h4>
          <h3 className="text-xl font-semibold text-blue-900">
            大赛 | 业务模板实现
          </h3>
          <p className="text-sm inline-block">
            项目采用JSX+TDesign组件库+Tailwindcss完成业务模板。
            <a
              href="https://omi.cdn-go.cn/templates/latest/"
              className="text-blue-500 underline"
            >
              https://omi.cdn-go.cn/templates/latest/
            </a>
          </p>
          <h4 className="text-xl font-semibold text-blue-900">
            VisActor —智能数据可视化解决方案
            (https://visactor.com/)
          </h4>
          <p className="text-sm pl-5">
            <p>
              项目介绍:
              VisActor是字节跳动旗下，以渲染引擎、可视化语法、数据分析组件、图表组件、表格组件、GIS组件、图可视化组件、智能组件等多个块组成的可视化解决方案。
            </p>
            <li>
              参与VChart进阶Demo编写，编写业务漏斗图案例，完善多端图表库。
            </li>
            <li>
              参与VTable功能编写，添加菜单自定义fontFamily，fontSize功能。
            </li>
          </p>
        </div>
      </section>
    </div>
  );
}
