import {Routes, Route} from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Home/Home"
import News from "../News/News"


function App() {

    return (
        <Routes>
            <Route path="/" element={ <Layout />}>
                <Route index element={<Home/>}/>
                <Route path="news" element={<News/>}/>

            </Route>
        </Routes>
    
    )
}

export default App
