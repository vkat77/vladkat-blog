---
title: "Making Sense of Funnel Analysis"
date: "2026-02-20"
category: "analytics"
excerpt: "Funnel analysis is one of the most powerful tools in a data analyst's kit — and one of the most frequently misread. Here's how to do it right."
---

Funnel analysis answers a simple question: of everyone who did step A, how many went on to do step B, C, and D?

Simple question. Remarkably easy to get wrong.

## The common mistakes

**Mistake 1: Wrong window**

Every funnel has a conversion window — the time period in which someone is "eligible" to complete the funnel. If you're looking at a free-trial-to-paid funnel and your trial is 14 days, your window is 14 days. If you analyze after 7 days you'll undercount conversions. If you use a 90-day window you'll overstate them by including people who converted much later and may not be in-funnel users.

**Mistake 2: Ignoring re-entry**

Can users enter the funnel more than once? An e-commerce checkout funnel — yes, constantly. A onboarding funnel — probably not. Your analysis needs to decide: do you count the user once (first attempt) or per attempt?

**Mistake 3: Confusing drop-off with failure**

If 60% of users drop at step 3, that's a finding, not a conclusion. Users drop for many reasons: they completed their goal elsewhere, the step is confusing, the step is optional and they're skipping it legitimately. Drop-off is where you start asking questions, not stop.

## The right way to read a funnel

I like to look at three things together:

1. **Step-level conversion rate** — what % make it from step N to step N+1
2. **Time between steps** — are users stalling? A long median time between steps can signal confusion or friction
3. **Segment breakdown** — does the funnel look different by acquisition channel, device, or user cohort? The overall rate is often hiding something interesting in the segments.

## One practical tip

Export your funnel data and look at the *distribution* of time-to-convert, not just the median. A bimodal distribution (lots of fast converters AND lots of slow converters with a gap in the middle) usually means you have two distinct user types — and those two groups probably need different things from your product.

Funnel analysis is where you find the leaks. But finding the leak and fixing the leak are two different problems.
