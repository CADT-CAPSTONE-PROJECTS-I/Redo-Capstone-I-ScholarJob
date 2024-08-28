import {
  React,
  Navbar,
  Footer,
  WorkImage,
  GraduateImage,
} from "../import/all_import.jsx";

const AboutUsPage = () => {
  return (
    <div>
      <header className="p-12">
        <Navbar />
      </header>
      <section className="relative items-center flex mx-16 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4"></h2>
        <p className="text-white p-8 text-xl">
          At ScholarJob, we are dedicated to empowering individuals to reach
          their full potential. With a strong commitment to education and career
          development, we provide a range of programs and resources to help
          students and professionals achieve their goals.
        </p>
      </section>

      <section className="mt-12 flex flex-col md:flex-row justify-between items-center">
        <div className="pl-16 w-2/3 ">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="pr-6">
            Our mission is to foster a culture of innovation, creativity, and
            collaboration, and to provide opportunities for individuals to grow
            and develop in their careers. We believe that education is the key
            to unlocking individual potential, and we are dedicated to making a
            positive impact in our community. Whether you're looking for a job,
            seeking scholarship opportunities, or simply wanting to learn more
            about our organization, we invite you to explore our website and
            discover how we can help you achieve your aspirations.
          </p>
        </div>
        <div className="w-1/2 flex justify-end pt-4 pr-16">
          <img
            src={WorkImage}
            alt="Mission Image"
            className="w-auto max-w-md rounded-lg"
          />
        </div>
      </section>

      <section className="mt-12 flex flex-col md:flex-row justify-between items-center">
        <div className="w-1/2 flex justify-start ml-16 pt-4 ">
          <img
            src={GraduateImage}
            alt="Mission Image"
            className="w-auto max-w-md rounded-lg"
          />
        </div>
        <div className=" w-2/3 ">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="pr-16">
            Our mission is to foster a culture of innovation, creativity, and
            collaboration, and to provide opportunities for individuals to grow
            and develop in their careers. We believe that education is the key
            to unlocking individual potential, and we are dedicated to making a
            positive impact in our community. Whether you're looking for a job,
            seeking scholarship opportunities, or simply wanting to learn more
            about our organization, we invite you to explore our website and
            discover how we can help you achieve your aspirations.
          </p>
        </div>
      </section>

      <section className="mt-16 relative flex flex-col justify-center">
        <h2 className="text-3xl font-bold justify-center flex">Team Work</h2>
        <div className="border-t border-2 flex justify-center mx-auto w-1/12 items-center rounded-full border-customTeal my-2"></div>
        <div className="flex justify-between mx-16 mt-8">
          <div className="bg-grey text-center">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Jonathan Warner"
              className="rounded-full w-40 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg mb-2"></h3>
            <p className="">CEO</p>
          </div>
          <div className="bg-grey text-center">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Tammy Johnson"
              className="rounded-full w-40 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg mb-2"></h3>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="bg-grey text-center">
            <img
              src="https://via.placeholder.com/100x100"
              alt="David Hackett"
              className="rounded-full w-40 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg mb-2"></h3>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="bg-grey text-center">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Pamela Wagner"
              className="rounded-full w-40 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg mb-2"></h3>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="bg-grey text-center">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Pamela Wagner"
              className="rounded-full w-40 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg mb-2"></h3>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="bg-grey text-center">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Pamela Wagner"
              className="rounded-full w-40 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg mb-2"></h3>
            <p className="text-gray-600">CEO</p>
          </div>
        </div>
      </section>
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUsPage;
