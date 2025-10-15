import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link, useNavigate} from "react-router";
import React, {useContext, useState} from "react";
import {UserContext} from "@/09-useContext/context/UserContext.tsx";
import {toast} from "sonner";

export const LoginPage = () => {
  const [userId, setUserId] = useState<string>('');
  const {login} = useContext(UserContext);
  const navigation = useNavigate()
  const handleSubmit = (event:  React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    const result = login(+userId)
    if (!result) {
      toast.error('Usuario no encontrado');
      return;
    }
    navigation('/profile')
  }
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Login Page</h1>
      <hr/>

      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2 my-10">
        <Input type="number" placeholder="ID del usuario" onChange={e => setUserId(e.target.value)} />
        <Button type="submit" > Login</Button>
      </form>
      <Link to="/about">
        <Button variant="ghost"  >Volver a la página principal</Button>
      </Link>
    </div>
  )
}