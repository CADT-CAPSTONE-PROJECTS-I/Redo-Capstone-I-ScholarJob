import {
    React,
    loadingImage
  } from "../import/all_import.jsx";
  
const LoadingPage = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
        <img src={loadingImage} className="w-64" alt="Loading" />
        <h1 className="text-2xl font-bold ">Loading...</h1>
    </div>
</div>

  )
}

export default LoadingPage