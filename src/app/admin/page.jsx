import { redirect } from "next/navigation";

export const metadata = {
  title: "Portfolio Administration | Jason Jahja",
  robots: { index: false, follow: false },
};

export default function Page() {
  redirect("/admin/analytics");
}

