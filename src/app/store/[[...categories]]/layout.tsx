
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <nav>Navegación de las categoriaas</nav>
            {children}
        </main>
    )
}