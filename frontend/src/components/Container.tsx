import type { ReactNode } from "react"

type Props = {
    children: ReactNode,
    className: string
}

const Container = ({children, className}: Props) => {
  return (
    <div className={`w-[95%] mx-auto ${className}`}>{children}</div>
  )
}

export default Container