import routesAdmin from "./routes.admin"
import routesClient from "./routes.client"
import { Error404 } from "../pages"
import {BasiscLayout} from "../layouts"

const routes = [
    ...routesAdmin , 
    ...routesClient,
    {layout: "", Error404}
];
export default routes;
// sin ... devuelve [ [{}] [{}] ]
// con ... devuelve el contenido  [ {}  {} ]