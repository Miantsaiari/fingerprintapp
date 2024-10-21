import { DocumentIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Input,
  Checkbox,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { Header } from "../header";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
 
const TABLE_HEAD = [
  {
    head: "Prof",
    icon: <Checkbox className="w-4 h-4 mt-2"/>,
  },
  {
    head: "Date",
  },
   {
    head: "Date",
  },
  {
    head: "",
  },
];
 
const TABLE_ROWS = [
  {
    name: "RABETAFIKA Louis Haja",
    date: "31/01/2024",
    date: "01/03/2024",
  },
  {
    name: "RALAIVAO Christian",
    date: "31/01/2024",
    date: "01/03/2024",
  },
 
];
 
export function ListAbs() {
  const [isOpenMail, setIsOpenMail] = useState(false);

const handleOpenMail = () => setIsOpenMail(true);
const handleCloseMail = () => setIsCloseMail(false);
  return (
    <Card className="h-full w-full overflow-scroll">
     <Header/>
     <div className="shadow-md bg-gray-150  my-3 gap-6 flex">
          <select className="text-gray-400 font-bold  px-4 rounded m-2 flex mr-2 hover:gray-400 w-60 mx-4 px-3 " >
            <option>Niveau</option>
        <option>L1</option>
        <option>L2</option>
        <option>L3</option>
        <option>M1</option>
        <option>M2</option>
    </select>
    <select className="text-gray-400 font-bold  px-4 rounded m-2 flex mr-2 hover:gray-400 w-60 mx-4 px-3 " >
        <option>Parcours</option>
        <option>IG </option>
        <option>GB</option>
        <option>ASR</option>
        <option>GID</option>
        <option>OCC</option>
    </select>
       <div className='relative'> 
     <form>
       <input className="text-gray-400 font-bold py-2 px-4 rounded m-2 flex mr-2 hover:gray-400 w-00 mx-4 px-3" placeholder="Rechercher..."/>
       <FaSearch className="absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-400"/>
     </form>
     </div>
     <button
         onClick={handleOpenMail}
        className="mx-4 mb-4 px-4 py-2 bg-blue-950 text-white rounded-md shadow hover:bg-gray-600"
      >
       <i className='fa fa-plus'></i> Ajouter un prof
      </button>
   </div>
   
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map(({ head, icon }) => (
              <th key={head} className="border-b border-gray-300 px-4">
                <div className="flex items-center gap-1">
                  {icon}
                  <Typography
                    color="blue-gray"
                    variant="small"
                    className="!font-bold"
                  >
                    {head}
                  </Typography>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(
            ({ name, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "px-4" : "px-4 border-b border-gray-300";
 
              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-1">
                      <Checkbox className="w-4 h-4 mt-2"/>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-2">
                      <IconButton variant="text" size="sm">
                        <MdDelete className="h-6 w-6 text-gray-900" />
                      </IconButton>
                      {isOpenMail && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-1/3">
          <h2 className="text-lg font-bold mb-4">Ajouter un prof</h2>
          <form>
            <label className="block mb-2 text-sm font-medium text-gray-700">
            </label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full rounded mb-4"
              placeholder="Nom"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
            </label>
            <input
              type="date"
              className="border border-gray-300 p-2 w-full rounded mb-4"
              placeholder="Date de debut"
            />
              <label className="block mb-2 text-sm font-medium text-gray-700">
            </label>
            <input
              type="date"
              className="border border-gray-300 p-2 w-full rounded mb-4"
              placeholder="Date de fin"
            />

            <div className="flex justify-end space-x-2">              
              <button
                type="button"
                className="bg-gray-400 text-white py-2 px-4 rounded"
                onClick={handleCloseMail}
              >
                Annuler
              </button>
              <button
                type="submit"
                className="bg-blue-950 text-white py-2 px-4 rounded"
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
      )}
                    </div>
                  </td>
                </tr>
              );
            },
          )}

        </tbody>
      </table>
    </Card>
  );
}