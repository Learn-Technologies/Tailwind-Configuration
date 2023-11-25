import React from "react";
import { useNavigate } from "react-router";
function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <p className="text-red-700 text-3xl">homepage</p>
      <button onClick={() => navigate("/about")}>Navigate to Aboutpage</button>
    </div>
  );
}

export default HomePage;
