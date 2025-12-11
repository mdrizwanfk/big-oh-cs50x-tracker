import { useState, useEffect, useRef } from 'react'

type StopwatchState = 'idle' | 'running' | 'stopped'

const Stopwatch = () => {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [centiseconds, setCentiseconds] = useState(0)
  const [state, setState] = useState<StopwatchState>('idle')
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const intervalRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state === 'running') {
      intervalRef.current = window.setInterval(() => {
        setCentiseconds((prev) => {
          if (prev >= 99) {
            setSeconds((prevSec) => {
              if (prevSec >= 59) {
                setMinutes((prevMin) => prevMin + 1)
                return 0
              }
              return prevSec + 1
            })
            return 0
          }
          return prev + 1
        })
      }, 10) // Update every 10ms for centiseconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [state])

  const handleStart = () => {
    setState('running')
  }

  const handleStop = () => {
    setState('stopped')
  }

  const handleReset = () => {
    setState('idle')
    setMinutes(0)
    setSeconds(0)
    setCentiseconds(0)
  }

  const formatTime = (value: number, digits: number = 2) => {
    return value.toString().padStart(digits, '0')
  }

  useEffect(() => {
    // Initialize position to top-right corner
    if (containerRef.current && position.x === 0 && position.y === 0) {
      const rect = containerRef.current.getBoundingClientRect()
      setPosition({
        x: window.innerWidth - rect.width - 20,
        y: 20,
      })
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Don't drag if clicking on a button or its children
    const target = e.target as HTMLElement
    if (target.closest('button')) {
      return
    }

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setIsDragging(true)
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragOffset.x
        const newY = e.clientY - dragOffset.y

        // Constrain to viewport bounds
        const maxX =
          window.innerWidth - (containerRef.current?.offsetWidth || 0)
        const maxY =
          window.innerHeight - (containerRef.current?.offsetHeight || 0)

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragOffset])

  return (
    <div
      ref={containerRef}
      className="fixed z-[9999] pointer-events-auto cursor-move select-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        className="bg-white rounded-2xl shadow-2xl p-6 min-w-[180px] cursor-grab active:cursor-grabbing"
      >
        {/* Time Display */}
        <div className="text-4xl font-mono font-bold text-gray-900 text-center mb-6 tracking-wider">
          {formatTime(minutes)} : {formatTime(seconds)} .{' '}
          {formatTime(centiseconds)}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {/* Reset Button */}
          <button
            onClick={handleReset}
            onMouseDown={(e) => e.stopPropagation()}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M3 21v-5h5" />
            </svg>
            Reset
          </button>

          {/* Start/Stop Button */}
          {state === 'idle' || state === 'stopped' ? (
            <button
              onClick={handleStart}
              onMouseDown={(e) => e.stopPropagation()}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Start
            </button>
          ) : (
            <button
              onClick={handleStop}
              onMouseDown={(e) => e.stopPropagation()}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="6" y="6" width="12" height="12" rx="2" />
              </svg>
              Stop
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Stopwatch
