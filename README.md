# Louise X vault

An X (Twitter) performance dashboard and 60-day content plan for [@louiseivan](https://x.com/louiseivan), built on the same architecture as [louise-creator-vault](https://github.com/louiseivan/louise-creator-vault) — but ranked the way X's own open-source algorithm ranks.

Static site. No build step. Open `index.html` and it runs.

## The three sources

**1. The open-source algorithm.** From the published heavy-ranker weights in [twitter/the-algorithm](https://github.com/twitter/the-algorithm) (Apr 2023): like 0.5 · repost 1.0 · reply 13.5 · profile click 12.0 · reply-engaged-by-author 75.0 · negative feedback −74 · report −369. The Grok-era release ([xai-org/x-algorithm](https://github.com/xai-org/x-algorithm)) replaces hand-tuned weights with a learned transformer but keeps the same signal families. Practical translation: one reply you respond to ≈ 150 likes. The whole plan is reply-first.

**2. The pre-flight check.** Every draft gets scored at [willitgoviral.xyz](https://willitgoviral.xyz/) before posting. Under 60, rewrite the opener. Links always go in the first reply, never the post.

**3. The account's own archive.** A full year of posts (Jul 2025 – Jul 2026, 405 posts) pulled from Typefully via Composio, with engagement metrics joined from the X analytics export where its window (Jan 13 – May 21, 2026, 200 posts) overlaps. Classified into 8 niches. Findings: longform note tweets run 10x the account median (top post 21.8K impressions), greentext timelines proved out twice, and personal stories are the reply engine (37–64 replies against a median of 2).

## Sections

Overview · Graph view · Niches · Formats · All posts · Playbook (the algorithm weights and what to do about them) · 60-day content plan (Jul 22 – Sep 19, one post per day, full drafts included)

## Cadence

| Day | Pillar | Algorithmic reason |
|---|---|---|
| Mon | Builder take | Replies weigh 13.5 |
| Tue | Fundraising note (8-part series, real numbers from three real rounds) | Bookmark authority |
| Wed | Ryder proof | Profile clicks weigh 12 |
| Thu | Longform note | Dwell time; the account's proven 10x format |
| Fri | AI / tech | Bookmark pillar |
| Sat | Story / greentext | The reply engine |
| Sun | Community question | Author-engaged replies weigh 75 |

## Project structure

```
index.html      layout and sections
css/style.css   theme (shared with the creator vault)
js/data.js      405 classified posts: full year via Typefully, metrics from the X analytics export
js/plan.js      the 60-day plan, one const
js/app.js       aggregation, charts, graph engine, table, playbook, plan calendar
data/*.csv      the raw X analytics exports
```

## Updating the data

Export fresh analytics CSVs from X, drop them in `data/`, and regenerate `js/data.js` (the classifier lives in the repo history). The post inventory refreshes from Typefully via Composio (social set 217350, status=published). Followers and date ranges are set in `js/app.js`.
