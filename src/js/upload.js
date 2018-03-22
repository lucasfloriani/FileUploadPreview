class FileUpload { // eslint-disable-line
  /**
   *
   */
  constructor(container, name, identifier, callback = false, labelTextAdd = 'Choose File', labelTextChange = 'Change File', buttonTextRemove = 'Remove File') {
    this.container = container;
    this.name = name;
    this.identifier = identifier;
    this.callback = callback;
    this.labelTextAdd = labelTextAdd;
    this.labelTextChange = labelTextChange;
    this.buttonTextRemove = buttonTextRemove;

    this.create();
  }

  /**
   *
   */
  create() {
    this.setUploadEvents();
  }

  /**
   *
   */
  getFileTemplate() {
    return `
      <li>
        <label for="${this.identifier}">${this.labelTextAdd}</label>
        <input type="file" name="${this.name}" id="${this.identifier}">
      </li>
    `;
  }

  /**
   *
   */
  setUploadEvents() {
    this.container.forEach((li) => {
      let input = li.children[1];

      input.addEventListener('change', this.changeFileEvent.bind(input, this.labelTextChange, this.callback));
    });
  }

  /**
   *
   */
  changeFileEvent(labelTextChange, callback) {
    const files = this.files;

    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.addEventListener((e) => {
        const loadedFile = e.target;

        if (file.type.match('image')) {
          this.style.backgroundImage = `url(${loadedFile.result}')`;
        }
      });

      // Add text to change file
      this.previousSibling.text = labelTextChange;

      // Read file
      reader.readAsDataURL(file);

      if (callback) {
        callback();
      }
    }
  }
}
