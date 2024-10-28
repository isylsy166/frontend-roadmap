import {useRoutes} from "react-router-dom";
import App from "../App";
import Roadmap from "../pages/roadmapPage/pc/roadmap";



export default function Router() {

    return useRoutes([
        {
          path: '/',
          element: <App/>,
        },
        {
            path: 'roadmap',
            element: <Roadmap/>,
          },
      ])
}
