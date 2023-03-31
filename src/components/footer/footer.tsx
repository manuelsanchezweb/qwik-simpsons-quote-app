import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <div class="bg-brand flex flex-col justify-center items-center text-center py-8 px-5 gap-2 border border-black">
      <div class="text-sm">
        <strong>All Rights Reserved</strong> - Oh Lord Matt Groening - 1989-2023
      </div>
      <small>
        This app was done by{" "}
        <a
          title="GitHub Simpsons Quote"
          href="https://github.com/manuelsanchezweb/qwik-curso-01-simpsons-quote"
        >
          Manuel Sánchez
        </a>
      </small>
    </div>
  );
});