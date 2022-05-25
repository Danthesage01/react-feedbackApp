import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FeedbackList from "./components/FeedbackList";
import Hero from "./components/Hero";
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from "./context/FeedbackContext"

function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Hero />
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
            </>
          }>
          </Route>
          <Route path="/about" element={ <AboutPage />}/>
        </Routes>
      </div>
      <AboutIconLink />
    </Router>
    </FeedbackProvider>
  )
}

export default App;
