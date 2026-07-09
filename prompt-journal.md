# Prompt Journal

Log your Copilot prompts here as you work. This is your record of the prompting process — not just what worked, but what didn't, and how you iterated.

**There are no wrong answers here.** The goal is to practice prompt writing and reflect on it honestly.

---

## How to fill this in

For each entry, note:
- **Where** you used Copilot (inline chat, Ask mode, Edit mode, Agent mode, inline completion)
- **What you asked** (copy/paste the prompt if you can)
- **What you got** (brief summary — did it work? was it close? way off?)
- **What you changed** (did you refine the prompt? edit the output manually?)

---

## Phase 1 — Setup & Orientation

### Entry 1
- **Feature/task:** Updating name and tagline
- **Copilot feature used:** Used Ask mode
- **Prompt:**
  > Under the hero section in index.html, I want to update the tagline to include both my real name (Amari Gray) and a tagline that would best fit my interests.
- **Result:** Provided the updated code for the hero section, but did not actually change the tagline, just updated the name.
- **What I changed or did next:** I gave it some information about myself so that it will improve the tagline to better fit my interests 

---

## Phase 2 — Guided Tasks

### Entry 2 — About section
- **Copilot feature used:** Used Ask mode
- **Prompt:** 
  > Adjust it further, I want to include some more of my actual hobbies (gaming, reading fiction books, american football)
- **Result:** Updated the about me section and included some of my actual hobbies.
- **What I changed or did next:** 
I then asked it to improve the bio some more and to change how it wrote about my interests. I also had to play with the chat and get it to include my headshot and that required a few fixs (atleast on my end) to get my headshot on there properly.
---

### Entry 3 — Projects
- **Copilot feature used:** Used Ask mode
- **Prompt:**
  > Since, I currently do not have live demos or github repos for all of the projects that I have done, rather than include those things in the projects. I want to include the posters from each of the projects that I have done. How would I go about doing that?
- **Result:** Gave information on how to include the posters in the project cards
- **What I changed or did next:** What I am doing next is trying to add a feature to expand the posters each time a user clicks on it. Which is what I have been talking with copilot about for a while.

---

### Entry 4 — Dark mode
- **Copilot feature used:** Inline chat 
- **Prompt:**
  > How to actually implement the dark mode toggle on the website. As of right now, it is just a button that does nothing. (After using both starter prompts)
- **Result:** The initial code to make the function for dark mode toggle was wrong, after using the prompt above copilot gave the correct code to change the dark mode.
- **What I changed or did next:** No other changes were needed. The dark mode toggle was implemented after the prompt was used.

---

### Entry 5 — Responsive layout
- **Copilot feature used:** Ask mode/ Agent mode
- **Prompt:**
  > Improve the responsive styles in this CSS file for screens under 600px. The nav links should stack or hide, the hero text should be smaller, and the projects grid should be single-column
- **Result:** When used in agent mode, it said that changes were made but nothing was actually changed in style.css
- **What I changed or did next:** Did the exact same prompt but in ask mode and it gave me the proper changes that I asked from it. 

---

## Phase 3 — Independent Feature

**Feature I chose:** Animated hero heading typing effect

### Entry 6
- **Copilot feature used:** Inline chat
- **Prompt:**
  > I want to add an animated typing effect to the hero heading. 
- **Result:** Provided a typing effect but was only for my name and not for the entire heading. 
- **What I changed or did next:** Asked it to make the typing effect for the entire heading and made it keep the color difference between my name and the rest of the heading.

### Entry 7
- **Copilot feature used:** Agent mode
- **Prompt:**
  > I want to add an scrolling animation such that elements fade/slide in as the user scrolls down.
- **Result:** Provided the proper code to implement the scrolling animation. It worked as intended.
- **What I changed or did next:** I did not provide any other changes or did any more prompts for this feature.

### Entry 8 — A prompt that didn't work well
- **Copilot feature used:** Plan mode, Agent Mode
- **What I asked:** Add modal windows for the posters in my projects section. When a user clicks on a poster, the poster should expand to a larger view.
  > 
- **What went wrong:** Originally, i was using copilot free and the code that was generated was not correct and had bugs.
- **How I fixed it (revised prompt or manual edit):** Fixed it by using copilot student and first asking it to review the previous code in plan mode and then generating the correct code in agent mode.

---

## Reflection

**1. What feature are you most proud of?**

The feature I am most proud of is the modal window for my posters in the projects section. I was worried I was not going to be able to get it to work properly but after a few prompts and edits, I was able to get it to work properly.

---

**2. Describe a time Copilot gave you something wrong or unhelpful. What did you do?**

I scrapped it but I was trying to add symbols to all of the skills in the skills section. I was not giving me what I wanted. I want the logos for each skill next to the skill but instead I got bullet points and when I used another prompt to rectify that I got random emojis. So I scrapped it and left the skills section as it was.

---

**3. What did you learn about writing better prompts?**

A prompt worked well when I gave it a lot of context and did not give an overly long prompt. I also learned that if what I asked for was not what I wanted, I can keep on prompting it until I get what I want. I don't have to completely scrap the chat and try again.

---

**4. What's one part of the codebase you now understand better than at the start?**

The script.js file. I dont use javascript often and was unsure of what I was looking at, but after using it to add my skills and my projects I was able to understand what the file was doing and how it was being used in the website.

---

**5. What would you build or improve next?**

Maybe play with adding more tabs. I would also improve it more to showcase more of my personality. The website still resembles the template that was given. I want to make the website to be more of my own.