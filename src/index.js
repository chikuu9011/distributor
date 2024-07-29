

import {
  RouterProvider
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import routes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes} />

);


