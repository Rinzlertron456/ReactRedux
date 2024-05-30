import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
function Database(props) {
    let database=[...props.data];
  return (
    <>
    <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
    {database.map((ele,i)=>{
        return (
            <>
                    <tbody>
                        <tr>
                            <th scope="row">{i+1}</th>
                            <td scope="row">{ele.username}</td>
                            <td scope="row">{ele.password}</td>
                        </tr>
                    </tbody>
        </>
        )
    })}
    </table>
    </>
  )
}

export default Database;