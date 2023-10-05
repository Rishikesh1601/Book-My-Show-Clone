import React from "react";

export const NextArrow = (props) => {
    return (
        <>
        <div
        className={props.className}
        style={{...props.style, width: '40px',
        height: '40px',
        background: 'gray',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        color: 'white',
        fontSize: '24px',}}
        onClick={props.onClick}
        />
        </>
    )
}

export const PrevArrow = (props) => {
    return (
        <>
        <div
        className={props.className}
        style={{...props.style, width: '40px',
        height: '40px',
        background: 'gray',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        color: 'white',
        fontSize: '24px',}}
        onClick={props.onClick}
        />
        </>
    )
}