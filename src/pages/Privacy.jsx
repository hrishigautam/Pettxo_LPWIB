import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const SECTIONS = [
  {
    title: "1. Who this policy covers",
    content: [
      "Everyone who uses the Pettxo app or visits pettxo.com, whether as a pet parent, pet lover or service provider.",
      "Pettxo is only for people aged 18 and over. See Section 15.",
      "This policy forms part of the Pettxo Terms of Service. Providers should also read the Service Provider Agreement.",
    ],
  },
  {
    title: "2. Personal data we collect",
    content: [
      "Account: Name, username, phone number, email address (if added), and login details. If you set a password, it is stored in encrypted form by our login provider; Pettxo cannot see it.",
      "Profile and community: Profile photo, bio, city or area, pet profiles, posts, images, comments, likes, followers and following.",
      "Messages: Messages and images you send and receive in in-app chat.",
      "Location: Precise or approximate device location, if you allow it; the city, state or area saved in your profile or used in search.",
      "Bookings: Services requested and booked, dates, slots, booking status, OTP records, cancellations, no-shows and service start and end times.",
      "Payments: Payment and order IDs, amount, payment status, refund details and dates. Not card numbers, CVVs, UPI PINs or banking passwords.",
      "Provider verification: Government ID documents uploaded by providers, the review outcome and Verified or Unverified status.",
      "Provider payouts: Bank account holder name, account number, IFSC, PAN and GSTIN where given, earnings, payout amounts, bank reference numbers and tax deducted.",
      "Ratings, reports and disputes: Ratings and reviews, reports you make or that are made about you, dispute details and evidence, and records of moderation decisions.",
      "Support: Emails and messages you send us, and our replies.",
      "Device and technical information: Device model, operating system, app version, IP address, app and installation identifiers, push notification tokens, crash reports and security logs.",
      "Usage and analytics: How the app is used, such as screens viewed and features used.",
      "Advertising measurement: Where enabled in the app, advertising ID and app events such as installs and sign-ups.",
      "Policy acceptance: Which version of our policies you accepted, and when.",
      "Pre-launch waitlist: If you joined our waitlist before launch, the details you gave us then.",
      "Information about your pets is not personal data in itself, but we protect it in the same way because it is linked to your account.",
    ],
  },
  {
    title: "3. Device permissions",
    content: [
      "The app asks your permission before it uses any of the following. You can refuse, or turn a permission off later in your phone’s settings. Some features will not work without the related permission.",
      "Location (precise or approximate): Showing nearby services and content, and location-based features. We use Google Maps services to display maps and convert locations into addresses.",
      "Camera: Taking photos for your profile, posts, listings or verification documents.",
      "Photos and media: Choosing images for your profile, posts, listings, messages or verification documents.",
      "Notifications: Sending you booking updates and other notifications.",
      "The app does not ask for access to your contacts or microphone. Phone number login uses a one-time code. The app does not read your SMS inbox; your phone may offer to fill in the code automatically.",
    ],
  },
  {
    title: "4. Why we use your data",
    content: [
      "Creating and securing your account, and logging you in — Your consent, and to provide the service you asked for.",
      "Showing your profile, posts and pet profiles, and running follows, comments and messages — Your consent.",
      "Showing nearby services and content — Your consent to location access.",
      "Handling booking requests, bookings, OTPs, cancellations, refunds and disputes — Your consent, and to provide the service you asked for.",
      "Verifying provider identity and showing Verified or Unverified status — The provider’s consent, and user safety.",
      "Paying providers and deducting tax where required — The provider’s consent, and legal obligations.",
      "Ordering search results, as described in Section 10 of the Terms of Service — Your consent.",
      "Sending booking, payment, account and safety notifications — To provide the service you asked for.",
      "Sending offers, announcements and news — Your consent. You can opt out at any time.",
      "Reviewing reports, moderating content, and preventing fraud and misuse — Your consent, legal obligations under the IT Rules, and user safety.",
      "Fixing crashes, keeping the app secure and improving it — Your consent.",
      "Measuring how well our advertising works — Your consent. You can limit it.",
      "Meeting legal, tax, accounting and law enforcement requirements — Legal obligations.",
      "We use your data only for these purposes. If we want to use it for a new purpose that needs your consent, we will ask first.",
    ],
  },
  {
    title: "5. What other users can see",
    content: [
      "All Pettxo users can see your username, profile photo, bio, city or area, pet profiles, posts, comments, and who you follow and who follows you.",
      "Anyone viewing a listing can see the provider’s name or business name, service area, listing details, photos, rating and Verified or Unverified badge.",
      "A provider receiving a booking request can see the request details, but not your name or phone number.",
      "The provider of a paid booking can see your name and phone number so that they can deliver the service. Providers must use them only for that booking.",
      "People you message can see your messages and your profile.",
      "We never show ID documents, bank details, PAN or GSTIN to other users.",
    ],
  },
  {
    title: "6. Who we share data with",
    content: [
      "We do not sell your personal data. We share it only as described here, and only as much as each purpose needs.",
      "Service providers who work for us process data on our behalf, under contracts or terms that require them to protect it.",
      "Google (Firebase and Google Cloud) runs the app, including accounts, data, images, documents, push notifications and backend processing.",
      "Google Maps Platform displays maps and converts locations into addresses.",
      "Razorpay processes payments and refunds. Card, UPI and bank credentials go directly to Razorpay.",
      "Google Firebase Analytics shows us how the app is used so we can improve it.",
      "Google Firebase Crashlytics, where enabled in the app, tells us when the app crashes and why.",
      "Meta Platforms, where enabled in the app, helps us understand whether our ads led to installs or sign-ups.",
      "Google Workspace and our transactional email provider send account and service emails and handle support emails.",
      "Google Cloud and Google Analytics host pettxo.com and measure visits.",
      "Banks receive provider bank details and payout amounts when we send payouts.",
      "Government and law enforcement: We share data when required by law, a court order, or a lawful request from an authorised agency, and only what the request requires. Where content involves an offence against a child, we report it as the law requires.",
      "Tax authorities receive the details the law requires for tax deducted at source.",
      "Professional advisers such as our chartered accountant or lawyers may receive data where needed and under a duty of confidentiality.",
      "If Pettxo is merged or sold, your data may pass to the new owner, who must continue to protect it under this policy. We will tell you before that happens.",
    ],
  },
  {
    title: "7. Advertising measurement",
    content: [
      "Pettxo advertises on other platforms such as Facebook and Instagram. Where the Meta software kit is enabled in the app, the app may send Meta your device’s advertising ID and a limited set of app events, such as installing or opening the app, signing up, or completing a booking. This helps us understand which ads work.",
      "We never send Meta your messages, posts, ID documents, bank details, exact location or payment details.",
      "Meta handles this data under its own privacy policy.",
      "You can limit this at any time by deleting or resetting your advertising ID, or turning off ad personalisation, in your phone’s settings.",
    ],
  },
  {
    title: "8. Our website and cookies",
    content: [
      "pettxo.com is a landing page with links to download the app. It has no sign-up form and does not ask for your name, phone number or email.",
      "We use Google Analytics to understand how many people visit and which pages they view. It uses cookies and collects information such as your approximate location, device, browser and pages visited.",
      "When you first visit, we ask whether you accept analytics cookies. If you decline, we do not set them. You can change your choice at any time from the cookie settings on the website, or clear cookies in your browser.",
      "We do not use cookies for advertising on our website.",
    ],
  },
  {
    title: "9. Where your data is stored",
    content: [
      "Our main app data is stored on Google Cloud servers located in India.",
      "Some of our service providers, such as analytics, crash reporting and advertising measurement services, may process data outside India. This is permitted under the Digital Personal Data Protection Act, 2023, and we do not transfer data to any country the Government of India has restricted.",
    ],
  },
  {
    title: "10. How long we keep data",
    content: [
      "We keep personal data only for as long as we need it for the purposes in Section 4, or for as long as the law requires. Then we delete it or make it anonymous.",
      "Account, profile, posts and pet profiles: While your account is open. Removed from view when you delete your account.",
      "Messages: While your account is open, and afterwards where needed for a report, dispute or legal requirement.",
      "Bookings, payments, refunds, payouts and tax records: For the period required by tax and company law.",
      "Provider ID documents and verification records: While the provider’s account is open, and afterwards only where needed to prevent fraud, handle a dispute or legal claim, or meet a legal requirement.",
      "Reports, disputes and moderation records: Until the matter is resolved, and afterwards where needed for a legal claim or legal requirement.",
      "Account registration details after account deletion: For at least 180 days, as required by the IT Rules, 2021.",
      "Security logs: For the period required by Indian law.",
      "Policy acceptance records: While your account is open and afterwards for as long as they may be needed as evidence.",
      "Pre-launch waitlist details: Until you ask us to delete them. We use them only to tell you about Pettxo.",
    ],
  },
  {
    title: "11. How we protect your data",
    content: [
      "Data is encrypted when it travels between your device and our servers, and is stored on secure cloud infrastructure.",
      "ID documents, bank details and other sensitive data are stored privately and can be accessed only by authorised Pettxo staff who need them, through restricted admin tools.",
      "Our team does not routinely read private messages. Authorised staff may look at relevant messages or content only where reasonably necessary for a user report, a safety or moderation check, a booking or payment dispute, customer support, a fraud or abuse investigation, enforcing our policies, or a legal requirement.",
      "We keep our security measures under review and improve them as Pettxo grows.",
      "No system can be completely secure. If you think your account has been accessed without your permission, tell us straight away at hello@pettxo.com.",
    ],
  },
  {
    title: "12. Your rights",
    content: [
      "Information: Ask for a summary of the personal data we hold about you, what we do with it, and who we have shared it with.",
      "Correction: Ask us to correct, complete or update inaccurate data. You can change most profile details yourself in the app.",
      "Erasure: Ask us to delete your data, subject to the records we must keep by law.",
      "Withdraw consent: Withdraw consent at any time, as easily as you gave it, for example by turning off a permission or opting out of promotional messages. This does not affect processing already done. Some features may stop working.",
      "Nominate: Name another person to exercise your rights if you die or become unable to do so.",
      "Complain: Complain to our Grievance Officer and, once the relevant provisions are in force, to the Data Protection Board of India.",
      "To use any of these rights, write to hello@pettxo.com from your registered email, or from the app. We may ask you to confirm your identity first.",
      "We acknowledge requests within 24 hours and respond as soon as we can, and in any case within the time the law allows.",
      "Withdrawing consent to identity verification means your listings are removed. Bookings already confirmed are handled under the Cancellation & Refund Policy.",
    ],
  },
  {
    title: "13. Deleting your account",
    content: [
      "You can delete your account from the app settings. If a booking is in progress, or money is held for a booking, the deletion completes once that booking is settled.",
      "When your account is deleted, your profile, pet profiles and posts are removed from view.",
      "Deleting your account does not mean every record is erased straight away. We keep the records described in Section 10, such as bookings, payments, payouts, tax, disputes, verification, fraud prevention and security records, for as long as the law requires or allows.",
      "Messages you sent may remain visible in the other person’s conversation, and ratings you gave may be kept without your name.",
    ],
  },
  {
    title: "14. Notifications and promotional messages",
    content: [
      "We send service messages by push notification and email, such as account alerts, booking and request updates, payment and refund updates, provider verification decisions and important policy changes. These are needed to run your account and bookings.",
      "We may also send promotional messages by push notification or email, such as offers, announcements and news about Pettxo.",
      "You can stop promotional messages at any time using the unsubscribe link in any promotional email, by turning off notifications in your phone’s settings, or by writing to hello@pettxo.com. Stopping promotional messages does not stop service messages.",
      "Pettxo does not currently send marketing messages by WhatsApp or SMS. If that changes, we will update this policy first.",
    ],
  },
  {
    title: "15. Age requirement",
    content: [
      "Pettxo is only for people aged 18 and over. By creating an account and accepting the Terms of Service and this policy, you confirm that you are 18 or older.",
      "We do not knowingly collect personal data from anyone under 18. If we learn that an account belongs to someone under 18, we will close it and delete their data, except where the law requires us to keep it.",
      "If you believe a child is using Pettxo, write to hello@pettxo.com.",
    ],
  },
  {
    title: "16. If there is a data breach",
    content: [
      "If a breach of security affects your personal data, we will inform you, and report the breach to the Indian Computer Emergency Response Team and, once the relevant provisions are in force, to the Data Protection Board of India, within the time limits Indian law sets.",
      "We will tell you what happened, what it may mean for you, what we are doing about it, and what you can do to protect yourself.",
    ],
  },
  {
    title: "17. Changes to this policy",
    content: [
      "We will tell you about material changes by in-app notification or email at least 15 days before they take effect, unless a change is required sooner by law.",
      "If a change means we want to use your data in a new way that needs your consent, we will ask for it before we do so.",
      "The version number and effective date at the top show which version is in force. Earlier versions are available on request.",
    ],
  },
  {
    title: "18. Grievance Officer and contact",
    content: [
      "Our Grievance Officer handles all privacy questions, requests and complaints.",
      "Grievance Officer: Hrishi Gautam",
      "Email: hello@pettxo.com",
      "Address: Pettxo Private Limited, Smt Kiran Goutam, 16176, W.No. 11, Baihar, Balaghat 481111, Madhya Pradesh",
      "Acknowledgement: Within 24 hours, with a ticket number.",
      "Resolution of complaints: Within 7 days.",
      "If you would like this policy in any language listed in the Eighth Schedule to the Constitution of India, write to us and we will provide it.",
    ],
  },
  {
    title: "19. Company details",
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

export default function Privacy() {
  return (
    <>
      <SEO
        canonical="/privacy-policy"
        description="Read Pettxo's Privacy Policy to understand how we collect, use, protect, share, and retain personal data."
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
              Privacy Policy
            </h1>

            <p className="mt-3 text-muted text-[14px] md:text-[15px]">
              Version 2.0 · Effective 5 October 2026
            </p>

            <p className="mt-5 text-dark font-light leading-[1.8] text-[15px] md:text-[16px]">
              This Privacy Policy explains what personal data Pettxo Private
              Limited ("Pettxo", "we", "us") collects when you use the Pettxo
              app and website, why we collect it, who we share it with, how
              long we keep it, and the rights you have.
            </p>
          </div>

          <div className="rounded-[18px] bg-white/45 border border-[rgba(31,41,55,0.08)] p-6 md:p-8 mb-10">
            <h2 className="font-serif font-bold text-dark text-[21px] mb-5">
              At a glance
            </h2>

            <ul className="space-y-3">
              {[
                "We collect what we need to run Pettxo: your account, profile, posts, messages, location (if you allow it), bookings and payments. Providers also give us an ID document and bank details.",
                "We never sell your personal data. We do not share ID documents or bank details with anyone except where needed to pay you or where the law requires.",
                "Card numbers, CVVs, UPI PINs and banking passwords are handled by our payment partner, Razorpay. Pettxo never sees or stores them.",
                "Our team does not routinely read your messages. Authorised staff look at them only for reports, disputes, support, fraud checks or legal requirements.",
                "You can see, correct and delete your data, and withdraw consent. Write to hello@pettxo.com.",
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
              </section>
            ))}
          </div>

          <div className="mt-14 pt-6 border-t border-[rgba(31,41,55,0.10)]">
            <p className="text-muted text-[13px] leading-[1.7]">
              Pettxo Private Limited · Privacy Policy · Version 2.0 ·
              Effective 5 October 2026
            </p>
          </div>

        </div>
      </section>
    </>
  );
}