class JalasoftCard extends HTMLElement {
    constructor() {
        super();

       
        const shadow = this.attachShadow({ mode: 'open' });

        
        const card = document.createElement('div');
        card.classList.add('card');

        
        const logo = document.createElement('div');
        logo.classList.add('logo');
        
        const jala = document.createElement('span');
        jala.textContent = 'Jala';
        jala.classList.add('jala');

        const soft = document.createElement('span');
        soft.textContent = 'Soft';
        soft.classList.add('soft');

        logo.appendChild(jala);
        logo.appendChild(soft);

        
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const image = document.createElement('img');
        image.src = 'descarga.jpg'; 
        image.alt = 'Hirotaka Nifuji';

        imageContainer.appendChild(image);

        
        const info = document.createElement('div');
        info.classList.add('info');

        const name = document.createElement('div');
        name.textContent = 'Hirotaka Nifuji';
        name.classList.add('name');

        const role = document.createElement('div');
        role.textContent = 'Developer';
        role.classList.add('role');

        info.appendChild(name);
        info.appendChild(role);

        
        card.appendChild(logo);
        card.appendChild(imageContainer);
        card.appendChild(info);

        
        shadow.appendChild(card);

        
        const style = document.createElement('style');
        style.textContent = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }

        .card {
            display: flex;
            flex-direction: column;
            width: 250px;
            height: 350px;
            background-color: #ffffff;
            border: 1px solid #dcdcdc;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            text-align: center;
            font-family: Arial, sans-serif;
            border : 4px solid #000000;
        }

        .logo {
            background-color: #000000;
            color: #ffffff;
            padding: 10px 0;
            font-size: 24px;
            font-weight: bold;
            background-color: white;
        }

        .jala {
            color: #000000;
            background-color: #ffffff;
            padding: 0 2px;
            border-radius: 2px;
        }

        .soft {
            color: #ff0000;
        }

        .image-container {
            flex:2;
            /* margin: 10px 0; */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: black;
            color: white;
        }

        .image-container img {
            width: 150px;
            height: 150px;
            border-radius: 10%;
            margin: 20px 0;
            
        }

        .info {
            background-color: #ff0000;
            color: #ffffff;
            padding: 10px 0;
        }

        .name {
            font-size: 18px;
            font-weight: bold;
        }

        .role {
            font-size: 16px;
        }

        `;

        
        shadow.appendChild(style);
    }
}


customElements.define('jalasoft-card', JalasoftCard);
