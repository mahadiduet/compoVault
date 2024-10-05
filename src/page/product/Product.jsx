import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { _id, title, author, price, img_url} = product;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="h-64 w-full">
                <img
                    src={img_url}
                    alt="Product"
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body">
                <div className="bg-white rounded-lg overflow-hidden p-4">
                    <div className="mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    </div>
                    <div className="mb-2">
                        <p className="text-gray-600"><span className="font-bold">Author: </span>{author}</p>
                    </div>
                    <div className="mt-4">
                        <span className="text-xl font-bold text-blue-600"><span className="font-bold">Price: </span> {price} Tk</span>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/products/${_id}`}><button className="btn btn-primary font-bold text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
