import { useSelector } from "react-redux";
import { AdminRouters, PlaceRouters, PrivateRouters, PublicRouters } from "./Routers/";
import { NavBar } from "./Public/Components/";
import { NavBarUser } from "./Private/Components/NavBarUser";
import { NavBarPlace } from "./Places/Components";

function App() {

  const { user, status, errorMessage } = useSelector(state => state.user)

  return (

    <>

      <header className="bg-[#fafafa]">
        {
          (status === 'authenticated') ?

            (user.role == 'user') ?
              <NavBarUser />

              :
              (user.role == 'place') ?
                <NavBarPlace />

                :
                <NavBarUser />

            :
            <NavBar />
        }


      </header>

      <main className="bg-[#fafafa]">
        {/* <p>user: {user?.role}</p>
        <p>status: {status}</p> */}
        {
          (status === 'authenticated') ?

            (user.role == 'user') ?
              <PrivateRouters />

              :
              (user.role == 'place') ?
                <PlaceRouters />

                :
                <AdminRouters />

            :
            <PublicRouters />
        }

      </main>

      <footer className="bg-[#fafafa]">

      </footer>

    </>

  );
};

export default App
