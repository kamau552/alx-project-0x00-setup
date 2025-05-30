import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  return (
    <button {...props}>
      {props.children || "Click me"}
    </button>
  )
}

export default Button
