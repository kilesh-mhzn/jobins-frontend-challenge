import { Sidebar } from "@components/commons/sidebar/sidebar.component";
import "./App.css";
import { Flex } from "@ui/layout/flex";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Flex container>
        <div
          style={{
            flex: "0 0 250px",
            position: "fixed",
            height: "100%",
            overflowY: "auto",
            
          }}
        >
          <Sidebar />
        </div>
        {/* TODO: fix this */}
        <div
          style={{
            marginLeft: "200px",
            padding: "24px",
            flexGrow: "1",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </div>
      </Flex>
    </>
  );
}

export default App;
