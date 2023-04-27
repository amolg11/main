import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const navLinks = [
  { id: 1, href: "ttps://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    title: "saving money",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    title: "endless hiking",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    title: "amazing comfort",
  },
];

export const tourData = [
  {
    id: 1,
    duration: "6 days",
    price: "2100",
    location: "Australia",
    icon: "fas fa-map",
    title: "Australia Adentures",
    text: "Backroads tours around the world Enjoy the journey",
    image: tour4,
  },
  {
    id: 2,
    duration: "4 days",
    price: "200",
    location: "Nepal",
    icon: "fas fa-map",
    title: "Snow Himalaya",
    text: "Backroads tours around the world Enjoy the journey",
    image: tour3,
  },
  {
    id: 3,
    duration: "1 day",
    price: "10",
    location: "Srilanka",
    icon: "fas fa-map",
    title: "Ravana Lanka",
    text: "Backroads tours around the world Enjoy the journey",
    image: tour2,
  },
  {
    id: 4,
    duration: "3 days",
    price: "2200",
    location: "Europe",
    icon: "fas fa-map",
    title: "Western landing",
    text: "Backroads tours around the world Enjoy the journey",
    image: tour1,
  },
];
