class CompSignal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" })
  }
  handleEvent(event) {
    if (event.type === "click") {
      const MessageEvent = new CustomEvent("message", {
        detail: { from: "Manz", message: " say hello!" },
        bubbles: true,
        composed: true
      })
      this.dispatchEvent(MessageEvent)
    }
  }
  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = /*html */`
      <button>Send message!</button>
      ${this.getStyles()}
    `
    return template
  }
  getStyles() {
    return /*html */ `
    <style>
     button {
        width: 300px;
        height: 30px;
        background-color: red;
        }
      </style>
    `
  }
  render() {
    this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
    this.shadowRoot.querySelector("button").addEventListener("click", this);
  }
  connectedCallback() {
    this.render()
  }
}
customElements.define("comp-signal", CompSignal )
