import { getHomePage, route404 } from "../controllers";
import books from "./books";
import authors from "./authors";
import categories from "./categories";

export default (app) => {
    app.get('/', getHomePage)

    books(app)

    authors(app)

    categories(app)

    app.get("*", route404)
}