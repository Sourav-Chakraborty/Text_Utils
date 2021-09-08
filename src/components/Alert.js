import React from 'react'

export default function Alert(props) {
    return (

    props.alert.type && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}</strong> {props.alert.message}
 
</div>
        </div>
    )
}
