import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      id="contact"
      style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <Image
            src="/flow-removebg-preview.png"
            alt="FlowAI"
            width={140}
            height={140}
            className="rounded-lg"
          />
          <span
            className="font-bold text-lg"
            style={{
              color: "#1A3560",
              fontFamily: "Syne, sans-serif",
              letterSpacing: "-0.02em",
            }}>
            FlowAI
          </span>
        </div>

        <div
          className="flex flex-wrap items-center gap-6 text-sm"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
          {[
            { label: "Нууцлалын бодлого", href: "#" },
            { label: "Үйлчилгээний нөхцөл", href: "#" },
            { label: "Күүки бодлого", href: "#" },
            { label: "+976 88888888", href: "#" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="transition-colors hover:text-slate-900"
              style={{ color: "#64748B" }}>
              {label}
            </Link>
          ))}
        </div>

        <p
          className="text-sm text-center"
          style={{
            color: "#94A3B8",
            fontFamily: "Plus Jakarta Sans, sans-serif",
          }}>
          © {new Date().getFullYear()} FlowAI. Бүх эрх хамгаалагдсан.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
