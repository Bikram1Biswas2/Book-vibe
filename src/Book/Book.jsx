const Book = ({ book }) => {
  const { bookName, author, image, review, tags } = book;

  return (
    <div className="card bg-base-200  rounded-2xl p-6 space-y-5">
      <figure className="bg-base-300 rounded-2xl">
        <img className="w-[166px] h-[200px] p-6" src={image} alt={bookName} />
      </figure>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Products</div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
      </div>
    </div>
  );
};

export default Book;
