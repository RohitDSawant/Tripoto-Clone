import { Route, Routes } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import Homepage from "../Components/HomepageMain";
import Packages from "./Packages";
import Singapore from "../Components/singapore/Singapore";
import Signup from "../Components/Signup";
import Beach from "../Components/beaches/Beach";
import Signin from "../Components/Signin";
import Home_1 from "../Components/Home1";
import PrivateRoute from "../Components/PrivateRoute";
import SingleCardPage from "../Components/SingleCardPage";
import TripPage from "./TripPage";
import Booking from "../Components/Booking";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/inspirations" element={<Heading>Inspirations</Heading>} /> */}
      <Route path="/inspiration/singapore" element={<Singapore />} />
      <Route
        path="/inspiration/beach"
        element={
          // <PrivateRoute>
          <Beach />
          // </PrivateRoute>
        }
      />
      <Route path="/forum" element={<Heading>Forum</Heading>} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/publish" element={<Heading>Publish</Heading>} />
      <Route path="/partnership/:id" element={<SingleCardPage />} />
      <Route path="/TripPage/:id" element={<TripPage />} />
      <Route path="/signin" element={<Home_1 />} />
      <Route path="/booking" element={<Booking/>}/>
      {/* <Route path="/signup" element={<Signup/>} /> */}
    </Routes>
  );
}
