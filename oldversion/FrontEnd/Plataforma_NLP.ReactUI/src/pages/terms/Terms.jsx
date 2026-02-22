import React from "react";

export default function Terms() {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg mb-10">
      <h1 className="text-2xl font-bold mb-4">Términos y Condiciones de Uso</h1>
      <p className="mb-4">
        Por favor, lee estos términos y condiciones cuidadosamente antes de
        utilizar nuestra plataforma.
      </p>
      <ol className="list-decimal pl-6 mb-4">
        <li className="mb-2">
          <strong>Aceptación de los Términos:</strong> Al acceder y utilizar
          nuestra plataforma, aceptas cumplir y estar legalmente vinculado por
          estos términos y condiciones. Si no estás de acuerdo con alguno de los
          términos y condiciones, por favor, no utilices nuestra plataforma.
        </li>
        <li className="mb-2">
          <strong>Recopilación de Información:</strong> Para utilizar nuestra
          plataforma, es posible que necesitemos recopilar cierta información
          personal, como tu nombre de usuario y dirección de correo electrónico.
          Nos comprometemos a proteger tu privacidad y a no compartir esta
          información con terceros sin tu consentimiento explícito.
        </li>
        <li className="mb-2">
          <strong>Uso de la Información:</strong> La información personal
          recopilada se utilizará únicamente para proporcionar y mejorar
          nuestros servicios. Podemos utilizar tu nombre de usuario y correo
          electrónico para comunicarnos contigo, enviar actualizaciones sobre
          nuestra plataforma y responder a tus consultas.
        </li>
        <li className="mb-2">
          <strong>Seguridad de la Información:</strong> Tomamos medidas
          razonables para proteger tu información personal contra accesos no
          autorizados, uso indebido o divulgación. Sin embargo, debes ser
          consciente de que ninguna medida de seguridad es completamente
          infalible y que ningún sistema puede garantizar la seguridad absoluta
          de tus datos.
        </li>
        <li className="mb-2">
          <strong>Cambios en los Términos y Condiciones:</strong> Nos reservamos
          el derecho de modificar estos términos y condiciones en cualquier
          momento. Cualquier cambio se publicará en esta página y entrará en
          vigencia inmediatamente después de su publicación. Se te notificará
          sobre cualquier cambio importante a través de un aviso en nuestra
          plataforma.
        </li>
        <li>
          <strong>Contacto:</strong> Si tienes alguna pregunta sobre estos
          términos y condiciones, por favor contáctanos en{" "}
          <a
            href="mailto:maxponce.marquez@outlook.com"
            className="text-blue-500"
          >
            maxponce.marquez@outlook.com
          </a>
          .
        </li>
      </ol>
      <p className="mt-4">
        Al utilizar nuestra plataforma, confirmas que has leído, entendido y
        aceptado estos términos y condiciones en su totalidad.
      </p>
      <p className="mt-2">Última actualización: 21 de marzo de 2024</p>
    </div>
  );
}
