import { useState,useEffect, useRef } from "react";
import * as Tone from "tone";

import kick from "assets/sounds/Kick.wav";
import hh from "assets/sounds/hh.wav";
import block from "assets/sounds/Block.wav";
import snare from "assets/sounds/Snare.wav";

export default function useSounds() {
    const mySampler = useRef(null)

    const [isKickPlayed, isKickPlayedChange]= useState(false);
    const [isHhPlayed, isHhPlayedChange]= useState(false);
    const [isBlockPlayed, isBlockPlayedChange]= useState(false);
    const [isSnarePlayed, isSnarePlayedChange]= useState(false);

    useEffect(() => {
        const sampler = new Tone.Sampler({
              C4:kick,
              "D#4":hh,
              "F#4":block,
              A4:snare,
            }).toDestination();

            Tone.loaded().then(()=> {
                mySampler.current = sampler;
            })
    }, []);



    function soundPlay(note){
        mySampler.current.triggerAttackRelease([note],4)
    }

    function handleKeyDown({key}){
        switch(key){
            case "a":
                isKickPlayedChange(true)
                window.setTimeout(()=>isKickPlayedChange(false), 300);
                soundPlay("C4");
                break;
            case "z":
                isHhPlayedChange(true); 
                window.setTimeout(()=>isHhPlayedChange(false), 300);
                soundPlay("D#4");
                break;
            case "e":
                isBlockPlayedChange(true);
                window.setTimeout(()=>isBlockPlayedChange(false), 300);
                soundPlay("F#4");
                break;
            case "r":
                isSnarePlayedChange(true);
                window.setTimeout(()=>isSnarePlayedChange(false), 300);
                soundPlay("A4") ;
                break;
            default:
                break;  
        }
    }

    useEffect(()=>{
        window.addEventListener("keydown",handleKeyDown);
        return () =>  {
            window.removeEventListener("keydown",handleKeyDown);
        };
    }, [])


    const handleSampleChange =(note,file)=>{
            let fileURL = URL.createObjectURL(file);
            let buffer = new Tone.Buffer(fileURL);
        mySampler.current.add(note, buffer,()=>alert("sampler successfully changed")
        );
    };
    
const buttonList = [
    {
        soundPlay : ()=>soundPlay("C4"),
        isPlayed: isKickPlayed,
        id:"kick",
        handleSampleChange: (e)=>handleSampleChange("C4", e.target.files[0]),
    },
    {
        soundPlay : ()=>soundPlay("D#4"),
        isPlayed: isHhPlayed,
        id:"hh",
        handleSampleChange: (e)=>handleSampleChange("D#4", e.target.files[0]),
    }, 
    {
        soundPlay : ()=>soundPlay("F#4"),
        isPlayed: isBlockPlayed,
        id:"Block",
        handleSampleChange: (e)=>handleSampleChange("F#4", e.target.files[0]),
    }, 
    {
        soundPlay : ()=>soundPlay("A4"),
        isPlayed: isSnarePlayed,
        id:"Snare",
        handleSampleChange: (e)=>handleSampleChange("A4", e.target.files[0]),
    },
    ];

    return {buttonList};
}