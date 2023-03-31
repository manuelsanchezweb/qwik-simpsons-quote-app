import { $, component$, useStore } from "@builder.io/qwik";
import {
  DocumentHead,
  Link,
  routeLoader$,
  server$,
  useNavigate,
} from "@builder.io/qwik-city";
import { fetchSimpsons } from "~/api/fetchSimpsons";
import { IconQuote } from "~/assets/icons/icon-quote";
import { Container } from "~/components/container/container";

interface Character {
  characterDirection?: string;
  character?: string;
  image?: string;
  quote?: string;
}

export const useCharacters = routeLoader$(async () => {
  try {
    return await fetchSimpsons();
  } catch (error) {
    console.error(
      "An error occurred while fetching Simpsons characters:",
      error
    );
    return [];
  }
});

export default component$(() => {
  const nav = useNavigate();

  const selectedCharacter = useStore({
    character: {},
  });

  const { value: characters } = useCharacters();
  const filterCharacters = getDifferentFilteredCharacters();

  function getDifferentFilteredCharacters() {
    const characterProps = new Set();

    return characters
      .filter((user: Character) => user.characterDirection === "Right")
      .filter((user: Character) => {
        if (!characterProps.has(user.character)) {
          characterProps.add(user.character);
          return true;
        }
        return false;
      })
      .slice(0, 12);
  }

  const handleFromClient = $(() => {
    console.log("CLIENT");
  });

  const handleFromServer = server$(() => {
    console.log("SERVIDOR");
  });

  return (
    <Container className="my-8 flex flex-col items-center justify-center gap-8">
      <div class="text-center">
        <h1 class="font-bold text-xl lg:text-5xl">The Simpson Quote App</h1>
        <p>Click on the quote of your favorite character</p>
      </div>

      <ul class="grid-container">
        {filterCharacters.slice(0, 12).map((user: Character) => (
          <li key={user.character}>
            <figure class="overflow-hidden relative">
              <picture class="max-w-[150px] max-h-[150px] border border-black flex bg-brand overflow-hidden">
                <img
                  class="max-w-full object-cover object-top translate-x-4"
                  src={user.image}
                  alt={`${user.character}`}
                />
              </picture>
              <button
                onClick$={() => (selectedCharacter.character = user)}
                class="border border-black bg-white absolute right-0 bottom-[19px] cursor-pointer hover:bg-gray-50"
                aria-label="Open Quote Character"
              >
                <IconQuote className="max-w-[40px] max-h-[40px]" />
              </button>
              <figcaption>{user.character}</figcaption>
            </figure>

            {selectedCharacter.character == user ? (
              <div class="modal z-10 fixed flex flex-col items-center justify-center inset-0 bg-black bg-opacity-75 transition-opacity">
                <div class="relative pt-20 px-12 pb-12 bg-white max-w-[300px]">
                  <button
                    class="btn btn-contrast absolute top-5 right-5"
                    onClick$={() => (selectedCharacter.character = {})}
                    aria-label="Close Quote Character"
                  >
                    X
                  </button>
                  <blockquote class="flex flex-col gap-2">
                    "{user.quote}" <i>{user.character}</i>
                  </blockquote>
                </div>
              </div>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>

      <Link reload class="btn btn-brand">
        New quotes
      </Link>

      {/* //// BUTTON DE PRUEBA */}
      {/* <button class="btn btn-contrast" onClick$={handleFromClient}>
        Fetch desde el cliente
      </button>
      <button class="btn btn-contrast" onClick$={handleFromServer}>
        Fetch desde el servidor
      </button> */}
    </Container>
  );
});

export const head: DocumentHead = {
  title: "The Simpsons - Quotes",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
