import React from "react";

export default function Intern() {
  return (
    <div>
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
    </div>
  );
}
