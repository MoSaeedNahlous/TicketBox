import React, { Fragment } from 'react'
import { useContext } from 'react'
import { GameGlobalContext } from '../../../../contexts/gameContext/GameGlobalState'

const GameTicketsTableRow = ({Ticket}) => {
    
    const context = useContext(GameGlobalContext)

    const deleteHandler =()=>{
        context.DeleteTickets(Ticket.id)
    }


    const editHandler =()=>{
        context.SetCurrent(Ticket)
    }
    




    return (
        <Fragment>
        <tr>
        <td>{Ticket.id}</td>
        <td>{Ticket.counter}</td>
        <td>{Ticket.price}</td>
        <td>{Ticket.gates}</td>
        <td>{Ticket.endDate}</td>
        <td>{Ticket.returnable? "Yes":"No"}</td>
        <td>{Ticket.returnDate}</td>
        <td>{Ticket.createdAt}</td>
        <td>{Ticket.updatedAt}</td>

        <td>
            <button onClick={editHandler}> <i className="fa fa-pencil" aria-hidden="true"></i></button>
            <button onClick={deleteHandler}><i className="fa fa-trash" aria-hidden="true"></i></button>
        </td>
      </tr>

    


    </Fragment>
    )
}

export default GameTicketsTableRow
