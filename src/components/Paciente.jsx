const Paciente = ({ paciente }) => {
  const { nombre, propietario, email, fecha, sintomas } = paciente;

  return (
    <div>
      <div className="m-3 bg-white shadow-md px-10 py-5 rounded-xl">
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
