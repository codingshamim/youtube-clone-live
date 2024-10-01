export default function loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Skeleton card 1 */}
      <div className="w-full max-w-sm p-4 mx-auto bg-gray-800 rounded-md">
        <div className="animate-pulse flex flex-col">
          {/* Thumbnail */}
          <div className="bg-gray-700 h-40 rounded-lg" />
          {/* Title */}
          <div className="mt-4 bg-gray-700 h-6 rounded w-3/4" />
          {/* Metadata */}
          <div className="mt-2 bg-gray-600 h-4 rounded w-1/2" />
          <div className="mt-2 bg-gray-600 h-4 rounded w-1/3" />
        </div>
      </div>
      {/* Skeleton card 2 */}
      <div className="w-full max-w-sm p-4 mx-auto bg-gray-800 rounded-md">
        <div className="animate-pulse flex flex-col">
          <div className="bg-gray-700 h-40 rounded-lg" />
          <div className="mt-4 bg-gray-700 h-6 rounded w-3/4" />
          <div className="mt-2 bg-gray-600 h-4 rounded w-1/2" />
          <div className="mt-2 bg-gray-600 h-4 rounded w-1/3" />
        </div>
      </div>
      {/* Skeleton card 3 */}
      <div className="w-full max-w-sm p-4 mx-auto bg-gray-800 rounded-md">
        <div className="animate-pulse flex flex-col">
          <div className="bg-gray-700 h-40 rounded-lg" />
          <div className="mt-4 bg-gray-700 h-6 rounded w-3/4" />
          <div className="mt-2 bg-gray-600 h-4 rounded w-1/2" />
          <div className="mt-2 bg-gray-600 h-4 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
}
