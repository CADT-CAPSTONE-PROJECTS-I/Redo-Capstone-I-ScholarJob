
import {
    React,
    Navbar,
    ManTable,
  } from "../import/all_import.jsx";
const HomePage = () => {
  return (
    <div>
        <header className="p-12">
            <Navbar/>
        </header>
        <section className="relative items-center flex min-h-[250px] mx-16 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 text-white">
            <div className="text-4xl font-bold pl-8 w-1/2">
                Your Future, Your Path, Get ahead with ScholarJob!
            </div>
            <img src={ManTable} alt="Man on Chair" className="w-1/6 " />
        </section>
    </div>
  )
}

export default HomePage