import nuxt from "../assets/nuxtIamge.png";
import behnace from "../assets/behance.png";
import welfound from "../assets/welfound.png";
import kinsta from "../assets/kinsta.png";
import wise from "../assets/wise.jpeg";

export default function CompanyIcons() {
  return (
    <div className="p-5 mt-10 sm:px-14 flex sm:gap-10 items-center flex-wrap justify-center">
      <img src={nuxt} className="w-16 sm:w-32"></img>
      <img src={behnace} className="w-16 sm:w-32"></img>
      <img src={welfound} className="w-20 sm:w-48"></img>
      <img src={kinsta} className="w-16 sm:w-32"></img>
      <img src={wise} className="w-16 sm:w-32"></img>
    </div>
  );
}
