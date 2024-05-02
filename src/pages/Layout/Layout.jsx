import { Suspense } from "react";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header"

const Layout = () => {

    return (
        <>  
            <Suspense>
                <Header/>
            </Suspense>
            <main className="main" >
                <Suspense>
                    <Outlet/>
                </Suspense>
            </main>
            <Suspense>
                <Footer/>
            </Suspense>
        </>
    )
}

export default Layout;