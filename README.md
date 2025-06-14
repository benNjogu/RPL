# RPL

A landing page for RPL.

/_ Footer _/
footer {
background-color: var(--white);
}
.footerContainer {
width: 100%;
padding: 70px 30px 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
max-width: var(--max-width);
margin: auto;
}
.socialIcons {
display: flex;
justify-content: center;
}
.socialIcons a {
text-decoration: none;
padding: 10px;
background-color: white;
margin: 10px;
border-radius: 50%;
height: 56px;
}
.socialIcons a i {
font-size: 2em;
color: black;
opacity: 0, 9;
}
/_ Hover affect on social media icon _/
.socialIcons a:hover {
background-color: #111;
transition: 0.5s;
}
.socialIcons a:hover i {
color: white;
transition: 0.5s;
}
.footerNav {
margin: 30px 0;
display: flex;
flex-direction: row;
justify-content: space-between;
}
.hash-tags ul {
flex-direction: column;
list-style-type: none;
}
.hash-tags li {
margin-bottom: 8px;
}
.hash-tags li:first-child {
font-weight: bold;
font-size: 1.1em;
margin-bottom: 6px;
}
.contacts ul {
flex-direction: column;
list-style-type: none;
}
.contact-icon {
color: #be000a;
margin-right: 8px;
font-size: 1.2em;
}
.contact-list li {
margin-bottom: 8px;
}
.contact-list li:first-child {
font-weight: bold;
font-size: 1.1em;
margin-bottom: 6px;
}
.footerNav ul li a {
color: #0000ee;
/_ margin: 20px; _/
text-decoration: none;
font-size: 1.3em;
opacity: 0.7;
transition: 0.5s;
}
.footerNav ul li a:hover {
opacity: 1;
}
.footerBottom {
background-color: var(--white);
padding: 20px;
text-align: center;
}
.footerBottom p {
color: var(--text-dark);
}
.designer {
opacity: 0.7;
text-transform: uppercase;
letter-spacing: 1px;
font-weight: 400;
margin: 0px 5px;
}

@media (max-width: 700px) {
.footerContainer {
flex-direction: column;
}
.footerNav {
flex-direction: column;
}
.footerNav ul li {
width: 100%;
text-align: center;
margin: 10px;
}
.socialIcons a {
padding: 8px;
margin: 4px;
height: 52px;
}
}
