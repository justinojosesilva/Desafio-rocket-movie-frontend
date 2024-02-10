import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home"
import { Create } from "../pages/Create"
import { Profile } from "../pages/Profile"
import { Preview } from "../pages/Preview"
import { SearchProvider } from "../hooks/search";

export function AppRoutes() {
  return (
    <SearchProvider>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create/:id" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/preview/:id" element={<Preview />} />
      </Routes>
    </SearchProvider>
  )
}