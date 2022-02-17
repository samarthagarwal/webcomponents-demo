const template = document.createElement("template");
template.innerHTML = `

  <style>

    #btn {
      color: white;
      width: 200px;
      padding: 16px 18px 16px 18px;
      font-size: 16px;
      border: none;
      border-radius: 32px;
      font-weight: 800;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    #btn:hover {
    }

    
  </style>

  <button id="btn">
    <slot id="logo" name="logo">D</slot>
    <slot name="seperator">|</slot>
    <slot name="text">Default Value</slot>
  </button>
`;

class QBButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(template.content.cloneNode(true));
    this.root.getElementById("btn").style.backgroundColor =
      this.getAttribute("color");
    this.root.getElementById("btn").addEventListener("mouseover", () => {
      this.root.getElementById("btn").style.backgroundColor =
        this.getAttribute("hoverColor") || "#41894e";
    });
    this.root.getElementById("btn").addEventListener("mouseout", () => {
      this.root.getElementById("btn").style.backgroundColor =
        this.getAttribute("color") || "#489557";
    });
  }

  disconnectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define("qb-button", QBButton);
