import React, { use } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stop } from "../store/slice";


export function Display(props = {}) {
    const dispatch = useDispatch();
    const currentLoop = useSelector(state => state.drumPad.currentLoop);
    const currentPad = useSelector(state => state.drumPad.currentPad);
    const loops = useSelector(state => state.drumPad.loops);
    const drumPad = useSelector(state => state.drumPad.drumPad);

    const handleStop = () => {
        handlePause();
        dispatch(stop());
    }

    const handlePause = () => {
        const loopAudio = document.getElementById(`${currentLoop}-audio`);
        const padAudio = document. getElementById(`${currentPad}`);

        if (currentLoop) {
            if (!loopAudio.paused) {
                loopAudio.pause();
            }
        }
        if (currentPad) {
            if (!padAudio.paused) {
                padAudio.pause();
                padAudio.currentTime = 0;
            }
        }
    }

    return (
        <div {...props}>
        <div id="display" className="container d-flex flex-column justify-content-center align-items-center">
            <span id="current-loop" className="text-center text-metal-brushed bg-wood-light px-2 py-1 mb-2 border border-metal-brushed border-1 rounded">{currentLoop ? loops[currentLoop].label : "No Loop Playing"}</span>
            <span id="current-Pad" className="text-center text-metal-brushed bg-wood-light px-2 py-1 mb-3 border border-metal-brushed border-1 rounded">{currentPad ? drumPad[currentPad].label : "No Drum Pad Played"}</span>
            <div className="btn-container">
                <div className="btn-group">
                    <button id='pause' className="btn btn-outline-dial-glow" onClick={handlePause}><i className="bi bi-pause" /></button>
                    <button id='stop' className="btn btn-outline-dial-glow" onClick={handleStop}><i className="bi bi-stop" /></button>
                </div>
            </div>
        </div>
        </div>
    )
}