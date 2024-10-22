import {
    IconButton,
    Typography,
    Tabs,
    Tab,
    TabsHeader,
    TabsBody,
    TabPanel,
  } from "@material-tailwind/react";
  import { useState, useEffect } from "react";
  import { FaEdit, FaPaperPlane, FaPlus } from "react-icons/fa";
  import { MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";
  
  // Définir les entêtes pour les étudiants et les professeurs
  const STUDENTS_HEAD = [
    { head: "Nom" },
    { head: "Prénom" },
    { head: "Matricule" },
    { head: "Email" },
    { head: "" },
  ];
  
  const PROFESSORS_HEAD = [
    { head: "Nom" },
    { head: "Matricule" },
    { head: "Discipline" },
    { head: "Email" },
    { head: "" },
  ];
  
  // Onglets
  export function Users() {
    const [activeTab, setActiveTab] = useState("students"); // Onglet actif (par défaut, les étudiants)
    
    const [students, setStudents] = useState([]); // État pour les étudiants
    const [professors, setProfessors] = useState([]); // État pour les professeurs

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        nom: '',
        matricule: '',
        niveau: '',
        parcours: '',
        email: '',
      });
    
    // Similaire à ce que vous avez déjà pour charger les étudiants et professeurs
    useEffect(() => {
      const fetchStudents = async () => {
        const response = await fetch('http://localhost:3000/api/etudiants');
        const data = await response.json();
        setStudents(data); // Stocker les étudiants
      };
  
      const fetchProfessors = async () => {
        const response = await fetch('http://localhost:3000/api/professeurs');
        const data = await response.json();
        setProfessors(data); // Stocker les professeurs
      };
  
      fetchStudents();
      fetchProfessors();
    }, []);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: name === 'matricule' ? Number(value) : value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch('http://localhost:3000/api/etudiants', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const newEtudiant = await response.json();
            console.log('Étudiant ajouté:', newEtudiant);
            handleClose(); // Ferme le modal
            setStudents([...students, newEtudiant]); // Ajoute le nouvel étudiant à l'état
          } else {
            const errorData = await response.json();
            console.error('Erreur lors de l\'ajout de l\'étudiant', errorData);
          }
        } catch (error) {
          console.error('Erreur réseau:', error);
        }
      };
  
    return (
      <div>
        {/* Onglets étudiants et professeurs */}
        <Tabs value={activeTab} onChange={setActiveTab}>
        <TabsHeader className="relative bg-white shadow-lg rounded-t-lg z-10">
          <Tab
            value="students"
            className={`${
              activeTab === "students" ? "text-blue-500" : "text-gray-600"
            } p-3 transition-colors duration-300 z-20 relative`}>
            Étudiants
          </Tab>
          <Tab
            value="professors"
            className={`${
              activeTab === "professors" ? "text-blue-500" : "text-gray-600"
            } p-3 transition-colors duration-300 z-20 relative`}>
            Professeurs
          </Tab>
          {/* Animation de la barre indicatrice */}
          <div
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-transform duration-300`}
            style={{
              width: activeTab === "students" ? "50%" : "50%",
              transform: activeTab === "students" ? "translateX(0%)" : "translateX(100%)",
              zIndex: 5, // Assurez-vous que l'indicateur est derrière les titres des onglets
            }}
          />
        </TabsHeader>
          <TabsBody>
            {/* Onglet Étudiants */}
            <TabPanel value="students">
              <div className="shadow-md bg-gray-150 py-2 my-3 gap-10 flex">
                {/* Bouton pour ajouter un étudiant */}
                <button
                  className="bg-blue-950 text-white font-bold py-2 px-4 rounded m-2 mx-4"
                  onClick={handleOpen}
                >
                  <i className="fa fa-plus mr-2"></i> Ajouter Étudiant
                </button>
              </div>
              
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {STUDENTS_HEAD.map(({ head }) => (
                      <th key={head} className="border-b border-gray-300 p-4">
                        <Typography color="blue-gray" variant="small" className="!font-bold">
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {students.map(({ nom, prenom, matricule, email }, index) => {
                    const isLast = index === students.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";
  
                    return (
                      <tr key={matricule}>
                        <td className={classes}>
                          <Typography variant="small" color="blue-gray" className="font-bold">
                            {nom}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography variant="small" color="blue-gray">
                            {prenom}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography variant="small" color="blue-gray">
                            {matricule}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography variant="small" color="blue-gray">
                            {email}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <IconButton variant="text" size="sm">
                            <FaEdit className="h-5 w-5 text-gray-900 hover:text-gray-400" />
                          </IconButton>
                          <IconButton variant="text" size="sm">
                            <MdDelete className="h-5 w-5 text-gray-900 hover:text-gray-400" />
                          </IconButton>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Ajout</h2>
            <form onSubmit={handleSubmit}>
          <input
  type="text"
  name="nom" // Ajoutez le nom
  value={formData.nom}
  onChange={handleInputChange}
  className="border border-gray-300 p-2 w-full rounded mb-4"
  placeholder="Nom"
/>

<input
  type="text"
  name="matricule" // Ajoutez le nom
  value={formData.matricule}
  onChange={handleInputChange}
  className="border border-gray-300 p-2 w-full rounded mb-4"
  placeholder="Matricule"
/>

<input
  type="text"
  name="niveau" // Ajoutez le nom
  value={formData.niveau}
  onChange={handleInputChange}
  className="border border-gray-300 p-2 w-full rounded mb-4"
  placeholder="Niveau"
/>

<input
  type="text"
  name="parcours" // Ajoutez le nom
  value={formData.parcours}
  onChange={handleInputChange}
  className="border border-gray-300 p-2 w-full rounded mb-4"
  placeholder="Parcours"
/>

<input
  type="email"
  name="email" // Ajoutez le nom
  value={formData.email}
  onChange={handleInputChange}
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
            </TabPanel>
  
            {/* Onglet Professeurs */}
            <TabPanel value="professors">
              <div className="shadow-md bg-gray-150 py-2 my-3 gap-10 flex">
                {/* Bouton pour ajouter un professeur */}
                <button
                  className="bg-blue-950 text-white font-bold py-2 px-4 rounded m-2 mx-4"
                  onClick={() => alert("Ajouter professeur")}
                >
                  <i className="fa fa-plus mr-2"></i> Ajouter Professeur
                </button>
              </div>
              
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {PROFESSORS_HEAD.map(({ head }) => (
                      <th key={head} className="border-b border-gray-300 p-4">
                        <Typography color="blue-gray" variant="small" className="!font-bold">
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {professors.map(({ nom, matricule, discipline, email }, index) => {
                    const isLast = index === professors.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";
  
                    return (
                      <tr key={matricule}>
                        <td className={classes}>
                          <Typography variant="small" color="blue-gray" className="font-bold">
                            {nom}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography variant="small" color="blue-gray">
                            {matricule}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography variant="small" color="blue-gray">
                            {discipline}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography variant="small" color="blue-gray">
                            {email}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <IconButton variant="text" size="sm">
                            <FaEdit className="h-5 w-5 text-gray-900 hover:text-gray-400" />
                          </IconButton>
                          <IconButton variant="text" size="sm">
                            <MdDelete className="h-5 w-5 text-gray-900 hover:text-gray-400" />
                          </IconButton>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    );
  }
  