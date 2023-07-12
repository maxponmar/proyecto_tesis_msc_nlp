import config from '../../config/config.json';
function Support() {
  return (
    <div className="animate-fadeIn text-center h-[calc(100vh-85px)] flex flex-col items-center justify-center">
      <h2 className="font-bold text-2xl sm:text-3xl">Soporte</h2>
      <p className="py-10 px-10 text-xl ">
        Para cualquier duda o sugerencia por favor contacte con{' '}
        <span className="font-bold">{config.developerName}</span> al correo{' '}
        <a className="cursor-pointer block" href={`mailto:${config.developerEmail}`}>
          {config.developerEmail}
        </a>
      </p>
    </div>
  );
}

export default Support;
