import { createFileRoute, Link } from "@tanstack/react-router";
import { SignUp } from "@clerk/tanstack-react-start";
import queriumMark from "@/assets/querium-mark.png";

export const Route = createFileRoute("/sign-up/$")({
  head: () => ({
    meta: [
      { title: "Sign up · Querium" },
      {
        name: "description",
        content: "Create your Querium account to analyze and chat with your database.",
      },
      { property: "og:title", content: "Sign up · Querium" },
      {
        property: "og:description",
        content: "Create your Querium account to analyze and chat with your database.",
      },
    ],
  }),
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-background px-4 py-8">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-md">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={queriumMark} alt="Querium logo" width={36} height={36} className="size-9" />
          <span className="font-display text-xl font-semibold text-foreground">Querium</span>
        </Link>
        <div className="w-full flex justify-center">
          <SignUp
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
            fallbackRedirectUrl="/c"
            appearance={{
              elements: {
                rootBox: "w-full flex justify-center",
                card: "bg-card border border-border shadow-xl rounded-xl p-6 w-full",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
