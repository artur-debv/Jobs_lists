import { Header } from "../components/Header"
import { JobsContent } from "../components/JobsContent"
import { TagProvider } from "../components/Context/TagContext"
function App() {

  return (
    <>
      <TagProvider>
        <Header />
        <JobsContent />
      </TagProvider>
    </>
  )
}

export default App
