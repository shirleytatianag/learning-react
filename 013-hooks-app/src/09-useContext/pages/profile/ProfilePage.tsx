import {Button} from "@/components/ui/button.tsx";
import {use} from "react";
import {UserContext} from "@/09-useContext/context/UserContext.tsx";

export const ProfilePage = () => {
  // const {user, logout} = useContext(UserContext);
  const { user, logout } = use(UserContext)

  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen">
      <h1 className="text-4xl">Perfil del usuario</h1>
      <hr/>
      <pre className="my-4 w-[80%] overflow-auto">
        {JSON.stringify(user, null, 2)}
      </pre>
        <Button variant="destructive" onClick={logout}>Salir</Button>
    </div>
  )
}