import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const SECTIONS = [
  {
    title: "1. What Pettxo is",
    content: [
      "Pettxo is an online platform that lets people discover and book pet services, share posts about their pets, follow each other and send messages. Anyone who meets the requirements in Section 5 can list a service.",
      "Pettxo is not a pet care provider. We do not employ, train, supervise or control any provider. Every service is delivered by an independent provider, who is responsible for it.",
      "Pettxo is an intermediary under the Information Technology Act, 2000 for content that users post, and a marketplace e-commerce entity under the Consumer Protection (E-Commerce) Rules, 2020 for bookings. We follow the duties those laws place on us.",
      "What we do: we provide the app, show listings, carry messages, take payments through our payment partner, hold the money until a booking is complete, handle cancellations and refunds, and review disputes.",
    ],
  },
  {
    title: "2. Accepting these Terms",
    content: [
      "You accept these Terms when you create an account or use Pettxo. Before your first payment, and when you first list a service, you will also be asked to tick a box to confirm. That box is never ticked for you.",
      "You must be at least 18 years old and legally able to enter into a contract under the Indian Contract Act, 1872. Pettxo is not meant for anyone under 18, and we will close any account we learn belongs to someone under 18.",
      "These Terms work together with the Cancellation & Refund Policy, Privacy Policy, Community Guidelines and Service Provider Agreement, which form part of your agreement with us.",
      "The Cancellation & Refund Policy prevails over these Terms on cancellations, refunds, no-shows and disputes.",
      "The Service Provider Agreement prevails over these Terms on provider payouts, provider obligations and provider accountability.",
      "These Terms are in English. If you would like them in any language listed in the Eighth Schedule to the Constitution of India, write to hello@pettxo.com and we will provide them.",
    ],
  },
  {
    title: "3. Your account",
    content: [
      "Give accurate information and keep it up to date. One account per person. Do not create an account for someone else or pretend to be someone else.",
      "Keep your login details private. You are responsible for what happens under your account. Tell us at hello@pettxo.com straight away if you think someone else has accessed it.",
      "You can delete your account at any time from the app settings. If you have a booking in progress, or money is held for a booking, the deletion completes after that booking is settled. What happens to your data is explained in the Privacy Policy.",
    ],
  },
  {
    title: "4. Community features",
    content: [
      "Pettxo lets you create pet profiles, publish posts and images, follow other users and send messages.",
      "Your profile, pet profiles and posts can be seen by other Pettxo users. Share only what you are comfortable making visible.",
      "Any user can send a message to any other user. You can block or report anyone who bothers you.",
      "When you send a booking request, the provider does not see your name or phone number. These are shared with the provider only after your payment succeeds, so that the service can take place. If you message someone directly, they will see your profile in the usual way.",
      "Do not use messages to arrange bookings or payments outside Pettxo.",
      "Everything you post or send must follow the content rules in Section 13 and the Community Guidelines.",
    ],
  },
  {
    title: "5. Listing a service",
    subsections: [
      {
        title: "5.1 Who can list",
        content: [
          "Anyone aged 18 or over can list a pet service, including pet parents and pet lovers.",
          "Before a listing can be created, you must submit a valid government-issued photo ID and bank account details in your own name for payouts.",
          "If you submit an Aadhaar card, you may mask the first 8 digits of the Aadhaar number. We do not need the full number.",
        ],
      },
      {
        title: "5.2 Unverified and Verified listings",
        content: [
          "If ID and bank details are not submitted, no listing can be created.",
          "When a submission is under review, the listing goes live with an Unverified badge. Our team has not yet reviewed the ID.",
          "When review is approved, the listing shows a Verified badge. Our team has manually reviewed the ID and it appeared genuine and matched the account.",
          "If review is rejected, the listing is removed and the provider is told why. The provider can submit corrected documents.",
          "We aim to complete the review within 72 hours of submission. If a listing is removed after bookings have been paid, those bookings are cancelled and pet parents are refunded under Section 10 of the Cancellation & Refund Policy.",
        ],
      },
      {
        title: "5.3 What providers agree to",
        content: [
          "Providers accept the Service Provider Agreement, which sets out their obligations in full.",
          "Every provider must describe their service, price, location and availability accurately, and deliver the service as listed.",
          "Providers must hold every licence, registration and permission the law requires for the service they offer. For example, anyone offering veterinary services must be registered under the Indian Veterinary Council Act, 1984.",
          "Providers must treat animals humanely and comply with the Prevention of Cruelty to Animals Act, 1960 and all rules under it.",
          "Providers must take bookings and payments only through Pettxo for customers found on Pettxo.",
          "Providers must upload only genuine certificates, and remove any that expire or are withdrawn.",
        ],
      },
    ],
  },
  {
    title: "6. What badges and certificates mean",
    content: [
      "A Verified badge means only that our team manually reviewed the provider’s government ID. It is not a background check, a police verification, or a check of skills or character.",
      "An Unverified badge means that review has not been completed yet. You can still book, but please take extra care.",
      "Certificates shown on a profile are uploaded by the provider. Pettxo does not check whether any certificate, qualification or registration is genuine or current. This includes veterinary registration.",
      "Before you book, and before you hand over your pet, check the provider’s credentials yourself, including by asking to see the original documents. The choice of provider is yours.",
      "This does not reduce any right you have under consumer law against a provider who misrepresents their service, or our duty to act on complaints about misleading listings.",
    ],
  },
  {
    title: "7. How bookings work",
    content: [
      "Request: You choose a service, date and slot, and send a request. Nothing is charged.",
      "Provider responds: The provider has 60 minutes, counted within their working hours, to accept or decline. If they do not respond, the request expires.",
      "Payment: If the provider accepts, you have 60 minutes to pay. If you do not pay in time, the request expires and nothing is charged.",
      "Confirmed: The booking is confirmed only when your payment succeeds. If someone else pays for the same slot first, your request closes and nothing is charged.",
      "OTP: On the service date, the app shows you an OTP. Give it to the provider only when the service is about to begin. When the provider enters it, the service has started. The OTP is valid until 11:59 PM on the service date.",
      "Completion: The provider marks the service ended. You have 24 hours to raise a problem. After that, the provider is paid.",
      "Rating: You can rate the service once after it is completed.",
      "The contract for the service is between you and the provider. It is formed when your payment succeeds, on the terms shown in the listing and in these Terms. Pettxo is not a party to that contract, but we run the booking, payment, refund and dispute process described in these Terms and the Cancellation & Refund Policy.",
      "Never share your OTP early. If you share it before the service begins and the provider enters it, the service is treated as started.",
      "Pet parents must share accurate information about their pet, including behaviour, health conditions and vaccination status, and turn up on time.",
      "Bookings cannot be rescheduled. To change the time, cancel and send a new request.",
    ],
  },
  {
    title: "8. Payments",
    subsections: [
      {
        title: "8.1 Price",
        content: [
          "The price shown before you pay is the total amount you pay for the booking. Pettxo does not add any charge at checkout that is not shown on the payment screen.",
        ],
      },
      {
        title: "8.2 How money moves",
        content: [
          "Payments are processed by our payment partner, Razorpay. We never see or store your full card details.",
          "Pettxo receives the amount you pay and holds it until the booking is complete and the dispute window has closed. It then pays the provider their share and keeps its platform fee, as set out in the Service Provider Agreement.",
          "If you are charged but the booking is not confirmed, or you are charged twice, you are refunded in full automatically.",
        ],
      },
      {
        title: "8.3 Keep it on Pettxo",
        content: [
          "Do not pay, or ask to be paid, outside Pettxo for a service found on Pettxo.",
          "Payments made outside Pettxo, in cash, by UPI or any other way, have no refund, no dispute review and no OTP record. Pettxo cannot help if anything goes wrong.",
          "Asking for or accepting off-platform payment can lead to suspension of both accounts. If a provider asks you to pay outside Pettxo, please report it.",
        ],
      },
      {
        title: "8.4 Taxes",
        content: [
          "Each user is responsible for their own tax obligations. Pettxo complies with the tax laws that apply to it, including any deduction or collection of tax at source that the law requires on payouts to providers.",
        ],
      },
    ],
  },
  {
    title: "9. Cancellations and refunds",
    content: [
      "Cancellations, refunds, no-shows and disputes are governed by the Cancellation & Refund Policy, which prevails over these Terms on those subjects.",
      "Cancelling before you pay is always free.",
      "After you pay, your refund depends on how much time is left before the service starts: 95%, 75%, 50%, 25% or 0%.",
      "If the provider or Pettxo cancels a paid booking, you get back 100% of what you paid. If Pettxo cancels and you were not at fault, you also receive compensation.",
      "After the OTP is entered, the booking cannot be cancelled. If something went wrong, raise a dispute within 24 hours of the service ending.",
      "Refunds go back to the account you paid from, within 5 to 7 working days.",
    ],
  },
  {
    title: "10. How listings are ordered in search",
    content: [
      "You first see listings that match the service category, area and other filters you choose.",
      "Within those results, listings with higher ratings from completed bookings generally appear higher.",
      "How a provider handles booking requests and paid bookings may affect where their listings appear. For example, leaving requests unanswered or cancelling paid bookings may place a listing lower. This affects position only; it does not remove or pause a listing.",
      "No one can pay for a higher position. There are no paid or sponsored placements on Pettxo at present. If we introduce them, they will be clearly labelled “Sponsored” and this section will be updated before they start.",
      "Pettxo does not favour any provider for any other reason, and treats Verified and Unverified listings the same in ranking.",
    ],
  },
  {
    title: "11. Ratings and reviews",
    content: [
      "Only the person who booked and paid for a service can rate it, once, after the service is completed. Ratings belong to the service listing.",
      "Ratings and reviews must be honest and based on your own experience. Providers must not rate their own services, pay for reviews, or pressure anyone to change a rating.",
      "We do not edit reviews. We remove a review only if it breaks the law, these Terms or the Community Guidelines, for example if it contains abuse or personal information.",
    ],
  },
  {
    title: "12. Adoption, rescue and animal sales",
    content: [
      "You may post about pets that need a home, rescues, lost pets and found pets, as long as the adoption is free.",
      "You must not use Pettxo to buy, sell or breed animals for money, or to ask for or offer any payment, deposit or “rehoming fee” for an animal. Listings for breeding services or animal sales are not allowed.",
      "Pettxo does not arrange, check or take part in any adoption or rehoming. If you give or take a pet, you do so at your own risk and must follow all laws on animal welfare and transfer. Please meet safely and check the other person yourself.",
    ],
  },
  {
    title: "13. Content rules",
    content: [
      "Under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, as amended, you must not post, share, upload or send anything, in posts, comments, profiles, listings, reviews or messages, that:",
      "• belongs to someone else and you have no right to share;",
      "• is obscene, pornographic, paedophilic, invades someone’s privacy (including bodily privacy), insults or harasses on the basis of gender, is racially or ethnically objectionable, relates to money laundering or gambling, promotes enmity between groups, or encourages violence;",
      "• is harmful to children;",
      "• infringes a patent, trademark, copyright or other proprietary right;",
      "• deceives or misleads anyone about where it came from, or knowingly shares false or misleading information;",
      "• impersonates another person;",
      "• threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with other countries or public order, incites any offence, or insults another nation;",
      "• contains viruses or any code designed to damage or interfere with any device or system; or",
      "• breaks any law in force in India.",
      "In addition, on Pettxo you must not post content showing cruelty to animals (other than to report it to the authorities), promote unlicensed veterinary treatment, or share another person’s phone number, address or ID.",
    ],
  },
  {
    title: "13.1 AI-generated and edited content",
    content: [
      "If you post an image, audio or video that has been created or altered by AI or other tools so that it looks real, you must say so in the post.",
      "You must never post AI-generated or altered content that shows real people or events falsely, creates false documents, or contains sexual material involving children or intimate images of anyone without their consent.",
      "Doing so may be punishable under the IT Act, 2000, the Bharatiya Nyaya Sanhita, 2023, the Protection of Children from Sexual Offences Act, 2012 and other laws.",
    ],
  },
  {
    title: "14. Your content",
    content: [
      "You own what you post. By posting it on Pettxo, you allow Pettxo to store, display and share it within the Pettxo app and website so that the platform works.",
      "You also allow us to feature public posts on Pettxo’s official social media pages, with credit to you where practical. This permission is free of charge and does not transfer ownership to us.",
      "If you do not want a post featured outside the app, write to hello@pettxo.com and we will stop using it in new material.",
      "When you delete a post or your account, the permission ends, except for copies we must keep by law, for a dispute, or in routine backups that are deleted in the ordinary course.",
      "You confirm that you have the right to post your content, and that anyone clearly identifiable in it has agreed.",
    ],
  },
  {
    title: "15. Reporting, moderation and removal",
    content: [
      "You can report any post, comment, profile, listing, review or message using the report option in the app, or by writing to hello@pettxo.com.",
      "When we receive a court order or a notice from the government or its authorised agency, we remove or disable the content within the time the law requires.",
      "Intimate images of a person shared without consent, including altered images: Remove or disable access within 2 hours of the complaint.",
      "Content that breaks the rules in Section 13: Act on the complaint within 36 hours.",
      "Any other complaint: Acknowledge within 24 hours and resolve within 7 days.",
      "We may also remove content, limit features or suspend an account on our own if we find content that breaks these Terms or the law. Where appropriate, we will tell you what was removed and why, and you can ask us to review the decision.",
      "Where content involves an offence, such as material covered by the Protection of Children from Sexual Offences Act, 2012, we will report it to the authorities as the law requires, and may preserve information for investigation.",
      "We will remind all users of these rules at least once every three months.",
    ],
  },
  {
    title: "16. Other things you must not do",
    content: [
      "Use Pettxo for fraud, or submit false, altered or someone else’s ID or bank details.",
      "Harass, threaten, stalk or abuse any user, provider, animal or member of the Pettxo team.",
      "Create fake accounts, fake bookings, fake reviews or fake disputes, or work with another user to obtain refunds or payouts dishonestly.",
      "Collect other users’ personal data, or contact users for purposes unrelated to Pettxo, such as spam or marketing.",
      "Copy, scrape, reverse engineer or interfere with the app, website or their security, or use bots or automated tools on them.",
    ],
  },
  {
    title: "17. Pet safety and emergencies",
    content: [
      "If a pet has a medical emergency during a service, the provider should contact the pet parent immediately. If the pet parent cannot be reached and the pet needs urgent care, the provider may take the pet to the nearest available veterinarian and must keep the pet parent informed.",
      "Reasonable veterinary costs of emergency care are the pet parent’s responsibility, unless the emergency was caused by the provider, in which case the provider is responsible.",
      "Pettxo does not provide veterinary advice or treatment and does not arrange insurance of any kind. Nothing on Pettxo replaces the advice of a qualified veterinarian.",
    ],
  },
  {
    title: "18. Suspension and closure of accounts",
    content: [
      "We may remove content or listings, limit features, or suspend or close an account if these Terms, the Community Guidelines or the Service Provider Agreement are broken; there is a risk to the safety of people or animals, or a risk of fraud; the ID or bank details submitted are false, altered or cannot be verified; or the law, a court or a government authority requires it.",
      "Where it is safe and lawful to do so, we will tell you the reason and give you a chance to respond.",
      "Bookings that are cancelled because of a suspension are refunded under the Cancellation & Refund Policy.",
      "Obligations that arose before a suspension or closure, such as refunds and payouts already due, continue after it.",
    ],
  },
  {
    title: "19. Pettxo’s intellectual property",
    content: [
      "The Pettxo name, logo, app, website, design and software belong to Pettxo Private Limited.",
      "You may use them only to use Pettxo as intended. You must not copy them, use our name or logo without written permission, or build a similar service using our code or content.",
      "If you send us ideas or feedback, we may use them freely.",
    ],
  },
  {
    title: "20. Disclaimers",
    content: [
      "We work to keep Pettxo available, accurate and secure, but we cannot promise that it will always be available or free of errors.",
      "Pettxo does not guarantee the quality, safety, legality or result of any service, post, adoption or interaction between users. Providers are responsible for their services and users are responsible for what they post and do.",
      "Pettxo does not guarantee that information in listings, profiles, certificates or posts is accurate, beyond the ID review described in Section 5.",
      "Pet care carries some risk that cannot be fully removed, however careful everyone is. Please choose providers carefully and share full information about your pet.",
    ],
  },
  {
    title: "21. Limits on our liability",
    content: [
      "Pettxo is not responsible for loss caused by the acts or omissions of providers or other users, including injury to a pet or person, or damage to property, during a service. Claims about a service should be made against the provider. Pettxo will help by sharing the booking records we hold and handling the dispute under the Cancellation & Refund Policy.",
      "Pettxo is not responsible for indirect or consequential loss, such as loss of profit, business, opportunity or goodwill.",
      "Where Pettxo is responsible for a loss, our total liability for any claim is limited to the amount you paid through Pettxo for the booking the claim relates to, or ₹10,000, whichever is higher.",
      "Nothing in these Terms limits or excludes liability that cannot be limited under Indian law, including liability for fraud, or for death or personal injury caused by our own negligence, or any right you have as a consumer under the Consumer Protection Act, 2019.",
    ],
  },
  {
    title: "22. Your responsibility to us",
    content: [
      "If a claim is made against Pettxo because you broke these Terms or the law, posted unlawful content, gave false information or documents, or, as a provider, caused harm while delivering a service, you agree to cover Pettxo’s reasonable losses and legal costs arising from that claim.",
      "This does not apply to the extent the loss was caused by Pettxo.",
    ],
  },
  {
    title: "23. Events outside our control",
    content: [
      "Pettxo is not responsible for delay or failure caused by events outside its reasonable control, such as natural disasters, pandemics, government orders, war, civil unrest, or failures of telecom, power, payment or cloud services.",
      "How such events affect bookings is set out in the Cancellation & Refund Policy.",
    ],
  },
  {
    title: "24. Changes to these Terms and to Pettxo",
    content: [
      "We will tell you about material changes to these Terms by in-app notification or email at least 15 days before they take effect. Changes required urgently by law, or to protect users’ safety or security, may take effect sooner.",
      "If you continue to use Pettxo after a change takes effect, the new Terms apply. If you do not agree, you can delete your account. A change never applies to a booking already paid for.",
      "We may add, change or remove features. Where a change significantly affects a paid booking, the Cancellation & Refund Policy protects your money.",
    ],
  },
  {
    title: "25. Complaints and Grievance Officer",
    content: [
      "Under the IT Rules, 2021 and the Consumer Protection (E-Commerce) Rules, 2020, we have appointed a Grievance Officer, who is also our contact for coordination with law enforcement.",
      "Grievance Officer: Hrishi Gautam",
      "Email: hello@pettxo.com",
      "Address: Pettxo Private Limited, Smt Kiran Goutam, 16176, W.No. 11, Baihar, Balaghat 481111, Madhya Pradesh",
      "Acknowledgement: Within 24 hours, with a ticket number to track the complaint.",
      "Resolution: Within 7 days, or sooner where Section 15 requires.",
      "If you are not satisfied with the Grievance Officer’s decision on a content complaint, you can appeal to the Grievance Appellate Committee set up by the Government of India, within 30 days of the decision.",
      "For consumer complaints, you can also contact the National Consumer Helpline on 1915 or through the NCH app or website.",
    ],
  },
  {
    title: "26. Governing law and disputes",
    content: [
      "These Terms are governed by the laws of India.",
      "Please contact us first. Most problems can be solved through the app or the Grievance Officer.",
      "Subject to the rights below, the courts at Balaghat, Madhya Pradesh, where Pettxo’s registered office is located, have exclusive jurisdiction over disputes arising from these Terms.",
      "As a consumer, you may always file a complaint before the Consumer Commission having jurisdiction where you live or work, or where the cause of action arose, as allowed by the Consumer Protection Act, 2019. Nothing in these Terms limits that right.",
      "Neither side is required to go to arbitration. Arbitration under the Arbitration and Conciliation Act, 1996 can be used only if both sides agree to it in writing after a dispute has arisen.",
    ],
  },
  {
    title: "27. General",
    content: [
      "If any part of these Terms is found invalid, the rest continues to apply, and the invalid part is applied as far as the law allows.",
      "If we do not enforce a right straight away, we do not give it up.",
      "You may not transfer your account or your rights under these Terms. We may transfer our rights and obligations to a company that takes over the Pettxo business, and will tell you if we do.",
      "We send notices to you by in-app notification or to your registered email or phone number. You can send notices to us at hello@pettxo.com or our registered office.",
      "These Terms, together with the documents listed in Section 2, are the whole agreement between you and Pettxo about your use of Pettxo.",
    ],
  },
  {
    title: "28. Company details",
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

export default function Terms() {
  return (
    <>
      <SEO
        canonical="/terms-of-service"
        description="Read Pettxo's Terms of Service covering accounts, bookings, payments, content, providers, cancellations, disputes, and use of the platform."
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
              Terms of Service
            </h1>

            <p className="mt-3 text-muted text-[14px] md:text-[15px]">
              Version 2.0 · Effective 5 October 2026
            </p>

            <p className="mt-5 text-dark font-light leading-[1.8] text-[15px] md:text-[16px]">
              These Terms of Service ("Terms") are a legally binding agreement
              between you and Pettxo Private Limited ("Pettxo", "we", "us").
              They apply to everyone who uses the Pettxo app or website,
              whether you are a pet parent, a pet lover, a service provider,
              or all of these.
            </p>
          </div>

          <div className="rounded-[18px] bg-white/45 border border-[rgba(31,41,55,0.08)] p-6 md:p-8 mb-10">
            <h2 className="font-serif font-bold text-dark text-[21px] mb-5">
              At a glance
            </h2>

            <ul className="space-y-3">
              {[
                "Pettxo is a discovery platform. We help you find pet services and other pet people. Services are delivered by independent providers, not by Pettxo.",
                "A Verified badge means we checked a provider’s government ID. It does not mean we checked their skills, qualifications, certificates or background.",
                "Sending a booking request is free. A booking is confirmed only when you pay, and a service starts only when the provider enters your OTP.",
                "Keep every booking and payment on Pettxo. Deals made outside Pettxo have no refund, dispute or OTP protection.",
                "Post only what is lawful and yours to share. Buying, selling or breeding animals for money is not allowed.",
                "Complaints go to our Grievance Officer at hello@pettxo.com. We acknowledge within 24 hours and resolve within 7 days.",
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
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif font-bold text-dark text-[21px] md:text-[24px] mb-4">
                  {section.title}
                </h2>

                {section.content && (
                  <div className="space-y-3">
                    {section.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-dark font-light leading-[1.8] text-[15px] md:text-[16px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.subsections && (
                  <div className="space-y-7">
                    {section.subsections.map((subsection) => (
                      <div key={subsection.title}>
                        <h3 className="font-semibold text-dark text-[16px] md:text-[17px] mb-3">
                          {subsection.title}
                        </h3>

                        <div className="space-y-3">
                          {subsection.content.map((paragraph, index) => (
                            <p
                              key={index}
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
              Pettxo Private Limited · Terms of Service · Version 2.0 ·
              Effective 5 October 2026
            </p>
          </div>

        </div>
      </section>
    </>
  );
}