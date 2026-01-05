import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Eye, EyeOff } from 'lucide-react';

const GuessTheNumber = () => {
  const [targetNumber, setTargetNumber] = useState<number>(0);
  const [guess, setGuess] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [gameStatus, setGameStatus] = useState<'playing' | 'won'>('playing');
  const [guessHistory, setGuessHistory] = useState<number[]>([]);
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setAttempts(0);
    setMessage("I'm thinking of a number between 1 and 100...");
    setGameStatus('playing');
    setGuessHistory([]);
  };

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      setMessage('Please enter a valid number between 1 and 100');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    setGuessHistory([...guessHistory, numGuess]);

    if (numGuess === targetNumber) {
      setMessage(`🎉 Correct! You guessed it in ${newAttempts} ${newAttempts === 1 ? 'try' : 'tries'}!`);
      setGameStatus('won');
    } else if (numGuess > targetNumber) {
      setMessage(`📉 Too high! Try again.`);
    } else {
      setMessage(`📈 Too low! Try again.`);
    }

    setGuess('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow empty string or positive integers
    if (value === '' || /^\d+$/.test(value)) {
      setGuess(value);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && gameStatus === 'playing') {
      handleGuess();
    }
  };

  return (
    <Card className="bg-gradient-card backdrop-blur-sm border-border/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>🎯 Guess the Number</span>
          <Badge variant="secondary">Attempts: {attempts}</Badge>
        </CardTitle>
        <CardDescription>
          Test your logic! Can you guess the number in the fewest tries?
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-center p-4 bg-surface/50 rounded-lg border border-border/20">
          <p className="text-lg font-medium">{message}</p>
        </div>

        {guessHistory.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-foreground/70">Previous guesses:</span>
            {guessHistory.map((g, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {g}
              </Badge>
            ))}
          </div>
        )}

        {gameStatus === 'playing' ? (
          <div className="flex gap-2">
            <input
              type="text"
              inputMode="numeric"
              value={guess}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Enter 1-100"
              className="flex-1 px-4 py-2 bg-background border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button onClick={handleGuess} className="px-6">
              Guess
            </Button>
          </div>
        ) : (
          <Button onClick={startNewGame} className="w-full">
            🎮 Play Again
          </Button>
        )}

        <div className="text-center text-sm text-foreground/50">
          <p>💡 Tip: Use binary search strategy for optimal results!</p>
        </div>

        <div className="pt-4 border-t border-border/20">
          <div className="flex items-center justify-center gap-2 mb-3">
            {showDebug ? <Eye className="h-4 w-4 text-primary" /> : <EyeOff className="h-4 w-4 text-foreground/50" />}
            <Switch
              checked={showDebug}
              onCheckedChange={setShowDebug}
              aria-label="Toggle debug view"
            />
            <span className="text-sm text-foreground/70">Show React State</span>
          </div>

          {showDebug && (
            <div className="p-4 bg-surface/80 border border-primary/20 rounded-lg space-y-2 font-mono text-xs animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center justify-between pb-2 border-b border-border/20">
                <span className="text-primary font-semibold">🔍 Live State Updates</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-foreground/70">targetNumber:</span>
                  <span className="text-primary font-semibold">{targetNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">guess:</span>
                  <span className="text-foreground">{guess === '' ? '""' : guess}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">attempts:</span>
                  <span className="text-foreground">{attempts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">gameStatus:</span>
                  <span className="text-foreground">"{gameStatus}"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">guessHistory:</span>
                  <span className="text-foreground">[{guessHistory.join(', ')}]</span>
                </div>
                <div className="pt-2 border-t border-border/20">
                  <span className="text-foreground/70">message:</span>
                  <div className="text-foreground mt-1 break-words">"{message}"</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GuessTheNumber;
