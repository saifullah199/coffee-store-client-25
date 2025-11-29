

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee)

        // send coffee data to the db
        fetch('http://localhost:5000/coffees',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log('after adding data to db', data)
        })

    }
    return (
        <div className="p-24">
            <div className="p-12 text-center space-y-4" >
              
                <h1 className="text-6xl">Add Coffee</h1>
                <p>It is a long established fact that a reader will be distrascted by the readable</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input w-full" 
                        placeholder="Coffee name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="number" name="quantity" className="input w-full" 
                        placeholder="Quantity" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name="supplier" className="input w-full" 
                        placeholder="Supplier name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name="taste" className="input w-full" 
                        placeholder="Taste name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Category</label>
                        <input type="text" name="category" className="input w-full" 
                        placeholder="Coffee name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name="details" className="input w-full" 
                        placeholder="Details" />
                    </fieldset>
                    
                </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                        <label className="label">Photo</label>
                        <input type="text" name="photo" className="input w-full" 
                        placeholder="Photo URL" />
                    </fieldset>
                    <input type="submit" className="btn w-full" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;