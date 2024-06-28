import {TwitterFollowCard} from "./TwitterFollowCard.jsx";
import './app.css'

const users = [
    {
        userName: "Juanito0213",
        name: "Juan Leon",
        initialFollow: true
    },
    {
        userName: "F45",
        name: "Felipe Carnde",
        initialFollow: false
    },
    {
        userName: "Felipe45",
        name: "Felipe Crtrtarnde",
        initialFollow: false

    },
    {
        userName: "Felipe45",
        name: "Devuve",
        initialFollow: false
    }
]

export function App() {

    return (
        <div className="app">
            {
                users.map((item, index) =>
                    (
                        <TwitterFollowCard
                            key={index}
                            userName={item.userName}
                            name={item.name}
                            initialFollow={item.initialFollow}
                        ></TwitterFollowCard>)
                )
            }
        </div>

    )
}