import React, { useState } from 'react';
import "../App.css";

function Timer() {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    // Not started = 0
    // started = 1
    // stopped = 2
    const onChange = (e) => {
        setTime({ ...time, [e.target.name]: e.target.value })
      }

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
        if (updatedM === 0 && updatedH > 0) {
            updatedH--;
            updatedM = 60;
        }
        if (updatedS === 0 && updatedM > 0) {
            updatedM--;
            updatedS = 60;
        }
        if (updatedMs === 0 && updatedS > 0) {
            updatedS--;
            updatedMs = 100;
        }
        if (updatedMs > 0) {
            updatedMs--;
        }
        if (updatedH === 0 && updatedM === 0 && updatedS === 0 && updatedMs === 0) {
            return reset();
        }
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0, h: 0 })
    };

    const resume = () => start();

    return (
        <div className="main-section">
            <div className="clock-holder">
                <div className="stopwatch">
                    <h1>Timer</h1>
                    <div>
                        <input type="tel" disabled={status > 0} value={time.h} name='h' onChange={onChange} />&nbsp;:&nbsp;
                        <input type="tel" disabled={status > 0} value={time.m} name='m' onChange={onChange} />&nbsp;:&nbsp;
                        <input type="tel" disabled={status > 0} value={time.s} name='s' onChange={onChange} />
                    </div>
                    <div>
                        {(status === 0) ?
                            <button className="stopwatch-btn stopwatch-btn-gre"
                                onClick={start}>Start</button> : ""
                        }

                        {(status === 1) ?
                            <div>
                                <button className="stopwatch-btn stopwatch-btn-red"
                                    onClick={stop}>Stop</button>
                                <button className="stopwatch-btn stopwatch-btn-yel"
                                    onClick={reset}>Reset</button>
                            </div> : ""
                        }

                        {(status === 2) ?
                            <div>
                                <button className="stopwatch-btn stopwatch-btn-gre"
                                    onClick={resume}>Resume</button>
                                <button className="stopwatch-btn stopwatch-btn-yel"
                                    onClick={reset}>Reset</button>
                            </div> : ""
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timer


