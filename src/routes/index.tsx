import { Routes, Route } from "react-router-dom";

import { FeedRepositorie } from "../pages/FeedRepositorie";
import { Repository } from "../pages/Repository";

export function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<FeedRepositorie />} />
      <Route path="/repositories/:repository/*" element={<Repository />} />
    </Routes>
  );
}
