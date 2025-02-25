import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { drumPadReducer } from "../store/slice";

export function DrumPad( props = {}) {
    const dispatch = useDispatch();
    const drumPad = useSelector(state => state.drumPad.drumPad);

    const handleClick = (key) => {
        const audio = document.getElementById(`${key}`)
        if (!audio) return;
        audio.play();
        dispatch(drumPadReducer(key))
    }

    const handleKey = (e) => {
        const key = e.key.toUpperCase();
        const id = drumPad[key];
        if (id) {
            handleClick(`${key}`)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKey)
    })

    return (
        <div {...props}>
            <div id="drum-pad-container" className="container">
             <div className="row">
            {Object.keys(drumPad).map(key => (
                <div key={key} className="drum-pad-outer col-4" id={drumPad[key].label}>
                    <div className="container d-flex justify-content-center align-items-center m-2">
                        <button
                            id={`${key}-btn`}
                            className="btn drum-pad text-wood-light border border-1 rounded border-metal-brushed bg-fabric-grill"
                            onClick={() => handleClick(key)}>
                            {drumPad[key].key}
                            <audio id={`${key}`} className="clip" src={drumPad[key].file} />
                        </button>
                    </div>
                </div>
            ))}
             </div>
            </div>
        </div>

    )
}