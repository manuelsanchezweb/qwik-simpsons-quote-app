import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Logo } from "~/components/icons/logo";

export default component$(() => {
  return (
    <div class="flex flex-col items-center justify-center text-center min-h-screen p-4 bg-brand">
      <Logo classCustom="w-64 sm:w-[35rem]" />
      <h1 class="font-medium text-xl my-1">
        Discover some of the most amazing Quotes from The Simpsons
      </h1>
      <div>
        <strong>DISCLAIMER:</strong> This is an unofficial APP (even though it
        looks so cool)
      </div>
      <Link class="btn my-4" href="/home">
        Enter App
      </Link>
      <div class="flex gap-12">
        <img
          class="hidden md:block object-contain"
          src="./img/bart.png"
          alt="Bart Simpson"
        />
        <img
          class="hidden md:block object-contain mt-12"
          src="./img/homer.png"
          alt="Homer Simpson"
        />
        <img
          class="object-contain mt-20 md:mt-0"
          src="./img/moe.png "
          alt="Moe"
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "The Simpsons - Quotes",
  meta: [
    {
      name: "description",
      content: "This is an unofficial APP (even though it looks so cool)!",
    },
  ],
};
