import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <article className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0  lg:grid-cols-1 lg:items-start lg:gap-y-8">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                Terms of Service
              </h1>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Privacy Policy
              </h2>
              <h3 className="mt-16 text-xl font-bold tracking-tight text-gray-900">
                SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
              </h3>

              <p className="mt-6">
                When you purchase something from our store, as part of the
                buying and selling process, we collect the personal information
                you give us such as your name, address and email address.
              </p>
              <p className="mt-6">
                When you browse our store, we also automatically receive your
                computer’s internet protocol (IP) address in order to provide us
                with information that helps us learn about your browser and
                operating system.
              </p>

              <p className="mt-6">
                Email marketing (if applicable): With your permission, we may
                send you emails about our store, new products and other updates.
              </p>
              <p className="mt-6">
                {" "}
                Text marketing (if applicable): With your permission, we may
                send text messages about our store, new products, and other
                updates. Updates include Checkout Reminders. Webhooks will be
                used to trigger the Checkout Reminders messaging system.
              </p>

              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                2. Account Registration
              </h3>

              <p>
                To use certain features of our Services, you may be required to
                register for an account. You agree to provide accurate, current,
                and complete information during the registration process and to
                update such information to keep it accurate, current, and
                complete. By creating an account, you gain access to exclusive
                features and personalized content. It is your responsibility to
                safeguard your account details and to notify us immediately of
                any unauthorized use or security breaches. You are solely
                responsible for all activities that occur under your account and
                accept all risks of unauthorized access.
              </p>

              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                3. Purchases
              </h3>

              <p>
                All purchases through our website are subject to our{" "}
                <Link to="returns-and-faq">return policy</Link> Prices for our
                products are subject to change without notice. When making a
                purchase, you agree to provide accurate payment information and
                authorize us to charge your selected payment method. We reserve
                the right to refuse or cancel any orders placed for products or
                services listed at an incorrect price. Payments are processed
                securely through our third-party payment processors, and we do
                not store or have access to your payment details.
              </p>

              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                4. Intellectual Property
              </h3>

              <p>
                All content, features, and functionality available on or through
                the Services, including, but not limited to, text, graphics,
                logos, images, audio clips, video clips, and software, are the
                property of BB or its licensors and are protected by copyright,
                trademark, and other intellectual property laws. You may not
                reproduce, distribute, modify, display, or perform any part of
                our content without our prior written consent. Any unauthorized
                use may result in legal action. We respect the intellectual
                property rights of others and expect our users to do the same.
                If you believe that your work has been copied in a way that
                constitutes copyright infringement, please contact us with the
                necessary information.
              </p>

              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                5. Privacy Policy
              </h3>

              <p>
                Your use of our Services is also governed by our{" "}
                <Link to="/privacy-policy">Privacy Policy</Link> By using our
                Services, you consent to the collection, use, and sharing of
                your information as described in our Privacy Policy. We are
                committed to protecting your privacy and ensuring the
                confidentiality of your personal data. Please review our Privacy
                Policy to understand how we collect, use, and safeguard your
                information. We employ industry-standard security measures to
                protect your data from unauthorized access, alteration, or
                destruction. However, no method of transmission over the
                internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>

              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                6. Limitation of Liability
              </h3>

              <p>
                To the fullest extent permitted by applicable law, BB shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use,
                goodwill, or other intangible losses resulting from (a) your
                access to or use of, or inability to access or use, our
                Services; (b) any unauthorized access to or use of our servers
                and/or any personal information stored therein; (c) any
                interruption or cessation of transmission to or from our
                Services; (d) any bugs, viruses, trojan horses, or the like that
                may be transmitted to or through our Services by any third
                party; or (e) any errors or omissions in any content or for any
                loss or damage of any kind incurred as a result of your use of
                any content posted, emailed, transmitted, or otherwise made
                available via our Services, whether based on warranty, contract,
                tort, or any other legal theory, and whether or not BB is
                advised of the possibility of such damages. This limitation of
                liability applies to all claims, whether based on warranty,
                contract, tort, or any other legal theory.
              </p>

              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                7. Changes to Terms
              </h3>

              <p>
                We reserve the right to modify or replace these Terms at any
                time. If a revision is material, we will provide at least 30
                days' notice prior to any new terms taking effect. What
                constitutes a material change will be determined at our sole
                discretion. It is your responsibility to review these terms
                periodically for updates or changes. Your continued use of our
                Services after any modifications to these terms constitutes
                acceptance of those changes. We may also, in the future, offer
                new services and/or features through our Services. Such new
                features and/or services shall be subject to these Terms unless
                explicitly stated otherwise.
              </p>

              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                8. Governing Law
              </h3>

              <p>
                These Terms shall be governed and construed in accordance with
                the laws of [Your Country/State], without regard to its conflict
                of law provisions. Any disputes arising out of or relating to
                these Terms or our Services shall be resolved exclusively in the
                courts of [Your Country/State]. You agree to submit to the
                personal jurisdiction of such courts and waive any objection to
                venue in such courts. These Terms, together with our Privacy
                Policy and any other legal notices published by us on our
                Services, constitute the entire agreement between you and BB
                concerning your use of our Services and supersede all prior or
                contemporaneous communications and proposals, whether
                electronic, oral, or written, between you and BB.
              </p>

              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                9. Contact Us
              </h3>

              <p>
                If you have any questions about these Terms, please contact us
                at <a href="mailto:support@bb.com"></a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PrivacyPolicy;
