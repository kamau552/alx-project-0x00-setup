import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function Button(props: ButtonProps) {
  return (
    <button {...props}>
      {props.children || "Click me"}
    </button>
  )
}

export default Button
