import React from "react";
import "./manifesto.css";

export default function LegalAndPrivacy() {
  return (
    <div className="manifesto">
      <section>
        <h1>Legal Notice</h1>
        <p><strong>Information in accordance with § 5 TMG</strong></p>
        <p>
          <strong>zelluloid42</strong><br />
          A non-commercial media collective<br />
          [Address of the collective or a representative]<br />
          [Postal Code, City]<br />
          Germany
        </p>
        <p>
          Email: <a href="mailto:contact@zelluloid42.net">contact@zelluloid42.net</a>
        </p>
        <p>
          <strong>Responsible for content according to § 55(2) RStV:</strong><br />
          [Either a named person or: The collective zelluloid42]<br />
          [Optional: same address as above]
        </p>
        <h2>Disclaimer</h2>
        <p>
          Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.
        </p>
      </section>

      <hr className="my-8" />

      <section>
        <h1>Privacy Policy</h1>
        <p>
          We, the collective <strong>zelluloid42</strong>, take the protection of your personal data very seriously. We treat your personal information confidentially and in accordance with statutory data protection regulations and this privacy policy.
        </p>

        <h2>1. Responsible Entity</h2>
        <p>
          zelluloid42<br />
          Email: <a href="mailto:contact@zelluloid42.net">contact@zelluloid42.net</a>
        </p>

        <h2>2. Data Collection When Visiting This Website</h2>
        <p>
          When you access our website, your browser automatically transmits the following information to our hosting provider:
        </p>
        <ul>
          <li>IP address</li>
          <li>Date and time of request</li>
          <li>Visited page</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
        </ul>
        <p>
          These data are necessary for technical reasons and may be used for error diagnostics. They are not merged with other data sources.
        </p>

        <h2>3. Cookies</h2>
        <p>This website does not use any cookies that require consent.</p>

        <h2>4. Contact</h2>
        <p>
          If you contact us via email, we will store your message and contact information to process your request. We do not share this data without your consent.
        </p>

        <h2>5. External Links (YouTube)</h2>
        <p>
          Our website contains links to third-party platforms such as YouTube. These are direct hyperlinks, not embedded content. No data is transmitted to YouTube until you click the link and leave our domain. Their own privacy policies apply from that point on.
        </p>

        <h2>6. Your Rights</h2>
        <ul>
          <li>Access your data</li>
          <li>Request correction or deletion</li>
          <li>Restrict processing</li>
          <li>Object to data processing</li>
          <li>Data portability</li>
        </ul>
        <p>
          For any questions, contact: <a href="mailto:contact@zelluloid42.net">contact@zelluloid42.net</a>
        </p>

        <h2>7. Hosting</h2>
        <p>
          Our website is hosted by:<br />
          [Insert hosting provider name]<br />
          A data processing agreement (Art. 28 GDPR) has been signed with our host.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We reserve the right to update this policy to reflect legal or technical changes.
        </p>
      </section>
    </div>
  );
}