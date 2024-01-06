import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <div>
      <header className="flex justify-between border py-3 px-5 md:px-20">
        <h1 className="font-bold text-2xl tracking-tighter ">Mode UI</h1>
        <ul className="flex gap-8 items-center">
          <li className="hidden sm:text-black lg:inline cursor-pointer">
            Card access{" "}
            <FontAwesomeIcon icon={faChevronDown} className="ml-1 " />
          </li>
          <li className="hidden sm:text-black lg:inline">Banking</li>
          <li className="hidden sm:text-black lg:inline">Processing</li>
          <li className="hidden sm:text-black lg:inline">About</li>
          <li className="hidden sm:text-black lg:inline">Carrier</li>
          <li className="hidden sm:text-black lg:inline">Contact</li>
        </ul>
        <div className="flex gap-2">
          <h1 className="rounded-md border py-1 px-3 bg-slate-200 cursor-pointer">
            Login <FontAwesomeIcon icon={faArrowRightToBracket} />
          </h1>
        </div>
      </header>
    </div>
  );
}
