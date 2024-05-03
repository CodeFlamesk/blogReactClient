import {Routes, Route} from "react-router-dom"
import Layout from "../Layout/Layout"
import { lazy } from "react"

const Home = lazy(() => import("../Home/Home"));
const Blog = lazy(() => import("../Blog/Blog"));
const Podcast = lazy(() => import("../Podcast/Podcast"));
const News = lazy(() => import("../News/News"));
const Resources = lazy(() => import("../Resources/Resources"));
const Contact = lazy(() => import("../Contact/Contact"));

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
