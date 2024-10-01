export default function SuggestVideoCard() {
  return (
    <li className="flex flex-col md:flex-row hover:bg-secondaryBg transition-all duration-150 cursor-pointer p-[2px] min-h-[100px] gap-2">
      <div className="lg:w-[40%] h-full object-cover">
        <img
          className="w-full h-full object-cover transition-all duration-150"
          src="https://i.ytimg.com/vi/za4Q_7gYyS4/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBlKEcwDw==&rs=AOn4CLAJmizvy6Hu5otQGVKbzpDQnTlZAg"
          alt=""
        />
      </div>
      <div className="lg:w-[60%]">
        <h1 className="text-sm">
          Build A Custom Video Player in HTML CSS &amp; JavaScript
        </h1>
        <p className="text-xs mt-1">Lyrics Music BD</p>
        <p className="text-sm mt-1 text-gray-400">
          30k Views
          <span className="mr-2 ml-2 inline-block bg-black dark:bg-gray-600 w-[8px] h-[8px] rounded-[50%]" />
          1 Hour Ago
        </p>
      </div>
    </li>
  );
}
