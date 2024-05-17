import { getCurrentMinters } from "@/api/session";
import { SignOutButton } from "./components/sign-out-button";

export default async function Home() {
	const user = await getCurrentMinters();

	return (
		<div>
			Logged in as user {user.id} <SignOutButton />
		</div>
	);
}
