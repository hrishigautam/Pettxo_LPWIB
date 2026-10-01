import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SEO from "../components/SEO.jsx";

const SECTIONS = [
  {
    title: "1. Where these Guidelines apply",
    content: [
      "Everything you post, upload or send on Pettxo, including posts, images, videos and comments; your profile, username, bio and pet profiles; service listings, descriptions and photos; ratings and reviews; and in-app messages.",
      "The same rules apply in every language.",
    ],
  },
  {
    title: "2. What we love to see",
    content: [
      "Photos and videos of your own pets, or pets you have permission to share.",
      "Tips, questions and experiences about pet care, food, training, behaviour and health.",
      "Honest reviews of services you booked and received through Pettxo.",
      "Posts about pets that need a home, rescues, and lost or found pets.",
      "Local pet events, meet-ups and animal welfare initiatives.",
      "Providers showing their real work, premises and services accurately.",
      "Health information shared by other users is general information from people like you. It is not veterinary advice. For anything about your pet’s health, please speak to a qualified veterinarian.",
    ],
  },
  {
    title: "3. Be kind and respectful",
    content: [
      "You must not:",
      "• bully, harass, insult, intimidate or repeatedly contact someone who does not want to hear from you;",
      "• threaten anyone with harm, including as a “joke” or “hypothetically”;",
      "• post hate speech, slurs or content that attacks people for their religion, caste, race, ethnicity, gender, sexual orientation, disability, nationality or similar characteristics; or",
      "• encourage others to pile on, abuse or target a person, business or group.",
      "Disagreeing is fine. Criticising a service honestly is fine. Attacking people is not.",
    ],
  },
  {
    title: "4. Keep Pettxo safe for everyone",
    subsections: [
      {
        title: "4.1 Absolutely not allowed",
        content: [
          "Any content that sexualises, exploits or endangers a child. We remove it, close the account and report it to the authorities as the law requires.",
          "Nudity, sexual content or sexual services of any kind.",
          "Any content that sexualises an animal.",
          "Intimate images of anyone shared without their consent, including images that have been faked or altered.",
        ],
      },
      {
        title: "4.2 Also not allowed",
        content: [
          "• Graphic violence or gore involving people or animals, or content that glorifies violence.",
          "• Content that promotes or encourages suicide, self-harm or eating disorders.",
          "• Content that promotes illegal drugs, weapons, gambling or other illegal activity.",
          "If you or someone you know is in danger, call 112. For a child in danger, call Childline on 1098.",
        ],
      },
    ],
  },
  {
    title: "5. Animals come first",
    subsections: [
      {
        title: "5.1 Animal welfare",
        content: [
          "You must not post or promote:",
          "• cruelty to any animal, including beating, starving, abandoning, fighting or harmful “training” methods. The only exception is a post that reports cruelty so that it can be stopped. Please also tell the police or local animal welfare authorities;",
          "• animal fights, or dangerous stunts that put an animal at risk;",
          "• wild animals, protected species or animal parts that are illegal to keep or trade in India; or",
          "• treatments, medicines or procedures by anyone who is not a registered veterinarian, where the law requires one.",
        ],
      },
      {
        title: "5.2 Adoption, rescue, and buying and selling",
        content: [
          "Allowed: Free adoption posts for pets that need a home.",
          "Allowed: Rescue posts and appeals for foster homes.",
          "Allowed: Lost and found pet posts.",
          "Allowed: Sharing adoption drives by shelters and welfare groups.",
          "Not allowed: Selling any animal, or asking for any payment, deposit or “rehoming fee”.",
          "Not allowed: Offering or advertising breeding or stud services.",
          "Not allowed: Advertising litters, puppies or kittens for sale.",
          "Not allowed: Trading, swapping or gifting animals in return for anything of value.",
          "Pettxo does not check or take part in any adoption. If you give or take a pet, meet somewhere safe, check the other person yourself, and follow the law on animal welfare.",
        ],
      },
    ],
  },
  {
    title: "6. Be honest",
    content: [
      "Real reviews only. Review only services you actually booked and received through Pettxo. No fake reviews, paid reviews or reviews in return for discounts or free services. Providers must not review their own services or pressure anyone about a rating.",
      "Real accounts only. One account per person. Do not pretend to be another person, a business, a vet or the Pettxo team.",
      "Real credentials only. Do not claim a qualification, registration or certificate you do not hold.",
      "No false information. Do not post information you know is false, especially about animal health or about a provider, and do not mislead anyone about where content came from.",
      "Label AI content. If an image, audio or video looks real but was created or changed using AI or editing tools, say so in your post. Never use AI to create false content about real people or events, or fake documents.",
    ],
  },
  {
    title: "7. Respect privacy",
    content: [
      "Without the person’s clear permission, you must not share:",
      "• anyone’s phone number, home address, email, ID documents, bank details or other personal information;",
      "• photos or videos of someone in a private setting, or taken without their knowledge; or",
      "• information that reveals where a person or their pet can be found at particular times, in a way that could put them at risk.",
      "Providers receive pet parents’ contact details only to deliver a booking. They must not use or share them for anything else.",
      "If other people or their property can clearly be identified in your photos or videos, ask them before you post.",
    ],
  },
  {
    title: "8. Respect other people’s work",
    content: [
      "Post only content you created or have permission to share. Do not copy other people’s photos, videos, writing or logos and present them as yours.",
      "If you share someone else’s content with their permission, credit them.",
      "If you believe your work has been posted on Pettxo without permission, report it with details of your original work.",
    ],
  },
  {
    title: "9. No spam and no off-platform deals",
    content: [
      "Do not post repeated, irrelevant or bulk content, chain messages, or misleading links.",
      "Do not use posts, comments or messages to advertise services, products or other platforms in ways that are unrelated to pets or that spam other users. Providers should promote their services through their Pettxo listings.",
      "Do not ask for or offer payment outside Pettxo for services found on Pettxo, or share payment details such as UPI IDs to arrange this.",
      "No money schemes, lotteries, pyramid or chain schemes, or investment offers.",
    ],
  },
  {
    title: "10. Messages",
    content: [
      "These Guidelines apply to private messages too. You can block or report anyone.",
      "Our team does not routinely read private messages. Authorised staff may look at relevant messages only where reasonably necessary for a report, a safety or moderation check, a booking or payment dispute, customer support, a fraud investigation, enforcing our policies, or a legal requirement.",
      "Do not send unwanted messages, messages to people who have made clear they do not want to hear from you, or messages that break any of these Guidelines.",
    ],
  },
  {
    title: "11. Reporting",
    content: [
      "Use the report option on any post, comment, profile, listing, review or message, or write to hello@pettxo.com. Tell us what is wrong and, where possible, include screenshots.",
      "Intimate images of a person shared without consent, including altered images: Remove or disable access within 2 hours.",
      "Content that breaks the content rules in the Terms of Service: Act within 36 hours.",
      "Any other report: Acknowledge within 24 hours and resolve within 7 days.",
      "Court or government orders: Act within the time the law requires.",
      "We look at every report and decide based on these Guidelines, the Terms of Service and the law. We may not tell you what action we took against another user, to protect their privacy.",
      "Do not make false or malicious reports. Doing so is itself a breach of these Guidelines.",
      "For crimes, contact the police first (112). For online fraud or cybercrime, you can call 1930 or report at cybercrime.gov.in.",
    ],
  },
  {
    title: "12. What happens if the rules are broken",
    content: [
      "What we do depends on how serious the breach is, whether it was deliberate, and whether it has happened before.",
      "Remove or hide content — Content that breaks these Guidelines.",
      "Warning — A first or minor breach.",
      "Limit features — For example, temporarily stopping someone posting, commenting or messaging.",
      "Temporary suspension — Repeated breaches, or a serious breach while we investigate.",
      "Permanent account closure — Serious or repeated breaches, fraud, or any zero-tolerance content in Section 4.1.",
      "Report to authorities — Where content or conduct may be a crime, or the law requires us to report it.",
      "Where it is safe and lawful, we will tell you what was removed or what action was taken, and why.",
      "If you think we got it wrong, you can ask for a review by writing to hello@pettxo.com within 7 days. A different team member will look at it.",
      "If you are not satisfied with the Grievance Officer’s decision, you can appeal to the Grievance Appellate Committee set up by the Government of India, within 30 days.",
      "Actions affecting bookings, listings and payouts are handled under the Terms of Service, the Cancellation & Refund Policy and the Service Provider Agreement.",
    ],
  },
  {
    title: "13. Reminders and changes",
    content: [
      "We will remind all users of these Guidelines at least once every three months.",
      "We will tell you about material changes by in-app notification or email at least 15 days before they take effect, unless a change is required sooner by law.",
      "If you would like these Guidelines in any language listed in the Eighth Schedule to the Constitution of India, write to hello@pettxo.com and we will provide them.",
    ],
  },
  {
    title: "14. Grievance Officer",
    content: [
      "Grievance Officer: Hrishi Gautam",
      "Email: hello@pettxo.com",
      "Address: Pettxo Private Limited, Smt Kiran Goutam, 16176, W.No. 11, Baihar, Balaghat 481111, Madhya Pradesh",
      "Acknowledgement: Within 24 hours, with a ticket number.",
      "Resolution: Within 7 days, or sooner where Section 11 requires.",
    ],
  },
  {
    title: "15. Company details",
    content: [
      "Legal name: Pettxo Private Limited",
      "CIN: U47912MP2026PTC082658",
      "DPIIT recognition: DIPP254544",
      "Registered office: Smt Kiran Goutam, 16176, W.No. 11, Baihar, Balaghat 481111, Madhya Pradesh",
      "Principal place of business: Pune, Maharashtra",
      "Email: hello@pettxo.com",
      "Website: pettxo.com",
    ],
  },
];

export default function CommunityGuidelines() {
  const rootRef = useRef(null);

  useGSAP(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) return;

    gsap.fromTo(
      rootRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }
    );
  }, { scope: rootRef });

  return (
    <>
      <SEO
        canonical="/community-guidelines"
        description="Read Pettxo's Community Guidelines covering respectful behaviour, animal welfare, privacy, content rules, reporting, enforcement, and appeals."
      />

      <section ref={rootRef} className="min-h-screen bg-beige">
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
            <h1 className="font-serif font-black text-dark text-[28px] md:text-[38px]">
              Community Guidelines
            </h1>

            <p className="mt-3 text-muted text-[14px] md:text-[15px]">
              Version 1.0 · Effective 5 October 2026
            </p>

            <p className="mt-5 text-dark font-light leading-[1.8] text-[15px] md:text-[16px]">
              Pettxo is a place for people who love pets to share, learn, help
              each other and find trusted care. These Community Guidelines
              explain what is welcome on Pettxo and what is not.
            </p>
          </div>

          <div className="rounded-[18px] bg-white/45 border border-[rgba(31,41,55,0.08)] p-6 md:p-8 mb-10">
            <h2 className="font-serif font-bold text-dark text-[21px] mb-5">
              At a glance
            </h2>

            <ul className="space-y-3">
              {[
                "Be kind. No harassment, threats or hate.",
                "Animals come first. No cruelty, and no buying, selling or breeding animals for money. Free adoption posts are welcome.",
                "Be honest. Real reviews, real accounts, real credentials. Say so if a realistic image or video was made or edited with AI.",
                "Respect privacy. Do not share anyone’s phone number, address, ID or private photos.",
                "Keep bookings and payments on Pettxo.",
                "See something wrong? Report it from the app. We act on reports quickly.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-[9px] w-[7px] h-[7px] rounded-full bg-orange flex-shrink-0" />
                  <span className="text-dark font-light leading-[1.7] text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            {SECTIONS.map((section, index) => (
              <section key={index}>
                <h2 className="font-serif font-bold text-dark text-[21px] md:text-[24px] mb-4">
                  {section.title}
                </h2>

                {section.content && (
                  <div className="space-y-3">
                    {section.content.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-dark font-light leading-[1.8] text-[15px] md:text-[16px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.subsections && (
                  <div className="space-y-7">
                    {section.subsections.map((sub, i) => (
                      <div key={i}>
                        <h3 className="font-semibold text-dark text-[16px] md:text-[17px] mb-3">
                          {sub.title}
                        </h3>

                        <div className="space-y-3">
                          {sub.content.map((paragraph, j) => (
                            <p
                              key={j}
                              className="text-dark font-light leading-[1.8] text-[15px] md:text-[16px]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          <div className="mt-14 pt-6 border-t border-[rgba(31,41,55,0.10)]">
            <p className="text-muted text-[13px] leading-[1.7]">
              Pettxo Private Limited · Community Guidelines · Version 1.0 ·
              Effective 5 October 2026
            </p>
          </div>

        </div>
      </section>
    </>
  );
}