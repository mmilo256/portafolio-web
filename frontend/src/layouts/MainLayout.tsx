import type { ReactNode } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

interface Props {
    children: ReactNode
}

const MainLayout = ({children}: Props) => {

  return (
    <div>
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout