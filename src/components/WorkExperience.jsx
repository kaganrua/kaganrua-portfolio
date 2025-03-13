import React, {useState} from 'react'
import Modal from 'react-modal'
import HTMLFlipBook from 'react-pageflip';

function WorkExperience() {

    const [currentPage, setCurrentPage] = useState(0); // State to track the current page
    const [isAnimating, setIsAnimating] = useState(false); // Track animation state
    const [animationDirection, setAnimationDirection] = useState(""); // Track direction

    const totalPages = 3; // Total number of pages
    const pages = [
        {
          id: 1,
          title: "Page 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eveniet, consequuntur tenetur facilis sit molestias sequi, exercitationem voluptatum repudiandae fuga labore facere pariatur. In vero, nisi dolorum mollitia molestias odio!" + "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam omnis inventore nostrum fugiat iste quibusdam deserunt reiciendis, animi odit modi quis tempore cupiditate veritatis, temporibus, quae voluptatem! Dolorum, voluptatem et." + "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, minus officia? Nam amet quas possimus vitae delectus voluptatum at, dolorum ex dolor eligendi fugiat modi! Earum fuga maiores officia totam?",
        },
        {
          id: 2,
          title: "Page 2",
          content: "This is the content of page 2.",
        },
        {
          id:3,
          title: "Page 3",
          content: "This is the content of page 3.",
        },
      ];


    function onRequestClose() {
        // Logic for closing the modal
      }
    
      // Handlers for navigating pages
      function goToNextPage() {
        
        if (currentPage < pages.length - 1) {
            setAnimationDirection("next");
            triggerAnimation(() => setCurrentPage(currentPage + 1));
        }
      };
    
      function goToPreviousPage() {
        if (currentPage > 0) {
            setAnimationDirection("previous");

           triggerAnimation(() => setCurrentPage(currentPage - 1));
        }
      };

      

      const triggerAnimation = (callback) => {
        setIsAnimating(true); // Start animation
        setTimeout(() => {
          callback(); // Change the page
          setIsAnimating(false); // Reset animation state
        }, 600); // Match the animation duration
      };
    



    
  const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    
      },
  }

  function onRequestClose() {


  }
  
  return (
    <div name="workExperience" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    See My Work Experience  
                </p>

                <Modal isOpen={true} className="fixed inset-0 flex items-center justfiy-center flex-col bottom-0" overlayClassName="fixed inset-0 bg-black bg-opacity-50" style={modalStyles}> 

                    
                <div className="w-11/12 max-w-3xl p-6 rounded-lg shadow-lg bg-gradient-to-r from-teal-900 to-indigo-900 text-white">
                {/* Close Button */}
                <button
                    onClick={onRequestClose}
                    className="absolute top-3 right-3 text-gray-100 hover:text-gray-300"
                >
                    ✖
                </button>

                {/* Modal Content */}
                
                {/* Left Page */}

                <div className="flex items-center h-full relative">

                <div className={`w-1/2 p-6 from-gradient-r from-teal-800 to-indigo-900 text-white border-r border-indgo-900 shadow-lg flex flex-col justify-between ${animationDirection === "next"
              ? "animate-pageFlipNext"
              : animationDirection === "previous"
              ? "animate-pageFlipPrevious"
              : ""
          }`}>
                {pages[currentPage] ? (
                  <>
                    <h2 className="text-2xl font-bold mb-4">
                      {pages[currentPage].title}
                    </h2>
                    <p className="text-lg">{pages[currentPage].content}</p>
                  </>
                ) : (
                  <div className="text-center text-gray-400">Empty Page</div>
                )}
              </div>



                {/* Right Page */}
              <div className={`w-1/2 items-center flex-items p-6 from-gradient-r from-white to-indigo-900 text-white shadow-lg flex flex-col justify-between  ${animationDirection === "next"
              ? "animate-pageFlipNext"
              : animationDirection === "previous"
              ? "animate-pageFlipPrevious"
              : ""
          }`}>
                {pages[currentPage + 1] ? (
                  <>
                    <h2 className="text-2xl font-bold mb-4">
                      {pages[currentPage + 1].title}
                    </h2>
                    <p className="text-lg">{pages[currentPage + 1].content}</p>
                  </>
                ) : (
                  <div className="text-center text-gray-400">Empty Page</div>
                )}
              </div>
                </div>
              


                <div className="flex  justify-between items-center mt-6">
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 0}
                  className={`px-4 py-2 bg-gray-700 rounded-lg ${
                    currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
                  }`}
                >
                  Previous
                </button>
                <span className="text-lg">{`${currentPage + 1} / ${pages.length}`}</span>
                <button
                  onClick={goToNextPage}
                  disabled={false}
                  className={`px-4 py-2 bg-gray-700 rounded-lg ${
                    currentPage === pages.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-600"
                  }`}
                >
                  Next
                </button>
              </div>


            </div>
                </Modal>



                
            </div>
        
        </div>
    </div>
  )
}

export default WorkExperience
