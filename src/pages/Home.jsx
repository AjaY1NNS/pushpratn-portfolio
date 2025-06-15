import VermicompostAd from "./VermicompostAd";
export default function Home() {
    return (<>
        <section className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-green-600/100">Welcome to Pushpratn Organics</h1>
            <div style={{ padding: "20px" }}>
                <VermicompostAd />
            </div>
        </section>
    </>

    );
}