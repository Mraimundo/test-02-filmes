import { Routes, Route } from "react-router-dom";

import { FeedRepositorie } from "../pages/FeedRepositorie";

export function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<FeedRepositorie />} />
    </Routes>
  );
}
