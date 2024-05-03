import { Suspense } from "react";
import Footer from "components/footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "components/header/Header"
import BottomLogo from "components/BottomLogo/BottomLogo";

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
                <BottomLogo/>
                <Footer/>
            </Suspense>
        </>
    )
}

export default Layout;