import { Navbar, Footer } from "../../Layout"
import { Outlet } from "react-router-dom";



const MainLayout:React.FC = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )

}

export default MainLayout;