import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const LEGAL_DOCUMENTS = [
  {
    title: "Terms of Service",
    description:
      "The rules and terms that apply when you use Pettxo and its services.",
    path: "/terms-of-service",
  },
  {
    title: "Privacy Policy",
    description:
      "How Pettxo collects, uses, stores, shares, and protects personal information.",
    path: "/privacy-policy",
  },
  {
    title: "Cancellation & Refund Policy",
    description:
      "Cancellation rules, refund timelines, and payment-related conditions.",
    path: "/cancellation-refund-policy",
  },
  {
    title: "Service Provider Agreement",
    description:
      "Terms and responsibilities for service providers offering services on Pettxo.",
    path: "/service-provider-agreement",
  },
  {
    title: "Community Guidelines",
    description:
      "Rules for respectful behaviour, animal welfare, privacy, content, and reporting.",
    path: "/community-guidelines",
  },
];

export default function Legal() {
  return (
    <>
      <SEO
        canonical="/legal"
        description="Find Pettxo's Terms of Service, Privacy Policy, Cancellation & Refund Policy, Service Provider Agreement, and Community Guidelines."
      />

      <section className="min-h-screen bg-beige">
        <div className="max-w-[900px] mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-20">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13.5px] font-medium text-muted hover:text-dark transition-colors mb-10"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>

          <div className="mb-10">
            <h1 className="font-serif font-black text-dark text-[30px] md:text-[42px]">
              Legal
            </h1>

            <p className="mt-4 max-w-[700px] text-dark font-light leading-[1.8] text-[15px] md:text-[16px]">
              Find Pettxo’s legal documents, policies, and guidelines below.
            </p>
          </div>

          <div className="grid gap-5">
            {LEGAL_DOCUMENTS.map((document) => (
              <Link
                key={document.path}
                to={document.path}
                className="
                  group
                  block
                  rounded-[18px]
                  bg-white/45
                  border border-[rgba(31,41,55,0.08)]
                  p-6 md:p-7
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-white/65
                "
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h2 className="font-serif font-bold text-dark text-[20px] md:text-[23px]">
                      {document.title}
                    </h2>

                    <p className="mt-2 max-w-[680px] text-muted font-light leading-[1.7] text-[14px] md:text-[15px]">
                      {document.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="
                      flex-shrink-0
                      text-orange
                      text-xl
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-[rgba(31,41,55,0.10)]">
            <p className="text-muted text-[13px] leading-[1.7]">
              For grievances or legal concerns, contact{" "}
              <a
                href="mailto:hello@pettxo.com"
                className="text-dark underline underline-offset-2"
              >
                hello@pettxo.com
              </a>
              .
            </p>
          </div>

        </div>
      </section>
    </>
  );
}