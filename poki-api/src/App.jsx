import poki_logo from "./assets/images.png"
import { useState } from "react"

function App(){
  const [pokiName, setPokiName] = useState("ditto")
  const [pokiData, setPokiData] = useState(null)
  const [error, setError] = useState(null)

  async function Search() {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokiName}`)
      if (!response.ok) throw new Error("Could not find pokemon")
      const data = await response.json()
      setPokiData(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    }
  }

  return(
    <div className="bg-red-500 h-screen flex justify-center items-center font-poppins">
      <div className="bg-white w-[50%] h-[60%] rounded-[20px] shadow-xl shadow-black/30 flex flex-col gap-5 px-11.5 lg:w-[30%]">
        <div className="flex justify-center gap-2 mt-8">
          <input type="text"
                 placeholder="Enter a pokimon" 
                 className="w-[65%] px-4 focus:outline-none outline-none bg-black/20 text-red-500 rounded-[5px] selection:bg-red-500 selection:text-white"
                 value={pokiName}
                 onChange={(e) => setPokiName(e.target.value)}/>
          <button className="bg-red-500 px-5 py-1 rounded-[5px] cursor-pointer hover:shadow-md shadow-black/20 hover:bg-white hover:ring-2 ring-black ease-in-out transition hover:-translate-y-2 duration-300 w-[35%]"
                  onClick={Search}>Search</button>
        </div>
        <div className="flex gap-3 justify-start">
          <img src={pokiData?.sprites?.front_default} alt="Pokimon Image" className="w-[100px] h-[100px] shadow-md"/>
          <div className="flex flex-col">
            <h1>Name: {pokiData?.name}</h1>
            <h1>Attack: {pokiData?.stats[1]?.base_stat}</h1>
            <h1>Defense: {pokiData?.stats[2]?.base_stat}</h1>
            <h1>Moves: {pokiData?.moves.length}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="w-[100%] bg-yellow-500 rounded-[5px] hover:shadow-md shadow-black/20 hover:bg-white hover:ring-2 ring-yellow-500 ease-in-out transition duration-300 hover:text-yellow-500 text-white"
                onClick={() => {
                  setPokiName("pikachu")
                  Search()
                }}
                >Pikachu</button>
          <button className="w-[100%] bg-purple-500 rounded-[5px] hover:shadow-md shadow-black/20 hover:bg-white hover:ring-2 ring-purple-500 ease-in-out transition duration-300 hover:text-purple-500 text-white"
                onClick={() => {
                  setPokiName("ditto")
                  Search()
                }}
                >Ditto</button>
          <button className="w-[100%] bg-orange-500 rounded-[5px] hover:shadow-md shadow-black/20 hover:bg-white hover:ring-2 ring-orange-500 ease-in-out transition duration-300 hover:text-orange-500 text-white"
                onClick={() => {
                  setPokiName("Charizard")
                  Search()
                }}
                >Charizard</button>
          <button className="w-[100%] bg-green-500 rounded-[5px] hover:shadow-md shadow-black/20 hover:bg-white hover:ring-2 ring-green-500 ease-in-out transition duration-300 hover:text-green-500 text-white"
                onClick={() => {
                  setPokiName("Bulbasaur")
                  Search()
                }}
                >Bulbasaur</button>
          <button className="w-[100%] bg-blue-500 rounded-[5px] hover:shadow-md shadow-black/20 hover:bg-white hover:ring-2 ring-blue-500 ease-in-out transition duration-300 hover:text-blue-500 text-white"
                onClick={() => {
                  setPokiName("Squirtle")
                  Search()
                }}
                >Squirtle</button>
        </div>
        <div className="flex justify-center">
          <img
            src={poki_logo}
            alt="Pokemon Logo"
            className="w-[100px]"
          />
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default App