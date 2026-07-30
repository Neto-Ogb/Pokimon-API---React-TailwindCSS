import poki_logo from "./assets/images.png"
function App(){
  return(
    <div className="bg-red-500 h-screen flex justify-center items-center font-poppins">
      <div className="bg-white w-[50%] h-[60%] rounded-[20px] shadow-xl shadow-black/30 flex flex-col gap-5 px-11.5">
        <div className="flex justify-center gap-2 mt-8">
          <input type="text" placeholder="Enter a pokimon" className="px-4 focus:outline-none outline-none bg-black/20 text-red-500 rounded-[5px] selection:bg-red-500 selection:text-white"/>
          <button className="bg-red-500 px-5 py-1 rounded-[5px] hover:shadow-md shadow-black/20 hover:bg-white hover:ring-2 ring-black ease-in-out transition hover:-translate-y-2 duration-300">Search</button>
        </div>
        <div className="flex gap-3 justify-start">
          <img src="" alt="Pokimon Image" className="w-[100px] h-[100px] shadow-md"/>
          <div className="flex flex-col">
            <h1>Name: </h1>
            <h1>Name: </h1>
            <h1>Name: </h1>
            <h1>Name: </h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="w-[100%] bg-blue-500 rounded-[5px] hover:shadow-md shadow-black/20 hover:bg-white hover:ring-2 ring-blue-500 ease-in-out transition duration-300 hover:text-blue-500 text-white">H</button>
          <button className="w-[100%] bg-blue-500 rounded-[5px] hover:shadow-md shadow-black/20 hover:bg-white hover:ring-2 ring-blue-500 ease-in-out transition duration-300 hover:text-blue-500 text-white">H</button>
          <button className="w-[100%] bg-blue-500 rounded-[5px] hover:shadow-md shadow-black/20 hover:bg-white hover:ring-2 ring-blue-500 ease-in-out transition duration-300 hover:text-blue-500 text-white">H</button>
          <button className="w-[100%] bg-blue-500 rounded-[5px] hover:shadow-md shadow-black/20 hover:bg-white hover:ring-2 ring-blue-500 ease-in-out transition duration-300 hover:text-blue-500 text-white">H</button>
          <button className="w-[100%] bg-blue-500 rounded-[5px] hover:shadow-md shadow-black/20 hover:bg-white hover:ring-2 ring-blue-500 ease-in-out transition duration-300 hover:text-blue-500 text-white">H</button>
        </div>
        <div className="flex justify-center">
          <img
            src={poki_logo}
            alt="Pokemon Logo"
            className="w-[100px]"
          />
        </div>
      </div>
    </div>
  );
}

export default App