import {
  React,
  Navbar,
  Footer,
  CadtLogo,
  UnderlineTab,
  AboutUsTab,
  Offerings,
} from "../import/all_import.jsx";

const OrganizationDetails = () => {

  return (
    <div className="container mx-auto">
      <header className="p-12">
        <Navbar />
      </header>
      <div className="text-white max-w-screen-lg mx-auto p-8 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 shadow-lg rounded-lg">
        <div className="flex">
          <img
            src={CadtLogo}
            alt="Organization Logo"
            className="w-[180px] self-start"
          />
          <div className="ml-20 flex flex-col justify-between">
            <h1 className="text-2xl font-bold">
              Cambodia Academy Digial & Technology
            </h1>
            <p className="font-medium">Institute Digital & Technology</p>
          </div>
        </div>
      </div>

      {/* Tabs section */}
      <div className="max-w-screen-lg mx-auto mt-4">
        <UnderlineTab aboutContent={<AboutUsTab />} offeringContent={<Offerings/>} />
      </div>

      <Footer />
    </div>
  );
};

export default OrganizationDetails;
