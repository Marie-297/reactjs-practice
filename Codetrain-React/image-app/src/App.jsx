import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mypic from './images/mypic.webp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={mypic} className="logo" alt="Vite logo" />
      </div>
      <h1 className='heading'>STRUGGLES IN LIFE</h1>
      <p className='paragraph'>Life struggles are the threads that weave the intricate tapestry of human existence. From the moment we enter this world, we are met with challenges, obstacles, and uncertainties that shape our journey through life.

      For some, the struggle is a constant companion, a shadow that looms over every decision and action. It may manifest in the form of financial hardship, physical illness, or emotional turmoil. Each day becomes a battle, fought with courage and resilience in the face of adversity.

      Yet, within the depths of struggle lie the seeds of growth and transformation. It is through adversity that we discover the strength within ourselves – the resilience to endure, the perseverance to overcome, and the wisdom to learn from our experiences.

      In the midst of struggle, we often find unexpected sources of support and compassion – the helping hand of a friend, the comforting words of a loved one, or the kindness of a stranger. These moments of connection remind us that we are not alone in our journey, that there is hope even in the darkest of times.

      And as we navigate the winding paths of life, we come to realize that struggle is not a sign of weakness, but a testament to our humanity. It is through our struggles that we define who we are, forging our character and shaping our destiny.

      In the end, it is not the absence of struggle that defines a life well-lived, but rather how we choose to face it. With courage, resilience, and a spirit of perseverance, we can transcend the challenges that lie before us, emerging stronger, wiser, and more compassionate than we were before.
      </p>
      
    </>
  )
}

export default App
