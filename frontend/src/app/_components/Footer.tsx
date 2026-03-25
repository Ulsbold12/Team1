import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Нууцлалын бодлого", href: "#" },
  { label: "Үйлчилгээний нөхцөл", href: "#" },
  { label: "Күүки бодлого", href: "#" },
  { label: "+976 88888888", href: "#" },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-white dark:bg-gray-900 border-t border-slate-200 dark:border-gray-700"
      style={{ boxShadow: "0 -1px 3px rgba(0,0,0,0.06)" }}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-0.5">
          <Image
            src="/logoblack.svg"
            alt="FlowAI"
            width={40}
            height={40}
            className="rounded-lg dark:invert"
          />
          <span
            className="font-bold text-lg text-black dark:text-white"
            style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}
          >
            FlowAI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {footerLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium transition-colors text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <p
          className="text-sm text-slate-400 dark:text-slate-500"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          © {new Date().getFullYear()} FlowAI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
