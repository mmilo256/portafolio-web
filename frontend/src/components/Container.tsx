import type { ReactNode } from "react"

interface Props {
  children: ReactNode,
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`max-w-300 w-[95%] mx-auto ${className}`}>{children}</div>
  )
}

export default Container