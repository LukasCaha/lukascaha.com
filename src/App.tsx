import {
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { GlassCard } from "./GlassCard";
import { isMobile } from 'react-device-detect';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { spawn } from "child_process";
import LandingPage from "./landingPage";
import GlassPage from "./glassPage";
import NotFoundPage from "./notFoundPage";

function App() {
  return (
    <GlassPage>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </GlassPage>

  );
}

export default App;
