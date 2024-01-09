import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div>
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAdVBMVEUAfuX///8AfOUAeeQAd+QAc+MAdeMAcOMAbOL4+/78/f/y9/3t9P3n8PwAauLc6frM3/iUuvCzzvTF2vdbmupto+zX5fmfwvIAZuG60vU4iuepxvJ3qO0ig+Zkn+tDkOh5ru6Js+9blelKlemGru41gOU/huZNv5LVAAAJuklEQVR4nO2d15ajMAxAjQSmhxqS0Jlk5v8/cXHKbAo9gMkc7uuucyxsS7KKhwhnrBDIxwKZeZGCXGURec/oHcTQ+i+M6VPe83kP6ps3YfT8w2UhRMr1izCaix98YK6gq52FMTPkPZX3QaYEiKDtJN4zGQNpp5XCGOTzN1kJEKMUxpV5z2McZFcg2l84MQw8akTd857FWOxV4im8JzEWikecjzeYN6hD0j9yZMpDsyWf7C4/AkeS8J7DePwhUVZWVlZWVlZWVlZWVlZWVuaCDohawTLDdrhx+mdGRbKjC0yn0jAQhLRnRkEMWUJVXljoDomjshRpIfaYGIjpOUkcJUvKQyL49iUTL7jfnQ8OfjvXQdYWFhMkpqGjCzfsrvkeDA+/g4QoW4YiQNzawh1W2mnTiP7jqBNZgCKQskgXHjDzdmkAt9bjKM394q0IUCwC4Rlj1yYN0MJ8GWY5fE+O9OPqL5MSBPXQotSk59W8Dsv4ZfFBjk2tYlJsq0kNHxkUu2aYXkictpooHaqndD4CSa39pNSoH2cjD7UGUlo/Jca2ZsvQY/O4fPbFAfhpWJbL2lSqAcBCbRlohzCrOJjkVSf4CTd5OTiYRG2ylIqg+JlPrQH4h5oT/Ih3fJoUZl6XcYKX4kziiInzaiSqCdIHs/5k9Rswd/MUWsqp3b5TfidV3Ck1ObbaR1zR7O30DgGlUddlOaNHm9vQza5BJVd8B5dOrKU3vtXptNx9Yk8+b39UvJ4jBcvftM3nDUS50g1pIcBy+4vw6sO1ok+3OCD7vXbYL2YmSdnAoRPdqUsTMWg+JXocD1jRCxXG6n1R4PkC0kcYt9K57sb4d2rMdoNno3q+LPted33+TPQ1qjQwcMsz7OKsANDpajBfMbMxD05XN+QVI8ouZhPkl/t1Z7xxi2Ix2fW1EpdpbP87WYjxoE+i7cbWAQCn/jvNfHJ/xZ+Kq3/rj5wmuBHgV1+z575cTAAyt+ePBP4k4U4kvXaJ4dOqyxlNe50cewIzc5mI4nTXr7tNzSxw013La5Eyneu82Xbb82pQH88gREmsbh/FOE3paRI57HBwNLNQGjcHykVdjOoeK5u45wLpoW3PG1HY6uvS0G273GheMnnUCWjzpVm7Ny31MKPTuDhGNEvSRtw2bDWzaF+WCzRsMjrWaaYEVINzU/qE3ZNN+FV7qbCnsS6V00h2lerISvslWUSSVt8rDuGM+QDAuEIap7+Bw8R5/R3NmTnHKSbPSs0Oqyx+G0DDl6uBP3tiA/YPkzBzeeDOQDl/UATG1BGmSja738UxDuSNrymRw6/RUb2hH+VNpPjySTU7fc+FAiW9pp8Mh1vujB7ZHKxIfHtjUDFies2KOaacS6/Ecsc5r7Lvmp7PM0MLUuGFI3mDcujlPNssER1DDfIx7hyg5IFuxfzqNBBdZjp1m7y9OBLaTDXqxRBbNQZIbr6IXtRdKzv+0qa4aXmXT5kGze4snZUNzxGDlN15aCbOr9CA5o/+1G5g0Ri8hOSyuavP8PvFezfjIYEUTF5zg/m8NTR4rAocu37fHDGiXxFH06JZU+c16Q3TCXsZUCmsuYK/5NwnA6E+CuCdui+OiKfaG6sVz3NwkDRljnT32E2vgXxs+h3T6VO6OhQaBs0hL9PpUphEsaUyQj9Mbz+VY2uoWAuOrR6BfGz5JCyU2FSzNgb7vFOaJmqJaCqdcr3aWD5s9SRoW13WL2n9yQHJ7/orxXTODXYJNN/wwmrThxD2yIy4E9lPgJogVw2sauzluwL+tBbPPX6TSd74AVL0quMpsWPyXG9G4r4552A7vsXBxO2fyNfdxyftqD+guMEcPSQoDcydW7v/3T4UdoOKPNSRDw4OLAFiObR0c/6wsEmDoUUawahFDdAvN/vAJUB4H+jrjT7uSz8A3axlJWauKPnwehUh+h5TFAb9Gb44gvfGWLMyBf8mKOVDN0qQZQPqAM9o7kQxATkcVmflJZQmw9YmmK6GFqWKbpk2VJfd164xtn4YbjJlHF0OWzPnT+iOzEQph/Yo77hgxxMH0ZCeejkkVsxkSdmTcHK/uigjmnRZLtA+RXB26c+AmJtmXt6CaefqeeFcqTZHFABJUyHAA+esseQY1ywSZl3vQ4YzV7QJ6lLnz0QJErhWmmueAsxd7SSLfZyxhQbEDhWomlNaO1R+/6O5R1as0sGTmCUycy/OviKB/4CxVVgs527uGqtEUbZtpteC+R+QlcPGHgcrlMsFfKx9UOPyk8tZ40VAL/Y8khooNfSQBCAS/H4+WqrzjY09Dro9aUSmCamujlw9UCQYui9Lp7mlfkN6qNEfliPyS9HSxKnaM8aOHf3KTEGpqJgaqFxT/XDk2nsOtCInYZ2YhaxrhAi2zI6eXv/VyhPejec0iZ+0dMCy+Up9KNksFObhPB+c6GtmhVwFYPgQbPWY1d80+ch6tGfewMMuNPznsBQnkKT/j8AByhMuNzthmi2X/4ncv9TwvYhnNIBdavH7dnKYwy8lrSEli1XGKrdqbeNcxChyfwVfig4sCguyzwTQWP8ebbXxbP5pKc0mZbpbi9jNGCGOeL+jITmaGrMXTShxdSOUCIDT6YagF8C8AV0734yBPQ9y4P0OvsSmfmA1syCz3DkmUceYlMraYsQwYhuuVImlwliGMIJR/FDWi1k6lp0zOKwlpXR5JGAJ9PMo7n+h4CJMeVs594nLaa87tX0uVaM/V5u0kJURWJ94QpW+3U9WrABNbw7ecoQR1MDv14nNMBxx9/sB+AtzV8VjDAgRqnetNNyFgYGhygoM/n+iAOT2yoBO7DgVND+C+25msgk1QN577IaceG+Jo5rxZgl+5gWk8eAcH9PqhLdX9khp+Qa22OuHKbJJ71FeoDu8j/OKnS9sWS6IZNtbTRvFoK6bOaBhz0yh26NFbXYAwh4PbVjpQu79dYD41VERqMWCV+UGyp0qhrz3GwhmQSZtic/yrjxhO/m4tNXJmDsuTXJDoWJ9BZNxyD7tb6tJx+q+cs3Lh7zrzBmEbcX7dJbTtZF7YWDyXMukRl/Lef+3JwA/D+9lBEuJjg8D7suHY1hEdPwNQL4maQ9TV8PPgkRdTQs+Th3XALKfc2iLm4o/JMrKysrKysrKysrKysrKysoCSHhPYDwSMmrbMFcgI9u/EGc8g1vifGaGoQJpR7w/EjYlRLGJtuc9ibHYaETj+kLiiKCvEf6VkSMhHwQiGMmfUM6QGKUwWsS9O2IMpEgrhRHM4x9IOIhHU2DCCO68f75uCuDcWcSEUYuPN5z0/GgSOReAbD9cmmv/EblU5oz7h4TmBr8uxRP/AJSOgS5jm/d6AAAAAElFTkSuQmCC"
            alt="logo"
            className=""
            height={40}
            width={40}
          />
        </div>
        <h1 className=" font-bold text-xl">Dropbox</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        <ThemeToggler />
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
