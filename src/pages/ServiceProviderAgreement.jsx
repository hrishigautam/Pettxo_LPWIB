import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SEO from "../components/SEO.jsx";

const SECTIONS = [
  {
    title: "1. Accepting this Agreement",
    content: [
      "You accept this Agreement by ticking the box in the app before your first listing is created. The box is never ticked for you.",
      "This Agreement works together with the Pettxo Terms of Service, Cancellation & Refund Policy, Privacy Policy and Community Guidelines, which also apply to you. On provider obligations and payouts, this Agreement prevails over the Terms of Service.",
      "The payout amounts in this Agreement are the same as the provider shares in the Cancellation & Refund Policy. Pettxo keeps the two documents consistent.",
      "This Agreement is in English. If you would like it in any language listed in the Eighth Schedule to the Constitution of India, write to hello@pettxo.com and we will provide it.",
    ],
  },
  {
    title: "2. You are an independent provider",
    content: [
      "You are an independent service provider. Nothing in this Agreement makes you an employee, agent, partner or franchisee of Pettxo.",
      "You decide how, when and where you deliver your services, what you charge, and whether to accept any booking. Pettxo’s booking and payment rules govern how the platform works; they do not control how you do your work.",
      "You provide your own tools, products, transport and workspace, and bear your own costs.",
      "You are free to work on other platforms and with other customers, subject to Section 11.",
      "You are not entitled to salary or employee benefits from Pettxo, such as provident fund, ESIC, gratuity or paid leave.",
      "You cannot make promises or enter into contracts on Pettxo’s behalf.",
    ],
  },
  {
    title: "3. Who can list, and what you must submit",
    subsections: [
      {
        title: "3.1 Eligibility",
        content: [
          "To list a service, and for as long as you have a listing, you must:",
          "• be at least 18 years old and legally able to enter into a contract, or be a business registered in India acting through an authorised person aged 18 or over;",
          "• not be barred by any court order or law from providing pet services; and",
          "• not have had a Pettxo account closed for serious breach, unless we have agreed in writing that you may return.",
        ],
      },
      {
        title: "3.2 What you must submit before your first listing",
        content: [
          "Government photo ID: Any valid government-issued photo ID of the person who will deliver the service, or of the authorised person for a business. If you submit an Aadhaar card, you may mask the first 8 digits of the Aadhaar number.",
          "Bank details: Account holder name, account number and IFSC of an Indian bank account in your own name, or in the business’s name. The name must match your ID or business.",
          "PAN: We may ask for your PAN where tax law requires it. See Section 10.",
          "Everything you submit must be genuine, current and your own. Submitting someone else’s ID or bank details, or an altered document, is a serious breach and may be an offence.",
          "Keep your details up to date. Update your bank details, contact details or service area in the app within 7 days of any change. Pettxo is not responsible for a payout sent to the wrong account because of details you gave us.",
        ],
      },
      {
        title: "3.3 Information shown to pet parents",
        content: [
          "Under the Consumer Protection (E-Commerce) Rules, 2020, pet parents must be able to see who they are dealing with. Your listing will show your name or business name, service area and rating.",
          "If a pet parent makes a complaint about a service, or an authority asks, we may share your contact details and address with them.",
        ],
      },
    ],
  },
  {
    title: "4. Unverified and Verified listings",
    content: [
      "Details submitted — Your listing goes live straight away with an Unverified badge. It can be found and booked.",
      "Review — Our team manually reviews your ID. We aim to finish within 72 hours.",
      "Approved — Your listing shows a Verified badge.",
      "Rejected — Your listing is removed and we tell you why. You can submit corrected documents.",
      "If your listing is removed after bookings have been paid, those bookings are cancelled and the pet parents are refunded in full under the Cancellation & Refund Policy. You receive nothing for those bookings.",
      "If the removal is caused by false or altered documents, Pettxo may recover from your future payouts any compensation it has to pay pet parents as a result.",
      "The Verified badge confirms only that we reviewed your ID. It does not confirm your skills, qualifications or certificates, and you must not describe it as anything more.",
    ],
  },
  {
    title: "5. Your listings",
    content: [
      "Describe your service, price, duration, location, availability and what is included accurately and honestly, and keep them up to date. Follow the listing rules shown in the app.",
      "The price on your listing is the full price. Do not ask a pet parent to pay anything extra for what the listing includes. If there are optional extras, describe them in the listing.",
      "Licences and registrations. You must hold every licence, registration and permission the law requires for your service and location. Anyone offering veterinary services must be registered under the Indian Veterinary Council Act, 1984. Do not describe yourself as holding a qualification you do not hold.",
      "Certificates. Uploading certificates is optional. Any certificate you upload must be genuine and current. Remove it if it expires or is withdrawn. Pettxo does not check certificates.",
      "Animal welfare. You must treat every animal humanely and follow the Prevention of Cruelty to Animals Act, 1960 and the rules made under it.",
      "You must not list breeding services, or the sale or paid transfer of any animal; any service involving cruelty, or any activity banned under animal welfare or wildlife protection law; services for animals whose keeping or trade is restricted by law; or any service you cannot legally and practically deliver at the price, time and place listed.",
    ],
  },
  {
    title: "6. Booking requests",
    content: [
      "When a pet parent sends a request, you have 60 minutes, counted only within your working hours as set in the app, to accept or decline it. If you do not respond, the request expires and nothing is charged.",
      "You may decline any request. Declining is always allowed.",
      "Booking requests do not show the pet parent’s name or phone number. Once the pet parent pays, you will see their name and phone number so that you can deliver the service.",
      "After you accept, the pet parent has 60 minutes to pay. The booking is confirmed only when payment succeeds. Keep your availability up to date so that you only receive requests you can take.",
    ],
  },
  {
    title: "7. Delivering the service",
    subsections: [
      {
        title: "7.1 Once a booking is confirmed",
        content: [
          "A confirmed booking is a commitment. You must:",
          "• be ready at the agreed place and time, with everything the listing says you will provide;",
          "• ask for the OTP at the start of the service and enter it in the app before you begin. The service starts only when you enter the OTP;",
          "• deliver the service as listed, for the listed duration;",
          "• tap “End Service” in the app when you finish; and",
          "• return the pet safely to the pet parent or the person they nominate.",
        ],
      },
      {
        title: "7.2 OTP rules",
        content: [
          "The OTP is valid until 11:59 PM on the service date. If a pet parent arrives late on the service date with a valid OTP, you must still serve them.",
          "Never enter an OTP before the service actually begins, and never ask for it in advance.",
          "No other proof, such as a verbal agreement, message or photo, counts as the start of a service.",
        ],
      },
      {
        title: "7.3 If the app fails",
        content: [
          "If a genuine app problem stops you entering the OTP while you and the pet parent are both at the service location, message Pettxo through in-app support or at hello@pettxo.com before you start.",
          "Ask the pet parent to confirm in writing, through the app or by SMS, that they are present. Keep that confirmation.",
          "A service started without any notice to Pettxo and without written confirmation from the pet parent does not qualify for payout.",
        ],
      },
      {
        title: "7.4 By entering the OTP, you confirm that",
        content: [
          "• you are at the service location, the service is beginning, and the pet parent or their nominee is present;",
          "• you have had a chance to see the pet and consider what the pet parent has told you about its health, behaviour and vaccinations, and you are willing to go ahead; and",
          "• you are responsible for the pet’s safety and welfare from now until it is returned.",
        ],
      },
      {
        title: "7.5 Emergencies and products",
        content: [
          "If a pet has a medical emergency during a service, contact the pet parent immediately. If they cannot be reached and the pet needs urgent care, take the pet to the nearest available veterinarian and keep the pet parent informed.",
          "If the emergency was caused by you, the veterinary costs are your responsibility.",
          "Before using any product or technique the pet parent would not expect from your listing, get their agreement, in the app’s chat where possible.",
        ],
      },
    ],
  },
  {
    title: "8. Reliability and your position in search",
    content: [
      "How you handle requests and bookings may affect where your listings appear in search. For example, leaving requests unanswered or cancelling paid bookings may place your listings lower. This affects position only. Your listings are not paused or removed for this reason.",
      "Declining a request does not count against you in the same way as leaving it unanswered.",
      "Section 15 still applies to serious or deliberate misconduct, such as fraud or repeatedly cancelling paid bookings to harm pet parents.",
    ],
  },
  {
    title: "9. Fees and payouts",
    subsections: [
      {
        title: "9.1 Pettxo’s fee",
        content: [
          "Pettxo charges a platform fee of 15% of the amount the pet parent paid on each completed booking. You receive the remaining 85%. Pettxo pays the payment gateway charges; they are not deducted from your payout.",
        ],
      },
      {
        title: "9.2 What you receive in each case",
        content: [
          "Service completed, no dispute — Pet parent gets back 0% · You receive 85% · Pettxo keeps 15%.",
          "Pet parent cancels more than 24 hours before — 95% back · You receive 0% · Pettxo keeps 5%.",
          "Pet parent cancels 12 to 24 hours before — 75% back · You receive 15% · Pettxo keeps 10%.",
          "Pet parent cancels 6 to 12 hours before — 50% back · You receive 35% · Pettxo keeps 15%.",
          "Pet parent cancels 2 to 6 hours before — 25% back · You receive 60% · Pettxo keeps 15%.",
          "Pet parent cancels 2 hours or less before — 0% back · You receive 85% · Pettxo keeps 15%.",
          "Pet parent does not turn up (no-show) — 0% back · You receive 85% · Pettxo keeps 15%.",
          "You cancel a paid booking — 100% back · You receive 0% · Pettxo keeps 0%.",
          "Dispute finds you at fault — 100% back · You receive 0% · Pettxo keeps 0%.",
          "Pettxo cancels, or an event outside anyone’s control stops the service — 100% back · You receive 0% · Pettxo keeps 0%.",
          "All percentages are of the amount the pet parent paid. The time bands and the way time is measured are exactly as set out in Section 5 of the Cancellation & Refund Policy.",
        ],
      },
      {
        title: "9.3 When you are paid",
        content: [
          "Completed bookings: your share becomes payable 24 hours after you tap “End Service”, if the pet parent has not raised a dispute.",
          "Late cancellations and no-shows: your share becomes payable 24 hours after the cancellation or the no-show, if no dispute has been raised.",
          "If a dispute is raised: your share becomes payable when the dispute is decided in your favour.",
          "We aim to send payouts within 3 working days of them becoming payable, by bank transfer or UPI to your registered account.",
          "If you think a payout is wrong, tell us within 30 days of it being sent.",
        ],
      },
      {
        title: "9.4 Changes to the fee",
        content: [
          "We will give you at least 15 days’ notice before any change to the fee or to the payout shares takes effect. A change never applies to a booking already requested before the change takes effect.",
        ],
      },
    ],
  },
  {
    title: "10. Tax",
    content: [
      "Your earnings through Pettxo are your income. You are responsible for declaring them, filing your returns and paying your taxes. Keep your own records.",
      "Where the Income-tax Act, 2025 or any other law requires Pettxo, as an e-commerce operator, to deduct tax at source from your payouts, Pettxo will deduct it at the rate the law prescribes, deposit it with the government and file the required statements, so that it appears in your tax records.",
      "If you do not give us your PAN when the law requires it, the law may require tax to be deducted at a higher rate.",
      "You are responsible for your own GST registration where the law requires it. If you are registered under GST, give us your GSTIN in the app, as it may affect Pettxo’s obligations.",
      "Pettxo is not charging GST on its fee at present. If Pettxo becomes required to charge GST on its fee, we will tell you at least 30 days in advance.",
      "Pettxo does not give tax advice. Please speak to a chartered accountant or tax adviser about your own situation.",
    ],
  },
  {
    title: "11. Keep bookings and payments on Pettxo",
    content: [
      "You must not take bookings or payments outside Pettxo from pet parents you met through Pettxo.",
      "This includes asking for or accepting cash, UPI or any other direct payment for a Pettxo booking; sharing your UPI ID or payment details to arrange a booking; asking a pet parent to cancel on Pettxo and book with you directly; and offering a discount or other benefit to do so.",
      "First time — A written warning and a 30-day suspension of your account.",
      "Second time — Permanent closure of your account.",
      "Payouts for genuine bookings you completed on Pettxo are still paid after a suspension or closure. Pettxo may withhold a payout only for a booking that was itself part of the off-platform arrangement or other fraud, and may recover any loss Pettxo can show it suffered as a result.",
      "If a pet parent asks you to pay or be paid outside Pettxo, please tell us at hello@pettxo.com.",
    ],
  },
  {
    title: "12. Other things you must not do",
    content: [
      "Create fake, duplicate or misleading listings, or impersonate another person or business.",
      "Create more than one provider account, including to get around a suspension.",
      "Rate your own service, buy or trade reviews, or pressure a pet parent about their rating.",
      "Work with a pet parent or anyone else to create fake bookings, fake cancellations, fake disputes or fake payouts.",
      "Treat any animal cruelly, neglect it or put it at risk.",
      "Break the content rules in the Terms of Service or the Community Guidelines, or any law, in connection with Pettxo.",
    ],
  },
  {
    title: "13. Pet parents’ personal data",
    content: [
      "Pettxo shares a pet parent’s name and phone number with you only so that you can deliver their booking.",
      "Use their details only to coordinate and deliver that booking.",
      "Do not save, share, sell or use them for marketing, referrals or any other purpose.",
      "Delete them once the booking and any dispute about it are finished.",
      "How Pettxo handles your own personal data, including your ID and bank details, is explained in the Privacy Policy.",
    ],
  },
  {
    title: "14. Responsibility for your service",
    content: [
      "You are responsible for the service you deliver. From the moment you enter the OTP until the pet is returned, you are responsible for the pet’s safety and welfare.",
      "You are responsible for any injury, illness or death of a pet, damage to property, or injury to any person caused by your negligence, lack of care or breach of this Agreement while delivering a service.",
      "We strongly recommend that you have suitable insurance for your service. Pettxo does not provide insurance and does not require proof of it.",
      "Pettxo is a platform. It is not responsible for how you deliver your service or for its outcome.",
      "If a claim is made against Pettxo because of your service, your breach of this Agreement or the law, your listing, or information you gave, you agree to cover Pettxo’s reasonable losses and legal costs arising from that claim. This does not apply to the extent the loss was caused by Pettxo.",
    ],
  },
  {
    title: "15. Removing listings and suspending accounts",
    content: [
      "We may remove a listing, limit features, or suspend or close your account if your ID or bank details are rejected, false, altered or cannot be verified; you break this Agreement, the Terms of Service or the Community Guidelines in a serious way, or repeatedly; there is a risk to the safety of people or animals, or evidence of fraud; or the law, a court or a government authority requires it.",
      "Except where there is an urgent risk to safety, evidence of fraud, or a legal requirement, we will tell you the reason first and give you a chance to respond.",
      "If your account is suspended or closed, your paid bookings are cancelled and the pet parents are refunded under the Cancellation & Refund Policy. Payouts already payable to you are still paid, except as set out in Section 11.",
      "You can stop listing at any time by removing your listings in the app. You must still deliver, or cancel under Section 9, any booking already confirmed.",
    ],
  },
  {
    title: "16. Booking disputes",
    content: [
      "Pet parent — A problem with a completed service: 24 hours after you tap “End Service”.",
      "Pet parent — A no-show that was not their fault: 24 hours after the no-show is recorded.",
      "You — A no-show recorded because of an app problem, or a no-show you dispute: 24 hours after the no-show is recorded.",
      "You — A wrong payout amount: 30 days after the payout is sent.",
      "Raise disputes through the app. Respond to any dispute about your booking within 48 hours. If you do not respond, we will decide on the evidence we have.",
      "We look at OTP records, the booking timeline, in-app messages and any photos, veterinary reports or other evidence either side provides. We aim to decide within 7 working days and will tell you the outcome and the reason.",
      "If you disagree, you can ask for one review by a different Pettxo team member within 7 days. This is Pettxo’s final internal decision, but it does not affect your right to take the matter further under Indian law.",
      "Money for a disputed booking stays with Pettxo until the dispute is decided. Refunds after a dispute come from the amount the pet parent paid for that booking.",
    ],
  },
  {
    title: "17. Pettxo’s liability to you",
    content: [
      "Pettxo is not responsible for loss of profit, business, customers or goodwill, or other indirect loss, including loss caused by app downtime or by payment or banking partners.",
      "Where Pettxo is responsible for a loss, our total liability to you is limited to the fees Pettxo earned from your bookings in the 3 months before the claim arose, or ₹10,000, whichever is higher.",
      "This limit never reduces payouts Pettxo owes you under this Agreement, and does not limit liability for fraud or anything else that cannot be limited under Indian law.",
    ],
  },
  {
    title: "18. Changes to this Agreement",
    content: [
      "We will tell you about material changes by in-app notification or email at least 15 days before they take effect. Changes required urgently by law, or to protect safety or security, may take effect sooner.",
      "If you keep a listing live after a change takes effect, the new version applies. If you do not agree, remove your listings before the change takes effect. You must still deliver, or cancel under Section 9, any booking already confirmed.",
      "A change never affects a booking already requested before it takes effect.",
    ],
  },
  {
    title: "19. Complaints and Grievance Officer",
    content: [
      "Grievance Officer: Hrishi Gautam",
      "Email: hello@pettxo.com",
      "Acknowledgement: Within 24 hours, with a ticket number to track the complaint.",
      "Resolution: Within 7 days.",
      "For decisions about content, you can also appeal to the Grievance Appellate Committee set up by the Government of India within 30 days of the Grievance Officer’s decision, as explained in the Terms of Service.",
    ],
  },
  {
    title: "20. Governing law and disputes",
    content: [
      "This Agreement is governed by the laws of India.",
      "Please contact us first. Most problems can be solved through the app or the Grievance Officer.",
      "Subject to the point below, the courts at Balaghat, Madhya Pradesh, where Pettxo’s registered office is located, have exclusive jurisdiction over disputes arising from this Agreement.",
      "If you use Pettxo to earn your livelihood through self-employment, you may have rights as a consumer under the Consumer Protection Act, 2019, including the right to file a complaint before the Consumer Commission where you live or work. Nothing in this Agreement limits those rights.",
      "Neither side is required to go to arbitration. Arbitration under the Arbitration and Conciliation Act, 1996 can be used only if both sides agree to it in writing after a dispute has arisen.",
    ],
  },
  {
    title: "21. General",
    content: [
      "Electronic acceptance. This Agreement is accepted electronically and is valid under Section 10A of the Information Technology Act, 2000.",
      "Acceptance record. When you accept, we record your user ID, registered phone number, the version of this Agreement, and the date and time. We keep this record for as long as the law requires, as explained in the Privacy Policy.",
      "Notices. We send notices by in-app notification or to your registered phone number or email. You can send notices to hello@pettxo.com or to our registered office.",
      "Severability. If any part of this Agreement is found invalid, the rest continues to apply.",
      "No waiver. If we do not enforce a right straight away, we do not give it up.",
      "Transfer. You may not transfer this Agreement or your account. We may transfer it to a company that takes over the Pettxo business, and will tell you if we do.",
      "Survival. Sections 11, 13, 14, 17, 20 and this Section continue after this Agreement ends, as do payouts and refunds already due.",
      "Whole agreement. This Agreement, together with the documents listed in Section 1, is the whole agreement between you and Pettxo about listing services on Pettxo.",
    ],
  },
  {
    title: "22. In-app acceptance text",
    content: [
      "☐ I have read and agree to the Pettxo Service Provider Agreement, Terms of Service, Cancellation & Refund Policy and Privacy Policy.",
      "This covers your status as an independent provider, booking and OTP rules, the ban on off-platform payments, Pettxo’s 15% fee and payout shares, tax deducted as required by law, your responsibility for the service you deliver, and when Pettxo may remove listings. You confirm you are at least 18 years old.",
      "The “I Agree — Continue” button works only after the box is ticked.",
    ],
  },
  {
    title: "23. Company details",
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

export default function ServiceProviderAgreement() {
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
        canonical="/service-provider-agreement"
        description="Read Pettxo's Service Provider Agreement covering provider eligibility, listings, bookings, OTP rules, payouts, responsibilities, disputes, and account enforcement."
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
            <div className="flex items-center gap-4 mb-5">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-orange/10 text-orange flex-shrink-0">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2 4 5v6c0 5.2 3.4 9.7 8 11 4.6-1.3 8-5.8 8-11V5l-8-3Z" />
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              <h1 className="font-serif font-black text-dark text-[28px] md:text-[38px]">
                Service Provider Agreement
              </h1>
            </div>

            <p className="text-muted text-[14px] md:text-[15px]">
              Version 2.0 · Effective 5 October 2026
            </p>

            <p className="mt-5 text-dark font-light leading-[1.8] text-[15px] md:text-[16px]">
              This Service Provider Agreement is a legally binding contract
              between Pettxo Private Limited and every person or business that
              lists a service on Pettxo.
            </p>
          </div>

          <div className="rounded-[18px] bg-white/45 border border-[rgba(31,41,55,0.08)] p-6 md:p-8 mb-10">
            <h2 className="font-serif font-bold text-dark text-[21px] mb-5">
              At a glance
            </h2>

            <ul className="space-y-3">
              {[
                "You are an independent provider, not a Pettxo employee.",
                "Listings start as Unverified and may become Verified after ID review.",
                "You have 60 minutes, within your working hours, to accept or decline a booking request.",
                "On a completed booking you receive 85% of the amount paid and Pettxo keeps 15%.",
                "If you cancel a paid booking, the pet parent gets 100% back and you receive nothing.",
                "Keep every booking and payment for Pettxo customers on Pettxo. Off-platform payments lead to suspension.",
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
              Pettxo Private Limited · Service Provider Agreement · Version 2.0 · Effective 5 October 2026
            </p>
          </div>

        </div>
      </section>
    </>
  );
}