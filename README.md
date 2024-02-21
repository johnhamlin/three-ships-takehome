# John Hamlin's Three Ships Take Home

I had fun writing this!

I look forward to discussing my code and design decisions with the dev team!

## Viewing the Finished Project

I deployed this app on Vercel, so you can see it in action at [three-ships-takehome.vercel.app](https://three-ships-takehome.vercel.app/). Be sure to play with the filters (especially Sort by Distance) to see the ✨animation✨ when the list reorders.

**📱 Open it on your phone too! I adapted the design for mobile 📱**

## Technologies Used

- ⚛️ Next.js / React
- ✈️ Tailwind CSS
- 💫 Framer Motion
  - Animate reordering of cards when the user filters them
- 🎈 Floating UI
  - Mobile-friendly popover for more information on the ℹ️ icon
- 🔽 React Select
  - To build complex and reactive filter dropdowns
- 🗄️ useReducer / useMemo
  - Efficient and scalable state management for filtering the list

## Running Locally

To run on your own machine, clone this repo, install the dependencies and start the dev server.

```SH
git clone https://github.com/johnhamlin/three-ships-takehome.git

cd three-ships-takehome

npm install

npm run dev
```

## Notes

- The flame icon for the popular badge is the closest one I could find. In a real setting, I'd ask the designer for the exact icon.
- Running in dev mode, React Select throws an error in the console due to a bug in the library that needs to be updated to work with Next.js. The error doesn't appear in production, so the client wouldn't see it.
