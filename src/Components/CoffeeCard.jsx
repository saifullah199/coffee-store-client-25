import Swal from "sweetalert2";


const CoffeeCard = ({coffee}) => {
    const {name,quantity,supplier,taste,price,photo, _id,
details } = coffee

const handleDelete = (id) => {
    console.log('Deleted!',id)

    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    
  if (result.isConfirmed) {
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
});
}
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm border-2">
                <figure>
                    <img
                    src={photo}
                    alt="Movie" />
                </figure>
                <div className="flex mt-12 w-full justify-around">
                    <div>
                        <h2 className="">{name}</h2>
                        <p>Price : {price}</p>
                        <p>Quantity : {quantity}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical lg:join-horizontal space-y-2">
                            <button className="btn join-item">View</button>
                            <button className="btn join-item">Edit</button>
                            <button onClick={() => handleDelete(_id)}
                             className="btn join-item">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;