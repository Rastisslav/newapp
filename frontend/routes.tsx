import { createBrowserRouter, IndexRouteObject, NonIndexRouteObject, useMatches } from 'react-router-dom';
import {NewAppView} from "Frontend/views/newapp.js";

const router = createBrowserRouter([
    { path: '/', element: <NewAppView /> },
]);
export default router;
