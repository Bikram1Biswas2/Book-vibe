const Book = ({ book }) => {
  const { bookName, author, image, review, tags, category,rating } = book;

  return (
    <div className="card bg-base-200  rounded-2xl p-6 space-y-5">
      <figure className="bg-base-300 rounded-2xl">
        <img className="w-[166px] h-[200px] p-6" src={image} alt={bookName} />
      </figure>

      <div className="card-body">
        <div className="flex gap-3 justify-center items-center">
          {tags.map((tag) => (
            <button className="btn btn-xs text-green-500 font-bold">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className=" border-t-2 border-dashed"></div>
        <div className="flex justify-between">
          <div>
            <p>{category}</p>
          </div>
          <div className="rating">
            <p>{rating}</p>
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
