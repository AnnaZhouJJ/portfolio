import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-2xl font-bold mb-4">404 | Page Not Found</h1>
      
      <p className="mb-6 text-lg">{"Sorry, the page you're looking for isn't available."}</p>
      
      <div className="mb-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          Return to Home
        </Link>
        
        <a 
          href="https://annazhoujiajing.wixsite.com/portfolio" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 font-bold hover:underline transition-colors"
        >
          View Alternative Portfolio (Wix)
        </a>
      </div>
      
      <div className="max-w-md text-sm text-gray-600 p-4 bg-gray-100 rounded-lg">
        <p>Having trouble accessing this site? My portfolio is also available on Wix, which may be more accessible on your network.</p>
      </div>
    </div>
  );
}