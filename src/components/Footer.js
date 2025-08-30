export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <h3 className="text-xl font-bold">Renee Learning Centre</h3>
        <p className="text-sm">© {new Date().getFullYear()} Reene Learning Centre. All rights reserved.</p>
        <ul className="flex gap-6 text-sm">
          <li><a href="#programs" className="hover:underline">Programs</a></li>
          <li><a href="#about" className="hover:underline">About Us</a></li>
          <li><a href="#why" className="hover:underline">Why Us</a></li>
          {/* <li><a href="#testimonials" className="hover:underline">Testimonials</a></li> */}
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          {/* <li><a href="PrivacyPolicy" className="hover:underline">Privacy Policy</a></li> */}
        </ul>
      </div>
    </footer>
  )
}
