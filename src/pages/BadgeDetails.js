import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgeDetails.css'
import confLogo from '../images/conf-logo.png'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

function useIncreaseCount(max) {
  const [ count, setCount] = React.useState(0)

  if (count > max) {
    setCount(0)
  }

  return [count, setCount]
}

function BadgeDetails (props) {
  const [ count, setCount] = useIncreaseCount(4)
  const badge = props.badge

  return (
    <div>
    <div className = "BadgeDetails__hero">
      <div className="container">
        <div className="row  BadgeDetails__hero-attendant-name">
            <img src={confLogo} alt="Logo de la conferencia"/>
            <h1> {badge.firstName} {badge.lastName}  </h1>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col mb-4">
          <Badge
            firstName={badge.firstName} 
            lastName={badge.lastName} 
            email={badge.email} 
            twitter={badge.twitter} 
            jobTitle={badge.jobTitle}
          />
        </div>
        <div className="col">
          <h2>Actions</h2>
          <button onClick={() => {
            setCount(count + 1)
          }} className="btn btn-primary mb-4">
            Increase count: {count}
          </button>
          <div>
            <Link className="btn btn-primary mb-4 col-6" to={`/badges/${badge.id}/edit`}> Edit </Link>
          </div>
          <div>
            <button onClick={props.onOpenModal} className="btn btn-danger col-6"> Delete </button>
            <DeleteBadgeModal
              isOpen={props.modalIsOpen}
              onClose={props.onCloseModal}
              onDelateBadge={props.onDelateBadge}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BadgeDetails