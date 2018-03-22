import './../scss/main.scss';

class FileUpload { /* eslint-disable-line */
  /**
   * Constructor of object FileUpload
   */
  constructor(container, name, identifier, callback = false) {
    this.container = document.querySelector(container);
    this.name = name;
    this.identifier = identifier;
    this.callback = callback;
  }

  /**
   * Function to create FileUpload container
   */
  run() {
    this.setUploadEvents();
  }

  /**
   * Return template of file upload field
   */
  getFileTemplate() {
    return `
      <li class="image-preview">
        <label for="${this.identifier}"></label>
        <input type="file" name="${this.name}" id="${this.identifier}">
      </li>
    `;
  }

  /**
   * Add events to input type file
   */
  setUploadEvents() {
    let childrens = Array.from(this.container.children);
    childrens.forEach((li) => {
      let input = li.children[1];
      input.addEventListener('change', this.changeFileEvent.bind(input, this.callback));
    });
  }

  /**
   * Event added in function setUploadEvents
   */
  changeFileEvent(callback) {
    const files = this.files;

    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const loadedFile = e.target;

        if (file.type.match('image')) {
          this.parentNode.style.backgroundImage = `url('${loadedFile.result}')`;
        }
      });

      // Read file
      reader.readAsDataURL(file);

      if (callback) {
        callback();
      }
    }
  }
}
