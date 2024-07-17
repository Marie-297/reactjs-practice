import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

// Layout
import RootLayout from "./layouts/RootLayout";

// Pages
import Transactions from "./pages/Transactions";
import Content from "./components/Content";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import { db, auth } from "./firebase/config";
import { doc, getDoc } from "firebase/firestore";



const App = () => {

  const [userDetails, setUserDetails] = useState(null)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //Fetch user details
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setUserDetails(docSnap.data())
        } else {
          setUserDetails(null)
          console.log("user not found")
        }
      }
      setLoading(false)
    })
    return () => unsubscribe()
  },[]);

  if (loading) {
    return(
      <div style={styles.loadingContainer}>
        <div>Loading...</div>
      </div>
    )
  }
  // Create routes based on user authentication state
  const routes = createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={userDetails ? <Navigate to="/dashboard" /> : <Home />}
      />
      <Route
        path="signup"
        element={userDetails ? <Navigate to="/dashboard" /> : <SignUp />}
      />
      <Route
        path="login"
        element={userDetails ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="dashboard"
        element={userDetails ? <Dashboard /> : <Navigate to="/login" />}
      >
        <Route index element={<Content />} />
        <Route path="transactions" element={<Transactions />} />
      </Route>
    </Route>
  );

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};



const styles = {
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Here we set the height of the loading container to the entire screen
  },
};

export default App;
