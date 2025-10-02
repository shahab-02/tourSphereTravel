import React from 'react'

function PrivacyPolicy() {
  return (
    <div className='font-montserrat  py-16 p-4 lg:p-14 space-y-6 text-lg'>
      <h1 className='font-bold text-3xl text-[#E9584B] text-center lg:text-left'>Privacy <span className='text-black'>Policy</span></h1> 
      <p>
        Welcome to Tours Sphere. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (“App”) and related services.
      </p>
      <p>
        By using the Services, you consent to the collection and use of information in accordance with this Privacy Policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at <u>www.toursphere.co</u>
      </p>
      {/* Point 1 */}
      <h2 className='font-semibold text-xl'>1. Information We Collect</h2>
      <p className='font-medium'>We may collect the following types of information:</p>
      <div>
        <h2 className='font-medium'>a. Personal Information:</h2>
      <ul className='pl-10 list-disc'>  
        <li>Name</li>
        <li>Email address</li>
        <li>Phone Number</li>
        <li>Payment detail(if applicable)</li>
      </ul>
      <p>If you decide at any time that you no longer wish to receive such communications from us, please follow the un-subscribe instructions provided in any of the communications.</p>
      </div>
      <p>We collect this Personal Information for the purpose of providing the Services, communicating with you, responding to your requests/inquiries, and improving our Services. We may share your Personal Information with our affiliates and with other carefully selected companies that we believe offer services and products that would potentially be of interest to you.</p>
      <p><h2 className='underline font-medium'>Usage Information </h2>
        When you access our Services, our servers automatically collect certain data (“Log Data”). This may include, but is not limited to, your device’s Internet Protocol (IP) address, browser type, the webpage you visited before arriving at our Site, the specific pages you view on our Site, the duration of your visits, search queries made through our Services, download or search activity, and timestamps of access. Additionally, when using our App, we gather data related to tour activity, such as the time tours were taken, completed or exited stops, timing details, and other relevant insights. This information helps us analyze usage patterns, manage and improve the technical performance of our Services, enhance functionality and usability, and customize the experience to better meet user needs.</p>
        <div>
          <h2 className='font-medium'>b. Location Information:</h2>
           <ul className='list-disc pl-10'>
            <li>Real-time GPS location to provide location-based tour services.</li>
           </ul>
        </div>
        <div>
          <h2 className='font-medium'>c. Device Information:</h2>
           <ul className='list-disc pl-10'>
            <li>Device type</li>
            <li>Operating system</li>
            <li>IP address</li>
           </ul>
        </div>
        <div>
          <h2 className='font-medium'>d. Usage Data:</h2>
           <ul className='list-disc pl-10'>
            <li>Tour preferences</li>
            <li>Interaction history with the App</li>
           </ul>
        </div>
         {/* Point 2 */}
        <h2 className='font-semibold text-xl'>2. How We Use Your Information</h2>
        <div>
          <h2 className='font-medium'>We use your information to:</h2>
           <ul className='list-disc pl-10'>
            <li>Provide and improve our services.</li>
            <li>Personalize your experience.</li>
            <li>Process payments (if applicable).</li>
            <li>Communicate with you, including updates and promotional offers.</li>
            <li>Analyze app usage for improvements.</li>
            <li>Ensure security and prevent fraud.</li>
            <li>Customer feedback collection</li>
            <li>Create tours</li>
            <li>Create tour exploration</li>
            <li>Create legal compliance</li>
           </ul>
        </div>
         {/* Point 3 */}
        <h2 className='font-semibold text-xl'>3. Sharing Your Information</h2>
        <div>
          <h2 className='font-medium'>We do not sell your personal information. However, we may share your information with:</h2>

           <ul className='list-disc pl-10'>
            <li>Service Providers: Third-party companies assisting with payment processing, analytics, and hosting.</li>
            <li>Legal Authorities: If required by law or to protect rights and safety.</li>
            <li>We work with third parties, such as Google and other social media platforms to analyze how you interact with our app and deliver advertisements tailored to individual interests. These third parties may collect information about your activity within our app, such as device information, geolocation, and interaction data. They may use this information to measure the effectiveness of advertising campaigns, improve the relevance of the ads you see, and compile aggregated reports for us.</li>    
           </ul>
        </div>
        {/* Point 4 */}
            <h2 className='font-semibold text-xl'>4. Location Services</h2>
            <p>Our app may collect and use location data to deliver location-specific tour information. You can disable location tracking in your device settings, but this may affect app functionality.</p>
            {/* Point 5 */}
            <h2 className='font-semibold text-xl'>5. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. Given the inherent risks, we cannot guarantee absolute security and consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk. </p>
            {/* Point 6 */}
            <h2 className='font-semibold text-xl'>6. Your Privacy Rights</h2>
            <div>
              <h2>Depending on your region, you may have the right to:</h2>
              <ul className='list-disc pl-10'>
            <li>Opt-out of marketing communications</li>
            </ul>
            </div>
            <p>To exercise these rights, contact us at info@toursphere.co.</p>
            <h2 className='font-medium underline'>Retention Of Your Information: </h2>
            <p>We will retain your personal information with us for the minimum amount of time possible after users terminate their accounts or for as long as we need it to fulfill the purposes for which it was collected as detailed in this Privacy Policy. If you have only downloaded or purchased tours, all personal information is expected to be deleted within 30 days. If you have created tours, we may need to retain your information up to 1 year after you delete your account as we need to ensure that the tour is accessible to those who have purchased it for up to a year. The tour will revert back to Tour Sphere as the creator and removing you as creator.</p>
            {/* Point 7 */}
            <h2 className='font-semibold text-xl'>7. Third-Party Links </h2>
            <p>Our app may include links to third-party websites or services. We are not responsible for their privacy practices.</p>
            {/* Point 8 */}
            <h2 className='font-semibold text-xl'>8. Children’s Privacy </h2>
            <p>Our app is not intended for children under 18 years old. If we learn we have collected data from a child without parental consent, we will delete it promptly.</p>
            {/* Point 9 */}
            <h2 className='font-semibold text-xl'>9. Changes to this privacy policy</h2>
            <p>The Owner reserves the right to make changes to this privacy policy at any time by notifying its users within Tour Sphere. Sending a notice to Users via any contact information available to the owner. Any changes that will be posted will be updated with an effective date.</p>
            <h2 className='font-medium underline'>Legal action:</h2>
            <p>
              The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of VoiceMap or the related Services. The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities.
            </p>
            <h2 className='font-medium underline'>How to exercise your privacy rights under US state laws:</h2>
            <p>To exercise the rights described above, you need to submit your request to us by contacting us via the contact details provided in this document.
For us to respond to your request, we must know who you are. We will not respond to any request if we are unable to verify your identity and therefore confirm the Personal Information in our possession relates to you. You are not required to create an account with us to submit your request. We will use any Personal Information collected from you in connection with the verification of your request solely for verification and shall not further disclose the Personal Information, retain it longer than necessary for purposes of verification, or use it for unrelated purposes.</p>
            <h2 className='font-medium underline'>Retention time:</h2>
            <p>Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as required by the purpose they have been collected for and may be retained for longer due to applicable legal obligation or based on the Users’ consent.</p>
            <h2 className='font-medium underline'>International privacy laws:</h2>
            <p>If you are using our Service from outside of the United States, please be aware that you are sending data, including personally identifying information, to the United States where our servers are located. That information may then be transferred within the United States and then transferred back out of the United States to countries outside of your residence, depending upon the type of information and how it is stored by us. Our collection, storage and use of your personal information will at all times continue to be governed by this Privacy Policy.</p>
            <h2 className='font-medium underline'>California Privacy Laws:</h2>
            <p>If you are a California resident, you have certain additional rights regarding our use of your Personal Information. To learn more about your rights, visit [link to California Privacy Notice]. Among other things, you may request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request please send an e-mail to info@walkntours.com or write us at [address].</p>
            <h2 className='font-medium underline'>Transfer:</h2>
            <p>Your information may be transferred to and maintained on computers located outside of your state, province, country or other governmental jurisdiction where the privacy laws may not be as protective as those in your jurisdiction. Your consent to this Privacy Policy by accessing or using the Services followed by your submission of such information represents your agreement to that transfer.</p>
            <p>If you choose to add content to Tour Sphere, including without limitation, photos, pictures, graphics, videos, text, audio, links, comments, works of authorship, data or information (any and all of the foregoing “Content”), such content will be publicly viewable via the Services and subject to the Terms of Service. Your name will also be publicly associated with any Content you add. Whenever you voluntarily disclose personal information on publicly viewable web pages, that information will be publicly available and can be collected or used by others. Such postings may also appear on other websites or when searches are executed on the subject of your posting. Such activities are beyond the control of Tour Sphere and this Privacy Policy. You should therefore exercise discretion when disclosing any Personal Information or other information when using the public message boards.</p>
            <h2 className='font-medium underline'>Website Consent:</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
            {/* Section 10 */}
            <h2 className='font-semibold text-xl'>10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:
             Email: <span className='underline'>info@toursphere.co</span></p>
             <h2 className='text-xl'>Copyright Tour Sphere © 2025</h2>
    </div>
  )
}

export default PrivacyPolicy
