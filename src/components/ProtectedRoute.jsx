import { Navigate } from "react-router-dom";

function ProtectedRoute({ isSignedIn, children }) {
  if (!isSignedIn) {
    return <Navigate to="/initiation" replace />;
  }

  return children;
}

export default ProtectedRoute;
