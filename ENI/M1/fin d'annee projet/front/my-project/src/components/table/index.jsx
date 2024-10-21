import {
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Header } from "../header";
import { FaEdit, FaPaperPlane, FaPlus, FaSearch, FaUser } from "react-icons/fa";
import { MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";
import { useState } from "react";
import StaggeredDropDown from "../droopdown";
import FiltreE from "../filtre";
import FiltreP from "../filtre/indexp";

const TABLE_HEAD = [
  {
    head: "Nom",
    icon: <MdCheckBoxOutlineBlank className="w-4 h-4" />,
  },
  {
    head: "Matricule",
  },
  {
    head: "Niveau",
  },
  {
    head: "Parcours",
  },
  {
    head: "Email",
  },
  {
    head: "",
  },
];
 
const TABLE_ROWS = [
  {
    nom: "#MS-415646",
    matricule: "Viking Burrito",
    niveau: "$14,000",
    parcours: "31 Jan 2024",
    email: "31 Feb 2024",
  },
  {
    nom: "#RV-126749",
    matricule: "Stone Tech Zone",
    niveau: "$3,000",
    parcours: "24 Jan 2024",
    email: "24 Feb 2024",
  },
  {
    nom: "#QW-103578",
    matricule: "Fiber Notion",
    niveau: "$20,000",
    parcours: "12 Jan 2024",
    email: "12 Feb 2024",
  },
  {
    nom: "#MS-415688",
    matricule: "Blue Bird",
    niveau: "$5,600",
    parcours: "10 Jan 2024",
    email: "10 Feb 2024",
  },
];
 
export function Table() {
const [selectedFiltre, setSelectedFiltre] = useState(null);  
const [isOpen, setIsOpen] = useState(false);
const [isOpenMail, setIsOpenMail] = useState(false);

const handleOpen = () => setIsOpen(true);
const handleClose = () => setIsOpen(false);

const handleOpenMail = () => setIsOpenMail(true);
const handleCloseMail = () => setIsCloseMail(false);

  return (
  
        <div>
        <div>
        <div class="hidden sm:ml-6 sm:block bg-gray-100 shadow-md py-3 px-6 ml-0">
          <div class="flex space-x-4">
          <a
            href="#"
            className="rounded-md px-3 py-2 text-lg font-medium text-gray-400 hover:bg-blue-950 hover:text-white"
            onClick={() => setSelectedFiltre('etudiant')}
          >
            Étudiant
          </a>
          {/* Lorsqu'on clique sur Professeur, on sélectionne le filtre Professeur */}
          <a
            href="#"
            className="rounded-md px-3 py-2 text-xl font-medium text-gray-400 hover:bg-blue-950 hover:text-white"
            onClick={() => setSelectedFiltre('professeur')}
          >
            Professeur
          </a>
          </div>
          <div className="absolute top-0 right-6 bg-white rounded-full p-2 shadow my-6" >
            <StaggeredDropDown/>
          </div>
        </div>
        </div>
        
        {selectedFiltre === 'etudiant' && <FiltreE />}
        {selectedFiltre === 'professeur' && <FiltreP />}

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-1/3">
          <h2 className="text-lg font-bold mb-4">Ajout</h2>
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
              type="email"
              className="border border-gray-300 p-2 w-full rounded mb-4"
              placeholder="Matricule"
            />
              <label className="block mb-2 text-sm font-medium text-gray-700">
            </label>
            <input
              type="email"
              className="border border-gray-300 p-2 w-full rounded mb-4"
              placeholder="Niveau"
            />
              <label className="block mb-2 text-sm font-medium text-gray-700">
            </label>
            <input
              type="email"
              className="border border-gray-300 p-2 w-full rounded mb-4"
              placeholder="Parcours"
            />
              <label className="block mb-2 text-sm font-medium text-gray-700">
            </label>
            <input
              type="email"
              className="border border-gray-300 p-2 w-full rounded mb-4"
              placeholder="Email"
            />

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="bg-gray-400 text-white py-2 px-4 rounded"
                onClick={handleClose}
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
      
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map(({ head, icon }) => (
              <th key={head} className="border-b border-gray-300 p-4">
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
            ({ nom, matricule, niveau, parcours, email }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";
 
              return (
                <tr key={nom}>
                  <td className={classes}>
                    <div className="flex items-center gap-1">
                      <MdCheckBoxOutlineBlank className="w-4 h-4" />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {nom}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {matricule}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {niveau}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {parcours}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-x-8 mb-3 hover:-graybg-400">
                    <IconButton variant="text" size="sm">
                    <FaPaperPlane 
                    className="h-4 w-4 mt-1 text-gray-900 hover:text-gray-500"
                    onClick={handleOpenMail}
                      />
                      </IconButton>
                      <IconButton variant="text" size="sm">
                        <FaEdit className="h-5 w-5 text-gray-900 hover:text-gray-400" />
                      </IconButton>
                      <IconButton variant="text" size="sm">
                        <MdDelete className="h-5 w-5 text-gray-900 hover:text-gray-400"
                        />
                      </IconButton>
                      {isOpenMail && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-1/3">
          <h2 className="text-lg font-bold mb-4">Envoyer email</h2>
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
              type="email"
              className="border border-gray-300 p-2 w-full rounded mb-4"
              placeholder="Email"
            />
              <label className="block mb-2 text-sm font-medium text-gray-700">
            </label>
            <input
              type="textArea"
              className="border border-gray-300 p-2 w-full rounded mb-4"
              placeholder="Ecrivez votre message ici..."
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
                Envoyer
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
      </div>
 
  );
}
