function AddUser() {

    return (
        <div className="container">
            <form>
                <div className="form-group row">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="form-control" placeholder="Username" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Password" required />
                </div>
            </form>
        </div>
    )
}
export default AddUser;