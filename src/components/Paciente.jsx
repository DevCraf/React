const Paciente = ({ paciente, setPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas } = paciente;
  return (
    <div>
      <div className="relative m-3 bg-white shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)] px-10 py-5 rounded-xl">
        <div className="absolute top-1 right-1">
          <div className="flex">
            <button
              className="px-1 block hover:bg-slate-900"
              type="button"
              onClick={() => setPaciente(paciente)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
            <button className="px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 bg-red-800 rounded-full text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className="font-black mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case"> {nombre}</span>
        </p>
        <p className="font-black mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case"> {propietario}</span>
        </p>
        <p className="font-black mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case"> {email}</span>
        </p>
        <p className="font-black mb-3 text-gray-700 uppercase">
          Fecha del Alta: {""}
          <span className="font-normal normal-case"> {fecha}</span>
        </p>
        <p className="font-black mb-3 text-gray-700 uppercase">
          Síntoma: {""}
          <span className="font-normal normal-case">{sintomas}.</span>
        </p>
      </div>
    </div>
  );
};

export default Paciente;
