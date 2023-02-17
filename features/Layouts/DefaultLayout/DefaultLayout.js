import Footer from "@/features/common/modules/Footer";
import Header from "@/features/common/modules/Header/Header";
import Navigation from "@/features/common/modules/Navigation";

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Navigation />
            {children}
            <Footer />
        </>
    )
};

export default DefaultLayout;