export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          <span className="font-semibold text-pink-600">
            Reene Learning Centre
          </span>
          , a trusted daycare and learning space located in Burari,
          Delhi-110084. We provide a safe, nurturing, and joyful environment
          where children can learn, grow, and shine. Our dedicated team of
          caregivers and educators focus on overall development—nurturing social
          and intellectual growth through play-based and engaging learning
          methods. At RLC, we believe every child is unique, which is why we
          offer personalized attention to support their individual journey. With
          a strong emphasis on safety, creativity, and curiosity, we aim to
          create a second home for children while helping them build a strong
          foundation for the future.
        </p>

        {/* New paragraph about scholarships & EWS waiver */}
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold text-pink-600">Reene Learning
          Centre</span>, we are also committed to making education inclusive and
          accessible. To support this vision, we proudly offer a{" "}
          <span className="font-semibold text-green-600">
            100% tuition fee waiver for candidates from the Economically Weaker
            Sections (EWS) category
          </span>
          , ensuring no deserving student is left behind. In addition, we
          provide <span className="font-semibold text-green-600">
            merit-based scholarships
          </span>{" "}
          to recognize and encourage hard-working and talented students. These
          initiatives not only ease the financial burden on families but also
          create equal opportunities for children to thrive, fostering
          confidence, inclusivity, and long-term social impact.
        </p>
      </div>
    </section>
  );
}
