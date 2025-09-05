import { Link } from "react-router-dom";

const Hero = ({ title, paragraphs = [], buttonText, buttonLink }) => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-700 text-white py-16 antialiased">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          {title}
        </h1>

        {/* Hero Paragraphs */}
        <div className="space-y-6 text-lg md:text-xl text-gray-200 mb-12">
          {paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* CTA Button (optional) */}
        {buttonText && buttonLink && (
          <Link
            to={buttonLink}
            className="font-semibold text-lg px-8 py-4 rounded-lg shadow-lg 
              bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 
              hover:from-blue-900 hover:via-blue-700 hover:to-blue-800 
              transition-all duration-300 inline-block"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
