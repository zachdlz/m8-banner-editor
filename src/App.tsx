const App = () => {
  return (
    <>
      <div className="h-screen m-auto flex justify-center items-center">
        <img
          src={'m8.png'}
          alt="maintenance"
          className="absolute w-32 -z-50 opacity-5"
        />
        <div className="bg-white rounded-full mt-60">
          <p className="text-gray-500 text-xs text-center py-1.5 px-3 bg-gray-100 rounded-full w-fit mx-auto border border-gray-200">
            Site en maintenance / Site under maintenance
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
