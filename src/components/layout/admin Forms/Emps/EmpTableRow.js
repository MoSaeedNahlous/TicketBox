import React, { Fragment } from 'react'

const EmpTableRow = (props) => {
    return (
        <Fragment>
        <tr>
        <td>{props.emp.employeeId}</td>
        <td>{props.emp.employeeType}</td>
        <td>{props.emp.email}</td>
        <td><button> <i className="fa fa-pencil" aria-hidden="true"></i></button><button><i className="fa fa-trash" aria-hidden="true"></i></button></td>
        </tr>
        </Fragment>
    )
}

export default EmpTableRow
