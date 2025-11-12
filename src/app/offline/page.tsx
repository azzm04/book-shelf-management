// app/offline/page.tsx
"use client";

export default function Offline() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-gradient-to-br from-purple-500 to-blue-600 text-white p-4">
      <div className="text-center">
        <div className="text-8xl mb-6">📵</div>
        <h1 className="text-4xl font-bold mb-4">Anda Sedang Offline</h1>
        <p className="text-xl mb-8 opacity-90">
          Koneksi internet terputus. Coba lagi ketika online.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}