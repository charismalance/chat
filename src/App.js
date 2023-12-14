import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Chatroom from "./pages/chatroom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="chatroom" element={<Chatroom />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
