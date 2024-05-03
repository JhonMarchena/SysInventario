import { Sidebar } from "../components/Sidebar"

const modulo = ({moduloHijo}) => {

    return(
        <>
            <Sidebar></Sidebar>
            <main>
                {<moduloHijo/>}
            </main>
        
        </>
    )

}

export default modulo