import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { loopReducer } from "../store/slice";

export function LoopPad(props = {}) {
    const dispatch = useDispatch();
    const loops = useSelector(state => state.drumPad.loops);
    const currentLoopKey = useSelector(state => state.drumPad.currentLoop)


    const handleLoop = (key) => {
        const audio = document.getElementById(`${key}-audio`);
        if (!audio) return;

        if (currentLoopKey === key){
            if (!audio.paused) {
                audio.pause();
                dispatch(loopReducer(null));
            } else {
                audio.play();
                audio.loop = true;
            }
        } else {
            if (currentLoopKey) {
                const currentAudio = document.getElementById(`${currentLoopKey}-audio`);
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0
                }
            }
            audio.play();
            audio.loop = true;
            dispatch(loopReducer(key));
        }
    }

    const handleKey = (e) => {
        const key = e.key.toUpperCase();
        const id = loops[key];
        if (id) {
            handleLoop(`${key}`);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKey)
    })
    return (
        <div {...props}>
            <div className="loop-pad-container container">
        <div className="row ">
            {/*first three for styling purposes */}
            {Object.keys(loops).slice(0, 3).map(key => (
            <div key={key} className="loop-pad-outer col-4">
                <div className="d-flex justify-content-center align-items-center m-2">
                    <button 
                    id={key} 
                    className="btn loop-pad text-wood-light border border-1 rounded border-metal-brushed bg-fabric-grill" 
                    onClick={() => handleLoop(key)}>
                    {loops[key].key}
                    <audio id={`${key}-audio`} src={loops[key].file} />
                    </button>
                </div>
            </div>
            ))}

            {/* next two take up the full width of the bottom row */}
            {Object.keys(loops).slice(3).map(key => (
            <div key={key} className="loop-pad-outer col-6">
                <div className="d-flex justify-content-center align-items-center m-3">
                    <button 
                    id={key} 
                    className="btn loop-pad text-wood-light border border-1 rounded border-metal-brushed bg-fabric-grill" 
                    onClick={() => handleLoop(key)}>
                    {loops[key].key}
                    <audio id={`${key}-audio`} src={loops[key].file} />
                    </button>
                </div>
            </div>
            ))}
        </div>
        </div>
        </div>
    )
}