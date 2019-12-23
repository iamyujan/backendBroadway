import { getHomePage, route404 } from "../controllers";
import books from "./books";
import authors from "./authors";

export default (app) => {
    app.get('/', getHomePage)

    books(app)

    authors(app)

    app.get("*", route404)
}