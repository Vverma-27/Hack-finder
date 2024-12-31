import { HydrateClient } from "~/trpc/server";
import { AuthShowcase } from "./_components/auth-showcase";

// export const runtime = "edge";

export default function HomePage() {
  return (
    <HydrateClient>
      <main className="container h-screen py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Create <span className="text-primary">T3</span> Turbo
          </h1>
          <AuthShowcase />
          Hello Vihaan
        </div>
      </main>
    </HydrateClient>
  );
}

/*I am using the t3 turborepo stack. I have cloned the the create-t3-turbo repo. I am able to run it in dev if i remove edge runtime but if i run it with edge runtime then i receive the following error: 
Internal error: TypeError: Cannot read properties of undefined (reading 'default')
    at resolveClientReference .......
i have read the same issues on the github page of create-t3-turbo as well but none of the solutions work for me.
I am running windows 11*/
