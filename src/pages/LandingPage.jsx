import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function LandingPage() {
  return (
    <>
      <div className="mt-12 sm:mt-20 mx-auto sm:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-purple-800 ">Seamless experience</p>
          <div className="flex flex-col justify-center items-center mt-2">
            <h1 className="text-3xl sm:text-6xl items-center font-semibold text-center sm:w-2/3">
              Unleashing the Next Generation of Card Solutions
            </h1>
          </div>
          <p className="mt-6 sm:w-1/2 text-gray-700 text-center p-3">
            consectetur adipiscing slit, sed do eiusmod tempo incididunt ut
            labore et dolore mangna aliqua. Ute enum ad minim venim, quix
            nostrud
          </p>
          <p className="border mt-8 rounded-lg bg-purple-800 text-white py-3 px-4 cursor-pointer text-center">
            Unlock your Card <FontAwesomeIcon icon={faArrowRight} />
          </p>
          <p className="mt-4 ">**No credit card required</p>
        </div>
      </div>
    </>
  );
}
