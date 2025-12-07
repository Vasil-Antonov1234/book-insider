import { Link } from "react-router";

export default function UserProfile() {
    return (
        <section className="flex items-center justify-center">
            <div id="features" className="px-2 space-y-6 py-8 md:py-12 lg:py-24 mx-auto bg-[#fff7ed] w-290 h-170 overflow-y-auto">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Profile</h2>
                    <p className="text-2xl">
                        User@example.com</p>
                </div>
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

                    <div className="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
                        <div className="flex flex-col justify-between rounded-md p-6">
                            <div className="space-y-2">
                                <h3 className="font-bold text-2xl">My books</h3>
                                <ul>
                                    <li className="text-sm text-muted-foreground mt-3">
                                        <Link className="hover:underline font-bold">The Wager: A Tale of Shipwreck, Mutiny and Murder</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
                        <div className="flex flex-col justify-between rounded-md p-6">
                            <div className="space-y-2">
                                <h3 className="font-bold text-2xl">My comments</h3>
                                <ul>
                                    <li className="text-sm text-muted-foreground mt-3">
                                        <Link className="hover:underline font-bold">The Wager: A Tale of Shipwreck, Mutiny and Murder</Link>
                                        <p>Very good book!</p>
                                    </li>
                                    <li className="text-sm text-muted-foreground mt-3">
                                        <Link className="hover:underline font-bold">The Wager: A Tale of Shipwreck, Mutiny and Murder</Link>
                                        <p>Very good book!</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
                        <div className="flex flex-col justify-between rounded-md p-6">
                            <div className="space-y-2">
                                <h3 className="font-bold text-2xl">Rated books</h3>
                                <ul>
                                    <li className="text-sm text-muted-foreground mt-3">
                                        <Link className="hover:underline font-bold">The Wager: A Tale of Shipwreck, Mutiny and Murder</Link>
                                    </li>
                                    <li className="text-sm text-muted-foreground mt-3">
                                        <Link className="hover:underline font-bold">The Wager: A Tale of Shipwreck, Mutiny and Murder</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}