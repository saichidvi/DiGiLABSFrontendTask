import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faKey, faLock } from "@fortawesome/free-solid-svg-icons";
export default function Dummy2() {
  return (
    <div className=" flex flex-col lg:flex-row p-10 justify-between   items-center">
      <div className="mt-20 text-center md:w-2/5 lg:w-1/4">
        <FontAwesomeIcon
          icon={faGlobe}
          className="border rounded-full p-3 bg-purple-100"
        />
        <h1 className="font-semibold">Globally Accepted</h1>
        <p className="text-gray-800">
          Lorem ipsum dolor sit, consectur adipiscing elit, do eiusmod
        </p>
      </div>
      <div className="mt-20 text-center md:w-2/5 lg:w-1/4">
        <FontAwesomeIcon
          icon={faKey}
          className="border rounded-full p-3 bg-purple-100"
        />
        <h1 className="font-semibold">Biometric Integrated</h1>
        <p className="text-gray-800">
          Lorem ipsum dolor sit, consectur adipiscing elit, do eiusmod
        </p>
      </div>
      <div className="mt-20 text-center md:w-2/5 lg:w-1/4">
        <FontAwesomeIcon
          icon={faLock}
          className="border rounded-full p-3 bg-purple-100"
        />
        <h1 className="font-semibold">Fully Secured</h1>
        <p className="text-gray-800">
          Lorem ipsum dolor sit, consectur adipiscing elit, do eiusmod
        </p>
      </div>
    </div>
  );
}
