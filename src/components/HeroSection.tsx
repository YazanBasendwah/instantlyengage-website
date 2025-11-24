import React, { useEffect } from 'react';

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Load Wistia scripts for all videos
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.head.appendChild(script1);

    // Load scripts for all video embeds
    const videoScripts = [
  'r6d0noezwy', // Hero video
  'o54eytvvdl', // Little Angels website (NEW VIDEO)
  'hwggz3lre1', // Little Angels Case Study Video (NEW!)
  'jdjnnoc2lq', // World of Learning International School
  '2wygb0s4sl', // World of Learning Junior
  '7fjp5g0il3', // Marketing Graphics 1
  'ndkwguux7j', // Marketing Graphics 2 (NEW VIDEO)
  '6cdb8cb0id', // School Promotional Video 1 (NEW VIDEO)
  'yrzgrbpgq7',  // AI Chatbot Demo (NEW VIDEO)
  'jesjyu64c2'  // World of Learning Case Study Video (NEW VIDEO)
];

    const scripts = [];
    videoScripts.forEach(mediaId => {
      const script = document.createElement('script');
      script.src = `https://fast.wistia.com/embed/${mediaId}.js`;
      script.async = true;
      script.type = 'module';
      document.head.appendChild(script);
      scripts.push(script);
    });

    // Add Wistia styles for all videos
    const style = document.createElement('style');
    style.textContent = `
      wistia-player[media-id='t4peddfacw']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/r6d0noezwy/swatch'); 
        display: block; 
        filter: blur(5px); 
      }
      wistia-player[media-id='o54eytvvdl']:not(:defined) { 
  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/o54eytvvdl/swatch'); 
  display: block; 
  filter: blur(5px); 
}
      wistia-player[media-id='hwggz3lre1']:not(:defined) { 
  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/hwggz3lre1/swatch'); 
  display: block; 
  filter: blur(5px); 
}
      wistia-player[media-id='jdjnnoc2lq']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/jdjnnoc2lq/swatch'); 
        display: block; 
        filter: blur(5px); 
      }
      wistia-player[media-id='2wygb0s4sl']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/2wygb0s4sl/swatch'); 
        display: block; 
        filter: blur(5px); 
      }
      wistia-player[media-id='7fjp5g0il3']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/7fjp5g0il3/swatch'); 
        display: block; 
        filter: blur(5px); 
      }
      wistia-player[media-id='ndkwguux7j']:not(:defined) { 
  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/ndkwguux7j/swatch'); 
  display: block; 
  filter: blur(5px); 
}
wistia-player[media-id='6cdb8cb0id']:not(:defined) { 
  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/6cdb8cb0id/swatch'); 
  display: block; 
  filter: blur(5px); 
}
wistia-player[media-id='yrzgrbpgq7']:not(:defined) { 
  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/yrzgrbpgq7/swatch'); 
  display: block; 
  filter: blur(5px); 
}
wistia-player[media-id='jesjyu64c2']:not(:defined) { 
  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/jesjyu64c2/swatch'); 
  display: block; 
  filter: blur(5px); 
}
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
      scripts.forEach(script => document.head.removeChild(script));
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="bg-white pt-20 pb-10 md:pt-24 md:pb-16 lg:pt-28" id="home">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6">
          <div className="text-gray-900">We Get Your School</div>
          <div className="text-blue-500">5–15 New Student Enrollments in 90 Days</div>
          <div className="text-gray-900">(Or You Don't Pay)</div>
        </h1>
        
        <p className="text-blue-900 text-base md:text-xl mb-8 max-w-2xl mx-auto font-bold">
          WITHOUT relying on word-of-mouth referrals, waiting for parents to find you, or posting endlessly on social media 
        </p>
        
        {/* Wistia Video */}
        <div className="relative max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto mb-8 flex justify-center">
          <div className="w-full" style={{ aspectRatio: '1.7777777777777777' }}>
            <wistia-player 
              media-id="r6d0noezwy" 
              wistia-popover="true" 
              aspect="1.7777777777777777"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
        
        {/* Call to Action Button */}
        <a 
          href="/booking" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-5 md:px-12 md:py-6 lg:px-16 lg:py-7 rounded-lg text-xl md:text-2xl lg:text-3xl inline-block transition-colors mb-16"
        >
          Book A Call
        </a>

        {/* Trusted By Section */}
        <div className="mt-2">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-800 mb-8">Trusted By</h2>
          
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <a href="https://littleangelsriyadh.com" target="_blank" rel="noopener noreferrer" className="block">
              <img 
                src="https://i.imgur.com/5NtkTv2.png" 
                alt="Little Angels Montessori Preschool" 
                className="max-w-xs md:max-w-sm h-auto hover:opacity-80 transition-opacity cursor-pointer"
              />
            </a>
          </div>

          {/* Case Study Headline */}
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Case Study: <span className="text-blue-500">50+ Tour Bookings Requests</span> In 45 Days
          </h3>

          {/* Little Angels Case Study Video */}
          <div className="relative max-w-4xl md:max-w-6xl mx-auto mb-8 overflow-hidden shadow-lg rounded-lg">
            <div className="w-full" style={{aspectRatio: '1.94331983805668'}}>
              <wistia-player 
                media-id="hwggz3lre1" 
                wistia-popover="true" 
                aspect="1.94331983805668"
                style={{width: '100%', height: '100%'}}
              />
            </div>
          </div>

          {/* Case Study Description */}
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
            Ms. Suha Hussein, owner of Little Angels Montessori Preschool with 5 branches across Riyadh, now makes it effortless for parents to find her preschool, see them as the best choice for their child, and book a tour. We redesigned her outdated website, added a clear tour booking system, and ran Google Ads, which helped more parents discover her schools, quickly built trust, and <span className="text-blue-500 font-bold">resulted in consistent, high-quality tour bookings across all locations!</span>
          </p>

          {/* Second Call to Action Button */}
          <a 
            href="/booking" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-5 md:px-12 md:py-6 lg:px-16 lg:py-7 rounded-lg text-xl md:text-2xl lg:text-3xl inline-block transition-colors"
          >
            Book A Call
          </a>
        </div>

        {/* Second Trusted By Section */}
        <div className="mt-12">
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-8">Trusted By</h2>
          
          {/* Two Logos */}
          <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <a href="https://wlischool.com" target="_blank" rel="noopener noreferrer" className="block">
              <img 
                src="https://i.imgur.com/vX8kHyS.png" 
                alt="World of Learning International School" 
                className="max-w-48 md:max-w-64 h-auto hover:opacity-80 transition-opacity cursor-pointer"
              />
            </a>
            <a href="https://wlischool.com" target="_blank" rel="noopener noreferrer" className="block">
              <img 
                src="https://i.imgur.com/ycHT7ap.png" 
                alt="World of Learning Junior" 
                className="max-w-48 md:max-w-64 h-auto hover:opacity-80 transition-opacity cursor-pointer"
              />
            </a>
          </div>

          {/* Case Study Headline */}
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Case Study: From No Online Presence to More Parents Discovering the School and <span className="text-blue-500">Booking Tours</span>
          </h3>

          {/* Video */}
<div className="relative max-w-4xl md:max-w-6xl mx-auto mb-8 overflow-hidden shadow-lg rounded-lg">
  <div className="w-full" style={{aspectRatio: '1.7777777777777777'}}>
    <wistia-player 
      media-id="jesjyu64c2" 
      wistia-popover="true" 
      aspect="1.7777777777777777"
      style={{width: '100%', height: '100%'}}
    />
  </div>
</div>

          {/* Case Study Description */}
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
            World of Learning International School & Junior started with no website. We built ones showcasing all the key information parents want and launched Google Ads. Now parents can easily see why the school & nursery are the best choices in the area — leading to <span className="text-blue-500 font-bold">more calls and tour bookings every week.</span>
          </p>

          {/* Third Call to Action Button */}
          <a 
            href="/booking" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-5 md:px-12 md:py-6 lg:px-16 lg:py-7 rounded-lg text-xl md:text-2xl lg:text-3xl inline-block transition-colors"
          >
            Book A Call
          </a>
        </div>

        {/* We ACTUALLY Get Results Section */}
        <div className="mt-20 mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-12">We ACTUALLY Get Results</h2>

          {/* Little Angels Results */}
          <div className="mb-16">
            <div className="mb-6 flex flex-col items-center">
              <img 
                src="https://i.imgur.com/5NtkTv2.png" 
                alt="Little Angels Montessori Preschool" 
                className="max-w-xs h-auto mb-4"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Little Angels Montessori Preschool</h3>
              <p className="text-lg text-blue-600 font-semibold">15 Tour Bookings in the first 2 weeks!</p>
            </div>
            
            <div className="relative bg-white rounded-lg shadow-lg max-w-4xl mx-auto mb-8 overflow-hidden border">
              <img 
                src="https://i.imgur.com/NklbU6Q.png" 
                alt="Little Angels Google Ads Dashboard Results" 
                className="w-full h-auto"
              />
            </div>
            
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              After building a new website and running Google Ads, Little Angels Montessori Preschool got <strong>15 tour bookings in just 2 weeks.</strong> Parents could easily find the school online, see what makes it special, and schedule visits without any friction.
            </p>
          </div>

          {/* World of Learning Results */}
          <div className="mb-12">
            <div className="mb-6 flex flex-col items-center">
              <img 
                src="https://i.imgur.com/ycHT7ap.png" 
                alt="World of Learning International School" 
                className="max-w-xs h-auto mb-4"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">World of Learning International School</h3>
              <p className="text-lg text-blue-600 font-semibold">6 tour bookings and 12 parent calls in the first 2 weeks</p>
            </div>
            
            <div className="relative bg-white rounded-lg shadow-lg max-w-4xl mx-auto mb-8 overflow-hidden border">
              <img 
                src="https://i.imgur.com/hEUtbsN.png" 
                alt="World of Learning Google Ads Dashboard Results" 
                className="w-full h-auto"
              />
            </div>
            
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Once we launched the new website and ads, the kindergarten received <strong>6 tour bookings and 12 phone calls in the first two few weeks. </strong> Local parents searching for a quality kindergarten could quickly discover the school online, see what makes it special, and easily schedule a tour.
            </p>
          </div>

          {/* Results Call to Action */}
          <div className="text-center bg-blue-50 py-12 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ready to See Similar Results for Your School?
            </h3>
            <a 
              href="/booking" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-5 md:px-12 md:py-6 rounded-lg text-xl md:text-2xl inline-block transition-colors"
            >
              Book A Call
            </a>
          </div>
        </div>

        {/* Examples Of Our Work Section */}
        <div className="mt-20 mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4">Examples Of Our Work</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Complete school marketing solutions that make it easy for parents to see why your school is the best choice and book tours.
          </p>

          {/* Featured Website Example */}
          <div className="mb-16">
            <div className="mb-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Little Angels Montessori Website</h3>
              <p className="text-lg text-blue-600 font-semibold">Complete website redesign with an easy-to-use tour booking system that helped book 40+ tours in the first month.</p>
            </div>
            
            <div className="relative max-w-6xl mx-auto mb-8 overflow-hidden shadow-lg rounded-lg">
              <div className="w-full" style={{aspectRatio: '1.7777777777777777'}}>
                <wistia-player 
                  media-id="o54eytvvdl" 
                  wistia-popover="true" 
                  aspect="1.7777777777777777"
                  style={{width: '100%', height: '100%'}}
                />
              </div>
            </div>
            
            <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed text-center">
              Redesigned the website with a simple, easy-to-use tour booking system, making it effortless for parents find the preschool, see it as the best choice, and schedule visits. Little Angels saw <strong>over 40 tours booked in the first month</strong>
            </p>
            
            {/* Book A Call Button */}
            <div className="text-center mb-16">
              <a 
                href="/booking" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-5 md:px-12 md:py-6 rounded-lg text-xl md:text-2xl inline-block transition-colors"
              >
                Book A Call
              </a>
            </div>
          </div>

          {/* Work Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* World of Learning International School Website */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative" style={{aspectRatio: '2.051282051282051'}}>
                <wistia-player 
                  media-id="jdjnnoc2lq" 
                  wistia-popover="true" 
                  aspect="2.051282051282051"
                  style={{width: '100%', height: '100%'}}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">World Of Learning International School Website</h4>
                <p className="text-gray-600 text-sm">Website that highlights everything parents want to know, builds trust, and makes booking tours simple and fast.</p>
              </div>
            </div>

            {/* World of Learning Junior Website */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative" style={{aspectRatio: '2.051282051282051'}}>
                <wistia-player 
                  media-id="2wygb0s4sl" 
                  wistia-popover="true" 
                  aspect="2.051282051282051"
                  style={{width: '100%', height: '100%'}}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">World Of Learning Junior Website</h4>
                <p className="text-gray-600 text-sm">Nursery website that builds trust with parents, highlights the school's strengths, and makes booking tours effortless.</p>
              </div>
            </div>

            {/* School Marketing Graphics 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative" style={{aspectRatio: '0.8'}}>
                <wistia-player 
                  media-id="7fjp5g0il3" 
                  wistia-popover="true" 
                  aspect="0.8"
                  style={{width: '100%', height: '100%'}}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">School Marketing Graphics</h4>
                <p className="text-gray-600 text-sm">Social media content that makes parents remember your school.</p>
              </div>
            </div>

            {/* School Marketing Graphics 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative" style={{aspectRatio: '0.8'}}>
                <wistia-player 
  media-id="ndkwguux7j" 
  wistia-popover="true" 
  aspect="0.8"
  style={{width: '100%', height: '100%'}}
/>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">School Marketing Graphics</h4>
                <p className="text-gray-600 text-sm">Materials that inspire parents to schedule a tour immediately</p>
              </div>
            </div>

            {/* School Promotional Videos 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="relative" style={{aspectRatio: '0.5633802816901409'}}>
    <wistia-player 
      media-id="6cdb8cb0id" 
      wistia-popover="true" 
      aspect="0.5633802816901409"
      style={{width: '100%', height: '100%'}}
    />
  </div>
  <div className="p-6">
    <h4 className="text-xl font-bold text-gray-800 mb-2">School Promotional Videos</h4>
    <p className="text-gray-600 text-sm">Engaging videos that build trust and encourage parents to book tours.</p>
  </div>
</div>

            {/* School Promotional Videos 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="relative" style={{aspectRatio: '1.7777777777777777'}}>
    <wistia-player 
      media-id="yrzgrbpgq7" 
      wistia-popover="true" 
      aspect="1.7777777777777777"
      style={{width: '100%', height: '100%'}}
    />
  </div>
  <div className="p-6">
    <h4 className="text-xl font-bold text-gray-800 mb-2">Use AI to Increase Tour Bookings</h4>
    <p className="text-gray-600 text-sm">AI chatbot that answers parents' questions 24/7 and inspires them to book tours.</p>
  </div>
</div>

          </div>

          {/* Work Examples Call to Action */}
          <div className="text-center">
            <a 
              href="/booking" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-5 md:px-12 md:py-6 rounded-lg text-xl md:text-2xl inline-block transition-colors"
            >
              Book A Call
            </a>
          </div>
        </div>

        {/* How We Fill Your Classrooms Section */}
        <div className="mt-20 mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 text-center">How We Fill Your Classrooms</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto text-center">
            Our proven 6-step process that gets your school new tour bookings every week
          </p>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-500 relative group">
              <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-blue-600 transition-colors duration-300">
                1
              </div>
              <div className="mb-6 mx-auto mt-4">
                <img 
                  src="https://i.imgur.com/M2cFfK9.png" 
                  alt="School Analysis Icon" 
                  className="w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">We Study Your School</h3>
              <p className="text-gray-600 leading-relaxed">
                What makes your school special, what parents in your area are looking for, and who your competition is.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-500 relative group">
              <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-blue-600 transition-colors duration-300">
                2
              </div>
              <div className="mb-6 mx-auto mt-4">
                <img 
                  src="https://i.imgur.com/QVjMKZA.png" 
                  alt="Website Creation Icon" 
                  className="w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">We Create Your Online Presence</h3>
              <p className="text-gray-600 leading-relaxed">
                A website parents trust instantly, pages that give them clear information they're looking for, and lets them book tours easily with just a couple of clicks.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-500 relative group">
              <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-blue-600 transition-colors duration-300">
                3
              </div>
              <div className="mb-6 mx-auto mt-4">
                <img 
                  src="https://i.imgur.com/dHd2xpL.png" 
                  alt="Ad Creation Icon" 
                  className="w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">We Write Ads That Parents Click</h3>
              <p className="text-gray-600 leading-relaxed">
               Ads that speak directly to what parents want most - safety, learning, and happiness for their children.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-500 relative group">
              <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-blue-600 transition-colors duration-300">
                4
              </div>
              <div className="mb-6 mx-auto mt-4">
                <img 
                  src="https://i.imgur.com/JhQcIfE.png" 
                  alt="Marketing Campaign Icon" 
                  className="w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">We Put Your Ads in Front of Parents</h3>
              <p className="text-gray-600 leading-relaxed">
               Reach parents searching "preschools near me" on Google that are ready to enroll NOW. Plus target local parents on Facebook, Instagram, Snapchat, and TikTok. <strong>Parents will see your school everywhere they look online.</strong>
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-500 relative group">
              <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-blue-600 transition-colors duration-300">
                5
              </div>
              <div className="mb-6 mx-auto mt-4">
                <img 
                  src="https://i.imgur.com/APs5m5C.png" 
                  alt="Analytics & Optimization Icon" 
                  className="w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">We Track & Improve Everything</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor which ads work best, adjust targeting to reach more interested parents, optimize for better results.
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-500 relative group">
              <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-blue-600 transition-colors duration-300">
                6
              </div>
              <div className="mb-6 mx-auto mt-4">
                <img 
                  src="https://i.imgur.com/4ndFuFu.png" 
                  alt="Tour Bookings Calendar Icon" 
                  className="w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">You Get Tour Bookings Every Week</h3>
              <p className="text-gray-600 leading-relaxed">
                Parents book tours every week, your classrooms fill up, and you get predictable enrollment month after month.
              </p>
            </div>

          </div>

           {/* Process Call to Action */}
          <div className="text-center bg-blue-600 py-12 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Start Filling Your Classrooms?
            </h3>
            <a 
              href="/booking" 
              className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-10 py-5 md:px-12 md:py-6 rounded-lg text-xl md:text-2xl inline-block transition-colors"
            >
              Book A Call
            </a>
          </div>
        </div>

        {/* Become The Go-To School Section */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Become The <span className="text-blue-500">BEST School</span> In Your Area
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your school will be promoted across all platforms. Parents won't be able to escape your presence.
            </p>
          </div>

          {/* Your Main Image - Centered and Reasonable Size */}
          <div className="text-center mb-12">
            <img 
              src="https://i.imgur.com/k2eXQG0.png" 
              alt="School Marketing Across All Platforms" 
              className="max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Benefits in Proper Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="https://i.imgur.com/qcn8TWu.png" 
                  alt="Dominate Your Local Market" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Dominate Your Local Market
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Parents see your school first when they search online.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="https://i.imgur.com/PjbeTin.png" 
                  alt="Non-Stop Tour Bookings" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Non-Stop Tour Bookings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
               Qualified parents booking tours consistently.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="https://i.imgur.com/t1UHdVS.png" 
                  alt="Become The Authority" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Become The Authority
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
               The school parents choose over all the others in your area.
              </p>
            </div>

          </div>

          {/* Call to Action - Bigger Button */}
          <div className="text-center">
            <a 
              href="/booking" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-12 py-6 md:px-16 md:py-7 rounded-lg text-xl md:text-2xl inline-block transition-colors"
            >
              Book A Call
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
