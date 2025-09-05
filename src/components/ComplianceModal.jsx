import { useState } from "react";
import { ComplianceLinks} from "./ComplianceRoutes";
import { Link } from "react-router-dom";

import {
  FaShieldAlt,
  FaUsers,
  FaBusinessTime,
  FaDatabase,
} from "react-icons/fa";
import {
  FiFileText,
  FiLock,
  FiList,
  FiCheckCircle,
} from "react-icons/fi";

const ComplianceModal = () => {
  const icons = [
    <FiFileText className="text-blue-600 text-3xl" />,
    <FaUsers className="text-green-600 text-3xl" />,
    <FaBusinessTime className="text-purple-600 text-3xl" />,
    <FaDatabase className="text-orange-600 text-3xl" />,
    <FiLock className="text-red-600 text-3xl" />,
    <FaShieldAlt className="text-indigo-600 text-3xl" />,
    <FiCheckCircle className="text-teal-600 text-3xl" />,
    <FiList className="text-yellow-600 text-3xl" />,
    <FaShieldAlt className="text-pink-600 text-3xl" />,
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">
          Compliance Services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ComplianceLinks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl 
                        transition-transform transform hover:-translate-y-2 
                        border border-gray-100 flex flex-col cursor-pointer"
              onClick={() => setSelectedItem({ ...item, icon: icons[idx] })}
            >
              <div className="flex flex-col items-center text-center flex-grow">
                <div className="mb-3">{icons[idx]}</div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {item.name}
                </h3>
                <div className="text-gray-500 text-sm line-clamp-3 min-h-[60px] ">
                  {typeof item.description === "string" ? (
                    <p>{item.description}</p>
                  ) : (
                    item.description
                  )}
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-blue-600 font-medium hover:underline">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative animate-slideIn">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-4">
              <div>{selectedItem.icon}</div>
              <h3 className="text-xl font-bold text-blue-800">
                {selectedItem.name}
              </h3>
            </div>

            {/* Full Description */}
           <div className="text-gray-600 mb-6">
  {typeof selectedItem.description === "string"
    ? <p>{selectedItem.description}</p>
    : selectedItem.description}
</div>

            {/* Link Button */}
            <Link
              to={selectedItem.path}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg 
                        hover:bg-blue-700 transition"
            >
              Go to Full Page →
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default ComplianceModal;
