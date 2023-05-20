import { useLocation } from "react-router-dom";
import HorizontalLayout from "./shared/HorizontalLayout";
import VerticalLayout from "./shared/VerticalLayout";
import PostBook from "./pages/PostBook";
import Notification from "./pages/Notification";


function App() {
  const location = useLocation();
  const category = location.pathname

  const componentMap =  {
    '/': <PostBook />,
    '/notifications': <Notification/>,
  }

  const selectedComponent = componentMap[category]

  return (
      <div className="bg-no-repeat bg-cover  h-screen w-full overflow-hidden relative">
            {/* Desktop Layout */}
            <HorizontalLayout className={"sm:hidden md:hidden"}>
                {selectedComponent}
            </HorizontalLayout>

            {/* tab Layout */}
            <VerticalLayout className={"xl:hidden lg:hidden"}>
                {/* {selectedComponent} */}
            </VerticalLayout>
        </div>
  )
}

export default App;
