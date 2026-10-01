import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const REFUND_GRID = [
  ["More than 24 hours", "95%", "0%", "5%"],
  ["More than 12 hours, up to 24 hours", "75%", "15%", "10%"],
  ["More than 6 hours, up to 12 hours", "50%", "35%", "15%"],
  ["More than 2 hours, up to 6 hours", "25%", "60%", "15%"],
  ["2 hours or less, or after the start time", "0%", "85%", "15%"],
];

const BOOKING_STEPS = [
  ["1. Request", "You choose a service and a slot and send a request.", "Nothing charged"],
  [
    "2. Provider responds",
    "The provider has 60 minutes, counted within their working hours, to accept or decline. If they do not respond, the request expires.",
    "Nothing charged",
  ],
  [
    "3. Payment",
    "If the provider accepts, you have 60 minutes to pay. If you do not pay in time, the request expires.",
    "Nothing charged until you pay",
  ],
  [
    "4. Confirmed",
    "Your payment succeeds and the booking is confirmed. Pettxo holds the amount paid.",
    "Paid, held by Pettxo",
  ],
  [
    "5. Service starts",
    "You give the provider your OTP and they enter it.",
    "Held by Pettxo",
  ],
  [
    "6. Service ends",
    "The provider marks the service ended. You have 24 hours to raise a problem.",
    "Held by Pettxo",
  ],
  [
    "7. Closed",
    "If no problem is raised, the provider is paid.",
    "Released to the provider",
  ],
];

const REFUND_EXAMPLE = [
  ["Thursday, 2:00 PM", "50 hours", "₹950"],
  ["Friday, 8:00 PM", "20 hours", "₹750"],
  ["Saturday, 6:00 AM", "10 hours", "₹500"],
  ["Saturday, 12:00 PM", "4 hours", "₹250"],
  ["Saturday, 2:30 PM", "1.5 hours", "₹0"],
];

const REFUND_DETAILS = [
  [
    "Where does the refund go?",
    "Back to the account, card, UPI ID or wallet you paid from. We cannot send a refund to anyone else.",
  ],
  [
    "When does it start?",
    "We start the refund as soon as the cancellation is confirmed or the dispute is decided.",
  ],
  [
    "When will I receive it?",
    "Usually within 5 to 7 working days. The exact time depends on your bank, card network or wallet provider.",
  ],
  [
    "Are any fees deducted?",
    "No. Pettxo does not deduct payment gateway charges or any other fee from your refund. You receive exactly the amount shown in the app.",
  ],
  [
    "What is the refund calculated on?",
    "The amount you actually paid. If you paid a discounted price, the percentage applies to the discounted amount.",
  ],
  [
    "Credits or vouchers?",
    "Refunds are always paid in money to your original payment method. We do not replace refunds with credits, points or vouchers.",
  ],
  [
    "How do I track it?",
    "The booking in the app shows the refund amount and status. You will also receive a notification when the refund is processed.",
  ],
];

const DISPUTE_WINDOWS = [
  ["The service took place", "When the provider marks the service ended", "24 hours later"],
  ["Marked as a no-show", "11:59 PM on the service date", "11:59 PM the next day"],
  ["You cancelled after paying", "When you cancel", "24 hours later"],
];

const DISPUTE_OUTCOMES = [
  [
    "Provider at fault",
    "You get back 100% of what you paid. The provider receives nothing.",
  ],
  [
    "You were at fault",
    "The grid in Section 5, or the no-show rule in Section 7, applies.",
  ],
  [
    "Unclear",
    "A Pettxo team member decides on the evidence and records the reasons.",
  ],
];

export default function Cancellation() {
  return (
    <>
      <SEO
        canonical="/cancellation-refund-policy"
        description="Pettxo's Cancellation & Refund Policy explains cancellation rules, refund amounts, payment problems, disputes, and refund timelines."
      />

      <main className="min-h-screen bg-beige">
        <div className="max-w-[1000px] mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-20">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-brown hover:text-orange transition-colors"
          >
            ← Back to home
          </Link>

          <header className="mt-10 mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
              PETTXO
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-brown">
              Cancellation & Refund Policy
            </h1>

            <p className="mt-4 text-sm md:text-base text-brown/65">
              Version 2.0 · Effective 5 October 2026
            </p>

            <p className="mt-7 max-w-[850px] text-base md:text-lg leading-8 text-brown/80">
              This policy explains what happens to your money when a booking
              on Pettxo is cancelled, not attended, or goes wrong. It is
              operated by Pettxo Private Limited ("Pettxo", "we", "us") and
              binds both pet parents and providers. It applies to every
              booking paid for on or after 5 October 2026 and replaces the
              earlier version dated 11 June 2026.
            </p>

            <p className="mt-4 max-w-[850px] text-base leading-7 text-brown/75">
              We have written it in plain language on purpose. If anything
              here is unclear, write to us at{" "}
              <a
                href="mailto:hello@pettxo.com"
                className="text-orange font-medium hover:underline"
              >
                hello@pettxo.com
              </a>{" "}
              and we will explain it.
            </p>
          </header>

          <section className="rounded-3xl bg-white/55 border border-brown/10 p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-semibold text-brown">
              At a glance
            </h2>

            <ul className="mt-5 space-y-4 text-brown/80 leading-7">
              <li>
                Sending a booking request is free. Nothing is charged until
                the provider accepts and you choose to pay.
              </li>
              <li>
                After you pay, your refund depends on how much time is left
                before the service starts: 95%, 75%, 50%, 25% or 0%.
              </li>
              <li>
                If the provider or Pettxo cancels a paid booking, you get back
                100% of what you paid.
              </li>
              <li>
                Once the provider enters your OTP, the service has started and
                it cannot be cancelled. If something goes wrong, raise a
                dispute.
              </li>
              <li>
                Refunds go back to the account you paid from, within 5 to 7
                working days.
              </li>
            </ul>
          </section>

          <div className="space-y-14">
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                1. About this policy
              </h2>

              <ul className="mt-5 space-y-4 text-brown/80 leading-7">
                <li>
                  This policy is part of the Pettxo Terms of Service. If the
                  two ever differ on cancellations or refunds, this policy
                  applies.
                </li>
                <li>
                  In this policy, "you" means the pet parent. Sections 5, 7,
                  9, 10 and 13 also set out what the provider receives in each
                  case. Providers accept this policy together with the Pettxo
                  Service Provider Agreement, and the two are always kept
                  consistent.
                </li>
                <li>
                  It applies in the same way to every provider on Pettxo,
                  whether their listing shows a Verified or an Unverified
                  badge.
                </li>
                <li>
                  It covers bookings made and paid for through the Pettxo app
                  or website. Payments made outside Pettxo are not covered,
                  because we never received that money.
                </li>
                <li>
                  Nothing in this policy takes away any right you have under
                  Indian law, including the Consumer Protection Act, 2019 and
                  the Consumer Protection (E-Commerce) Rules, 2020.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                2. Words used in this policy
              </h2>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-brown/10 bg-white/45">
                <table className="w-full min-w-[700px] text-left">
                  <thead>
                    <tr className="border-b border-brown/10">
                      <th className="px-5 py-4 font-semibold text-brown">
                        Term
                      </th>
                      <th className="px-5 py-4 font-semibold text-brown">
                        What it means
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-brown/75">
                    <tr className="border-b border-brown/10">
                      <td className="px-5 py-4 font-medium text-brown">
                        Pet parent
                      </td>
                      <td className="px-5 py-4">
                        The person who books and pays for a service on Pettxo.
                        Referred to as "you" in this policy.
                      </td>
                    </tr>
                    <tr className="border-b border-brown/10">
                      <td className="px-5 py-4 font-medium text-brown">
                        Provider
                      </td>
                      <td className="px-5 py-4">
                        The independent person or business who lists and
                        delivers the service. Providers are not employees or
                        agents of Pettxo.
                      </td>
                    </tr>
                    <tr className="border-b border-brown/10">
                      <td className="px-5 py-4 font-medium text-brown">
                        Booking request
                      </td>
                      <td className="px-5 py-4">
                        A request you send for a slot or date range. No money
                        moves at this stage.
                      </td>
                    </tr>
                    <tr className="border-b border-brown/10">
                      <td className="px-5 py-4 font-medium text-brown">
                        Confirmed booking
                      </td>
                      <td className="px-5 py-4">
                        A booking you have paid for. A booking is confirmed
                        only when your payment succeeds.
                      </td>
                    </tr>
                    <tr className="border-b border-brown/10">
                      <td className="px-5 py-4 font-medium text-brown">
                        Amount paid
                      </td>
                      <td className="px-5 py-4">
                        The total amount you actually paid for the booking,
                        after any discount.
                      </td>
                    </tr>
                    <tr className="border-b border-brown/10">
                      <td className="px-5 py-4 font-medium text-brown">
                        Service start time
                      </td>
                      <td className="px-5 py-4">
                        The start time of your slot or, for boarding and
                        sitting, your check-in date and time.
                      </td>
                    </tr>
                    <tr className="border-b border-brown/10">
                      <td className="px-5 py-4 font-medium text-brown">OTP</td>
                      <td className="px-5 py-4">
                        The one-time code you give the provider when the
                        service begins. When the provider enters it, the
                        service has started.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-medium text-brown">
                        Working days
                      </td>
                      <td className="px-5 py-4">
                        Monday to Saturday, excluding public holidays in
                        India.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                3. How a booking works
              </h2>

              <p className="mt-4 text-brown/75 leading-7">
                Knowing the steps makes the rest of this policy simple.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-brown/10 bg-white/45">
                <table className="w-full min-w-[760px] text-left">
                  <thead>
                    <tr className="border-b border-brown/10">
                      <th className="px-5 py-4 font-semibold text-brown">
                        Step
                      </th>
                      <th className="px-5 py-4 font-semibold text-brown">
                        What happens
                      </th>
                      <th className="px-5 py-4 font-semibold text-brown">
                        Money
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-brown/75">
                    {BOOKING_STEPS.map(([step, what, money]) => (
                      <tr
                        key={step}
                        className="border-b border-brown/10 last:border-0"
                      >
                        <td className="px-5 py-4 font-medium text-brown align-top">
                          {step}
                        </td>
                        <td className="px-5 py-4 align-top">{what}</td>
                        <td className="px-5 py-4 align-top">{money}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                4. Cancelling before you pay
              </h2>

              <p className="mt-5 text-brown/80 leading-7">
                You can cancel a booking request at any time before you pay,
                at no cost. There is no time limit and no charge, because no
                money has moved.
              </p>

              <p className="mt-4 text-brown/80 leading-7">
                If a request expires because the provider did not respond, or
                because the payment window closed, nothing is charged.
              </p>
            </section>

            <section id="cancellation" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                5. Cancelling after you pay
              </h2>

              <p className="mt-5 text-brown/80 leading-7">
                Once you have paid, the provider has set aside that time for
                you and turned other customers away. The closer the
                cancellation is to the service start time, the harder it is
                for the provider to fill that time again. That is why the
                refund reduces as the service gets closer.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-brown">
                5.1 The refund grid
              </h3>

              <div className="mt-5 overflow-x-auto rounded-2xl border border-brown/10 bg-white/45">
                <table className="w-full min-w-[800px] text-left">
                  <thead>
                    <tr className="border-b border-brown/10">
                      <th className="px-5 py-4 font-semibold text-brown">
                        Time left before the service starts
                      </th>
                      <th className="px-5 py-4 font-semibold text-brown">
                        You get back
                      </th>
                      <th className="px-5 py-4 font-semibold text-brown">
                        Provider receives
                      </th>
                      <th className="px-5 py-4 font-semibold text-brown">
                        Pettxo keeps
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-brown/75">
                    {REFUND_GRID.map((row) => (
                      <tr
                        key={row[0]}
                        className="border-b border-brown/10 last:border-0"
                      >
                        {row.map((cell, index) => (
                          <td
                            key={`${row[0]}-${index}`}
                            className={`px-5 py-4 ${
                              index === 0
                                ? "font-medium text-brown"
                                : ""
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-brown/75 leading-7">
                All percentages are of the amount you paid. The provider
                share compensates the provider for the time they held for you.
                The Pettxo share covers the cost of processing the booking and
                the cancellation.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-brown">
                5.2 How the time is measured
              </h3>

              <ul className="mt-4 space-y-3 text-brown/80 leading-7">
                <li>
                  We measure the time between the moment you confirm the
                  cancellation in the app and the service start time, using
                  Pettxo's server clock in Indian Standard Time.
                </li>
                <li>
                  A cancellation exactly on a boundary falls in the lower
                  band. For example, cancelling exactly 24 hours before the
                  start gives 75%, not 95%.
                </li>
                <li>
                  Before you confirm a cancellation, the app shows you the
                  exact rupee amount you will get back. That amount is the
                  amount we refund.
                </li>
              </ul>

              <h3 className="mt-8 text-xl font-semibold text-brown">
                5.3 Example
              </h3>

              <p className="mt-4 text-brown/80 leading-7">
                You pay ₹1,000 for a grooming slot at 4:00 PM on Saturday.
              </p>

              <div className="mt-5 overflow-x-auto rounded-2xl border border-brown/10 bg-white/45">
                <table className="w-full min-w-[600px] text-left">
                  <thead>
                    <tr className="border-b border-brown/10">
                      <th className="px-5 py-4 font-semibold text-brown">
                        You cancel at
                      </th>
                      <th className="px-5 py-4 font-semibold text-brown">
                        Time left
                      </th>
                      <th className="px-5 py-4 font-semibold text-brown">
                        You get back
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-brown/75">
                    {REFUND_EXAMPLE.map(([time, left, amount]) => (
                      <tr
                        key={time}
                        className="border-b border-brown/10 last:border-0"
                      >
                        <td className="px-5 py-4">{time}</td>
                        <td className="px-5 py-4">{left}</td>
                        <td className="px-5 py-4 font-medium text-brown">
                          {amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                6. Once the service has started
              </h2>

              <p className="mt-5 text-brown/80 leading-7">
                When the provider enters your OTP, the service has started.
                From that moment the booking can no longer be cancelled.
              </p>

              <p className="mt-4 text-brown/80 leading-7">
                This does not leave you without protection. If the service was
                not delivered properly, was cut short, or was not what was
                listed, raise a dispute under Section 13. If the provider is
                found at fault, you get back 100% of what you paid.
              </p>

              <p className="mt-4 text-brown/80 leading-7">
                Your OTP works for the whole service date, not only at the
                slot time. If you arrive late on the same day, the provider
                must still serve you. If a provider refuses a valid OTP on the
                service date, the provider is treated as being at fault.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                7. If you do not attend
              </h2>

              <p className="mt-5 text-brown/80 leading-7">
                If the service date ends at 11:59 PM and the OTP was never
                entered, the booking is marked as a no-show. This is done
                automatically by the system. A provider can never mark a
                booking as a no-show.
              </p>

              <p className="mt-4 text-brown/80 leading-7">
                A no-show is treated the same as cancelling with 2 hours or
                less to go: no refund, the provider receives 85% and Pettxo
                keeps 15%. The money is not released straight away. It is held
                for 24 hours so that you can raise a dispute if the no-show
                was not your fault, for example if the provider was closed or
                absent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                8. Boarding, sitting and other date-range bookings
              </h2>

              <ul className="mt-5 space-y-3 text-brown/80 leading-7">
                <li>
                  The same refund grid applies. The service start time is your
                  check-in date and time.
                </li>
                <li>
                  Once the stay has started, it cannot be cancelled.
                  Collecting your pet early does not give a partial refund for
                  the unused days.
                </li>
                <li>
                  If the stay is cut short because of the provider, raise a
                  dispute under Section 13.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                9. If the provider cancels
              </h2>

              <p className="mt-5 text-brown/80 leading-7">
                If a provider cancels a confirmed booking at any time before
                the OTP is entered, you get back 100% of the amount you paid.
                Nothing is deducted. The refund starts automatically; you do
                not need to ask for it. The provider receives nothing for that
                booking.
              </p>

              <p className="mt-4 text-brown/80 leading-7">
                The same applies if a provider does not turn up, or refuses to
                provide the service, and a dispute finds the provider at fault.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                10. If Pettxo cancels
              </h2>

              <p className="mt-5 text-brown/80 leading-7">
                Pettxo may need to cancel a confirmed booking, for example if
                a provider's listing is removed after a verification check, a
                provider's account is suspended, or there is a safety concern.
              </p>

              <ul className="mt-5 space-y-3 text-brown/80 leading-7">
                <li>
                  You get back 100% of the amount you paid, automatically.
                </li>
                <li>
                  If you did nothing to cause the cancellation, Pettxo also
                  pays you compensation equal to the cancellation charge you
                  would have borne under the grid in Section 5 had you
                  cancelled at that same moment. For example, if Pettxo
                  cancels a ₹1,000 booking 10 hours before the start, you
                  receive the ₹1,000 refund plus ₹500 compensation.
                </li>
                <li>
                  Compensation is paid within 7 working days of the
                  cancellation, to the account you paid from or to a bank
                  account or UPI ID you give us.
                </li>
                <li>
                  No compensation is payable where the cancellation is caused
                  by your own breach of the Terms of Service, by fraud, or by
                  an event covered in Section 16.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                11. Payment problems
              </h2>

              <ul className="mt-5 space-y-3 text-brown/80 leading-7">
                <li>
                  If money is debited from your account but your booking is
                  not confirmed, for example because the payment window closed
                  or the slot was taken by someone who paid first, you get back
                  100% of that amount automatically. Nothing is deducted.
                </li>
                <li>
                  If you are charged twice for the same booking, the extra
                  charge is refunded in full automatically.
                </li>
                <li>
                  If a refund under this section has not reached you within 7
                  working days, write to{" "}
                  <a
                    href="mailto:hello@pettxo.com"
                    className="text-orange font-medium hover:underline"
                  >
                    hello@pettxo.com
                  </a>{" "}
                  with your booking details.
                </li>
              </ul>
            </section>

            <section id="refunds" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                12. How and when refunds are paid
              </h2>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-brown/10 bg-white/45">
                <table className="w-full min-w-[760px] text-left">
                  <thead>
                    <tr className="border-b border-brown/10">
                      <th className="px-5 py-4 font-semibold text-brown">
                        Question
                      </th>
                      <th className="px-5 py-4 font-semibold text-brown">
                        Answer
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-brown/75">
                    {REFUND_DETAILS.map(([question, answer]) => (
                      <tr
                        key={question}
                        className="border-b border-brown/10 last:border-0"
                      >
                        <td className="px-5 py-4 font-medium text-brown align-top">
                          {question}
                        </td>
                        <td className="px-5 py-4 align-top">{answer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-5 text-brown/80 leading-7">
                Pettxo cannot move bookings to a new date or time. If you want
                a different time, cancel under this policy and send a new
                request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                13. Raising a dispute
              </h2>

              <p className="mt-5 text-brown/80 leading-7">
                A dispute is how you tell us something went wrong with a
                booking. It is the only way a refund can differ from the grid,
                so every dispute is looked at carefully.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-brown">
                13.1 When you can raise one
              </h3>

              <div className="mt-5 overflow-x-auto rounded-2xl border border-brown/10 bg-white/45">
                <table className="w-full min-w-[760px] text-left">
                  <thead>
                    <tr className="border-b border-brown/10">
                      <th className="px-5 py-4 font-semibold text-brown">
                        Situation
                      </th>
                      <th className="px-5 py-4 font-semibold text-brown">
                        Window opens
                      </th>
                      <th className="px-5 py-4 font-semibold text-brown">
                        Window closes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-brown/75">
                    {DISPUTE_WINDOWS.map(([situation, opens, closes]) => (
                      <tr
                        key={situation}
                        className="border-b border-brown/10 last:border-0"
                      >
                        <td className="px-5 py-4 font-medium text-brown align-top">
                          {situation}
                        </td>
                        <td className="px-5 py-4 align-top">{opens}</td>
                        <td className="px-5 py-4 align-top">{closes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-5 text-brown/80 leading-7">
                Raise a dispute from the booking in the app. Describe what
                happened and attach any photos or messages that help.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-brown">
                13.2 How it is decided
              </h3>

              <ul className="mt-5 space-y-3 text-brown/80 leading-7">
                <li>
                  The money for the booking stays with Pettxo until the
                  dispute is decided.
                </li>
                <li>
                  We check the OTP records, the booking timeline, in-app
                  messages and what both of you tell us. We may ask either of
                  you for more information.
                </li>
                <li>
                  We aim to decide within 7 working days and will tell you the
                  outcome and the reason.
                </li>
              </ul>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-brown/10 bg-white/45">
                <table className="w-full min-w-[700px] text-left">
                  <thead>
                    <tr className="border-b border-brown/10">
                      <th className="px-5 py-4 font-semibold text-brown">
                        Finding
                      </th>
                      <th className="px-5 py-4 font-semibold text-brown">
                        Outcome
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-brown/75">
                    {DISPUTE_OUTCOMES.map(([finding, outcome]) => (
                      <tr
                        key={finding}
                        className="border-b border-brown/10 last:border-0"
                      >
                        <td className="px-5 py-4 font-medium text-brown align-top">
                          {finding}
                        </td>
                        <td className="px-5 py-4 align-top">{outcome}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-5 text-brown/80 leading-7">
                If you disagree with the decision, you can ask for one review
                by a different Pettxo team member within 7 days. A dispute
                decision is Pettxo's final internal decision, but it does not
                stop you from approaching a Consumer Commission or any other
                authority under Indian law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                14. What you confirm before paying
              </h2>

              <p className="mt-5 text-brown/80 leading-7">
                Before you pay, the app shows you how long is left before the
                service starts, how much you would get back if you cancelled
                straight after paying, and the full refund grid. You must tick
                the box "I understand the cancellation policy" before the Pay
                button works. The box is never ticked for you. We keep a
                record of the time you ticked it and the version of this policy
                that applied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                15. Misuse and fraud
              </h2>

              <p className="mt-5 text-brown/80 leading-7">
                If we have reasonable grounds to believe a booking,
                cancellation or dispute involves fraud, for example false
                claims, fake accounts or an arrangement with a provider to
                extract refunds, we may hold the related refund while we
                investigate. We will tell you that we are doing so, and we
                will finish the investigation within 30 days. If no fraud is
                found, the refund is paid as normal. We may also suspend
                accounts involved in fraud under the Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                16. Events outside anyone's control
              </h2>

              <p className="mt-5 text-brown/80 leading-7">
                If a service cannot take place on the booked date because of an
                event that neither you nor the provider could control, such as
                a government order, curfew, natural disaster or serious civil
                disturbance in the service area, you get back 100% of the
                amount you paid. No compensation is payable under Section 10
                in this case.
              </p>

              <p className="mt-4 text-brown/80 leading-7">
                Personal circumstances, such as a change of plans, illness or
                travel delays, are handled under the normal grid in Section 5.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                17. Prices and charges
              </h2>

              <p className="mt-5 text-brown/80 leading-7">
                The price shown before you pay is the total amount you will pay
                for the booking. Pettxo does not add charges at the
                cancellation or refund stage other than those shown in the
                grid in Section 5.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                18. Changes to this policy
              </h2>

              <ul className="mt-5 space-y-3 text-brown/80 leading-7">
                <li>
                  We will tell you about any change to this policy by in-app
                  notification or email at least 15 days before it takes
                  effect, unless a change is required sooner by law.
                </li>
                <li>
                  Every booking is governed by the version of this policy in
                  force when you paid for it. A later change never reduces the
                  refund on a booking you have already paid for.
                </li>
                <li>
                  Earlier versions of this policy are available on request
                  from{" "}
                  <a
                    href="mailto:hello@pettxo.com"
                    className="text-orange font-medium hover:underline"
                  >
                    hello@pettxo.com
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                19. Complaints and grievance officer
              </h2>

              <p className="mt-5 text-brown/80 leading-7">
                If you have a complaint about a cancellation or refund, first
                raise it in the app or write to us. If you are not satisfied,
                contact our Grievance Officer.
              </p>

              <div className="mt-6 rounded-2xl bg-white/45 border border-brown/10 p-6">
                <p className="font-semibold text-brown">
                  Grievance Officer Hrishi Gautam
                </p>
                <p className="mt-2 text-brown/75">
                  Email{" "}
                  <a
                    href="mailto:hello@pettxo.com"
                    className="text-orange font-medium hover:underline"
                  >
                    hello@pettxo.com
                  </a>
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-brown">
                      Acknowledgement
                    </p>
                    <p className="mt-1 text-sm leading-6 text-brown/70">
                      Within 24 hours, with a ticket number you can use to
                      follow up
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-brown">
                      Resolution
                    </p>
                    <p className="mt-1 text-sm leading-6 text-brown/70">
                      Within 7 days of receiving the complaint
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-brown/75 leading-7">
                  You can also contact the National Consumer Helpline on 1915
                  or through the NCH app or website.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                20. Governing law and jurisdiction
              </h2>

              <ul className="mt-5 space-y-3 text-brown/80 leading-7">
                <li>
                  This policy is governed by the laws of India.
                </li>
                <li>
                  Subject to your rights as a consumer below, the courts at
                  Balaghat, Madhya Pradesh, where Pettxo's registered office
                  is located, have exclusive jurisdiction over disputes
                  arising from this policy.
                </li>
                <li>
                  As a consumer, you may always file a complaint before the
                  Consumer Commission having jurisdiction where you live or
                  work, or where the cause of action arose, as allowed by the
                  Consumer Protection Act, 2019. Nothing in this policy limits
                  that right.
                </li>
                <li>
                  Neither side is required to go to arbitration. Arbitration
                  can be used only if both you and Pettxo agree to it in
                  writing after a dispute has arisen.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown">
                21. Company details
              </h2>

              <div className="mt-6 rounded-2xl bg-white/45 border border-brown/10 overflow-hidden">
                <dl className="divide-y divide-brown/10">
                  <div className="grid gap-2 sm:grid-cols-[220px_1fr] px-5 py-4">
                    <dt className="font-semibold text-brown">
                      Legal name
                    </dt>
                    <dd className="text-brown/75">
                      Pettxo Private Limited
                    </dd>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-[220px_1fr] px-5 py-4">
                    <dt className="font-semibold text-brown">CIN</dt>
                    <dd className="text-brown/75">
                      U47912MP2026PTC082658
                    </dd>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-[220px_1fr] px-5 py-4">
                    <dt className="font-semibold text-brown">
                      DPIIT recognition
                    </dt>
                    <dd className="text-brown/75">DIPP254544</dd>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-[220px_1fr] px-5 py-4">
                    <dt className="font-semibold text-brown">
                      Registered office
                    </dt>
                    <dd className="text-brown/75">
                      Smt Kiran Goutam, 16176, W.No. 11, Baihar, Balaghat
                      481111, Madhya Pradesh
                    </dd>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-[220px_1fr] px-5 py-4">
                    <dt className="font-semibold text-brown">
                      Principal place of business
                    </dt>
                    <dd className="text-brown/75">
                      Pune, Maharashtra
                    </dd>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-[220px_1fr] px-5 py-4">
                    <dt className="font-semibold text-brown">Email</dt>
                    <dd className="text-brown/75">
                      <a
                        href="mailto:hello@pettxo.com"
                        className="text-orange font-medium hover:underline"
                      >
                        hello@pettxo.com
                      </a>
                    </dd>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-[220px_1fr] px-5 py-4">
                    <dt className="font-semibold text-brown">Website</dt>
                    <dd className="text-brown/75">pettxo.com</dd>
                  </div>
                </dl>
              </div>
            </section>
          </div>

          <div className="mt-14 pt-6 border-t border-brown/10">
            <p className="text-sm text-brown/55">
              Pettxo Private Limited · Cancellation & Refund Policy · Version
              2.0 · Effective 5 October 2026
            </p>
          </div>
        </div>
      </main>
    </>
  );
}