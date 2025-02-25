import loopOne from '../audioFiles/drum-bass-type-beat-hard-loop_143bpm_G_minor.wav';
import loopTwo from '../audioFiles/groovy-soul-chopped-instrumental_80bpm_G_minor.wav';
import loopThree from '../audioFiles/jazz-soul-vintage-full-sample-kansas-city_91bpm_C_major.wav';
import loopFour from '../audioFiles/rebel-glide-dark-trap-drill-lead_150bpm_F_major.wav';
import loopFive from '../audioFiles/trap-beat-soft-vibe-guitar-fat-punchy-bass_120bpm_A_minor.wav';

import h1 from '../audioFiles/Heater-1.mp3';
import h2 from '../audioFiles/Heater-2.mp3';
import h3 from '../audioFiles/Heater-3.mp3';
import h4 from'../audioFiles/Heater-4.mp3';
import knH from '../audioFiles/Kick-n-Hat.mp3';
import kick from '../audioFiles/Kick.mp3';
import openHH from '../audioFiles/Open-HH.mp3';
import closedHH from '../audioFiles/Closed-HH.mp3';
import clap from '../audioFiles/Clap.mp3';

export const drumPad = {
    Q: {file: h1, label: 'Heater 1', key: 'Q'},
    W: {file: h2, label: 'Heater 2', key: 'W'},
    E: {file: h3, label: 'Heater 3', key: 'E'},
    A: {file: h4, label: 'Heater 4', key: 'A'},
    S: {file: knH, label: 'Kick-N-Hat', key: 'S'},
    D: {file: kick, label: 'Kick', key: 'D'},
    Z: {file: openHH, label: 'Open-Hat', key: 'Z'},
    X: {file: closedHH, label: 'Closed-Hat', key: 'X'},
    C: {file: clap, label: 'Clap', key: 'C'}
}

export const loops = {
    U: {file: loopOne, label: 'Hard Bass', key: 'U'},
    I: {file: loopTwo, label: 'Chopped Groovy-Soul', key: 'I'},
    O: {file: loopThree, label: 'Jazz-Soul', key: 'O'},
    J: {file: loopFour, label: 'Dark Trap Glide', key: 'J'},
    K: {file: loopFive, label: 'Soft Guitar Hard Bass', key: 'K'}
}