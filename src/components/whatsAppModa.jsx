import React from "react";

export default function WhatsAppPopup({ setModal }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white w-80 rounded-xl p-6 shadow-xl animate-scaleIn">

        {/* WhatsApp Icon */}
        <div className="flex justify-center mb-4">
          <svg
            className="w-12 h-12 text-green-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* <path d="M20.52 3.478c-2.297-2.297-6.047-2.297-8.345 0-2.3 2.3-2.3 6.048 0 8.345l.946.945-1.02 3.74 3.842-1.02.947.946c2.296 2.297 6.046 2.297 8.344 0 2.298-2.3 2.298-6.048 0-8.345l-.694-.694c-.002 0-.002 0-.003 0zm-3.762 9.19c-.197.556-1.14 1.086-1.564 1.168-.407.078-.87.111-1.334-.112-.437-.214-.933-.475-1.534-.925-.644-.478-1.085-.671-1.56-.678-.415-.006-.845.16-1.304.356-.29.128-.937.281-1.79-.66-.66-.663-.94-1.336-1.051-1.642-.194-.521-.019-.802.147-.987.214-.227.47-.59.702-.884.23-.293.306-.52.462-.865.152-.337.08-.628-.04-.88-.12-.252-1.017-2.457-1.397-3.356-.368-.886-.743-.766-1.037-.781-.265-.015-.57-.02-.875-.02-.306 0-.8.114-1.22.567-.42.454-1.602 1.565-1.602 3.813 0 2.247 1.64 4.423 1.87 4.728.23.306 3.235 4.826 7.838 6.76 4.61 1.935 4.61 1.29 5.438 1.205.828-.085 2.703-1.102 3.08-2.16.373-1.06.373-1.972.26-2.16-.112-.188-.41-.304-.859-.532-.445-.226-2.62-1.21-3.03-1.347-.41-.14-.707-.207-1.03.207z" /> */}
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 text-center">
          Chat on WhatsApp
        </h2>

        {/* Message */}
        <p className="text-center text-gray-500 mt-2">
          Do you want to start a WhatsApp chat?
        </p>

        {/* Buttons */}
        <div className="flex flex-col mt-5 gap-3">
          <a
            href="https://wa.me/919500628800"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
          >
            💬 Open WhatsApp
          </a>

          <button
            onClick={() => setModal(false)}
            className="text-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg transition"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
