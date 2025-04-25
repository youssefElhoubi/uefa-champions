"use client"

import { useState,useEffect } from "react"
import MatchCard from "./components/MatchCard"
import MatchDetails from "./components/MatchDetails"
import Pagination from "./components/Pagination"
import { matchData } from "./data/matchData"
import "./App.css"

function App() {
  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await fetch('https://v3.football.api-sports.io', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '29a55704413f9ecc2ad7c78677ffe340', // Replace with your real API key
            'x-rapidapi-host': 'v3.football.api-sports.io',
          },
        });

        const data = await response.json();
        console.log(data.response); // Based on API structure
        console.log(data);
      } catch (error) {
        console.error('Error fetching leagues:', error);
      }
    };

    fetchLeagues();
  }, []);
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedMatch, setSelectedMatch] = useState(null)
  const matchesPerPage = 2
  const totalPages = Math.ceil(matchData.length / matchesPerPage)

  // Get current matches
  const indexOfLastMatch = currentPage * matchesPerPage
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage
  const currentMatches = matchData.slice(indexOfFirstMatch, indexOfLastMatch)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    setSelectedMatch(null)
  }

  const handleMatchClick = (match) => {
    setSelectedMatch(match)
  }

  const handleBackToResults = () => {
    setSelectedMatch(null)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
            UEFA Champions League
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-300">Quarter-Finals 2024/2025</h2>
        </header>

        {selectedMatch ? (
          <MatchDetails match={selectedMatch} onBack={handleBackToResults} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {currentMatches.map((match) => (
                <MatchCard key={match.id} match={match} onClick={() => handleMatchClick(match)} />
              ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </>
        )}
      </div>
    </main>
  )
}

export default App
