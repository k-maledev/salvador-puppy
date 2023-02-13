const styles = {
  pageContainer:
    "max-w-2xl mx-auto sm:px-10 flex flex-col items-center px-4 sm:mt-16 mt-8 sm:mb-24 mb-12",
  container: "w-full max-w-2xl  mx-auto sm:px-10 px-4",
  pageHeading: "xs:text-3xl text-2xl pb-6",
  absoluteCenter: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  flexCenter: "flex justify-center items-center",
  columnCenter: "flex flex-col items-center",
  buttonWhite:
    "xs:w-auto w-full xs:text-xl text-lg xs:px-10 px-4 xs:py-2.5 py-1.5 rounded-lg text-center font-medium tracking-widest transition-all drop-shadow-lg hover:drop-shadow-xl cursor-pointer hover:translate-y-[-4%] active:translate-y-[-2%] transition-all duration-100 bg-white text-[#333] disabled:bg-gray-900 disabled:border disabled:border-gray-700 disabled:text-gray-700 disabled:cursor-not-allowed disabled:transform-none disabled:drop-shadow-none",
  buttonOutlinedWhite:
    "xs:w-auto w-full xs:text-xl text-lg xs:px-10 px-4 xs:py-2.5 py-1.5 rounded-lg text-center font-medium tracking-widest transition-all drop-shadow-lg hover:drop-shadow-xl cursor-pointer hover:translate-y-[-4%] active:translate-y-[-2%] transition-all duration-100 border-2 border-[#f0f0f0] text-[#f0f0f0] disabled:border-gray-500 disabled:text-gray-500 disabled:cursor-not-allowed disabled:transform-none disabled:drop-shadow-none",
  modalContainer:
    "fixed top-0 right-0 bottom-0 left-0 z-50 flex flex-col justify-center items-center xs:p-8 p-4 ",
  modalBackdrop:
    "absolute top-0 right-0 bottom-0 left-0 -z-10 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm",
  modalContent:
    "w-full max-w-xs overflow-scroll flex flex-col justify-center items-center",
};

export default styles;
