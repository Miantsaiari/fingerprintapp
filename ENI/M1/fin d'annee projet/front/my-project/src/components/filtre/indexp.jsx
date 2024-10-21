import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function FiltreP(){
   
    const [isOpen, setIsOpen] = useState(false);
const handleOpen = () => setIsOpen(true);
const handleClose = () => setIsOpen(false);
    return(
        <div className="shadow-md bg-gray-150  my-3 gap-6 flex">
        <select className="text-gray-400 font-bold  px-4 rounded m-2 flex mr-2 hover:gray-400 w-00 mx-4 px-3" >
        <option>Professeurs</option>
        <option>Ralaivao Christian</option>
        <option>Rabetafika Louis</option>
        <option>Ramamonjisoa Berthin</option>
        </select> 
        <div className='relative'> 
        <form>
          <input className="text-gray-400 font-bold py-2 px-4 rounded m-2 flex mr-2 hover:gray-400 w-00 mx-4 px-3" placeholder="Rechercher..."/>
          <FaSearch className="absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-400"/>
        </form>
        </div>
      <button
      className="bg-blue-950 text-white font-bold  px-4 rounded m-2 mx-4"
      onClick={handleOpen}
      >
      <i className="fa fa-plus mr-2"></i> Ajouter
    </button>
    </div>
       )
}
export default FiltreP;