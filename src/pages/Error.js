import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error sec">
      <div>
        <h1>Oops! looks like you lost your direction</h1><br/>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  )
}

export default Error
