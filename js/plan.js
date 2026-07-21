/* 60-day X content plan, Jul 22 to Sep 19 2026. Built from three sources:
   1. Open-source ranker weights (github.com/twitter/the-algorithm): reply 13.5, profile click 12,
      author-engaged reply 75, repost 1.0, like 0.5, negative feedback -74, report -369.
      Grok-era release (github.com/xai-org/x-algorithm): learned weights, same signal families.
   2. willitgoviral.xyz pre-flight: score every draft before posting; links go in replies.
   3. The account's own 200-post archive: longform notes 10x median (21.8K top), greentext
      timelines proven 2x, personal stories are the reply engine (37-64 replies vs median 2).
   Cadence: Mon builder take, Tue fundraising note (8-part vault-sourced series), Wed Ryder
   proof, Thu longform note, Fri AI/tech, Sat story, Sun community reply-day. */
const PLAN = [
 {
  "date": "2026-07-22",
  "name": "We won the same design award as Ferrari and Apple. For a crypto wallet.",
  "topic": "Ryder",
  "mission": "Convert",
  "format": "Short post + media",
  "intensity": "Medium",
  "niche": "Crypto / Ryder",
  "hookType": "Announcement/Proof",
  "framework": "Demo / Unboxing",
  "why": "His Apr 22 Red Dot post did 2.5K impressions with a weak opener; this is the sharpened rerun. Slot: Wednesday Ryder proof (profile clicks weigh 12).",
  "hooks": [
   {
    "t": "Primary",
    "s": "We won the same design award as Ferrari and Apple. For a crypto wallet.",
    "o": "Short post + media",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "A 9-person team from the Philippines just took a Red Dot Award.",
    "o": "Short post + media",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Red Dot 2026: Ferrari, Apple, and a hardware wallet you can set up in 60 seconds.",
    "o": "Short post + media",
    "v": "same"
   }
  ],
  "script": "HOOK: We won the same design award as Ferrari and Apple. For a crypto wallet. BUILD: body per draft below. PAYOFF: Design was never optional. If crypto is going mainstream it has to stop looking like a calculator. REPLY PLAN: Reply to the post with the product link (links in the first post cost reach). Answer every product question same-day.",
  "shots": [
   "Proof first: award, country count, or demo clip",
   "One sentence of what it means for a normal person",
   "Media attached: photo or 30s clip",
   "Product link goes in the first reply"
  ],
  "overlay": [
   "same award as Ferrari and Apple",
   "9 people, $4.8M raised",
   "crypto that looks this good"
  ],
  "caption": "We won the same design award as Ferrari and Apple. For a crypto wallet.\n\nNine people. $4.8M raised. Going against a competitor worth $1.5 billion.\n\nDesign was never optional. If crypto is going mainstream it has to stop looking like a calculator.",
  "cta": "Product link in first reply."
 },
 {
  "date": "2026-07-23",
  "name": "Nobody is coming to save your startup.",
  "topic": "Note",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Longform Essay",
  "framework": "Vulnerable Origin + Brutal Honesty",
  "why": "Longform notes are the account's top format (21.8K imp on the builders rant). Slot: Thursday longform note (dwell signal; account's proven 10x format).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Nobody is coming to save your startup.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The rescue fantasy is killing more startups than the market is.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "No investor, no viral post, no partnership is coming to save you.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: Nobody is coming to save your startup. BUILD: body per draft below. PAYOFF: You are the plan. Everything else is weather. REPLY PLAN: Notes earn dwell time, the quiet ranked signal. Quote-post your own note the next morning with the single best line to give it a second run.",
  "shots": [
   "First line is the whole argument",
   "Short paragraphs, one idea each",
   "One real number every 3 paragraphs",
   "End on the uncomfortable part, not the lesson"
  ],
  "overlay": [
   "nobody is coming",
   "you are the plan",
   "the month we had $42K left"
  ],
  "caption": "Nobody is coming to save your startup.\n\nNot an investor. Not a viral launch. Not a partnership announcement.\n\nI learned this the month we had $42K in the bank and no founder was taking a salary. The bridge round that saved us didn't come from waiting. It came from calling every investor we had and saying the quiet part out loud.\n\nYou are the plan. Everything else is weather.",
  "cta": "Note tweet. Quote-post the best line tomorrow morning."
 },
 {
  "date": "2026-07-24",
  "name": "My 9-person company runs like 30 people. Six AI workflows do the difference.",
  "topic": "AI",
  "mission": "Authority",
  "format": "Short post",
  "intensity": "Medium",
  "niche": "AI / Tech",
  "hookType": "Take/Education",
  "framework": "Conditional Hack + Numbered Listicle",
  "why": "AI content is the IG account's authority leader; porting the pillar to X. Slot: Friday AI/tech (bookmark pillar).",
  "hooks": [
   {
    "t": "Primary",
    "s": "My 9-person company runs like 30 people. Six AI workflows do the difference.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Six workflows replaced the head count we never hired.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "9 people, 68 countries, 6 AI workflows. That's the whole org chart.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: My 9-person company runs like 30 people. BUILD: body per draft below. PAYOFF: None of them needed a PhD to set up. Stack in the replies. REPLY PLAN: Reply with the exact stack/steps as a follow-up post. Answer implementation questions; each answered thread is a 75-weight event.",
  "shots": [
   "Claim with a number in line 1",
   "2-4 concrete items, no fluff",
   "Offer depth in the replies, not a link",
   "Screenshot beats description"
  ],
  "overlay": [
   "9 people run like 30",
   "6 workflows, listed",
   "the stack in the replies"
  ],
  "caption": "My 9-person company runs like 30 people.\n\nSix AI workflows do the difference: content research, competitor watch, support triage, investor-meeting prep, publishing, and analytics pulls.\n\nNone of them needed a PhD to set up. Stack in the replies.",
  "cta": "Post the exact stack as the first reply."
 },
 {
  "date": "2026-07-25",
  "name": "> moved abroad at 21",
  "topic": "Story",
  "mission": "Reach",
  "format": "Greentext / story post",
  "intensity": "Medium",
  "niche": "Founder Story",
  "hookType": "Personal Story",
  "framework": "Greentext Timeline + Vulnerable Origin",
  "why": "Greentext timeline is proven on this account: 5.8K and 3.6K imp on the origin story versions. Slot: Saturday story (reply engine: 37-64 replies on this category).",
  "hooks": [
   {
    "t": "Primary",
    "s": "> moved abroad at 21\n> zero contacts\n> $5K grant\n> Red Dot Award 2026",
    "o": "Greentext / story post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The timeline from no-network to Red Dot, in greentext.",
    "o": "Greentext / story post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "> 2016: landed with nothing\n> 2026: Red Dot Award",
    "o": "Greentext / story post",
    "v": "same"
   }
  ],
  "script": "HOOK: > moved abroad at 21 BUILD: body per draft below. PAYOFF: The middle took ten years. REPLY PLAN: Personal stories are the account's reply engine (37-64 replies vs median 2). Reply to every personal response personally; no copy-paste.",
  "shots": [
   "Greentext or bare timeline, one beat per line",
   "The turn: where it flips",
   "Land on today, one line",
   "Photo if it exists, nothing staged"
  ],
  "overlay": [
   "greentext timeline",
   "$5K grant to $4.8M",
   "the middle was the hard part"
  ],
  "caption": "> moved abroad at 21\n> zero contacts, no plan B\n> $5K grant, side project\n> co-founder pitched me, I said no\n> he came back with a prototype\n> $42K in the bank, no salaries\n> Tim Draper led our seed\n> shipped to 68 countries\n> Red Dot Award 2026\n\nThe middle took ten years.",
  "cta": "Reply to every personal response."
 },
 {
  "date": "2026-07-26",
  "name": "Founders: if you had to delete every tool except one, what survives?",
  "topic": "Community",
  "mission": "Replies",
  "format": "Question post",
  "intensity": "Low",
  "niche": "GM / Community",
  "hookType": "Question",
  "framework": "Audience Callout",
  "why": "Question posts feed the 13.5-weight reply signal at near-zero production cost. Slot: Sunday community day (author-engaged replies weigh 75).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Founders: if you had to delete every tool except one, what survives?",
    "o": "Question post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "You can keep exactly one tool. Everything else is gone. What is it?",
    "o": "Question post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "One tool survives the purge. Name it.",
    "o": "Question post",
    "v": "same"
   }
  ],
  "script": "HOOK: Founders: if you had to delete every tool except one, what survives? BUILD: body per draft below. PAYOFF: Mine's in the replies. REPLY PLAN: This is the 75x day: the post is the prompt, the replies are the content. Respond to everything for the first 2 hours. Quote the best answer next day.",
  "shots": [
   "One question, one line",
   "Make it answerable in 10 seconds",
   "Zero setup, zero links",
   "Your first reply sets the tone"
  ],
  "overlay": [
   "one question, ten-second answer",
   "replies are the content",
   "quote the best answer tomorrow"
  ],
  "caption": "Founders: if you had to delete every tool except one, what survives?\n\nMine's in the replies.",
  "cta": "Answer everything for 2 hours; quote the best reply tomorrow."
 },
 {
  "date": "2026-07-27",
  "name": "Build it and they will come is the worst advice in startups.",
  "topic": "Builder",
  "mission": "Replies",
  "format": "Short post",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "His IG version of this take earned 34 saves/2.3K views; X version is reply bait in the good sense. Slot: Monday builder take (reply weight 13.5).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Build it and they will come is the worst advice in startups.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The best product I know of with zero distribution is dead.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Distribution decides. Product qualifies.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: Build it and they will come is the worst advice in startups. BUILD: body per draft below. PAYOFF: Distribution decides. Product just qualifies you to compete. REPLY PLAN: Post the take, then reply to your own post with the strongest counterargument to seed the debate. Respond to the first 10 replies within the hour (author-engaged replies weigh 75).",
  "shots": [
   "Line 1: the take, no context",
   "Line 2-3: one proof from building Ryder",
   "Last line: the rule, quotable",
   "No link, no hashtag"
  ],
  "overlay": [
   "worst advice in startups",
   "we learned it shipping hardware",
   "distribution decides"
  ],
  "caption": "Build it and they will come is the worst advice in startups.\n\nWe built a genuinely better hardware wallet and learned the hard way that better doesn't distribute itself. The market never finds you. You march to it.\n\nDistribution decides. Product just qualifies you to compete.",
  "cta": "Pin your own counterargument as first reply."
 },
 {
  "date": "2026-07-28",
  "name": "Our first investor check came from a DM. $250K, wired the next day.",
  "topic": "Fundraising",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Fundraising",
  "hookType": "Authority/Insider",
  "framework": "Authority Credential + Numbered Listicle",
  "why": "Fundraising series 1/8. Vault-sourced, every number real. Slot: Tuesday fundraising note (bookmark authority, vault-sourced numbers).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Our first investor check came from a DM. $250K, wired the next day.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "No warm intro. One call. $250K in the account by morning.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "The $250K DM: what building in public actually buys you.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: Our first investor check came from a DM. $250K, wired the next day. BUILD: body per draft below. PAYOFF: Investors don't bet on the call. They bet on everything they saw before it. REPLY PLAN: Pin a reply asking 'raising right now? what stage?' and answer every one. Bookmark-bait is legitimate here: end with a line worth saving.",
  "shots": [
   "Open with the number or the moment, never context",
   "Body: the real mechanics, real figures from the round",
   "Close: the transferable rule",
   "Link to nothing; the note is the asset"
  ],
  "overlay": [
   "$250K from a DM",
   "one call, wired next day",
   "12 months of public building first"
  ],
  "caption": "Our first investor check came from a DM. $250K, wired the next day.\n\nNo deck meeting. No intro. Someone had watched us build on X for a year, took one call, and wired it in the morning.\n\nIt looked like luck. It was twelve months of receipts he could scroll.\n\nInvestors don't bet on the call. They bet on everything they saw before it.",
  "cta": "End-line is the bookmark; pin 'raising right now? what stage?' as first reply."
 },
 {
  "date": "2026-07-29",
  "name": "Your seed phrase is the weakest part of your crypto.",
  "topic": "Ryder",
  "mission": "Convert",
  "format": "Short post + media",
  "intensity": "Medium",
  "niche": "Crypto / Ryder",
  "hookType": "Announcement/Proof",
  "framework": "Demo / Unboxing",
  "why": "Product education post; his crypto-simple takes median 3.6K imp. Slot: Wednesday Ryder proof (profile clicks weigh 12).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Your seed phrase is the weakest part of your crypto.",
    "o": "Short post + media",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "24 words on paper is not security. It's a single point of failure you carry in a drawer.",
    "o": "Short post + media",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "If your life savings fit on a napkin, that's not security.",
    "o": "Short post + media",
    "v": "same"
   }
  ],
  "script": "HOOK: Your seed phrase is the weakest part of your crypto. BUILD: body per draft below. PAYOFF: We built Ryder to kill it: tap, 60 seconds, no seed phrase. Recovery that works like a normal product. REPLY PLAN: Reply to the post with the product link (links in the first post cost reach). Answer every product question same-day.",
  "shots": [
   "Proof first: award, country count, or demo clip",
   "One sentence of what it means for a normal person",
   "Media attached: photo or 30s clip",
   "Product link goes in the first reply"
  ],
  "overlay": [
   "the napkin problem",
   "60 seconds, no seed phrase",
   "self-custody for normal people"
  ],
  "caption": "Your seed phrase is the weakest part of your crypto.\n\n24 words on paper. Lose them, you lose everything. Anyone finds them, they own everything. That's not security, that's a single point of failure in a drawer.\n\nWe built Ryder to kill it: tap, 60 seconds, no seed phrase. Recovery that works like a normal product.",
  "cta": "Demo clip attached; link in first reply."
 },
 {
  "date": "2026-07-30",
  "name": "Working 24/7 sounds like a flex until you actually do it. Then it's just Tuesday",
  "topic": "Note",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Longform Essay",
  "framework": "Vulnerable Origin + Brutal Honesty",
  "why": "Anti-hustle notes hit the dwell signal and the reply signal at once. Slot: Thursday longform note (dwell signal; account's proven 10x format).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Working 24/7 sounds like a flex until you actually do it. Then it's just Tuesday.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Hustle content lies about what the hours actually feel like.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "I built a company on midnight-to-4am shifts. It wasn't romantic.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: Working 24/7 sounds like a flex until you actually do it. Then it's just Tuesday. BUILD: body per draft below. PAYOFF: The honest version: the company sped up when I stopped treating exhaustion as proof of commitment. REPLY PLAN: Notes earn dwell time, the quiet ranked signal. Quote-post your own note the next morning with the single best line to give it a second run.",
  "shots": [
   "First line is the whole argument",
   "Short paragraphs, one idea each",
   "One real number every 3 paragraphs",
   "End on the uncomfortable part, not the lesson"
  ],
  "overlay": [
   "24/7 isn't a flex",
   "what the hours actually cost",
   "boundaries shipped more than hustle did"
  ],
  "caption": "Working 24/7 sounds like a flex until you actually do it. Then it's just Tuesday.\n\nI built Ryder on nights that started at midnight because the factory was in another timezone. It wasn't romantic. It was error-prone, expensive, and it nearly cost me the relationships that matter.\n\nThe honest version: the company sped up when I stopped treating exhaustion as proof of commitment.",
  "cta": "Note tweet; quote-post the last line tomorrow."
 },
 {
  "date": "2026-07-31",
  "name": "Claude runs half my company's ops. Here's the actual split.",
  "topic": "AI",
  "mission": "Authority",
  "format": "Short post",
  "intensity": "Medium",
  "niche": "AI / Tech",
  "hookType": "Take/Education",
  "framework": "Conditional Hack + Numbered Listicle",
  "why": "Concrete AI-split posts earn bookmarks; authority pillar. Slot: Friday AI/tech (bookmark pillar).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Claude runs half my company's ops. Here's the actual split.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Half our ops is AI now. Nobody on the team misses the old half.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "What 9 people + Claude actually automate, listed.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: Claude runs half my company's ops. Here's the actual split. BUILD: body per draft below. PAYOFF: The line moves every quarter. It only moves one direction. REPLY PLAN: Reply with the exact stack/steps as a follow-up post. Answer implementation questions; each answered thread is a 75-weight event.",
  "shots": [
   "Claim with a number in line 1",
   "2-4 concrete items, no fluff",
   "Offer depth in the replies, not a link",
   "Screenshot beats description"
  ],
  "overlay": [
   "the actual split, listed",
   "what stayed human",
   "screenshots in replies"
  ],
  "caption": "Claude runs half my company's ops. Here's the actual split.\n\nAI: research pulls, content drafts, competitor digests, data merges, meeting prep.\nHuman: judgment, taste, relationships, hardware, anything a customer touches.\n\nThe line moves every quarter. It only moves one direction.",
  "cta": "Implementation screenshots in replies."
 },
 {
  "date": "2026-08-01",
  "name": "I lost a finger jumping a train station in Lisbon. Drunk, high, invincible. Zero",
  "topic": "Story",
  "mission": "Reach",
  "format": "Greentext / story post",
  "intensity": "Medium",
  "niche": "Founder Story",
  "hookType": "Personal Story",
  "framework": "Greentext Timeline + Vulnerable Origin",
  "why": "His robbed-in-London/finger post is the #2 all-time post (8.4K imp, 37 replies). Slot: Saturday story (reply engine: 37-64 replies on this category).",
  "hooks": [
   {
    "t": "Primary",
    "s": "I lost a finger jumping a train station in Lisbon. Drunk, high, invincible. Zero of those were true.",
    "o": "Greentext / story post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The finger story, since new followers keep asking.",
    "o": "Greentext / story post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Some lessons cost a finger. This one did, literally.",
    "o": "Greentext / story post",
    "v": "same"
   }
  ],
  "script": "HOOK: I lost a finger jumping over a train station in Lisbon. I was drunk, high, and convinced I was invincible. Zero of those things were true. BUILD: body per draft below. PAYOFF: Still shipped the next quarter. REPLY PLAN: Personal stories are the account's reply engine (37-64 replies vs median 2). Reply to every personal response personally; no copy-paste.",
  "shots": [
   "Greentext or bare timeline, one beat per line",
   "The turn: where it flips",
   "Land on today, one line",
   "Photo if it exists, nothing staged"
  ],
  "overlay": [
   "the Lisbon story",
   "what invincible actually costs",
   "still shipped the next quarter"
  ],
  "caption": "I lost a finger jumping over a train station in Lisbon. I was drunk, high, and convinced I was invincible. Zero of those things were true.\n\nThey reattached it. I kept the scar and the lesson: the same risk appetite that makes you start a company will absolutely hurt you if you never learn where it ends.\n\nStill shipped the next quarter.",
  "cta": "Reply personally to every response."
 },
 {
  "date": "2026-08-02",
  "name": "What's the most unhinged thing you did to close your first customer?",
  "topic": "Community",
  "mission": "Replies",
  "format": "Question post",
  "intensity": "Low",
  "niche": "GM / Community",
  "hookType": "Question",
  "framework": "Audience Callout",
  "why": "Reply-day: the question carries a real story to set the bar. Slot: Sunday community day (author-engaged replies weigh 75).",
  "hooks": [
   {
    "t": "Primary",
    "s": "What's the most unhinged thing you did to close your first customer?",
    "o": "Question post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "First-customer war stories. Unhinged only. Go.",
    "o": "Question post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Your most feral first-customer story. I'll start.",
    "o": "Question post",
    "v": "same"
   }
  ],
  "script": "HOOK: What's the most unhinged thing you did to close your first customer? BUILD: body per draft below. PAYOFF: Your turn. REPLY PLAN: This is the 75x day: the post is the prompt, the replies are the content. Respond to everything for the first 2 hours. Quote the best answer next day.",
  "shots": [
   "One question, one line",
   "Make it answerable in 10 seconds",
   "Zero setup, zero links",
   "Your first reply sets the tone"
  ],
  "overlay": [
   "war stories only",
   "I'll start in the replies",
   "best one gets quoted"
  ],
  "caption": "What's the most unhinged thing you did to close your first customer?\n\nI'll start: I flew to another continent for one meeting with $42K left in the company account.\n\nYour turn.",
  "cta": "Respond to everything; quote the winner tomorrow."
 },
 {
  "date": "2026-08-03",
  "name": "Your startup doesn't have a marketing problem. It has a boring founder problem.",
  "topic": "Builder",
  "mission": "Replies",
  "format": "Short post",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "Contrarian founder takes are the reply engine for builder audiences. Slot: Monday builder take (reply weight 13.5).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Your startup doesn't have a marketing problem. It has a boring founder problem.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "People follow founders, not logos. Yours included.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "The founder is the channel. There is no other channel at your size.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: Your startup doesn't have a marketing problem. It has a boring founder problem. BUILD: body per draft below. PAYOFF: The founder is the channel. Everything else is amplification. REPLY PLAN: Post the take, then reply to your own post with the strongest counterargument to seed the debate. Respond to the first 10 replies within the hour (author-engaged replies weigh 75).",
  "shots": [
   "Line 1: the take, no context",
   "Line 2-3: one proof from building Ryder",
   "Last line: the rule, quotable",
   "No link, no hashtag"
  ],
  "overlay": [
   "boring founder problem",
   "the founder is the channel",
   "documented > polished"
  ],
  "caption": "Your startup doesn't have a marketing problem. It has a boring founder problem.\n\nAt 9 people you cannot out-spend anyone. You can out-story them. Every stage of building Ryder that we documented outperformed every ad we ever ran.\n\nThe founder is the channel. Everything else is amplification.",
  "cta": "Pin the dissent: 'when does this stop scaling?'"
 },
 {
  "date": "2026-08-04",
  "name": "Our first round closed itself. That almost killed the company.",
  "topic": "Fundraising",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Fundraising",
  "hookType": "Authority/Insider",
  "framework": "Authority Credential + Numbered Listicle",
  "why": "Fundraising series 2/8. Slot: Tuesday fundraising note (bookmark authority, vault-sourced numbers).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Our first round closed itself. That almost killed the company.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Easy money teaches expensive lessons.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "The bull-market round was the worst teacher we ever had.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: Our first round closed itself. That almost killed the company. BUILD: body per draft below. PAYOFF: An easy round is a market condition, not a skill. Never build expectations on it. REPLY PLAN: Pin a reply asking 'raising right now? what stage?' and answer every one. Bookmark-bait is legitimate here: end with a line worth saving.",
  "shots": [
   "Open with the number or the moment, never context",
   "Body: the real mechanics, real figures from the round",
   "Close: the transferable rule",
   "Link to nothing; the note is the asset"
  ],
  "overlay": [
   "round 1 closed itself",
   "round 2 hit a wall",
   "easy is a market condition, not a skill"
  ],
  "caption": "Our first round closed itself. That almost killed the company.\n\nPre-seed: ~$1M, mostly network, peak bull market. We assumed that's what raising is.\n\nA year later the bridge met a cold market with money already sunk into manufacturing. Same founders, same company, completely different game.\n\nAn easy round is a market condition, not a skill. Never build expectations on it.",
  "cta": "Bookmark line at the end; answer every stage question."
 },
 {
  "date": "2026-08-05",
  "name": "We ship hardware wallets to 68 countries. The top five made no sense to me.",
  "topic": "Ryder",
  "mission": "Convert",
  "format": "Short post + media",
  "intensity": "Medium",
  "niche": "Crypto / Ryder",
  "hookType": "Announcement/Proof",
  "framework": "Demo / Unboxing",
  "why": "Proof post; his country/scale posts convert profile clicks (weight 12). Slot: Wednesday Ryder proof (profile clicks weigh 12).",
  "hooks": [
   {
    "t": "Primary",
    "s": "We ship hardware wallets to 68 countries. The top five made no sense to me.",
    "o": "Short post + media",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The map of where our wallets go surprised the whole team.",
    "o": "Short post + media",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "68 countries. 9 people. One map.",
    "o": "Short post + media",
    "v": "same"
   }
  ],
  "script": "HOOK: We ship hardware wallets to 68 countries. BUILD: body per draft below. PAYOFF: The people who need your product are rarely the ones in the deck. REPLY PLAN: Reply to the post with the product link (links in the first post cost reach). Answer every product question same-day.",
  "shots": [
   "Proof first: award, country count, or demo clip",
   "One sentence of what it means for a normal person",
   "Media attached: photo or 30s clip",
   "Product link goes in the first reply"
  ],
  "overlay": [
   "68 countries",
   "the surprising top 5",
   "map attached"
  ],
  "caption": "We ship hardware wallets to 68 countries.\n\nWhen I finally mapped it, the top five made no sense to me: places nobody pitches you in a VC meeting, where self-custody isn't ideology, it's necessity.\n\nThe people who need your product are rarely the ones in the deck.",
  "cta": "Map graphic attached; country stories in replies."
 },
 {
  "date": "2026-08-06",
  "name": "The gap between 'we shipped' and 'people trust us with their money' is the actua",
  "topic": "Note",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Longform Essay",
  "framework": "Vulnerable Origin + Brutal Honesty",
  "why": "Trust-building essay; dwell + bookmark signal. Slot: Thursday longform note (dwell signal; account's proven 10x format).",
  "hooks": [
   {
    "t": "Primary",
    "s": "The gap between 'we shipped' and 'people trust us with their money' is the actual company.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Shipping was the easy half. Trust was the company.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Everything after launch day turned out to be the business.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: The gap between 'we shipped something' and 'people trust us with their money' is the actual company. BUILD: body per draft below. PAYOFF: Nobody claps for any of that. It's also the only reason we're still here. REPLY PLAN: Notes earn dwell time, the quiet ranked signal. Quote-post your own note the next morning with the single best line to give it a second run.",
  "shots": [
   "First line is the whole argument",
   "Short paragraphs, one idea each",
   "One real number every 3 paragraphs",
   "End on the uncomfortable part, not the lesson"
  ],
  "overlay": [
   "shipping vs trust",
   "the actual company",
   "what earned it"
  ],
  "caption": "The gap between 'we shipped something' and 'people trust us with their money' is the actual company.\n\nLaunch got us attention. What earned trust was slower: answering support at 2am, replacing units that failed, publishing the security model, monthly updates when the news was bad.\n\nNobody claps for any of that. It's also the only reason we're still here.",
  "cta": "Note tweet; morning quote-post."
 },
 {
  "date": "2026-08-07",
  "name": "I fed an AI 200 of my own posts. It found the pattern I refused to see.",
  "topic": "AI",
  "mission": "Authority",
  "format": "Short post",
  "intensity": "Medium",
  "niche": "AI / Tech",
  "hookType": "Take/Education",
  "framework": "Conditional Hack + Numbered Listicle",
  "why": "Meta post; the dashboard itself is the receipt. Slot: Friday AI/tech (bookmark pillar).",
  "hooks": [
   {
    "t": "Primary",
    "s": "I fed an AI 200 of my own posts. It found the pattern I refused to see.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "My own data called me out. The AI just read it aloud.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "200 posts in, one pattern out. It stung.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: I fed an AI 200 of my own X posts. It found the pattern I refused to see. BUILD: body per draft below. PAYOFF: The data doesn't negotiate. Full breakdown in the replies. REPLY PLAN: Reply with the exact stack/steps as a follow-up post. Answer implementation questions; each answered thread is a 75-weight event.",
  "shots": [
   "Claim with a number in line 1",
   "2-4 concrete items, no fluff",
   "Offer depth in the replies, not a link",
   "Screenshot beats description"
  ],
  "overlay": [
   "200 posts analyzed",
   "the pattern that stung",
   "fix in the replies"
  ],
  "caption": "I fed an AI 200 of my own X posts. It found the pattern I refused to see.\n\nMy personal stories out-reply everything 20-to-1. My product posts get polite likes. I'd been posting the comfortable one and calling it strategy.\n\nThe data doesn't negotiate. Full breakdown in the replies.",
  "cta": "Post the breakdown thread as replies."
 },
 {
  "date": "2026-08-08",
  "name": "> mom left when I was 7",
  "topic": "Story",
  "mission": "Reach",
  "format": "Greentext / story post",
  "intensity": "Medium",
  "niche": "Founder Story",
  "hookType": "Personal Story",
  "framework": "Greentext Timeline + Vulnerable Origin",
  "why": "The mom-left greentext did 5.8K and 3.6K in two runs; this is the definitive version. Slot: Saturday story (reply engine: 37-64 replies on this category).",
  "hooks": [
   {
    "t": "Primary",
    "s": "> mom left when I was 7\n> ran away at 16\n> moved abroad at 21\n> Red Dot at 31",
    "o": "Greentext / story post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The origin story, one line per year that mattered.",
    "o": "Greentext / story post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "> the timeline nobody sees behind 'founder'",
    "o": "Greentext / story post",
    "v": "same"
   }
  ],
  "script": "HOOK: > mom left when I was 7 BUILD: body per draft below. PAYOFF: None of it felt like a story while it was happening. REPLY PLAN: Personal stories are the account's reply engine (37-64 replies vs median 2). Reply to every personal response personally; no copy-paste.",
  "shots": [
   "Greentext or bare timeline, one beat per line",
   "The turn: where it flips",
   "Land on today, one line",
   "Photo if it exists, nothing staged"
  ],
  "overlay": [
   "the full greentext",
   "one beat per line",
   "lands on today"
  ],
  "caption": "> mom left when I was 7\n> didn't speak to her for 11 years\n> ran away from home at 16\n> moved abroad at 21, zero contacts\n> said no to my co-founder, twice\n> $5K grant became a company\n> Draper led the seed\n> Red Dot Award at 31\n\nNone of it felt like a story while it was happening.",
  "cta": "Personal replies only, no copy-paste."
 },
 {
  "date": "2026-08-09",
  "name": "gm. what are you shipping this week?",
  "topic": "Community",
  "mission": "Replies",
  "format": "Question post",
  "intensity": "Low",
  "niche": "GM / Community",
  "hookType": "Question",
  "framework": "Audience Callout",
  "why": "GM ritual + accountability loop = recurring reply engine. Slot: Sunday community day (author-engaged replies weigh 75).",
  "hooks": [
   {
    "t": "Primary",
    "s": "gm. what are you shipping this week?",
    "o": "Question post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Monday list: what's going live this week? Reply with one thing.",
    "o": "Question post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "One thing you're shipping this week. Just one.",
    "o": "Question post",
    "v": "same"
   }
  ],
  "script": "HOOK: gm. what are you shipping this week? BUILD: body per draft below. PAYOFF: One thing. Reply and I'll check on you Friday. REPLY PLAN: This is the 75x day: the post is the prompt, the replies are the content. Respond to everything for the first 2 hours. Quote the best answer next day.",
  "shots": [
   "One question, one line",
   "Make it answerable in 10 seconds",
   "Zero setup, zero links",
   "Your first reply sets the tone"
  ],
  "overlay": [
   "one thing, one line",
   "accountability thread",
   "check-in Friday"
  ],
  "caption": "gm. what are you shipping this week?\n\nOne thing. Reply and I'll check on you Friday.",
  "cta": "Actually check on them Friday; that follow-through is the account."
 },
 {
  "date": "2026-08-10",
  "name": "Consistency is overrated. Volume on the right format beats streaks.",
  "topic": "Builder",
  "mission": "Replies",
  "format": "Short post",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "Backed by his own dashboard numbers; contrarian + data = bookmarks. Slot: Monday builder take (reply weight 13.5).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Consistency is overrated. Volume on the right format beats streaks.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Your streak is impressing nobody. Your format might.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "I broke every posting streak I had. Growth went up.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: Consistency is overrated. Volume on the right format beats streaks. BUILD: body per draft below. PAYOFF: Post the winning format three times a week and delete the streak calendar. REPLY PLAN: Post the take, then reply to your own post with the strongest counterargument to seed the debate. Respond to the first 10 replies within the hour (author-engaged replies weigh 75).",
  "shots": [
   "Line 1: the take, no context",
   "Line 2-3: one proof from building Ryder",
   "Last line: the rule, quotable",
   "No link, no hashtag"
  ],
  "overlay": [
   "streaks vs formats",
   "the data behind it",
   "repeat winners, kill losers"
  ],
  "caption": "Consistency is overrated. Volume on the right format beats streaks.\n\nMy data: longform notes outperform my median post 10x. Daily filler posts trained the algorithm to expect nothing from me.\n\nPost the winning format three times a week and delete the streak calendar.",
  "cta": "Pin: 'what's your winning format?'"
 },
 {
  "date": "2026-08-11",
  "name": "$42K in the bank. Nine people. No founder salaries. That was the bridge round.",
  "topic": "Fundraising",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Fundraising",
  "hookType": "Authority/Insider",
  "framework": "Authority Credential + Numbered Listicle",
  "why": "Fundraising series 3/8. Slot: Tuesday fundraising note (bookmark authority, vault-sourced numbers).",
  "hooks": [
   {
    "t": "Primary",
    "s": "$42K in the bank. Nine people. No founder salaries. That was the bridge round.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The month the company almost ended, by the numbers.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Raise at strength. We learned it at $42K.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: $42K in the bank. Nine people. No founder salaries. BUILD: body per draft below. PAYOFF: Raise at strength when you can. Be transparent when you can't. REPLY PLAN: Pin a reply asking 'raising right now? what stage?' and answer every one. Bookmark-bait is legitimate here: end with a line worth saving.",
  "shots": [
   "Open with the number or the moment, never context",
   "Body: the real mechanics, real figures from the round",
   "Close: the transferable rule",
   "Link to nothing; the note is the asset"
  ],
  "overlay": [
   "$42K left",
   "no founder salaries",
   "closed 1.93x target anyway"
  ],
  "caption": "$42K in the bank. Nine people. No founder salaries.\n\nThat was Ryder during the bridge round. Crowdfunding fell short, the market was cold, money was already sunk into manufacturing.\n\nWe closed $405K on a $210K target anyway. Not by hiding the situation. By getting brutally specific about what every dollar did.\n\nRaise at strength when you can. Be transparent when you can't.",
  "cta": "'Raising right now?' pinned reply."
 },
 {
  "date": "2026-08-12",
  "name": "A software bug ships a patch. A hardware bug ships a pallet of scrap.",
  "topic": "Ryder",
  "mission": "Convert",
  "format": "Short post + media",
  "intensity": "Medium",
  "niche": "Crypto / Ryder",
  "hookType": "Announcement/Proof",
  "framework": "Demo / Unboxing",
  "why": "Hardware-reality posts differentiate him from SaaS founder content. Slot: Wednesday Ryder proof (profile clicks weigh 12).",
  "hooks": [
   {
    "t": "Primary",
    "s": "A software bug ships a patch. A hardware bug ships a pallet of scrap.",
    "o": "Short post + media",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Hardware is unforgiving in ways software founders can't imagine.",
    "o": "Short post + media",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "The pallet-of-scrap lesson, courtesy of our first production run.",
    "o": "Short post + media",
    "v": "same"
   }
  ],
  "script": "HOOK: A software bug ships a patch. A hardware bug ships a pallet of unusable inventory. BUILD: body per draft below. PAYOFF: We still chose it. Some problems only hardware can solve, and self-custody is one. REPLY PLAN: Reply to the post with the product link (links in the first post cost reach). Answer every product question same-day.",
  "shots": [
   "Proof first: award, country count, or demo clip",
   "One sentence of what it means for a normal person",
   "Media attached: photo or 30s clip",
   "Product link goes in the first reply"
  ],
  "overlay": [
   "patch vs pallet",
   "what hardware really costs",
   "why we still chose it"
  ],
  "caption": "A software bug ships a patch. A hardware bug ships a pallet of unusable inventory.\n\nWe learned hardware the expensive way: molds, certifications, secure-element chips, factories in other timezones. Every mistake is physical and every fix has a lead time.\n\nWe still chose it. Some problems only hardware can solve, and self-custody is one.",
  "cta": "Production-line photo attached."
 },
 {
  "date": "2026-08-13",
  "name": "Everything I know about distribution I learned after we built the product. Wrong",
  "topic": "Note",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Longform Essay",
  "framework": "Vulnerable Origin + Brutal Honesty",
  "why": "Core builder essay; his what-I'd-change IG version did 7.7K. Slot: Thursday longform note (dwell signal; account's proven 10x format).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Everything I know about distribution I learned after we built the product. Wrong order.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "We built first and learned distribution second. Expensive sequence.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Do distribution homework before the product exists. We didn't.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: Everything I know about distribution I learned after we built the product. BUILD: body per draft below. PAYOFF: The uncomfortable part: content like this post IS the distribution homework. Most founders skip it because it doesn't fe REPLY PLAN: Notes earn dwell time, the quiet ranked signal. Quote-post your own note the next morning with the single best line to give it a second run.",
  "shots": [
   "First line is the whole argument",
   "Short paragraphs, one idea each",
   "One real number every 3 paragraphs",
   "End on the uncomfortable part, not the lesson"
  ],
  "overlay": [
   "wrong order",
   "what it cost",
   "the right sequence"
  ],
  "caption": "Everything I know about distribution I learned after we built the product.\n\nThat's the wrong order, and it cost us at least a year.\n\nIf I started again: audience first, waitlist second, product third. Not because the product matters less, but because distribution compounds and product debt doesn't.\n\nThe uncomfortable part: content like this post IS the distribution homework. Most founders skip it because it doesn't feel like work.",
  "cta": "Note tweet; quote best line next morning."
 },
 {
  "date": "2026-08-14",
  "name": "Stop learning prompting. Start learning delegation. Different skill entirely.",
  "topic": "AI",
  "mission": "Authority",
  "format": "Short post",
  "intensity": "Medium",
  "niche": "AI / Tech",
  "hookType": "Take/Education",
  "framework": "Conditional Hack + Numbered Listicle",
  "why": "Reframe post; the IG version is scheduled Sep 16, cross-platform echo. Slot: Friday AI/tech (bookmark pillar).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Stop learning prompting. Start learning delegation. Different skill entirely.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Prompting is typing. Delegation is management. AI needs the second.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "You don't need better prompts. You need better handoffs.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: Stop learning prompting. Start learning delegation. BUILD: body per draft below. PAYOFF: Treat AI like a clever intern with no memory and you'll get intern results. Treat it like a team member with a brief and REPLY PLAN: Reply with the exact stack/steps as a follow-up post. Answer implementation questions; each answered thread is a 75-weight event.",
  "shots": [
   "Claim with a number in line 1",
   "2-4 concrete items, no fluff",
   "Offer depth in the replies, not a link",
   "Screenshot beats description"
  ],
  "overlay": [
   "prompting ≠ delegation",
   "handoffs, context, review",
   "manage AI like a hire"
  ],
  "caption": "Stop learning prompting. Start learning delegation.\n\nPrompting is wordsmithing. Delegation is: clear scope, full context, defined output, review loop. Exactly what you'd give a new hire.\n\nTreat AI like a clever intern with no memory and you'll get intern results. Treat it like a team member with a brief and it compounds.",
  "cta": "Example brief in the first reply."
 },
 {
  "date": "2026-08-15",
  "name": "The Philippines' presidential news network featured our wallet. My mom finally g",
  "topic": "Story",
  "mission": "Reach",
  "format": "Greentext / story post",
  "intensity": "Medium",
  "niche": "Founder Story",
  "hookType": "Personal Story",
  "framework": "Greentext Timeline + Vulnerable Origin",
  "why": "His PH-media posts (ANC 5.8K, PTV 2.9K) carry identity + reply energy. Slot: Saturday story (reply engine: 37-64 replies on this category).",
  "hooks": [
   {
    "t": "Primary",
    "s": "The Philippines' presidential news network featured our wallet. My mom finally gets what I do.",
    "o": "Greentext / story post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "National TV back home covered Ryder. That one hit different.",
    "o": "Greentext / story post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "From Bulacan to the presidential news network.",
    "o": "Greentext / story post",
    "v": "same"
   }
  ],
  "script": "HOOK: The Philippines' presidential news network just featured @RyderWallet. BUILD: body per draft below. PAYOFF: For every kabayan builder watching: the passport doesn't cap the ambition. REPLY PLAN: Personal stories are the account's reply engine (37-64 replies vs median 2). Reply to every personal response personally; no copy-paste.",
  "shots": [
   "Greentext or bare timeline, one beat per line",
   "The turn: where it flips",
   "Land on today, one line",
   "Photo if it exists, nothing staged"
  ],
  "overlay": [
   "national TV back home",
   "my mom finally gets it",
   "for every kabayan builder"
  ],
  "caption": "The Philippines' presidential news network just featured @RyderWallet.\n\nEleven years ago I left Bulacan with no contacts and no plan B. This week my mom watched the news explain what her kid builds.\n\nFor every kabayan builder watching: the passport doesn't cap the ambition.",
  "cta": "Reply to every kabayan response personally."
 },
 {
  "date": "2026-08-16",
  "name": "Reply with your startup in 5 words. I'll tell you what I'd fix in the pitch.",
  "topic": "Community",
  "mission": "Replies",
  "format": "Question post",
  "intensity": "Low",
  "niche": "GM / Community",
  "hookType": "Question",
  "framework": "Audience Callout",
  "why": "Author-engaged replies weigh 75; this post manufactures them at scale. Slot: Sunday community day (author-engaged replies weigh 75).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Reply with your startup in 5 words. I'll tell you what I'd fix in the pitch.",
    "o": "Question post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Five words. Your startup. I'll give you the investor read.",
    "o": "Question post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Pitch me in 5 words. Honest feedback, free.",
    "o": "Question post",
    "v": "same"
   }
  ],
  "script": "HOOK: Reply with your startup in 5 words. I'll tell you what I'd fix in the pitch. BUILD: body per draft below. PAYOFF: Did 3 rounds, $4.8M, heard every investor objection that exists. Honest reads all day. REPLY PLAN: This is the 75x day: the post is the prompt, the replies are the content. Respond to everything for the first 2 hours. Quote the best answer next day.",
  "shots": [
   "One question, one line",
   "Make it answerable in 10 seconds",
   "Zero setup, zero links",
   "Your first reply sets the tone"
  ],
  "overlay": [
   "5 words only",
   "honest reads all day",
   "75x day"
  ],
  "caption": "Reply with your startup in 5 words. I'll tell you what I'd fix in the pitch.\n\nDid 3 rounds, $4.8M, heard every investor objection that exists. Honest reads all day.",
  "cta": "Answer every single one; this is the 75-weight day."
 },
 {
  "date": "2026-08-17",
  "name": "Investors do not fund strangers.",
  "topic": "Builder",
  "mission": "Replies",
  "format": "Short post",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "His Jul 14 IG version pulled 12 replies; proven crossover take. Slot: Monday builder take (reply weight 13.5).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Investors do not fund strangers.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Two years of monthly updates to people who never gave us a cent. Then they did.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "The investor update nobody asked for is the one that closes the round.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: Investors do not fund strangers. BUILD: body per draft below. PAYOFF: When we finally raised, the round filled with people from that list. Warm isn't luck. It's logistics you started two yea REPLY PLAN: Post the take, then reply to your own post with the strongest counterargument to seed the debate. Respond to the first 10 replies within the hour (author-engaged replies weigh 75).",
  "shots": [
   "Line 1: the take, no context",
   "Line 2-3: one proof from building Ryder",
   "Last line: the rule, quotable",
   "No link, no hashtag"
  ],
  "overlay": [
   "strangers don't get funded",
   "2 years of updates",
   "warm isn't luck, it's logistics"
  ],
  "caption": "Investors do not fund strangers.\n\nFor two years I sent one monthly update to people who had never given us a cent. Revenue, misses, what we fixed. No ask.\n\nWhen we finally raised, the round filled with people from that list. Warm isn't luck. It's logistics you started two years early.",
  "cta": "Template of the update in first reply."
 },
 {
  "date": "2026-08-18",
  "name": "VCs don't fund visions. They fund line items. Here were ours.",
  "topic": "Fundraising",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Fundraising",
  "hookType": "Authority/Insider",
  "framework": "Authority Credential + Numbered Listicle",
  "why": "Fundraising series 4/8. Slot: Tuesday fundraising note (bookmark authority, vault-sourced numbers).",
  "hooks": [
   {
    "t": "Primary",
    "s": "VCs don't fund visions. They fund line items. Here were ours.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "$210K target = chips + certs + molds + DFM. To the dollar.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "The spreadsheet that closed our bridge round, itemized.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: VCs don't fund visions. They fund line items. BUILD: body per draft below. PAYOFF: Specificity oversubscribes rounds. REPLY PLAN: Pin a reply asking 'raising right now? what stage?' and answer every one. Bookmark-bait is legitimate here: end with a line worth saving.",
  "shots": [
   "Open with the number or the moment, never context",
   "Body: the real mechanics, real figures from the round",
   "Close: the transferable rule",
   "Link to nothing; the note is the asset"
  ],
  "overlay": [
   "line items, not visions",
   "$85K chips, $30K certs, $70K molds, $25K DFM",
   "closed 1.93x target"
  ],
  "caption": "VCs don't fund visions. They fund line items.\n\nOur bridge target was $210K. Not a round number we liked:\n\nChip development: $85K\nCertifications: $30K\nMolds: $70K\nDesign-for-manufacturing: $25K\n\nEvery investor saw exactly what physical thing their money became. Closed at 1.93x target in a down market.\n\nSpecificity oversubscribes rounds.",
  "cta": "Bookmark-bait close; answer stage questions."
 },
 {
  "date": "2026-08-19",
  "name": "Crypto only feels natural when three things are true: simple, safe, everyday.",
  "topic": "Ryder",
  "mission": "Convert",
  "format": "Short post + media",
  "intensity": "Medium",
  "niche": "Crypto / Ryder",
  "hookType": "Announcement/Proof",
  "framework": "Demo / Unboxing",
  "why": "Evolved from his 3.6K crypto-natural post. Slot: Wednesday Ryder proof (profile clicks weigh 12).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Crypto only feels natural when three things are true: simple, safe, everyday.",
    "o": "Short post + media",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The mainstream test for crypto is boring on purpose.",
    "o": "Short post + media",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "If your mom can't use it, it isn't mainstream. It's a hobby.",
    "o": "Short post + media",
    "v": "same"
   }
  ],
  "script": "HOOK: Crypto only feels natural when three things are true: BUILD: body per draft below. PAYOFF: Every product decision at Ryder runs against those three. If a feature fails one, it doesn't ship. The next billion user REPLY PLAN: Reply to the post with the product link (links in the first post cost reach). Answer every product question same-day.",
  "shots": [
   "Proof first: award, country count, or demo clip",
   "One sentence of what it means for a normal person",
   "Media attached: photo or 30s clip",
   "Product link goes in the first reply"
  ],
  "overlay": [
   "simple, safe, everyday",
   "the mom test",
   "what we build against"
  ],
  "caption": "Crypto only feels natural when three things are true:\n\n• it's simple\n• it's safe\n• it fits everyday life\n\nEvery product decision at Ryder runs against those three. If a feature fails one, it doesn't ship. The next billion users aren't waiting for more complexity.",
  "cta": "Reply: which of the three does crypto fail worst today?"
 },
 {
  "date": "2026-08-20",
  "name": "Big platforms should protect builders, not shut them down over their own mistake",
  "topic": "Note",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Longform Essay",
  "framework": "Vulnerable Origin + Brutal Honesty",
  "why": "Sequel to the account's #1 post of all time (21.8K imp). Slot: Thursday longform note (dwell signal; account's proven 10x format).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Big platforms should protect builders, not shut them down over their own mistakes.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Round 2 on the platform accountability rant. The DMs proved the point.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Builders keep paying for platforms' own errors. Still.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: Big platforms should protect builders, not shut them down over their own mistakes. BUILD: body per draft below. PAYOFF: Round two, because nothing changed. REPLY PLAN: Notes earn dwell time, the quiet ranked signal. Quote-post your own note the next morning with the single best line to give it a second run.",
  "shots": [
   "First line is the whole argument",
   "Short paragraphs, one idea each",
   "One real number every 3 paragraphs",
   "End on the uncomfortable part, not the lesson"
  ],
  "overlay": [
   "platforms vs builders",
   "what the DMs showed",
   "the fix is boring: due process"
  ],
  "caption": "Big platforms should protect builders, not shut them down over their own mistakes.\n\nWhen I posted this the first time, my DMs filled with founders who lost accounts, payouts, and businesses to automated decisions no human reviewed.\n\nThe fix isn't radical. It's due process: notice, a named reason, a human appeal, a deadline. Platforms demand exactly this from every builder in their TOS.\n\nRound two, because nothing changed.",
  "cta": "Note tweet; invite stories in replies."
 },
 {
  "date": "2026-08-21",
  "name": "Before every investor meeting I run the same $0 research stack.",
  "topic": "AI",
  "mission": "Authority",
  "format": "Short post",
  "intensity": "Medium",
  "niche": "AI / Tech",
  "hookType": "Take/Education",
  "framework": "Conditional Hack + Numbered Listicle",
  "why": "Practical fundraising-adjacent AI/research content; bookmark magnet. Slot: Friday AI/tech (bookmark pillar).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Before every investor meeting I run the same $0 research stack.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The pre-meeting research most founders skip takes 20 minutes and costs nothing.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Walk into the meeting knowing their portfolio better than they remember it.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: Before every investor meeting I run the same $0 research stack: BUILD: body per draft below. PAYOFF: 20 minutes. It has changed the temperature of every meeting I've done it for. REPLY PLAN: Reply with the exact stack/steps as a follow-up post. Answer implementation questions; each answered thread is a 75-weight event.",
  "shots": [
   "Claim with a number in line 1",
   "2-4 concrete items, no fluff",
   "Offer depth in the replies, not a link",
   "Screenshot beats description"
  ],
  "overlay": [
   "$0 stack, 20 minutes",
   "portfolio, thesis, conflicts",
   "the question that lands"
  ],
  "caption": "Before every investor meeting I run the same $0 research stack:\n\n1. Their last 10 investments: stage, size, who led\n2. Their fund's thesis page vs what they actually funded\n3. Portfolio conflicts and adjacencies to us\n4. One sharp question about a bet they made\n\n20 minutes. It has changed the temperature of every meeting I've done it for.",
  "cta": "Steps as a saveable graphic in reply."
 },
 {
  "date": "2026-08-22",
  "name": "Twin update: still on the way. Founder update: nothing about the calendar respec",
  "topic": "Story",
  "mission": "Reach",
  "format": "Greentext / story post",
  "intensity": "Medium",
  "niche": "Founder Story",
  "hookType": "Personal Story",
  "framework": "Greentext Timeline + Vulnerable Origin",
  "why": "The twin announcement is his most-replied post ever (64 replies). Slot: Saturday story (reply engine: 37-64 replies on this category).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Twin update: still on the way. Founder update: nothing about the calendar respects that.",
    "o": "Greentext / story post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Daddy Lou status report, and what it's doing to the roadmap.",
    "o": "Greentext / story post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Building a company while the twins countdown runs. Notes.",
    "o": "Greentext / story post",
    "v": "same"
   }
  ],
  "script": "HOOK: Twin update: still incoming. Calendar update: chaos. BUILD: body per draft below. PAYOFF: Daddy Lou era loading. REPLY PLAN: Personal stories are the account's reply engine (37-64 replies vs median 2). Reply to every personal response personally; no copy-paste.",
  "shots": [
   "Greentext or bare timeline, one beat per line",
   "The turn: where it flips",
   "Land on today, one line",
   "Photo if it exists, nothing staged"
  ],
  "overlay": [
   "daddy lou countdown",
   "the calendar collision",
   "what changes, what doesn't"
  ],
  "caption": "Twin update: still incoming. Calendar update: chaos.\n\nBuilding a hardware company across timezones while preparing for two humans at once is a scheduling problem no framework covers.\n\nWhat changes: travel, midnight factory calls, the 24/7 cosplay.\nWhat doesn't: shipping.\n\nDaddy Lou era loading.",
  "cta": "Reply to every congrats personally."
 },
 {
  "date": "2026-08-23",
  "name": "What's a 'normal' startup practice that will look insane in 10 years?",
  "topic": "Community",
  "mission": "Replies",
  "format": "Question post",
  "intensity": "Low",
  "niche": "GM / Community",
  "hookType": "Question",
  "framework": "Audience Callout",
  "why": "Debate-starter; replies at 13.5 with zero production cost. Slot: Sunday community day (author-engaged replies weigh 75).",
  "hooks": [
   {
    "t": "Primary",
    "s": "What's a 'normal' startup practice that will look insane in 10 years?",
    "o": "Question post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Some current startup norms are future cautionary tales. Name one.",
    "o": "Question post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "In 10 years we'll be embarrassed we did this. What's 'this'?",
    "o": "Question post",
    "v": "same"
   }
  ],
  "script": "HOOK: What's a 'normal' startup practice that will look insane in 10 years? BUILD: body per draft below. PAYOFF: Yours? REPLY PLAN: This is the 75x day: the post is the prompt, the replies are the content. Respond to everything for the first 2 hours. Quote the best answer next day.",
  "shots": [
   "One question, one line",
   "Make it answerable in 10 seconds",
   "Zero setup, zero links",
   "Your first reply sets the tone"
  ],
  "overlay": [
   "name the norm",
   "10-year embarrassment test",
   "mine's in the replies"
  ],
  "caption": "What's a 'normal' startup practice that will look insane in 10 years?\n\nMine: raising on projections everyone in the room knows are fiction, as a ritual.\n\nYours?",
  "cta": "Engage all takes; quote the sharpest."
 },
 {
  "date": "2026-08-24",
  "name": "Nobody cares about your product demo. They care about the before and after.",
  "topic": "Builder",
  "mission": "Replies",
  "format": "Short post",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "Marketing take with the product woven in; dual-purpose. Slot: Monday builder take (reply weight 13.5).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Nobody cares about your product demo. They care about the before and after.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Your demo shows features. The before/after shows the reason to care.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Kill the demo. Show the delta.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: Nobody cares about your product demo. They care about the before and after. BUILD: body per draft below. PAYOFF: Nobody remembers our feature list. Everyone remembers the delta. Sell the delta. REPLY PLAN: Post the take, then reply to your own post with the strongest counterargument to seed the debate. Respond to the first 10 replies within the hour (author-engaged replies weigh 75).",
  "shots": [
   "Line 1: the take, no context",
   "Line 2-3: one proof from building Ryder",
   "Last line: the rule, quotable",
   "No link, no hashtag"
  ],
  "overlay": [
   "demo vs delta",
   "before: 24 words on paper",
   "after: 60 seconds, one tap"
  ],
  "caption": "Nobody cares about your product demo. They care about the before and after.\n\nOurs:\nBefore: 24-word seed phrase on paper, one mistake from zero.\nAfter: tap, 60 seconds, recoverable.\n\nNobody remembers our feature list. Everyone remembers the delta. Sell the delta.",
  "cta": "Pin: 'what's your before/after?'"
 },
 {
  "date": "2026-08-25",
  "name": "We told our own investors: put more in, or we probably don't make it.",
  "topic": "Fundraising",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Fundraising",
  "hookType": "Authority/Insider",
  "framework": "Authority Credential + Numbered Listicle",
  "why": "Fundraising series 5/8. Slot: Tuesday fundraising note (bookmark authority, vault-sourced numbers).",
  "hooks": [
   {
    "t": "Primary",
    "s": "We told our own investors: put more in, or we probably don't make it.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The most uncomfortable calls I've made as a founder were to people who already believed.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Insiders doubling down is the only signal new money trusts.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: During the bridge we called every existing investor and said the quiet part: if you don't put more in, we probably don't make it, and the money you already gave us goes to zero. BUILD: body per draft below. PAYOFF: Conviction is only visible when it costs something. REPLY PLAN: Pin a reply asking 'raising right now? what stage?' and answer every one. Bookmark-bait is legitimate here: end with a line worth saving.",
  "shots": [
   "Open with the number or the moment, never context",
   "Body: the real mechanics, real figures from the round",
   "Close: the transferable rule",
   "Link to nothing; the note is the asset"
  ],
  "overlay": [
   "the uncomfortable call",
   "'double down or it's zero'",
   "insiders in = round closed"
  ],
  "caption": "During the bridge we called every existing investor and said the quiet part: if you don't put more in, we probably don't make it, and the money you already gave us goes to zero.\n\nBrutal calls. But when insiders re-upped, every new investor watching got the only signal that matters: the people with the most information still believe.\n\nConviction is only visible when it costs something.",
  "cta": "Stage questions answered all day."
 },
 {
  "date": "2026-08-26",
  "name": "First tap. No seed phrase. Sixty seconds. Watch.",
  "topic": "Ryder",
  "mission": "Convert",
  "format": "Short post + media",
  "intensity": "Medium",
  "niche": "Crypto / Ryder",
  "hookType": "Announcement/Proof",
  "framework": "Demo / Unboxing",
  "why": "Video posts feed the video signals; the demo IS the argument. Slot: Wednesday Ryder proof (profile clicks weigh 12).",
  "hooks": [
   {
    "t": "Primary",
    "s": "First tap. No seed phrase. Sixty seconds. Watch.",
    "o": "Short post + media",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Crypto onboarding in the time it takes to make coffee. Clip attached.",
    "o": "Short post + media",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "60 seconds from box to secured. No 24 words anywhere.",
    "o": "Short post + media",
    "v": "same"
   }
  ],
  "script": "HOOK: First tap. No seed phrase. Sixty seconds. BUILD: body per draft below. PAYOFF: This is the whole pitch. Watch the clip. REPLY PLAN: Reply to the post with the product link (links in the first post cost reach). Answer every product question same-day.",
  "shots": [
   "Proof first: award, country count, or demo clip",
   "One sentence of what it means for a normal person",
   "Media attached: photo or 30s clip",
   "Product link goes in the first reply"
  ],
  "overlay": [
   "60-second clip",
   "no seed phrase",
   "link in reply"
  ],
  "caption": "First tap. No seed phrase. Sixty seconds.\n\nThis is the whole pitch. Watch the clip.",
  "cta": "Clip attached; buy link in first reply."
 },
 {
  "date": "2026-08-27",
  "name": "I raised $4.8M for a hardware company with zero hardware background. 10 lessons ",
  "topic": "Note",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Longform Essay",
  "framework": "Vulnerable Origin + Brutal Honesty",
  "why": "The IG twin of this did 7.6K views / 45 saves / 32 shares this week — best recent authority post. Slot: Thursday longform note (dwell signal; account's proven 10x format).",
  "hooks": [
   {
    "t": "Primary",
    "s": "I raised $4.8M for a hardware company with zero hardware background. 10 lessons I paid for.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Ten hardware lessons, each with an invoice attached.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "No hardware background, $4.8M raised, 10 scars itemized.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: I raised $4.8M for a hardware company with zero hardware background. 10 lessons I paid for the hard way: BUILD: body per draft below. PAYOFF: Each one has an invoice behind it. REPLY PLAN: Notes earn dwell time, the quiet ranked signal. Quote-post your own note the next morning with the single best line to give it a second run.",
  "shots": [
   "First line is the whole argument",
   "Short paragraphs, one idea each",
   "One real number every 3 paragraphs",
   "End on the uncomfortable part, not the lesson"
  ],
  "overlay": [
   "10 lessons, all paid for",
   "fundamentals before factories",
   "the note is the bookmark"
  ],
  "caption": "I raised $4.8M for a hardware company with zero hardware background. 10 lessons I paid for the hard way:\n\n1. Learn fundamentals before talking to factories\n2. Your BOM is fiction until the third revision\n3. Certifications take longer than development\n4. The mold is the commitment; software habits die there\n5. Air freight erases margins, sea freight erases deadlines\n6. One great manufacturing partner beats three cheap ones\n7. Hire the person who's shipped hardware before, early\n8. Pre-orders are loans from your most patient customers\n9. Every 'small change' restarts a test cycle\n10. Software patches bugs; hardware patches reputations\n\nEach one has an invoice behind it.",
  "cta": "Note tweet; bookmark magnet; expand any item on request in replies."
 },
 {
  "date": "2026-08-28",
  "name": "Cancel the 12 AI subscriptions. Three workflows replace them.",
  "topic": "AI",
  "mission": "Authority",
  "format": "Short post",
  "intensity": "Medium",
  "niche": "AI / Tech",
  "hookType": "Take/Education",
  "framework": "Conditional Hack + Numbered Listicle",
  "why": "Consolidation listicle; bookmark rate leader pattern. Slot: Friday AI/tech (bookmark pillar).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Cancel the 12 AI subscriptions. Three workflows replace them.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Your AI stack is a subscription graveyard. Three workflows do the work.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "12 tools → 3 workflows. The consolidation post.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: Cancel the 12 AI subscriptions. Three workflows replace them: BUILD: body per draft below. PAYOFF: Everything else is a demo you pay monthly to not use. REPLY PLAN: Reply with the exact stack/steps as a follow-up post. Answer implementation questions; each answered thread is a 75-weight event.",
  "shots": [
   "Claim with a number in line 1",
   "2-4 concrete items, no fluff",
   "Offer depth in the replies, not a link",
   "Screenshot beats description"
  ],
  "overlay": [
   "12 → 3",
   "what each workflow eats",
   "stack in replies"
  ],
  "caption": "Cancel the 12 AI subscriptions. Three workflows replace them:\n\n1. Research: one agent that reads, summarizes, and files\n2. Production: drafts from your own data, your own voice\n3. Distribution: publish, track, resurface winners\n\nEverything else is a demo you pay monthly to not use.",
  "cta": "Exact setup in replies."
 },
 {
  "date": "2026-08-29",
  "name": "I got robbed in London. Lost a finger in Portugal. Shipped anyway.",
  "topic": "Story",
  "mission": "Reach",
  "format": "Greentext / story post",
  "intensity": "Medium",
  "niche": "Founder Story",
  "hookType": "Personal Story",
  "framework": "Greentext Timeline + Vulnerable Origin",
  "why": "His #2 post ever (8.4K imp, 37 replies) was exactly this; definitive retelling. Slot: Saturday story (reply engine: 37-64 replies on this category).",
  "hooks": [
   {
    "t": "Primary",
    "s": "I got robbed in London. Lost a finger in Portugal. Shipped anyway.",
    "o": "Greentext / story post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The year everything went wrong was the year we shipped everything.",
    "o": "Greentext / story post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Robbed, nine-fingered, and on schedule. That year.",
    "o": "Greentext / story post",
    "v": "same"
   }
  ],
  "script": "HOOK: I got robbed in London. Lost a finger in Portugal. Payment processors froze us mid-launch. BUILD: body per draft below. PAYOFF: The bad year and the best year were the same year. Nobody tells you they usually are. REPLY PLAN: Personal stories are the account's reply engine (37-64 replies vs median 2). Reply to every personal response personally; no copy-paste.",
  "shots": [
   "Greentext or bare timeline, one beat per line",
   "The turn: where it flips",
   "Land on today, one line",
   "Photo if it exists, nothing staged"
  ],
  "overlay": [
   "robbed in London",
   "finger in Portugal",
   "shipped anyway"
  ],
  "caption": "I got robbed in London. Lost a finger in Portugal. Payment processors froze us mid-launch.\n\nSame twelve months: we shipped Ryder One to 68 countries, closed the seed, and won a Red Dot.\n\nThe bad year and the best year were the same year. Nobody tells you they usually are.",
  "cta": "Personal replies to every story shared back."
 },
 {
  "date": "2026-08-30",
  "name": "gm. drop the boring win nobody claps for.",
  "topic": "Community",
  "mission": "Replies",
  "format": "Question post",
  "intensity": "Low",
  "niche": "GM / Community",
  "hookType": "Question",
  "framework": "Audience Callout",
  "why": "Reply-day; celebrates the audience instead of the author. Slot: Sunday community day (author-engaged replies weigh 75).",
  "hooks": [
   {
    "t": "Primary",
    "s": "gm. drop the boring win nobody claps for.",
    "o": "Question post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Boring wins thread: the unglamorous thing that actually moved your company.",
    "o": "Question post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Shipped nothing viral this week? Perfect. What quietly worked?",
    "o": "Question post",
    "v": "same"
   }
  ],
  "script": "HOOK: gm. drop the boring win nobody claps for. BUILD: body per draft below. PAYOFF: Yours? REPLY PLAN: This is the 75x day: the post is the prompt, the replies are the content. Respond to everything for the first 2 hours. Quote the best answer next day.",
  "shots": [
   "One question, one line",
   "Make it answerable in 10 seconds",
   "Zero setup, zero links",
   "Your first reply sets the tone"
  ],
  "overlay": [
   "boring wins only",
   "no launches allowed",
   "clap for maintenance"
  ],
  "caption": "gm. drop the boring win nobody claps for.\n\nMine: we cut fulfillment errors to near zero and not one person will ever tweet about it.\n\nYours?",
  "cta": "Celebrate every reply; this thread is the community."
 },
 {
  "date": "2026-08-31",
  "name": "Streaks are for Duolingo. Formats are for growth.",
  "topic": "Builder",
  "mission": "Replies",
  "format": "Short post",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "Data-backed contrarian; sets up the dashboard reveal. Slot: Monday builder take (reply weight 13.5).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Streaks are for Duolingo. Formats are for growth.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Your posting streak is a vanity metric. Your format hit-rate isn't.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Stop counting days. Start counting repeatable winners.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: Streaks are for Duolingo. Formats are for growth. BUILD: body per draft below. PAYOFF: Find your 10x format. Post it three times a week. Let the streak die. REPLY PLAN: Post the take, then reply to your own post with the strongest counterargument to seed the debate. Respond to the first 10 replies within the hour (author-engaged replies weigh 75).",
  "shots": [
   "Line 1: the take, no context",
   "Line 2-3: one proof from building Ryder",
   "Last line: the rule, quotable",
   "No link, no hashtag"
  ],
  "overlay": [
   "streaks vs formats",
   "find the repeatable winner",
   "my 10x format"
  ],
  "caption": "Streaks are for Duolingo. Formats are for growth.\n\nMy longform notes outperform my median post 10x. That one sentence is worth more than every streak I've kept.\n\nFind your 10x format. Post it three times a week. Let the streak die.",
  "cta": "Pin: 'what's your 10x format?'"
 },
 {
  "date": "2026-09-01",
  "name": "Tim Draper said no to us. Two years later he led our round.",
  "topic": "Fundraising",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Fundraising",
  "hookType": "Authority/Insider",
  "framework": "Authority Credential + Numbered Listicle",
  "why": "Fundraising series 6/8; his existing Draper post (2.5K) proves the topic pulls. Slot: Tuesday fundraising note (bookmark authority, vault-sourced numbers).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Tim Draper said no to us. Two years later he led our round.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The no that became the lead check, with the timeline attached.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "A rejection is a pipeline entry with a future date on it.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: Tim Draper's fund said no to us in 2022. We were a deck. BUILD: body per draft below. PAYOFF: A no is almost never about you. It's about now. File every rejection with a future date on it. REPLY PLAN: Pin a reply asking 'raising right now? what stage?' and answer every one. Bookmark-bait is legitimate here: end with a line worth saving.",
  "shots": [
   "Open with the number or the moment, never context",
   "Body: the real mechanics, real figures from the round",
   "Close: the transferable rule",
   "Link to nothing; the note is the asset"
  ],
  "overlay": [
   "2022: no",
   "2024: term sheet",
   "the no was about 'now', not us"
  ],
  "caption": "Tim Draper's fund said no to us in 2022. We were a deck.\n\nTwo years of shipping later: hardware in customers' hands, revenue, a Kickstarter behind us. Same fund, different conversation. Term sheet signed weeks after the in-person.\n\nA no is almost never about you. It's about now. File every rejection with a future date on it.",
  "cta": "'What stage were you at the no?' pinned."
 },
 {
  "date": "2026-09-02",
  "name": "We're building a bank on top of a wallet. On purpose.",
  "topic": "Ryder",
  "mission": "Convert",
  "format": "Short post + media",
  "intensity": "Medium",
  "niche": "Crypto / Ryder",
  "hookType": "Announcement/Proof",
  "framework": "Demo / Unboxing",
  "why": "Vision post; profile-click driver ahead of fundraising conversations. Slot: Wednesday Ryder proof (profile clicks weigh 12).",
  "hooks": [
   {
    "t": "Primary",
    "s": "We're building a bank on top of a wallet. On purpose.",
    "o": "Short post + media",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The roadmap nobody asked for: wallet first, bank second.",
    "o": "Short post + media",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Why the wallet was never the endgame.",
    "o": "Short post + media",
    "v": "same"
   }
  ],
  "script": "HOOK: We're building a bank on top of a wallet. On purpose. BUILD: body per draft below. PAYOFF: Wallet first. Bank second. The order is the strategy. REPLY PLAN: Reply to the post with the product link (links in the first post cost reach). Answer every product question same-day.",
  "shots": [
   "Proof first: award, country count, or demo clip",
   "One sentence of what it means for a normal person",
   "Media attached: photo or 30s clip",
   "Product link goes in the first reply"
  ],
  "overlay": [
   "wallet → bank",
   "the roadmap logic",
   "what ships next"
  ],
  "caption": "We're building a bank on top of a wallet. On purpose.\n\nThe wallet earns the right: custody is trust, and trust is the only real moat in finance. Everything after — swaps, staking, on-ramps, payments — sits on that.\n\nWallet first. Bank second. The order is the strategy.",
  "cta": "Roadmap questions answered in replies."
 },
 {
  "date": "2026-09-03",
  "name": "If I ran Ryder again from zero, here's what actually changes.",
  "topic": "Note",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Longform Essay",
  "framework": "Vulnerable Origin + Brutal Honesty",
  "why": "His IG do-over posts did 7.7K and 2.1K; proven topic. Slot: Thursday longform note (dwell signal; account's proven 10x format).",
  "hooks": [
   {
    "t": "Primary",
    "s": "If I ran Ryder again from zero, here's what actually changes.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The do-over list, from someone mid-way through the first run.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Five changes I'd make running it back. Number one is distribution.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: If I ran Ryder again from zero: BUILD: body per draft below. PAYOFF: The product would be the same. The order would not. REPLY PLAN: Notes earn dwell time, the quiet ranked signal. Quote-post your own note the next morning with the single best line to give it a second run.",
  "shots": [
   "First line is the whole argument",
   "Short paragraphs, one idea each",
   "One real number every 3 paragraphs",
   "End on the uncomfortable part, not the lesson"
  ],
  "overlay": [
   "the do-over list",
   "audience before product",
   "hire for scars, not slides"
  ],
  "caption": "If I ran Ryder again from zero:\n\n1. Build the audience 12 months before the product\n2. Hire one person who's shipped hardware, immediately\n3. Raise at strength, announce at open\n4. Say no to the uncapped note in a down market\n5. Document everything publicly from day one\n\nThe product would be the same. The order would not.",
  "cta": "Note tweet; expand items in replies on request."
 },
 {
  "date": "2026-09-04",
  "name": "My AI reads my competitors' feeds weekly. I read a one-page digest.",
  "topic": "AI",
  "mission": "Authority",
  "format": "Short post",
  "intensity": "Medium",
  "niche": "AI / Tech",
  "hookType": "Take/Education",
  "framework": "Conditional Hack + Numbered Listicle",
  "why": "Practical agent use-case; consistent bookmark performer. Slot: Friday AI/tech (bookmark pillar).",
  "hooks": [
   {
    "t": "Primary",
    "s": "My AI reads my competitors' feeds weekly. I read a one-page digest.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Competitor stalking is automated now. The digest is better than the doomscroll.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "I stopped watching competitors. The agent watches. I build.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: My AI reads my competitors' feeds every week. I read a one-page digest. BUILD: body per draft below. PAYOFF: Setup in the replies. REPLY PLAN: Reply with the exact stack/steps as a follow-up post. Answer implementation questions; each answered thread is a 75-weight event.",
  "shots": [
   "Claim with a number in line 1",
   "2-4 concrete items, no fluff",
   "Offer depth in the replies, not a link",
   "Screenshot beats description"
  ],
  "overlay": [
   "the weekly digest",
   "what it flags",
   "setup in replies"
  ],
  "caption": "My AI reads my competitors' feeds every week. I read a one-page digest.\n\nIt flags: pricing changes, launches, positioning shifts, and outlier posts. I stopped doomscrolling rivals and got four hours a week back.\n\nSetup in the replies.",
  "cta": "Setup steps in reply thread."
 },
 {
  "date": "2026-09-05",
  "name": "Three visas, three countries, one rule: never unpack fully.",
  "topic": "Story",
  "mission": "Reach",
  "format": "Greentext / story post",
  "intensity": "Medium",
  "niche": "Founder Story",
  "hookType": "Personal Story",
  "framework": "Greentext Timeline + Vulnerable Origin",
  "why": "Identity + origin content; the account's reply-rate leader category. Slot: Saturday story (reply engine: 37-64 replies on this category).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Three visas, three countries, one rule: never unpack fully.",
    "o": "Greentext / story post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The immigrant founder packing rule, and what it taught me about commitment.",
    "o": "Greentext / story post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Never fully unpacked, never fully stopped.",
    "o": "Greentext / story post",
    "v": "same"
   }
  ],
  "script": "HOOK: Three visas. Three countries. One rule: never unpack fully. BUILD: body per draft below. PAYOFF: Eleven years out of Bulacan and the box I've never unpacked is the one with the return ticket. REPLY PLAN: Personal stories are the account's reply engine (37-64 replies vs median 2). Reply to every personal response personally; no copy-paste.",
  "shots": [
   "Greentext or bare timeline, one beat per line",
   "The turn: where it flips",
   "Land on today, one line",
   "Photo if it exists, nothing staged"
  ],
  "overlay": [
   "three countries",
   "the packing rule",
   "home is the work"
  ],
  "caption": "Three visas. Three countries. One rule: never unpack fully.\n\nAmsterdam taught me systems. Japan taught me craft. LA taught me story. The suitcase in the corner taught me the most: commitment isn't location, it's direction.\n\nEleven years out of Bulacan and the box I've never unpacked is the one with the return ticket.",
  "cta": "Reply to every immigrant-builder story."
 },
 {
  "date": "2026-09-06",
  "name": "Which do you actually want: freedom, money, or proof you could?",
  "topic": "Community",
  "mission": "Replies",
  "format": "Question post",
  "intensity": "Low",
  "niche": "GM / Community",
  "hookType": "Question",
  "framework": "Audience Callout",
  "why": "Identity question; high reply rate, zero production. Slot: Sunday community day (author-engaged replies weigh 75).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Which do you actually want: freedom, money, or proof you could?",
    "o": "Question post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Founders run on one of three fuels. Which is yours, honestly?",
    "o": "Question post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Freedom, money, or proof. Pick your real one.",
    "o": "Question post",
    "v": "same"
   }
  ],
  "script": "HOOK: Founders: which do you actually want? BUILD: body per draft below. PAYOFF: Honest answers only. Mine changed somewhere between the $5K grant and the term sheet. Yours? REPLY PLAN: This is the 75x day: the post is the prompt, the replies are the content. Respond to everything for the first 2 hours. Quote the best answer next day.",
  "shots": [
   "One question, one line",
   "Make it answerable in 10 seconds",
   "Zero setup, zero links",
   "Your first reply sets the tone"
  ],
  "overlay": [
   "three fuels",
   "pick honestly",
   "mine changed over time"
  ],
  "caption": "Founders: which do you actually want?\n\n• freedom\n• money\n• proof you could\n\nHonest answers only. Mine changed somewhere between the $5K grant and the term sheet. Yours?",
  "cta": "Engage every answer; share which his is mid-thread."
 },
 {
  "date": "2026-09-07",
  "name": "Your best content idea is the one you're embarrassed to post.",
  "topic": "Builder",
  "mission": "Replies",
  "format": "Short post",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "Meta-content take backed by his own greentext numbers. Slot: Monday builder take (reply weight 13.5).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Your best content idea is the one you're embarrassed to post.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Embarrassment is the metric. The cringe post is the winner.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "The post you're scared of is the one that works.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: Your best content idea is the one you're embarrassed to post. BUILD: body per draft below. PAYOFF: The embarrassment isn't a warning. It's a signal you're about to say something true. REPLY PLAN: Post the take, then reply to your own post with the strongest counterargument to seed the debate. Respond to the first 10 replies within the hour (author-engaged replies weigh 75).",
  "shots": [
   "Line 1: the take, no context",
   "Line 2-3: one proof from building Ryder",
   "Last line: the rule, quotable",
   "No link, no hashtag"
  ],
  "overlay": [
   "embarrassment = signal",
   "my proof post",
   "post it anyway"
  ],
  "caption": "Your best content idea is the one you're embarrassed to post.\n\nMy proof: the greentext about my mom leaving. Sat in drafts for weeks. Posted it flinching. It's my most-replied content category ever.\n\nThe embarrassment isn't a warning. It's a signal you're about to say something true.",
  "cta": "Pin: 'what's sitting in your drafts?'"
 },
 {
  "date": "2026-09-08",
  "name": "The first offer was $1M for 10%. We signed $1M at $20M post.",
  "topic": "Fundraising",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Fundraising",
  "hookType": "Authority/Insider",
  "framework": "Authority Credential + Numbered Listicle",
  "why": "Fundraising series 7/8. Slot: Tuesday fundraising note (bookmark authority, vault-sourced numbers).",
  "hooks": [
   {
    "t": "Primary",
    "s": "The first offer was $1M for 10%. We signed $1M at $20M post.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Double the valuation between the opener and the signature. Here's the mechanics.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "A term sheet's first number is an opener, not a verdict.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: The first offer was $1M for 10% of the company. BUILD: body per draft below. PAYOFF: A term sheet's first number is an opener, not a verdict. Founders who don't counter pay for it in every round after. REPLY PLAN: Pin a reply asking 'raising right now? what stage?' and answer every one. Bookmark-bait is legitimate here: end with a line worth saving.",
  "shots": [
   "Open with the number or the moment, never context",
   "Body: the real mechanics, real figures from the round",
   "Close: the transferable rule",
   "Link to nothing; the note is the asset"
  ],
  "overlay": [
   "$1M for 10% opener",
   "countered at 4%",
   "signed at $20M post"
  ],
  "caption": "The first offer was $1M for 10% of the company.\n\nWe countered at 4%, anchored to the soft commitments we already had around a higher number, and pointed at our distribution targets.\n\nSigned: $1M at $20M post. Double their opener.\n\nA term sheet's first number is an opener, not a verdict. Founders who don't counter pay for it in every round after.",
  "cta": "Negotiation questions all day."
 },
 {
  "date": "2026-09-09",
  "name": "Most people's crypto dies with them. Morbid, and fixable in an afternoon.",
  "topic": "Ryder",
  "mission": "Convert",
  "format": "Short post + media",
  "intensity": "Medium",
  "niche": "Crypto / Ryder",
  "hookType": "Announcement/Proof",
  "framework": "Demo / Unboxing",
  "why": "Education post targeting the anxious-holder segment. Slot: Wednesday Ryder proof (profile clicks weigh 12).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Most people's crypto dies with them. Morbid, and fixable in an afternoon.",
    "o": "Short post + media",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Estate planning for crypto is nobody's favorite topic. It's also why we built recovery.",
    "o": "Short post + media",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "If you got hit by a bus, your crypto is gone. Fix it today.",
    "o": "Short post + media",
    "v": "same"
   }
  ],
  "script": "HOOK: Most people's crypto dies with them. BUILD: body per draft below. PAYOFF: We built Recovery Contacts for exactly this: trusted people who can help restore access, no single point of failure. An  REPLY PLAN: Reply to the post with the product link (links in the first post cost reach). Answer every product question same-day.",
  "shots": [
   "Proof first: award, country count, or demo clip",
   "One sentence of what it means for a normal person",
   "Media attached: photo or 30s clip",
   "Product link goes in the first reply"
  ],
  "overlay": [
   "the morbid math",
   "recovery contacts exist",
   "an afternoon fixes it"
  ],
  "caption": "Most people's crypto dies with them.\n\nNo seed phrase shared (good!) means no recovery for family (bad). The self-custody purists never finish this sentence.\n\nWe built Recovery Contacts for exactly this: trusted people who can help restore access, no single point of failure. An afternoon of setup versus permanent loss.",
  "cta": "How-it-works clip in reply."
 },
 {
  "date": "2026-09-10",
  "name": "The worst month of my founder life ended 30 days before the best one.",
  "topic": "Note",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Longform Essay",
  "framework": "Vulnerable Origin + Brutal Honesty",
  "why": "Vulnerable origin note; the IG twin closes the fundraising series there. Slot: Thursday longform note (dwell signal; account's proven 10x format).",
  "hooks": [
   {
    "t": "Primary",
    "s": "The worst month of my founder life ended 30 days before the best one.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Rock bottom and the term sheet were a month apart. Nobody schedules that.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "The bad month and the good month are neighbors more often than you think.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: The worst month of my founder life ended 30 days before the best one. BUILD: body per draft below. PAYOFF: I'm not telling you it always turns. I'm telling you it's usually closer than it looks from inside the bad month. REPLY PLAN: Notes earn dwell time, the quiet ranked signal. Quote-post your own note the next morning with the single best line to give it a second run.",
  "shots": [
   "First line is the whole argument",
   "Short paragraphs, one idea each",
   "One real number every 3 paragraphs",
   "End on the uncomfortable part, not the lesson"
  ],
  "overlay": [
   "$42K month",
   "then the term sheet",
   "keep the 30 days in mind"
  ],
  "caption": "The worst month of my founder life ended 30 days before the best one.\n\nThe month: $42K in the bank, no salaries, a manufacturing bill due, and a crowdfund that fell short. I drafted the shutdown email in my head more than once.\n\n30 days later the bridge closed oversubscribed and the machine that became Ryder One turned on.\n\nI'm not telling you it always turns. I'm telling you it's usually closer than it looks from inside the bad month.",
  "cta": "Note tweet; replies handled personally."
 },
 {
  "date": "2026-09-11",
  "name": "60 posts in 30 days. Zero hand-written. Here's the system.",
  "topic": "AI",
  "mission": "Authority",
  "format": "Short post",
  "intensity": "Medium",
  "niche": "AI / Tech",
  "hookType": "Take/Education",
  "framework": "Conditional Hack + Numbered Listicle",
  "why": "Meta-proof: this very account is the case study. Slot: Friday AI/tech (bookmark pillar).",
  "hooks": [
   {
    "t": "Primary",
    "s": "60 posts in 30 days. Zero hand-written. Here's the system.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The content system runs itself now. I just approve and film.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "My content team is four files and a dashboard.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: 60 posts in 30 days. Zero hand-written. BUILD: body per draft below. PAYOFF: Four files and a dashboard replaced a content team. Diagram in the reply. REPLY PLAN: Reply with the exact stack/steps as a follow-up post. Answer implementation questions; each answered thread is a 75-weight event.",
  "shots": [
   "Claim with a number in line 1",
   "2-4 concrete items, no fluff",
   "Offer depth in the replies, not a link",
   "Screenshot beats description"
  ],
  "overlay": [
   "60 posts, 0 hand-written",
   "the four files",
   "system diagram in reply"
  ],
  "caption": "60 posts in 30 days. Zero hand-written.\n\nThe system: my own analytics feed a hook bank, the hook bank feeds a content calendar, the calendar feeds drafts in my voice, I approve and film.\n\nFour files and a dashboard replaced a content team. Diagram in the reply.",
  "cta": "Diagram + repo link in replies."
 },
 {
  "date": "2026-09-12",
  "name": "My co-founder pitched me a crypto wallet. I said no. Twice.",
  "topic": "Story",
  "mission": "Reach",
  "format": "Greentext / story post",
  "intensity": "Medium",
  "niche": "Founder Story",
  "hookType": "Personal Story",
  "framework": "Greentext Timeline + Vulnerable Origin",
  "why": "Origin beat with a transferable rule; story pillar. Slot: Saturday story (reply engine: 37-64 replies on this category).",
  "hooks": [
   {
    "t": "Primary",
    "s": "My co-founder pitched me a crypto wallet. I said no. Twice.",
    "o": "Greentext / story post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The company exists because he ignored my first two answers.",
    "o": "Greentext / story post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "I rejected Ryder before I ran it.",
    "o": "Greentext / story post",
    "v": "same"
   }
  ],
  "script": "HOOK: My co-founder pitched me a hardware wallet idea. I said no. BUILD: body per draft below. PAYOFF: Lesson I've reused a hundred times since: ideas are auditions, prototypes are arguments. Show up with the argument. REPLY PLAN: Personal stories are the account's reply engine (37-64 replies vs median 2). Reply to every personal response personally; no copy-paste.",
  "shots": [
   "Greentext or bare timeline, one beat per line",
   "The turn: where it flips",
   "Land on today, one line",
   "Photo if it exists, nothing staged"
  ],
  "overlay": [
   "I said no twice",
   "he came back with a prototype",
   "judgment vs stubbornness"
  ],
  "caption": "My co-founder pitched me a hardware wallet idea. I said no.\n\nHe came back two weeks later with a working prototype. I said yes to the prototype, not the pitch.\n\nLesson I've reused a hundred times since: ideas are auditions, prototypes are arguments. Show up with the argument.",
  "cta": "Origin questions welcomed."
 },
 {
  "date": "2026-09-13",
  "name": "Reply with the 'no' that turned into your biggest yes.",
  "topic": "Community",
  "mission": "Replies",
  "format": "Question post",
  "intensity": "Low",
  "niche": "GM / Community",
  "hookType": "Question",
  "framework": "Audience Callout",
  "why": "Community day tied to the fundraising narrative. Slot: Sunday community day (author-engaged replies weigh 75).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Reply with the 'no' that turned into your biggest yes.",
    "o": "Question post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Rejections that became wins. Collect them here.",
    "o": "Question post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Best comeback-from-a-no story wins the quote.",
    "o": "Question post",
    "v": "same"
   }
  ],
  "script": "HOOK: Reply with the 'no' that turned into your biggest yes. BUILD: body per draft below. PAYOFF: Yours? REPLY PLAN: This is the 75x day: the post is the prompt, the replies are the content. Respond to everything for the first 2 hours. Quote the best answer next day.",
  "shots": [
   "One question, one line",
   "Make it answerable in 10 seconds",
   "Zero setup, zero links",
   "Your first reply sets the tone"
  ],
  "overlay": [
   "your best turned no",
   "mine: Draper",
   "quote the winner"
  ],
  "caption": "Reply with the 'no' that turned into your biggest yes.\n\nMine: Tim Draper's fund passed on our deck in 2022. Led our seed in 2024.\n\nYours?",
  "cta": "Engage all; quote the best tomorrow."
 },
 {
  "date": "2026-09-14",
  "name": "Distribution decides. Product qualifies.",
  "topic": "Builder",
  "mission": "Replies",
  "format": "Short post",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Contrarian/Hard Truth",
  "framework": "Pattern Interrupt",
  "why": "Compressed thesis of his most-repeated take; quotable = repost bait. Slot: Monday builder take (reply weight 13.5).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Distribution decides. Product qualifies.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Four words each. That's the whole game.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "The shortest strategy post I'll ever write.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: Distribution decides. Product qualifies. BUILD: body per draft below. PAYOFF: Both matter. Only one compounds while you sleep. REPLY PLAN: Post the take, then reply to your own post with the strongest counterargument to seed the debate. Respond to the first 10 replies within the hour (author-engaged replies weigh 75).",
  "shots": [
   "Line 1: the take, no context",
   "Line 2-3: one proof from building Ryder",
   "Last line: the rule, quotable",
   "No link, no hashtag"
  ],
  "overlay": [
   "four words + four words",
   "product = entry ticket",
   "distribution = outcome"
  ],
  "caption": "Distribution decides. Product qualifies.\n\nYour product gets you into the tournament. Distribution decides how far you go. We spent two years acting like the entry ticket was the trophy.\n\nBoth matter. Only one compounds while you sleep.",
  "cta": "Pin the dissent; debate all day."
 },
 {
  "date": "2026-09-15",
  "name": "We raised on uncapped notes in a bull market. The same terms froze our round a y",
  "topic": "Fundraising",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Fundraising",
  "hookType": "Authority/Insider",
  "framework": "Authority Credential + Numbered Listicle",
  "why": "Fundraising series 8/8; closes with the instrument lesson. Slot: Tuesday fundraising note (bookmark authority, vault-sourced numbers).",
  "hooks": [
   {
    "t": "Primary",
    "s": "We raised on uncapped notes in a bull market. The same terms froze our round a year later.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "One instrument, two markets, opposite outcomes. Founders should study both.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Uncapped notes are a bull-market instrument. We proved it both directions.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: We raised our pre-seed on uncapped notes in a bull market. Closed fast, felt easy. BUILD: body per draft below. PAYOFF: Instruments aren't right or wrong. They're priced by the market you're raising in. Uncapped is a bull-market luxury. Cap REPLY PLAN: Pin a reply asking 'raising right now? what stage?' and answer every one. Bookmark-bait is legitimate here: end with a line worth saving.",
  "shots": [
   "Open with the number or the moment, never context",
   "Body: the real mechanics, real figures from the round",
   "Close: the transferable rule",
   "Link to nothing; the note is the asset"
  ],
  "overlay": [
   "2022: uncapped closed fast",
   "2023: same terms, frozen round",
   "recut at $12M cap → 1.93x target"
  ],
  "caption": "We raised our pre-seed on uncapped notes in a bull market. Closed fast, felt easy.\n\nA year later the same structure froze our bridge for months. Investors in a cold market wanted a number. We recut to a capped note at $12M post and closed at almost double target.\n\nInstruments aren't right or wrong. They're priced by the market you're raising in. Uncapped is a bull-market luxury. Caps are what conviction looks like when money is scared.",
  "cta": "Final series post; all 8 linked in a reply thread."
 },
 {
  "date": "2026-09-16",
  "name": "The Red Dot trophy cost $0. Winning it cost two years of unreasonable decisions.",
  "topic": "Ryder",
  "mission": "Convert",
  "format": "Short post + media",
  "intensity": "Medium",
  "niche": "Crypto / Ryder",
  "hookType": "Announcement/Proof",
  "framework": "Demo / Unboxing",
  "why": "Proof + process; converts award flex into builder authority. Slot: Wednesday Ryder proof (profile clicks weigh 12).",
  "hooks": [
   {
    "t": "Primary",
    "s": "The Red Dot trophy cost $0. Winning it cost two years of unreasonable decisions.",
    "o": "Short post + media",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The award invoice nobody publishes, itemized.",
    "o": "Short post + media",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "What 'design award winner' actually billed us.",
    "o": "Short post + media",
    "v": "same"
   }
  ],
  "script": "HOOK: The Red Dot trophy itself cost nothing. Winning it billed us: BUILD: body per draft below. PAYOFF: Against a competitor worth $1.5B, unreasonable was the only viable strategy. REPLY PLAN: Reply to the post with the product link (links in the first post cost reach). Answer every product question same-day.",
  "shots": [
   "Proof first: award, country count, or demo clip",
   "One sentence of what it means for a normal person",
   "Media attached: photo or 30s clip",
   "Product link goes in the first reply"
  ],
  "overlay": [
   "the real invoice",
   "decisions, not fees",
   "worth it, barely"
  ],
  "caption": "The Red Dot trophy itself cost nothing. Winning it billed us:\n\n• 11 industrial design revisions\n• a mold change mid-production (never do this)\n• two shipping deadlines sacrificed to finish quality\n• every argument where 'good enough' lost\n\nAgainst a competitor worth $1.5B, unreasonable was the only viable strategy.",
  "cta": "Design-decision stories in replies."
 },
 {
  "date": "2026-09-17",
  "name": "Nine years in crypto. Third crash. Here's what actually survives every cycle.",
  "topic": "Note",
  "mission": "Authority",
  "format": "Note tweet",
  "intensity": "High",
  "niche": "Builder Takes",
  "hookType": "Longform Essay",
  "framework": "Vulnerable Origin + Brutal Honesty",
  "why": "His crypto-cycles post got zeroed by the API but the topic is evergreen authority. Slot: Thursday longform note (dwell signal; account's proven 10x format).",
  "hooks": [
   {
    "t": "Primary",
    "s": "Nine years in crypto. Third crash. Here's what actually survives every cycle.",
    "o": "Note tweet",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Crash veterans list: what's still standing after three winters.",
    "o": "Note tweet",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Cycles kill narratives. They don't kill utility.",
    "o": "Note tweet",
    "v": "same"
   }
  ],
  "script": "HOOK: Nine years in crypto, third time watching everyone discover markets go down. BUILD: body per draft below. PAYOFF: Build for the fourth winter. It's coming, and it's a filter, not a verdict. REPLY PLAN: Notes earn dwell time, the quiet ranked signal. Quote-post your own note the next morning with the single best line to give it a second run.",
  "shots": [
   "First line is the whole argument",
   "Short paragraphs, one idea each",
   "One real number every 3 paragraphs",
   "End on the uncomfortable part, not the lesson"
  ],
  "overlay": [
   "third winter",
   "what survived all three",
   "build for the fourth"
  ],
  "caption": "Nine years in crypto, third time watching everyone discover markets go down.\n\nWhat survived all three winters: exchanges' failures teaching self-custody, builders who kept shipping through the silence, and products normal people could actually use.\n\nWhat didn't: every narrative that needed the price going up to make sense.\n\nBuild for the fourth winter. It's coming, and it's a filter, not a verdict.",
  "cta": "Note tweet; cycle stories in replies."
 },
 {
  "date": "2026-09-18",
  "name": "The delegation ladder: prompt → skill → agent → team. Most people are stuck on r",
  "topic": "AI",
  "mission": "Authority",
  "format": "Short post",
  "intensity": "Medium",
  "niche": "AI / Tech",
  "hookType": "Take/Education",
  "framework": "Conditional Hack + Numbered Listicle",
  "why": "Framework post; ladder graphics get bookmarked and reposted. Slot: Friday AI/tech (bookmark pillar).",
  "hooks": [
   {
    "t": "Primary",
    "s": "The delegation ladder: prompt → skill → agent → team. Most people are stuck on rung one.",
    "o": "Short post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "Climb one rung: stop prompting, start packaging.",
    "o": "Short post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Four rungs between you and an AI-run ops stack.",
    "o": "Short post",
    "v": "same"
   }
  ],
  "script": "HOOK: The AI delegation ladder: BUILD: body per draft below. PAYOFF: Most people live on rung 1 and call it 'using AI'. Climb one rung this week. The compounding starts at 2. REPLY PLAN: Reply with the exact stack/steps as a follow-up post. Answer implementation questions; each answered thread is a 75-weight event.",
  "shots": [
   "Claim with a number in line 1",
   "2-4 concrete items, no fluff",
   "Offer depth in the replies, not a link",
   "Screenshot beats description"
  ],
  "overlay": [
   "the four rungs",
   "where you're stuck",
   "climb one this week"
  ],
  "caption": "The AI delegation ladder:\n\n1. Prompt: you type, it answers\n2. Skill: you package instructions once, reuse forever\n3. Agent: it runs multi-step work unsupervised\n4. Team: agents hand off to each other\n\nMost people live on rung 1 and call it 'using AI'. Climb one rung this week. The compounding starts at 2.",
  "cta": "Rung-2 example in first reply."
 },
 {
  "date": "2026-09-19",
  "name": "From Bulacan to a Draper term sheet. The parts between are the whole story.",
  "topic": "Story",
  "mission": "Reach",
  "format": "Greentext / story post",
  "intensity": "Medium",
  "niche": "Founder Story",
  "hookType": "Personal Story",
  "framework": "Greentext Timeline + Vulnerable Origin",
  "why": "Series finale; recaps the 60 days and tees the next cycle. Slot: Saturday story (reply engine: 37-64 replies on this category).",
  "hooks": [
   {
    "t": "Primary",
    "s": "From Bulacan to a Draper term sheet. The parts between are the whole story.",
    "o": "Greentext / story post",
    "v": "none unless noted in structure"
   },
   {
    "t": "Alt A",
    "s": "The distance from my hometown to Sand Hill Road, measured in decisions.",
    "o": "Greentext / story post",
    "v": "same"
   },
   {
    "t": "Alt B",
    "s": "Bulacan → Amsterdam → Tokyo → LA → term sheet. One suitcase.",
    "o": "Greentext / story post",
    "v": "same"
   }
  ],
  "script": "HOOK: From Bulacan to a Draper term sheet. BUILD: body per draft below. PAYOFF: Day 60 of documenting this build in public. The next arc starts tomorrow. REPLY PLAN: Personal stories are the account's reply engine (37-64 replies vs median 2). Reply to every personal response personally; no copy-paste.",
  "shots": [
   "Greentext or bare timeline, one beat per line",
   "The turn: where it flips",
   "Land on today, one line",
   "Photo if it exists, nothing staged"
  ],
  "overlay": [
   "the full arc",
   "measured in decisions",
   "one suitcase the whole way"
  ],
  "caption": "From Bulacan to a Draper term sheet.\n\nThe parts between: a $5K grant, a no I said twice, a finger I left in Portugal, a $42K month, 1,800 cold emails, one DM worth $250K, and a suitcase I never fully unpacked.\n\nDay 60 of documenting this build in public. The next arc starts tomorrow.",
  "cta": "Thank the regulars by name in replies."
 }
];
