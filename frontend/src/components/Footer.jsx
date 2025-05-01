import Logo from "./footer/Logo";
// import Address from "./footer/Address";
// import ContactBtn from "./footer/ContactBtn";
// import TextDownPart from "./footer/TextDownPart";
// import Linkedin from "./footer/Linkedin";
// import Instagram from "./footer/Instagram";
// import Github from "./footer/Github";
// import Youtube from "./footer/Youtube";
// import United from "./footer/United";

const Footer = () => {
  return (
    <>
      <footer className="w-full  xl:h-[12rem]">
        {/* the upper part */}
        <div className="lg:flex lg:flex-col bg-secondary xl:h-[7rem] xl:flex xl:flex-row ">
          <Logo />
          {/* <Address /> */}
          {/* <ContactBtn /> */}
        </div>

        {/* the down part */}
        <div className="bg-accent  m-[auto] sm:ml-0 sm:h-[5rem] sm:flex sm:flex-row sm:justify-between">
          {/* <TextDownPart /> */}

          <div className="flex sm:flex-row  sm:h-[5rem] justify-center   ">
            {/* <Linkedin /> */}
            {/* <Instagram /> */}
            {/* <Github /> */}
            {/* <Youtube /> */}
            {/* <United /> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
