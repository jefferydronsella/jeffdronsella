# JeffDronsella.com made using React + TypeScript + Tailwind + Next JS

This website was made as an excercise in programming in React using TypeScript, Tailwind CSS and Next JS.

## What went well

I found that the basic site structure and styling were pretty easy to achieve in Next JS with React and Tailwind by just creating the directory structure to match the routes.  Since the website is very simple I didn't need to use any of the more advanced features of React or Next JS.

## Challenges

Deploying this thing was pretty difficult.  Since I am using GoDaddy for hosting, I was not able to take advantage of the ease of deployment with something like Vercel.  I changed it into a static site and was required to make a few modifications to fix the image URLs and such.  Once built, the output folder was a mess of folders and files.  Some of the folders changed names when I made changes and rebuilt.  I did get it deployed and working after a few tries.

## Conclusion

Next JS makes routing easy.  Finding a file by name is a bit tricky due to every page being called page.tsx, but you get used to just looking at the directory structure instead of the file name.  I can see where this would be useful if you have a larger site with complex routing needs.  For my simple site, it was definitely overkill.
