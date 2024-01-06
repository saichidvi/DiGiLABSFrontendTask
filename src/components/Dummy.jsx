import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Dummy() {
  return (
    <div className="w-4/5 sm:w-2/3 lg:w-1/2 mt-16  mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold text-center">
        Elevating Card Programs with Cutting-Edge Technology
      </h1>
      <p className="mt-6  text-gray-700 text-center">
        Confidently this is the best website we are actually seeing so be here
        So vist us again and again we are best
      </p>
      <p className="text-center mt-4 text-purple-800 cursor-pointer">
        Compare all Pro Features <FontAwesomeIcon icon={faArrowRight} />
      </p>
    </div>
  );
}
