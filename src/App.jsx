import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { useState } from 'react'
import {generateWorkout} from './utils/functions'

function App() {
  const[workout, setWorkout]= useState(null)
  
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  const updateWorkout = () => {
    if(muscles.length < 1){
      return
    }
    let newWorkOut = generateWorkout({poison,muscles,goal})
    setWorkout(newWorkOut)
  }

  return (
    <>
    <main className=' min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator poison={poison} setPoison={setPoison}
      muscles={muscles} setMuscles={setMuscles}
      goal={goal} setGoal={setGoal}
      updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
    </>
  )
}

export default App
