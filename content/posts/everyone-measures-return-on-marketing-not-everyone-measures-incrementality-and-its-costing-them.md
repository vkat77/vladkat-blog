---
title: Everyone measures return on marketing. Not everyone measures
  incrementality - and it's costing them.
date: 2026-04-02
category: analytics
excerpt: xyz
---
Your marketing is "working." But would those sales have happened anyway?                                             

That's the question most growth teams never ask. And it's costing them.                                            

Here's the thing about attribution: it tells you who converted *after* seeing your ad. It doesn't tell you whether the ad *caused* it. A customer who was already going to buy just made your ROAS look great.                                

Incrementality measurement fixes this. It asks: what would have happened if we hadn't spent at all?                  

   

\---                                                                                                                  

  The tool most teams reach for: A/B testing

                                                                                                                       

  Split your audience. Expose half to the campaign, hold the other half back. Measure the gap.

                                                                                                                       

  Clean. Defensible. The gold standard — when you can pull it off.                                                     

                                                                                                                       

  The catch? You can't always randomize. Brand campaigns, out-of-home, influencer, market-level launches — there's no  

  clean holdout. And even when you can split an audience, social spillover and shared households blur the lines.

                                                                                                                       

  So what do you do when A/B isn't an option?                                                                          

   

\---                                                                                                                  

  Enter the synthetic control

                             

  The idea is surprisingly intuitive: build a *virtual twin* of your treated market.

                                                                                                                       

  Before the campaign, you find a weighted combination of untreated markets or segments that collectively mirror your  

  treated market as closely as possible. Then you launch. And you watch what happens.                                  

                                                                                                                       

  The chart below shows exactly this. Before the campaign (left of the dotted line), the two lines are nearly identical

   — that's the twin doing its job. After launch, they diverge. That gap is your estimated incremental lift.

                                                                                                                       

  *\[attach chart here]*                                                                                                  

   

  What you're really asking is: "What would this market have looked like if we'd done nothing?" The synthetic control  

  is your best answer when you can't run a proper experiment.

                                                                                                                       

\---             

  When to use which

                   

  Use A/B when you can randomize a meaningful audience and have 2–4 weeks to reach significance.

                                                                                                                       

  Use synthetic control when you're measuring a market launch, a channel turn-on, or any intervention where withholding

   the treatment from a random subset isn't practical. It also works retroactively — you don't need to have planned for

   it upfront.                                                                                                         

                  

  Can't do either cleanly? Geo holdouts and media mix modeling are worth knowing, but that's a separate post.          

   

\---                                                                                                                  

  Why this matters for budget decisions

                                                                                                                       

  Here's a real pattern that plays out more often than anyone likes to admit:

                                                                                                                       

  A channel shows 8x ROAS in your attribution tool. Finance loves it. You scale it.                                    

                                                                                                                       

  You run a synthetic control. True incremental ROAS: 3.5x.                                                            

                  

  The gap — the revenue you were double-counting as marketing-driven — was organic. It would have happened without the 

  spend.          

                                                                                                                       

  That's not a reason to kill the channel. It's a reason to right-size it, and redeploy the excess toward channels with

   tighter incrementality evidence.

                                                                                                                       

\---             

  How to actually run one

                         

  Start simple. Pick one channel or one market where you have a clean intervention date and at least 6 months of

  pre-period history.                                                                                                  

   

  Build your control pool from similar markets or segments — comparable in size, seasonality, and baseline trend. The  

  test: your synthetic twin should track your actual market within about 5% before the campaign. If it doesn't, your

  controls aren't right yet.                                                                                           

                  

  After launch, measure the gap. Aggregate it over the campaign window. Translate the lift into revenue, CAC, or ROAS  

  in whatever unit your stakeholders care about.

                                                                                                                       

  Then stress-test it. Run the same analysis on a period where nothing happened. If you still see a "lift," your method

   has a problem.

                                                                                                                       

\---             

  A few things to watch for

                                                                                                                       

  The pre-period fit is your credibility. Always show it. A synthetic control with a sloppy baseline isn't measuring

  incrementality — it's measuring noise.                                                                               

                  

  Don't pick your controls after you've seen the results. The whole point is an unbiased comparison. Cherry-picked     

  controls produce the answer you wanted, not the one you need.

                                                                                                                       

  If something big happened in your treated market after launch — a competitor pulled out, a macro event hit — your gap

   isn't all campaign. Be honest about that in your read-out.

                                                                                                                       

  And finally: this is a directional tool, not a laser. Present a range. "Lift was likely between 12–19%" is both more 

  accurate and more credible than a single point estimate.

                                                                                                                       

\---             

  The bottom line

                 

  Attribution tells you a story. Incrementality tells you whether it's true.

                                                                                                                       

  You don't need a data science team to start. You need one clean test, a good control pool, and the willingness to ask

   an uncomfortable question.                                                                                          

                                                                                                                       

  What does your channel mix look like when you take away the organic credit?                                          

   

\---                                                                                                                  

  *Running incrementality studies at your org? Or still figuring out where to start? Drop a comment — happy to dig into* 

  *specifics.*
