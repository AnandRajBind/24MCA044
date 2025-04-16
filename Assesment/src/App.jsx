import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AppBar, Tabs, Tab, Container } from '@mui/material'
import TopUsers from './components/TopUsers.jsx'
import TrendingPosts from './components/TrendingPosts.jsx'
import Feed from './components/Feed.jsx'
import './App.css'

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Top Users" component={Link} to="/" />
          <Tab label="Trending Posts" component={Link} to="/trending" />
          <Tab label="Feed" component={Link} to="/feed" />
        </Tabs>
      </AppBar>

      <Container className="page-container">
        <Routes>
          <Route path="/" element={<TopUsers />} />
          <Route path="/trending" element={<TrendingPosts />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
