import React, { useState } from "react";
import { extend, Canvas } from "react-three-fiber";
import { Text } from "troika-three-text";
import fonts from "./Fonts";

import "./App.css";


// Register Text as a react-three-fiber element
extend({ Text });



function Label(props) {

    // State:
    const [rotation, setRotation] = useState([0, 0, 0, 0]);
    // Handlers:
    const onMouseMove = e => {
        setRotation([
            ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
            ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
            0
        ]);
    };


    const [opts, setOpts] = useState({
        font: "Philosopher",
        fontSize: 0.2,
        color: "#ffffff",
        maxWidth: 300,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "justify",
        materialType: "MeshPhongMaterial"
    });
    //color: "#99ccff"
    return (
        <text
            {...props}
            rotation={rotation}
            {...opts}
            font={fonts[opts.font]}
            anchorX="center"
            anchorY="middle"
        >
            {opts.materialType === "MeshPhongMaterial" ? (
                <meshPhongMaterial attach="material" color={opts.color} />
            ) : null}
        </text>
    );
}

export default Label
