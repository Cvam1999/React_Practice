
const Contact = () =>{
    return (
        <div>
            <h1 className="font-bold text-2xl m-4 p-4">Contact us</h1>
            <form>
                <input type="text" className="border-2 p-2 m-2" placeholder="name"/>
                <input type="text" className="border-2 p-2 m-2" placeholder="message"/>
                <button className="border p-2 m-2 bg-gray-100 rounded-2xl">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
