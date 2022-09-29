import { Route, Routes } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import Homepage from '../Components/HomepageMain';
import Packages from "./Packages";


export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      {/* <Route path="/inspirations" element={<Heading>Inspirations</Heading>} /> */}
      <Route path="/forum" element={<Heading>Forum</Heading>} />
      <Route path="/packages" element={<Packages/>} />
      <Route path="/publish" element={<Heading>Publish</Heading>} />
      {/* <Route path="/signin" element={<Heading>Signin</Heading>} /> */}
    </Routes>
  );
}
