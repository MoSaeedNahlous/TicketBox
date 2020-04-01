import React, { Fragment } from 'react'

const StadiumTableRow = (props) => {
    return (
        <Fragment>
        <tr>
        <td>{props.Stadium.stadiumId}</td>
        <td>{props.Stadium.name}</td>
        <td>{props.Stadium.city}</td>
        <td>{props.Stadium.capacity}</td>
        <td><button> <i className="fa fa-pencil" aria-hidden="true"></i></button><button><i className="fa fa-trash" aria-hidden="true"></i></button></td>
        </tr>
        </Fragment>
    )
}

export default StadiumTableRow