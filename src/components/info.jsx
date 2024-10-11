import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faWeixin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div>
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
      ;
    </div>
  );
}
