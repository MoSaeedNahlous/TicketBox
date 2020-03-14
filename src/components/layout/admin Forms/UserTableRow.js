import React, { Fragment } from 'react'

const UserTableRow = (props) => {
    return (
        <Fragment>
        <tr>
        <td>{props.user.userId}</td>
        <td>{props.user.name}</td>
        <td>{props.user.email}</td>
        <td><button> <i className="fa fa-pencil" aria-hidden="true"></i></button><button><i className="fa fa-trash" aria-hidden="true"></i></button></td>
        </tr>
        </Fragment>
    )
}

export default UserTableRow
