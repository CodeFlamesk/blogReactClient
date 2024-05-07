import {Routes, Route} from "react-router-dom"
import Layout from "../Layout/Layout"
import { lazy, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import dashboardAction from "action/dashboardAction";

const Home = lazy(() => import("../Home/Home"));
const Blog = lazy(() => import("../Blog/Blog"));
const Podcast = lazy(() => import("../Podcast/Podcast"));
const News = lazy(() => import("../News/News"));
const Resources = lazy(() => import("../Resources/Resources"));
const Contact = lazy(() => import("../Contact/Contact"));
const Dashboard = lazy(() => import("../Dashboard/Dashboard"))

function App() {


    const activePostId = useSelector(store => store.dashboard.activePostId);
    const categoryId = useSelector(store => store.dashboard.categoryId)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(dashboardAction.getPost(activePostId))
    }, [activePostId])

    useEffect(() => {
        dispatch(dashboardAction.getAllPost(categoryId))
    }, [categoryId])

    useEffect(() => {
        dispatch(dashboardAction.getCategory())
    }, [])


    return (
        <Routes>
            <Route path="/" element={ <Layout />}>
                <Route index element={<Home/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="blog" element={<Blog/> }/>
                <Route path="podcast" element={<Podcast/>}/>
                <Route path="resourse" element={<Resources/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="dashboard" element={ <Dashboard/>}></Route>
            </Route>
        </Routes>
    )
}

export default App
