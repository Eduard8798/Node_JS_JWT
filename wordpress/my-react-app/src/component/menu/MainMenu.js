import { useMainMenuContext } from "./MyMenuContext";
import {Link} from "react-router-dom";

export default function MainMenu() {
    const { pages } = useMainMenuContext(); // Предполагаем, что pages поступают из контекста

    return (
        <nav>
            <h1>My menu</h1>
            <ul>
                {pages.map(page => (
                    <li key={page.id}>
                        <Link to={page.slug}>
                            {page.title.rendered}
                        </Link>
                    </li> // Добавляем ключ для каждого элемента
                ))}
                <Link to="posts">
                    All posts
                </Link>
            </ul>
        </nav>
    );
}
