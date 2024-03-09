// const navItems = ["Home", "About", "Contact"];

export const navItems = [
  {
    label: "Home",
    link: "/",
    both: true,
  },
  {
    label: "Login",
    link: "/login",
    auth_required: false,
  },
  {
    label: "Signup",
    link: "/signup",
    auth_required: false,
  },
  {
    label: "Donor",
    link: "/donor",
    auth_required: true,
  },
  {
    label: "Reciver",
    link: "/reciver",
    auth_required: true,
  },
];
