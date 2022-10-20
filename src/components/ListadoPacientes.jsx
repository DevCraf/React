import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente }) => {
  return (
    <>
      {pacientes.length != 0 ? (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
          <h2 className="font-black text-3xl text-center">
            Actualmente tienes ({pacientes.length}) Pacientes{" "}
          </h2>
          <p className="text-xl mt-5 mb-5 text-center">
            Administra tu{" "}
            <span className="text-indigo-600 font-bold ">
              Pacientes y citas{" "}
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
            />
          ))}
        </div>
      ) : (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
          <h2 className="font-black text-3xl text-center">NO hay pacientes </h2>
          <p className="text-xl mt-5 mb-5 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold ">
              y aparecerán en este lugar
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default ListadoPacientes;
