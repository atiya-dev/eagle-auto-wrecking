import React from 'react';
import { Truck, Shield, RotateCcw, Scale, Lock, Info } from 'lucide-react';

const PolicyLayout = ({ title, icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
  <div className="pt-24 pb-24 bg-black min-h-screen">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="mb-16 text-center">
        <div className="inline-flex p-4 bg-brand-primary/10 text-brand-primary rounded-full mb-6">
          {icon}
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter">{title}</h1>
      </div>
      <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-16 rounded-2xl shadow-2xl">
        <div className="prose prose-invert prose-neutral max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter prose-p:text-neutral-400 prose-p:leading-relaxed prose-li:text-neutral-400">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export const ShippingPolicy = () => (
  <PolicyLayout title="Shipping Policy" icon={<Truck size={48} />}>
    <p>At Eagle Auto Wrecking, we understand that getting your vehicle back on the road is a priority. We offer reliable nationwide shipping across the United States for our entire inventory.</p>
    
    <h3>Shipping & Processing</h3>
    <ul>
      <li><strong>Nationwide Shipping:</strong> Available across all 50 states in the USA.</li>
      <li><strong>Processing Time:</strong> Most orders are processed within 1-3 business days after payment confirmation.</li>
      <li><strong>Delivery Timeframe:</strong> Standard delivery typically takes 5-14 business days. Expedited options may be available for select components.</li>
    </ul>

    <h3>Freight & Large Items</h3>
    <p>Mechanical assemblies such as engines, transmissions, and heavy body panels are shipped via LTL freight services.</p>
    <ul>
      <li><strong>Inspection Mandatory:</strong> Customer MUST inspect freight deliveries upon arrival. Any visual damage to the packaging or part must be noted on the bill of lading BEFORE signing.</li>
      <li><strong>Reporting Damage:</strong> If damage is found, it must be reported to Eagle Auto Wrecking immediately (within 24 hours).</li>
      <li><strong>Commercial vs Residential:</strong> Freight delivery to a commercial address with a forklift or loading dock is preferred. Residential delivery may incur additional liftgate charges.</li>
    </ul>

    <h3>Tracking & Communication</h3>
    <p>Tracking details will be provided via email once your shipment has been processed and picked up by the carrier. Additional freight charges may apply for oversized items or remote delivery areas.</p>
  </PolicyLayout>
);

export const WarrantyPolicy = () => (
  <PolicyLayout title="Warranty Policy" icon={<Shield size={48} />}>
    <p>We stand behind the quality of our recycled OEM parts. Our warranty policies are designed to give you confidence in your purchase.</p>

    <h3>Standard Coverage</h3>
    <ul>
      <li><strong>30-Day Warranty:</strong> Most mechanical parts include a standard 30-day warranty coverage from the date of delivery.</li>
      <li><strong>Replacement Only:</strong> Our warranty covers the replacement of defective parts only. If a replacement is not available, a refund for the part cost will be issued.</li>
      <li><strong>No Labor Reimbursement:</strong> Warranty does NOT cover labor costs, towing, or rental car expenses under any circumstances.</li>
    </ul>

    <h3>Conditions & Voidance</h3>
    <ul>
      <li><strong>Professional Installation:</strong> Engines and transmissions must be professionally installed by a certified mechanic or licensed repair facility to maintain warranty eligibility.</li>
      <li><strong>Installation Evidence:</strong> Receipts showing professional installation may be required for warranty claims.</li>
      <li><strong>Void Conditions:</strong> Warranty is void if the part is improperly installed, disassembled, modified, overheated, or used for racing/off-road purposes.</li>
      <li><strong>Maintenance Requirements:</strong> Proper fluids, seals, and maintenance requirements (such as oil changes and timing belt replacements where applicable) must be followed.</li>
    </ul>

    <h3>Electrical Components</h3>
    <p>Electrical components and modules may have limited warranty terms. Please verify specifically for the component you are purchasing.</p>
  </PolicyLayout>
);

export const ReturnsPolicy = () => (
  <PolicyLayout title="Returns & Refunds" icon={<RotateCcw size={48} />}>
    <p>If you need to return a part, Eagle Auto Wrecking offers a straightforward return process within 30 days of purchase.</p>

    <h3>Return Conditions</h3>
    <ul>
      <li><strong>30-Day Window:</strong> Returns are accepted within 30 days of the original purchase date.</li>
      <li><strong>Proof of Purchase:</strong> The original invoice or order confirmation is required for all returns.</li>
      <li><strong>Condition:</strong> Parts must remain unmodified and in the same condition as when they were shipped.</li>
      <li><strong>Markings:</strong> Warranty markings or stamps placed by Eagle Auto Wrecking must be intact and visible.</li>
    </ul>

    <h3>Shipping & Fees</h3>
    <ul>
      <li><strong>Return Shipping:</strong> The customer is responsible for return shipping costs unless an incorrect part was shipped by Eagle Auto Wrecking.</li>
      <li><strong>Restocking Fee:</strong> A restocking fee (typically 15-25%) may apply to returns of correctly shipped parts.</li>
      <li><strong>Non-Refundable:</strong> Original shipping charges are non-refundable.</li>
    </ul>

    <h3>Refund Process</h3>
    <p>Refunds are processed after the returned part is received and inspected by our quality control team. Please allow 3-5 business days for inspection and processing after delivery to our facility.</p>
  </PolicyLayout>
);

export const TermsConditions = () => (
  <PolicyLayout title="Terms & Conditions" icon={<Scale size={48} />}>
    <h3>1. Acceptance of Terms</h3>
    <p>By using this website and purchasing parts from Eagle Auto Wrecking, you agree to comply with and be bound by these Terms and Conditions.</p>

    <h3>2. Product Availability & Condition</h3>
    <p>All items are subject to availability. As we deal in used automotive components, the condition is described as "used" unless otherwise stated. Minor cosmetic wear is expected on recycled parts.</p>

    <h3>3. Limitation of Liability</h3>
    <p>Eagle Auto Wrecking shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of or inability to use parts purchased from us. Our liability is strictly limited to the purchase price of the part.</p>

    <h3>4. Customer Responsibilities</h3>
    <p>It is the customer's responsibility to verify part compatibility with their specific vehicle VIN or part number before ordering.</p>

    <h3>5. Payment Terms</h3>
    <p>Full payment is required before any part is shipped. All transactions are processed through secure payment gateways.</p>
  </PolicyLayout>
);

export const PrivacyPolicy = () => (
  <PolicyLayout title="Privacy Policy" icon={<Lock size={48} />}>
    <h3>Data Collection</h3>
    <p>We collect information you provide directly to us when you request a quote, make a purchase, or contact our support team. This include name, email, shipping address, and vehicle details.</p>

    <h3>Information Protection</h3>
    <p>We implement a variety of security measures to maintain the safety of your personal information. Your sensitive data is encrypted via SSL technology.</p>

    <h3>Cookies</h3>
    <p>We use cookies to enhance your browsing experience and understand how our website is used. You can disable cookies through your browser settings.</p>

    <h3>Third-Party Sharing</h3>
    <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except for the purpose of order fulfillment (e.g., sharing your address with shipping carriers).</p>
  </PolicyLayout>
);
