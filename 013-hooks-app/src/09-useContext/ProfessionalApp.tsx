import {RouterProvider} from "react-router";
import {appRouter} from "@/09-useContext/router/app.router.tsx";
import {UserContextProvider} from "@/09-useContext/context/UserContext.tsx";

export const ProfessionalApp= () => {
  return (
    <UserContextProvider>
      <div className="bg-gradient flex flex-col">
        <RouterProvider router={appRouter}/>
      </div>
    </UserContextProvider>

  )
}