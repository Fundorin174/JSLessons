import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("app2/App"));
const ModuleBtn = React.lazy(() => import("app2/ModuleBtn"));


const App = () => {
  return (
    <div>
      <div style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "greenyellow"
      }}>
        <h1>Хедер</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteApp />
        <ModuleBtn />
      </Suspense>
    </div>)
}


export default App;
