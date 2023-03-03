import { createBrowserRouter, IndexRouteObject, NonIndexRouteObject, useMatches } from 'react-router-dom';
import {NewAppView} from "Frontend/views/newapp.js";
import {Testing} from "Frontend/views/tryingMyOwn.js";

const router = createBrowserRouter([
    { path: '/', element: <NewAppView /> },
    { path: '/testing', element: <Testing />},
]);
export default router;
