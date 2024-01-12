export default function Search() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2 md:border-r-2">
            <label className="whitespace-nowrap font-semibold">Search Term:</label>
            <input
              type="text"
              className="border rounded-lg p-3 w-full"
              placeholder="search..."
              id="searchTerm"
            />
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Type</label>
            <div className="flex gap-2">
                <input type="checkbox" name="" id="all" className="w-5"/>
                <span>Rent & sell</span>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" name="" id="rent" className="w-5"/>
                <span>Rent</span>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" name="" id="sell" className="w-5"/>
                <span>Sell</span>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" name="" id="offer" className="w-5"/>
                <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Amenities</label>
            <div className="flex gap-2">
                <input type="checkbox" name="" id="parking" className="w-5"/>
                <span>Parking</span>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" name="" id="furnished" className="w-5"/>
                <span>Furnished</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <select className="border rounded-lg p-2" id="sort_order">
                <option>Price high to low</option>
                <option>Price low to high</option>
                <option>Latest</option>
                <option>Oldest</option>
            </select>
          </div>
          <button className="border bg-slate-700 rounded-lg p-3 text-white
           hover:opacity-95 uppercase">Search</button>
        </form>
      </div>
      <div className="div">
        <h1 className="text-3xl font-semibold border-b p3 text-slate-700 mt-5">Listing results:</h1>
      </div>
    </div>
  );
}
