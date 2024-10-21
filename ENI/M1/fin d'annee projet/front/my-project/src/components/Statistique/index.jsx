import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Header } from "../header";
import { FaSearch } from 'react-icons/fa';
import StaggeredDropDown from '../droopdown';

const Stat = () => {
    Chart.register(...registerables);

    // Data configuration for the Bar chart
    const data = {
        labels: [
            'Semaine 1',
            'Semaine 2',
            'Semaine 3',
            'Semaine 4',
        ],
        datasets: [
            {
                // Label for the dataset
                label: 'Mensuel',

                // Styling properties for the bars
                backgroundColor: '#843657', // Background color for the bars
                borderColor: '#843657', // Border color for the bars
                borderWidth: 1, // Border width for the bars
                hoverBackgroundColor: '#843657', // Background color on hover
                hoverBorderColor: '#843657', // Border color on hover

                // Data values representing website views for each week
                data: [6, 59, 25, 81], // Website view values for the four weeks
            },
        ],
    };

    // Options to customize the chart axes, especially the y-axis
    const options = {
        scales: {
            y: {
                beginAtZero: true, // Start the y-axis at 0
                min: 0, // Set minimum value for y-axis
                max: 100, // Set maximum value for y-axis
                ticks: {
                    stepSize: 10, // Custom step size between ticks
                    callback: function(value) {
                        return value + ' %'; // Append 'vues' to each y-axis tick value
                    }
                }
            }
        }
    };

    return (
        <div>
            <div className="shadow-md bg-gray-150  my-3 gap-6 flex">
          <select className="ml-4 text-gray-400 font-bold  px-4 rounded m-2 flex mr-2 hover:gray-400 w-60 mx-2 px-3 " >
            <option>Niveau</option>
        <option>L1</option>
        <option>L2</option>
        <option>L3</option>
        <option>M1</option>
        <option>M2</option>
    </select>
    <select className="text-gray-400 font-bold  px-4 rounded m-2 flex mr-2 hover:gray-400 w-60 mx-2 px-3 " >
        <option>Parcours</option>
        <option>IG </option>
        <option>GB</option>
        <option>ASR</option>
        <option>GID</option>
        <option>OCC</option>
    </select>
    <select className="text-gray-400 font-bold  px-4 rounded m-2 flex mr-2 hover:gray-400 w-60 mx-2 px-3 " >
        <option>Etudiants</option>
        <option>Ratsimbazafy Fitahiana Ornella </option>
        <option>Ramahaliarivo Miantsa Iarilanja</option>
        <option>SAFIDINIRINA Elisa</option>
        <option>Ratsimbazafy Fehizoro</option>
        <option>Andriatsialonina Fanamby</option>
    </select>
       <div className='relative'> 
     <form>
       <input 
       className="text-gray-400 font-bold py-2 px-4 rounded m-2 flex mr-2 hover:gray-400 w-00 mx-2 px-3" 
       placeholder="Rechercher..."/>
       <FaSearch className="absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-400"/>
     </form>
         </div>
         <div className="absolute top-0 right-6 bg-white rounded-full p-2 shadow mt-4 pb-2" >
            <StaggeredDropDown/>
        </div>
   </div>
            <div>
                {/* Render a Bar chart using provided data and options */}
                <Bar data={data} options={options} width={25} height={10} />
            </div>
        </div>
    )
}
export default Stat;
