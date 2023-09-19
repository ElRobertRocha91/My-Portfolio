const Contact = () => (
    <section className="row text-light text-center bg-black bg-gradient d-flex justify-content-center mt-4">
        <div className="card w-50 mb-3 bg-dark border-primary">
            <h2 className="custom-title">
                Contact Me
            </h2>
            <div className="mb-3 px-3 py-3">
                <form>
                    <div>
                        <div className="mb-3">
                            <input type="text" className="custom-input form-control" required placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="custom-input form-control" required placeholder="Enter your email" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <textarea className="custom-input form-control" required placeholder="Enter your message"></textarea>
                    </div>
                    <p>Message</p>
                    <button type="submit" className="btn btn-outline-success custom-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
)

export default Contact;