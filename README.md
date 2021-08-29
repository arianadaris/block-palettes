# block-palettes
This is a recreation of a [Minecraft Block Palette generator](https://www.blockpalettes.com/) website, which allowed me to gain experience with NodeJS, Express, MongoDB and REST API. *This website was not my original idea, and I do not take credit for it!*

I began this project with the intention of testing my HTML/CSS skills, but then decided to add true functionality by using NodeJS and MongoDB. Using a Python script, I generated 500 random Minecraft block palettes based on color, and uploaded them to a MongoDB collection. Using HTTP requests, I am now able to successfully search, retrieve and even save palettes.

Below are images of the website as of August 29, 2021.

# Home Page
![indexHTML](https://user-images.githubusercontent.com/73635827/131243693-81399417-4632-4ffb-9a5f-9da806e0cb7e.png)

# Palettes Page
![palettesHTML](https://user-images.githubusercontent.com/73635827/131243701-6361b58c-df08-4d7c-95a6-d5f9e28e0b19.png)

# Saved Page
Saved Page with Saved Palettes

![savedHTMLSaves](https://user-images.githubusercontent.com/73635827/131243708-8754302d-c231-4a05-820f-a07100017f18.png)

Saved Page without Saved Palettes

![savedHTMLNoSaves](https://user-images.githubusercontent.com/73635827/131243711-1f9c633e-dd5f-440f-a214-c0a31d03868a.png)

# About Page
![aboutHTML](https://user-images.githubusercontent.com/73635827/131243716-03e79352-ca74-4194-bdf4-37429f1bbb4b.png)

The website includes a few animations as well which are not showcased in the above screenshots.

# August 29 Update
As of August 29, I have yet to complete the Generate page. The visual aspect has yet to be solidified, as well as the functionality. This page would allow the user to create their own palettes by showing images of Minecraft blocks which they can select to appear in the palette. Then, the user would be able to upload the palette to the database so all users can view it. They would also be able to save the palette to their personal Saved palettes list.

Ultimately, I would love to implement a Member system. Currently, I have the database set so I personally can save and view palettes. However, I am interested in creating a system where multiple users can log in and save their own palettes.

### Disclaimer
*Again, I do not take credit for the idea of this website. This project is a personal recreation of [this website](https://www.blockpalettes.com/) with the strict intention of learning about web development and gaining experience.*
