const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-center text-white p-3 mb-3 rounded-xl">
      {children}
    </div>
  );
};

export default Error;
