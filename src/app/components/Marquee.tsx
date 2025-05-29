export default function Marquee() {
    return (
        <div className="overflow-hidden whitespace-nowrap bg-white text-green-600 py-3">
            <div
                className="inline-block uppercase tracking-wider font-bold text-xxl"
                style={{
                    animation: "marquee 30s linear infinite",
                    display: "inline-block",
                }}
            >
                <span className="mx-8 text-6xl">
                    We Are Coaching Experts — Your Growth Partner — Certified Coaches — Personalized Strategies We Are Coaching Experts — Your Growth Partner — Certified Coaches — Personalized Strategies
                </span>
            </div>
        </div>
    )
}