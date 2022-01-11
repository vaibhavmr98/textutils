import React from 'react'

export const Alert = (props) => {

    const textUppercase = (word) =>{
       return  word.toUpperCase();
    }
    return (
        <div style={{height : '50px'}}>
                {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong >{textUppercase(props.alert.type)}</strong> : {props.alert.message}

                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}
