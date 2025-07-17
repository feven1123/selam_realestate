export default function TopBar() {
    return (
      <div
        style={{ backgroundColor: '#F2F2F2' }}
        className="text-gray-900 text-sm flex justify-center space-x-8 py-1 px-4"
      >
        <div className="flex items-center space-x-1">
          <span>📞</span>
          <a href="tel:+251912345678" className="hover:underline">
            +251 912 345 678
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <span>✉️</span>
          <a href="mailto:info@selamrealestate.com" className="hover:underline">
            info@selamrealestate.com
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <span>📍</span>
          <span>Addis Ababa, Ethiopia</span>
        </div>
      </div>
    );
  }
  