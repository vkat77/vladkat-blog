---
title: Product Metrics That Actually Matter
date: 2026-03-10
category: analytics
excerpt: Most product teams track too many metrics and act on too few. Here's
  how I think about cutting through the noise to find the signal that drives
  real decisions.
---

Most product teams I've worked with have the same problem: a dashboard full of metrics and no idea which ones to care about.

## The core question

Before you instrument anything, ask: *what decision would this number help me make?*

If you can't answer that immediately, you probably don't need the metric. Metrics exist to drive decisions. A number that lives in a dashboard and never changes a roadmap call is just decoration.

## The three tiers

I think about product metrics in three tiers:

**1. North Star Metric**
One number that captures the value your product delivers to users. For a content platform it might be weekly reading time. For a SaaS tool, it might be tasks completed. This is the number the whole team aligns on.

**2. Input Metrics**
The 3–5 things that most directly move your north star. These are what PMs and engineers actually track week to week. If your north star is weekly reading time, your inputs might be: email open rate, search-to-read conversion, and mobile session depth.

**3. Health Metrics**
Things you monitor to make sure you're not breaking something. Load time, error rate, support tickets. You only look at these when they spike.

## The trap

The trap is treating health metrics like input metrics. You start optimizing for load time (good!) until it crowds out feature work that would actually move the north star. Or you start treating input metrics as north stars and you game them — more push notifications drives opens, but destroys long-term retention.

## What this looks like in practice

At the start of every quarter, I try to do a one-page writeup: here's our north star, here are the 3 inputs we're betting on, here's why, and here's what "moved" looks like in numbers. It forces you to be concrete before the quarter starts, not after it ends.

It's a simple framework, but simple is what gets used.
