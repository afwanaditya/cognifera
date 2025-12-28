import React from 'react';
import './globals.css'; 

const Page = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="sticky top-0 bg-white shadow-md">
        <div className="flex justify-between items-center p-4">
          <div className="font-bold text-lg">Cognifera</div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#services" className="text-blue-500">Layanan</a></li>
              <li><a href="#about" className="text-blue-500">Tentang</a></li>
            </ul>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <a href="login">Login</a>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
        <h1 className="text-4xl font-bold">Cognifera Publishing</h1>
        <p className="text-xl mt-4">Sistem penerbitan naskah digital, unggah karya Anda, pantau prosesnya, dan terbitkan.</p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded">
          <a href="login">Start Publishing</a>
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Layanan Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="font-bold">Penerbitan Buku</h3>
            <p>Unggah, Review, ISBN, dan Terbitkan naskah Anda.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="font-bold">Konsultasi Riset</h3>
            <p>Bimbingan riset berkualitas dan pendampingan penelitian.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="font-bold">Manajemen OJS</h3>
            <p>Pengelolaan sistem jurnal digital Anda dengan mudah.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-8">Tentang Cognifera</h2>
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <img src="/OIP.jpeg" alt="Cognifera" className="w-full lg:w-1/2 h-auto" />
          <div className="lg:w-1/2 p-6">
            <p>Lahir dari pengalaman mengelola OJS dan resmi berdiri pada 2024, PT Cognifera Education Academy hadir dengan visi membangun ekosistem digital terintegrasi bagi para akademisi...</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-blue-400">Facebook</a>
          <a href="#" className="text-blue-400">Twitter</a>
          <a href="#" className="text-blue-400">Instagram</a>
        </div>
        <p>© 2025 PT Cognifera Education Academy. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Page;
