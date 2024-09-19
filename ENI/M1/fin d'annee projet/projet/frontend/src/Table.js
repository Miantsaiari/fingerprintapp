// import Search from "./Search";
function Table() {
    return<div>
        <div className="btn btn-dark m-2"><i className="fa fa-plus"></i> Ajouter</div>
              <table className="table table-striped">
              <thead className="thead-dark">
              <th>Id</th>
              <th>Nom</th>
              <th>Email</th> 
              <th>Action</th> 
              </thead>

              <tbody>
                    <tr >
                    <td>1</td>
                    <td>Ornella</td>
                    <td>ornellaratsimbazafy@gmail.com</td>
                    <td><button  className="btn btn-success mx-2" type="boutton">Modifier <i className="fa fa-edit"/></button>
                    <button className="btn btn-danger mx-2" type="button" >Supprimer <i className="fa fa-trash"/></button></td>
            </tr>   
            <tr >
                    <td>1</td>
                    <td>Ornella</td>
                    <td>ornellaratsimbazafy@gmail.com</td>
                    <td><button  className="btn btn-success mx-2" type="boutton">Modifier <i className="fa fa-edit"/></button>
                    <button className="btn btn-danger mx-2" type="button" >Supprimer <i className="fa fa-trash"/></button></td>
            </tr>      
              </tbody>
    
              </table>
    </div>

}
export default Table;