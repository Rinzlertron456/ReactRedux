import React from 'react'

function Cell(props) {
    let arr=[...props.data];
    let filteredArr=arr.filter(ele=>ele=="Savings" || ele=="Personal Data");
  return (
    <>
    <ul className="list-group">
        {filteredArr.map((ele,i)=>{
          return <li className="list-group-item" key={i}>{ele}</li>
        })}
      </ul>
      </>
  )
}

export default Cell;