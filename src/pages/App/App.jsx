import {Routes, Route} from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Home/Home"
import News from "../News/News"
import Blog from "../Blog/Blog"
import Podcast from "../Podcast/Podcast"
import Resources from "../Resources/Resources"
import Contact from "../Contact/Contact"


function App() {

    return (
        <Routes>
            <Route path="/" element={ <Layout />}>
                <Route index element={<Home/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="blog" element={<Blog/>}/>
                <Route path="podcast" element={<Podcast/>}/>
                <Route path="resourse" element={<Resources/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Route>
        </Routes>
    
    )
}

export default App
