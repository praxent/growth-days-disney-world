import React from "react";
import { Animal } from "../Animal";

export const AnimalSelector = (props: {
    animal: Animal;
    changeAnimal: React.Dispatch<React.SetStateAction<Animal>>
}) => {
    return (
        <div style={{margin: "25px 0px 0px 0px"}}>
            <button onClick={() => props.changeAnimal(props.animal)} >{props.animal.name}</button>
        </div>
    )
}