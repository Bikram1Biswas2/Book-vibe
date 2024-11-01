import bannerImg from "../assets/books.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 mb-8 mt-6 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse p-16">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div className="space-y-16 text-left">
            <h1 className="text-6xl font-bold">Books to freshen up your bookshelf</h1>
           
            <button className="btn text-white font-bold bg-[#23BE0A]">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;