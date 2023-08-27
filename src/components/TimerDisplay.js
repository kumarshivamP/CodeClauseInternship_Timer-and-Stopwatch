import React, { useState } from 'react'

function TimerDisplay(props) {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
  const onChange = (e) => {
    setTime({ ...time, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div>
        <input type="tel" disabled={props.status > 0} value={(props.time.h >= 10) ? props.time.h : "0" + props.time.h} name='h' onChange={onChange} />&nbsp;:&nbsp;
        <input type="tel" disabled={props.status > 0} value={(props.time.m >= 10) ? props.time.m : "0" + props.time.m} name='m' onChange={onChange} />&nbsp;:&nbsp;
        <input type="tel" disabled={props.status > 0} value={(props.time.s >= 10) ? props.time.s : "0" + props.time.s} name='s' onChange={onChange} />
      </div>
      <div>
        {(props.status === 0) ?
          <button className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.}>Start</button> : ""
        }
      </div>
    </>
  )
}

export default TimerDisplay
