import MainLayout from "./layouts/MainLayout"
import About from "./sections/About"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"

const App = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <MainLayout>
        <Hero />
        <Projects />
        <About />
      </MainLayout>
    </div>
  )
}

export default App