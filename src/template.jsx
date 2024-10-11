import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faWeixin } from "@fortawesome/free-brands-svg-icons";

export default function Template() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <header className="text-center mb-0 flex items-center justify-between">
        <div className="text-left">
          <h1 className="text-3xl font-bold">酥酥</h1>
          <p>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            1234567890
            <span className="mx-2">|</span>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            1234567890@qq.com
            <span className="mx-2">|</span>
            <FontAwesomeIcon icon={faWeixin} className="mr-2" />
            1234567890
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            <a href="https://github.com/LofiSu" className="">
              LofiSu
            </a>
            <span className="mx-2">|</span>
            <p className="text-l bg-yellow-100 inline-block">
              Apache Contributor
            </p>
            <span className="mx-2">|</span>
            <FontAwesomeIcon icon={faBlog} className="mr-2" />
            <a href="http://www.lofisu.chat" className="text-blue-500">
              博客：www.lofisu.chat
            </a>
          </p>
          <p>
            <strong>某大学 | 软件工程 | 大二</strong>
          </p>
          <p>本科 | 26届 | 立即到岗可实习六个月</p>
        </div>
        <img src="logo.jpg" alt="证件照" className="w-30 h-40 object-cover" />
      </header>
      <section className="mb-0">
        <h2 className="text-2xl font-semibold text-blue-700 ">实习经历</h2>
        <hr className="border-t-2 border-blue-500 my-2" />
        <div>
          <div className="flex items-center bg-blue-50 p-1 h-10 rounded-md">
            <img
              src="https://static.miraheze.org/hololivewiki/e/ea/Logo_-_bilibili_(Textless).png?20200609035028"
              alt="Bilibili Logo"
              className="w-50 h-8 mr-3"
            />
            <h3 className="text-l font-semibold text-blue-500 ">
              哔哩哔哩 | OGV技术部 + 前端增值业务组 --- 2024.8-2024.12
            </h3>
            <img
              src="https://companieslogo.com/img/orig/BILI_BIG-d3ddf449.png?t=1654512782"
              alt="Bilibili Logo"
              className="w-50 h-8 ml-60"
            />
          </div>
          <h4 className="font-bold">B端：</h4>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>

          <h4 className="font-bold">C端：</h4>
          <li>xxxxxxx</li>
          <li>xxxxxxxx</li>
          <li>xxxxxxx</li>
          <h4 className="font-bold">基建技术：</h4>
          <p>xxxxxxx</p>
        </div>
      </section>
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
            Tencent OMI | 腾讯犀牛鸟开源大赛 | 业务模板实现
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
            OSPP中科院开源之夏| VisActor —智能数据可视化解决方案
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

      <section className="mb-0">
        <h2 className="text-xl font-semibold text-blue-700 ">能力拓展</h2>
        <hr className="border-t-2 border-blue-500 my-1" />
        <ul className="list-disc pl-5">
          <li className="text-sm">
            具备后端开发能力（<strong>Nodejs/Nestjs</strong>）
            热爱开源，活跃于开源社区。
          </li>
          <li className="text-sm">
            产品运营实习：美团外卖事业部校园运营，北京陌陌科技贴贴部门校园大使，高中在MCN公司担任产品经理。
          </li>
        </ul>
      </section>
    </div>
  );
}
