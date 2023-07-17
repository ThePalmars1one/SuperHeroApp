# SuperHeroApp
This project is made using the SuperHero Api, if you want to make a similiar project, [here you go](https://superheroapi.com/ "here you go"):

## How to clone the repository?
First, in order to use the project correctly it is necessary to use the following command to correctly access the project folders.

git clone https://github.com/ThePalmars1one/SuperHeroApp.git

## How to deploy the project locally?
In order to view the project via localhost, the following command is required to install all the necessary dependencies:

npm install

## Service

<p align="center">
<img src="https://i.postimg.cc/mkF6S7ks/service.png">
</p>

In this case we work with an async function, in which an array is created to store the heroes obtained by calling the api that brings each object individually with a "for" cycle, converts them to JSON format which makes it easier to work with the data and finally with the push() method the information is added to the initial array.

## Search Bar

<p align="center">
<img src="https://i.postimg.cc/JnvcqnsV/search-Bar.png">
</p>

For the Search Bar the ngModel directive was used so that the information entered is updated in real time in the component and with the following filter if the search bar is empty, the array is kept intact but if it finds the hero, it updates the array with the match.

<p align="center">
<img src="https://i.postimg.cc/BZ7RrcK4/filter-Search-Bar.png">
</p>

## Filters
It works with several types of filters such as powerstats, gender, etc. Most of them have a similar structure that consists of obtaining the category to which each hero belongs, and dynamically generating the options of the drop-down menu.

<p align="center">
<img src="https://i.postimg.cc/qvcrH6rw/gender-Heroes.png">
</p>

<p align="center">
<img src="https://i.postimg.cc/TYg1hwGL/gender-Filter.png">
</p>

## Buttons
This is the structure with which the HTML generates the drop-down menu buttons depending on the number of results you get from the main array. For example, if the category powerstats has "intelligence" and "power" as elements, two options are generated.

<p align="center">
<img src="https://i.postimg.cc/sfPbXdqf/gender-Button.png">
</p>

## Heroes Card
The following structure is used to generate the cards for the heroes.

<p align="center">
<img src="https://i.postimg.cc/cLvDfV9n/heroCard.png">
</p>

What initially looks like a "Pipe" is part of the library used to limit the heroes that can be seen per page, this library is called "ngx-pagination", the elements of the "paginate" do the following:

itemsPerPage: The number of items to display on each page.
currentPage: The current (active) page number.
totalItems: The total number of items in the collection

With the following structure we can access the heroes' information

<p align="center">
<img src="https://i.postimg.cc/Hk0rvLhD/powerstats.png">
</p>

## Arrays
Empty arrays where the values are stored:

<p align="center">
<img src="https://i.postimg.cc/T2rh31Ty/arrays.png">
</p>