// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full border border-green-200">
        <div className="flex items-center gap-4 mb-6">
          <img src="/KEMENHUT.png" alt="Logo Kemenhut" className="w-16 h-16 rounded-full border-2 border-green-600 bg-white p-1" />
          <div>
            <h1 className="text-2xl font-bold text-green-700">Dashboard BPHL 8 Surabaya</h1>
            <p className="text-sm text-green-900 mt-1">Monitoring &amp; Tools</p>
          </div>
        </div>
        <ul className="space-y-4">
          <li>
            <a href="https://bphl8.pages.dev" className="block py-3 px-4 rounded-lg bg-green-100 text-green-800 font-medium hover:bg-green-200 transition">
              🌳 SEMAR 8 (MAP)
            </a>
          </li>
          <li>
                 <a href="https://calc-hhbk.pages.dev" className="block py-3 px-4 rounded-lg bg-yellow-100 text-yellow-800 font-medium hover:bg-yellow-200 transition">
              🧮 Kalkulator HHBK
            </a>
          </li>
          <li>
            <a href="https://calc-upjl.pages.dev" className="block py-3 px-4 rounded-lg bg-teal-100 text-teal-800 font-medium hover:bg-teal-200 transition">
              ♻️ Kalkulator UPJL
            </a>
          </li>
                  <li>
            <a href="https://calc-psdh-dr.pages.dev" className="block py-3 px-4 rounded-lg bg-blue-100 text-blue-800 font-medium hover:bg-blue-200 transition">
              💼 Kalkulator PSDH-DR + DENDA KAYU BULAT
            </a>
          </li>
          <li>
            <a href="https://lelang-kg.pages.dev" className="block py-3 px-4 rounded-lg bg-orange-100 text-orange-800 font-medium hover:bg-orange-200 transition">
              🪵 Kalkulator PSDH-DR + LELANG KAYU GERGAJIAN
            </a>
          </li>
        </ul>
        <div className="mt-6 text-center text-xs text-gray-500">
          &copy; 2025 BPHL 8 Surabaya | Kementerian Kehutanan
        </div>
      </div>
    </div>
  );
}
