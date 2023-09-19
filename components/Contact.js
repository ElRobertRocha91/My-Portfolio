const Contact = () => (
    <section className="row text-light text-center bg-black bg-gradient">
        <h2>
            Contact Me
        </h2>
        <div>
            <form>
                <div>
                    <input type="text" className="w-25" required placeholder="Enter your name"/>
                    <input type="text" className="w-25" required placeholder="Enter your email"/>
                </div>
                <textarea className="w-50" required placeholder="Enter your message"></textarea>
                <p>Message</p>
                <button type="submit" className="btn btn-outline-success">
                    Send Message
                </button>
            </form>
        </div>
    </section>
)

export default Contact;