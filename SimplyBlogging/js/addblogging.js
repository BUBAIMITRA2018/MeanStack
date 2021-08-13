import blogger from "./blogger.js";


let listOfObjects = [];



const validate =
    function valid() {


        let title = document.getElementById("title").value;



        let textarea = document.getElementById("textarea1").value;



        let image = document.getElementById("myimage").value;
        alert("Welcome to External JS file 4")

        var obj = new blogger(

            title,
            textarea,
            image

        );

        listOfObjects.push(obj);


        // let main = document.querySelector(".maincontent");


        // grid(main, listOfObjects)

    }

const main = document.querySelector(".maincontent");

const form = document.getElementById('add-blog-form');
form.onsubmit = validate;
document.getElementById("save")
    .addEventListener('click', function() {

        let container = document.createElement("div");
        container.id = "maingrid";

        container.className = "container";
        main.appendChild(container);
        let maingrid = document.getElementById('maingrid');
        let keys = Object.keys(listOfObjects);
        let len = keys.length;

        for (var i = 0; i < 2; i++) {
            let row = document.createElement("div");
            // row.classList.add('row row-cols-auto');
            row.className = "row";
            row.id = "row" + i;
            maingrid.appendChild(row);
            let roww = document.getElementById('row' + i);
            for (var j = 0; j < 2; j++) {
                let box = document.createElement("div");
                box.className = "col";
                // box.classList.add('rightcolumn');
                box.id = "col" + j;
                roww.appendChild(box);
                let h1 = document.createElement("H1");
                h1.setAttribute("style", "color:black;font-size:24px;");
                // h1.setAttribute("class", "blogheading");
                let h1id = "h1" + j;
                h1.setAttribute("id", h1id);
                let xContent = document.createTextNode("IT is cat");
                h1.appendChild(xContent);
                box.appendChild(h1);

                let p = document.createElement("P");
                p.setAttribute("style", "black:black;font-size:24px;");
                var pid = "p" + j;
                p.setAttribute("id", pid);
                let pcontent = document.createTextNode("The cat is similar in anatomy to the other felid species: it has a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey. Its night vision and sense of smell are well developed");
                p.appendChild(pcontent);
                box.appendChild(p);

                let img = document.createElement('img');
                let imgid = "img" + j;
                img.setAttribute("id", imgid);
                img.setAttribute('alt', '');
                img.setAttribute('loading', 'lazy');
                img.style.height = "300px";
                img.style.width = "300px";
                img.src = 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=590&h=800&7E4B4CAD-CAE1-4726-93D6A160C2B068B2';
                box.appendChild(img);
            }
        }

    });