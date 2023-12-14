import { Link } from "react-router-dom";

function Login(){
    return(
        <div>
            <div className="container mx-auto bg-gray-200">
                <div className="h-screen flex justify-center items-center">
                    <div className="w-1/2 h-96 bg-white border rounded-3xl">
                        <div className="flex h-full">
                            <div className="w-1/3  bg-blue-200 rounded-l-3xl h-full pt-32">
                                <div className="flex justify-center">
                                    <img src="./logo.svg" className="w-20" />
                                </div>
                                <div className="flex justify-center">
                                    <h3>Chat Room</h3>
                                </div>
                            </div>
                            <div className="w-2/3">
                                <div className="h-full p-10">
                                    <div className="text-center text-2xl">
                                        Login
                                    </div>
                                    <div className="pt-20 space-y-4">
                                        <div>
                                            <input className="w-full border rounded-3xl p-2" placeholder="User Name" />
                                        </div>
                                        <div>
                                            <input className="w-full border rounded-3xl p-2" placeholder="Password" />
                                        </div>
                                        <div className="text-center pt-6">
                                            <Link to="/chatroom" className="w-28 bg-blue-600 rounded-3xl text-white py-2 px-10">Login</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;