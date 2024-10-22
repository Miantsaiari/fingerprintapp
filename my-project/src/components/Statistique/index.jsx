import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Header } from "../header";
import { FaSearch } from 'react-icons/fa';

const Stat = () =>{
    Chart.register(...registerables);

    // Data configuration for the Bar chart
    const data = {
      labels: [
        'Week 1',
        'Week 2',
        'Week 3',
        'Week 4',
      ],
      datasets: [
        {
          // Label for the dataset
          label: 'Website View January',
  
          // Styling properties for the bars
          backgroundColor: '#843657', // Background color for the bars
          borderColor: '#843657', // Border color for the bars
          borderWidth: 1, // Border width for the bars
          hoverBackgroundColor: '#843657', // Background color on hover
          hoverBorderColor: '#843657', // Border color on hover
  
          // Data values representing website views for each week
          data: [650, 590, 800, 810], // Website view values for the four weeks
        },
      ],
    };
    return(
        <div>
            <Header/>
            <div className="shadow-md bg-gray-150 py-2 my-3 gap-10 flex">
         <select className="text-gray-400 font-bold py-2 px-4 rounded m-2 flex mr-2 hover:gray-400 w-60 mx-4 px-3" >
          <optgroup label="L1">
            <option>Niveau et parcours</option>
    <option>IG </option>
    <option>GB</option>
    <option>ASR</option>
  </optgroup>
  <optgroup label="L2">
    <option>IG </option>
    <option>GB</option>
    <option>ASR</option>
  </optgroup>
  <optgroup label="L3">
    <option>IG </option>
    <option>GB</option>
    <option>ASR</option>
  </optgroup>
  <optgroup label="M1">
    <option>IG </option>
    <option>GB</option>
    <option>ASR</option>
    <option>GID</option>
    <option>OCC</option>
  </optgroup>
  <optgroup label="M2">
    <option>IG </option>
    <option>GB</option>
    <option>ASR</option>
    <option>GID</option>
    <option>OCC</option>
  </optgroup>
          </select>          
          <select className="text-gray-400 font-bold py-2 px-4 rounded m-2 flex mr-2 hover:gray-400 w-60 mx-4 px-3" >
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
         </div>
           <div>
      {/* Render a Bar chart using provided data and options */}
      <Bar data={data} width={25} height={10} />
    </div>
        </div>
    )
}
export default Stat;