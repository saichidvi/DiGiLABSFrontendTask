import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faWallet, faHeadset } from "@fortawesome/free-solid-svg-icons";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import CompanyIcons from "./components/CompanyIcons";
import Dummy from "./components/Dummy";
import Dummy2 from "./components/Dummy2";
import PhoneImage from "./components/PhoneImage";
import Dummy3 from "./components/Dummy3";
import wise from "./assets/wise.jpeg";
import nickIcon from "./assets/nickBabichIcon.jpg";
import linkedIn from "./assets/linkedIn.png";
import discord from "./assets/discord.png";
import gitHub from "./assets/gitHub.png";

function App() {
  return (
    <div className="flex flex-col">
      <div className="flex py-3 mx-auto">
        <p>
          {" "}
          <span className="border rounded-xl  px-2 bg-slate-200 mr-4 cursor-pointer">
            Announcemet
          </span>{" "}
          We are happy to announce that we raise $2 Million in Seed Funding
        </p>
      </div>
      <Header></Header>
      <LandingPage className="w-1/2"></LandingPage>
      <CompanyIcons></CompanyIcons>
      <Dummy></Dummy>
      <Dummy2></Dummy2>
      <Dummy></Dummy>
      <PhoneImage></PhoneImage>
      <Dummy3></Dummy3>
      <div className="flex flex-col mx-auto items-center mt-20 lg:mt-32 text-center md:w-2/3 lg:w-1/2">
        <img src={wise} className="w-16 sm:w-32"></img>
        <p className="mt-4  p-2 lg:mt-6">
          I had the pleasure of expericencing the next generation of card
          solutiosn with this incridible product.It`s refreshing to see such
          innovaion in the financial industry
        </p>
        <img src={nickIcon} className="w-16 mt-8 rounded-full"></img>
        <h1 className="text-purple-800 font-bold mt-2">Nick Babich</h1>
        <p>Lead Designer</p>
        <ul className="flex flex-row text-yellow-500 gap-2 mt-1">
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:w-2/3 lg:w-2/5 mx-auto mt-20 lg:mt-40">
        <h1 className="text-2xl p-5 md:p-0 md:text-3xl lg:text-3xl font-semibold  items-center text-center">
          Unlock Limitless Possibilities with Our New Card Solutions
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mx-auto mt-5 gap-4 cursor-pointer">
        <p className="border rounded-lg bg-purple-800 text-white px-3 py-2">
          Unlock your card <FontAwesomeIcon className="ml-1" icon={faWallet} />
        </p>
        <p className="border rounded-lg bg-slate-300 text-gray-800 px-3 py-2">
          Customer support <FontAwesomeIcon className="ml-1" icon={faHeadset} />
        </p>
      </div>
      <div className="border mt-16 lg:mt-24 py-10">
        <div className=" flex flex-col text-center lg:w-1/3 mx-auto md:px-8 lg:px-0">
          <h1 className="font-bold tracking-tighter md:text-2xl mb-2">
            Mode UI
          </h1>
          <p>
            Mode UI is a comprehensive design system that empowers designs and
            developers to create cohesive and visually stunning user interfaces
            varuious pltforms
          </p>
        </div>
      </div>
      <div className="flex pl-10 mt-10 flex-col md:flex-row md:flex-wrap md:w-1/2 lg:w-auto lg:flex-row  lg:justify-between lg:px-20 lg:py-10">
        <div className="md:w-1/2 lg:w-auto mb-4">
          <h1 className="font-bold text-black mb-2">Company</h1>
          <ul>
            <li>About us</li>
            <li>Pricing</li>
            <li>Contact us</li>
            <li>Features</li>
          </ul>
        </div>
        <div className="md:w-1/2 lg:w-auto mb-4">
          <h1 className="font-bold text-black mb-2">Product</h1>
          <ul>
            <li>Figma design system</li>
            <li>los kit</li>
            <li>Android kit</li>
            <li>Wireframe</li>
          </ul>
        </div>
        <div className="md:w-1/2 lg:w-auto mb-4">
          <h1 className="font-bold text-black mb-2">Resources</h1>
          <ul>
            <li>Template</li>
            <li>Leading pages</li>
            <li>Documentation</li>
            <li>Comp library</li>
          </ul>
        </div>
        <div className="md:w-1/2 lg:w-auto mb-4">
          <h1 className="font-bold text-black mb-2">Legal</h1>
          <ul>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
            <li>Disclamier</li>
            <li>Afilliate programme</li>
          </ul>
        </div>
        <div className="md:w-1/2 lg:w-auto mb-4">
          <h1 className="font-bold text-black mb-2">Support</h1>
          <ul>
            <li>Help centre</li>
            <li>Riase ticket</li>
            <li>Report</li>
            <li>Refund</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10  md:mt-20 mb-16">
        <div className="flex flex-row mx-auto gap-10 justify-center">
          <img
            src={gitHub}
            className="w-6 h-6 cursor-pointer"
            alt="GitHub"
          ></img>
          <img
            src={linkedIn}
            className="w-6 h-6 cursor-pointer"
            alt="LinkedIn"
          ></img>
          <img
            src={discord}
            className="w-6 h-6 cursor-pointer"
            alt="Discord"
          ></img>
        </div>
        <p className="mt-10">2023 Mode UI Inc. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
