import React from 'react'

import Modal from './Modal'

function DeleteBadgeModal (props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1> Are You Sure? </h1>
        <p> You are about to delate this badge. </p>

        <div>
          <button onClick={props.onDelateBadge} className="btn btn-danger mr-4">Delate</button>
          <button onClick={props.onClose} className="btn btn-primary">Cancel</button>

        </div>
      </div>
    </Modal>
  )
}

export default DeleteBadgeModal