import { config } from "@/lib/auth"
import { getServerSession } from "next-auth"

export default async function Page() {

	console.log(await getServerSession(config))
	return <div>Home</div>
}
