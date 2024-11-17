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
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedOptionsTwo, setSelectedOptionsTwo] = useState([]);
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
        "question": "What do you feel comfortable at doing?",
        
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
    console.log("Selected options", selectedOptions)
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

const handleButton = () => {
  setCurrentIndex((prevIndex) => prevIndex + 1);
  setSelectedOptions([]);
  setCurrentInput("");
}

  useEffect(() => {
    setQuestion(questions.allQuestions)
    console.log("options",selectedOptions)
  }, [selectedOptions])

  const toggleOption = (option) => {
    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(option)) {
        return prevSelected.filter((item) => item !== option);
      } else {
        return [...prevSelected, option];
      }
    });
  };


  return (
    <div className="flex flex-col items-center justify-items-center min-h-100vh py-8 p-6 pb-0 overflow-auto hide-scrollbar font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-blue-950 to-blue-1000">

    <div className='px-0 py-2 aspect-w-16 aspect-h-9'>
     <Image src="/smallpeice-logo_small.png" alt="smallpeice logo" width={50} height={50} className="pd-2"/>
    </div>
   {/* <h1 className="sm:w-[70%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-5xl xl:text-6xl lg:text-5xl md:text-center  font-bold text-transparent animate-fade-in-text bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500 px-4 py-4 ">Who would you like to talk to?</h1> */}
   
   <form onSubmit={handleSubmit}>            
     <div key={question} className='w-full items-center justify-items-center text-center'>
        <h1 className="sm:w-[80%] md:w-[50%] lg:w-[50%] xl:w-[60%] text-4xl xl:text-6xl lg:text-5xl md:text-center  font-bold text-transparent animate-fade-in-text bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500 px-4 py-4 ">{question[currentIndex]?.question}</h1>
        
        <div className='m-4 flex-wrap flex w-[100%] md:w-[60%] justify-around md:gap-2'>
        {question[currentIndex]?.option && question[currentIndex].option.length > 0 ? (
            question[currentIndex]?.option.map((option, index) => (
              <button
                 key={index}
                 type="button"
                 className={`flex-grow basis-[30%] rounded-md m-1 w-22 md:px-4 py-2 md:py-2 text-md md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  selectedOptions.includes(option)
                  ? "bg-blue-600 text-white" // Selected button style
                  : "bg-gray-400 text-white" // Unselected button style
                 }`}
                 onClick={() => toggleOption(option)}
              >
                {option}
              </button>
            ))
        ) : (
            <input className="border border-gray-300 rounded-md text-black sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[80%] w-[80%] px-8 py-4 md:px-12 focus:outline-none" placeholder='Answer' name={`answer_${question[currentIndex]?.id}`}  value={currentInput} type="text" onChange={handleInput} required />
            
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
