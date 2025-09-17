import React from 'react'
import { Link } from './../pages/About';
import Contact from './../pages/Contact';

const Move = () => {
  return (
    <div>
    <button type="button">Home으로 이동</button>
    <button type="button">About으로 이동</button>
      <Link to="/
      contact">Contact로 이동</Link>
      </div>
  )
}

export default Move