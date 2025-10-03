<script lang="ts">
   import MoneyBack from '$lib/assets/images/money-back.svg';
   import HeroSection from '$lib/components/all-access/AllAccessHero.svelte';
   import PricingCard from '$lib/components/all-access/PricingCard.svelte';
   import FAQSection from '$lib/components/all-access/FAQSection.svelte';
   import TrustPilotRating from '$lib/components/all-access/TrustPilotRating.svelte';
   import MoneyBackGuarantee from '$lib/components/all-access/MoneyBackGuarantee.svelte';

   const faqData = [
		{
			question: "What's included with Lifetime Access?",
			answer: "With Lifetime Access, you get immediate access to all current courses and all future releases—forever. Pay once, and you'll never need to pay again."
		},
		{
			question: "What's the difference between buying a single course and getting Lifetime Access?",
			answer: "Buying a single course gives you lifetime access to just that course. Lifetime Access unlocks everything I've ever created—and everything I'll release in the future—with a single payment."
		},
		{
			question: "Is there a money-back guarantee?",
			answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, just contact us within 30 days of purchase and you'll receive a full refund—no questions asked."
		},
		{
			question: "Can I download the courses?",
			answer: "Yes. You can download all videos and resources to learn offline or revisit them anytime. Everything is yours to keep."
		},
		{
			question: "Do I receive certificates for completed courses?",
			answer: "Yes, you'll receive a certificate of completion for each course you finish, perfect for showcasing your new skills."
		},
		{
			question: "How often are new courses added?",
			answer: "I typically release 3 to 4 high-quality courses per year, focused on the most in-demand technologies and skills. When you get Lifetime Access, you'll automatically receive every future course at no extra cost—no subscriptions, no hidden fees."
		},
		{
			question: "Is this suitable for beginners?",
			answer: "Yes! Whether you're just starting out or looking to deepen your knowledge, the courses are designed to guide you every step of the way."
		}
	];
</script>

<div class="flex flex-grow flex-col py-4 pt-20">
	<HeroSection 
        badge="One payment. Lifetime Access."
        title="Own All My Courses, Forever"
        description="Pay once. Get lifetime access to 50+ coding courses designed to make you a real-world developer. No subscriptions. No recurring charges. Just practical, job-focused learning — yours to keep, forever."
    />

	<div class="container">
		<div class="flex flex-col items-center gap-10">
			<div class="flex w-full flex-wrap justify-around gap-3">
				<PricingCard 
					title="Get VIP 1"
					description="All current and future courses — one payment."
					price="100.00"
					taxInfo="You'll be charged $100.00 + tax"
					features={[
						"10+ premium courses worth $1,850+",
						"330 hours of HD video",
						"Downloadable content",
						"Early access to new courses",
						"Help shape future course topics"
					]}
					buttonHref="https://sso.teachable.com/secure/146684/checkout/6297839/all-access-1?coupon_code=EXPIRED"
					showBestBadge={true}
				/>

				<PricingCard 
					title="Get VIP 2"
					description="All current and future courses — one payment."
					price="300.00"
					taxInfo="You'll be charged $300.00 + tax"
					features={[
						"All VIP 1 included",
						"50+ more premium courses worth $4,850+",
						"330 hours of HD video",
						"Lifetime access",
						"More downloadable content"
					]}
					buttonHref="https://sso.teachable.com/secure/146684/checkout/6297839/all-access-1?coupon_code=EXPIRED"
					showBestBadge={false}
				/>
			</div>

			<MoneyBackGuarantee 
                title="Try It, Risk-Free"
                description="I'm confident you'll love the courses in your subscription. But if it's not the right fit, no worries! Get a refund within 30 days — no questions asked."
                imageSrc={MoneyBack}
                imageAlt="Money-back guarantee"
            />

			<TrustPilotRating />

			<FAQSection questions={faqData} />
		</div>
	</div>
</div>
