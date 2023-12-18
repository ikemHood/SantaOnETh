

function ContentCard({children}) {
 
  return (
    <div className="relative top-[20vh] w-full justify-center flex">
      <div className="w-[300px] py-4 rounded-xl sm:w-[420px] mb-28 bg-white/30 shadow-2xl shadow-purple-400 backdrop-blur-md md:w-[700px] h-[600px] overflow-y-auto flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}

export default ContentCard;