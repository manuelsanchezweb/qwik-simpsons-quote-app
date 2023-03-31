import { component$, Slot } from "@builder.io/qwik";

export const PageWrapper = component$(() => {
  return (
    <div class="grid-page">
      <Slot />
    </div>
  );
});
