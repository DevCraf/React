const Paciente = () => {
  return (
    <div>
      <div className="m-3 bg-white shadow-md px-10 py-5 rounded-xl">
        <p className="font-black mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case"> Hook</span>
        </p>
        <p className="font-black mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case"> Dante</span>
        </p>
        <p className="font-black mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case"> dante@gmail.com</span>
        </p>
        <p className="font-black mb-3 text-gray-700 uppercase">
          Fecha del Alta: {""}
          <span className="font-normal normal-case"> !0 Diciembre 2022</span>
        </p>
        <p className="font-black mb-3 text-gray-700 uppercase">
          Síntoma: {""}
          <span className="font-normal normal-case">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
            magni unde. Atque unde, excepturi, nisi et quia, autem vitae in
            molestias rem nobis assumenda! Cumque perspiciatis reprehenderit
            molestias pariatur velit.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Paciente;
