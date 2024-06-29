"use client";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useRouter } from "next/navigation";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();
  const { state } = useAuthContext();
  if (state.user == null) {
    router.push("/login");
  }
  return <div>{children}</div>;
}
