import { Outlet } from "react-router";
import Header from "../widgets/header/Header";
import { useModal } from "../contexts/ModalContext";
import Footer from "../widgets/footer/Footer";
import ModalBusket from "../features/modalBusket/ModalBusket";


export default function AppLayout () {
    const { openBusket, modalBusket, closeBusket } = useModal();
 
    return (
        <>
            <Header onClick={openBusket}/>
            <Outlet />
            <Footer />

            {modalBusket && 
            <ModalBusket
                opened={modalBusket}
                onClose={closeBusket}
            ></ModalBusket>}
        </>
    )
}