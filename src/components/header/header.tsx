import { component$ } from "@builder.io/qwik";
import { Link, useContent, useLocation } from "@builder.io/qwik-city";
import { Logo } from "~/components/icons/logo";

export const Header = component$(() => {
  const location = useLocation();

  const { menu } = useContent();
  const menuNav = menu?.items?.map((item: any) => item);

  // @TODO: reload en links y active en link

  return (
    <div class="bg-brand w-full border border-black">
      <div class="nav flex flex-col md:flex-row gap-6 w-full justify-between items-center p-5 md:px-20 mx-auto max-w-[1400px]">
        <Link href="/home">
          <Logo className="w-48 h-auto" />
        </Link>
        <ul class="flex gap-8 ">
          {menuNav
            ? menuNav[0].items?.map((item: any) => (
                <li>
                  <Link
                    href={item.href}
                    // class={`flex scale-100 transition-all hover:scale-125 focus:scale-125" ${
                    //   location.url.pathname == item.href ? "!font-bold" : ""
                    // }`}
                    class={{
                      "flex scale-100 transition-all hover:scale-125 focus:scale-125":
                        true,
                      "font-bold": location.url.pathname == item.href,
                    }}
                  >
                    {item.text}
                  </Link>
                </li>
              ))
            : null}
          <Link href="/" class="btn btn-contrast">
            Exit
          </Link>
        </ul>
      </div>
    </div>
  );
});
