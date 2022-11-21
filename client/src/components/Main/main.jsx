import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Home from '../Home/home'

const Main = () => {
  const [value, setValue] = useState({})

  useEffect(() => {
    axios('/api/v1/test')
      .then(({ data }) => {
        setValue(data)
      })
  }, [])

  const chart = value.chart

  return (
    <div className="main">
      <div className="main__container">
        <div className="main__header">
          <span className="main__header-title">{value.project} / {value.period}</span>
          <button type="button" className="main__header-arrow">
            <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.2083 16.0833C12.3741 16.0833 12.5331 16.1492 12.6503 16.2664C12.7675 16.3836 12.8333 16.5426 12.8333 16.7083C12.8333 16.8741 12.7675 17.0331 12.6503 17.1503C12.5331 17.2675 12.3741 17.3333 12.2083 17.3333L1.375 17.3367C1.20924 17.3367 1.05027 17.2708 0.933058 17.1536C0.815848 17.0364 0.75 16.8774 0.75 16.7117C0.75 16.5459 0.815848 16.3869 0.933058 16.2697C1.05027 16.1525 1.20924 16.0867 1.375 16.0867L12.2083 16.0833ZM6.70667 0.676671L6.79167 0.670837C6.9427 0.670844 7.08862 0.72554 7.20244 0.82481C7.31627 0.92408 7.39029 1.06121 7.41083 1.21084L7.41667 1.29584L7.41583 12.7L10.5175 9.6C10.6233 9.49416 10.7636 9.4298 10.9129 9.41864C11.0621 9.40747 11.2104 9.45024 11.3308 9.53917L11.4017 9.6C11.5074 9.70593 11.5716 9.84628 11.5826 9.99554C11.5936 10.1448 11.5507 10.293 11.4617 10.4133L11.4008 10.4833L7.23667 14.6475C7.13084 14.7534 6.99055 14.8177 6.84129 14.8289C6.69203 14.84 6.54372 14.7973 6.42333 14.7083L6.3525 14.6475L2.18333 10.4842C2.07122 10.3728 2.00546 10.2231 1.99929 10.0652C1.99313 9.90724 2.04702 9.75285 2.15011 9.63307C2.2532 9.51329 2.39784 9.43701 2.55492 9.41959C2.71199 9.40217 2.86983 9.44489 2.99667 9.53917L3.06667 9.59917L6.16583 12.6942L6.16667 1.29584C6.16667 1.14481 6.22137 0.998886 6.32064 0.885062C6.41991 0.771238 6.55704 0.697211 6.70667 0.676671L6.79167 0.670837L6.70667 0.676671Z" fill="#262842" />
            </svg>
            Export
            </button>
        </div>
        <div className="main__body">
          {(typeof chart === 'undefined') ? <span className="main__body-loading">Loading...</span> : <Home chart={chart} />}
        </div>
      </div>
    </div>
  )
}

export default Main
