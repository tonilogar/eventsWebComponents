var pepe
export function rVariable() {
  return pepe
}
class CompSlot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" })
  }
  handleEvent(event) {
    if (event.type === "message") {
      event.detail.from = "Robot"
      const data = event.detail;
      pepe = data.message
      rVariable()
      console.log('data ', rVariable())
      this.shadowRoot.innerHTML = `
        <div>
          From ${data.from}:
          <span style="color:red">${data.message}</span>
        </div>
      `;
    }
  }
  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = /*html */`
      <div>No messages</button>
      ${this.getStyles()}
    `
    return template
  }
  getStyles() {
    return /*html */ `
    <style>
     div{
        width: 100px;
        height: 30px;
        background-color: yellow;
        }
      </style>
    `
  }
  render() {
    this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
    document.addEventListener("message", this);
  }
  connectedCallback() {
    this.render()
  }
}
customElements.define("comp-slot", CompSlot )