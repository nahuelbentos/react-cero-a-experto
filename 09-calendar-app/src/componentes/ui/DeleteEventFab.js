import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eventDeleted, eventStartDelete } from '../../actions/events';

export const DeleteEventFab = () => {

  const { activeEvent } = useSelector(state => state.calendar);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch( eventStartDelete() );

  

  return (
    <button className={`btn btn-danger fab-danger ${ !activeEvent && 'invisible'}`} onClick={handleDelete} >
      <i className="fas fa-trash"></i>
      <span> Borrar Evento</span>
    </button>
  )
}
