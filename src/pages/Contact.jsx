export default function Contact() {
    return (
        <section className="p-8">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-4 max-w-md mx-auto">
                <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
                <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
                <textarea placeholder="Your Message" className="w-full border p-2 rounded" rows="5"></textarea>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
            </form>
        </section>
    );
}
