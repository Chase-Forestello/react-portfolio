# An updated and more modern verison of my [original portfolio], built using React!

https://chase-forestello.github.io/react-portfolio

Using gh-pages dependency to deploy on GitHub. Having some hiccups with routing due to the nature of gh pages.

#TODO:

<ul>
  <li>Remove unnecessary animations</li>
  <li>Cohesive Styling</li>
  <li>Custom domain</li>
</ul>

Main features/skills learned:

<ul>
  <li>React.js</li>
  <li>React router</li>
  <li>General react structure/workflow</li>
  <li>SCSS</li>
  <li>Animate.js</li>
  <li>And hopefully an email library of some kind</li>
</ul>

## Solution for gh-pages SPA routing 404's:
<ul>
  <li>Install shx (for cp command)</li>
  <li>Add this to your build script: "build && shx cp build/index.html build/404.html"</li>
</ul>
This will add a 404.html file to your build that is a copy of your static index.html and prevent the gh-pages 404 on subpage refreshes. 

[original portfolio]: https://chase-forestello.github.io/portfolio/
