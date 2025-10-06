import './App.css'
import {BrowserRouter, Navigate, NavLink, Outlet, Route, Routes, useNavigate, useParams} from "react-router-dom";
import LoginPage from "./LoginPage.tsx";
import LogoutPage from "./LogoutPage.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";
import AuthRoute from "./context/AuthRoute.tsx";
import useAuth from "./context/useAuth.ts";

function Home() {

  return <h2>Página de inicio</h2>;
}

function About() {
  const auth = useAuth();
  return (
    <>
      <h2>Acerca de</h2>
      {auth.user?.isAdmin && (
        <button>Editar blogs</button>
      )}
      {/* Aquí se renderizarán las rutas anidadas */}
      <Outlet></Outlet>
    </>
  )
}

function User() {
  // Creamos una variable que nos permita usar este Hook
  const navigate = useNavigate();

  /* En esta función haremos uso del useNavigate para volver al
	BlogPage */
  const returnToBlog = () => {
    /* Aquí la utilizamos como una función y le indicamos la ruta
		hacia donde queremos navegar */
    navigate('/');
    // navigate(-1); // Regresa a la página anterior
    // navigate(1); // Avanza a la página siguiente
  }
  const {id} = useParams();
  return (
    <>
      <h2>Usuario {id}</h2>
      <button onClick={returnToBlog}>Regresar al list use</button>
    </>
  );
}

function App() {
  // Generalmente se crea un arreglo de rutas
  const routes = [
    {to: '/', text: 'Home'},
    {to: '/about', text: 'About'},
    {to: '/user', text: 'User'},
    {to: '/login', text: 'Login'},
    {to: '/logout', text: 'Logout'}
  ];

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <nav>
            {/*<Link to="/">Inicio</Link> |*/}
            {/*<NavLink to="/about"*/}
            {/*         style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}>*/}
            {/*  Acerca</NavLink> |*/}
            {/*<NavLink*/}
            {/*  style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}*/}
            {/*  to="/user/42">Usuario 42</NavLink>*/}
            {routes.map(({to, text}) => (
              <NavLink
                key={to}
                style={({isActive}) => ({color: isActive ? 'red' : 'blue', marginRight: '10px'})}
                to={to === '/user' ? `${to}/42` : to}
              >
                {text}
              </NavLink>
            ))}
          </nav>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/logout" element={<LogoutPage/>}/>
            <Route path="/about" element={<About/>}>
              {/* Rutas anidadas */}
              <Route index element={<Navigate to="contact"/>}/>
              <Route path="contact" element={<h3>Contacto</h3>}/>
            </Route>
            <Route path="/user/:id"
                   element={
                     <AuthRoute>
                       <User/>
                     </AuthRoute>
                   }
            />
            <Route path="**" element={<p> Not Found </p>}/>
          </Routes>
        </AuthProvider>

      </BrowserRouter>
    </>
  )
}

export default App
