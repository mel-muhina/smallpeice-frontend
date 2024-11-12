"use client"; 
import Image from 'next/image'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import { useState, useContext, useEffect } from 'react';

export default function subjectsPage() {
    const [question, setQuestion] = useState([])
    const [answer, setAnswer] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentInput, setCurrentInput] = useState('')
    const [buttonLabel, setButtonLabel] = useState('Beep')
    // const { resultData, setResultData } = useContext(ResultContext);


  const questions = {
    "allQuestions": [
      {
        "id": 1,
        "question": "Which of these subjects do you enjoy the most?",
        "option": ["English", "Maths", "Science", "History", "Geography", "Languages", "Computing", "Art/Design", "Technology", "RS", "Business", "PE"]
      },
      {
        "id": 2,
        "question": "Which of these subjects do you enjoy the least?",
        "option": ["English", "Maths", "Science", "History", "Geography", "Languages", "Computing", "Art/Design", "Technology", "RS", "Business", "PE"]
      },
      {
        "id": 3,
        "question": "What do you feel comfortable at?",
        
      },
      {
        "id": 4,
        "question": "What is a cause or issue you feel strongly about?",
        
      },
      {
        "id": 5,
        "question": "Would you like the results in a video or text format?",
        "option": ["Text", "Video"]
      }
    ]
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex => {
        if (prevIndex < question.length - 1) {
            return prevIndex +1;
        } else {
            return prevIndex;
        }
    })

    setAnswer((prevAnswers) => [
        ...prevAnswers,
        currentInput
    ])

    setCurrentInput('')
  }

  function handleInput(e) {
    setCurrentInput(e.target.value)
}

  async function handleSubmit(e) {
    e.preventDefault();
  }
//     try {
//         const response = await fetch(`https://first-impressions-frontend.onrender.com/getRecommendations`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 ans1: answer[0],
//                 ans2: answer[1],
//                 ans3: answer[2],
//                 ans4: answer[3],
//                 ans5: answer[4],
//             })
//             })

//             const data = await response.json()
//             setResultData(data)
//             Navigate('/results')

//             console.log(data)

//     }  catch (err) {
//         console.log(err);
//   }
//   setCurrentInput('')
// }

const button = (answer) => {
    if (answer.length < 4) {
        return "Next"
    } else {
        return "Submit"
    }
}

const handleButton = (e) => {
    if (currentIndex < 4) {
       handleNext()
    } else {
        handleSubmit(e);
    }
}

  useEffect(() => {
    setQuestion(questions.allQuestions)
  }, [])


  return (
    <div className="grid items-center justify-items-center min-h-100vh p-6 pb-0 gap-0 overflow-auto hide-scrollbar font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-blue-950 to-blue-1000">
    <div className='px-0 py-2 aspect-w-16 aspect-h-9'>
     <Image src="/smallpeice_logo.png" alt="smallpeice logo" width={60} height={60} className="pd-2"/>
    </div>
   {/* <h1 className="sm:w-[70%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-5xl xl:text-6xl lg:text-5xl md:text-center  font-bold text-transparent animate-fade-in-text bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500 px-4 py-4 ">Who would you like to talk to?</h1> */}
   
   <form onSubmit={handleSubmit}>            
     <div key={question} className='items-center justify-items-center text-center'>
        <h1 className="sm:w-[80%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-4xl xl:text-6xl lg:text-5xl md:text-center  font-bold text-transparent animate-fade-in-text bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500 px-4 py-4 ">{question[currentIndex]?.question}</h1>
        
        <div className='m-8 grid grid-cols-3 w-[100%] md:grid-cols-3 justify-around md:gap-2'>
        {question[currentIndex]?.option && question[currentIndex].option.length > 0 ? (
            question[currentIndex]?.option.map((option, index) => (
              <button
                 key={index}
                 type="button"
                 className="bg-blue-700 rounded-md m-1 w-22 md:px-4 py-2 md:py-2 text-md md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                 onClick={() => setCurrentInput(option)}
              >
                {option}
              </button>
            ))
        ) : (
            <input className="border border-gray-300 rounded-md sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] w-[100%] px-8 py-4 md:px-12 focus:outline-none" placeholder='Answer' name={`answer_${question[currentIndex]?.id}`}  value={currentInput} type="text" onChange={handleInput} required />
            
        )}
        </div>
      

        {/* <button className="input-button" onClick={handleButton}>{button(answer)}</button> */}
  

   <Link href="#" className="flex justify-center items-center w-[100%] m-4"><button className="sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] w-[100%] px-8 py-4 md:px-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg md:text-xl m-4 font-semibold rounded-xl shadow-md hover:bg-purple-500 active:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 " onClick={handleButton}>
   {button(answer)}
   </button>
   </Link>
   </div>
   </form>
</div>
  )
}
