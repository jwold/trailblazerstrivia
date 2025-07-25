import { useState } from "react";
import GameSetup from "../components/game-setup";
import GameInterface from "../components/game-interface";
import VictoryScreen from "../components/victory-screen";
import { BookOpen, HelpCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type GamePhase = "setup" | "playing" | "victory";

export default function Home() {
  const [gamePhase, setGamePhase] = useState<GamePhase>("setup");
  const [gameCode, setGameCode] = useState<string>("");
  const [showRules, setShowRules] = useState(false);

  const handleGameStart = (code: string) => {
    setGameCode(code);
    setGamePhase("playing");
  };

  const handleGameEnd = () => {
    setGamePhase("victory");
  };

  const handleNewGame = () => {
    setGamePhase("setup");
    setGameCode("");
  };

  const handlePlayAgain = () => {
    setGamePhase("playing");
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b-4 border-gray-300">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div 
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onClick={() => {
                setGamePhase("setup");
                // Keep gameCode so Resume button can appear in header
              }}
            >
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2L2 7V17C2 18.1 2.9 19 4 19H8V12H16V19H20C21.1 19 22 18.1 22 17V7L12 2Z"/>
                  <path d="M8 19V21C8 22.1 8.9 23 10 23H14C15.1 23 16 22.1 16 21V19H8Z"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Trailblazers Trivia</h1>
            </div>
            
            {/* Header Right Side - Resume Game, End Game and Help Buttons */}
            <div className="flex items-center gap-3">
              {gamePhase === "setup" && gameCode && (
                <Button
                  onClick={() => setGamePhase("playing")}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 font-semibold transition-all duration-200"
                >
                  Resume Game
                </Button>
              )}
              {gamePhase === "playing" && (
                <Button
                  onClick={handleGameEnd}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 font-semibold transition-all duration-200"
                >
                  End Game
                </Button>
              )}
              <Button
                onClick={() => setShowRules(!showRules)}
                className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg p-2 transition-all duration-200"
                size="sm"
              >
                <HelpCircle size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Banner - Only show on setup phase */}
      {gamePhase === "setup" && (
        <div className="bg-gray-200 relative overflow-hidden border-b-2 border-gray-300">
          <div className="container mx-auto px-4 py-6 max-w-3xl relative z-10">
            <div className="text-center">
              {/* Floating Bible Icons */}
              <div className="absolute top-4 left-8 opacity-30 animate-bounce">
                <BookOpen size={32} className="transform rotate-12 text-gray-500" />
              </div>
              <div className="absolute top-8 right-12 opacity-30 animate-bounce delay-300">
                <BookOpen size={24} className="transform -rotate-12 text-gray-500" />
              </div>
              <div className="absolute bottom-6 left-16 opacity-30 animate-bounce delay-500">
                <BookOpen size={28} className="transform rotate-6 text-gray-500" />
              </div>
              <div className="absolute bottom-4 right-8 opacity-30 animate-bounce delay-700">
                <BookOpen size={20} className="transform -rotate-6 text-gray-500" />
              </div>
              
              {/* Main Content */}
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">Epic Trivia Battles!</h2>
                <p className="text-lg md:text-xl mb-4 text-gray-600 font-medium">Challenge your teams • Test knowledge • Have amazing fun!</p>
                <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm md:text-base text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"></div>
                    <span>Up to 10 Teams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse delay-200"></div>
                    <span>4,000+ Questions</span>
                  </div>
                </div>
                
                {/* Call to Action */}
                <Button
                  onClick={() => setShowRules(true)}
                  className="bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 font-bold py-2 px-6 text-base rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-300"
                >
                  <HelpCircle className="mr-2" size={18} />
                  See How It Works!
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <pattern id="crosses" patternUnits="userSpaceOnUse" width="20" height="20">
                    <path d="M10 5 L10 15 M5 10 L15 10" stroke="gray" strokeWidth="0.5" fill="none"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#crosses)" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-3xl">
        {gamePhase === "setup" && (
          <GameSetup 
            onGameStart={handleGameStart} 
            activeGameCode={gameCode}
            onResumeGame={() => setGamePhase("playing")}
          />
        )}
        
        {gamePhase === "playing" && gameCode && (
          <GameInterface 
            gameCode={gameCode} 
            onGameEnd={handleGameEnd}
          />
        )}
        
        {gamePhase === "victory" && gameCode && (
          <VictoryScreen 
            gameCode={gameCode}
            onNewGame={handleNewGame}
          />
        )}
      </main>
      {/* Rules Overlay */}
      {showRules && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowRules(false)}
        >
          <Card 
            className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-xl font-bold text-gray-800">How to Play Trailblazers Trivia</CardTitle>
              <Button
                onClick={() => setShowRules(false)}
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-800"
              >
                <X size={20} />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Game Setup</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Create 2-10 teams with unique names</li>
                  <li>Set a target score between 10-50 points</li>
                  <li>Teams are automatically assigned biblical names</li>
                  <li>The game randomly selects which team goes first</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Gameplay</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Teams take turns answering Bible trivia questions</li>
                  <li>Choose between Easy (1 point) or Hard (3 points) questions</li>
                  <li>The game leader reads the question aloud to the active team</li>
                  <li>Answers are blurred by default - tap the eye icon to reveal them</li>
                  <li>Mark answers as correct, incorrect, or skip to the next question</li>
                  <li>Teams alternate turns after each question, regardless of correctness</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Scoring</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Easy Questions:</strong> 1 point each</li>
                  <li><strong>Hard Questions:</strong> 3 points each</li>
                  <li>Only correct answers earn points</li>
                  <li>Incorrect or skipped questions earn no points</li>
                  <li>First team to reach the target score wins!</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Features</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Edit team names during gameplay by clicking the edit icon</li>
                  <li>View question history to see previous questions and answers</li>
                  <li>Visual feedback animations for correct and incorrect answers</li>
                  <li>Bible references provided with each question for learning</li>
                  <li>Mobile-friendly interface optimized for touch screens</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Game Leader Tips</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Read questions clearly and give teams time to think</li>
                  <li>Use the Bible references to discuss answers and teach</li>
                  <li>Keep the game moving - don't spend too long on one question</li>
                  <li>Encourage teamwork and discussion within teams</li>
                  <li>Have fun and celebrate correct answers together!</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {/* Confetti Container - Hidden */}
      <div id="confetti-container" className="fixed inset-0 pointer-events-none z-50 hidden"></div>
    </div>
  );
}
