import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const {workout} = props
  const [header, setHeader] = useState("Welcome to")
  const [title, setTitle] = useState(['The' , 'DANGER', 'Zone'])
  return (
    <SectionWrapper id={'workout'} header={header} title={title}> 
     <div className='flex flex-col gap-4'>
          {workout.map((exercise, i) => {
              return (
                  <ExerciseCard i={i} exercise={exercise} key={i} />
              )
          })}
      </div>
    </SectionWrapper>
  )
}
