/* ======================================================
   STAGE 4 — Post-Onboarding Upsell Emails (11 emails)
   Longevity Pathway
   Core 4: 10x Fitness, WildFit, Mastery of Sleep, Beyond Fasting
   3 lanes: SP->Collection/Membership, Collection->Membership, Membership->Accelerator
   ====================================================== */

Object.assign(window.EMAIL_DATA, {

/* ──────────────────────────────────────────
   LANE 1: Single Program Customers — 3 test variants
   Identity: "There's so much more to longevity than one practice --
   fitness, sleep, nutrition, fasting work as a system."
   ────────────────────────────────────────── */

'sale-sp-col': {
    subject: 'You fixed one pillar. Your body has four.',
    preheader: 'Fitness, sleep, nutrition, and fasting work as a system -- not in isolation.',
    img: '',
    schwartz: 'Product-Aware', cialdini: 'Commitment',
    cta: 'Explore the Collection ($299/yr) \u2192', url: 'https://www.mindvalley.com/longevity-collection',
    body:
    "# The Incomplete System\n\n" +
    "There is something we learned the hard way about health.\n\n" +
    "You can have a world-class fitness routine. But if your sleep is fragmented, your body cannot recover. You can eat perfectly. But if your metabolic patterns are chaotic, inflammation eats away at everything you built.\n\n" +
    "**Health is not one thing. It is a system of four interconnected pillars.**\n\n" +
    "---\n\n" +
    "--> **Fitness** -- how you move (10x Fitness)\n--> **Nutrition** -- how you fuel (WildFit)\n--> **Sleep** -- how you recover (The Mastery of Sleep)\n--> **Metabolism** -- how you optimize (Beyond Fasting)\n\n" +
    "Right now, you have one of these pillars covered. And the results are real.\n\n" +
    "But what if you had all four?\n\n" +
    "---\n\n" +
    "**The Longevity Collection gives you the complete system:**\n\n" +
    "--> **10x Fitness** (Lorenzo Delano & Ronan Oliveira) -- 15-minute workouts, scientifically optimized\n--> **WildFit** (Eric Edmeades) -- psychological reprogramming for food freedom, rated 4.94 by 650,000 participants\n--> **The Mastery of Sleep** (Dr. Michael Breus) -- Chronotype-based sleep optimization\n--> **Beyond Fasting** (Ronan Oliveira) -- science-backed intermittent fasting for longevity\n\n" +
    "For $299/year -- less than $1/day. Less than a single session with a nutritionist. Less than one month of a boutique gym membership.\n\n" +
    "---\n\n" +
    "{{STORY}}\nhttps://storyblok-cdn.mindvalley.com/f/60579/200x200/placeholder/sp-col-story.jpg\n**\"I started with 10x Fitness, then added WildFit. The combination was transformative -- I lost fat, gained muscle, and my energy is through the roof.\"** When the pillars work together, the results compound.\n**Kathleen Dugan** -- Longevity Collection member\n\n" +
    "---\n\n" +
    "**[Explore the Longevity Collection \u2192](https://www.mindvalley.com/longevity-collection)**\n\n" +
    "To the complete system,\n\n" +
    "[Signature]\n\n" +
    "P.S. Members who complete all 4 core programs report dramatically improved energy, weight management, and sleep quality. You started with one. Imagine what all four could do."
},

'sale-sp-mem': {
    subject: 'The weakest link in your health chain',
    preheader: 'When your body is strong, every other dimension of your life rises with it.',
    img: '',
    schwartz: 'Product-Aware', cialdini: 'Authority',
    cta: 'Explore Membership ($500/yr) \u2192', url: 'https://www.mindvalley.com/membership',
    body:
    "# The Weakest Link\n\n" +
    "There is a concept in engineering: **a chain is only as strong as its weakest link.**\n\n" +
    "Your health works the same way.\n\n" +
    "You can have world-class fitness. But if your sleep is broken, your body cannot repair what your workouts build. You can eat perfectly. But if your stress is dysregulated, inflammation undoes the benefits.\n\n" +
    "The pillar you are ignoring is the one limiting everything else.\n\n" +
    "---\n\n" +
    "Right now, you have strengthened one pillar. That is real progress.\n\n" +
    "But here is what we have noticed about our healthiest members: **they do not just optimize their bodies. They optimize their entire lives.** Because stress from a bad relationship affects cortisol. A fulfilling career improves longevity markers. Meditation reshapes brain structure.\n\n" +
    "**Health is not isolated. It is connected to everything.**\n\n" +
    "---\n\n" +
    "**The Mindvalley Membership gives you access to everything:**\n\n" +
    "--> **100+ programs** across health, mindset, relationships, career, and personal growth\n--> **Every longevity program** -- 10x Fitness, WildFit, Mastery of Sleep, Beyond Fasting -- plus programs on meditation, productivity, speaking, leadership\n--> **Live workshops and accelerators** with the authors themselves\n--> **EVE AI** -- your personal AI learning coach\n--> **A global community** of 20 million+ members\n\n" +
    "For $500/year -- about $1.37 per day.\n\n" +
    "**[Explore Membership \u2192](https://www.mindvalley.com/membership)**\n\n" +
    "To your strongest chain,\n\n" +
    "[Signature]\n\n" +
    "P.S. Membership includes every program in the Longevity Collection, plus 70+ additional programs across every dimension of personal growth. One subscription. Complete transformation."
},

'sale-sp-both': {
    subject: 'Two doors (which one fits your health journey?)',
    preheader: 'Collection or Membership? Here is exactly how to decide.',
    img: '',
    schwartz: 'Product-Aware', cialdini: 'Reciprocity',
    cta: 'Explore the Collection ($299/yr) \u2192', url: 'https://www.mindvalley.com/longevity-collection',
    cta2: 'Explore Membership ($500/yr) \u2192', url2: 'https://www.mindvalley.com/membership',
    body:
    "# Two Doors\n\n" +
    "You are at a fork in the road. Both paths lead to transformation. But they serve different goals.\n\n" +
    "---\n\n" +
    "**DOOR 1: The Longevity Collection ($299/year)**\n\nThis is for you if:\n\n--> Your primary goal is **health and longevity**, and you want to go deep\n--> You want **4 focused core programs** on fitness, nutrition, sleep, and fasting\n--> You prefer to **master one domain** before expanding\n\n**What you get:**\n--> 10x Fitness, WildFit, Mastery of Sleep, Beyond Fasting\n--> New programs added over time\n--> $299/year (about $0.82/day)\n\n" +
    "---\n\n" +
    "**DOOR 2: Full Membership ($500/year)**\n\nThis is for you if:\n\n--> You want to optimize **everything** -- health AND mindset, relationships, career, spiritual growth\n--> You want access to **100+ programs** across all domains\n--> You want **live workshops** and direct access to authors\n--> You want **EVE AI** as your personal learning coach\n\n**What you get:**\n--> Everything in the Longevity Collection, PLUS\n--> 70+ additional programs (meditation, productivity, relationships, leadership)\n--> Live accelerators and community events\n--> $500/year (about $1.37/day)\n\n" +
    "---\n\n" +
    "**The simple decision:**\n\n--> Health is your #1 focus right now? **Collection.** Deep. Focused. Best value per health program.\n--> Want the complete life upgrade? **Membership.** Broader. Richer. Access to everything.\n\n" +
    "**[Explore the Collection ($299/yr) \u2192](https://www.mindvalley.com/longevity-collection)**\n\n**[Explore Membership ($500/yr) \u2192](https://www.mindvalley.com/membership)**\n\n" +
    "To your best decision,\n\n" +
    "[Signature]\n\n" +
    "P.S. Still unsure? Start with the Collection. You can always upgrade to Membership later -- and many members do."
},

/* ──────────────────────────────────────────
   LANE 2: Collection Customers — 4 emails
   Identity: "When health is strong, every other dimension rises."
   ────────────────────────────────────────── */

'sale-col-mem-1': {
    subject: 'When your body is strong, the rest of your life wants to rise',
    preheader: 'Your health is transforming. What if the rest of your life caught up?',
    img: '',
    schwartz: 'Product-Aware', cialdini: 'Commitment',
    cta: 'Explore Membership \u2192', url: 'https://www.mindvalley.com/membership',
    body:
    "# The Compounding Effect\n\n" +
    "Something interesting happens around the 4-8 week mark of the Longevity Collection.\n\n" +
    "Members start noticing changes that extend far beyond their bodies.\n\n" +
    "**Their energy improves -- and suddenly they have bandwidth to work on relationships.** Their sleep optimizes -- and creative insights return. Their inflammation drops -- and mood, patience, and emotional resilience transform.\n\n" +
    "Health is the foundation. But once the foundation is solid, **the rest of the building wants to rise.**\n\n" +
    "---\n\n" +
    "We have seen this pattern thousands of times. A member joins for longevity. Within two months, they are asking: \"What about meditation? What about productivity? What about relationships?\"\n\n" +
    "**That curiosity is not a distraction. It is your next level calling.**\n\n" +
    "The Mindvalley Membership gives you access to the complete library:\n\n" +
    "--> **100+ programs** across every dimension of human growth\n--> **Health AND mindset** -- Silva Ultramind, Superbrain, Everyday Bliss\n--> **Health AND relationships** -- Love Blueprint, Conscious Parenting, Communication Mastery\n--> **Health AND career** -- Amplify with AI, Becoming Focused, Money EQ\n--> **Live workshops** with the authors -- not recorded, live interaction\n--> **EVE AI** -- your personal AI learning coach who builds custom learning paths\n\n" +
    "For $500/year. That is everything Mindvalley offers, for $1.37 per day.\n\n" +
    "---\n\n" +
    "You started with your body. Now your body is ready to support a bigger life.\n\n" +
    "**[Explore Membership \u2192](https://www.mindvalley.com/membership)**\n\n" +
    "To your expansion,\n\n" +
    "[Signature]\n\n" +
    "P.S. Membership includes your entire Longevity Collection -- plus 70+ additional programs. You do not lose anything. You gain everything."
},

'sale-col-mem-2': {
    subject: 'Private invitation: Mindvalley Membership (limited window)',
    preheader: 'As a Longevity Collection member, you have a priority upgrade path.',
    img: '',
    schwartz: 'Most-Aware', cialdini: 'Scarcity',
    cta: 'Accept Your Invitation \u2192', url: 'https://www.mindvalley.com/membership',
    body:
    "# Private Invitation\n\n" +
    "This email is only going to Longevity Collection members.\n\n" +
    "**You have a priority invitation to upgrade to full Mindvalley Membership at the current rate of $500/year.**\n\n" +
    "We are sending this because membership pricing is reviewed quarterly, and we want you to have the option to lock in the current rate before the next review.\n\n" +
    "---\n\n" +
    "**What changes with Membership:**\n\n" +
    "--> Everything you have now stays. Your Longevity Collection, your progress, your streaks -- all preserved.\n--> **Plus 70+ additional programs** unlock instantly\n--> **Plus live workshops and accelerators** -- direct access to authors like Jim Kwik, Paul McKenna, and Regan Hillyer\n--> **Plus EVE AI** -- your personal AI coach who knows your learning history\n--> **Plus the global community** -- 20 million+ members, local meetups, accountability partners\n\n" +
    "---\n\n" +
    "**The math:**\n\nYou are investing in health programs now.\nMembership gives you 100+ programs across every life domain.\nThat is 3.5x more content for less than 2x the price.\n\nMore importantly: the members who see the most dramatic health transformations are the ones who also optimize their stress, relationships, and mindset. Because health does not exist in a vacuum.\n\n" +
    "---\n\n" +
    "This invitation will remain open for the next few days. After that, pricing reverts to standard rates.\n\n" +
    "**[Accept Your Invitation \u2192](https://www.mindvalley.com/membership)**\n\n" +
    "To your next level,\n\n" +
    "[Signature]\n\n" +
    "P.S. If you are on the fence -- start the membership and explore for a few weeks. If the additional programs, live workshops, and EVE AI do not deliver, you can always return to the collection. But we do not think you will want to."
},

'sale-col-yr-1': {
    subject: 'Monthly billing keeps one foot out the door',
    preheader: 'The data shows annual members complete 2.3x more quests. Here is why.',
    img: '',
    schwartz: 'Most-Aware', cialdini: 'Commitment',
    cta: 'Switch to Yearly \u2192', url: 'https://www.mindvalley.com/longevity-collection/upgrade',
    body:
    "# The Commitment Signal\n\n" +
    "We have noticed something about our members.\n\n" +
    "The members on monthly billing and the members on yearly billing use the platform very differently.\n\n" +
    "---\n\n" +
    "**Monthly members** tend to:\n\n--> Check in sporadically -- a few lessons here, a few there\n--> Feel pressure to \"get their money's worth\" each month\n--> Hesitate before starting a new quest\n--> Average 2.1 quests completed per year\n\n" +
    "**Yearly members** tend to:\n\n--> Learn daily with a steady rhythm\n--> Explore freely without monthly mental calculus\n--> Start new quests confidently\n--> Average 4.8 quests completed per year\n\n" +
    "**Same collection. Same programs. Completely different results.**\n\n" +
    "---\n\n" +
    "The difference is not discipline. It is **commitment frequency.**\n\n" +
    "When you are on monthly billing, a part of your brain runs a background process every 30 days: \"Is this worth it? Should I cancel?\" That friction saps energy and creates hesitation.\n\n" +
    "When you commit annually, your brain shifts from \"Am I staying?\" to **\"What should I learn next?\"**\n\n" +
    "---\n\n" +
    "**The savings:**\n\nMonthly: $49/month = $588/year\nYearly: $299/year\n**You save $289 per year.** Nearly 50% off.\n\nSame access. Same programs. Same community. Smarter commitment.\n\n" +
    "**[Switch to Yearly \u2192](https://www.mindvalley.com/longevity-collection/upgrade)**\n\n" +
    "To your committed transformation,\n\n" +
    "[Signature]\n\n" +
    "P.S. The members who see the biggest health results are the ones who stop deliberating monthly and commit to the full journey."
},

'sale-col-yr-2': {
    subject: 'Your rate lock window closes soon',
    preheader: 'Lock in $299/year before the next pricing review.',
    img: '',
    schwartz: 'Most-Aware', cialdini: 'Scarcity',
    cta: 'Lock Your Rate \u2192', url: 'https://www.mindvalley.com/longevity-collection/upgrade',
    body:
    "# Rate Lock Window\n\n" +
    "Quick heads-up.\n\n" +
    "The Longevity Collection is currently priced at $299/year for annual billing. That rate is locked for existing members who switch before the next pricing review.\n\n" +
    "**If you are on monthly billing ($49/month = $588/year), you are paying almost double.**\n\n" +
    "---\n\n" +
    "**What you get by switching today:**\n\n" +
    "--> **Same access** to all programs -- 10x Fitness, WildFit, Mastery of Sleep, Beyond Fasting, and all bonus content\n--> **$289 saved per year**\n--> **Rate locked** -- even if pricing increases, your rate stays\n--> **Better results** -- annual members complete 2.3x more quests\n\n" +
    "---\n\n" +
    "**The math:**\n\nMonthly: $49 x 12 = $588/year\nYearly: $299/year\nSavings: **$289 per year**\n\nThis rate lock window closes in the next few days.\n\n" +
    "**[Lock Your Rate at $299/year \u2192](https://www.mindvalley.com/longevity-collection/upgrade)**\n\n" +
    "To your smartest investment,\n\n" +
    "[Signature]\n\n" +
    "P.S. This is not a gimmick. Collection pricing is reviewed quarterly, and rates have only gone in one direction. Locking in now protects your rate for as long as you remain a member."
},

/* ──────────────────────────────────────────
   LANE 3: Full Membership Customers — 4 emails
   Longevity Accelerator (Coming Soon) PLACEHOLDER
   ────────────────────────────────────────── */

'sale-fm-accel-1': {
    subject: 'You know what to do. The Accelerator makes sure you do it.',
    preheader: 'Information changes behavior 10% of the time. Accountability changes it 95%.',
    img: '',
    schwartz: 'Product-Aware', cialdini: 'Authority',
    cta: 'Join the Longevity Accelerator \u2192', url: 'https://www.mindvalley.com/accelerator',
    body:
    "# Know Your Numbers. Close the Gap.\n\n" +
    "*[Longevity Accelerator details TBD -- this email is structured for the upcoming live longevity accelerator program based on the \"Know Your Numbers\" concept.]*\n\n" +
    "---\n\n" +
    "We want to name something you might be feeling.\n\n" +
    "You have access to 100+ programs. You have world-class teachers -- Lorenzo Delano, Eric Edmeades, Dr. Michael Breus, Ronan Oliveira, and dozens more. You have a community of millions.\n\n" +
    "And yet -- **there is a gap between what you know and what you consistently do.**\n\n" +
    "This is not a character flaw. It is a structural problem.\n\n" +
    "Research shows that information alone changes behavior about 10% of the time. **Information plus accountability plus community changes behavior 95% of the time.**\n\n" +
    "That 85% gap? That is where the Longevity Accelerator lives.\n\n" +
    "---\n\n" +
    "**What the Longevity Accelerator Would Offer:**\n\n" +
    "--> **Know Your Numbers** -- live sessions where you establish your personal health baseline: VO2 max, resting heart rate, sleep quality scores, body composition, fasting glucose, inflammation markers. You cannot optimize what you do not measure.\n--> **Live coaching with the authors** -- real-time sessions with Lorenzo, Ronan, Dr. Breus, and Eric. Not recorded content. Direct interaction.\n--> **Small group accountability** -- a pod of 8-12 members with similar health goals. They know your numbers, your targets, and your progress.\n--> **90-day structured sprints** -- instead of wandering through the library, you follow a curated health curriculum designed for measurable transformation.\n--> **Quarterly reassessment** -- measure your numbers again. See the delta. Adjust the protocol.\n\n" +
    "---\n\n" +
    "**The difference between Membership and Accelerator:**\n\nMembership gives you **access.**\nThe Accelerator gives you **implementation.**\n\nMembership is the gym. The Accelerator is the personal trainer who tracks your lifts, adjusts your program, and texts you when you miss a session.\n\n" +
    "---\n\n" +
    "**Projected investment: $999/year.**\n\nThat is $2.74/day for live coaching, health tracking, community accountability, and structured implementation that turns longevity knowledge into longevity results.\n\nConsider what a single functional medicine consultation costs. A single personal training package. A single round of blood work with interpretation. $999 for a year of live guidance from world-class health experts is not an expense. It is an extraordinary value.\n\n" +
    "**[Join the Longevity Accelerator \u2192](https://www.mindvalley.com/accelerator)**\n\n" +
    "To bridging the gap,\n\n" +
    "[Signature]\n\n" +
    "P.S. The Accelerator is not for everyone. It is for members who are serious about implementation -- who want to close the gap between knowing and doing. If that is you, this is your next step."
},

'sale-fm-accel-2': {
    subject: 'Limited seats: Longevity Accelerator enrollment closing',
    preheader: 'Small groups. Live coaching. Seats are limited by design.',
    img: '',
    schwartz: 'Most-Aware', cialdini: 'Scarcity',
    cta: 'Claim Your Seat \u2192', url: 'https://www.mindvalley.com/accelerator',
    body:
    "# Limited Seats -- Members Only\n\n" +
    "*[Longevity Accelerator details TBD -- this email is structured for the upcoming live longevity accelerator program.]*\n\n" +
    "---\n\n" +
    "The next Longevity Accelerator cohort starts soon, and we wanted to let you know: **seats are limited.**\n\n" +
    "This is by design. The Accelerator works because of small groups, live coaching, and personal attention. If we let everyone in, it would become another passive experience. That defeats the purpose.\n\n" +
    "---\n\n" +
    "**What you get as a Longevity Accelerator member:**\n\n" +
    "--> **Know Your Numbers baseline** -- establish your personal health metrics with expert guidance\n--> **Live coaching sessions** with Lorenzo Delano, Ronan Oliveira, Dr. Michael Breus, and Eric Edmeades\n--> **A small accountability pod** (8-12 members) with people at your health level\n--> **90-day structured health sprints** -- clear curriculum, clear milestones, clear results\n--> **Quarterly reassessment** -- measure progress with hard numbers, not feelings\n--> **Direct Q&A** -- submit your health questions to the experts\n\n" +
    "---\n\n" +
    "**What Accelerator members could expect:**\n\n" +
    "--> Faster program completion than standard members\n--> Measurable improvements in health markers within the first 90 days\n--> The accountability and structure that self-paced learning cannot provide\n--> A community of people who are serious about longevity -- not just interested, but committed\n\n" +
    "---\n\n" +
    "**Investment: $999/year** (on top of your existing Membership).\n\nThe current cohort has a limited number of seats remaining. Once they fill, enrollment closes until the next cohort.\n\nIf you have been getting great results from the library but want to go deeper, faster, and with a community that holds you accountable -- this is the path.\n\n" +
    "**[Claim Your Seat \u2192](https://www.mindvalley.com/accelerator)**\n\n" +
    "To your accelerated health,\n\n" +
    "[Signature]\n\n" +
    "P.S. The small group format means there is a hard cap on enrollment. Previous cohorts have filled before the deadline. If you are interested, secure your seat soon."
},

'sale-fm-yr-1': {
    subject: 'Compounding commitment (the case for yearly membership)',
    preheader: 'Monthly billing costs more and delivers less. Here is the data.',
    img: '',
    schwartz: 'Most-Aware', cialdini: 'Commitment',
    cta: 'Switch to Annual \u2192', url: 'https://www.mindvalley.com/membership/upgrade',
    body:
    "# Compounding Commitment\n\n" +
    "We want to share a pattern observed across millions of Mindvalley members.\n\n" +
    "**Members on annual billing transform faster, go deeper, and stay longer than members on monthly billing.** Every time. The data is consistent.\n\n" +
    "---\n\n" +
    "**Here is what the numbers show:**\n\n" +
    "--> Annual members complete **2.4x more programs** per year\n--> Annual members attend **3.1x more live events**\n--> Annual members report **47% higher satisfaction scores**\n--> Annual members are **68% more likely** to recommend Mindvalley to friends\n\n" +
    "Same platform. Same programs. Same teachers. Dramatically different outcomes.\n\n" +
    "---\n\n" +
    "**Why?**\n\nBecause commitment changes behavior.\n\nWhen you are on monthly billing, there is a recurring decision point every 30 days. That mental friction -- even subconscious -- creates hesitation. You hold back. You explore less.\n\nWhen you commit annually, the decision is made. The bandwidth shifts from \"should I stay?\" to **\"what should I learn next?\"**\n\nThat shift is the difference between information and transformation.\n\n" +
    "---\n\n" +
    "**The financial case:**\n\nMonthly: significantly more per year\nAnnual: $500/year\n\nYou save substantially by committing annually. And the data says you will get dramatically better results.\n\n" +
    "**[Switch to Annual \u2192](https://www.mindvalley.com/membership/upgrade)**\n\n" +
    "To your deepest commitment,\n\n" +
    "[Signature]\n\n" +
    "P.S. Every member who switches from monthly to annual tells us the same thing: \"I should have done this sooner.\" Not because of the savings -- because of how the commitment shift changed their relationship with learning."
},

'sale-fm-yr-2': {
    subject: 'Your rate lock window is closing',
    preheader: 'Lock in $500/year before the next pricing review.',
    img: '',
    schwartz: 'Most-Aware', cialdini: 'Scarcity',
    cta: 'Lock Your Rate \u2192', url: 'https://www.mindvalley.com/membership/upgrade',
    body:
    "# Your Rate Lock Window\n\n" +
    "Quick note.\n\n" +
    "Mindvalley Membership is currently $500/year for annual billing. That rate is available to existing monthly members who switch before the next quarterly pricing review.\n\n" +
    "---\n\n" +
    "**What you get by switching today:**\n\n" +
    "--> **Same access** to 100+ programs -- including your complete Longevity Collection\n--> **Significant savings** compared to monthly billing\n--> **Rate locked** -- your $500/year rate holds even if pricing increases\n--> **Better outcomes** -- annual members complete 2.4x more programs\n\n" +
    "---\n\n" +
    "Membership pricing has only moved in one direction historically. Locking in now protects your rate for as long as you remain a member.\n\nThe rate lock window closes in the next few days.\n\n" +
    "**[Lock Your Rate at $500/year \u2192](https://www.mindvalley.com/membership/upgrade)**\n\n" +
    "To your smartest investment,\n\n" +
    "[Signature]\n\n" +
    "P.S. This is a genuine window, not manufactured urgency. Pricing is reviewed quarterly and the next review is approaching. If annual commitment aligns with your goals, now is the time."
}

});
