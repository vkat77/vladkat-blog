---
title: Building Data Products in the Age of AI
date: 2026-03-30
category: technology
excerpt: TBD
---
I find that there is a lack of common understanding on what a 'data product' means in today's rapidly shifting landscape.\
\
Let's start with a premise for a generic *product*: it is something made for a *customer* to address a *need*. \
\
Given that data underlies so much of what we do, it's not always clear what the product is. The traditional view has been focused on components: models, pipelines, dashboards, etc. \
\
In the age of AI, managing a data product means managing the entire value chain from data production to the decisions it drives. In other words, the data professional's job is shifting from building *components* to building decision-making capabilities *and* (critically!) driving their adoption. Your product is no longer an engine or a car dashboard - though they are certainly necessary. Nor is it the car itself.  It is getting the user (your stakeholder) *to their destination* fast and safely. To state the obvious that requires knowing what their destination is, which ongoing conversation and course correction.  \
\
As I reflect on what it means to be a data professional today, I see four broad functions that are rapidly converging. 

* **D**elivery: data modeling, transformation, computation, storage, pipelines, validation. Everything needed to get data fast and accurately from where it's generated to where it is consumed. The traditional function of the Data Engineer. dbt is a common tool. 
* **A**nalysis: an essential bridge from data to action. Though it must be technically enabled, a lead analyst at its core is less a technical role and more one of relationship management - defining analysis parameters serve stakeholder objectives. While Python and BI tools certainly have their place - the basic tool of Analysis is still the old fashioned Analysis Brief based on an in-depth stakeholder interview.
* **T**ooling: Creating effective UX around self-service extraction of meaning from data. It may mean dashboards, it may mean embedding semantic AI-enabled capabilities, or effective processes for collaboration between stakeholders and analysts.
* **A**/B Testing: The most effective way of establishing causal inference.  This is the holy grail of continuous discovery - finding X that drives Y \[north-star metric] This is largely a program manager, orchestrator function sitting at the intersection of technology, people \[culture], and data science \[stats]. 

These four functions have always existed in some form, but they tended to live in silos - a classic hand-off waterfall model, with maybe some (limited) overlap. What has changed is that previously data teams have been tasked with building capabilities to be handed off - either to downstream data teams or to the end-user. The new model is building solutions where the last mile (adoption, iteration, and impact measurement) is core part of the product itself. 

Let's use an example. \
\
Let's say you are a lender. Your job is price risk and set rules around who to target for lending, at what price, and up to what credit line. It is a classic classification problem. Recognize customers who are likely to both take your loan offer, and repay. Within that binary classification, there may be further gradations - customers you want to target via marketing campaigns, and further attract via incentive offers. 

First off, the basic truth is that data is deeply embedded in all business functions of the C-suitee. Product, Marketing, Finance, Technology, People - all run on data. That's baseline 'data literacy' requirement of any functional leader, and the bar is only going higher.
