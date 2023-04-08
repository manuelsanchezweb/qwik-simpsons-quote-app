import { component$, Slot } from "@builder.io/qwik";

export const Container = component$(
  ({ classCustom }: { classCustom?: string }) => {
    return (
      <main
        class={`flex w-full max-w-[1400px] px-5 md:px-20 md:mx-auto ${classCustom}`}
      >
        <Slot />
      </main>
    );
  }
);
